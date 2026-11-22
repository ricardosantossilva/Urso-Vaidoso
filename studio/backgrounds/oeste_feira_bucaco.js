// New backgrounds (2026-11-22 11:00, O Urso responde #3 Parte 1):
// oesteSVG: Oeste countryside building plot with a white windmill turning, stakes and string, a 'VENDE-SE TERRENO' sign, drifting clouds
// feiraSVG: Santa Maria da Feira-style castle with conical turrets on a wooded hill at sunset, waving flags, birds
// bucacoSVG: Buçaco-style misty forest at night with tall cedars, a mossy stone stair, swinging lantern, fireflies and drifting fog
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function oesteSVG(t = 0) {
  let clouds = '';
  for (let i = 0; i < 4; i++) { const x = ((t * 18 + i * 330) % 1500) - 250, y = 140 + (i % 2) * 120 + i * 30;
    clouds += `<g transform="translate(${x} ${y})" fill="#fff" opacity=".92"><ellipse rx="110" ry="40"/><ellipse cx="-70" cy="10" rx="70" ry="30"/><ellipse cx="80" cy="12" rx="80" ry="30"/></g>`; }
  const a = t * 40;
  let sails = '';
  for (let k = 0; k < 4; k++) sails += `<g transform="rotate(${a + k * 90})"><line x1="0" y1="0" x2="0" y2="-230" stroke="#5A3E2B" stroke-width="8"/><path d="M0 -40 L60 -60 L60 -225 L0 -228 Z" fill="#F5EFE2" stroke="#8A6A4A" stroke-width="3"/></g>`;
  let stakes = '';
  const pts = [[260, 1060], [820, 1040], [900, 1300], [180, 1320]];
  pts.forEach(([x, y]) => stakes += `<rect x="${x - 6}" y="${y - 60}" width="12" height="70" fill="#C98A3E"/><path d="M${x - 6} ${y - 60} h12 l-6 -14 Z" fill="#E2365B"/>`);
  const sway = Math.sin(t * 1.6) * 4;
  let grass = '';
  for (let i = 0; i < 26; i++) { const x = 20 + i * 42, h = 30 + (i % 3) * 14; grass += `<path d="M${x} 1920 q ${sway} ${-h} ${6 + sway * 1.5} ${-h * 1.8}" stroke="#4E8A3A" stroke-width="7" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#osk)"/>${clouds}
   <path d="M0 800 Q 270 700 540 760 T 1080 720 V 1920 H0Z" fill="#8DBE5A"/>
   <path d="M0 880 Q 300 820 620 870 T 1080 850 V 1920 H0Z" fill="#76A94A"/>
   <g transform="translate(830 560)"><path d="M-70 300 L-50 40 H50 L70 300 Z" fill="#F7F4EC" stroke="#D8D0C0" stroke-width="4"/><path d="M-62 40 Q 0 -40 62 40 Z" fill="#B65A3A"/><rect x="-18" y="220" width="36" height="80" rx="18" fill="#6B4A32"/><rect x="-14" y="110" width="28" height="36" fill="#2F5D8A"/>
     <g transform="translate(0 30)">${sails}<circle r="16" fill="#5A3E2B"/></g></g>
   <path d="M0 960 L1080 940 V1920 H0Z" fill="#A9784A"/>
   <path d="M0 960 L1080 940 V990 L0 1010Z" fill="#8C6239"/>
   ${stakes}
   <polyline points="${pts.map(p => p[0] + ',' + (p[1] - 40)).join(' ')} ${pts[0][0]},${pts[0][1] - 40}" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="10 6"/>
   <g transform="translate(130 760) rotate(${Math.sin(t * 1.3) * 1.5})"><rect x="-8" y="60" width="16" height="200" fill="#6B4A32"/><rect x="-140" y="-40" width="280" height="120" rx="10" fill="#FFD45C" stroke="#0B2343" stroke-width="6"/>
     <text x="0" y="8" text-anchor="middle" font-family="Inter" font-weight="900" font-size="42" fill="#0B2343">VENDE-SE</text><text x="0" y="56" text-anchor="middle" font-family="Inter" font-weight="900" font-size="42" fill="#C8202C">TERRENO</text></g>
   ${grass}`,
   `<linearGradient id="osk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5DB3E8"/><stop offset="1" stop-color="#CDEBF7"/></linearGradient>`);
}

