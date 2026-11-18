// Backgrounds: amoreirasSVG (postmodern pink-and-black office towers in Lisbon at dusk, windows switching off one by one),
// cervejariaSVG (old Lisbon beer hall with vaulted arches, azulejo panels, beer taps and swinging lamps),
// lagoaSVG (Lagoa de Obidos at sunset with a wooden pier, reeds, rippling water and birds)
const W19 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function amoreirasSVG(t = 0) {
  const tower = (x, y, w, h, c1, c2, seed) => {
    const cols = Math.floor((w - 24) / 34), rows = Math.floor((h - 60) / 44);
    let win = '';
    for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
      const k = (r * 7 + c * 13 + seed) % 23;
      const off = ((t * 0.55 + k * 0.37) % 9) > 7.2 || k % 5 === 0;
      win += `<rect x="${x + 14 + c * 34}" y="${y + 44 + r * 44}" width="24" height="30" fill="${off ? '#2B2F45' : '#FFD98A'}" opacity="${off ? .9 : .95}"/>`;
    }
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c1}"/>
      <path d="M${x - 14} ${y} L${x + w / 2} ${y - 70} L${x + w + 14} ${y} Z" fill="${c2}"/>
      <rect x="${x}" y="${y}" width="${w}" height="20" fill="${c2}"/>
      <rect x="${x + w - 18}" y="${y}" width="18" height="${h}" fill="${c2}" opacity=".55"/>${win}`;
  };
  const cloud = (x, y, s) => `<g transform="translate(${((x + t * 14) % 1320) - 120} ${y}) scale(${s})" fill="#FFC9B0" opacity=".7"><ellipse rx="110" ry="24"/><ellipse cx="-60" cy="10" rx="70" ry="18"/><ellipse cx="70" cy="8" rx="80" ry="20"/></g>`;
  const car = (i) => { const p = ((t * 0.16 + i * 0.27) % 1); const x = -160 + p * 1400; const c = ['#D8423C', '#2F6FB2', '#F2C14E', '#EDEDED'][i % 4];
    return `<g transform="translate(${x} ${1236 + (i % 2) * 34})"><rect x="0" y="-30" width="130" height="34" rx="10" fill="${c}"/><path d="M24 -30 q 12 -28 40 -28 h 18 q 22 0 32 28 Z" fill="${c}"/><path d="M36 -32 q 8 -18 28 -18 v 18 Z M 72 -50 h 10 q 14 0 22 18 h -32 Z" fill="#BFE0F2"/><circle cx="30" cy="6" r="14" fill="#1B2430"/><circle cx="102" cy="6" r="14" fill="#1B2430"/><circle cx="128" cy="-16" r="6" fill="#FFE9A8"/></g>`; };
  return W19(`<rect width="1080" height="1920" fill="url(#amsky)"/>
    <circle cx="820" cy="640" r="96" fill="#FFD9A0" opacity=".9"/><circle cx="820" cy="640" r="170" fill="#FFD9A0" opacity=".22"/>
    ${cloud(120, 470, 1)}${cloud(620, 560, 1.3)}${cloud(1000, 420, .8)}
    ${tower(40, 620, 250, 620, '#3A3350', '#D9668A', 3)}
    ${tower(770, 560, 270, 680, '#2E2A44', '#E88AA6', 11)}
    ${tower(330, 470, 400, 770, '#463A5C', '#C94F7C', 5)}
    <rect y="1210" width="1080" height="110" fill="#3B3F52"/>
    ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${i * 150 + 20}" y="1262" width="90" height="8" fill="#E8E2C8"/>`).join('')}
    ${[0, 1, 2, 3].map(car).join('')}
    <rect y="1320" width="1080" height="600" fill="#C9BCA6"/>
    ${Array.from({ length: 9 }, (_, r) => Array.from({ length: 7 }, (_, c) => `<path d="M${c * 170 + (r % 2) * 85 - 40} ${1340 + r * 70} q 40 -30 80 0 t 80 0" stroke="#A99B84" stroke-width="10" fill="none"/>`).join('')).join('')}`,
    `<linearGradient id="amsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B2A5E"/><stop offset=".42" stop-color="#C75C7A"/><stop offset=".72" stop-color="#FFB27A"/><stop offset="1" stop-color="#FFD9A0"/></linearGradient>`);
}

function cervejariaSVG(t = 0) {
  const tile = (x, y, s) => `<g transform="translate(${x} ${y})"><rect width="${s}" height="${s}" fill="#F3EFE3" stroke="#3E6AA8" stroke-width="2"/><path d="M${s / 2} 6 L${s - 6} ${s / 2} L${s / 2} ${s - 6} L6 ${s / 2} Z" fill="none" stroke="#2C5595" stroke-width="4"/><circle cx="${s / 2}" cy="${s / 2}" r="${s / 8}" fill="#2C5595"/></g>`;
  let tiles = '';
  for (let r = 0; r < 6; r++) for (let c = 0; c < 16; c++) tiles += tile(c * 70, 1000 + r * 70, 70);
  const arch = (x) => `<path d="M${x} 1000 V640 Q${x + 170} 420 ${x + 340} 640 V1000 Z" fill="#6E4B30"/><path d="M${x + 22} 1000 V652 Q${x + 170} 470 ${x + 318} 652 V1000 Z" fill="#2D1E14"/>`;
  const lamp = (x, ph) => { const a = Math.sin(t * 1.6 + ph) * 7; return `<g transform="translate(${x} 400) rotate(${a})"><line x1="0" y1="0" x2="0" y2="150" stroke="#2A1B10" stroke-width="6"/><path d="M-56 200 Q0 120 56 200 Z" fill="#B5803A"/><ellipse cx="0" cy="202" rx="56" ry="12" fill="#FFE29A"/><path d="M-90 214 L90 214 L170 520 L-170 520 Z" fill="#FFE29A" opacity=".1"/></g>`; };
  const tap = (x, i) => { const foam = 8 + Math.sin(t * 3 + i) * 3; return `<g transform="translate(${x} 910)"><rect x="-10" y="-60" width="20" height="70" fill="#C9A24B"/><rect x="-16" y="-110" width="32" height="56" rx="10" fill="#7A2E3A"/><path d="M-6 10 h12 v18 h-12 Z" fill="#C9A24B"/><rect x="-34" y="44" width="68" height="84" rx="6" fill="#E9A92C" opacity=".92"/><rect x="-34" y="${44 - foam}" width="68" height="${foam + 8}" rx="6" fill="#FFF6DF"/></g>`; };
  const bubbles = Array.from({ length: 10 }, (_, i) => { const p = (t * 0.5 + i * 0.13) % 1; return `<circle cx="${250 + (i % 4) * 200 + Math.sin(p * 9 + i) * 8}" cy="${1030 - p * 70}" r="3" fill="#FFF6DF" opacity="${1 - p}"/>`; }).join('');
  return W19(`<rect width="1080" height="1920" fill="#8A6242"/>
    <rect y="0" width="1080" height="420" fill="#5E3F29"/>
    ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${i * 190 - 10}" y="0" width="34" height="420" fill="#4A3120"/>`).join('')}
    <rect y="400" width="1080" height="26" fill="#3F2A1B"/>
    ${arch(40)}${arch(370)}${arch(700)}
    ${[100, 430, 760].map(x => `<g transform="translate(${x} 700)" fill="#C9A24B" opacity=".55">${[0, 1, 2].map(i => `<ellipse cx="${60 + i * 60}" cy="120" rx="26" ry="60"/>`).join('')}</g>`).join('')}
    ${tiles}
    <rect y="980" width="1080" height="34" fill="#4A3120"/>
    ${[200, 410, 620, 830].map((x, i) => tap(x, i)).join('')}${bubbles}
    <rect y="1050" width="1080" height="16" fill="#3F2A1B"/>
    ${lamp(200, 0)}${lamp(540, 1.3)}${lamp(880, 2.4)}
    <rect y="1420" width="1080" height="500" fill="#6B4A32"/>
    ${[0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="0" y="${1440 + i * 70}" width="1080" height="6" fill="#553924"/>`).join('')}`);
}

