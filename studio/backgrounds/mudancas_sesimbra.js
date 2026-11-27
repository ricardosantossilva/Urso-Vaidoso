// Backgrounds: mudancasSVG (residential street at dusk with a moving van 'MUDANÇAS', ramp, stacked boxes and a swinging lamp), sesimbraSVG (Sesimbra-style fishing bay at sunset with the hilltop castle, white houses, bobbing colourful boats and gulls)
const W2 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function mudancasSVG(t = 0) {
  let wins = '';
  const cols = ['#F2C9A0', '#E8B4B8', '#F3E2A9'];
  for (let b = 0; b < 3; b++) {
    const bx = b * 360;
    wins += `<rect x="${bx}" y="420" width="360" height="820" fill="${cols[b]}"/><rect x="${bx}" y="400" width="360" height="30" fill="#A8553A"/>`;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 2; c++) {
      const on = Math.sin(t * 0.9 + b * 3 + r * 2 + c) > 0.2;
      wins += `<rect x="${bx + 60 + c * 150}" y="${560 + r * 160}" width="90" height="110" fill="${on ? '#FFE7A0' : '#3E4C66'}" stroke="#fff" stroke-width="6"/>`;
    }
  }
  const lamp = Math.sin(t * 1.8) * 7;
  const boxY = Math.sin(t * 3) * 4;
  return W2(`<rect width="1080" height="1920" fill="url(#dk)"/>
   ${wins}
   <rect x="0" y="1240" width="1080" height="680" fill="#8A8580"/>
   ${Array.from({length: 12}, (_, i) => `<path d="M ${i * 100} 1720 q 50 -30 100 0" stroke="#77726C" stroke-width="6" fill="none"/>`).join('')}
   <rect x="0" y="1240" width="1080" height="40" fill="#B8B2AA"/>
   <g><rect x="80" y="930" width="560" height="330" rx="14" fill="#F4F4F0"/><rect x="640" y="1010" width="230" height="250" rx="20" fill="#E2E2DC"/>
   <rect x="680" y="1040" width="150" height="90" rx="10" fill="#8EC5E8"/>
   <rect x="80" y="1000" width="560" height="70" fill="#0B2343"/>
   <text x="360" y="1050" font-family="Inter" font-weight="900" font-size="54" text-anchor="middle" fill="#FFD45C" letter-spacing="6">MUDANÇAS</text>
   <circle cx="220" cy="1270" r="55" fill="#222"/><circle cx="220" cy="1270" r="22" fill="#999"/><circle cx="760" cy="1270" r="55" fill="#222"/><circle cx="760" cy="1270" r="22" fill="#999"/>
   <circle cx="862" cy="1200" r="12" fill="${Math.floor(t * 2) % 2 ? '#FFB020' : '#7A5A20'}"/></g>
   <g transform="translate(0 ${boxY})"><rect x="880" y="1150" width="150" height="120" fill="#C79A63"/><rect x="880" y="1150" width="150" height="20" fill="#B5844F"/>
   <rect x="900" y="1050" width="110" height="100" fill="#D4AB76"/><text x="955" y="1110" font-family="Inter" font-weight="800" font-size="24" text-anchor="middle" fill="#7A5634">ESPELHOS</text></g>
   <g transform="rotate(${lamp} 990 430)"><line x1="990" y1="430" x2="990" y2="500" stroke="#222" stroke-width="5"/><path d="M 960 500 L 1020 500 L 1005 540 L 975 540 Z" fill="#2A3340"/><circle cx="990" cy="548" r="14" fill="#FFE08A"/></g>`,
   `<linearGradient id="dk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B3566"/><stop offset=".25" stop-color="#C46A6A"/><stop offset=".35" stop-color="#F1A66A"/></linearGradient>`);
}

function sesimbraSVG(t = 0) {
  let houses = '';
  for (let i = 0; i < 12; i++) { const x = 20 + i * 88, h = 90 + (i * 37) % 70; houses += `<rect x="${x}" y="${1010 - h}" width="80" height="${h}" fill="#FBF7EF"/><rect x="${x}" y="${1010 - h}" width="80" height="12" fill="#C76B45"/><rect x="${x + 28}" y="${1010 - h + 35}" width="22" height="30" fill="${['#2E6FA8', '#E2A72E', '#3A9A6A'][i % 3]}"/>`; }
  let boats = '';
  const bc = ['#C8202C', '#2E6FA8', '#E2A72E', '#3A9A6A', '#7A2E3A'];
  for (let i = 0; i < 5; i++) { const x = 90 + i * 190, y = 1140 + (i % 2) * 70 + Math.sin(t * 2 + i) * 8, r = Math.sin(t * 1.6 + i) * 4;
    boats += `<g transform="rotate(${r} ${x + 60} ${y})"><path d="M ${x} ${y} L ${x + 130} ${y} L ${x + 110} ${y + 36} L ${x + 20} ${y + 36} Z" fill="${bc[i]}"/><rect x="${x}" y="${y}" width="130" height="8" fill="#fff"/><line x1="${x + 65}" y1="${y}" x2="${x + 65}" y2="${y - 70}" stroke="#5A3A2A" stroke-width="5"/></g>`; }
  let gulls = ''; for (let i = 0; i < 4; i++) { const x = ((t * 60 + i * 260) % 1200) - 60, y = 560 + i * 35 + Math.sin(t * 2 + i) * 14; gulls += `<path d="M ${x} ${y} q 14 -12 28 0 q 14 -12 28 0" stroke="#fff" stroke-width="5" fill="none"/>`; }
  let ripples = ''; for (let i = 0; i < 10; i++) { const x = (t * 30 + i * 120) % 1080; ripples += `<rect x="${x}" y="${1110 + (i % 4) * 60}" width="70" height="5" rx="2" fill="#fff" opacity=".45"/>`; }
  return W2(`<rect width="1080" height="1920" fill="url(#ss)"/>
   <circle cx="540" cy="${880 + Math.sin(t * .3) * 5}" r="110" fill="#FFD27A"/>
   ${gulls}
   <path d="M 0 900 Q 200 640 480 760 Q 700 600 1080 820 L 1080 1010 L 0 1010 Z" fill="#9A8A5A"/>
   <path d="M 120 760 l 0 -70 l 30 0 l 0 20 l 25 0 l 0 -20 l 30 0 l 0 20 l 25 0 l 0 -20 l 30 0 l 0 70 Z" fill="#C9B48A"/><rect x="260" y="640" width="60" height="120" fill="#C9B48A"/>
   <path d="M 260 640 l 0 -18 l 15 0 l 0 10 l 15 0 l 0 -10 l 15 0 l 0 10 l 15 0 l 0 -10 l 0 18 Z" fill="#C9B48A"/>
   ${houses}
   <rect x="0" y="1010" width="1080" height="910" fill="#2F7FA8"/>
   <rect x="0" y="1010" width="1080" height="910" fill="url(#sw)"/>
   ${ripples}${boats}
   <path d="M 0 1560 Q 540 1500 1080 1560 L 1080 1920 L 0 1920 Z" fill="#E9D3A4"/>`,
   `<linearGradient id="ss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A4E8A"/><stop offset=".3" stop-color="#E5876A"/><stop offset=".5" stop-color="#F6C27A"/></linearGradient>
    <linearGradient id="sw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6C27A" stop-opacity=".45"/><stop offset=".4" stop-color="#2F7FA8" stop-opacity="0"/></linearGradient>`);
}
