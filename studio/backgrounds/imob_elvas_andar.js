// Backgrounds: imobSVG (real-estate agency shop window at night with listings and rising price chart), elvasSVG (Elvas-style star-fort walls and long Amoreira-style aqueduct at sunset), andarSVG (empty new 'andar modelo' flat with big windows over the river, boxes and a swinging lamp)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function imobSVG(t = 0) {
  let cards = '';
  const prices = ['285.000', '410.000', '199.000', '520.000', '338.000', '265.000'];
  for (let i = 0; i < 6; i++) {
    const c = i % 3, r = Math.floor(i / 3), x = 110 + c * 290, y = 480 + r * 300;
    const glow = 0.75 + 0.25 * Math.sin(t * 3 + i);
    cards += `<g opacity="${glow}"><rect x="${x}" y="${y}" width="250" height="260" rx="10" fill="#FBF5EA"/>
      <rect x="${x + 15}" y="${y + 15}" width="220" height="130" fill="${['#8EC5E8', '#F3C969', '#B9D99A'][c]}"/>
      <path d="M ${x + 60} ${y + 110} L ${x + 125} ${y + 55} L ${x + 190} ${y + 110} Z" fill="#B65A3A"/><rect x="${x + 75}" y="${y + 110}" width="100" height="35" fill="#F2D7A8"/>
      <rect x="${x + 15}" y="${y + 160}" width="160" height="14" rx="5" fill="#9FB3C8"/>
      <text x="${x + 125}" y="${y + 228}" font-family="Inter" font-weight="900" font-size="38" text-anchor="middle" fill="#C8202C">${prices[i]} €</text></g>`;
  }
  const k = (t * 0.5) % 1; let pts = ''; for (let i = 0; i <= 8; i++) { pts += `${150 + i * 95},${1260 - i * 18 - Math.sin(i + t) * 8} `; }
  const neon = Math.floor(t * 2) % 2 ? 1 : 0.45;
  return W(`<rect width="1080" height="1920" fill="#1B2638"/>
   <rect y="0" width="1080" height="420" fill="#141C2A"/>
   <rect x="60" y="420" width="960" height="900" fill="#0E1626" stroke="#4A5D78" stroke-width="16"/>
   <rect x="60" y="420" width="960" height="900" fill="url(#gl)"/>
   ${cards}
   <polyline points="${pts}" fill="none" stroke="#2FA36B" stroke-width="10" opacity=".9"/>
   <path d="M 905 1100 l 40 -10 l -12 38 z" fill="#2FA36B"/>
   <rect x="0" y="1320" width="1080" height="600" fill="#6E6A66"/>
   ${Array.from({length: 12}, (_, i) => `<path d="M ${i * 100} 1500 q 50 -30 100 0" stroke="#5A5652" stroke-width="6" fill="none"/>`).join('')}
   <rect x="300" y="1320" width="480" height="40" fill="#0B2343"/>
   <text x="540" y="1350" font-family="Inter" font-weight="900" font-size="30" text-anchor="middle" fill="#FFD45C" letter-spacing="6" opacity="${neon}">IMOBILIÁRIA · VENDE-SE</text>
   <circle cx="${200 + k * 700}" cy="1700" r="160" fill="#FFD45C" opacity=".05"/>`,
   `<linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".08"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".06"/></linearGradient>`);
}

