// New backgrounds (2026-11-12 meal card video): bolhaoSVG (Porto covered market hall with stalls), cantinaSVG (company canteen with tray line and menu board),
// alfaiateSVG (tailor shop with suits on mannequins and fabric rolls), coimbraSVG (Coimbra university tower above the Mondego at sunset)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function bolhaoSVG(t = 0) {
  // two-level market hall: iron and glass roof, wooden stalls with fruit, fish and flowers, hanging bunting
  const stall = (x, y, c, goods) => `<g transform="translate(${x} ${y})"><rect x="0" y="0" width="300" height="40" fill="${c}"/>${Array.from({ length: 6 }, (_, i) => `<path d="M${i * 50} 40 q 25 30 50 0" fill="${i % 2 ? '#fff' : c}"/>`).join('')}<rect x="10" y="60" width="280" height="200" fill="#8A5A3A"/><rect x="0" y="250" width="300" height="24" fill="#6B4A32"/>${goods}</g>`;
  const fruit = (c1, c2) => Array.from({ length: 14 }, (_, i) => `<circle cx="${30 + (i % 7) * 40}" cy="${210 - Math.floor(i / 7) * 34}" r="19" fill="${i % 3 ? c1 : c2}"/>`).join('');
  const flowers = Array.from({ length: 10 }, (_, i) => `<line x1="${30 + i * 26}" y1="240" x2="${30 + i * 26}" y2="${150 + (i % 3) * 14}" stroke="#3F8A44" stroke-width="5"/><circle cx="${30 + i * 26}" cy="${150 + (i % 3) * 14}" r="15" fill="${['#E2365B', '#FFD45C', '#B47AE0', '#FF8A3D'][i % 4]}"/>`).join('');
  const fish = Array.from({ length: 5 }, (_, i) => `<g transform="translate(${50 + i * 50} ${200 + (i % 2) * 18}) rotate(${i % 2 ? 8 : -8})"><ellipse rx="28" ry="10" fill="#A9C4D6"/><path d="M26 0 l16 -10 l0 20 Z" fill="#A9C4D6"/></g>`).join('') + `<rect x="20" y="222" width="260" height="22" fill="#E8F4FA"/>`;
  let bunt = ''; for (let i = 0; i < 18; i++) { const x = i * 64, sw = Math.sin(t * 2 + i) * 4; bunt += `<path d="M${x} ${430 + Math.sin(i * 0.4) * 10} l32 ${50 + sw} l32 ${-50 - sw}" fill="${['#C8202C', '#FFD45C', '#2E6DB4', '#2FA36B'][i % 4]}"/>`; }
  return W(`<rect width="1080" height="1920" fill="#F2E7D2"/>
   <rect width="1080" height="420" fill="url(#bgl)"/>${Array.from({ length: 12 }, (_, i) => `<line x1="${i * 98}" y1="0" x2="${540 + (i * 98 - 540) * 0.7}" y2="420" stroke="#4A5560" stroke-width="8"/>`).join('')}
   ${[100, 220, 340].map(y => `<line x1="0" y1="${y}" x2="1080" y2="${y}" stroke="#4A5560" stroke-width="6"/>`).join('')}
   <rect y="410" width="1080" height="30" fill="#4A5560"/>${bunt}
   <rect y="560" width="1080" height="40" fill="#C9A77A"/>${Array.from({ length: 14 }, (_, i) => `<rect x="${i * 80 + 10}" y="600" width="10" height="160" fill="#4A5560"/>`).join('')}<rect y="600" width="1080" height="16" fill="#4A5560"/>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="${i * 125 + 20}" y="640" width="90" height="110" fill="#E8D9BF"/><rect x="${i * 125 + 30}" y="650" width="70" height="40" fill="${['#C8202C', '#2E6DB4', '#2FA36B'][i % 3]}" opacity=".7"/>`).join('')}
   <rect y="770" width="1080" height="20" fill="#A88A64"/>
   ${stall(30, 820, '#C8202C', fruit('#FF8A3D', '#E2365B'))}${stall(390, 820, '#2E6DB4', fish)}${stall(750, 820, '#2FA36B', flowers)}
   <rect y="1100" width="1080" height="820" fill="#BFB3A0"/>${Array.from({ length: 12 }, (_, r) => Array.from({ length: 9 }, (_, i) => `<rect x="${i * 120 + (r % 2) * 60 - 30}" y="${1100 + r * 70}" width="116" height="66" fill="${(i + r) % 2 ? '#C9BEAA' : '#B5A994'}"/>`).join('')).join('')}`,
   `<linearGradient id="bgl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#CFE8F5"/><stop offset="1" stop-color="#F5FBFF"/></linearGradient>`);
}
function cantinaSVG(t = 0) {
  // company canteen: tiled wall, menu board with daily dish, steaming tray line, windows with city
  let steam = ''; for (let i = 0; i < 5; i++) { const ph = (t * 0.6 + i / 5) % 1; steam += `<path d="M${210 + i * 160} ${960 - ph * 160} q 20 -30 0 -60 q -20 -30 0 -60" stroke="#fff" stroke-width="10" fill="none" opacity="${0.6 * (1 - ph)}"/>`; }
  return W(`<rect width="1080" height="1920" fill="#EAF2F0"/>
   ${Array.from({ length: 14 }, (_, r) => Array.from({ length: 12 }, (_, i) => `<rect x="${i * 90}" y="${r * 70}" width="88" height="68" fill="${(i + r) % 2 ? '#DDEBE7' : '#E8F2EF'}"/>`).join('')).join('')}
   <rect x="60" y="420" width="420" height="340" rx="16" fill="#9CC7E0"/><rect x="60" y="420" width="420" height="340" rx="16" fill="none" stroke="#fff" stroke-width="14"/><line x1="270" y1="420" x2="270" y2="760" stroke="#fff" stroke-width="10"/>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${80 + i * 66}" y="${620 - (i % 3) * 50}" width="50" height="${140 + (i % 3) * 50}" fill="#7FA9C4"/>`).join('')}
   <g transform="translate(560 420)"><rect width="460" height="340" rx="14" fill="#2A3A34"/><rect x="14" y="14" width="432" height="312" rx="8" fill="#33473F"/>
    <text x="230" y="80" text-anchor="middle" font-family="Inter" font-weight="900" font-size="44" fill="#FFD45C">PRATO DO DIA</text>
    ${['Bacalhau à Brás', 'Frango assado', 'Sopa de legumes'].map((d, i) => `<text x="40" y="${150 + i * 60}" font-family="Inter" font-weight="700" font-size="34" fill="#fff">${d}</text><circle cx="400" cy="${140 + i * 60}" r="10" fill="#FFD45C"/>`).join('')}</g>
   <rect y="860" width="1080" height="50" fill="#B8C4C8"/><rect y="910" width="1080" height="130" fill="#8E9CA3"/>
   ${Array.from({ length: 5 }, (_, i) => `<rect x="${140 + i * 160}" y="900" width="140" height="40" rx="6" fill="#C9D3D6"/><ellipse cx="${210 + i * 160}" cy="905" rx="58" ry="14" fill="${['#F3C969', '#E8A93A', '#7CC07A', '#E8A98F', '#F7F1E3'][i]}"/>`).join('')}${steam}
   <rect y="1040" width="1080" height="18" fill="#6E7C83"/><rect y="1058" width="1080" height="12" fill="#C9D3D6"/>
   <rect y="1100" width="1080" height="820" fill="#D9D2C3"/>${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${1100 + i * 100}" x2="1080" y2="${1100 + i * 100}" stroke="#CBC3B2" stroke-width="4"/>`).join('')}`);
}
function alfaiateSVG(t = 0) {
  // tailor shop: wood panelling, rolls of fabric on shelves, mannequins in suits, big gilt mirror, swinging measuring tape
  const mannequin = (x, c, tie) => `<g transform="translate(${x} 560)"><rect x="-6" y="330" width="12" height="160" fill="#4A3426"/><ellipse cx="0" cy="495" rx="70" ry="14" fill="#4A3426"/><circle cy="-10" r="40" fill="#E9D7BC"/><path d="M-90 40 Q -100 300 -70 340 L70 340 Q 100 300 90 40 Q 0 0 -90 40 Z" fill="${c}"/><path d="M-30 40 L0 160 L30 40 Z" fill="#fff"/><path d="M-8 50 L8 50 L12 150 L0 165 L-12 150 Z" fill="${tie}"/><path d="M-30 40 L-55 200 L0 160 Z" fill="${c}" opacity=".85"/><path d="M30 40 L55 200 L0 160 Z" fill="${c}" opacity=".85"/></g>`;
  const sw = Math.sin(t * 1.8) * 8;
  return W(`<rect width="1080" height="1920" fill="#6E4B33"/>
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${i * 110}" y="380" width="104" height="740" fill="#7C563B"/>`).join('')}
   <rect y="380" width="1080" height="16" fill="#4A3426"/>
   ${[420, 520].map(y => `<rect x="20" y="${y + 70}" width="420" height="12" fill="#4A3426"/>`).join('')}
   ${[0, 1].map(r => Array.from({ length: 7 }, (_, i) => `<rect x="${30 + i * 58}" y="${430 + r * 100}" width="52" height="60" rx="6" fill="${['#0B2343', '#3A3A3A', '#7A2E3A', '#5C6B4E', '#8A7A62', '#2E4A6E', '#4A3A5A'][(i + r * 3) % 7]}"/><circle cx="${56 + i * 58}" cy="${460 + r * 100}" r="8" fill="#000" opacity=".25"/>`).join('')).join('')}
   <g transform="translate(560 410)"><rect width="200" height="520" rx="100" fill="#C9A24A"/><rect x="16" y="16" width="168" height="488" rx="84" fill="#CFE2EA"/><path d="M40 120 L120 60 L80 400 Z" fill="#fff" opacity=".35"/></g>
   ${mannequin(200, '#0B2343', '#C8202C')}${mannequin(890, '#3A3A3A', '#FFD45C')}
   <g transform="translate(470 400) rotate(${sw})"><rect x="-5" y="0" width="10" height="20" fill="#4A3426"/><path d="M0 20 C 10 120, -10 220, 0 330" stroke="#FFD45C" stroke-width="16" fill="none"/>${Array.from({ length: 12 }, (_, i) => `<line x1="-6" y1="${30 + i * 25}" x2="2" y2="${30 + i * 25}" stroke="#333" stroke-width="2"/>`).join('')}</g>
   <rect y="1120" width="1080" height="800" fill="#8A6A4E"/>${Array.from({ length: 8 }, (_, i) => `<line x1="0" y1="${1120 + i * 110}" x2="1080" y2="${1120 + i * 110}" stroke="#7A5C42" stroke-width="6"/>`).join('')}
   <ellipse cx="540" cy="1500" rx="420" ry="120" fill="#7A2E3A" opacity=".75"/><ellipse cx="540" cy="1500" rx="380" ry="100" fill="none" stroke="#E7C985" stroke-width="6"/>`);
}
function coimbraSVG(t = 0) {
  // sunset over the Mondego: hilltop university with the clock tower, white houses down the slope, bridge, birds gliding
  let birds = ''; for (let i = 0; i < 4; i++) { const x = ((t * 50 + i * 280) % 1300) - 100, y = 160 + i * 40 + Math.sin(t * 3 + i) * 12; birds += `<path d="M${x} ${y} q 14 -14 28 0 q 14 -14 28 0" stroke="#3A2A3A" stroke-width="5" fill="none"/>`; }
  let houses = ''; for (let i = 0; i < 26; i++) { const x = (i * 97) % 1080, y = 760 + (i % 5) * 46; houses += `<rect x="${x}" y="${y}" width="80" height="70" fill="${i % 4 ? '#F4EADB' : '#F2D7A8'}"/><path d="M${x - 6} ${y} L${x + 40} ${y - 26} L${x + 86} ${y} Z" fill="#C0643E"/><rect x="${x + 14}" y="${y + 22}" width="14" height="20" fill="#5A4A5A"/><rect x="${x + 50}" y="${y + 22}" width="14" height="20" fill="#5A4A5A"/>`; }
  let ripple = ''; for (let i = 0; i < 12; i++) ripple += `<rect x="${(i * 91 + Math.sin(t * 1.5 + i) * 14) % 1080}" y="${1130 + (i % 4) * 40}" width="${40 + (i % 3) * 20}" height="6" rx="3" fill="#FFD9A0" opacity=".6"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#csk)"/><circle cx="820" cy="560" r="110" fill="#FFE2A0" opacity=".9"/>${birds}
   <path d="M0 780 Q 300 640 540 620 Q 800 640 1080 740 L1080 1060 L0 1060 Z" fill="#B88A6A"/>
   <g transform="translate(540 470)"><rect x="-300" y="150" width="600" height="160" fill="#F1E6D2"/>${Array.from({ length: 10 }, (_, i) => `<rect x="${-280 + i * 58}" y="190" width="24" height="44" fill="#6A5A6A"/>`).join('')}
    <rect x="-50" y="-40" width="100" height="200" fill="#F1E6D2"/><rect x="-60" y="-60" width="120" height="24" fill="#E3D4BC"/><path d="M-40 -60 L0 -120 L40 -60 Z" fill="#E3D4BC"/>
    <circle cx="0" cy="20" r="30" fill="#fff" stroke="#6A5A6A" stroke-width="5"/><line x1="0" y1="20" x2="${Math.sin(t * 0.5) * 20}" y2="${20 - Math.cos(t * 0.5) * 20}" stroke="#333" stroke-width="5"/><line x1="0" y1="20" x2="14" y2="26" stroke="#333" stroke-width="5"/>
    <rect x="-20" y="80" width="40" height="60" fill="#6A5A6A"/></g>
   ${houses}
   <rect y="1060" width="1080" height="300" fill="#5C6FA8"/>${ripple}
   <path d="M0 1050 L1080 1050 L1080 1080 L0 1080 Z" fill="#8A7A8A"/>${Array.from({ length: 6 }, (_, i) => `<path d="M${i * 200 - 20} 1080 q 100 90 200 0" fill="none" stroke="#8A7A8A" stroke-width="22"/>`).join('')}
   <rect y="1360" width="1080" height="560" fill="#C9B9A0"/>${Array.from({ length: 7 }, (_, i) => `<line x1="0" y1="${1400 + i * 80}" x2="1080" y2="${1400 + i * 80}" stroke="#B8A88E" stroke-width="5"/>`).join('')}
   ${[120, 960].map(x => `<rect x="${x - 7}" y="1100" width="14" height="270" fill="#2B2B33"/><circle cx="${x}" cy="1090" r="22" fill="#FFE9A8"/><circle cx="${x}" cy="1090" r="66" fill="#FFE9A8" opacity=".2"/>`).join('')}`,
   `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A4A8A"/><stop offset=".5" stop-color="#E88A6A"/><stop offset="1" stop-color="#FFD39A"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { bolhaoSVG, cantinaSVG, alfaiateSVG, coimbraSVG };
