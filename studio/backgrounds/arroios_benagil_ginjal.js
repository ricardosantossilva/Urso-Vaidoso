// New backgrounds: arroiosSVG (1950s Lisbon apartment block at dusk with flapping ARRENDA-SE banners), benagilSVG (Algarve sea cave with roof skylight, light beam, waves, kayak), ginjalSVG (Cais do Ginjal riverside at sunset with the red suspension bridge, cars and a ferry)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function arroiosSVG(t = 0) {
  let win = '';
  for (let r = 0; r < 7; r++) for (let c = 0; c < 5; c++) {
    const on = Math.sin(r * 7.3 + c * 3.1 + Math.floor(t * 0.8 + r + c) * 1.7) > 0.1;
    win += `<rect x="${110 + c * 180}" y="${420 + r * 120}" width="110" height="80" fill="${on ? '#FFD98A' : '#3D4E66'}"/><rect x="${100 + c * 180}" y="${500 + r * 120}" width="130" height="10" fill="#8C8170"/>`;
  }
  const banner = (x, y, ph) => { const sw = Math.sin(t * 3 + ph) * 6; return `<g transform="translate(${x} ${y}) skewY(${sw * .3})"><rect width="160" height="64" fill="#fff" stroke="#C8202C" stroke-width="6"/><text x="80" y="43" text-anchor="middle" font-family="Inter" font-weight="900" font-size="26" fill="#C8202C">ARRENDA-SE</text></g>`; };
  return W(`<rect width="1080" height="1920" fill="url(#ask)"/>
   <rect x="60" y="380" width="960" height="940" fill="#E7D2B0"/><rect x="60" y="380" width="960" height="30" fill="#B9A78A"/>
   ${win}
   ${banner(110, 600, 0)}${banner(650, 720, 1.4)}${banner(290, 960, 2.2)}${banner(830, 1080, 3.1)}
   <rect x="440" y="1190" width="200" height="130" fill="#5A4636"/><rect x="455" y="1205" width="80" height="115" fill="#6E5743"/><rect x="545" y="1205" width="80" height="115" fill="#6E5743"/>
   <line x1="0" y1="380" x2="1080" y2="370" stroke="#222" stroke-width="3"/>
   <rect y="1320" width="1080" height="600" fill="#D9D2C3"/>
   ${Array.from({ length: 9 }, (_, r) => `<path d="M-40 ${1360 + r * 64} ${Array.from({ length: 22 }, (_, i) => `l 25 ${i % 2 ? -14 : 14}`).join(' ')} l 25 14" stroke="#2B2B2B" stroke-width="7" fill="none" opacity=".45"/>`).join('')}
   ${[150, 930].map(x => `<rect x="${x - 6}" y="1000" width="12" height="330" fill="#2B3440"/><circle cx="${x}" cy="990" r="20" fill="#FFE9A8"/><circle cx="${x}" cy="990" r="${60 + Math.sin(t * 3) * 6}" fill="#FFE9A8" opacity=".2"/>`).join('')}`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2D3E73"/><stop offset=".5" stop-color="#C77A8E"/><stop offset="1" stop-color="#F6B97A"/></linearGradient>`);
}
function benagilSVG(t = 0) {
  const wave = (y, a, ph, c) => `<path d="M0 ${y} ${Array.from({ length: 13 }, (_, i) => `Q ${i * 90 + 45} ${y + Math.sin(t * 2 + i + ph) * a - 14} ${(i + 1) * 90} ${y}`).join(' ')} L1080 1920 L0 1920 Z" fill="${c}"/>`;
  const ky = 1180 + Math.sin(t * 2.2) * 8;
  return W(`<rect width="1080" height="1920" fill="#C98A4E"/>
   <path d="M0 0 H1080 V1200 C 900 900, 800 820, 540 800 C 280 820, 180 900, 0 1200 Z" fill="#B0703C"/>
   <ellipse cx="540" cy="500" rx="230" ry="110" fill="#9CD8F2"/><ellipse cx="540" cy="500" rx="230" ry="110" fill="none" stroke="#8A5228" stroke-width="22"/>
   <path d="M330 530 L750 530 L860 1300 L220 1300 Z" fill="#FFF3C8" opacity="${0.22 + Math.sin(t * 1.5) * 0.05}"/>
   ${Array.from({ length: 10 }, (_, i) => `<path d="M${i * 120 - 40} ${600 + (i % 3) * 60} q 60 -30 120 0" stroke="#9A5E30" stroke-width="10" fill="none" opacity=".5"/>`).join('')}
   <ellipse cx="540" cy="1310" rx="520" ry="110" fill="#F2D49A"/>
   ${wave(1330, 10, 0, '#2E8FB8')}${wave(1420, 12, 1.5, '#2378A3')}
   <g transform="translate(${880 + Math.sin(t * .8) * 30} ${ky}) rotate(${Math.sin(t * 2.2) * 3})"><path d="M-110 0 Q 0 30 110 0 Q 0 -14 -110 0 Z" fill="#F2A33A"/><line x1="-60" y1="-40" x2="60" y2="20" stroke="#333" stroke-width="6"/></g>
   ${Array.from({ length: 6 }, (_, i) => { const p = ((t * 0.3 + i / 6) % 1); return `<circle cx="${420 + i * 45}" cy="${470 + p * 800}" r="4" fill="#fff" opacity="${0.6 * (1 - p)}"/>`; }).join('')}`);
}
function ginjalSVG(t = 0) {
  const cars = Array.from({ length: 6 }, (_, i) => { const x = ((t * 70 + i * 200) % 1300) - 100; return `<rect x="${x}" y="${676}" width="34" height="14" rx="4" fill="${['#FFD45C', '#E2365B', '#fff', '#2E6DB4'][i % 4]}"/>`; }).join('');
  const fx = ((t * 30) % 1400) - 200;
  return W(`<rect width="1080" height="1920" fill="url(#gsk)"/>
   <circle cx="760" cy="760" r="90" fill="#FFD27A" opacity=".9"/>
   <rect y="800" width="1080" height="80" fill="#7B6A8E" opacity=".6"/>
   ${[230, 830].map(x => `<rect x="${x - 18}" y="430" width="36" height="420" fill="#B8302A"/><rect x="${x - 30}" y="500" width="60" height="14" fill="#B8302A"/><rect x="${x - 30}" y="600" width="60" height="14" fill="#B8302A"/>`).join('')}
   <path d="M-60 650 Q 230 430 230 430 Q 530 690 830 430 Q 1000 560 1140 650" stroke="#B8302A" stroke-width="10" fill="none"/>
   <rect x="-20" y="690" width="1120" height="26" fill="#B8302A"/>${cars}
   <rect y="850" width="1080" height="470" fill="#5E7FA8"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${(i * 97 + Math.sin(t * 2 + i) * 14 + 1080) % 1080}" y="${880 + (i % 6) * 70}" width="${40 + (i % 3) * 25}" height="5" rx="2" fill="#FFD8A0" opacity=".6"/>`).join('')}
   <g transform="translate(${fx} 1040)"><rect x="-90" y="0" width="180" height="40" rx="10" fill="#F2F2F2"/><rect x="-60" y="-34" width="110" height="36" rx="6" fill="#F2A33A"/><rect x="-10" y="-62" width="14" height="30" fill="#333"/></g>
   <rect y="1320" width="1080" height="600" fill="#A89A86"/><rect y="1320" width="1080" height="26" fill="#C9BCA6"/>
   ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${i * 190 + 20}" y="1360" width="150" height="560" fill="${i % 2 ? '#9A8C78' : '#B3A48E'}" opacity=".5"/>`).join('')}
   ${[80, 1000].map(x => `<rect x="${x - 8}" y="1250" width="16" height="80" fill="#3A3A3A"/><circle cx="${x}" cy="1250" r="14" fill="#3A3A3A"/>`).join('')}`,
   `<linearGradient id="gsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B2F6B"/><stop offset=".55" stop-color="#E07A6A"/><stop offset="1" stop-color="#FFC98A"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { arroiosSVG, benagilSVG, ginjalSVG };
