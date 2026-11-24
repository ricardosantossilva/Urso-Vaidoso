// Backgrounds for 2026-11-24 11:00 (O Urso responde #5 Parte 1, Black Friday parcels from outside the EU):
// salaSVG (living room at night, TV with Black Friday sale, blinking Christmas tree, parcel pile), cargaSVG (airport cargo customs hall with x-ray tunnel and parcel conveyor), leixoesSVG (Leixoes-style container port at dusk with moving gantry crane)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function salaSVG(t = 0) {
  const cols = ['#E2365B', '#FFD45C', '#4FC3F7', '#7CD67A'];
  let lights = '';
  for (let i = 0; i < 14; i++) { const on = (Math.floor(t * 3) + i) % 3 !== 0; const y = 560 + i * 34, x = 880 + Math.sin(i * 1.7) * (20 + i * 7);
    lights += `<circle cx="${x}" cy="${y}" r="9" fill="${cols[i % 4]}" opacity="${on ? 1 : .25}"/>`; }
  const pct = 50 + 10 * (Math.floor(t * 1.5) % 3);
  return W(`<rect width="1080" height="1920" fill="#2B2440"/>
   <rect y="0" width="1080" height="1100" fill="url(#wall)"/>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="${i * 130 - 20}" y="0" width="6" height="1100" fill="#3A3256" opacity=".5"/>`).join('')}
   <g transform="translate(90 430)"><rect width="600" height="380" rx="18" fill="#111"/><rect x="18" y="18" width="564" height="344" rx="8" fill="#0A0A0A"/>
     <rect x="18" y="18" width="564" height="344" rx="8" fill="#141414"/>
     <text x="300" y="130" text-anchor="middle" font-family="Inter" font-weight="900" font-size="78" fill="#fff">BLACK</text>
     <text x="300" y="215" text-anchor="middle" font-family="Inter" font-weight="900" font-size="78" fill="#fff">FRIDAY</text>
     <rect x="170" y="245" width="260" height="88" rx="14" fill="#E2365B" transform="rotate(${Math.sin(t * 4) * 3} 300 289)"/>
     <text x="300" y="310" text-anchor="middle" font-family="Inter" font-weight="900" font-size="64" fill="#fff">-${pct}%</text>
     <rect x="270" y="380" width="60" height="40" fill="#222"/><rect x="200" y="420" width="200" height="14" rx="6" fill="#222"/></g>
   <g transform="translate(880 0)"><path d="M0 470 L-150 1000 L150 1000 Z" fill="#1F6B3A"/><path d="M0 470 L-110 760 L110 760 Z" fill="#2A8048"/><rect x="-22" y="1000" width="44" height="60" fill="#6B4A32"/>
     <polygon points="0,440 12,468 42,470 18,488 26,518 0,500 -26,518 -18,488 -42,470 -12,468" fill="#FFD45C" transform="rotate(${Math.sin(t * 2) * 6} 0 480)"/></g>${lights}
   <rect y="1100" width="1080" height="820" fill="#5A3E2E"/>${Array.from({ length: 8 }, (_, i) => `<rect x="0" y="${1100 + i * 104}" width="1080" height="4" fill="#4A3224"/>`).join('')}
   <g transform="translate(60 1140)"><rect width="960" height="120" rx="40" fill="#7A2E3A"/><rect y="90" width="960" height="180" rx="40" fill="#8E3A47"/><rect x="-10" y="40" width="70" height="230" rx="30" fill="#6E2834"/><rect x="900" y="40" width="70" height="230" rx="30" fill="#6E2834"/></g>
   ${[[740, 1540, 150, '#C99A5B'], [880, 1560, 120, '#B5874C'], [800, 1440, 110, '#D6AA6A']].map(([x, y, s, c], i) => `<g transform="translate(${x} ${y + Math.sin(t * 3 + i) * 3})"><rect width="${s}" height="${s * .8}" fill="${c}"/><rect x="${s / 2 - 8}" width="16" height="${s * .8}" fill="#E8D3A8"/></g>`).join('')}`,
   `<linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B3360"/><stop offset="1" stop-color="#2B2440"/></linearGradient>`);
}
function cargaSVG(t = 0) {
  let boxes = '';
  for (let i = 0; i < 6; i++) { const x = ((t * 140 + i * 210) % 1260) - 180; const s = 110 + (i % 3) * 20;
    boxes += `<g transform="translate(${x} ${1080 - s * .75})"><rect width="${s}" height="${s * .75}" fill="${['#C99A5B', '#B5874C', '#D6AA6A'][i % 3]}"/><rect x="${s / 2 - 7}" width="14" height="${s * .75}" fill="#E8D3A8"/><rect x="10" y="12" width="${s * .45}" height="22" fill="#fff"/><rect x="14" y="17" width="${s * .3}" height="5" fill="#C8202C"/></g>`; }
  const blink = (Math.floor(t * 2.5) % 2) ? '#FF3B3B' : '#5A1414';
  return W(`<rect width="1080" height="1920" fill="#C9D3DC"/>
   ${Array.from({ length: 7 }, (_, i) => `<rect x="${i * 170 - 30}" y="380" width="10" height="560" fill="#9AA8B5"/>`).join('')}
   <rect y="380" width="1080" height="14" fill="#8A98A6"/>
   ${Array.from({ length: 4 }, (_, i) => `<g transform="translate(${70 + i * 260} 420)"><rect width="200" height="110" fill="#AEBBC7"/><rect x="10" y="10" width="180" height="90" fill="#DCEAF5" opacity=".8"/></g>`).join('')}
   <g transform="translate(60 600)">${Array.from({ length: 3 }, (_, r) => Array.from({ length: 4 }, (_, c) => `<rect x="${c * 110}" y="${r * 90}" width="100" height="80" fill="${['#B5874C', '#C99A5B', '#D6AA6A'][(r + c) % 3]}"/>`).join('')).join('')}<rect y="270" width="440" height="12" fill="#3A4B5C"/></g>
   <rect y="1080" width="1080" height="40" fill="#2C3A48"/>${Array.from({ length: 14 }, (_, i) => `<circle cx="${((i * 80 + t * 140) % 1120) - 20}" cy="1100" r="12" fill="#56677A"/>`).join('')}
   ${boxes}
   <g transform="translate(560 760)"><rect width="320" height="320" rx="16" fill="#3E5A73"/><rect x="40" y="60" width="240" height="260" fill="#1D2A36"/>
     ${Array.from({ length: 8 }, (_, i) => `<rect x="${40 + i * 30}" y="60" width="26" height="260" fill="#2E4356" opacity=".7"/>`).join('')}
     <rect x="20" y="14" width="200" height="34" rx="6" fill="#0E1620"/><text x="120" y="40" text-anchor="middle" font-family="Inter" font-weight="900" font-size="24" fill="#7CD67A">RAIO-X</text>
     <circle cx="270" cy="31" r="16" fill="${blink}"/></g>
   <rect y="1120" width="1080" height="800" fill="#7E8A95"/>${Array.from({ length: 6 }, (_, i) => `<rect x="0" y="${1180 + i * 120}" width="1080" height="6" fill="#FFD45C" opacity=".55"/>`).join('')}
   <g transform="translate(40 1130)"><rect width="300" height="60" rx="8" fill="#0B2343"/><text x="150" y="42" text-anchor="middle" font-family="Inter" font-weight="900" font-size="30" fill="#fff">FORA DA UE ➜</text></g>`);
}
function leixoesSVG(t = 0) {
  const tx = 260 + Math.sin(t * 0.8) * 160; const ty = 640 + (Math.sin(t * 1.6) + 1) * 60;
  const ccol = ['#C8202C', '#2F6FB0', '#2FA36B', '#E8A93A', '#7A2E3A'];
  let stack = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) stack += `<rect x="${380 + c * 100}" y="${960 - r * 50}" width="96" height="46" fill="${ccol[(r * 2 + c) % 5]}"/>`;
  let gulls = ''; for (let i = 0; i < 3; i++) { const x = (t * 50 + i * 330) % 1200 - 60, y = 470 + i * 40 + Math.sin(t * 2 + i) * 12; gulls += `<path d="M${x} ${y} q 18 -16 34 0 q 16 -16 34 0" stroke="#2B2B3A" stroke-width="5" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#lsk)"/>
   <circle cx="820" cy="560" r="90" fill="#FFC36B" opacity=".9"/>
   ${gulls}
   <g fill="#3A3F55"><rect x="120" y="420" width="26" height="620"/><rect x="330" y="420" width="26" height="620"/><rect x="60" y="420" width="760" height="40"/><rect x="40" y="380" width="120" height="50"/></g>
   <g transform="translate(${tx} 460)"><rect x="-50" y="0" width="100" height="40" fill="#FFD45C"/><line x1="0" y1="40" x2="0" y2="${ty - 460}" stroke="#222" stroke-width="5"/>
     <rect x="-55" y="${ty - 460}" width="110" height="50" fill="#2F6FB0"/></g>
   <rect y="1040" width="1080" height="80" fill="#2E3446"/>
   <g transform="translate(${-60 + (t * 12) % 40} 0)"><path d="M300 1000 L1000 1000 L960 1080 L340 1080 Z" fill="#1E2738"/>${stack}<rect x="900" y="860" width="80" height="140" fill="#EEE"/><rect x="910" y="880" width="60" height="14" fill="#4FC3F7"/></g>
   <rect y="1100" width="1080" height="820" fill="url(#sea)"/>
   ${Array.from({ length: 10 }, (_, i) => `<path d="M${((i * 160 + t * 40) % 1240) - 80} ${1160 + (i % 5) * 120} q 30 -14 60 0 q 30 14 60 0" stroke="#9CC9E6" stroke-width="5" fill="none" opacity=".6"/>`).join('')}
   <g transform="translate(40 1300)"><rect width="160" height="420" fill="#E8E2D2"/><rect y="0" width="160" height="40" fill="#C8202C"/><rect x="60" y="-70" width="40" height="70" fill="#FFD45C" opacity="${.6 + .4 * Math.sin(t * 3)}"/></g>`,
   `<linearGradient id="lsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3E3C78"/><stop offset=".6" stop-color="#E9837A"/><stop offset="1" stop-color="#F7C08A"/></linearGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2D5B85"/><stop offset="1" stop-color="#173452"/></linearGradient>`);
}
