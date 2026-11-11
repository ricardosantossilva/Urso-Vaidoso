// Intro video backgrounds: escritorioSVG (bright open office with big windows, plants and desks), azulejoSVG (rooftop terrace with blue tile wall,
// bougainvillea and a café table with laptop at morning), bibliotecaSVG (wood-panelled study with ledger shelves and green desk lamp),
// estudioSVG (design studio with a giant monitor showing a website mock-up being built)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function escritorioSVG(t = 0) {
  const plant = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-40 0 L40 0 L30 90 L-30 90 Z" fill="#E9E2D6"/>${[-50, -20, 10, 40].map((a, i) => `<ellipse cx="${Math.sin(t * 1.5 + i) * 3}" cy="-60" rx="18" ry="70" fill="${i % 2 ? '#3F8A44' : '#5FA25A'}" transform="rotate(${a})"/>`).join('')}</g>`;
  return W(`<rect width="1080" height="1920" fill="#F4F1EA"/>
   <rect x="0" y="0" width="1080" height="1120" fill="#EAF3F8"/>
   ${[0, 1, 2].map(i => `<rect x="${60 + i * 330}" y="120" width="300" height="760" fill="url(#esky)"/><rect x="${60 + i * 330}" y="120" width="300" height="760" fill="none" stroke="#2B3440" stroke-width="12"/><line x1="${210 + i * 330}" y1="120" x2="${210 + i * 330}" y2="880" stroke="#2B3440" stroke-width="6"/>`).join('')}
   ${[0, 1, 2].map(i => `<g opacity=".9">${[0, 1, 2, 3].map(k => `<rect x="${80 + i * 330 + k * 66}" y="${620 - ((k * 37 + i * 53) % 160)}" width="54" height="${260 + ((k * 37 + i * 53) % 160)}" fill="#C9D6E2"/>`).join('')}</g>`).join('')}
   <ellipse cx="${(t * 30) % 1300 - 100}" cy="260" rx="90" ry="28" fill="#fff" opacity=".9"/>
   <rect y="1120" width="1080" height="800" fill="#D8C9AE"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 90}" y="1120" width="2" height="800" fill="#C9B898"/>`).join('')}
   <g transform="translate(540 1010)"><rect x="-420" y="0" width="840" height="24" rx="6" fill="#FFFFFF"/><rect x="-400" y="24" width="14" height="140" fill="#2B3440"/><rect x="386" y="24" width="14" height="140" fill="#2B3440"/>
     <g transform="translate(-200 -10)"><rect x="-90" y="-110" width="180" height="110" rx="8" fill="#2B3440"/><rect x="-80" y="-100" width="160" height="90" fill="#DDEBF7"/><rect x="-70" y="-90" width="${60 + Math.sin(t * 2) * 30}" height="10" fill="#7A2E3A"/><rect x="-70" y="-72" width="100" height="10" fill="#9FB3C8"/><rect x="-70" y="-54" width="80" height="10" fill="#9FB3C8"/></g>
     <g transform="translate(220 -10)"><rect x="-26" y="-60" width="52" height="60" rx="6" fill="#7A2E3A"/>${[0, 1, 2].map(i => `<path d="M${-10 + i * 10} ${-70 - ((t * 30 + i * 12) % 40)} q 6 -10 0 -20" stroke="#fff" stroke-width="4" fill="none" opacity=".6"/>`).join('')}</g></g>
   ${plant(110, 1030, 1.2)}${plant(980, 1040, 1.1)}`,
    `<linearGradient id="esky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8CCBF0"/><stop offset="1" stop-color="#DFF1FB"/></linearGradient>`);
}
function azulejoSVG(t = 0) {
  const tile = (x, y) => `<g transform="translate(${x} ${y})"><rect width="90" height="90" fill="#F7F4EC"/><circle cx="45" cy="45" r="26" fill="none" stroke="#1F5FA8" stroke-width="7"/><path d="M45 8 L52 30 L45 22 L38 30 Z M45 82 L52 60 L45 68 L38 60 Z M8 45 L30 38 L22 45 L30 52 Z M82 45 L60 38 L68 45 L60 52 Z" fill="#1F5FA8"/><circle cx="45" cy="45" r="8" fill="#E8A93A"/></g>`;
  let tiles = ''; for (let r = 0; r < 12; r++) for (let c = 0; c < 12; c++) tiles += tile(c * 90, 40 + r * 90);
  let flowers = ''; for (let i = 0; i < 26; i++) flowers += `<circle cx="${(i * 97) % 1080}" cy="${60 + ((i * 53) % 260) + Math.sin(t * 2 + i) * 4}" r="${16 + (i % 3) * 6}" fill="${i % 3 ? '#D63A8A' : '#E95BA6'}"/>`;
  return W(`<rect width="1080" height="1920" fill="#FFE9C7"/>${tiles}
   <path d="M0 0 L1080 0 L1080 120 Q 800 200 540 140 Q 260 80 0 160 Z" fill="#3F8A44"/>${flowers}
   <rect y="1120" width="1080" height="800" fill="#C96F4A"/>${Array.from({ length: 9 }, (_, r) => Array.from({ length: 7 }, (_, c) => `<rect x="${c * 160 + (r % 2) * 80 - 80}" y="${1130 + r * 90}" width="154" height="84" fill="${(r + c) % 2 ? '#B9603E' : '#C96F4A'}"/>`).join('')).join('')}
   <g transform="translate(820 1020)"><ellipse cx="0" cy="0" rx="150" ry="26" fill="#F7F4EC"/><rect x="-8" y="0" width="16" height="140" fill="#2B2B2B"/><rect x="-60" y="134" width="120" height="10" rx="5" fill="#2B2B2B"/>
     <g transform="translate(-30 -8)"><path d="M-50 0 L50 0 L60 -8 L-40 -8 Z" fill="#9AA5B1"/><rect x="-40" y="-74" width="90" height="66" rx="6" fill="#2B3440" transform="skewX(-8)"/></g>
     <g transform="translate(80 -4)"><rect x="-16" y="-26" width="32" height="26" rx="4" fill="#fff"/><ellipse cx="0" cy="-26" rx="16" ry="5" fill="#6B4A32"/>${[0, 1].map(i => `<path d="M${-5 + i * 10} ${-36 - ((t * 25 + i * 15) % 30)} q 5 -8 0 -16" stroke="#fff" stroke-width="3" fill="none" opacity=".7"/>`).join('')}</g></g>`);
}
function bibliotecaSVG(t = 0) {
  const books = (x, y, n, seed) => { let b = ''; let xx = x; for (let i = 0; i < n; i++) { const w = 22 + ((i * 7 + seed) % 14), h = 120 + ((i * 13 + seed) % 40); b += `<rect x="${xx}" y="${y - h}" width="${w}" height="${h}" fill="${['#7A2E3A', '#0B2343', '#2E5A3A', '#B65A3A', '#D4AF5F', '#5A3A2A'][(i + seed) % 6]}"/><rect x="${xx + 4}" y="${y - h + 14}" width="${w - 8}" height="6" fill="#D4AF5F" opacity=".7"/>`; xx += w + 3; } return b; };
  return W(`<rect width="1080" height="1920" fill="#5A3A2A"/>
   ${[0, 1, 2, 3].map(r => `<rect x="40" y="${200 + r * 220}" width="1000" height="18" fill="#3E2618"/>${books(60, 200 + r * 220, 30, r * 5)}`).join('')}
   <rect x="0" y="0" width="40" height="1120" fill="#3E2618"/><rect x="1040" y="0" width="40" height="1120" fill="#3E2618"/>
   <rect y="1100" width="1080" height="820" fill="#7A4E34"/>${Array.from({ length: 10 }, (_, i) => `<rect x="0" y="${1100 + i * 82}" width="1080" height="4" fill="#6A4229"/>`).join('')}
   <g transform="translate(540 1010)"><rect x="-460" y="0" width="920" height="30" rx="4" fill="#3E2618"/><rect x="-430" y="30" width="860" height="80" fill="#4A2E1E"/>
     <g transform="translate(-300 0)"><rect x="-6" y="-150" width="12" height="150" fill="#C9A24A"/><path d="M-70 -150 L70 -150 L50 -200 L-50 -200 Z" fill="#2E6B4A"/><ellipse cx="0" cy="-100" rx="160" ry="90" fill="#FFE9A8" opacity="${.18 + Math.sin(t * 3) * .03}"/></g>
     <g transform="translate(240 -10)"><rect x="-110" y="-20" width="220" height="20" fill="#F4EAD5"/><rect x="-110" y="-26" width="220" height="8" fill="#0B2343"/>${[0, 1, 2, 3].map(i => `<rect x="${-90}" y="${-14 + i * 0}" width="0" height="0"/>`).join('')}</g></g>`);
}
function estudioSVG(t = 0) {
  const prog = (t * 0.25) % 1;
  return W(`<rect width="1080" height="1920" fill="#20283A"/>
   ${Array.from({ length: 14 }, (_, i) => `<circle cx="${(i * 151) % 1080}" cy="${(i * 97) % 1000}" r="${60 + (i % 4) * 20}" fill="${['#2E6DB4', '#7A2E3A', '#D4AF5F'][i % 3]}" opacity=".08"/>`).join('')}
   <g transform="translate(540 600)"><rect x="-440" y="-330" width="880" height="560" rx="22" fill="#11161F"/><rect x="-420" y="-310" width="840" height="520" rx="8" fill="#FBF5EA"/>
     <rect x="-420" y="-310" width="840" height="40" fill="#E6DDCB"/>${[0, 1, 2].map(i => `<circle cx="${-396 + i * 24}" cy="-290" r="7" fill="${['#E2365B', '#FFD45C', '#2FA36B'][i]}"/>`).join('')}<rect x="-300" y="-302" width="500" height="24" rx="12" fill="#fff"/>
     <rect x="-420" y="-270" width="840" height="${Math.min(1, prog * 4) * 200}" fill="#0B2343"/>
     ${prog > .25 ? `<rect x="-360" y="-220" width="${Math.min(1, (prog - .25) * 4) * 420}" height="34" rx="6" fill="#D4AF5F"/><rect x="-360" y="-170" width="${Math.min(1, (prog - .25) * 4) * 300}" height="18" rx="6" fill="#9FB3C8"/>` : ''}
     ${prog > .5 ? [0, 1, 2].map(i => `<rect x="${-380 + i * 260}" y="-50" width="240" height="${Math.min(1, (prog - .5) * 4) * 180}" rx="10" fill="${['#E8DCC6', '#DDEBF7', '#E9D6DA'][i]}"/>`).join('') : ''}
     ${prog > .75 ? `<rect x="-110" y="150" width="220" height="40" rx="20" fill="#7A2E3A"/>` : ''}
     <rect x="-40" y="230" width="80" height="120" fill="#11161F"/><rect x="-160" y="340" width="320" height="20" rx="8" fill="#11161F"/></g>
   <rect y="1100" width="1080" height="820" fill="#2B3448"/>${Array.from({ length: 8 }, (_, i) => `<line x1="${i * 160}" y1="1100" x2="${i * 160 - 120}" y2="1920" stroke="#323C52" stroke-width="5"/>`).join('')}
   <g transform="translate(150 1060)"><rect x="-50" y="0" width="100" height="40" rx="6" fill="#D4AF5F"/>${[0, 1, 2].map(i => `<rect x="${-40 + i * 30}" y="${-60 - i * 10}" width="20" height="${60 + i * 10}" rx="4" fill="${['#2E6DB4', '#E2365B', '#2FA36B'][i]}"/>`).join('')}</g>`);
}
if (typeof module !== 'undefined') module.exports = { escritorioSVG, azulejoSVG, bibliotecaSVG, estudioSVG };
