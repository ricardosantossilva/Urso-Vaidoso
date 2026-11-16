// New backgrounds: tvSVG (TV news studio with a rising GDP chart), padariaSVG (Portuguese bakery at 4 a.m. with glowing ovens), tomarSVG (Tomar-style templar convent on a hill over the Nabao river with a turning waterwheel)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function tvSVG(t = 0) {
  const pts = [[0,0],[1,-30],[2,-10],[3,-60],[4,-50],[5,-110],[6,-95],[7,-170]];
  const grow = Math.min(1, (t % 6) / 3);
  const n = Math.max(2, Math.floor(grow * pts.length));
  const path = pts.slice(0, n).map((p, i) => `${i ? 'L' : 'M'}${170 + p[0] * 100} ${780 + p[1]}`).join(' ');
  let tick = ''; const tx = -((t * 120) % 900);
  for (let k = 0; k < 3; k++) tick += `<text x="${tx + k * 900}" y="1268" font-family="Inter" font-weight="800" font-size="34" fill="#fff">PIB +2,3% · EURO +1% · BOLSA ▲ · PREÇOS ▲ · </text>`;
  const spot = i => `<path d="M${200 + i * 340} 0 L${100 + i * 340} 1300 L${330 + i * 340} 1300 Z" fill="#fff" opacity="${0.05 + 0.03 * Math.sin(t * 2 + i)}"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#tvb)"/>
   ${[0,1,2].map(spot).join('')}
   <rect x="80" y="420" width="920" height="480" rx="18" fill="#0E1B33" stroke="#3B6FB6" stroke-width="8"/>
   ${[0,1,2,3].map(i => `<line x1="140" y1="${520 + i * 90}" x2="960" y2="${520 + i * 90}" stroke="#25406B" stroke-width="3"/>`).join('')}
   <path d="${path}" stroke="#4FE08A" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
   <circle cx="${170 + pts[n - 1][0] * 100}" cy="${780 + pts[n - 1][1]}" r="16" fill="#4FE08A"/>
   <text x="140" y="480" font-family="Inter" font-weight="900" font-size="40" fill="#9FC3F0">ECONOMIA</text>
   <rect y="1230" width="1080" height="56" fill="#C8202C"/>${tick}
   <rect y="1286" width="1080" height="634" fill="#16233D"/>
   <path d="M0 1286 L1080 1286 L1080 1340 L0 1340 Z" fill="#22345A"/>
   <rect x="120" y="1500" width="840" height="60" rx="30" fill="#2B4170"/><rect x="160" y="1560" width="40" height="300" fill="#1E2E50"/><rect x="880" y="1560" width="40" height="300" fill="#1E2E50"/>
   ${Array.from({length:12},(_,i)=>`<circle cx="${(i*97)%1080}" cy="${1000+((i*61)%200)}" r="4" fill="#9FC3F0" opacity="${0.3+0.3*Math.sin(t*3+i)}"/>`).join('')}`,
   `<linearGradient id="tvb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1630"/><stop offset="1" stop-color="#23407A"/></linearGradient>`);
}
function padariaSVG(t = 0) {
  const glow = 0.75 + 0.15 * Math.sin(t * 4);
  let steam = ''; for (let i = 0; i < 4; i++) { const k = ((t * 0.5 + i / 4) % 1); steam += `<circle cx="${300 + i * 150 + Math.sin(k * 6 + i) * 20}" cy="${700 - k * 260}" r="${20 + k * 30}" fill="#fff" opacity="${0.35 * (1 - k)}"/>`; }
  const loaf = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="44" ry="26" fill="#C98A3E"/><path d="M${x-24} ${y-6} l14 -8 M${x-4} ${y-8} l14 -8 M${x+16} ${y-6} l12 -8" stroke="#8E5A22" stroke-width="5"/>`;
  return W(`<rect width="1080" height="1920" fill="#3A2A22"/>
   <rect x="0" y="380" width="1080" height="920" fill="#E9D9BF"/>
   ${Array.from({length:8},(_,r)=>Array.from({length:9},(_,c)=>`<rect x="${c*120+(r%2)*60-30}" y="${380+r*60}" width="116" height="56" fill="${(r+c)%3?'#F3E7D2':'#DCEBF5'}" stroke="#CDBA9A" stroke-width="2"/>`).join('')).join('')}
   <rect x="160" y="740" width="760" height="420" rx="40" fill="#8E4A2E"/><rect x="200" y="780" width="680" height="340" rx="30" fill="#5B2C1A"/>
   <path d="M260 1080 Q 540 840 820 1080 Z" fill="#FF8A2B" opacity="${glow}"/><path d="M330 1080 Q 540 920 750 1080 Z" fill="#FFD45C" opacity="${glow}"/>
   ${loaf(380,1040)}${loaf(540,1030)}${loaf(700,1040)}
   ${steam}
   <rect x="0" y="1160" width="1080" height="140" fill="#B07A4A"/><rect x="0" y="1160" width="1080" height="20" fill="#D9A877"/>
   ${[120,260,820,960].map(x=>loaf(x,1150)).join('')}
   <rect y="1300" width="1080" height="620" fill="#C9B79A"/>${Array.from({length:6},(_,r)=>Array.from({length:7},(_,c)=>`<rect x="${c*160+(r%2)*80-40}" y="${1300+r*110}" width="156" height="106" fill="${(r+c)%2?'#BFAA8A':'#D3C2A4'}"/>`).join('')).join('')}`);
}
function tomarSVG(t = 0) {
  const wheel = (cx, cy, r) => { const a = t * 30; let sp = ''; for (let i = 0; i < 12; i++) { const ang = (a + i * 30) * Math.PI / 180; sp += `<line x1="${cx}" y1="${cy}" x2="${cx + Math.cos(ang) * r}" y2="${cy + Math.sin(ang) * r}" stroke="#6B4A32" stroke-width="10"/><rect x="${cx + Math.cos(ang) * r - 14}" y="${cy + Math.sin(ang) * r - 14}" width="28" height="28" fill="#8A6040" transform="rotate(${a + i * 30} ${cx + Math.cos(ang) * r} ${cy + Math.sin(ang) * r})"/>`; } return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#6B4A32" stroke-width="14"/>${sp}<circle cx="${cx}" cy="${cy}" r="22" fill="#4A3020"/>`; };
  let rip = ''; for (let i = 0; i < 12; i++) rip += `<rect x="${(i * 97 + t * 30) % 1100 - 20}" y="${1170 + (i % 4) * 30}" width="${40 + (i % 3) * 25}" height="5" rx="2" fill="#fff" opacity=".45"/>`;
  let birds = ''; for (let i = 0; i < 3; i++) { const x = (t * 50 + i * 300) % 1200 - 60, y = 470 + i * 40 + Math.sin(t * 2 + i) * 10; birds += `<path d="M${x} ${y} q 14 -14 28 0 q 14 -14 28 0" stroke="#3A3040" stroke-width="5" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#tsk)"/>
   <circle cx="860" cy="560" r="80" fill="#FFD9A0" opacity=".9"/>
   ${birds}
   <path d="M0 900 Q 300 640 560 700 Q 800 760 1080 820 L1080 1100 L0 1100 Z" fill="#6E8E4E"/>
   <g transform="translate(470 560)"><rect x="-200" y="60" width="400" height="120" fill="#E8DCC4"/>${[-200,-140,-80,-20,40,100,160].map(x=>`<rect x="${x}" y="40" width="40" height="30" fill="#E8DCC4"/>`).join('')}
     <rect x="200" y="0" width="90" height="180" fill="#E0D2B6"/>${[200,240].map(x=>`<rect x="${x+5}" y="-22" width="30" height="24" fill="#E0D2B6"/>`).join('')}
     <polygon points="-60,60 -60,-40 -20,-70 20,-70 60,-40 60,60" fill="#F1E6CF"/><path d="M-60 -40 L0 -110 L60 -40 Z" fill="#B65A3A"/><rect x="-10" y="-20" width="20" height="40" rx="10" fill="#5B4A3A"/></g>
   ${Array.from({length:7},(_,i)=>`<g transform="translate(${80+i*150} ${960+(i%2)*30}) rotate(${Math.sin(t*1.5+i)*3})"><rect x="-6" y="0" width="12" height="80" fill="#5A4030"/><circle cy="-10" r="${40+(i%3)*8}" fill="#4F7A3E"/></g>`).join('')}
   <rect y="1100" width="1080" height="200" fill="#3E7FA6"/>${rip}
   <rect x="640" y="980" width="40" height="200" fill="#8E7A62"/>
   ${wheel(760, 1120, 150)}
   <rect y="1300" width="1080" height="620" fill="#D8CBB0"/><rect y="1300" width="1080" height="22" fill="#B9AA8C"/>
   ${Array.from({length:10},(_,i)=>`<circle cx="${(i*131)%1080}" cy="${1360+(i*73)%520}" r="5" fill="#C2B392"/>`).join('')}`,
   `<linearGradient id="tsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7B57A"/><stop offset=".6" stop-color="#FBD9A8"/><stop offset="1" stop-color="#FDEBCB"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { tvSVG, padariaSVG, tomarSVG };
