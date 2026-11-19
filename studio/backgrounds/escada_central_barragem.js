// New backgrounds (2026-11-19 08:00 electricity video):
// escadaSVG: old Lisbon building stairwell with blue azulejo wall, electricity meter cabinet with spinning disc and ticking digits, wooden banister, swinging bulb
// centralSVG: Lisbon riverside at night with a red-brick power station (Central Tejo style), smoking chimneys, moon, river ripples
// barragemSVG: concrete arch dam in a green gorge at dusk (Castelo de Bode style) with spilling water, lattice pylons and power lines
const WL = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function escadaSVG(t = 0) {
  let tiles = '';
  for (let r = 0; r < 14; r++) for (let c = 0; c < 10; c++) {
    const x = c * 110, y = 380 + r * 110;
    tiles += `<rect x="${x}" y="${y}" width="108" height="108" fill="#F4F1EA"/><circle cx="${x + 54}" cy="${y + 54}" r="30" fill="none" stroke="#2F5DA8" stroke-width="8"/><path d="M${x} ${y} l20 0 l-20 20 Z M${x + 108} ${y} l-20 0 l20 20 Z M${x} ${y + 108} l20 0 l-20 -20 Z M${x + 108} ${y + 108} l-20 0 l20 -20 Z" fill="#2F5DA8"/><circle cx="${x + 54}" cy="${y + 54}" r="9" fill="#2F5DA8"/>`;
  }
  const kwh = String(48213 + Math.floor(t * 3)).padStart(6, '0');
  const sw = Math.sin(t * 1.6) * 6;
  const disc = (t * 260) % 360;
  return WL(`<rect width="1080" height="1920" fill="#E9E1D2"/>
   <rect y="0" width="1080" height="380" fill="#D9CDB8"/>
   ${tiles}
   <g transform="translate(540 0) rotate(${sw})"><line x1="0" y1="0" x2="0" y2="90" stroke="#333" stroke-width="5"/><circle cy="112" r="28" fill="#FFE9A8"/><circle cy="112" r="60" fill="#FFE9A8" opacity=".18"/></g>
   <g transform="translate(600 520)">
     <rect x="0" y="0" width="400" height="480" rx="14" fill="#6E4B2E" stroke="#4A3220" stroke-width="10"/>
     <rect x="30" y="30" width="340" height="420" rx="8" fill="#3A2A1C"/>
     <rect x="70" y="60" width="260" height="300" rx="12" fill="#ECEAE2"/>
     <rect x="100" y="90" width="200" height="60" rx="6" fill="#1D1D1D"/>
     <text x="200" y="135" text-anchor="middle" font-family="monospace" font-weight="700" font-size="44" fill="#FFB43A">${kwh}</text>
     <text x="200" y="180" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="26" fill="#333">kWh</text>
     <ellipse cx="200" cy="260" rx="90" ry="22" fill="#BFC3C7"/>
     <g transform="translate(200 260) scale(1 .24) rotate(${disc})"><rect x="-6" y="-90" width="12" height="40" fill="#C8202C"/></g>
     <rect x="120" y="390" width="160" height="34" rx="6" fill="#C8A04A"/>
   </g>
   <g>
     <path d="M0 1500 L1080 1060 L1080 1110 L0 1550 Z" fill="#8A5A34"/>
     ${Array.from({ length: 12 }, (_, i) => { const x = 40 + i * 90, y = 1500 - i * 36.6; return `<rect x="${x}" y="${y - 160}" width="12" height="170" fill="#5E3B20"/>`; }).join('')}
     <path d="M0 1340 L1080 900" stroke="#5E3B20" stroke-width="22" stroke-linecap="round"/>
   </g>
   <rect y="1560" width="1080" height="360" fill="#B9A586"/>
   ${Array.from({ length: 8 }, (_, i) => `<rect x="0" y="${1560 + i * 45}" width="1080" height="4" fill="#A08C6C"/>`).join('')}`);
}

