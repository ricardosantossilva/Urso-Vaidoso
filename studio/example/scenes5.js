// New backgrounds: estrelaSVG (garden with bandstand and domed church), chiadoSVG (estate agency window on an old shopping street), nacoesSVG (riverside at blue hour, tall sail tower, cable car)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function estrelaSVG(t = 0) {
  const tree = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-14" y="0" width="28" height="160" fill="#6B4A32"/><circle cx="0" cy="-30" r="110" fill="${c}"/><circle cx="-70" cy="10" r="80" fill="${c}"/><circle cx="70" cy="10" r="80" fill="${c}"/></g>`;
  let ducks = ''; for (let i = 0; i < 3; i++) { const x = 300 + ((t * 25 + i * 160) % 480), y = 1180 + (i % 2) * 22; ducks += `<g transform="translate(${x} ${y})"><ellipse rx="22" ry="12" fill="#F7F7F7"/><circle cx="16" cy="-12" r="9" fill="#F7F7F7"/><path d="M24 -12 l10 3 l-10 3 Z" fill="#E8A93A"/></g>`; }
  return W(`<rect width="1080" height="1920" fill="url(#esk)"/>
   <g transform="translate(540 330)" fill="#EDE6D8"><rect x="-200" y="120" width="400" height="300"/><rect x="-90" y="20" width="180" height="110"/><ellipse cx="0" cy="20" rx="110" ry="100"/><rect x="-10" y="-120" width="20" height="50" fill="#D8CDBD"/><circle cy="-70" r="18"/>
     <rect x="-280" y="80" width="80" height="340"/><rect x="200" y="80" width="80" height="340"/><path d="M-280 80 q 40 -70 80 0 Z"/><path d="M200 80 q 40 -70 80 0 Z"/></g>
   ${tree(120, 760, 1.3, '#4E9A4B')}${tree(980, 740, 1.4, '#3F8A44')}${tree(300, 820, 0.9, '#6BB45E')}${tree(800, 830, 0.95, '#5FA25A')}
   <rect y="900" width="1080" height="400" fill="#7CC07A"/>
   <ellipse cx="560" cy="1190" rx="320" ry="70" fill="#5DA7CF"/><ellipse cx="560" cy="1190" rx="320" ry="70" fill="none" stroke="#D8CDBD" stroke-width="10"/>${ducks}
   <g transform="translate(860 1000)"><rect x="-110" y="0" width="220" height="20" fill="#2E5A3A"/>${[-100, -50, 0, 50, 100].map(x => `<rect x="${x - 4}" y="-120" width="8" height="120" fill="#2E5A3A"/>`).join('')}<path d="M-130 -120 L0 -190 L130 -120 Z" fill="#2E5A3A"/><rect x="-120" y="-130" width="240" height="14" fill="#C9B48E"/></g>
   <rect y="1300" width="1080" height="620" fill="#E3D6BE"/>${Array.from({ length: 30 }, (_, i) => `<circle cx="${(i * 137) % 1080}" cy="${1340 + (i * 71) % 560}" r="${4 + (i % 3)}" fill="#CDBFA4"/>`).join('')}
   <g transform="translate(540 1330)"><rect x="-300" y="-40" width="600" height="22" rx="8" fill="#2E5A3A"/><rect x="-300" y="-90" width="600" height="18" rx="8" fill="#2E5A3A"/>${[-260, 260].map(x => `<rect x="${x - 10}" y="-90" width="20" height="120" fill="#1F3F28"/>`).join('')}</g>`,
   `<linearGradient id="esk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9AD3F2"/><stop offset="1" stop-color="#EEF8FF"/></linearGradient>`);
}
function chiadoSVG(t = 0) {
  // elegant old street: estate agency with listings in the window, wrought-iron balconies above
  const listing = (x, y, price, c) => `<g transform="translate(${x} ${y})"><rect width="150" height="190" rx="6" fill="#FBF5EA"/><rect x="10" y="10" width="130" height="90" fill="${c}"/><path d="M30 100 L75 60 L120 100 Z" fill="#B65A3A"/><rect x="18" y="114" width="90" height="10" rx="4" fill="#9FB3C8"/><text x="75" y="166" text-anchor="middle" font-family="Inter" font-weight="900" font-size="28" fill="#C8202C">${price}</text></g>`;
  return W(`<rect width="1080" height="1920" fill="#BFE3F5"/>
   <rect x="0" y="0" width="1080" height="1300" fill="#E9DCC6"/>
   ${[0, 1, 2].map(r => [0, 1, 2, 3].map(i => `<rect x="${70 + i * 250}" y="${90 + r * 220}" width="120" height="170" fill="#3E5A74"/><rect x="${60 + i * 250}" y="${240 + r * 220}" width="140" height="10" fill="#2B2B2B"/>${Array.from({ length: 7 }, (_, k) => `<rect x="${64 + i * 250 + k * 20}" y="${200 + r * 220}" width="4" height="42" fill="#2B2B2B"/>`).join('')}`).join('')).join('')}
   <rect x="0" y="730" width="1080" height="40" fill="#CFC0A6"/>
   <rect x="60" y="780" width="960" height="520" fill="#1E3A2E"/><rect x="90" y="800" width="900" height="80" fill="#1E3A2E"/><text x="540" y="860" text-anchor="middle" font-family="Lora" font-weight="700" font-size="54" fill="#E7C985" letter-spacing="6">IMOBILIÁRIA</text>
   <rect x="100" y="900" width="880" height="380" fill="#DDEFF7"/>
   ${listing(130, 940, '€2,1M', '#9CD3F5')}${listing(300, 940, '€3,4M', '#F3C969')}${listing(470, 940, '€5,9M', '#B8D6C9')}${listing(640, 940, '€8,8M', '#E8A98F')}${listing(810, 940, '€12M', '#D9B8D9')}
   <path d="M100 900 L300 900 L160 1280 L100 1280 Z" fill="#fff" opacity=".18"/>
   <rect y="1300" width="1080" height="620" fill="#ECE5D6"/>
   ${Array.from({ length: 9 }, (_, r) => `<path d="M-40 ${1340 + r * 64} ${Array.from({ length: 22 }, (_, i) => `l 25 ${i % 2 ? -14 : 14}`).join(' ')} l 25 14" stroke="#2B2B2B" stroke-width="7" fill="none" opacity=".5"/>`).join('')}`);
}
function nacoesSVG(t = 0) {
  // blue hour by the wide river: tall sail-shaped tower, cable car gliding, lights on water
  const cab = i => { const x = ((t * 40 + i * 360) % 1300) - 120, y = 520 + x * 0.06; return `<line x1="${x}" y1="${y - 40}" x2="${x}" y2="${y}" stroke="#333" stroke-width="3"/><rect x="${x - 26}" y="${y}" width="52" height="44" rx="10" fill="${['#E2365B', '#FFD45C', '#2E6DB4'][i % 3]}"/><rect x="${x - 18}" y="${y + 8}" width="36" height="16" rx="4" fill="#CFE8F5"/>`; };
  let refl = ''; for (let i = 0; i < 14; i++) refl += `<rect x="${(i * 83 + Math.sin(t * 2 + i) * 10) % 1080}" y="${1000 + (i % 5) * 50}" width="${30 + (i % 3) * 20}" height="5" rx="2" fill="#FFE9A8" opacity=".55"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#nsk)"/>
   ${[0, 1, 2, 3, 4, 5, 6].map(i => `<circle cx="${(i * 173) % 1080}" cy="${60 + (i * 47) % 200}" r="3" fill="#fff" opacity=".8"/>`).join('')}
   <path d="M760 940 L800 220 C 860 300, 900 600, 880 940 Z" fill="#DDE6EE"/><path d="M800 220 L812 940" stroke="#AFC0D0" stroke-width="6"/>
   <line x1="0" y1="470" x2="1080" y2="535" stroke="#333" stroke-width="3"/>${[0, 1, 2].map(cab).join('')}
   <rect y="900" width="1080" height="50" fill="#2B3A55"/>${Array.from({ length: 18 }, (_, i) => `<rect x="${i * 62}" y="${880 - (i % 4) * 30}" width="50" height="${70 + (i % 4) * 30}" fill="#3A4A6A"/><rect x="${i * 62 + 12}" y="${900 - (i % 4) * 30}" width="10" height="10" fill="#FFE9A8" opacity=".8"/>`).join('')}
   <rect y="950" width="1080" height="380" fill="#24406A"/>${refl}
   <rect y="1330" width="1080" height="590" fill="#9A9488"/><rect y="1330" width="1080" height="24" fill="#C9C2B4"/>
   ${Array.from({ length: 8 }, (_, i) => `<line x1="${i * 160}" y1="1354" x2="${i * 160 - 80}" y2="1920" stroke="#88827A" stroke-width="5"/>`).join('')}
   ${[150, 930].map(x => `<rect x="${x - 6}" y="1000" width="12" height="340" fill="#2B3440"/><circle cx="${x}" cy="990" r="22" fill="#FFE9A8"/><circle cx="${x}" cy="990" r="70" fill="#FFE9A8" opacity=".18"/>`).join('')}`,
   `<linearGradient id="nsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B2A5A"/><stop offset=".6" stop-color="#4A5FA8"/><stop offset="1" stop-color="#C89AD0"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { estrelaSVG, chiadoSVG, nacoesSVG };
