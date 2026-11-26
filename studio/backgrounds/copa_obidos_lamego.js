// Backgrounds: copaSVG (office break room at Christmas), obidosSVG (Óbidos-style walled town gate at night with Christmas lights), lamegoSVG (Lamego-style baroque sanctuary stairway at dusk)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function copaSVG(t = 0) {
  // window with falling rain-like snow, coffee machine with steam, advent calendar, small tree with blinking lights
  let flakes = ''; for (let i = 0; i < 14; i++) { const x = 90 + (i * 37) % 300, y = 470 + ((t * 60 + i * 53) % 330); flakes += `<circle cx="${x}" cy="${y}" r="5" fill="#fff" opacity=".8"/>`; }
  let cal = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { const n = r * 6 + c + 1; const open = n <= 26; cal += `<rect x="${640 + c * 58}" y="${560 + r * 58}" width="50" height="50" rx="6" fill="${open ? '#F3E3C3' : '#C8202C'}" stroke="#7A2E3A" stroke-width="2"/><text x="${665 + c * 58}" y="${594 + r * 58}" font-family="Inter" font-weight="800" font-size="22" text-anchor="middle" fill="${open ? '#7A2E3A' : '#fff'}">${n}</text>`; }
  let lights = ''; const cols = ['#FFD45C', '#E2365B', '#4FC3F7', '#7BD67B'];
  for (let i = 0; i < 12; i++) { const on = Math.floor(t * 3 + i) % 2; const yy = 1040 + i * 26, xx = 900 + Math.sin(i * 1.7) * (20 + i * 6); lights += `<circle cx="${xx}" cy="${yy}" r="9" fill="${cols[i % 4]}" opacity="${on ? 1 : .35}"/>`; }
  let steam = ''; for (let i = 0; i < 3; i++) { const p = ((t * 0.6 + i / 3) % 1); steam += `<path d="M ${210 + i * 18} ${1060 - p * 160} q 18 -20 0 -40 q -18 -20 0 -40" stroke="#fff" stroke-width="8" fill="none" opacity="${(1 - p) * .7}"/>`; }
  return W(`<rect width="1080" height="1920" fill="#E9DCC4"/>
   <rect y="0" width="1080" height="400" fill="#D9C9AC"/>
   <rect x="0" y="1300" width="1080" height="620" fill="#9C7A5B"/>
   ${Array.from({length: 10}, (_, i) => `<rect x="${i * 120}" y="1300" width="118" height="620" fill="${i % 2 ? '#94724F' : '#A6825F'}"/>`).join('')}
   <rect x="60" y="440" width="360" height="380" rx="10" fill="#22385C"/><rect x="80" y="460" width="320" height="340" fill="#3B5C8A"/>
   <rect x="80" y="700" width="320" height="100" fill="#6C7F99"/><rect x="120" y="640" width="60" height="160" fill="#4A5D78"/><rect x="250" y="600" width="80" height="200" fill="#55698A"/>
   ${flakes}<rect x="234" y="460" width="12" height="340" fill="#22385C"/>
   <rect x="610" y="520" width="380" height="290" rx="14" fill="#FBF5EA" stroke="#7A2E3A" stroke-width="6"/>${cal}
   <text x="800" y="508" font-family="Inter" font-weight="900" font-size="34" text-anchor="middle" fill="#7A2E3A">DEZEMBRO</text>
   <rect x="0" y="1120" width="560" height="40" fill="#5B3B26"/><rect x="0" y="1160" width="560" height="160" fill="#7A5236"/>
   <rect x="140" y="930" width="170" height="190" rx="14" fill="#2B2F36"/><rect x="160" y="950" width="130" height="60" rx="6" fill="#89D0E8"/>
   <rect x="195" y="1060" width="60" height="50" rx="8" fill="#fff"/>${steam}
   <rect x="380" y="1060" width="110" height="60" rx="8" fill="#E7B86A"/><text x="435" y="1100" font-family="Inter" font-weight="800" font-size="24" text-anchor="middle" fill="#5B3B26">BOLO</text>
   <path d="M 900 960 L 820 1320 L 980 1320 Z" fill="#2F7A4A"/><path d="M 900 1000 L 840 1200 L 960 1200 Z" fill="#3A9A5C"/>
   <polygon points="900,${930 + Math.sin(t * 3) * 4} 910,958 938,958 915,974 924,1000 900,984 876,1000 885,974 862,958 890,958" fill="#FFD45C"/>
   ${lights}<rect x="880" y="1320" width="40" height="40" fill="#6B4A32"/>`);
}

