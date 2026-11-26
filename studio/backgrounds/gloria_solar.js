// Backgrounds: gloriaSVG (Lisbon Glória-style funicular street at dusk), solarSVG (Vila Real-style baroque manor with mirror pond at dusk)
const W2 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function gloriaSVG(t = 0) {
  // steep street rising to the right, yellow funicular car climbing, tiled facades, lamps flickering, clouds
  const p = (t * 0.05) % 1; const cx = 1180 - p * 1500, cy = 1260 - p * 700 * 0.55;
  let lamps = ''; for (let i = 0; i < 4; i++) { const x = 110 + i * 270, y = 1150 - i * 150; const f = .75 + .25 * Math.sin(t * 9 + i * 2); lamps += `<rect x="${x - 5}" y="${y}" width="10" height="200" fill="#2A2A33"/><circle cx="${x}" cy="${y}" r="40" fill="#FFD45C" opacity="${.25 * f}"/><rect x="${x - 16}" y="${y - 30}" width="32" height="34" rx="6" fill="#FFE9A0" opacity="${f}"/>`; }
  let clouds = ''; for (let i = 0; i < 3; i++) { const x = ((t * 14 + i * 400) % 1400) - 200; clouds += `<ellipse cx="${x}" cy="${430 + i * 60}" rx="140" ry="34" fill="#F6C6A6" opacity=".7"/>`; }
  let win = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 3; c++) { const on = (Math.floor(t * 0.7) + r + c) % 3 !== 0; win += `<rect x="${60 + c * 110}" y="${470 + r * 150}" width="60" height="90" fill="${on ? '#FFDB8A' : '#3B4560'}"/>`; win += `<rect x="${700 + c * 110}" y="${420 + r * 140}" width="60" height="90" fill="${(on + c) % 2 ? '#FFDB8A' : '#3B4560'}"/>`; }
  let az = ''; for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) az += `<rect x="${40 + i * 60}" y="${1100 + j * 50}" width="56" height="46" fill="${(i + j) % 2 ? '#2D6CB5' : '#E8F0FA'}"/>`;
  return W2(`<rect width="1080" height="1920" fill="url(#gsk)"/>${clouds}
   <rect x="20" y="420" width="400" height="900" fill="#F2B84B"/>${win}${az}
   <rect x="660" y="380" width="420" height="700" fill="#E9876A"/>
   <path d="M -50 1500 L 1130 840 L 1130 1920 L -50 1920 Z" fill="#8A8A92"/>
   <path d="M -50 1500 L 1130 840" stroke="#D9D2C2" stroke-width="10"/>
   <path d="M -50 1560 L 1130 900" stroke="#3A3A40" stroke-width="6"/><path d="M -50 1620 L 1130 960" stroke="#3A3A40" stroke-width="6"/>
   ${lamps}
   <g transform="translate(${cx} ${cy}) rotate(-29)"><rect x="-200" y="-150" width="400" height="160" rx="14" fill="#F7C531"/><rect x="-200" y="-10" width="400" height="30" fill="#E2E2E2"/>
     ${[0,1,2,3].map(i => `<rect x="${-180 + i * 92}" y="-130" width="74" height="70" rx="6" fill="#2F3B52"/>`).join('')}
     <circle cx="-120" cy="30" r="20" fill="#222"/><circle cx="120" cy="30" r="20" fill="#222"/><rect x="-40" y="-176" width="80" height="26" fill="#333"/></g>
   <rect x="0" y="1820" width="1080" height="100" fill="#5E5E66"/>`,
   `<linearGradient id="gsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3D3F7A"/><stop offset=".5" stop-color="#E88A6A"/><stop offset="1" stop-color="#F7C49A"/></linearGradient>`);
}

function solarSVG(t = 0) {
  // baroque manor house with two wings, central stair, mirror pond with ripples and reflection, cypress, swans, sunset
  let rip = ''; for (let i = 0; i < 6; i++) { const ph = (t * 0.5 + i / 6) % 1; rip += `<ellipse cx="${300 + (i * 173) % 500}" cy="${1420 + (i * 61) % 200}" rx="${40 + ph * 90}" ry="${8 + ph * 12}" fill="none" stroke="#fff" stroke-width="3" opacity="${(1 - ph) * .5}"/>`; }
  const man = (flip) => { const sg = flip ? -1 : 1, y0 = flip ? 2 * 1160 : 0; return `<g transform="translate(0 ${y0}) scale(1 ${sg})">
     <rect x="80" y="860" width="920" height="300" fill="#F3EEE2"/><rect x="80" y="840" width="920" height="24" fill="#4E4A44"/>
     <path d="M 400 860 L 540 640 L 680 860 Z" fill="#F3EEE2"/><path d="M 470 760 L 540 650 L 610 760" stroke="#4E4A44" stroke-width="12" fill="none"/>
     <rect x="140" y="760" width="90" height="100" fill="#4E4A44"/><rect x="850" y="760" width="90" height="100" fill="#4E4A44"/>
     ${[0,1,2,3,4,5,6,7].map(i => `<rect x="${120 + i * 110}" y="${920}" width="50" height="90" rx="20" fill="#3F4A63"/>`).join('')}
     <rect x="480" y="1000" width="120" height="160" fill="#4E4A44"/></g>`; };
  let swans = ''; for (let i = 0; i < 2; i++) { const x = 200 + ((t * 25 + i * 380) % 700); swans += `<g transform="translate(${x} ${1500 + i * 90})"><ellipse cx="0" cy="0" rx="36" ry="16" fill="#fff"/><path d="M 26 -4 q 10 -40 -4 -46" stroke="#fff" stroke-width="9" fill="none"/><circle cx="20" cy="-50" r="6" fill="#F2A33A"/></g>`; }
  let birds = ''; for (let i = 0; i < 4; i++) { const x = ((t * 50 + i * 260) % 1300) - 100, y = 480 + i * 40 + Math.sin(t * 3 + i) * 10; birds += `<path d="M ${x} ${y} q 12 -12 24 0 q 12 -12 24 0" stroke="#2A2A3A" stroke-width="4" fill="none"/>`; }
  return W2(`<rect width="1080" height="1920" fill="url(#ssk)"/><circle cx="540" cy="${560 + Math.sin(t * .3) * 6}" r="80" fill="#FFD9A0" opacity=".9"/>${birds}
   <rect x="0" y="1060" width="1080" height="110" fill="#5F8A4C"/>
   ${[60, 1000].map(x => `<path d="M ${x} 1160 Q ${x - 35} 900 ${x} 700 Q ${x + 35} 900 ${x} 1160" fill="#2F5236"/>`).join('')}
   ${man(false)}
   <rect x="0" y="1160" width="1080" height="560" fill="#5D86A8"/>
   <g opacity=".35">${man(true)}</g>${rip}${swans}
   <rect x="0" y="1700" width="1080" height="220" fill="#B9A98A"/>${Array.from({length: 9}, (_, i) => `<rect x="${i * 125}" y="1700" width="120" height="30" fill="#D8CBAE"/>`).join('')}`,
   `<linearGradient id="ssk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5B5C9A"/><stop offset=".6" stop-color="#F0A07A"/><stop offset="1" stop-color="#F8D2A6"/></linearGradient>`);
}
