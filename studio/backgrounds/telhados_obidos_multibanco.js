// telhadosSVG (terracotta rooftops at night with smoking chimneys and moon), obidosSVG (walled white village with castle walls, blue/yellow trims and twinkling Christmas lights), multibancoSVG (street corner with a cash machine wall, blinking screen and passing pigeons)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function telhadosSVG(t = 0) {
  let stars = ''; for (let i = 0; i < 40; i++) { const x = (i * 263) % 1080, y = 60 + (i * 157) % 700; const o = 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i)); stars += `<circle cx="${x}" cy="${y}" r="${2 + (i % 3)}" fill="#FFF7D6" opacity="${o.toFixed(2)}"/>`; }
  const roof = (x, y, w, h, c) => `<path d="M${x} ${y + h} L${x + w / 2} ${y} L${x + w} ${y + h} Z" fill="${c}"/>${Array.from({ length: 6 }, (_, i) => `<line x1="${x + w * (i + 1) / 7}" y1="${y + h}" x2="${x + w / 2}" y2="${y}" stroke="#7A2E1E" stroke-width="3" opacity=".5"/>`).join('')}`;
  const chim = (x, y, ph) => { let sm = ''; for (let i = 0; i < 4; i++) { const k = ((t * 0.35 + i / 4 + ph) % 1); sm += `<circle cx="${x + 20 + Math.sin(k * 6 + ph) * 25 + k * 40}" cy="${y - 20 - k * 260}" r="${18 + k * 40}" fill="#C9CCD8" opacity="${(0.55 * (1 - k)).toFixed(2)}"/>`; } return `${sm}<rect x="${x}" y="${y}" width="44" height="90" fill="#B65A3A"/><rect x="${x - 6}" y="${y - 12}" width="56" height="16" fill="#8A3F28"/>`; };
  let wins = ''; [[120, 1150], [330, 1210], [600, 1160], [860, 1220], [470, 1380], [760, 1400]].forEach(([x, y], i) => { const on = Math.sin(t * 0.8 + i * 2) > -0.6; wins += `<rect x="${x}" y="${y}" width="60" height="80" rx="6" fill="${on ? '#FFC95C' : '#2A2F4A'}"/><rect x="${x + 28}" y="${y}" width="4" height="80" fill="#3A2A20"/>`; });
  const line = `<path d="M 40 1060 Q 540 ${1110 + Math.sin(t * 1.5) * 10} 1040 1060" stroke="#555" stroke-width="3" fill="none"/>` + ['#E2365B', '#FFD45C', '#5DA7CF', '#F2F2F2'].map((c, i) => `<rect x="${200 + i * 190}" y="${1085 + Math.sin(t * 1.5) * 8}" width="70" height="90" rx="6" fill="${c}" transform="rotate(${Math.sin(t * 2 + i) * 6} ${235 + i * 190} 1085)"/>`).join('');
  return W(`<rect width="1080" height="1920" fill="url(#ns)"/>${stars}
   <circle cx="860" cy="560" r="110" fill="#FFF3C4"/><circle cx="900" cy="530" r="100" fill="#1E2A55" opacity=".25"/>
   <rect y="980" width="1080" height="940" fill="#E9DCC6"/>
   ${roof(-60, 820, 520, 180, '#C8673F')}${roof(380, 860, 440, 150, '#B65A3A')}${roof(720, 800, 460, 200, '#D07548')}
   ${chim(170, 760, 0)}${chim(560, 800, 0.4)}${chim(930, 740, 0.7)}
   ${line}
   <rect y="1000" width="1080" height="12" fill="#C8B79C"/>${wins}
   <rect y="1560" width="1080" height="360" fill="#B9A890"/>${Array.from({ length: 24 }, (_, i) => `<rect x="${(i % 8) * 140}" y="${1570 + Math.floor(i / 8) * 115}" width="132" height="105" fill="#A99A83"/>`).join('')}`,
    `<linearGradient id="ns" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1638"/><stop offset=".6" stop-color="#2B3A78"/><stop offset="1" stop-color="#4A4F8F"/></linearGradient>`);
}
function obidosSVG(t = 0) {
  let merl = ''; for (let x = 0; x < 1080; x += 60) merl += `<rect x="${x}" y="560" width="36" height="40" fill="#CDBB98"/>`;
  const house = (x, y, w, h, trim) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#FAF7F0"/><rect x="${x}" y="${y + h - 40}" width="${w}" height="40" fill="${trim}"/><rect x="${x}" y="${y}" width="16" height="${h}" fill="${trim}"/><rect x="${x + w - 16}" y="${y}" width="16" height="${h}" fill="${trim}"/><path d="M${x - 10} ${y} L${x + w / 2} ${y - 70} L${x + w + 10} ${y} Z" fill="#C8673F"/><rect x="${x + w / 2 - 30}" y="${y + h - 140}" width="60" height="100" rx="30" fill="#2E5A8A"/><rect x="${x + 30}" y="${y + 40}" width="50" height="60" fill="#5DA7CF"/>`;
  let bulbs = ''; for (let r = 0; r < 3; r++) for (let i = 0; i < 12; i++) { const x = 40 + i * 92, y = 940 + r * 90 + Math.sin(i * 0.9) * 22; const c = ['#FFD45C', '#E2365B', '#7FD3A8', '#FFF'][(i + r) % 4]; const o = 0.35 + 0.65 * Math.abs(Math.sin(t * 3 + i * 1.3 + r)); bulbs += `<circle cx="${x}" cy="${y}" r="11" fill="${c}" opacity="${o.toFixed(2)}"/>`; }
  let flags = `<g transform="translate(880 430)"><rect x="0" y="0" width="6" height="120" fill="#333"/><path d="M6 0 Q 50 ${Math.sin(t * 3) * 10} 90 0 L 90 50 Q 50 ${50 + Math.sin(t * 3 + 1) * 10} 6 50 Z" fill="#C8202C"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#ob)"/>
   ${Array.from({ length: 3 }, (_, i) => { const x = ((t * 18 + i * 400) % 1400) - 200; return `<g transform="translate(${x} ${560 + i * 40})" fill="#fff" opacity=".85"><ellipse rx="90" ry="34"/><ellipse cx="60" cy="-20" rx="60" ry="34"/></g>`; }).join('')}
   <rect x="0" y="600" width="1080" height="260" fill="#D8C7A4"/>${merl}<rect x="380" y="430" width="220" height="430" fill="#CDBB98"/>${Array.from({ length: 4 }, (_, i) => `<rect x="${380 + i * 60}" y="400" width="36" height="40" fill="#CDBB98"/>`).join('')}${flags}
   ${house(-20, 920, 300, 380, '#2E6FB6')}${house(300, 960, 260, 340, '#E8B83A')}${house(580, 930, 260, 370, '#2E6FB6')}${house(860, 970, 260, 330, '#E8B83A')}
   ${bulbs}
   <rect y="1300" width="1080" height="620" fill="#9C9486"/>${Array.from({ length: 60 }, (_, i) => `<ellipse cx="${(i * 97) % 1080}" cy="${1320 + (i * 53) % 600}" rx="34" ry="20" fill="#8A8274"/>`).join('')}
   <g transform="translate(140 1330)"><circle r="56" fill="#3F8A44"/><circle cy="-60" r="40" fill="#3F8A44"/><rect x="-10" y="40" width="20" height="40" fill="#6B4A32"/><circle cx="-20" cy="-10" r="8" fill="#FFD45C" opacity="${(0.4 + 0.6 * Math.abs(Math.sin(t * 4))).toFixed(2)}"/><circle cx="22" cy="10" r="8" fill="#E2365B" opacity="${(0.4 + 0.6 * Math.abs(Math.cos(t * 4))).toFixed(2)}"/></g>`,
    `<linearGradient id="ob" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC3E8"/><stop offset="1" stop-color="#D6EEF8"/></linearGradient>`);
}
function multibancoSVG(t = 0) {
  const blink = Math.sin(t * 5) > 0;
  let pig = ''; for (let i = 0; i < 2; i++) { const x = 100 + ((t * 40 + i * 420) % 900); const hop = Math.abs(Math.sin(t * 6 + i)) * 10; pig += `<g transform="translate(${x} ${1500 - hop})"><ellipse rx="34" ry="22" fill="#8E95A3"/><circle cx="28" cy="-18" r="13" fill="#6E7584"/><path d="M40 -18 l10 3 l-10 3 Z" fill="#E8A93A"/><circle cx="31" cy="-21" r="2.5" fill="#000"/></g>`; }
  return W(`<rect width="1080" height="1920" fill="#F1E3C8"/>
   <rect y="0" width="1080" height="1300" fill="#E9D5AE"/>${Array.from({ length: 13 }, (_, i) => `<rect x="0" y="${i * 100}" width="1080" height="3" fill="#D8C29A"/>`).join('')}
   <rect x="60" y="440" width="260" height="380" rx="10" fill="#3D6E8F"/><rect x="80" y="460" width="220" height="340" fill="#A9D2EA"/><rect x="187" y="460" width="6" height="340" fill="#3D6E8F"/>
   <rect x="760" y="440" width="260" height="380" rx="10" fill="#3D6E8F"/><rect x="780" y="460" width="220" height="340" fill="#A9D2EA"/><rect x="887" y="460" width="6" height="340" fill="#3D6E8F"/>
   <g transform="translate(400 600)"><rect width="280" height="560" rx="18" fill="#5B6573"/><rect x="20" y="20" width="240" height="40" rx="8" fill="#2FA36B"/><text x="140" y="50" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="28" fill="#fff">CAIXA</text>
     <rect x="30" y="90" width="220" height="150" rx="8" fill="${blink ? '#7FD3A8' : '#5DBB8E'}"/><text x="140" y="185" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="70" fill="#0B2343">€</text>
     ${Array.from({ length: 12 }, (_, i) => `<rect x="${55 + (i % 3) * 60}" y="${270 + Math.floor(i / 3) * 44}" width="48" height="34" rx="6" fill="#D9DEE5"/>`).join('')}
     <rect x="60" y="460" width="160" height="16" rx="8" fill="#222"/><rect x="${70 + Math.sin(t * 2) * 6}" y="476" width="140" height="${18 + Math.abs(Math.sin(t * 2)) * 30}" fill="#9FD18B"/></g>
   <rect y="1300" width="1080" height="620" fill="#CFC6B6"/>${Array.from({ length: 10 }, (_, i) => `<rect x="${i * 120 - 20}" y="1300" width="110" height="620" fill="${i % 2 ? '#C3B9A7' : '#D6CDBD'}"/>`).join('')}
   <rect y="1290" width="1080" height="20" fill="#A99A83"/>${pig}
   <g transform="translate(960 1180)"><rect x="-8" y="-280" width="16" height="400" fill="#2B2B2B"/><circle cy="-290" r="34" fill="${(t % 2) < 1 ? '#FFE9A8' : '#FFF4D0'}"/></g>`);
}
