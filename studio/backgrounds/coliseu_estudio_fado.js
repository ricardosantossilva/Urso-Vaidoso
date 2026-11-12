// New backgrounds: coliseuSVG (old concert hall with red velvet, gilded balconies, sweeping spotlights), estudioSVG (recording studio with mixing desk, vinyl wall, ON AIR lamp, VU meters), fadoSVG (fado house in a stone vault with guitarra portuguesa, candles and azulejo dado)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function coliseuSVG(t = 0) {
  const beam = (x, a, c) => `<g transform="translate(${x} 0) rotate(${a})" opacity=".32"><path d="M-14 0 L14 0 L190 1500 L-190 1500 Z" fill="${c}"/></g>`;
  let balc = '';
  for (let r = 0; r < 3; r++) {
    const y = 560 + r * 150;
    balc += `<path d="M0 ${y} Q540 ${y + 90} 1080 ${y}" fill="none" stroke="#C99A3A" stroke-width="16"/><path d="M0 ${y + 16} Q540 ${y + 106} 1080 ${y + 16} L1080 ${y + 60} Q540 ${y + 150} 0 ${y + 60} Z" fill="#7A1E28"/>`;
    for (let i = 0; i < 12; i++) { const x = 45 + i * 90; balc += `<circle cx="${x}" cy="${y + 40 + Math.sin(i / 11 * Math.PI) * 70}" r="5" fill="#FFE7A0" opacity="${0.6 + 0.4 * Math.sin(t * 3 + i + r)}"/>`; }
  }
  let crowd = '';
  for (let i = 0; i < 26; i++) { const x = (i * 43) % 1080 + 10, h = 40 + (i % 4) * 8, b = Math.abs(Math.sin(t * 4 + i)) * 14; crowd += `<ellipse cx="${x}" cy="${1010 - b}" rx="26" ry="${h}" fill="#1A0D16"/>`; if (i % 5 === 0) crowd += `<rect x="${x + 14}" y="${930 - b}" width="8" height="60" fill="#1A0D16" transform="rotate(20 ${x + 18} ${960 - b})"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#cg)"/>
   <path d="M60 520 Q540 -40 1020 520" fill="none" stroke="#C99A3A" stroke-width="22"/>
   <path d="M90 520 Q540 20 990 520 Z" fill="#3A0F1C"/>
   ${Array.from({ length: 14 }, (_, i) => `<line x1="${540}" y1="${120}" x2="${110 + i * 66}" y2="${510}" stroke="#5A1A2A" stroke-width="5"/>`).join('')}
   <circle cx="540" cy="130" r="40" fill="#FFE7A0" opacity="${0.8 + 0.2 * Math.sin(t * 2)}"/>
   ${balc}
   ${beam(200, -20 + Math.sin(t * 1.3) * 14, '#FFD45C')}${beam(880, 20 + Math.sin(t * 1.1 + 1) * 14, '#7FD3FF')}${beam(540, Math.sin(t * 0.9 + 2) * 18, '#FF7FB0')}
   <rect y="1000" width="1080" height="920" fill="#2A1218"/>
   <rect y="1000" width="1080" height="30" fill="#C99A3A"/>
   <rect y="1030" width="1080" height="890" fill="url(#st)"/>
   ${crowd}
   <path d="M0 0 L0 1000 Q60 700 30 0 Z" fill="#9E1B2C"/><path d="M1080 0 L1080 1000 Q1020 700 1050 0 Z" fill="#9E1B2C"/>`,
    `<linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B0A18"/><stop offset="1" stop-color="#5A1426"/></linearGradient>
     <linearGradient id="st" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6B3A22"/><stop offset="1" stop-color="#3A1E12"/></linearGradient>`);
}

function estudioSVG(t = 0) {
  let vinyl = '';
  for (let i = 0; i < 4; i++) { const x = 160 + i * 250; vinyl += `<rect x="${x - 95}" y="420" width="190" height="190" rx="8" fill="#F4EAD8" stroke="#C9B48E" stroke-width="6"/><g transform="translate(${x} 515) rotate(${t * 40 * (i % 2 ? 1 : -1)})"><circle r="70" fill="#141414"/><circle r="55" fill="none" stroke="#2C2C2C" stroke-width="3"/><circle r="22" fill="${['#C8202C', '#FFD45C', '#2FA36B', '#4A7BD0'][i]}"/><rect x="-2" y="-22" width="4" height="12" fill="#fff"/></g>`; }
  let vu = '';
  for (let i = 0; i < 16; i++) { const h = 30 + Math.abs(Math.sin(t * 6 + i * 0.7)) * 90; vu += `<rect x="${150 + i * 50}" y="${900 - h}" width="34" height="${h}" fill="${h > 100 ? '#FF5A4E' : h > 70 ? '#FFD45C' : '#3DDC84'}"/>`; }
  let knobs = '';
  for (let r = 0; r < 3; r++) for (let i = 0; i < 14; i++) knobs += `<circle cx="${130 + i * 63}" cy="${985 + r * 30}" r="9" fill="${r === 1 ? '#C8202C' : '#D9D9D9'}"/>`;
  const onair = 0.55 + 0.45 * Math.abs(Math.sin(t * 2.4));
  return W(`<rect width="1080" height="1920" fill="#2C3440"/>
   ${Array.from({ length: 12 }, (_, i) => Array.from({ length: 6 }, (_, j) => `<path d="M${i * 92} ${380 + j * 92} l46 46 l-46 46 Z" fill="#3A4452"/>`).join('')).join('')}
   <rect x="0" y="380" width="1080" height="12" fill="#1B2028"/>
   ${vinyl}
   <g transform="translate(540 680)"><rect x="-130" y="-34" width="260" height="68" rx="14" fill="#300" stroke="#111" stroke-width="6"/><rect x="-118" y="-24" width="236" height="48" rx="8" fill="#FF2A2A" opacity="${onair}"/><text x="0" y="14" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="38" fill="#fff">ON AIR</text></g>
   <rect x="110" y="760" width="860" height="160" rx="16" fill="#0F141B"/>
   ${vu}
   <path d="M60 940 L1020 940 L1080 1100 L0 1100 Z" fill="#4A4F58"/>${knobs}
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${220 + i * 66}" y="1060" width="12" height="34" fill="#222"/><rect x="${210 + i * 66}" y="${1066 + Math.sin(t * 2 + i) * 10}" width="32" height="14" rx="3" fill="#EEE"/>`).join('')}
   <rect y="1100" width="1080" height="820" fill="#5A4636"/>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="0" y="${1100 + i * 92}" width="1080" height="4" fill="#4A3A2C"/>`).join('')}
   <g transform="translate(980 760)"><rect x="-6" y="0" width="12" height="400" fill="#222"/><g transform="rotate(${-20 + Math.sin(t) * 3})"><rect x="-26" y="-90" width="52" height="100" rx="26" fill="#9AA3AD"/><rect x="-22" y="-80" width="44" height="60" rx="20" fill="#5D6670"/></g></g>`);
}

