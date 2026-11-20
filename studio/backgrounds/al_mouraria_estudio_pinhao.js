// AL backgrounds (20 Nov 2026): mourariaSVG (Mouraria-style narrow street with AL plaque, key lockbox wall, rolling suitcase),
// estudioSVG (tiny holiday-rental studio with a sagging sofa and a popping spring), pinhaoSVG (Douro station with azulejo panels, terraced vineyards and a passing train)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function mourariaSVG(t = 0) {
  const win = (x, y, c) => `<g transform="translate(${x} ${y})"><rect x="-55" y="-80" width="110" height="160" fill="#2C3E50"/><rect x="-48" y="-73" width="96" height="146" fill="#7FB2D6"/><line x1="0" y1="-73" x2="0" y2="73" stroke="${c}" stroke-width="8"/><line x1="-48" y1="0" x2="48" y2="0" stroke="${c}" stroke-width="8"/><rect x="-70" y="80" width="140" height="14" fill="#E9E1D2"/></g>`;
  let laundry = ''; const cols = ['#E2365B', '#FFD45C', '#5DA7CF', '#FFFFFF', '#7CC07A'];
  for (let i = 0; i < 5; i++) { const sw = Math.sin(t * 2.4 + i) * 7; laundry += `<g transform="translate(${190 + i * 150} 520) rotate(${sw})"><rect x="-40" y="0" width="80" height="${90 + (i % 2) * 30}" rx="6" fill="${cols[i]}"/></g>`; }
  const sx = ((t * 120) % 1500) - 250;
  const boxes = Array.from({ length: 6 }, (_, i) => { const x = 700 + (i % 3) * 70, y = 1010 + Math.floor(i / 3) * 80; const open = i === 4 ? Math.max(0, Math.sin(t * 2)) * 20 : 0; return `<g transform="translate(${x} ${y})"><rect x="-26" y="-32" width="52" height="64" rx="8" fill="#3A3F47"/><rect x="-18" y="-20" width="36" height="22" rx="3" fill="#8C939E"/><rect x="-26" y="-32" width="52" height="${open}" fill="#202328"/><circle cy="18" r="5" fill="#C9CED6"/></g>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="#BFE3F5"/>
   <rect x="0" y="380" width="1080" height="20" fill="#9AA6B0"/>
   <path d="M0 0 L0 1500 L420 1500 L420 120 Q 300 60 200 120 L0 60 Z" fill="#F4C46A"/>
   <path d="M1080 0 L1080 1500 L620 1500 L620 160 Q 800 90 1080 140 Z" fill="#F2EEE6"/>
   <rect x="620" y="160" width="460" height="1340" fill="url(#az)"/>
   <rect x="440" y="380" width="160" height="1120" fill="#E7D3B0"/>
   <line x1="0" y1="500" x2="1080" y2="520" stroke="#555" stroke-width="3"/>${laundry}
   ${win(110, 760, '#2E7D5B')}${win(300, 760, '#2E7D5B')}${win(760, 760, '#1F4E8C')}${win(960, 760, '#1F4E8C')}
   <g transform="translate(160 1180)"><rect x="-90" y="-170" width="180" height="320" rx="8" fill="#2E7D5B"/><rect x="-74" y="-150" width="148" height="140" rx="6" fill="#3E9670"/><circle cx="60" cy="40" r="10" fill="#E8C14A"/></g>
   <g transform="translate(440 1040)"><rect x="-70" y="-46" width="140" height="92" rx="10" fill="#1F4E8C" stroke="#fff" stroke-width="6"/><text y="20" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="58" fill="#fff">AL</text></g>
   ${boxes}
   <rect y="1500" width="1080" height="420" fill="#D9D2C3"/>
   ${Array.from({ length: 40 }, (_, i) => `<rect x="${(i * 113) % 1080}" y="${1520 + (i * 53) % 380}" width="60" height="26" rx="6" fill="${i % 2 ? '#CFC6B4' : '#E5DFD1'}"/>`).join('')}
   <g transform="translate(${sx} 1500)"><rect x="-55" y="-150" width="110" height="140" rx="16" fill="#C8202C"/><rect x="-6" y="-210" width="12" height="62" fill="#333"/><rect x="-30" y="-218" width="60" height="12" rx="6" fill="#333"/><circle cx="-35" cy="-6" r="10" fill="#222"/><circle cx="35" cy="-6" r="10" fill="#222"/></g>`, `<pattern id="az" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#F6F7FB"/><path d="M30 6 L54 30 L30 54 L6 30 Z" fill="none" stroke="#2E5C9A" stroke-width="5"/><circle cx="30" cy="30" r="7" fill="#2E5C9A"/></pattern>`);
}

