// New backgrounds (2026-11-11 fuel VAT video):
// postoSVG: motorway service station at morning with price pylon ticking down
// douroSVG: Douro valley vineyard terraces in autumn colours, river with a rabelo boat
// magustoSVG: chestnut grove in a schist village (Tras-os-Montes) with a magusto bonfire and smoke
// aveiroSVG: Aveiro canal with painted moliceiro boats and art nouveau facades
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function postoSVG(t = 0) {
  const dg = (2.205 - Math.min(1, t / 4) * 0.11).toFixed(3).replace('.', ',');
  const gs = (2.006 - Math.min(1, t / 4) * 0.13).toFixed(3).replace('.', ',');
  let cars = '';
  for (let i = 0; i < 3; i++) {
    const x = ((t * 260 + i * 470) % 1500) - 200, c = ['#2E6DB4', '#E2365B', '#F3C969'][i];
    cars += `<g transform="translate(${x} 905)"><rect x="-70" y="-34" width="140" height="40" rx="14" fill="${c}"/><path d="M-40 -34 L-24 -60 L30 -60 L46 -34 Z" fill="${c}"/><rect x="-30" y="-56" width="54" height="20" rx="4" fill="#CFE8F5"/><circle cx="-40" cy="8" r="14" fill="#222"/><circle cx="40" cy="8" r="14" fill="#222"/></g>`;
  }
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>
   <circle cx="200" cy="560" r="70" fill="#FFE7A0" opacity=".9"/>
   ${[0, 1, 2].map(i => `<ellipse cx="${(i * 400 + t * 15) % 1300 - 100}" cy="${470 + i * 40}" rx="110" ry="34" fill="#fff" opacity=".85"/>`).join('')}
   <path d="M0 860 Q 270 760 540 830 T 1080 800 L1080 900 L0 900 Z" fill="#9BBF7A"/>
   <rect y="880" width="1080" height="70" fill="#5B6370"/><rect y="912" width="1080" height="6" fill="#fff" stroke-dasharray="40 30" opacity=".8"/>
   ${cars}
   <rect y="950" width="1080" height="970" fill="#C9CDD3"/>
   <rect x="40" y="640" width="760" height="70" fill="#1F7A4D"/><rect x="40" y="710" width="760" height="18" fill="#F3C969"/>
   ${[120, 420, 720].map(x => `<rect x="${x - 14}" y="728" width="28" height="330" fill="#E9ECEF"/>`).join('')}
   ${[260, 580].map(x => `<g transform="translate(${x} 960)"><rect x="-50" y="0" width="100" height="160" rx="10" fill="#F4F6F8"/><rect x="-36" y="18" width="72" height="44" rx="6" fill="#1B2430"/><rect x="-28" y="78" width="56" height="12" rx="4" fill="#1F7A4D"/><path d="M50 60 q 30 0 30 40 v 50" stroke="#222" stroke-width="8" fill="none"/></g>`).join('')}
   <g transform="translate(920 420)"><rect x="-10" y="380" width="20" height="300" fill="#6C757D"/><rect x="-110" y="0" width="220" height="400" rx="16" fill="#1F7A4D"/>
     <rect x="-92" y="20" width="184" height="60" rx="8" fill="#F3C969"/><text x="0" y="62" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="#1F7A4D">POSTO</text>
     <text x="0" y="130" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">GASÓLEO</text>
     <rect x="-92" y="142" width="184" height="66" rx="6" fill="#111"/><text x="0" y="190" text-anchor="middle" font-family="Inter" font-weight="900" font-size="46" fill="#FFB020">${dg}</text>
     <text x="0" y="252" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#fff">GASOLINA 95</text>
     <rect x="-92" y="264" width="184" height="66" rx="6" fill="#111"/><text x="0" y="312" text-anchor="middle" font-family="Inter" font-weight="900" font-size="46" fill="#FFB020">${gs}</text>
     <path d="M-60 360 l 20 20 l 20 -20" stroke="#7CFC9A" stroke-width="8" fill="none" opacity="${0.5 + 0.5 * Math.sin(t * 6)}"/><path d="M20 360 l 20 20 l 20 -20" stroke="#7CFC9A" stroke-width="8" fill="none" opacity="${0.5 + 0.5 * Math.sin(t * 6)}"/></g>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${i * 200 - 40}" y="${1500 + (i % 2) * 120}" width="140" height="14" fill="#fff" opacity=".7"/>`).join('')}`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EC9F0"/><stop offset="1" stop-color="#FCE9C8"/></linearGradient>`);
}

