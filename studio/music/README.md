# Urso Vaidoso music videos ("Uma dica por dia")

Weekday music videos: a short pop song made in Suno, with the bear and Ursa dancing a synced routine and a troupe of girl bears in the chorus. Model: `video_uma_dica_por_dia.html` (13 Nov 2026), the version the owner approved.

## Format (owner-approved, 13 Nov 2026)
- Song at most 40 s. Structure: [Intro: accordion] short, [Verse] 4 lines with ONE verified tax/money tip, [Chorus] always the same 4 lines, [Outro: spoken female voice] "Siga para a dica de amanhã. Hello arroba ursovaidoso ponto com".
- Chorus (never changes, it is the series' hook; chosen by the owner on 14 Nov 2026, "Vaidoso com razão"):
  Sou vaidoso, sim, e com toda a razão / Contas em dia, que bela sensação! / Siga o Urso, não seja preguiçoso / Uma dica por dia e até o fisco fica invejoso!
  In Suno, write it under [Chorus] exactly like this, one line per line. In lines.json and the subtitles use the same 4 lines. Pulsing "+ Seguir · 1 dica por dia" button on "Siga o Urso". (Videos up to 14 Nov 2026 used the earlier chorus "Ai, ai, ai, siga o Urso Vaidoso...".)
- Suno style (the owner's favourite, "Version C"): `Pop; upbeat 118 BPM bounce; accordion intro, funky bass and bright brass section; high, light male vocal with clipped rhythmic staccato phrasing and a catchy singalong chorus; short plate reverb and a touch of vocal slapback echo; European Portuguese; short, under 40 seconds`. European Portuguese, clean (no double meanings), the tip must be exact.
- Video: both look at the camera first, then dance together like a pop music video (snap into poses on the beat and hold, mirrored), never flailing. Chorus: they step together, 6 girl bears in coloured dresses in a V behind them doing the same routine. Outro: final pose, Ursa points at "+ Seguir", email card, end card.
- Subtitles = the lyrics, timed to the singing with `align.py`. Hook card in the first seconds with the question the tip answers. 3 verse cards with the key fact. Pulsing "+ Seguir · 1 dica por dia" in the chorus.
- Backgrounds: 3 per video (verse, chorus, outro), lively and moving, never reused (check `../../videos/BACKGROUNDS.md`). The approved look is a festive street for the verse, a disco/dance floor for the chorus, a rooftop at sunset for the outro: keep that energy with NEW places each time.
- hello@ursovaidoso.com always on screen at the end and in every caption.

## Pipeline
1. Song in Suno (Chrome, account hello@ursovaidoso.com, Pro plan): Create > Advanced, paste lyrics and style, title "Uma dica por dia: <tema>", Create. Pick the take closest to 35 to 40 s with the clearest words. Its page > ... > Download > M4A > Download (uses 1 of the 20 monthly Pro downloads).
2. The file lands in the owner's Mac Downloads folder ("<title>.m4a"). Find it with the remote-devices tools (device_list_dir on /Users/ricardosantossilva/Downloads, newest .m4a) and copy it into the container with device_stage_files (it appears under /mnt/user-data/uploads/Downloads/).
3. `python3 studio/music/align.py song.m4a lines.json align.json` (first run downloads the models from GitHub; about 3 to 5 minutes). Check the printed start times rise steadily and the match scores; fix any obvious outlier by hand from the `windows` transcripts in align.json.
4. Copy `video_uma_dica_por_dia.html`, `rend.js` and `../lib/bear.js`, `../lib/girl.js`, `../lib/preview.js` to a work dir, write a new backgrounds file (functions used by `worldAt`), and edit: `D`, `TV` (first sung line), `LY` (start, text), `T_CHORUS`, `T_OUTRO` (first spoken outro line), `T_END` (end card, about 2 s before the end), `bpm` and `B0` (first beat) from align.json, the hook card and the 3 verse cards, the `hl()` keywords, and the 40.76 duration in rend.js.
5. Preview contact sheet, look at it, fix overlaps. `node rend.js`, then mux: `ffmpeg -i video.mp4 -i song.m4a -map 0:v -map 1:a -c:v copy -c:a aac -b:a 192k -shortest -movflags +faststart OUT.mp4`.
6. `videos/YYYY-MM-DD-musica-<tema>.mp4`, LOG.md row, BACKGROUNDS.md line, commit, push, publish through Metricool (TikTok, YouTube Short, Instagram Reel) exactly like the daily videos.
