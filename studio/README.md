# Urso Vaidoso video studio

Everything needed to make a daily Urso Vaidoso cartoon short (1080x1920, 30 fps, about 30 to 40 s) on a fresh machine.

## Characters
- **Urso Vaidoso** (`lib/bear.js`, `bearSVG(o)`): brown bear, navy three-piece suit, monocle, curly moustache. Voice: Kokoro `am_michael`, speed 1.05 (speaker code `B`). Vain, a bit dim, lovable.
- **Ursa, his girlfriend** (`lib/girl.js`, `girlSVG(o)`): lighter fur, teal dress, red bow, pearls. Voice: Kokoro `af_heart`, speed 1.08 (speaker code `G`). The smart one. She explains the tax point.
- Rig options (both): `eyes` open/smug/flat/wink (+ bear `shock`, girl `roll`), `mouth` 0..1, `brow`, `look`, `lean`, `squash`, `armL`/`armR` as `{sh, el}` degrees (0 = hanging; bear armR sh -100 points right, sh -150 raises it), `propL`/`propR` wrapped with `up(sh, el, svg)`, bear `sweat`, `monocle`, `twirl`, `blink`.

## Format that works
- English voices, Portuguese subtitles at the top (Inter 800, 68 px, white with black outline, key words yellow).
- Bear on the left (left 30, top 1000, 500x833), girl on the right (left 560, top 1060, 460x767). Only the speaker's mouth moves.
- Hook in the first 2 s tied to a real news story of the day. Bear misunderstands, girl explains the verified tax/accounting fact, a visual gag (stamp, faint, crying, money rain), punchline, CTA: "A Urso Vaidoso faz as contas. Desde 29 euros por mes + IVA", end card "Urso Vaidoso / Vaidade e ter as contas em dia / ursovaidoso.com".
- 3 or 4 backgrounds per video, white flash + whoosh at each change. **Never reuse a background**: check `../videos/BACKGROUNDS.md` and add the new ones after publishing. Each background is a function `xxxSVG(t)` returning a full 1080x1920 SVG with something gently moving.
- No singing (tested, rejected). No named real people or companies in the video or captions; refer to them generically ("um CEO famoso dos chips"). Never repeat unproven allegations.

## Pipeline (see `example/` = the 9 Nov 2026 "pulou a cerca" video)
1. `bash studio/setup.sh` (installs deps, downloads Kokoro models to ~/.cache/urso-tts).
2. Make a work dir outside the repo, copy `lib/*` and the example files into it, write your own background file.
3. `audio.py`: list of lines `(id, speaker, English text, [Portuguese subtitle chunks], gap after)`. Writes `voice.wav` + `timeline.json`. Numbers in English text should be spelled out ("twenty-nine euros").
4. `video.html`: keyframes `KB` (bear) and `KG` (girl) keyed to line starts, `worldAt(t)` picks the background, per-line props/cards. Build: `python3 -c "open('build.html','w').write(open('video.html').read().replace('__TL__', open('timeline.json').read()))"`.
5. `node preview.js 2.5 9.5 ...` writes `pv_<t>.jpg`; look at a contact sheet before rendering. Check text never overlaps, cards readable, nobody off-screen.
6. `sfx.py` writes `mix.wav` (voice + effects). `node render.js` writes one mp4 per line + `list.txt`. Then:
   `ffmpeg -y -f concat -safe 0 -i list.txt -c copy video.tmp.mp4 && ffmpeg -y -i video.tmp.mp4 -i mix.wav -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart OUT.mp4`
7. Copy to `videos/YYYY-MM-DD-topic.mp4`, commit, push. Public URL: `https://raw.githubusercontent.com/ricardosantossilva/Urso-Vaidoso/main/videos/<file>` (check with curl -I: 200 and right size).
8. Metricool (blogId 7963402, Europe/Lisbon): two posts, one TikTok, one YouTube. TikTok `tiktokData` {privacyOption PUBLIC_TO_EVERYONE, commercialContentOwnBrand true, isAigc true, title}. YouTube `youtubeData` {type short, privacy public, category EDUCATION, madeForKids false, isAiGeneratedContent false, title ending " #shorts", tags}.
9. Log the video in `../videos/LOG.md`.