function estudioSVG(t = 0) {
  const sp = Math.abs(Math.sin(t * 5)) * 40;
  const gx = ((t * 70) % 1400) - 200, gy = 470 + Math.sin(t * 3) * 14;
  return W(`<rect width="1080" height="1920" fill="#E8C9A6"/>
   <rect y="0" width="1080" height="1920" fill="url(#wp)" opacity=".5"/>
   <g transform="translate(760 560)"><rect x="-220" y="-170" width="440" height="340" fill="#6B4A32"/><rect x="-200" y="-150" width="400" height="300" fill="#9FD3F0"/>
     <path d="M-200 80 L-140 30 L-80 70 L-10 10 L60 60 L120 20 L200 70 L200 150 L-200 150 Z" fill="#C46A4A"/><path d="M-200 110 L200 110 L200 150 L-200 150 Z" fill="#B65A3A"/>
     <line x1="0" y1="-150" x2="0" y2="150" stroke="#6B4A32" stroke-width="10"/></g>
   <g transform="translate(${gx} ${gy})"><path d="M-30 0 Q -15 ${-14 + Math.sin(t * 9) * 8} 0 0 Q 15 ${-14 + Math.sin(t * 9) * 8} 30 0" stroke="#fff" stroke-width="8" fill="none"/></g>
   <g transform="translate(250 560) rotate(${Math.sin(t * 1.3) * 1.5})"><rect x="-150" y="-110" width="300" height="220" fill="#FFF8D6" stroke="#B89B5E" stroke-width="6"/>
     <text x="0" y="-55" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="34" fill="#0A1F3C">BEM-VINDOS</text>
     <text x="0" y="-5" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700" font-size="26" fill="#5A6B80">Wi-Fi: ursinho123</text>
     <text x="0" y="35" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700" font-size="26" fill="#5A6B80">Check-out 11h</text>
     <text x="0" y="78" text-anchor="middle" font-size="34">⭐⭐⭐</text></g>
   <rect y="1300" width="1080" height="620" fill="#9C6B43"/>${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${1330 + i * 68}" x2="1080" y2="${1330 + i * 68}" stroke="#7E5434" stroke-width="5"/>`).join('')}
   <g transform="translate(540 1180)">
     <rect x="-430" y="-200" width="860" height="200" rx="40" fill="#4F7A52"/>
     <path d="M-380 0 Q -190 70 0 20 Q 190 70 380 0 L380 120 L-380 120 Z" fill="#5E8C60"/>
     <rect x="-500" y="-120" width="110" height="260" rx="40" fill="#456B47"/><rect x="390" y="-120" width="110" height="260" rx="40" fill="#456B47"/>
     <rect x="-420" y="120" width="20" height="60" fill="#3A2A1C"/><rect x="400" y="120" width="20" height="60" fill="#3A2A1C"/>
     <path d="M120 40 q 10 ${-sp / 2} 0 ${-sp} q -10 -12 0 -24 q 10 -12 0 -24" stroke="#B9BEC5" stroke-width="7" fill="none"/>
     <rect x="-300" y="-60" width="90" height="16" fill="#3E6440"/><rect x="200" y="-30" width="70" height="40" rx="8" fill="#E2365B" opacity=".8"/></g>`,
    `<pattern id="wp" width="90" height="90" patternUnits="userSpaceOnUse"><circle cx="45" cy="45" r="14" fill="#C99A70"/><circle cx="0" cy="0" r="8" fill="#C99A70"/><circle cx="90" cy="90" r="8" fill="#C99A70"/></pattern>`);
}

function pinhaoSVG(t = 0) {
  let terraces = ''; for (let i = 0; i < 9; i++) { const y = 420 + i * 55; terraces += `<path d="M0 ${y + 60} Q 270 ${y - 10} 540 ${y + 30} T 1080 ${y}" stroke="#5E7F2E" stroke-width="14" fill="none"/>`; }
  for (let i = 0; i < 9; i++) { const y = 420 + i * 55; terraces += `<path d="M0 ${y + 70} Q 270 ${y} 540 ${y + 40} T 1080 ${y + 10}" stroke="#C9893D" stroke-width="5" fill="none" stroke-dasharray="14 18"/>`; }
  const tx = 1300 - ((t * 160) % 2400);
  let train = ''; for (let i = 0; i < 4; i++) train += `<g transform="translate(${tx + i * 270} 1040)"><rect x="0" y="-110" width="250" height="110" rx="14" fill="${i ? '#E6E1D6' : '#C8202C'}"/><rect x="18" y="-90" width="214" height="40" rx="6" fill="#2C3E50"/><rect y="-20" width="250" height="12" fill="#1F4E8C"/><circle cx="50" cy="6" r="14" fill="#222"/><circle cx="200" cy="6" r="14" fill="#222"/></g>`;
  const panel = (x) => `<g transform="translate(${x} 1240)"><rect x="-150" y="-110" width="300" height="200" fill="#F4F6FB" stroke="#2E5C9A" stroke-width="10"/><path d="M-130 40 Q -60 -60 0 10 T 130 -10 L130 80 L-130 80 Z" fill="#2E5C9A" opacity=".85"/><circle cx="70" cy="-60" r="22" fill="#2E5C9A"/><path d="M-120 -20 l30 -40 l30 40 Z" fill="#2E5C9A"/></g>`;
  const rip = Array.from({ length: 10 }, (_, i) => { const x = ((i * 157 + t * 40) % 1180) - 50; return `<line x1="${x}" y1="${930 + (i % 4) * 14}" x2="${x + 70}" y2="${930 + (i % 4) * 14}" stroke="#BFE3F5" stroke-width="4" opacity=".7"/>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>
   <circle cx="${860}" cy="${200 + Math.sin(t * .5) * 6}" r="70" fill="#FFE08A"/>
   <path d="M0 420 Q 300 300 600 380 T 1080 330 L1080 920 L0 920 Z" fill="#7FA34A"/>${terraces}
   <rect y="900" width="1080" height="80" fill="#4A8DB7"/>${rip}
   <rect y="980" width="1080" height="80" fill="#8C8577"/><rect y="1045" width="1080" height="12" fill="#5A5246"/>
   ${train}
   <rect y="1060" width="1080" height="380" fill="#F2E4C8"/><rect y="1060" width="1080" height="40" fill="#B65A3A"/>
   ${panel(220)}${panel(860)}
   <g transform="translate(540 1180)"><rect x="-120" y="-40" width="240" height="70" rx="8" fill="#1F4E8C"/><text y="10" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="40" fill="#fff">PINHÃO</text></g>
   <rect y="1440" width="1080" height="480" fill="#C9C0AE"/>${Array.from({ length: 30 }, (_, i) => `<rect x="${(i * 131) % 1080}" y="${1460 + (i * 61) % 440}" width="70" height="24" rx="6" fill="#B8AE9A"/>`).join('')}`,
    `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EC6EA"/><stop offset="1" stop-color="#F3E3C0"/></linearGradient>`);
}