function elvasSVG(t = 0) {
  let arches = ''; for (let i = 0; i < 14; i++) { const x = -40 + i * 85; arches += `<rect x="${x}" y="980" width="85" height="300" fill="#D9C6A5"/><path d="M ${x + 14} 1280 L ${x + 14} 1080 Q ${x + 42} 1040 ${x + 71} 1080 L ${x + 71} 1280 Z" fill="#E9A86B" opacity=".9"/>`; }
  let arches2 = ''; for (let i = 0; i < 26; i++) { const x = -20 + i * 43; arches2 += `<path d="M ${x + 8} 980 L ${x + 8} 920 Q ${x + 21} 900 ${x + 35} 920 L ${x + 35} 980 Z" fill="#E9A86B" opacity=".9"/>`; }
  let birds = ''; for (let i = 0; i < 4; i++) { const x = ((t * 50 + i * 230) % 1200) - 60, y = 520 + i * 40 + Math.sin(t * 2 + i) * 12; birds += `<path d="M ${x} ${y} q 12 -10 24 0 q 12 -10 24 0" stroke="#5A3A3A" stroke-width="4" fill="none"/>`; }
  const sun = 760 + Math.sin(t * 0.3) * 6;
  return W(`<rect width="1080" height="1920" fill="url(#sk)"/>
   <circle cx="820" cy="${sun}" r="90" fill="#FFE08A"/>
   ${birds}
   <rect x="-20" y="880" width="1120" height="100" fill="#D9C6A5"/>${arches2}
   ${arches}
   <path d="M 0 1280 L 140 1180 L 300 1260 L 470 1160 L 640 1260 L 800 1170 L 960 1260 L 1080 1200 L 1080 1920 L 0 1920 Z" fill="#8E8A6A"/>
   <path d="M 0 1330 L 1080 1330 L 1080 1920 L 0 1920 Z" fill="#7E8A55"/>
   <path d="M 120 1330 L 300 1240 L 480 1330 Z M 600 1330 L 780 1240 L 960 1330 Z" fill="#A79F7C"/>
   ${Array.from({length: 9}, (_, i) => `<ellipse cx="${60 + i * 125}" cy="${1360 + Math.sin(t * 1.5 + i) * 3}" rx="50" ry="24" fill="#5E6B3A"/>`).join('')}`,
   `<linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A3F6E"/><stop offset=".45" stop-color="#E07A5F"/><stop offset=".7" stop-color="#F4B66A"/></linearGradient>`);
}

function andarSVG(t = 0) {
  const sw = Math.sin(t * 1.6) * 8;
  let water = ''; for (let i = 0; i < 6; i++) { const x = 130 + ((t * 40 + i * 160) % 820); water += `<rect x="${x}" y="${820 + (i % 3) * 30}" width="60" height="5" rx="2" fill="#fff" opacity=".6"/>`; }
  const boat = 150 + (t * 25) % 700;
  return W(`<rect width="1080" height="1920" fill="#EFE8DC"/>
   <rect y="0" width="1080" height="420" fill="#E4DCCD"/>
   <rect x="100" y="470" width="880" height="560" fill="#9CC8E6"/>
   <rect x="100" y="770" width="880" height="260" fill="#4E86B0"/>${water}
   <path d="M ${boat} 790 l 70 0 l -12 18 l -46 0 z" fill="#fff"/><path d="M ${boat + 30} 790 l 0 -50 l 26 46 z" fill="#fff"/>
   <path d="M 100 770 L 300 720 L 480 760 L 650 710 L 980 750 L 980 770 Z" fill="#7A9A6A"/>
   <rect x="100" y="470" width="880" height="560" fill="none" stroke="#fff" stroke-width="22"/>
   <rect x="532" y="470" width="16" height="560" fill="#fff"/>
   <rect x="0" y="1200" width="1080" height="720" fill="#C9A27A"/>
   ${Array.from({length: 9}, (_, i) => `<rect x="${i * 120}" y="1200" width="4" height="720" fill="#B38B63"/>`).join('')}
   <rect x="740" y="1130" width="220" height="160" fill="#C79A63"/><rect x="740" y="1130" width="220" height="24" fill="#B5844F"/><rect x="800" y="1050" width="160" height="90" fill="#D4AB76"/>
   <text x="850" y="1225" font-family="Inter" font-weight="800" font-size="30" text-anchor="middle" fill="#7A5634">FRÁGIL</text>
   <g transform="rotate(${sw} 540 370)"><line x1="540" y1="370" x2="540" y2="400" stroke="#333" stroke-width="5"/><path d="M 470 400 L 610 400 L 580 440 L 500 440 Z" fill="#FFD45C"/></g>`);
}
