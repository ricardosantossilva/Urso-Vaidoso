const { chromium } = require('playwright'); const { spawn } = require('child_process'); const fs=require('fs');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1080,height:1920},deviceScaleFactor:1});
await p.goto('file://'+process.cwd()+'/build.html');await p.waitForTimeout(300);
const ff=spawn('ffmpeg',['-loglevel','error','-y','-f','image2pipe','-framerate','30','-c:v','mjpeg','-i','-','-c:v','libx264','-preset','veryfast','-crf','20','-pix_fmt','yuv420p','-r','30','-movflags','+faststart','out.tmp.mp4']);
for(let f=0;f<Math.round(40.76*30);f++){await p.evaluate(t=>render(t),f/30);const buf=await p.screenshot({type:'jpeg',quality:92});if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r));}
ff.stdin.end();const c=await new Promise(r=>ff.on('close',r));if(c)throw new Error('ffmpeg');fs.renameSync('out.tmp.mp4','Urso_Vaidoso_Uma_Dica_por_Dia_preview.mp4');await b.close();})();