function obidosSVG(t = 0) {
  // walled town gate at night: crenellated walls, arched gate with blue azulejo inside, string lights, whitewashed houses, stars
  let stars = ''; for (let i = 0; i < 40; i++) { const x = (i * 137) % 1080, y = 420 + (i * 71) % 420; stars += `<circle cx="${x}" cy="${y}" r="${2 + (i % 3)}" fill="#fff" opacity="${.4 + .6 * Math.abs(Math.sin(t * 2 + i))}"/>`; }
  const cren = (x0, x1, y) => { let s = ''; for (let x = x0; x < x1; x += 60) s += `<rect x="${x}" y="${y - 40}" width="36" height="42" fill="#CFC2A8"/>`; return s; };
  let bulbs = ''; const cols = ['#FFD45C', '#FF8A5C', '#FFF2B0'];
  for (let k = 0; k < 3; k++) for (let i = 0; i <= 14; i++) { const x = i * 77, y = 900 + k * 70 + Math.sin(i / 14 * Math.PI) * 60; const on = (Math.floor(t * 4) + i + k) % 3 !== 0; bulbs += `<circle cx="${x}" cy="${y}" r="10" fill="${cols[(i + k) % 3]}" opacity="${on ? 1 : .3}"/>`; }
  let wires = ''; for (let k = 0; k < 3; k++) wires += `<path d="M 0 ${900 + k * 70} Q 540 ${1020 + k * 70} 1080 ${900 + k * 70}" stroke="#2A2A33" stroke-width="3" fill="none"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#osk)"/>${stars}
   <circle cx="880" cy="500" r="60" fill="#FFF6D8"/><circle cx="905" cy="485" r="58" fill="#1C2550"/>
   <rect x="0" y="760" width="1080" height="560" fill="#DCCFB4"/>${cren(0, 1080, 760)}
   <rect x="300" y="620" width="480" height="160" fill="#D4C6AA"/>${cren(300, 780, 620)}
   <path d="M 400 1320 L 400 960 Q 540 800 680 960 L 680 1320 Z" fill="#1E3A6E"/>
   <path d="M 430 1320 L 430 975 Q 540 850 650 975 L 650 1320 Z" fill="#2D5BA8"/>
   ${Array.from({length: 6}, (_, r) => Array.from({length: 4}, (_, c) => `<rect x="${448 + c * 48}" y="${1010 + r * 50}" width="40" height="40" fill="none" stroke="#DCE8FF" stroke-width="3"/><circle cx="${468 + c * 48}" cy="${1030 + r * 50}" r="8" fill="none" stroke="#DCE8FF" stroke-width="3"/>`).join('')).join('')}
   <rect x="0" y="1180" width="300" height="140" fill="#F5F2EA"/><rect x="0" y="1180" width="300" height="16" fill="#E2B43A"/><rect x="60" y="1220" width="50" height="70" fill="#2D5BA8"/><rect x="180" y="1220" width="50" height="50" fill="#FFE59A"/>
   <rect x="780" y="1180" width="300" height="140" fill="#F5F2EA"/><rect x="780" y="1180" width="300" height="16" fill="#2D5BA8"/><rect x="840" y="1220" width="50" height="50" fill="#FFE59A"/><rect x="960" y="1220" width="50" height="70" fill="#E2B43A"/>
   ${wires}${bulbs}
   <rect y="1320" width="1080" height="600" fill="#8E8576"/>
   ${Array.from({length: 40}, (_, i) => `<ellipse cx="${(i * 97) % 1080}" cy="${1360 + (i * 53) % 540}" rx="34" ry="14" fill="#A39A8A"/>`).join('')}`,
   `<linearGradient id="osk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1638"/><stop offset=".45" stop-color="#1C2550"/><stop offset="1" stop-color="#3A3F72"/></linearGradient>`);
}

