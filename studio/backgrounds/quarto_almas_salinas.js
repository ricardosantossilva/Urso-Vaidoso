// New backgrounds (2026-11-17 17:00 room rent deduction video):
// cozinhaSVG: shared-flat kitchen at night (casa partilhada) with a fridge full of post-its and a rent rota, swinging bare bulb, dripping tap, night window
// almasSVG: Porto Rua de Santa Catarina corner at dusk with a chapel covered in blue-and-white azulejos (Capela das Almas style), passing tram-like shoppers, glowing street lamps, pigeons
// salinasSVG: Ria Formosa salt pans at sunset (Olhão/Tavira style) with white salt mounds, pink water, wading flamingos and a whitewashed cubic town on the horizon
const WQ = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function cozinhaSVG(t = 0) {
  const sw = Math.sin(t * 1.6) * 6;
  const drop = (t * 0.9) % 1;
  let tiles = '';
  for (let r = 0; r < 6; r++) for (let c = 0; c < 14; c++) tiles += `<rect x="${c * 80}" y="${820 + r * 80}" width="76" height="76" fill="${(r + c) % 2 ? '#E6EEF2' : '#D4E2EA'}"/>`;
  const notes = [['#FFE36E', 'LOIÇA!'], ['#FF9EC4', 'Renda dia 8'], ['#9BE3A8', 'Leite?'], ['#8EC9FF', 'Recibo ✔'], ['#FFC37A', 'Silêncio 23h']];
  let ns = notes.map((n, i) => `<g transform="translate(${130 + (i % 2) * 120} ${700 + Math.floor(i / 2) * 120}) rotate(${(i % 3 - 1) * 6 + Math.sin(t * 2 + i) * 2})"><rect x="-55" y="-45" width="110" height="90" fill="${n[0]}"/><text x="0" y="8" font-family="Inter,sans-serif" font-weight="800" font-size="20" text-anchor="middle" fill="#333">${n[1]}</text></g>`).join('');
  let stars = ''; for (let i = 0; i < 14; i++) stars += `<circle cx="${640 + (i * 53) % 340}" cy="${470 + (i * 37) % 240}" r="${2 + (i % 2)}" fill="#fff" opacity="${0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i))}"/>`;
  return WQ(`<rect width="1080" height="1920" fill="#F3E3C3"/>
   <rect y="0" width="1080" height="440" fill="#E9D3A8"/>
   <rect x="620" y="440" width="380" height="320" rx="10" fill="#1B2A4A"/>${stars}<circle cx="930" cy="510" r="32" fill="#FFF3C4"/>
   <rect x="620" y="440" width="380" height="320" rx="10" fill="none" stroke="#FFFFFF" stroke-width="16"/><line x1="810" y1="440" x2="810" y2="760" stroke="#fff" stroke-width="12"/>
   <g transform="rotate(${sw} 560 370) translate(560 0)"><line x1="0" y1="370" x2="0" y2="420" stroke="#333" stroke-width="5"/><rect x="-30" y="360" width="60" height="14" rx="6" fill="#333"/><circle cx="0" cy="440" r="30" fill="#FFF6C8"/><circle cx="0" cy="440" r="70" fill="#FFF6C8" opacity="0.25"/></g>
   ${tiles}
   <rect x="60" y="560" width="340" height="740" rx="24" fill="#F8F8F8" stroke="#BFC7CC" stroke-width="6"/><line x1="60" y1="900" x2="400" y2="900" stroke="#BFC7CC" stroke-width="6"/><rect x="360" y="620" width="14" height="140" rx="6" fill="#9AA5AC"/><rect x="360" y="940" width="14" height="140" rx="6" fill="#9AA5AC"/>
   ${ns}
   <rect x="440" y="1180" width="640" height="40" fill="#8A5A3B"/><rect x="440" y="1220" width="640" height="200" fill="#B07A50"/>
   <rect x="640" y="1150" width="220" height="40" rx="8" fill="#C9D3D8"/><path d="M740 1150 v-90 h70 v20" fill="none" stroke="#9AA5AC" stroke-width="14"/>
   <ellipse cx="810" cy="${1100 + drop * 60}" rx="7" ry="11" fill="#7FC8F0" opacity="${1 - drop}"/>
   ${[0, 1, 2].map(i => `<rect x="${480 + i * 40}" y="${1080 - i * 6}" width="34" height="${70 + i * 6}" rx="6" fill="${['#E2365B', '#3C8DDB', '#F2B33D'][i]}"/>`).join('')}
   <rect y="1420" width="1080" height="500" fill="#C9A47A"/>${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${1460 + i * 60}" x2="1080" y2="${1460 + i * 60}" stroke="#B48E65" stroke-width="4"/>`).join('')}`);
}

function almasSVG(t = 0) {
  let az = '';
  for (let r = 0; r < 13; r++) for (let c = 0; c < 9; c++) {
    const x = 120 + c * 50, y = 470 + r * 50;
    az += `<rect x="${x}" y="${y}" width="48" height="48" fill="#F4F7FB"/><circle cx="${x + 24}" cy="${y + 24}" r="13" fill="none" stroke="#2A5DA8" stroke-width="5"/><path d="M${x} ${y + 24} h48 M${x + 24} ${y} v48" stroke="#2A5DA8" stroke-width="2" opacity=".5"/>`;
  }
  const lamp = (x, y) => `<g transform="translate(${x} ${y})"><rect x="-6" y="0" width="12" height="420" fill="#2D3036"/><path d="M-30 0 h60 l-12 -60 h-36 Z" fill="#2D3036"/><circle cy="-30" r="${16 + Math.sin(t * 6 + x) * 2}" fill="#FFD77A"/><circle cy="-30" r="60" fill="#FFD77A" opacity="0.2"/></g>`;
  let people = ''; for (let i = 0; i < 4; i++) { const x = ((t * 70 + i * 290) % 1300) - 110; people += `<g transform="translate(${x} 1270)"><rect x="-18" y="-120" width="36" height="90" rx="14" fill="${['#7A2E3A', '#2F6E8E', '#5A6B3A', '#E2A23B'][i]}"/><circle cy="-140" r="20" fill="#3B2A22"/><rect x="-14" y="-30" width="10" height="40" fill="#222"/><rect x="4" y="-30" width="10" height="40" fill="#222"/></g>`; }
  let pig = ''; for (let i = 0; i < 2; i++) { const hop = Math.abs(Math.sin(t * 4 + i * 2)) * 14; pig += `<g transform="translate(${720 + i * 160} ${1320 - hop})"><ellipse rx="26" ry="18" fill="#8C93A0"/><circle cx="22" cy="-16" r="11" fill="#8C93A0"/><path d="M32 -16 l10 3 l-10 3 Z" fill="#E8A93A"/></g>`; }
  return WQ(`<rect width="1080" height="1920" fill="url(#ask)"/>
   <rect x="600" y="380" width="480" height="900" fill="#D9B98C"/>${Array.from({ length: 4 }, (_, r) => Array.from({ length: 3 }, (_, c) => `<rect x="${640 + c * 140}" y="${430 + r * 190}" width="90" height="130" fill="${(r + c + Math.floor(t)) % 4 === 0 ? '#FFE7A6' : '#5E7A8F'}"/><rect x="630" y="${560 + r * 190}" width="110" height="10" fill="#2D3036" transform="translate(${c * 140} 0)"/>`).join('')).join('')}
   <path d="M90 470 L345 410 L600 470 Z" fill="#E9E3D6"/><rect x="337" y="365" width="16" height="50" fill="#C8B78F"/><rect x="322" y="378" width="46" height="12" fill="#C8B78F"/>
   <rect x="90" y="460" width="510" height="820" fill="#E9E3D6"/>${az}
   <path d="M290 1280 v-200 a55 55 0 0 1 110 0 v200 Z" fill="#5A3A28"/><rect x="90" y="1260" width="510" height="20" fill="#C8B78F"/>
   ${lamp(560, 900)}${lamp(1010, 880)}
   <rect y="1280" width="1080" height="640" fill="#B9B2A6"/>${Array.from({ length: 40 }, (_, i) => `<rect x="${(i * 97) % 1080}" y="${1300 + (i * 53) % 600}" width="50" height="30" rx="6" fill="#A8A195"/>`).join('')}
   ${people}${pig}`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3E4E8C"/><stop offset=".5" stop-color="#C9799A"/><stop offset="1" stop-color="#F6C48A"/></linearGradient>`);
}