function fadoSVG(t = 0) {
  const candle = (x, y, i) => { const f = 1 + 0.15 * Math.sin(t * 13 + i * 2) ; return `<g transform="translate(${x} ${y})"><circle r="70" fill="#FFB347" opacity=".18"/><rect x="-10" y="0" width="20" height="50" fill="#F4EAD8"/><ellipse cx="0" cy="-12" rx="${9 * f}" ry="${20 * f}" fill="#FFC94A"/><ellipse cx="0" cy="-8" rx="4" ry="9" fill="#FFF3C0"/></g>`; };
  const tile = (x, y) => `<g transform="translate(${x} ${y})"><rect width="60" height="60" fill="#F4F1EA" stroke="#BFC9D9" stroke-width="2"/><circle cx="30" cy="30" r="14" fill="none" stroke="#2D5BA8" stroke-width="5"/><path d="M0 0 L12 0 L0 12 Z M60 0 L48 0 L60 12 Z M0 60 L12 60 L0 48 Z M60 60 L48 60 L60 48 Z" fill="#2D5BA8"/></g>`;
  let tiles = ''; for (let i = 0; i < 18; i++) for (let j = 0; j < 4; j++) tiles += tile(i * 60, 800 + j * 60);
  const sway = Math.sin(t * 1.6) * 3;
  return W(`<rect width="1080" height="1920" fill="#5B3B2A"/>
   <path d="M0 380 L0 800 L1080 800 L1080 380 Q540 120 0 380 Z" fill="#E9DCC4"/>
   ${Array.from({ length: 9 }, (_, i) => `<path d="M${i * 135} ${380 - Math.sin(i / 8 * Math.PI) * 200} L${i * 135} 800" stroke="#D6C4A4" stroke-width="3"/>`).join('')}
   <path d="M0 380 Q540 120 1080 380" fill="none" stroke="#A88C66" stroke-width="18"/>
   <g transform="translate(250 640) rotate(${-60 + sway}) scale(.8)"><ellipse cx="0" cy="190" rx="105" ry="115" fill="#B5713A"/><circle cx="0" cy="190" r="30" fill="#3A2210"/><rect x="-14" y="-120" width="28" height="250" fill="#6B3E1E"/><path d="M-50 -170 Q0 -230 50 -170 L30 -120 L-30 -120 Z" fill="#C9A24A"/>${[-24, -8, 8, 24].map(x => `<line x1="${x / 3}" y1="-150" x2="${x / 2}" y2="270" stroke="#EEE" stroke-width="2"/>`).join('')}</g>
   <g transform="translate(760 430)"><rect x="-120" y="0" width="240" height="300" fill="#2A1A12" stroke="#C99A3A" stroke-width="10"/><path d="M-100 40 Q0 ${110 + sway * 4} 100 40 L80 280 L-80 280 Z" fill="#111"/>${Array.from({ length: 9 }, (_, i) => `<line x1="${-80 + i * 20}" y1="280" x2="${-82 + i * 20 + sway}" y2="${300}" stroke="#111" stroke-width="3"/>`).join('')}</g>
   ${tiles}
   <rect y="1040" width="1080" height="880" fill="#3E2A1E"/>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${i * 180}" y="1040" width="176" height="880" fill="#46301F"/>`).join('')}
   <rect x="60" y="960" width="300" height="20" fill="#7A4E2E"/><rect x="720" y="960" width="300" height="20" fill="#7A4E2E"/>
   <rect x="60" y="930" width="300" height="34" fill="#F4F1EA"/><rect x="720" y="930" width="300" height="34" fill="#F4F1EA"/>
   <path d="M60 930 l50 34 l50 -34 l50 34 l50 -34 l50 34 l50 -34" fill="none" stroke="#C8202C" stroke-width="4"/>
   <path d="M720 930 l50 34 l50 -34 l50 34 l50 -34 l50 34 l50 -34" fill="none" stroke="#C8202C" stroke-width="4"/>
   ${candle(140, 880, 0)}${candle(280, 880, 1)}${candle(800, 880, 2)}${candle(940, 880, 3)}
   ${candle(540, 1000, 4)}`);
}
