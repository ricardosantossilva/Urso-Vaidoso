const { chromium } = require('playwright');
const { spawn } = require('child_process');
const fs = require('fs');
const TL = JSON.parse(fs.readFileSync('timeline.json'));
const FPS = 30, D = TL.duration;
const cuts = TL.lines.map(l => l.start).slice(1); const bounds = [0, ...cuts, D];
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await p.goto('file://' + process.cwd() + '/build.html'); await p.waitForTimeout(300);
  const list = [];
  let frame = 0;
  for (let s = 0; s < bounds.length - 1; s++) {
    if (process.env.ONLY && !process.env.ONLY.split(',').includes(String(s))) { list.push(`file 'seg${s}.mp4'`); continue; }
    const f0 = Math.round(bounds[s] * FPS), f1 = Math.round(bounds[s + 1] * FPS);
    const tmp = `seg${s}.tmp.mp4`, out = `seg${s}.mp4`;
    const ff = spawn('ffmpeg', ['-loglevel','error','-y','-f','image2pipe','-framerate','30','-c:v','mjpeg','-i','-','-c:v','libx264','-preset','veryfast','-crf','18','-pix_fmt','yuv420p','-r','30',tmp]);
    for (let f = f0; f < f1; f++) {
      await p.evaluate(t => render(t), f / FPS);
      const buf = await p.screenshot({ type: 'jpeg', quality: 92 });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    }
    ff.stdin.end();
    const code = await new Promise(r => ff.on('close', r));
    if (code !== 0) throw new Error('ffmpeg failed ' + s);
    fs.renameSync(tmp, out); list.push(`file '${out}'`);
    console.log('scene', s, f1 - f0, 'frames');
  }
  fs.writeFileSync('list.txt', list.join('\n'));
  await b.close();
})();