function centralSVG(t = 0) {
  let stars = ''; for (let i = 0; i < 40; i++) { const x = (i * 211) % 1080, y = 380 + (i * 97) % 380; stars += `<circle cx="${x}" cy="${y}" r="${2 + (i % 3)}" fill="#fff" opacity="${0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i))}"/>`; }
  const smoke = (cx, cy, k) => { let s = ''; for (let i = 0; i < 5; i++) { const p = ((t * 0.25 + i / 5 + k) % 1); s += `<circle cx="${cx + p * 120 + Math.sin(p * 6 + k) * 20}" cy="${cy - p * 260}" r="${24 + p * 50}" fill="#C9C4D6" opacity="${0.45 * (1 - p)}"/>`; } return s; };
  const win = (x, y) => `<rect x="${x}" y="${y}" width="60" height="120" rx="30" fill="${Math.sin(t * 1.3 + x * 0.07 + y) > -0.6 ? '#FFC867' : '#8C5A2A'}"/>`;
  let wins = ''; for (let r = 0; r < 2; r++) for (let c = 0; c < 8; c++) wins += win(130 + c * 105, 1010 + r * 170);
  let ripples = ''; for (let i = 0; i < 14; i++) { const y = 1480 + i * 32, off = Math.sin(t * 2 + i) * 40; ripples += `<rect x="${120 + off + (i * 73) % 300}" y="${y}" width="${260 - i * 6}" height="6" rx="3" fill="#FFC867" opacity="${0.5 - i * 0.025}"/>`; }
  return WL(`<rect width="1080" height="1920" fill="url(#cs)"/>${stars}
   <circle cx="880" cy="520" r="70" fill="#FFF4D2"/><circle cx="905" cy="505" r="70" fill="#1B2347" opacity=".0"/>
   ${smoke(250, 690, 0)}${smoke(470, 650, .3)}${smoke(690, 700, .6)}
   <rect x="225" y="690" width="60" height="260" fill="#8E3B26"/><rect x="445" y="650" width="60" height="300" fill="#8E3B26"/><rect x="665" y="700" width="60" height="250" fill="#8E3B26"/>
   ${[225, 445, 665].map(x => `<rect x="${x - 6}" y="${x === 445 ? 650 : x === 225 ? 690 : 700}" width="72" height="16" fill="#6E2A18"/>`).join('')}
   <rect x="80" y="940" width="920" height="420" fill="#A9472C"/>
   <path d="M80 940 L540 860 L1000 940 Z" fill="#7E3420"/>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="${80 + i * 115}" y="940" width="10" height="420" fill="#8E3B26"/>`).join('')}
   ${wins}
   <rect x="0" y="1360" width="1080" height="80" fill="#5B5249"/>
   ${Array.from({ length: 9 }, (_, i) => `<g transform="translate(${60 + i * 125} 1290)"><rect x="-4" y="0" width="8" height="70" fill="#222"/><circle cy="-6" r="14" fill="#FFE2A0"/></g>`).join('')}
   <rect y="1440" width="1080" height="480" fill="#13284A"/>${ripples}`,
   `<linearGradient id="cs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1433"/><stop offset=".7" stop-color="#2B2F63"/><stop offset="1" stop-color="#5A4A7A"/></linearGradient>`);
}

function barragemSVG(t = 0) {
  let spill = ''; for (let i = 0; i < 18; i++) { const p = ((t * 0.9 + i / 18) % 1); spill += `<rect x="${470 + (i % 6) * 24}" y="${980 + p * 300}" width="10" height="${50}" rx="5" fill="#E8F6FF" opacity="${1 - p * 0.6}"/>`; }
  const pylon = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})" stroke="#2D3440" stroke-width="6" fill="none"><path d="M-40 300 L0 0 L40 300 M-30 220 L30 220 M-20 140 L20 140 M-60 60 L60 60 M-50 110 L50 110 M-34 220 L20 140 M34 220 L-20 140"/></g>`;
  const hum = Math.sin(t * 3) * 6;
  let foam = ''; for (let i = 0; i < 10; i++) foam += `<circle cx="${400 + i * 30 + Math.sin(t * 4 + i) * 10}" cy="${1300 + Math.cos(t * 3 + i) * 8}" r="${20 + (i % 3) * 8}" fill="#F4FBFF" opacity=".8"/>`;
  return WL(`<rect width="1080" height="1920" fill="url(#bs)"/>
   <circle cx="200" cy="560" r="80" fill="#FFD9A0" opacity=".9"/>
   ${pylon(130, 560, 1.1)}${pylon(950, 520, 1.25)}
   <path d="M175 575 Q 540 ${640 + hum} 900 545" stroke="#2D3440" stroke-width="4" fill="none"/>
   <path d="M175 640 Q 540 ${705 + hum} 900 615" stroke="#2D3440" stroke-width="4" fill="none"/>
   <path d="M0 780 L260 640 L380 900 L0 1100 Z" fill="#3E7A3E"/><path d="M1080 780 L820 640 L700 900 L1080 1100 Z" fill="#356E38"/>
   <rect x="0" y="880" width="1080" height="90" fill="#4C86B8"/>
   <path d="M220 970 Q 540 900 860 970 L800 1300 Q 540 1240 280 1300 Z" fill="#C9C6BC"/>
   ${Array.from({ length: 7 }, (_, i) => `<path d="M${270 + i * 90} ${955 - Math.sin(i / 6 * Math.PI) * 30} L${300 + i * 72} ${1285 - Math.sin(i / 6 * Math.PI) * 40}" stroke="#ADA99E" stroke-width="5"/>`).join('')}
   <rect x="215" y="940" width="650" height="30" fill="#E2DFD5"/>
   ${spill}
   <path d="M0 1100 L280 1300 L280 1920 L0 1920 Z" fill="#2F6A33"/><path d="M1080 1100 L800 1300 L800 1920 L1080 1920 Z" fill="#2A5F2E"/>
   <rect x="280" y="1300" width="520" height="620" fill="#3C7EB0"/>${foam}
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${300 + ((i * 97 + t * 60) % 460)}" y="${1380 + i * 50}" width="70" height="5" rx="3" fill="#BFE3FF" opacity=".6"/>`).join('')}`,
   `<linearGradient id="bs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6A66B"/><stop offset=".5" stop-color="#F9D3A2"/><stop offset="1" stop-color="#FCE9CF"/></linearGradient>`);
}