function douroSVG(t = 0) {
  const terr = (y, c, amp, ph) => `<path d="M0 ${y} ${Array.from({ length: 12 }, (_, i) => `Q ${i * 100 + 50} ${y - amp * Math.sin(i + ph)} ${(i + 1) * 100} ${y}`).join(' ')} L1080 1920 L0 1920 Z" fill="${c}"/>`;
  const rows = (y0, n, col) => Array.from({ length: n }, (_, r) => `<path d="M-20 ${y0 + r * 34} Q 540 ${y0 + r * 34 - 40} 1100 ${y0 + r * 34}" stroke="${col}" stroke-width="9" stroke-dasharray="6 14" fill="none"/>`).join('');
  const bx = 120 + ((t * 30) % 900);
  return W(`<rect width="1080" height="1920" fill="url(#dsk)"/>
   <path d="M0 520 Q 300 380 560 470 T 1080 430 L1080 1000 L0 1000 Z" fill="#8C7BA8" opacity=".55"/>
   ${terr(620, '#B5652E', 30, 0)}${rows(640, 6, '#7E3B1C')}
   ${terr(800, '#D49A3A', 26, 1.7)}${rows(820, 4, '#8E5A1E')}
   <g transform="translate(860 610)"><rect x="-60" y="-50" width="120" height="60" fill="#F7F1E6"/><path d="M-70 -50 L0 -90 L70 -50 Z" fill="#B65A3A"/><rect x="-14" y="-30" width="28" height="40" fill="#6B4A32"/></g>
   <rect y="950" width="1080" height="260" fill="#3F7FA0"/>
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${(i * 111 + t * 20) % 1080}" y="${980 + (i % 4) * 55}" width="60" height="5" rx="2" fill="#CFE8F5" opacity=".6"/>`).join('')}
   <g transform="translate(${bx} ${1080 + Math.sin(t * 2) * 4})"><path d="M-120 0 Q 0 40 120 0 L100 30 Q 0 60 -100 30 Z" fill="#5A3A22"/>
     ${[-70, -35, 0, 35].map(x => `<rect x="${x}" y="-36" width="30" height="36" rx="4" fill="#7A2E3A"/>`).join('')}<rect x="60" y="-150" width="8" height="150" fill="#3A2614"/><path d="M68 -150 L68 -40 L150 -60 Z" fill="#F4ECD8"/></g>
   ${terr(1210, '#C8792E', 20, 3)}${rows(1230, 3, '#7E3B1C')}
   <rect y="1300" width="1080" height="620" fill="#8E6B4A"/>
   ${Array.from({ length: 14 }, (_, i) => `<rect x="${(i * 157) % 1080}" y="${1330 + (i * 89) % 560}" width="${40 + (i % 3) * 20}" height="16" rx="6" fill="#7A5A3C"/>`).join('')}`,
   `<linearGradient id="dsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9D4EE"/><stop offset="1" stop-color="#F7E3C0"/></linearGradient>`);
}

function magustoSVG(t = 0) {
  const tree = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-30 0 Q -20 -120 -40 -220 L40 -220 Q 20 -120 30 0 Z" fill="#5A3A22"/><circle cx="0" cy="-300" r="150" fill="#B8862E"/><circle cx="-110" cy="-230" r="100" fill="#C9962E"/><circle cx="110" cy="-240" r="100" fill="#A9741F"/><circle cx="20" cy="-400" r="90" fill="#D4A63A"/></g>`;
  let smoke = '';
  for (let i = 0; i < 6; i++) { const p = ((t * 0.35 + i / 6) % 1); smoke += `<circle cx="${560 + Math.sin(p * 6 + i) * 40 + p * 60}" cy="${1220 - p * 520}" r="${30 + p * 70}" fill="#DDD6CC" opacity="${0.55 * (1 - p)}"/>`; }
  const fl = (dx, h, c) => `<path d="M${560 + dx - 30} 1290 Q ${560 + dx} ${1290 - h - Math.sin(t * 9 + dx) * 20} ${560 + dx + 30} 1290 Z" fill="${c}"/>`;
  let leaves = '';
  for (let i = 0; i < 8; i++) { const p = ((t * 0.18 + i / 8) % 1); leaves += `<ellipse cx="${(i * 140 + Math.sin(p * 10 + i) * 50) % 1080}" cy="${420 + p * 900}" rx="14" ry="8" fill="#C9962E" transform="rotate(${p * 360} ${(i * 140) % 1080} ${420 + p * 900})"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#msk)"/>
   <path d="M0 780 Q 300 650 620 720 T 1080 690 L1080 1000 L0 1000 Z" fill="#7F8E6A"/>
   <g fill="#6E6A66">${[120, 270, 400].map((x, i) => `<rect x="${x}" y="${700 + i * 10}" width="110" height="90"/><path d="M${x - 10} ${700 + i * 10} L${x + 55} ${650 + i * 10} L${x + 120} ${700 + i * 10} Z" fill="#3E3B39"/><rect x="${x + 40}" y="${740 + i * 10}" width="26" height="50" fill="#4A3020"/>`).join('')}</g>
   ${tree(140, 1080, 1.2)}${tree(930, 1060, 1.3)}${tree(700, 960, 0.8)}
   <rect y="1000" width="1080" height="920" fill="#9C7A4E"/>
   ${Array.from({ length: 26 }, (_, i) => `<ellipse cx="${(i * 131) % 1080}" cy="${1040 + (i * 67) % 860}" rx="16" ry="11" fill="#6B3E1E"/>`).join('')}
   ${smoke}
   <ellipse cx="560" cy="1300" rx="140" ry="30" fill="#4A3020"/>
   ${fl(-50, 120, '#E8541E')}${fl(40, 140, '#E8541E')}${fl(-10, 170, '#F39A1E')}${fl(10, 100, '#FFD45C')}
   ${Array.from({ length: 7 }, (_, i) => `<ellipse cx="${470 + i * 30}" cy="${1300 + (i % 2) * 10}" rx="16" ry="12" fill="#5A2E12"/>`).join('')}
   ${leaves}`,
   `<linearGradient id="msk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C9D7DF"/><stop offset="1" stop-color="#F2D9B0"/></linearGradient>`);
}

