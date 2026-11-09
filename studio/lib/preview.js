const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  p.on('pageerror', e => console.log('ERR', e.message)); p.on('console', m => { if (m.type()==='error') console.log('CERR', m.text()); });
  await p.goto('file://' + process.cwd() + '/build.html'); await p.waitForTimeout(400);
  const ts = process.argv.slice(2).map(Number);
  for (const t of ts) { await p.evaluate(t => render(t), t); await p.screenshot({ path: `pv_${t}.jpg`, type: 'jpeg', quality: 80 }); }
  await b.close();
})();
