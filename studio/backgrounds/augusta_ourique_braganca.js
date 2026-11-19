// New backgrounds (2026-11-19 17:00 Black Friday returns video):
// augustaSVG: Lisbon Rua Augusta at night, triumphal arch at the end, Black Friday sale banners in shop windows, walking shopper silhouettes, glowing lamps
// ouriqueSVG: Campo de Ourique street at dusk with a yellow tram 28 sliding past, a doorway piled with parcel boxes, bouncing delivery trolley, flower pots
// bragancaSVG: Bragança walled citadel at sunset with the tall square castle keep, waving flag, crenellated walls, Montesinho hills and flying birds
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function augustaSVG(t = 0) {
  // perspective street toward the arch
  const arch = `<g transform="translate(540 560)">
    <rect x="-170" y="-40" width="340" height="420" fill="#E9DCC0"/>
    <rect x="-150" y="-120" width="300" height="90" fill="#E2D3B4"/>
    <rect x="-90" y="-190" width="180" height="80" fill="#D9C8A6"/>
    <circle cx="0" cy="-215" r="34" fill="#D9C8A6"/>
    <path d="M-75 380 L-75 170 A75 75 0 0 1 75 170 L75 380 Z" fill="#14233F"/>
    ${[-140, -110, 110, 140].map(x => `<rect x="${x - 9}" y="-30" width="18" height="400" fill="#D4C29F"/>`).join('')}
    <rect x="-170" y="-48" width="340" height="14" fill="#CDB991"/>
  </g>`;
  const shop = (side, i) => {
    const y = 620 + i * 190, h = 160 + i * 40, w = 120 + i * 70;
    const x = side < 0 ? 380 - (i + 1) * (w * 0.85) : 700 + i * (w * 0.85) - 0;
    const glow = 0.75 + 0.25 * Math.sin(t * 3 + i + side);
    return `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#F6C66B" opacity="${glow}"/>
      <rect x="${x + 8}" y="${y + 8}" width="${w - 16}" height="${h * 0.32}" fill="#111"/>
      <text x="${x + w / 2}" y="${y + 8 + h * 0.24}" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="${18 + i * 9}" fill="#FFD45C">BLACK FRIDAY</text>
      <text x="${x + w / 2}" y="${y + h * 0.78}" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="${26 + i * 12}" fill="#C8202C">-50%</text></g>`;
  };
  let shops = ''; for (let i = 0; i < 4; i++) { shops += shop(-1, i) + shop(1, i); }
  let walkers = '';
  for (let i = 0; i < 6; i++) {
    const p = ((t * 0.08 + i / 6) % 1);
    const y = 980 + p * 360, s = 0.5 + p * 0.9, x = (i % 2 ? 420 : 640) + (i % 3 - 1) * 60 * (1 - p);
    const bob = Math.sin(t * 6 + i) * 4;
    walkers += `<g transform="translate(${x} ${y + bob}) scale(${s})" opacity="${0.55 + p * 0.4}"><circle cy="-130" r="22" fill="#1B2232"/><rect x="-24" y="-108" width="48" height="90" rx="18" fill="#1B2232"/><rect x="-20" y="-20" width="16" height="60" fill="#1B2232"/><rect x="4" y="-20" width="16" height="60" fill="#1B2232"/><rect x="26" y="-70" width="34" height="40" rx="4" fill="${['#C8202C', '#FFD45C', '#2FA36B'][i % 3]}"/></g>`;
  }
  const lamp = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-5" y="0" width="10" height="260" fill="#1E2A3A"/><circle cy="-8" r="${26 + Math.sin(t * 4 + x) * 2}" fill="#FFE7A0" opacity=".9"/><circle cy="-8" r="60" fill="#FFE7A0" opacity=".15"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#ag)"/>
    ${Array.from({ length: 18 }, (_, i) => `<circle cx="${(i * 173) % 1080}" cy="${410 + (i * 61) % 160}" r="${2 + (i % 2)}" fill="#fff" opacity="${0.4 + 0.5 * Math.abs(Math.sin(t * 2 + i))}"/>`).join('')}
    <path d="M0 400 L380 600 L380 1000 L0 1300 Z" fill="#C9B48E"/><path d="M1080 400 L700 600 L700 1000 L1080 1300 Z" fill="#C2AC84"/>
    ${arch}${shops}
    <path d="M380 1000 L700 1000 L1080 1400 L0 1400 Z" fill="#5E5A55"/>
    ${Array.from({ length: 10 }, (_, i) => `<path d="M${380 - i * 40} ${1000 + i * 40} L${700 + i * 40} ${1000 + i * 40}" stroke="#ECE4D4" stroke-width="${2 + i}" opacity=".35"/>`).join('')}
    <rect y="1400" width="1080" height="520" fill="#EDE5D6"/>
    ${Array.from({ length: 9 }, (_, i) => `<path d="M${i * 140 - 40} 1400 q 70 60 140 0" stroke="#3A3A3A" stroke-width="8" fill="none" opacity=".5"/>`).join('')}
    ${walkers}${lamp(250, 1040, 1)}${lamp(830, 1040, 1)}${lamp(90, 1180, 1.3)}${lamp(990, 1180, 1.3)}`,
    `<linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0D1530"/><stop offset=".35" stop-color="#28305E"/><stop offset=".6" stop-color="#3B3560"/><stop offset="1" stop-color="#3B3560"/></linearGradient>`);
}