function aveiroSVG(t = 0) {
  const fac = (x, w, c, h) => `<rect x="${x}" y="${780 - h}" width="${w}" height="${h}" fill="${c}"/>${[0, 1, 2].map(r => `<rect x="${x + 20}" y="${780 - h + 40 + r * 110}" width="${w - 40}" height="70" rx="${(w - 40) / 2}" fill="#3E5A74" opacity=".85"/>`).join('')}<rect x="${x - 6}" y="${780 - h - 16}" width="${w + 12}" height="18" fill="#F7F1E6"/>`;
  const boat = (x, y, c1, c2) => `<g transform="translate(${x} ${y + Math.sin(t * 2 + x) * 5}) scale(.7)"><path d="M-200 0 Q -230 -80 -170 -90 Q -120 20 0 20 Q 120 20 170 -90 Q 230 -80 200 0 Q 0 70 -200 0 Z" fill="${c1}"/><path d="M-140 0 Q 0 40 140 0 L120 16 Q 0 50 -120 16 Z" fill="${c2}"/>${[-90, -30, 30, 90].map(i => `<circle cx="${i}" cy="18" r="9" fill="#FFD45C"/>`).join('')}</g>`;
  return W(`<rect width="1080" height="1920" fill="url(#ask)"/>
   ${[0, 1].map(i => `<ellipse cx="${(i * 600 + t * 18) % 1300 - 100}" cy="${480 + i * 60}" rx="120" ry="36" fill="#fff" opacity=".85"/>`).join('')}
   ${fac(0, 190, '#F2C1C8', 380)}${fac(200, 200, '#BFE0D9', 420)}${fac(410, 180, '#F7E3A6', 360)}${fac(600, 220, '#C9D7F2', 440)}${fac(830, 250, '#F4D2B0', 390)}
   <rect y="780" width="1080" height="40" fill="#E9E2D3"/>
   <rect y="820" width="1080" height="510" fill="#3D8FB0"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${(i * 97 + t * 25) % 1080}" y="${850 + (i % 5) * 80}" width="50" height="5" rx="2" fill="#E6F4FA" opacity=".6"/>`).join('')}
   ${boat(260 + Math.sin(t * 0.5) * 30, 900, '#E2365B', '#2E6DB4')}${boat(800 - Math.sin(t * 0.5) * 30, 960, '#FFD45C', '#1F7A4D')}
   <rect y="1330" width="1080" height="590" fill="#EEE7DA"/>
   ${Array.from({ length: 8 }, (_, r) => `<path d="M-40 ${1370 + r * 70} ${Array.from({ length: 20 }, (_, i) => `q 30 ${i % 2 ? -18 : 18} 60 0`).join(' ')}" stroke="#2B2B2B" stroke-width="8" fill="none" opacity=".45"/>`).join('')}`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FCBEF"/><stop offset="1" stop-color="#F3F8FB"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { postoSVG, douroSVG, magustoSVG, aveiroSVG };
