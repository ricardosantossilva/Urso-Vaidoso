// New backgrounds (13 Nov 2026 19:00 Black Friday VAT video): centroSVG (shopping centre atrium at night with Black Friday banners, moving escalators, hanging lights),
// lojaSVG (electronics shop aisle with flickering TV wall, laptop shelf and red price tags), rossioSVG (Rossio-style square at dusk: neoclassical theatre with columns, baroque fountain spraying, pigeons)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function centroSVG(t = 0) {
  let lights = ''; for (let i = 0; i < 9; i++) { const x = 60 + i * 120, y = 120 + (i % 3) * 40 + Math.sin(t * 2 + i) * 6; lights += `<line x1="${x}" y1="0" x2="${x}" y2="${y}" stroke="#555" stroke-width="2"/><circle cx="${x}" cy="${y}" r="${16 + (i % 2) * 6}" fill="#FFE9A8" opacity="${0.7 + 0.3 * Math.sin(t * 4 + i)}"/>`; }
  const shop = (x, y, w, c, sign) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="190" fill="#2A2238"/><rect x="10" y="44" width="${w - 20}" height="136" fill="${c}" opacity=".55"/><rect width="${w}" height="38" fill="#111"/><text x="${w / 2}" y="28" text-anchor="middle" font-family="Inter" font-weight="900" font-size="24" fill="#FFD45C">${sign}</text></g>`;
  let steps = ''; for (let i = 0; i < 9; i++) { const k = ((t * 0.6 + i / 9) % 1); steps += `<line x1="${180 + k * 330}" y1="${1240 - k * 330}" x2="${250 + k * 330}" y2="${1240 - k * 330}" stroke="#9AA7B8" stroke-width="5"/>`; }
  const banner = (x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r + Math.sin(t * 1.5 + x) * 1.5})"><rect x="-120" y="0" width="240" height="300" fill="#0B0B0B"/><text x="0" y="110" text-anchor="middle" font-family="Inter" font-weight="900" font-size="54" fill="#fff">BLACK</text><text x="0" y="170" text-anchor="middle" font-family="Inter" font-weight="900" font-size="54" fill="#fff">FRIDAY</text><text x="0" y="250" text-anchor="middle" font-family="Inter" font-weight="900" font-size="64" fill="#FFD45C">-64%</text></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#cg)"/>
   <path d="M0 0 L1080 0 L1080 60 Q540 160 0 60 Z" fill="#3B3150"/>${lights}
   <rect x="0" y="560" width="1080" height="24" fill="#4A3F60"/><rect x="0" y="584" width="1080" height="10" fill="#C9B6F0" opacity=".6"/>
   ${shop(20, 370, 300, '#E2365B', 'MODA')}${shop(760, 370, 300, '#3FA7D6', 'TECH')}
   ${banner(540, 380, 0)}
   ${shop(20, 900, 330, '#F3C969', 'CASA')}${shop(730, 900, 330, '#7BD389', 'DESPORTO')}
   <path d="M160 1260 L510 910 L590 910 L240 1260 Z" fill="#5C6A7E"/>${steps}<path d="M160 1250 L510 900" stroke="#222" stroke-width="10"/><path d="M240 1250 L590 900" stroke="#222" stroke-width="10"/>
   <rect y="1260" width="1080" height="660" fill="#D9D2E6"/>${Array.from({ length: 8 }, (_, i) => `<line x1="${i * 160}" y1="1260" x2="${i * 160 - 300}" y2="1920" stroke="#C3BAD6" stroke-width="4"/>`).join('')}
   <ellipse cx="540" cy="1600" rx="420" ry="60" fill="#FFF" opacity=".25"/>`,
   `<linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A1430"/><stop offset=".6" stop-color="#3D2E5C"/><stop offset="1" stop-color="#6B5A8A"/></linearGradient>`);
}
function lojaSVG(t = 0) {
  const pal = ['#3FA7D6', '#E2365B', '#7BD389', '#F3C969', '#9B6BD6', '#FF8C42'];
  let tvs = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) { const k = Math.floor(t * 2 + r * 4 + c * 3) % pal.length; tvs += `<g transform="translate(${70 + c * 245} ${400 + r * 170})"><rect width="220" height="140" rx="6" fill="#111"/><rect x="8" y="8" width="204" height="124" fill="${pal[k]}"/><circle cx="${110 + Math.sin(t * 3 + r + c) * 60}" cy="70" r="30" fill="#fff" opacity=".5"/></g>`; }
  let laptops = ''; for (let i = 0; i < 5; i++) { const x = 60 + i * 200; laptops += `<g transform="translate(${x} 1000)"><path d="M10 0 L150 0 L160 -100 L20 -100 Z" fill="#2B2F36"/><path d="M26 -8 L146 -8 L154 -92 L32 -92 Z" fill="#8FD3F4" opacity="${0.7 + 0.3 * Math.sin(t * 3 + i)}"/><rect x="0" y="0" width="170" height="14" rx="4" fill="#9AA3AE"/><g transform="translate(110 -130) rotate(${8 + Math.sin(t * 2 + i) * 4})"><rect width="70" height="40" rx="6" fill="#C8202C"/><text x="35" y="28" text-anchor="middle" font-family="Inter" font-weight="900" font-size="22" fill="#fff">-${[30, 64, 22, 40, 50][i]}%</text></g></g>`; }
  return W(`<rect width="1080" height="1920" fill="#EEF1F5"/><rect width="1080" height="380" fill="#DDE3EA"/>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${60 + i * 180}" y="60" width="120" height="16" rx="8" fill="#fff" opacity=".9"/>`).join('')}
   <rect x="40" y="380" width="1000" height="540" rx="10" fill="#2B2F36"/>${tvs}
   <rect x="20" y="1010" width="1040" height="40" fill="#B9C2CC"/><rect x="20" y="1050" width="1040" height="210" fill="#D3D9E0"/>${laptops}
   <rect y="1260" width="1080" height="660" fill="#C9CFD6"/>${Array.from({ length: 7 }, (_, i) => `<rect x="${i * 160}" y="1260" width="4" height="660" fill="#B7BEC6"/>`).join('')}
   <rect y="1260" width="1080" height="660" fill="url(#lf)"/>`,
   `<linearGradient id="lf" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>`);
}
function rossioSVG(t = 0) {
  let cols = ''; for (let i = 0; i < 6; i++) cols += `<rect x="${330 + i * 80}" y="560" width="34" height="280" fill="#F2EBDD"/>`;
  let drops = ''; for (let i = 0; i < 14; i++) { const k = (t * 1.2 + i / 14) % 1, a = (i / 14) * Math.PI * 2; drops += `<circle cx="${540 + Math.cos(a) * k * 150}" cy="${1040 - Math.sin(k * Math.PI) * 120 + k * 60}" r="6" fill="#BFE6FF" opacity="${1 - k}"/>`; }
  let birds = ''; for (let i = 0; i < 4; i++) { const x = 140 + i * 230 + Math.sin(t * 2 + i) * 14; birds += `<g transform="translate(${x} ${1380 + (i % 2) * 70})"><ellipse rx="26" ry="16" fill="#8A8F99"/><circle cx="22" cy="${-14 + (Math.floor(t * 4 + i) % 2) * 8}" r="11" fill="#7A7F89"/><path d="M32 ${-14 + (Math.floor(t * 4 + i) % 2) * 8} l10 3 l-10 3 Z" fill="#E8A93A"/></g>`; }
  return W(`<rect width="1080" height="1920" fill="url(#rs)"/>
   <circle cx="860" cy="${470 + Math.sin(t * .3) * 6}" r="60" fill="#FFC27A" opacity=".85"/>
   <rect x="0" y="600" width="260" height="360" fill="#E8D2B0"/><rect x="820" y="600" width="260" height="360" fill="#E4C9A3"/>
   ${[30, 110, 190, 850, 930, 1010].map(x => `<rect x="${x}" y="650" width="44" height="70" fill="#5A6E8A" opacity=".8"/><rect x="${x}" y="780" width="44" height="70" fill="#FFE29A" opacity="${0.6 + 0.4 * Math.sin(t * 2 + x)}"/>`).join('')}
   <path d="M290 560 L540 440 L790 560 Z" fill="#E9E1D0"/><rect x="290" y="540" width="500" height="30" fill="#DCD2BE"/><rect x="290" y="840" width="500" height="120" fill="#E9E1D0"/>${cols}
   <rect x="0" y="960" width="1080" height="960" fill="#D8D0C2"/>${Array.from({ length: 40 }, (_, i) => `<rect x="${(i * 97) % 1080}" y="${980 + ((i * 53) % 900)}" width="40" height="18" rx="4" fill="#C6BDAE"/>`).join('')}
   <ellipse cx="540" cy="1130" rx="230" ry="50" fill="#5DA7CF"/><ellipse cx="540" cy="1130" rx="230" ry="50" fill="none" stroke="#B9AE9A" stroke-width="16"/>
   <rect x="520" y="980" width="40" height="150" fill="#9D9282"/><ellipse cx="540" cy="1000" rx="70" ry="18" fill="#9D9282"/>${drops}${birds}`,
   `<linearGradient id="rs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B4A7A"/><stop offset=".45" stop-color="#E88E6B"/><stop offset=".6" stop-color="#F6C48E"/></linearGradient>`);
}