function ouriqueSVG(t = 0) {
  const tx = ((t * 120) % 1900) - 700; // tram moving right
  const house = (x, w, c, win) => `<g><rect x="${x}" y="420" width="${w}" height="760" fill="${c}"/>
    ${[0, 1, 2].map(r => [0, 1].map(k => `<rect x="${x + 30 + k * (w / 2)}" y="${560 + r * 200}" width="${w / 2 - 60}" height="130" fill="${win}"/><rect x="${x + 20 + k * (w / 2)}" y="${700 + r * 200}" width="${w / 2 - 40}" height="12" fill="#2C2C2C"/>`).join('')).join('')}
    <rect x="${x}" y="410" width="${w}" height="20" fill="#B9AE9A"/></g>`;
  const tram = `<g transform="translate(${tx} 1010)">
    <rect x="0" y="0" width="560" height="230" rx="30" fill="#F3C21B"/><rect x="0" y="170" width="560" height="60" fill="#F7F2E5"/>
    ${[0, 1, 2, 3, 4].map(i => `<rect x="${30 + i * 104}" y="30" width="84" height="100" rx="10" fill="#9CC6E4"/>`).join('')}
    <rect x="200" y="-40" width="160" height="40" rx="8" fill="#1B2232"/><text x="280" y="-10" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="32" fill="#FFD45C">28</text>
    <line x1="280" y1="-40" x2="${330 + Math.sin(t * 3) * 6}" y2="-330" stroke="#1B2232" stroke-width="6"/>
    <circle cx="110" cy="240" r="26" fill="#2B2B2B"/><circle cx="450" cy="240" r="26" fill="#2B2B2B"/></g>`;
  const boxes = `<g transform="translate(860 1350)">${[[0, 0, 140, 110, '#C99A5E'], [10, -100, 120, 100, '#D8AE72'], [-130, 10, 120, 100, '#B9884F'], [-110, -80, 90, 90, '#D8AE72'], [30, -180, 80, 80, '#C99A5E']].map(([x, y, w, h, c]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}" stroke="#8A6538" stroke-width="4"/><rect x="${x + w / 2 - 8}" y="${y}" width="16" height="${h}" fill="#E8D7B5"/>`).join('')}</g>`;
  const trolley = `<g transform="translate(${180 + Math.sin(t * 1.5) * 30} 1480) rotate(${Math.sin(t * 3) * 2})"><rect x="-10" y="-260" width="14" height="300" fill="#333"/><rect x="-10" y="30" width="130" height="14" fill="#333"/><rect x="10" y="-60" width="100" height="90" fill="#C99A5E" stroke="#8A6538" stroke-width="4"/><rect x="20" y="-140" width="80" height="80" fill="#D8AE72" stroke="#8A6538" stroke-width="4"/><circle cx="0" cy="50" r="20" fill="#222"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#og)"/>
    ${[0, 1, 2].map(i => `<ellipse cx="${(t * 15 + i * 400) % 1400 - 150}" cy="${430 + i * 30}" rx="120" ry="28" fill="#FFE1C4" opacity=".55"/>`).join('')}
    ${house(-20, 380, '#E8B4A0', '#2B3C55')}${house(360, 360, '#F1DEB0', '#2B3C55')}${house(720, 380, '#A9C9D8', '#2B3C55')}
    <line x1="0" y1="690" x2="1080" y2="660" stroke="#1B2232" stroke-width="4"/>
    <rect y="1180" width="1080" height="110" fill="#6E6A66"/><rect y="1240" width="1080" height="6" fill="#9A958F"/><rect y="1262" width="1080" height="6" fill="#9A958F"/>
    ${tram}
    <rect y="1290" width="1080" height="630" fill="#EEE7DA"/>
    ${Array.from({ length: 40 }, (_, i) => `<path d="M${(i % 8) * 140} ${1320 + Math.floor(i / 8) * 120} l70 40 l70 -40" stroke="#BFB6A6" stroke-width="6" fill="none"/>`).join('')}
    <g transform="translate(660 1160)"><rect x="0" y="0" width="150" height="200" fill="#6B4A32"/><rect x="10" y="10" width="130" height="190" fill="#5A3C28"/></g>
    ${[110, 980].map((x, i) => `<g transform="translate(${x} 1300) rotate(${Math.sin(t * 2 + i) * 4})"><rect x="-40" y="0" width="80" height="70" fill="#B65A3A"/><circle cy="-20" r="40" fill="#4E9A4B"/><circle cx="-18" cy="-40" r="14" fill="#E2365B"/><circle cx="20" cy="-30" r="12" fill="#FFD45C"/></g>`).join('')}
    ${boxes}${trolley}`,
    `<linearGradient id="og" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F59E6B"/><stop offset=".25" stop-color="#F7C38E"/><stop offset=".5" stop-color="#F7C38E"/></linearGradient>`);
}