function feiraSVG(t = 0) {
  const flag = (x, y, c) => { const w = Math.sin(t * 5 + x) * 10; return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 80}" stroke="#3A2A20" stroke-width="5"/><path d="M${x} ${y - 80} q 30 ${w} 60 0 q -30 ${-w} -60 0 v34 q 30 ${w} 60 0 v-34" fill="${c}"/>`; };
  const tower = (x, w, h) => `<rect x="${x - w / 2}" y="${880 - h}" width="${w}" height="${h}" fill="#C9B79A"/><path d="M${x - w / 2 - 12} ${880 - h} L${x} ${880 - h - 130} L${x + w / 2 + 12} ${880 - h} Z" fill="#7A3B2E"/>${flag(x, 880 - h - 128, '#C8202C')}<rect x="${x - 10}" y="${880 - h + 60}" width="20" height="40" rx="10" fill="#3A2A20"/>`;
  let birds = '';
  for (let i = 0; i < 4; i++) { const x = ((t * 45 + i * 260) % 1300) - 100, y = 300 + i * 50 + Math.sin(t * 2 + i) * 20, f = Math.sin(t * 9 + i) * 10;
    birds += `<path d="M${x - 20} ${y} q 10 ${-10 - f} 20 0 q 10 ${-10 - f} 20 0" stroke="#3A2340" stroke-width="5" fill="none"/>`; }
  let trees = '';
  for (let i = 0; i < 12; i++) { const x = i * 100 - 20, y = 1000 + (i % 3) * 30, r = 80 + (i % 2) * 20, s = Math.sin(t * 1.2 + i) * 3;
    trees += `<circle cx="${x + s}" cy="${y}" r="${r}" fill="${i % 2 ? '#3E6B3A' : '#4F7D3F'}"/>`; }
  const sunY = 700 + Math.sin(t * .3) * 8;
  return W(`<rect width="1080" height="1920" fill="url(#fsk)"/><circle cx="820" cy="${sunY}" r="110" fill="#FFD27A" opacity=".95"/>${birds}
   <path d="M0 1000 Q 540 760 1080 1000 V1920 H0Z" fill="#5E8C46"/>
   <g><rect x="300" y="680" width="480" height="200" fill="#D8C7A8"/>
     ${Array.from({ length: 12 }, (_, i) => `<rect x="${300 + i * 40}" y="660" width="24" height="24" fill="#D8C7A8"/>`).join('')}
     ${tower(330, 90, 300)}${tower(750, 90, 300)}${tower(470, 70, 360)}${tower(610, 70, 360)}
     <path d="M500 880 v-90 q 40 -50 80 0 v90 Z" fill="#3A2A20"/></g>
   ${trees}<rect x="0" y="1100" width="1080" height="820" fill="#4A7A3A"/>
   <path d="M540 1100 Q 470 1500 560 1920 H 720 Q 600 1500 600 1100 Z" fill="#B89B72"/>`,
   `<linearGradient id="fsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F28C5B"/><stop offset=".55" stop-color="#F9C77E"/><stop offset="1" stop-color="#FCE3B0"/></linearGradient>`);
}

function bucacoSVG(t = 0) {
  let stars = '';
  for (let i = 0; i < 30; i++) { const x = (i * 137) % 1080, y = 60 + (i * 89) % 500; stars += `<circle cx="${x}" cy="${y}" r="${2 + (i % 3)}" fill="#fff" opacity="${.4 + .5 * Math.abs(Math.sin(t * 2 + i))}"/>`; }
  const cedar = (x, h, c) => `<rect x="${x - 14}" y="${1500 - h * .35}" width="28" height="${h * .35 + 20}" fill="#2A1C14"/>${[0, 1, 2, 3].map(k => `<path d="M${x - 150 + k * 25} ${1500 - h * .3 - k * h * .17} L${x} ${1500 - h * .3 - (k + 1) * h * .2} L${x + 150 - k * 25} ${1500 - h * .3 - k * h * .17} Z" fill="${c}"/>`).join('')}`;
  let fog = '';
  for (let i = 0; i < 4; i++) { const x = ((t * 30 * (i % 2 ? 1 : -1) + i * 400) % 1600) - 300; fog += `<ellipse cx="${x}" cy="${1250 + i * 90}" rx="420" ry="60" fill="#B8C8D8" opacity=".18"/>`; }
  let ff = '';
  for (let i = 0; i < 10; i++) { const x = 100 + (i * 97) % 880 + Math.sin(t * 1.5 + i) * 30, y = 1000 + (i * 61) % 500 + Math.cos(t * 1.2 + i) * 25; ff += `<circle cx="${x}" cy="${y}" r="6" fill="#E9F77A" opacity="${.3 + .7 * Math.abs(Math.sin(t * 3 + i))}"/>`; }
  const sw = Math.sin(t * 2) * 10;
  let steps = '';
  for (let i = 0; i < 7; i++) steps += `<rect x="${380 - i * 30}" y="${1380 + i * 60}" width="${320 + i * 60}" height="60" fill="${i % 2 ? '#5C6A5A' : '#6E7C6A'}"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#bsk)"/>${stars}<circle cx="180" cy="520" r="60" fill="#F4F1DE"/><circle cx="200" cy="505" r="60" fill="#1B2A44"/>
   ${cedar(120, 1300, '#1F3A2C')}${cedar(960, 1400, '#1F3A2C')}${cedar(330, 1000, '#264536')}${cedar(760, 1050, '#264536')}
   <rect x="0" y="1480" width="1080" height="440" fill="#16261E"/>${steps}
   <g transform="translate(860 900) rotate(${sw})"><line x1="0" y1="-200" x2="0" y2="0" stroke="#222" stroke-width="5"/><rect x="-28" y="0" width="56" height="80" rx="10" fill="#3A3A3A"/><rect x="-20" y="10" width="40" height="60" rx="6" fill="#FFC85A"/><circle cy="40" r="90" fill="#FFC85A" opacity=".18"/></g>
   ${fog}${ff}`,
   `<linearGradient id="bsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1830"/><stop offset="1" stop-color="#2A3E4E"/></linearGradient>`);
}
