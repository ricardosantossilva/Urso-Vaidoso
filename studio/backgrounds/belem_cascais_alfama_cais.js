// New backgrounds, 1080x1920: belemSVG, cascaisSVG, alfamaSVG, caisSVG
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
const tiles = (x, y, w, h, c1 = '#2E6DB4', c2 = '#F4F1EA') => { let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c2}"/>`;
  for (let i = 0; i * 40 < w; i++) for (let j = 0; j * 40 < h; j++) s += `<g transform="translate(${x + i * 40 + 20} ${y + j * 40 + 20})"><rect x="-17" y="-17" width="34" height="34" fill="none" stroke="${c1}" stroke-width="3"/><circle r="7" fill="${c1}"/><path d="M-17 0 L0 -17 L17 0 L0 17 Z" fill="none" stroke="${c1}" stroke-width="2"/></g>`;
  return s; };
function belemSVG(t = 0) {
  // riverside: the old tower in the water on the left, a tiled pastry shop with blue awning on the right
  let waves = ''; for (let i = 0; i < 6; i++) waves += `<path d="M${(i * 230 + t * 40) % 1300 - 150} ${980 + (i % 3) * 30} q 30 -12 60 0" stroke="#D8EEF8" stroke-width="5" fill="none"/>`;
  const gulls = [0, 1].map(i => { const x = ((t * 70 + i * 500) % 1300) - 100, y = 520 + i * 80, f = Math.sin(t * 8 + i) * 10; return `<path d="M${x - 18} ${y - f} Q ${x - 8} ${y - 12} ${x} ${y} Q ${x + 8} ${y - 12} ${x + 18} ${y - f}" stroke="#4A5A6A" stroke-width="4" fill="none" stroke-linecap="round"/>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="url(#bsk)"/>
   <rect y="900" width="1080" height="300" fill="#5DA7CF"/>${waves}
   <g transform="translate(120 520)">
     <rect x="20" y="300" width="300" height="110" fill="#E8DFC9"/><rect x="60" y="80" width="200" height="330" fill="#F1E9D6"/>
     <rect x="80" y="40" width="160" height="60" fill="#E8DFC9"/>${[0, 1, 2, 3].map(i => `<rect x="${86 + i * 40}" y="20" width="24" height="26" fill="#E8DFC9"/>`).join('')}
     <path d="M140 150 q 20 -40 40 0 v 60 h -40 Z" fill="#6B7A88"/><path d="M90 250 q 16 -30 32 0 v 40 h-32 Z" fill="#6B7A88"/><path d="M198 250 q 16 -30 32 0 v 40 h-32 Z" fill="#6B7A88"/>
     ${[30, 290].map(x => `<rect x="${x}" y="260" width="30" height="50" fill="#E8DFC9"/><path d="M${x - 4} 262 q 19 -30 38 0 Z" fill="#D8CDB4"/>`).join('')}
   </g>
   ${gulls}
   <rect x="560" y="560" width="520" height="700" fill="#F7F3EA"/>${tiles(560, 760, 520, 500)}
   <rect x="600" y="840" width="440" height="420" fill="#3E2A1E"/>
   <rect x="620" y="1000" width="400" height="200" fill="#FFF3D6"/>${Array.from({ length: 9 }, (_, i) => `<ellipse cx="${660 + i * 42}" cy="${1060 + (i % 2) * 70}" rx="18" ry="12" fill="#E3A33A"/><ellipse cx="${660 + i * 42}" cy="${1058 + (i % 2) * 70}" rx="11" ry="6" fill="#B5651D"/>`).join('')}
   <path d="M560 760 L1080 760 L1080 840 L560 840 Z" fill="#1E4F8F"/>${Array.from({ length: 13 }, (_, i) => `<path d="M${560 + i * 40} 840 q 20 30 40 0" fill="${i % 2 ? '#1E4F8F' : '#F7F3EA'}"/>`).join('')}
   <rect x="590" y="620" width="460" height="100" rx="10" fill="#1E4F8F"/><text x="820" y="690" text-anchor="middle" font-family="Lora" font-weight="700" font-size="52" fill="#F7F3EA">PASTELARIA</text>
   <rect y="1260" width="1080" height="660" fill="#E9E2D3"/>
   ${Array.from({ length: 10 }, (_, r) => `<path d="M-40 ${1300 + r * 64} ${Array.from({ length: 12 }, (_, i) => `l 50 ${i % 2 ? -26 : 26}`).join(' ')} l 50 26" stroke="#2B2B2B" stroke-width="10" fill="none" opacity=".75"/>`).join('')}`,
   `<linearGradient id="bsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FD0F2"/><stop offset="1" stop-color="#F2F9FF"/></linearGradient>`);
}
function cascaisSVG(t = 0) {
  // marina: sea, moored yachts bobbing, masts, wooden pier
  const boat = (x, y, s, c, i) => { const b = Math.sin(t * 1.6 + i) * 6; return `<g transform="translate(${x} ${y + b}) scale(${s}) rotate(${Math.sin(t * 1.3 + i) * 1.5})">
    <line x1="0" y1="-420" x2="0" y2="-40" stroke="#9AA6B4" stroke-width="8"/><path d="M-240 -40 L240 -40 L190 40 L-190 40 Z" fill="${c}"/><rect x="-120" y="-100" width="200" height="60" rx="10" fill="#F7F7F7"/><rect x="-100" y="-90" width="160" height="30" rx="6" fill="#3E5A74"/><rect x="-240" y="-46" width="480" height="12" fill="#C9B48E"/></g>`; };
  return W(`<rect width="1080" height="1920" fill="url(#csk)"/>
   <path d="M0 760 C 200 700, 420 740, 620 700 C 800 670, 960 720, 1080 690 L1080 900 L0 900 Z" fill="#9BB28A"/>
   ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${60 + i * 170}" y="${760 - (i % 3) * 30}" width="110" height="${140 + (i % 3) * 30}" fill="${['#F6EFE4', '#F3C969', '#F2D7A8'][i % 3]}"/><path d="M${54 + i * 170} ${760 - (i % 3) * 30} L${115 + i * 170} ${720 - (i % 3) * 30} L${176 + i * 170} ${760 - (i % 3) * 30} Z" fill="#B65A3A"/>`).join('')}
   <rect y="880" width="1080" height="560" fill="#2F86B7"/>
   ${Array.from({ length: 10 }, (_, i) => `<path d="M${(i * 150 + t * 30) % 1250 - 100} ${930 + (i % 5) * 90} q 35 -14 70 0" stroke="#BFE3F5" stroke-width="5" fill="none" opacity=".8"/>`).join('')}
   ${boat(200, 1110, 0.7, '#F7F7F7', 0)}${boat(880, 1080, 0.6, '#123259', 1)}${boat(560, 1200, 1.05, '#F7F7F7', 2)}
   <rect y="1420" width="1080" height="500" fill="#A47A52"/>${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${1440 + i * 56}" x2="1080" y2="${1440 + i * 56}" stroke="#8A6340" stroke-width="5"/>`).join('')}
   ${[90, 990].map(x => `<rect x="${x - 18}" y="1340" width="36" height="110" rx="8" fill="#6B4A32"/><rect x="${x - 22}" y="1336" width="44" height="14" rx="6" fill="#5A3C28"/>`).join('')}`,
   `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FB0E8"/><stop offset="1" stop-color="#DDF2FF"/></linearGradient>`);
}
function alfamaSVG(t = 0) {
  // steep old quarter: stacked houses climbing to the castle, tiled facades, laundry lines flapping
  let houses = '';
  const cols = ['#F3C969', '#E8A98F', '#F6EFE4', '#B8D6C9', '#F2D7A8', '#D9B8D9'];
  for (let r = 0; r < 4; r++) for (let i = 0; i < 6; i++) { const x = i * 185 - 40 + (r % 2) * 60, y = 420 + r * 190, h = 230;
    houses += `<rect x="${x}" y="${y}" width="190" height="${h}" fill="${cols[(i + r * 2) % 6]}"/><path d="M${x - 8} ${y} L${x + 95} ${y - 50} L${x + 198} ${y} Z" fill="#B65A3A"/>
     <rect x="${x + 30}" y="${y + 40}" width="44" height="64" fill="#3E5A74"/><rect x="${x + 110}" y="${y + 40}" width="44" height="64" fill="#3E5A74"/><rect x="${x + 24}" y="${y + 100}" width="56" height="10" fill="#6B4A32"/>`; }
  let laundry = '';
  [[640, 1], [1010, 2]].forEach(([y, k]) => { laundry += `<path d="M0 ${y} Q 540 ${y + 50} 1080 ${y}" stroke="#555" stroke-width="3" fill="none"/>`;
    for (let i = 0; i < 7; i++) { const x = 70 + i * 150, yy = y + 40 * Math.sin(Math.PI * x / 1080) * 0.9, sw = Math.sin(t * 3 + i + k) * 8;
      laundry += `<g transform="translate(${x} ${yy}) rotate(${sw})"><rect x="-34" y="0" width="68" height="${i % 2 ? 90 : 60}" rx="6" fill="${['#E2365B', '#F7F7F7', '#2E6DB4', '#FFD45C', '#7CC08A'][(i + k) % 5]}"/></g>`; } });
  return W(`<rect width="1080" height="1920" fill="url(#ask)"/>
   <g fill="#C9B48E"><rect x="300" y="160" width="480" height="150"/>${Array.from({ length: 10 }, (_, i) => `<rect x="${300 + i * 50}" y="130" width="30" height="34"/>`).join('')}<rect x="420" y="90" width="90" height="220"/><rect x="600" y="110" width="80" height="200"/></g>
   <path d="M0 320 C 300 260, 760 260, 1080 320 L1080 500 L0 500 Z" fill="#6BA05E"/>
   ${houses}${laundry}
   <rect y="1180" width="1080" height="740" fill="#E6DDCB"/>${tiles(0, 1180, 1080, 120, '#1E4F8F', '#F4F1EA')}
   <path d="M0 1300 L1080 1300 L1080 1920 L0 1920 Z" fill="#D8CDBD"/>
   ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${1330 + i * 50}" x2="1080" y2="${1330 + i * 50}" stroke="#C4B8A4" stroke-width="4"/>`).join('')}
   <g transform="translate(980 1300)"><rect x="-6" y="-360" width="12" height="360" fill="#2B3440"/><path d="M-6 -360 q 40 0 60 30" stroke="#2B3440" stroke-width="10" fill="none"/><rect x="38" y="-336" width="40" height="44" rx="6" fill="#2B3440"/><rect x="44" y="-330" width="28" height="30" fill="#FFE9A8"/></g>`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC3EC"/><stop offset="1" stop-color="#EAF6FF"/></linearGradient>`);
}
function caisSVG(t = 0) {
  // night street painted pink, string lights, umbrellas hanging overhead, neon glow
  let umb = ''; for (let i = 0; i < 9; i++) { const x = 60 + i * 120, y = 260 + (i % 3) * 60, sw = Math.sin(t * 1.5 + i) * 4;
    umb += `<g transform="translate(${x} ${y}) rotate(${sw})"><path d="M-60 0 Q 0 -70 60 0 Z" fill="${['#FFD45C', '#E2365B', '#2E6DB4', '#7CC08A', '#F08A6A'][i % 5]}"/><line x1="0" y1="0" x2="0" y2="40" stroke="#333" stroke-width="4"/></g>`; }
  let bulbs = ''; for (let k = 0; k < 2; k++) for (let i = 0; i < 14; i++) { const x = i * 80 + 20, y = 520 + k * 120 + Math.sin(Math.PI * i / 13) * 50, on = 0.6 + 0.4 * Math.sin(t * 4 + i * 1.7 + k);
    bulbs += `<circle cx="${x}" cy="${y}" r="10" fill="#FFE9A8" opacity="${on}"/><circle cx="${x}" cy="${y}" r="26" fill="#FFE9A8" opacity="${on * 0.2}"/>`; }
  return W(`<rect width="1080" height="1920" fill="#1A1638"/>
   ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<circle cx="${(i * 197) % 1080}" cy="${40 + (i * 53) % 160}" r="3" fill="#fff" opacity=".7"/>`).join('')}
   <rect x="0" y="380" width="260" height="900" fill="#3A2E5A"/><rect x="820" y="380" width="260" height="900" fill="#352A52"/>
   ${[0, 1, 2].map(r => `<rect x="40" y="${460 + r * 220}" width="70" height="110" fill="#FFCF7A" opacity=".8"/><rect x="150" y="${460 + r * 220}" width="70" height="110" fill="#4A3E6A"/><rect x="860" y="${460 + r * 220}" width="70" height="110" fill="#4A3E6A"/><rect x="970" y="${460 + r * 220}" width="70" height="110" fill="#FFCF7A" opacity=".8"/>`).join('')}
   <rect x="260" y="380" width="560" height="900" fill="#2A2248"/>
   <rect x="300" y="900" width="480" height="70" rx="35" fill="none" stroke="#FF5FA2" stroke-width="8" opacity="${0.75 + 0.25 * Math.sin(t * 6)}"/><text x="540" y="950" text-anchor="middle" font-family="Inter" font-weight="900" font-size="44" fill="#FF8CC0" opacity="${0.75 + 0.25 * Math.sin(t * 6)}">ABERTO ATÉ TARDE</text>
   ${umb}${bulbs}
   <path d="M0 1280 L1080 1280 L1080 1920 L0 1920 Z" fill="#E86FA0"/><path d="M0 1280 L1080 1280 L1080 1320 L0 1320 Z" fill="#C9578A"/>
   ${Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${1380 + i * 90}" x2="1080" y2="${1380 + i * 90}" stroke="#D45E92" stroke-width="5"/>`).join('')}
   <ellipse cx="540" cy="1500" rx="520" ry="120" fill="#FFB0D2" opacity=".18"/>`);
}
if (typeof module !== 'undefined') module.exports = { belemSVG, cascaisSVG, alfamaSVG, caisSVG };