function lagoaSVG(t = 0) {
  const ripple = Array.from({ length: 16 }, (_, i) => { const y = 1130 + i * 22; const x = (i * 197 + Math.sin(t * 1.2 + i) * 40) % 1000; return `<rect x="${x}" y="${y}" width="${90 + (i % 3) * 40}" height="5" rx="2" fill="#FFD9A6" opacity="${.5 - i * .02}"/>`; }).join('');
  const bird = (i) => { const p = (t * 0.07 + i * 0.3) % 1; const f = Math.sin(t * 7 + i) * 12; return `<path d="M${p * 1240 - 80} ${560 + i * 50} q 20 ${-f} 40 0 q 20 ${-f} 40 0" stroke="#3A2B3F" stroke-width="6" fill="none"/>`; };
  const reed = (x, h, i) => { const s = Math.sin(t * 1.5 + i) * 10; return `<path d="M${x} 1520 Q${x + s / 2} ${1520 - h / 2} ${x + s} ${1520 - h}" stroke="#7A7A3E" stroke-width="8" fill="none"/><ellipse cx="${x + s}" cy="${1520 - h}" rx="9" ry="26" fill="#6B4A2E"/>`; };
  const post = (x, y, h) => `<rect x="${x}" y="${y}" width="20" height="${h}" fill="#4F3524"/>`;
  return W19(`<rect width="1080" height="1920" fill="url(#lgsky)"/>
    <circle cx="540" cy="880" r="130" fill="#FFE8B0"/><circle cx="540" cy="880" r="230" fill="#FFE8B0" opacity=".25"/>
    ${[0, 1, 2].map(bird).join('')}
    <path d="M0 960 Q 200 850 420 930 T 800 900 T 1080 950 V 1060 H0 Z" fill="#7C5A6E"/>
    <path d="M0 1010 Q 260 950 540 1000 T 1080 990 V 1080 H0 Z" fill="#5F4A5E"/>
    <rect y="1060" width="1080" height="500" fill="url(#lgw)"/>
    <rect x="440" y="1060" width="200" height="500" fill="#FFE1A8" opacity=".28"/>
    ${ripple}
    <g>
      <path d="M660 1290 L1080 1230 L1080 1300 L660 1340 Z" fill="#8E6A48"/>
      ${[0, 1, 2, 3, 4, 5, 6].map(i => `<line x1="${680 + i * 62}" y1="${1288 - i * 8}" x2="${686 + i * 62}" y2="${1338 - i * 6}" stroke="#6F5236" stroke-width="5"/>`).join('')}
      ${post(690, 1330, 150)}${post(830, 1316, 170)}${post(970, 1304, 190)}
    </g>
    <rect y="1500" width="1080" height="420" fill="#C9B184"/>
    <path d="M0 1510 Q 300 1470 620 1510 T 1080 1500 V 1560 H0 Z" fill="#B59C6E"/>
    ${[30, 90, 150, 880, 950, 1020, 1060].map((x, i) => reed(x, 170 + (i % 3) * 50, i)).join('')}`,
    `<linearGradient id="lgsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A3A78"/><stop offset=".4" stop-color="#E0708A"/><stop offset=".75" stop-color="#FFB27A"/><stop offset="1" stop-color="#FFDFA0"/></linearGradient>
     <linearGradient id="lgw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E89A78"/><stop offset="1" stop-color="#5B5F8E"/></linearGradient>`);
}
