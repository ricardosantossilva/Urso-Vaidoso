// New Lisbon backgrounds, 1080x1920: marquesSVG, roomSVG, miradouroSVG, comercioSVG
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
const calcada = (y0, n, col = '#2B2B2B', bg = '#EDE6D8') => {
  let s = `<rect y="${y0}" width="1080" height="${1920 - y0}" fill="${bg}"/>`;
  for (let r = 0; r < n; r++) { const y = y0 + 40 + r * 54;
    s += `<path d="M-60 ${y} ${Array.from({ length: 11 }, (_, i) => `Q ${i * 120 - 0} ${y - 22} ${i * 120 + 60} ${y}`).join(' ')}" stroke="${col}" stroke-width="11" fill="none" opacity=".8"/>`; }
  return s;
};
function marquesSVG(t = 0) {
  // Parque Eduardo VII slope with hedge stripes, column with statue and lion, roundabout traffic
  let hedges = '';
  for (let i = 0; i < 9; i++) { const y = 560 + i * 60; hedges += `<path d="M${300 - i * 35} ${y} L${780 + i * 35} ${y} L${800 + i * 38} ${y + 30} L${280 - i * 38} ${y + 30} Z" fill="${i % 2 ? '#4E9A4B' : '#6BB45E'}"/>`; }
  const car = (x, y, c, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-70" y="-34" width="140" height="44" rx="14" fill="${c}"/><rect x="-42" y="-60" width="84" height="32" rx="10" fill="${c}"/><rect x="-34" y="-54" width="30" height="22" rx="4" fill="#CFE8F5"/><rect x="4" y="-54" width="30" height="22" rx="4" fill="#CFE8F5"/><circle cx="-40" cy="12" r="14" fill="#222"/><circle cx="40" cy="12" r="14" fill="#222"/></g>`;
  let cars = '';
  [['#C8202C', 0, 1290, 260], ['#F4C430', 400, 1290, 260], ['#2E6DB4', 800, 1290, 260], ['#2B3440', 200, 1360, -320], ['#F7F1E6', 700, 1360, -320]].forEach(([c, off, y, v]) => {
    const x = ((off + t * v) % 1400 + 1400) % 1400 - 160; cars += car(x, y, c, y > 1300 ? 1 : 0.85); });
  const flags = [430, 540, 650].map((x, i) => `<rect x="${x}" y="420" width="6" height="140" fill="#666"/><path d="M${x + 6} 424 q 30 ${8 + Math.sin(t * 4 + i) * 6} 60 0 l0 36 q -30 ${8 + Math.sin(t * 4 + i + 1) * 6} -60 0 Z" fill="${['#006600', '#C8202C', '#2E6DB4'][i]}"/>`).join('');
  return W(`<rect width="1080" height="1920" fill="url(#mSky)"/>
   <circle cx="880" cy="230" r="90" fill="#FFE9A8" opacity=".8"/>
   <path d="M0 620 C 300 520, 780 520, 1080 620 L1080 1250 L0 1250 Z" fill="#5FA25A"/>
   ${flags}${hedges}
   <rect x="0" y="700" width="200" height="560" fill="#F2D7A8"/><rect x="880" y="660" width="200" height="600" fill="#EADDCB"/>
   ${[0, 1, 2, 3].map(r => `<rect x="40" y="${740 + r * 120}" width="50" height="70" fill="#3E5A74"/><rect x="120" y="${740 + r * 120}" width="50" height="70" fill="#3E5A74"/><rect x="910" y="${700 + r * 120}" width="50" height="70" fill="#3E5A74"/><rect x="990" y="${700 + r * 120}" width="50" height="70" fill="#3E5A74"/>`).join('')}
   <ellipse cx="540" cy="1250" rx="620" ry="80" fill="#8D8A84"/>
   <path d="M520 1180 L560 1180 L556 360 L524 360 Z" fill="#E9E1CF"/><rect x="470" y="1120" width="140" height="80" fill="#D8CDBD"/><rect x="440" y="1180" width="200" height="40" fill="#CFC3AE"/>
   <rect x="500" y="340" width="80" height="30" fill="#D8CDBD"/>
   <g fill="#3F4A3C"><path d="M520 340 C 515 300, 530 270, 540 262 C 548 254, 560 262, 558 290 C 570 300, 575 320, 568 340 Z"/><circle cx="545" cy="248" r="14"/>
   <path d="M556 300 L600 330 L600 340 L568 340 Z"/><path d="M575 340 C 585 315, 610 310, 625 322 L628 340 Z"/></g>
   <rect y="1250" width="1080" height="160" fill="#7E7B76"/><path d="M0 1330 L1080 1330" stroke="#F7F1E6" stroke-width="8" stroke-dasharray="60 40"/>
   ${cars}
   ${calcada(1410, 10)}
   <g transform="translate(990 1410)"><rect x="-8" y="-420" width="16" height="420" fill="#2B3440"/><rect x="-26" y="-460" width="52" height="50" rx="8" fill="#2B3440"/><rect x="-18" y="-452" width="36" height="34" fill="#FFE9A8"/></g>`,
   `<linearGradient id="mSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7DC4F0"/><stop offset="1" stop-color="#E9F5FF"/></linearGradient>`);
}
function roomSVG(t = 0) {
  // tiny dark T1 with no window: bare swinging bulb, crack, tiny bed, a painted "window" poster
  const sw = Math.sin(t * 2.2) * 10;
  return W(`<rect width="1080" height="1920" fill="#4A4A40"/>
   <path d="M0 0 L140 180 L940 180 L1080 0 Z" fill="#3A3A32"/><path d="M140 180 L140 1300 L0 1500 L0 0 Z" fill="#3F3F36"/><path d="M940 180 L940 1300 L1080 1500 L1080 0 Z" fill="#3F3F36"/>
   <rect x="140" y="180" width="800" height="1120" fill="#5A5A4E"/>
   <path d="M600 300 L620 360 L600 420 L630 500 L610 560" stroke="#2E2E28" stroke-width="5" fill="none"/>
   <g transform="rotate(${sw} 540 180)"><line x1="540" y1="180" x2="540" y2="430" stroke="#222" stroke-width="5"/><circle cx="540" cy="452" r="26" fill="#FFF3B0"/><circle cx="540" cy="452" r="120" fill="#FFF3B0" opacity=".12"/></g>
   <g transform="translate(230 520) rotate(-3)"><rect width="250" height="300" fill="#C9B48E"/><rect x="18" y="18" width="214" height="264" fill="#9CD3F5"/><circle cx="170" cy="80" r="26" fill="#FFE9A8"/><path d="M18 220 C 80 190, 150 230, 232 200 L232 282 L18 282 Z" fill="#6BB45E"/><line x1="125" y1="18" x2="125" y2="282" stroke="#C9B48E" stroke-width="12"/><line x1="18" y1="150" x2="232" y2="150" stroke="#C9B48E" stroke-width="12"/>
     <rect x="20" y="300" width="210" height="40" fill="#F7F1E6"/><text x="125" y="328" text-anchor="middle" font-family="Inter" font-weight="800" font-size="22" fill="#5A4A2A">"janela"</text></g>
   <g transform="translate(700 1050)"><rect x="0" y="0" width="230" height="110" rx="10" fill="#7A5236"/><rect x="0" y="-30" width="230" height="40" rx="10" fill="#E8E2D6"/><rect x="10" y="-60" width="70" height="40" rx="10" fill="#F7F1E6"/></g>
   <path d="M0 1500 L140 1300 L940 1300 L1080 1500 Z" fill="#6B4A32"/><rect y="1500" width="1080" height="420" fill="#5E4129"/>
   ${[0, 1, 2, 3, 4, 5].map(i => `<line x1="0" y1="${1540 + i * 66}" x2="1080" y2="${1540 + i * 66}" stroke="#4E3520" stroke-width="5"/>`).join('')}
   <rect x="0" y="0" width="1080" height="1920" fill="#000" opacity="${0.12 + 0.04 * Math.sin(t * 9)}"/>`);
}
function miradouroSVG(t = 0) {
  // sunset viewpoint over rooftops, the river and a red suspension bridge
  let roofs = '';
  for (let i = 0; i < 12; i++) { const x = i * 95 - 20, h = 120 + ((i * 53) % 110);
    roofs += `<rect x="${x}" y="${1180 - h}" width="96" height="${h + 100}" fill="${['#F2D7A8', '#E8A98F', '#F6EFE4', '#F3C969', '#EADDCB'][i % 5]}"/><path d="M${x - 6} ${1180 - h} L${x + 48} ${1140 - h} L${x + 102} ${1180 - h} Z" fill="#B65A3A"/><rect x="${x + 30}" y="${1210 - h}" width="34" height="46" fill="#7A5A6A" opacity=".7"/>`; }
  let cables = '';
  for (let i = 0; i <= 14; i++) { const x = 180 + i * 50; const y = 760 + Math.pow((x - 530) / 350, 2) * -100 + 100; cables += `<line x1="${x}" y1="${y}" x2="${x}" y2="900" stroke="#B4302A" stroke-width="3"/>`; }
  let birds = ''; for (let i = 0; i < 3; i++) { const bx = ((t * 50 + i * 300) % 1300) - 100, by = 420 + i * 50, f = Math.sin(t * 9 + i) * 10;
    birds += `<path d="M${bx - 16} ${by - f} Q ${bx - 7} ${by - 10} ${bx} ${by} Q ${bx + 7} ${by - 10} ${bx + 16} ${by - f}" stroke="#4A2A3A" stroke-width="4" fill="none" stroke-linecap="round"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#sun)"/>
   <circle cx="760" cy="760" r="120" fill="#FFD27A" opacity=".95"/>
   <rect y="840" width="1080" height="200" fill="#5E7FA8"/>
   ${[0, 1, 2, 3].map(i => `<path d="M${(i * 260 + t * 30) % 1200 - 100} ${880 + i * 35} l120 0" stroke="#FFD9A0" stroke-width="5" opacity=".7"/>`).join('')}
   <rect x="0" y="895" width="1080" height="16" fill="#B4302A"/>
   <rect x="300" y="700" width="22" height="200" fill="#B4302A"/><rect x="740" y="700" width="22" height="200" fill="#B4302A"/>
   <path d="M0 860 Q 160 700, 311 700 Q 530 900, 751 700 Q 900 700, 1080 860" stroke="#B4302A" stroke-width="6" fill="none"/>${cables}
   ${birds}
   ${roofs}
   <rect y="1290" width="1080" height="630" fill="#D8CDBD"/>
   <rect y="1300" width="1080" height="34" fill="#F2EBDD"/>${Array.from({ length: 14 }, (_, i) => `<rect x="${10 + i * 78}" y="1334" width="34" height="90" rx="14" fill="#F2EBDD"/>`).join('')}<rect y="1420" width="1080" height="26" fill="#F2EBDD"/>
   ${calcada(1446, 9, '#2B2B2B', '#EDE6D8')}
   <g transform="translate(90 1446)"><rect x="-8" y="-500" width="16" height="500" fill="#2B3440"/><rect x="-26" y="-540" width="52" height="50" rx="8" fill="#2B3440"/><rect x="-18" y="-532" width="36" height="34" fill="#FFE9A8"/></g>`,
   `<linearGradient id="sun" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5B5BA8"/><stop offset=".45" stop-color="#F08A6A"/><stop offset=".75" stop-color="#FFC77A"/><stop offset="1" stop-color="#FFE6B0"/></linearGradient>`);
}
function comercioSVG(t = 0) {
  // big square with yellow arcades and the triumphal arch at the back
  const arcade = (x0, w) => { let s = `<rect x="${x0}" y="560" width="${w}" height="700" fill="#F2C94C"/><rect x="${x0}" y="540" width="${w}" height="30" fill="#E3B23C"/>`;
    for (let i = 0; i * 110 < w - 40; i++) { const x = x0 + 30 + i * 110;
      s += `<rect x="${x + 10}" y="640" width="60" height="90" fill="#7A6A4A"/><rect x="${x + 10}" y="790" width="60" height="90" fill="#7A6A4A"/><path d="M${x} 1260 L${x} 1060 Q ${x + 40} 1000 ${x + 80} 1060 L${x + 80} 1260 Z" fill="#B88A2E"/>`; }
    return s; };
  let pig = ''; for (let i = 0; i < 3; i++) { const x = 700 + i * 110, y = 1720 + (i % 2) * 60, h = Math.abs(Math.sin(t * 4 + i)) * 12;
    pig += `<g transform="translate(${x} ${y - h})"><ellipse rx="32" ry="22" fill="#8C97A6"/><circle cx="24" cy="-20" r="14" fill="#7A8594"/><path d="M36 -20 L48 -16 L36 -12 Z" fill="#E8A93A"/></g>`; }
  return W(`<rect width="1080" height="1920" fill="url(#cs)"/>
   ${arcade(-40, 380)}${arcade(740, 380)}
   <rect x="330" y="420" width="420" height="840" fill="#F3EBD8"/><path d="M330 420 L540 330 L750 420 Z" fill="#E8DCC2"/>
   <path d="M420 1260 L420 900 Q 540 790 660 900 L660 1260 Z" fill="#6E8FB0"/>
   <rect x="500" y="470" width="80" height="80" rx="40" fill="#fff" stroke="#C9B48E" stroke-width="6"/><line x1="540" y1="510" x2="540" y2="482" stroke="#333" stroke-width="5"/><line x1="540" y1="510" x2="560" y2="510" stroke="#333" stroke-width="5"/>
   ${[360, 460, 620, 720].map(x => `<rect x="${x - 15}" y="640" width="30" height="620" fill="#E3D7BC"/>`).join('')}
   <g transform="translate(540 1040)" fill="#4A5A48"><rect x="-60" y="60" width="120" height="160" fill="#CFC3AE"/><path d="M-50 60 C -40 0, 40 -20, 60 20 L 70 60 Z"/><circle cx="20" cy="-40" r="16"/><path d="M10 -24 L 30 30 L 0 30 Z"/></g>
   <rect y="1260" width="1080" height="660" fill="#E6DDCB"/>
   ${Array.from({ length: 9 }, (_, i) => `<line x1="${-200 + i * 180}" y1="1920" x2="${540 + (i - 4) * 60}" y2="1260" stroke="#CFC3AE" stroke-width="4"/>`).join('')}
   ${Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${1300 + i * i * 22}" x2="1080" y2="${1300 + i * i * 22}" stroke="#CFC3AE" stroke-width="4"/>`).join('')}
   ${pig}`,
   `<linearGradient id="cs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FB6E8"/><stop offset="1" stop-color="#E4F3FF"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { marquesSVG, roomSVG, miradouroSVG, comercioSVG };