function bragancaSVG(t = 0) {
  const keep = `<g transform="translate(560 520)">
    <rect x="-130" y="0" width="260" height="560" fill="#B9A98C"/>
    ${Array.from({ length: 6 }, (_, i) => `<rect x="${-130 + i * 48}" y="-36" width="30" height="40" fill="#B9A98C"/>`).join('')}
    <rect x="-150" y="-20" width="40" height="80" fill="#A99A7E"/><rect x="110" y="-20" width="40" height="80" fill="#A99A7E"/>
    <rect x="-20" y="120" width="40" height="70" rx="20" fill="#3B3226"/><rect x="-20" y="300" width="40" height="70" rx="20" fill="#3B3226"/>
    <rect x="-3" y="-160" width="6" height="130" fill="#3B3226"/>
    <path d="M3 -160 q 40 ${-10 + Math.sin(t * 5) * 10} 80 0 q -40 ${10 + Math.sin(t * 5 + 1) * 8} -80 40 Z" fill="#2FA36B"/>
    <path d="M3 -160 q 25 ${-6 + Math.sin(t * 5) * 6} 34 0 l0 40 q -20 0 -34 0 Z" fill="#C8202C"/></g>`;
  const wall = Array.from({ length: 22 }, (_, i) => `<rect x="${i * 50}" y="1010" width="30" height="40" fill="#A99A7E"/>`).join('');
  let birds = ''; for (let i = 0; i < 4; i++) { const x = (t * 60 + i * 280) % 1300 - 100, y = 470 + i * 45 + Math.sin(t * 2 + i) * 12, f = Math.sin(t * 10 + i) * 10; birds += `<path d="M${x - 22} ${y - f} Q ${x - 10} ${y - 8} ${x} ${y} Q ${x + 10} ${y - 8} ${x + 22} ${y - f}" stroke="#3B2A3A" stroke-width="5" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#bg1)"/>
    <circle cx="${200 + Math.sin(t * 0.3) * 10}" cy="640" r="110" fill="#FFD28A" opacity=".95"/>
    <path d="M0 860 Q 200 700 420 820 T 820 790 T 1080 820 L1080 1100 L0 1100 Z" fill="#7C6A8C"/>
    <path d="M0 940 Q 260 820 520 920 T 1080 900 L1080 1100 L0 1100 Z" fill="#5E7A5A"/>
    ${keep}
    <rect y="1040" width="1080" height="220" fill="#A99A7E"/>${wall}
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 95 + 20}" y="${1090 + (i % 2) * 60}" width="60" height="26" fill="#958870"/>`).join('')}
    <rect y="1260" width="1080" height="660" fill="#7FA35E"/>
    ${Array.from({ length: 14 }, (_, i) => `<g transform="translate(${(i * 83) % 1080} ${1300 + (i * 97) % 520}) rotate(${Math.sin(t * 2 + i) * 8})"><path d="M0 0 l-12 -40 M0 0 l0 -46 M0 0 l12 -40" stroke="#4E7A3E" stroke-width="6"/></g>`).join('')}
    ${birds}`,
    `<linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A3F7A"/><stop offset=".3" stop-color="#C4688A"/><stop offset=".5" stop-color="#F3A66B"/><stop offset=".6" stop-color="#F7C98E"/></linearGradient>`);
}