function salinasSVG(t = 0) {
  let fl = '';
  for (let i = 0; i < 4; i++) {
    const x = 160 + i * 230 + Math.sin(t * 0.6 + i) * 20, y = 1150 + (i % 2) * 60, b = Math.sin(t * 2 + i) * 6;
    fl += `<g transform="translate(${x} ${y})"><line x1="0" y1="0" x2="0" y2="110" stroke="#E07A8C" stroke-width="6"/><line x1="10" y1="0" x2="${18 + b}" y2="110" stroke="#E07A8C" stroke-width="6"/><ellipse cx="5" cy="-10" rx="50" ry="30" fill="#F4A3B4"/><path d="M40 -20 q 30 -60 10 -110" fill="none" stroke="#F4A3B4" stroke-width="12"/><circle cx="50" cy="-130" r="14" fill="#F4A3B4"/><path d="M60 -130 q 18 4 10 22" fill="none" stroke="#222" stroke-width="7"/></g>`;
  }
  let town = ''; for (let i = 0; i < 16; i++) { const w = 40 + (i * 13) % 30, h = 40 + (i * 17) % 50; town += `<rect x="${i * 70 - 10}" y="${760 - h}" width="${w}" height="${h}" fill="#F5EFE6"/>`; }
  let sp = ''; for (let i = 0; i < 18; i++) sp += `<rect x="${(i * 131 + t * 20) % 1080}" y="${900 + (i * 47) % 400}" width="40" height="4" rx="2" fill="#FFE6D8" opacity="${0.3 + 0.5 * Math.abs(Math.sin(t * 3 + i))}"/>`;
  const mound = (x, y, s) => `<path d="M${x - 90 * s} ${y} Q ${x} ${y - 140 * s} ${x + 90 * s} ${y} Z" fill="#FFFFFF"/><path d="M${x} ${y - 70 * s} Q ${x + 50 * s} ${y - 30 * s} ${x + 90 * s} ${y} H ${x} Z" fill="#E7E2DA"/>`;
  return WQ(`<rect width="1080" height="1920" fill="url(#ssk)"/>
   <circle cx="760" cy="${640 + Math.sin(t * 0.3) * 6}" r="90" fill="#FFD27A"/>
   ${town}<rect y="760" width="1080" height="30" fill="#C9A982"/>
   <rect y="790" width="1080" height="620" fill="#E8A2A6"/>${[880, 1020, 1160, 1300].map(y => `<rect x="0" y="${y}" width="1080" height="16" fill="#C9A982"/>`).join('')}
   ${sp}${mound(150, 1000, 1)}${mound(330, 1010, 0.7)}${mound(920, 1000, 0.9)}
   ${fl}
   <rect y="1410" width="1080" height="510" fill="#D9C2A0"/>${Array.from({ length: 20 }, (_, i) => `<circle cx="${(i * 151) % 1080}" cy="${1450 + (i * 61) % 450}" r="5" fill="#C6AC86"/>`).join('')}`,
   `<linearGradient id="ssk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5B4C9A"/><stop offset=".45" stop-color="#F08A6E"/><stop offset=".62" stop-color="#FFC98A"/></linearGradient>`);
}