function lamegoSVG(t = 0) {
  // baroque sanctuary on a hill at dusk with long zigzag white-and-granite stairway, twin towers, swinging bell, flying birds, sun setting
  const sunY = 600 + Math.sin(t * 0.3) * 6;
  let birds = ''; for (let i = 0; i < 5; i++) { const x = (t * 60 + i * 210) % 1200 - 60, y = 470 + i * 30 + Math.sin(t * 2 + i) * 12; const w = Math.sin(t * 9 + i) * 10; birds += `<path d="M ${x - 18} ${y - w} Q ${x - 8} ${y - 10} ${x} ${y} Q ${x + 8} ${y - 10} ${x + 18} ${y - w}" stroke="#3A2540" stroke-width="4" fill="none"/>`; }
  let steps = ''; for (let i = 0; i < 9; i++) { const y = 1000 + i * 36, w = 200 + i * 60; steps += `<rect x="${540 - w / 2}" y="${y}" width="${w}" height="20" fill="#F2EDE4"/><rect x="${540 - w / 2}" y="${y + 20}" width="${w}" height="16" fill="#9C9384"/>`; }
  const sw = Math.sin(t * 3) * 14;
  return W(`<rect width="1080" height="1920" fill="url(#lsk)"/>
   <circle cx="200" cy="${sunY}" r="80" fill="#FFC56B" opacity=".9"/>${birds}
   <path d="M 0 900 Q 270 760 540 820 Q 810 760 1080 900 L 1080 1920 L 0 1920 Z" fill="#4E6B3A"/>
   <g transform="translate(540 0)">
    <rect x="-200" y="700" width="400" height="300" fill="#F4EEE2"/>
    <rect x="-260" y="620" width="90" height="380" fill="#F4EEE2"/><rect x="170" y="620" width="90" height="380" fill="#F4EEE2"/>
    <path d="M -260 620 Q -215 560 -170 620 Z" fill="#8C8273"/><path d="M 170 620 Q 215 560 260 620 Z" fill="#8C8273"/>
    <rect x="-262" y="600" width="94" height="14" fill="#8C8273"/><rect x="168" y="600" width="94" height="14" fill="#8C8273"/>
    <path d="M -200 700 Q 0 600 200 700 Z" fill="#8C8273"/>
    <rect x="-80" y="840" width="160" height="160" rx="70" fill="#4A3A2E"/><circle cx="0" cy="760" r="34" fill="#FFE7A8" stroke="#8C8273" stroke-width="10"/>
    <rect x="-240" y="660" width="50" height="70" rx="22" fill="#3A2E28"/>
    <g transform="translate(-215 672) rotate(${sw})"><path d="M -16 0 Q -16 -24 0 -24 Q 16 -24 16 0 L 20 30 L -20 30 Z" fill="#D9A93A"/></g>
    <rect x="190" y="660" width="50" height="70" rx="22" fill="#3A2E28"/>
    <g transform="translate(215 672) rotate(${-sw})"><path d="M -16 0 Q -16 -24 0 -24 Q 16 -24 16 0 L 20 30 L -20 30 Z" fill="#D9A93A"/></g>
   </g>
   ${steps}
   <rect x="0" y="1320" width="1080" height="600" fill="#5C7A44"/>
   ${Array.from({length: 7}, (_, i) => `<g transform="translate(${80 + i * 150} ${1340 + (i % 2) * 30})"><rect x="-8" y="-150" width="16" height="150" fill="#5A3E2A"/><ellipse cx="0" cy="-170" rx="40" ry="${70 + Math.sin(t * 1.5 + i) * 4}" fill="#2F5A2E"/></g>`).join('')}`,
   `<linearGradient id="lsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B3A78"/><stop offset=".35" stop-color="#C46A7A"/><stop offset=".6" stop-color="#F4A75E"/><stop offset="1" stop-color="#F7CF8A"/></linearGradient>`);
}
