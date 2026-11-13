#!/usr/bin/env python3
"""Find when each lyric line starts in a Suno song.

Usage: python3 align.py song.m4a lines.json out.json
lines.json: list of the sung/spoken lines in order (no section tags).
Writes out.json: {"duration": s, "bpm": x, "first_beat": s, "lines": [{"text", "start"}], "windows": [...]}

How: separates the vocals (spleeter 2-stem, sherpa-onnx), transcribes 2.5 s windows every
0.25 s with Whisper small (Portuguese), then walks the lyric lines in order and puts each
line where its first words are heard, snapping to the first vocal onset in that window.
Models come from the sherpa-onnx GitHub releases (Hugging Face is blocked here); see setup().
"""
import json, os, re, subprocess, sys, unicodedata
from difflib import SequenceMatcher
import numpy as np

HERE = os.path.dirname(os.path.abspath(__file__))
MD = os.path.expanduser('~/.cache/urso-music')
WHISPER = os.path.join(MD, 'sherpa-onnx-whisper-small')
SPLEET = os.path.join(MD, 'sherpa-onnx-spleeter-2stems-fp16')
REL = 'https://github.com/k2-fsa/sherpa-onnx/releases/download'


def setup():
    os.makedirs(MD, exist_ok=True)
    try:
        import sherpa_onnx, librosa, soundfile  # noqa
    except ImportError:
        subprocess.run([sys.executable, '-m', 'pip', 'install', '--break-system-packages', '-q', 'sherpa-onnx', 'librosa', 'soundfile'], check=True)
    for url, d in [(f'{REL}/asr-models/sherpa-onnx-whisper-small.tar.bz2', WHISPER),
                   (f'{REL}/source-separation-models/sherpa-onnx-spleeter-2stems-fp16.tar.bz2', SPLEET)]:
        if not os.path.isdir(d):
            tb = d + '.tar.bz2'
            subprocess.run(['curl', '-sSL', '-o', tb, url], check=True)
            subprocess.run(['tar', 'xjf', tb, '-C', MD], check=True)
            os.remove(tb)


def norm(s):
    s = unicodedata.normalize('NFKD', s.lower())
    s = ''.join(c for c in s if not unicodedata.combining(c))
    s = s.replace('@', ' arroba ').replace('.com', ' ponto com')
    return re.sub(r'[^a-z0-9 ]+', ' ', s).split()


def first_words_score(key, txt, n):
    w = norm(txt)
    return SequenceMatcher(None, ' '.join(key[:n]), ' '.join(w[:n])).ratio() if w else 0.0


def align_lines(lines, wins, y, sr, e, hop, rec):
    """Coarse: earliest 2.5 s window whose transcript starts with the line's first 3 words.
    Fine: around that point, decode 1.6 s chunks every 0.15 s and keep the earliest that
    starts with the line's first 2 words; then snap to the vocal onset."""
    res, prev = [], -1.0
    for ln in lines:
        key = norm(ln)
        cands = [(a, first_words_score(key, t, 3)) for a, t in wins if prev + 0.8 <= a <= prev + 12]
        cands = [c for c in cands if c[1] > 0]
        if cands:
            top = max(c[1] for c in cands)
            a0, sc0 = next((a, sc) for a, sc in cands if sc >= max(0.55, top - 0.1))
        else:
            a0, sc0 = prev + 3.0, 0.0
        best = a0
        for c in np.arange(max(0.0, prev + 0.5, a0 - 1.2), a0 + 0.9, 0.15):
            chunk = y[int(c * sr):int((c + 1.6) * sr)]
            if len(chunk) < int(0.5 * sr):
                break
            st = rec.create_stream(); st.accept_waveform(sr, chunk); rec.decode_stream(st)
            if first_words_score(key, st.result.text, 2) >= 0.7:
                best = c; break
        i0 = int(best * sr / hop); seg = e[i0:i0 + int(1.0 * sr / hop)]
        on = next((k for k in range(len(seg)) if seg[k] > 0.2), 0)
        start = round(best + on * hop / sr, 2)
        res.append({'text': ln, 'start': start, 'match': round(sc0, 2)})
        prev = start
    return res


def main(song, lines_path, out_path):
    setup()
    import sherpa_onnx, soundfile as sf, librosa
    tmp = os.path.join(MD, 'work'); os.makedirs(tmp, exist_ok=True)
    w44, v16 = os.path.join(tmp, 'mix44.wav'), os.path.join(tmp, 'voc16.wav')
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', song, '-ac', '2', '-ar', '44100', w44], check=True)
    # vocals
    cfg = sherpa_onnx.OfflineSourceSeparationConfig(model=sherpa_onnx.OfflineSourceSeparationModelConfig(
        spleeter=sherpa_onnx.OfflineSourceSeparationSpleeterModelConfig(vocals=f'{SPLEET}/vocals.fp16.onnx', accompaniment=f'{SPLEET}/accompaniment.fp16.onnx'), num_threads=4))
    x, sr = sf.read(w44, dtype='float32'); x = np.ascontiguousarray(x.T)
    out = sherpa_onnx.OfflineSourceSeparation(cfg).process(sample_rate=sr, samples=x)
    sf.write(os.path.join(tmp, 'voc44.wav'), np.array(out.stems[0].data).T, out.sample_rate)
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', os.path.join(tmp, 'voc44.wav'), '-ac', '1', '-ar', '16000', v16], check=True)
    y, sr = sf.read(v16, dtype='float32'); dur = len(y) / sr
    # beat
    ym, srm = librosa.load(w44, sr=22050, mono=True)
    tempo, beats = librosa.beat.beat_track(y=ym, sr=srm); bt = librosa.frames_to_time(beats, sr=srm)
    # vocal energy (10 ms)
    hop = 160; e = np.array([np.sqrt(np.mean(y[i:i + 400] ** 2)) for i in range(0, len(y) - 400, hop)]); e /= (np.percentile(e, 98) + 1e-9)
    # windows
    rec = sherpa_onnx.OfflineRecognizer.from_whisper(encoder=f'{WHISPER}/small-encoder.int8.onnx', decoder=f'{WHISPER}/small-decoder.int8.onnx',
                                                     tokens=f'{WHISPER}/small-tokens.txt', language='pt', task='transcribe', num_threads=8)
    wins = []
    for a in np.arange(0, max(0.5, dur - 1.0), 0.5):
        st = rec.create_stream(); st.accept_waveform(sr, y[int(a * sr):int(min(dur, a + 2.5) * sr)]); rec.decode_stream(st)
        wins.append((round(float(a), 2), st.result.text.strip()))
    lines = json.load(open(lines_path))
    res = align_lines(lines, wins, y, sr, e, hop, rec)
    vstart = next((k * hop / sr for k in range(len(e)) if e[k] > 0.25), 0)
    json.dump({'duration': round(dur, 2), 'bpm': round(float(np.atleast_1d(tempo)[0]), 1), 'first_beat': round(float(bt[0]), 2) if len(bt) else 0,
               'vocals_start': round(vstart, 2), 'lines': res, 'windows': wins}, open(out_path, 'w'), ensure_ascii=False, indent=1)
    for r in res: print(f"{r['start']:6.2f}  ({r['match']})  {r['text']}")


if __name__ == '__main__':
    main(*sys.argv[1:4])
