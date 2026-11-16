// serraSVG (Serra da Estrela summit plateau in the first snow: granite boulders, white tower, falling snowflakes, low clouds)
// ferias_officeSVG (HR office on a rainy day: wall holiday planner with coloured blocks May to October, rain-streaked window, swinging lamp)
// fluvialSVG (August river beach in a schist village: wooden deck, diving platform, blazing sun, glittering water, swaying poplars)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function serraSVG(t = 0) {
  let flakes = '';
  for (let i = 0; i < 70; i++) {
    const x = (i * 157 + Math.sin(t * 1.3 + i) * 30) % 1080;
    const y = ((i * 263) % 1920 + t * (60 + (i % 5) * 18)) % 1920;
    flakes += `<circle cx="${x}" cy="${y}" r="${3 + (i % 4) * 2}" fill="#fff" opacity="${0.6 + (i % 3) * 0.13}"/>`;
  }
  const rock = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-120 0 C -130 -70 -60 -120 0 -115 C 70 -118 125 -70 120 0 Z" fill="#8E8A86"/><path d="M-100 -60 C -60 -110 40 -112 90 -70 C 50 -90 -40 -95 -100 -60 Z" fill="#fff"/><path d="M-40 -30 L 10 -50" stroke="#6F6B67" stroke-width="5"/></g>`;
  const cloud = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#E9EEF4" opacity=".85"><ellipse rx="140" ry="40"/><ellipse cx="-70" cy="-20" rx="70" ry="40"/><ellipse cx="60" cy="-25" rx="80" ry="45"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#sk)"/>
   ${cloud(((t * 20) % 1400) - 200, 520, 1.2)}${cloud(((t * 14 + 700) % 1400) - 200, 640, 0.9)}
   <path d="M0 860 L 180 720 L 330 800 L 520 660 L 700 780 L 880 690 L 1080 800 L 1080 1920 L 0 1920 Z" fill="#B9C3CF"/>
   <path d="M180 720 L 230 760 L 140 760 Z M520 660 L 580 712 L 470 705 Z M880 690 L 930 730 L 840 728 Z" fill="#fff"/>
   <path d="M0 960 C 250 900 500 940 1080 900 L 1080 1920 L 0 1920 Z" fill="#F4F7FB"/>
   <g transform="translate(760 780)"><rect x="-40" y="0" width="80" height="190" fill="#EDEDED"/><rect x="-50" y="-30" width="100" height="40" fill="#D9D9D9"/><path d="M-55 -30 L 0 -80 L 55 -30 Z" fill="#fff"/><rect x="-14" y="40" width="28" height="40" fill="#5D6B7A"/><rect x="-14" y="110" width="28" height="40" fill="#5D6B7A"/></g>
   ${rock(180, 1040, 1.1)}${rock(930, 1010, 0.8)}${rock(560, 990, 0.6)}
   <path d="M0 1060 C 300 1010 700 1050 1080 1020 L 1080 1920 L 0 1920 Z" fill="#fff"/>
   ${flakes}`,
   `<linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FA3B8"/><stop offset=".5" stop-color="#C9D4E0"/><stop offset="1" stop-color="#E8EEF4"/></linearGradient>`);
}

function ferias_officeSVG(t = 0) {
  const months = ['JAN','FEV','MAR','ABR','MAI','JUN','JUL','AGO','SET','OUT','NOV','DEZ'];
  let grid = '';
  months.forEach((m, i) => {
    const x = 120 + i * 70, summer = i >= 4 && i <= 9;
    grid += `<rect x="${x}" y="540" width="66" height="300" fill="${summer ? '#FFF3C4' : '#F2F2F2'}"/><text x="${x + 33}" y="575" text-anchor="middle" font-family="Inter" font-weight="800" font-size="24" fill="#0B2343">${m}</text>`;
  });
  const cols = ['#2FA36B', '#E2365B', '#3B7DD8', '#E8A93A', '#7A4BC2'];
  for (let r = 0; r < 5; r++) {
    const s = 4 + ((r * 2) % 4), w = 1 + (r % 2);
    grid += `<rect x="${120 + s * 70 + 6}" y="${600 + r * 46}" width="${w * 70 - 12}" height="30" rx="8" fill="${cols[r]}"/>`;
  }
  let rain = '';
  for (let i = 0; i < 18; i++) { const x = 10 + (i * 29) % 160, y = ((i * 53 + t * 140) % 160); rain += `<line x1="${x}" y1="${y}" x2="${x - 4}" y2="${y + 14}" stroke="#fff" stroke-width="3" opacity=".8"/>`; }
  const sw = Math.sin(t * 1.6) * 6;
  return W(`<rect width="1080" height="1920" fill="#E7DCCB"/>
   <rect x="0" y="1100" width="1080" height="820" fill="#9C7B5B"/><rect x="0" y="1100" width="1080" height="14" fill="#7E6146"/>
   <rect x="90" y="500" width="890" height="380" rx="12" fill="#fff" stroke="#0B2343" stroke-width="8"/>
   <text x="535" y="485" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="#0B2343">MAPA DE FÉRIAS</text>
   ${grid}
   <rect x="800" y="400" width="240" height="0" fill="none"/>
   <g transform="translate(540 380) rotate(${sw})"><line x1="0" y1="-400" x2="0" y2="0" stroke="#333" stroke-width="4"/><path d="M-60 0 L 60 0 L 36 -46 L -36 -46 Z" fill="#2E6B57"/><ellipse cx="0" cy="4" rx="40" ry="10" fill="#FFF3B0" opacity=".9"/></g>
   <rect x="40" y="920" width="220" height="180" fill="#5B7FA6" opacity=".25"/>
   <g transform="translate(60 930)"><rect width="180" height="170" rx="10" fill="#C9D9E8" stroke="#fff" stroke-width="10"/>${rain}</g>
   <g transform="translate(900 1000)"><rect x="-20" y="0" width="40" height="100" fill="#6B4A32"/><circle cy="-10" r="60" fill="#3E8E5E"/><circle cx="-40" cy="20" r="40" fill="#3E8E5E"/><circle cx="40" cy="25" r="40" fill="#357A50"/></g>`);
}

function fluvialSVG(t = 0) {
  let glit = '';
  for (let i = 0; i < 24; i++) { const x = (i * 131) % 1080, y = 1000 + (i * 47) % 140; glit += `<rect x="${x}" y="${y}" width="${30 + (i % 3) * 14}" height="5" rx="2" fill="#fff" opacity="${0.3 + 0.6 * Math.abs(Math.sin(t * 3 + i))}"/>`; }
  const poplar = (x, y, s, ph) => `<g transform="translate(${x} ${y}) rotate(${Math.sin(t * 1.4 + ph) * 2}) scale(${s})"><rect x="-8" y="0" width="16" height="120" fill="#6B4A32"/><ellipse cx="0" cy="-90" rx="46" ry="140" fill="#4C9A3F"/></g>`;
  const house = (x, y, c) => `<g transform="translate(${x} ${y})"><rect width="110" height="90" fill="${c}"/><path d="M-8 0 L 55 -40 L 118 0 Z" fill="#4A4A55"/><rect x="40" y="40" width="28" height="50" fill="#5A3A22"/></g>`;
  const r = 1 + Math.sin(t * 2) * 0.05;
  return W(`<rect width="1080" height="1920" fill="url(#sum)"/>
   <g transform="translate(860 520) scale(${r})"><circle r="95" fill="#FFE066"/><circle r="140" fill="#FFE066" opacity=".25"/></g>
   <path d="M0 820 C 200 700 400 760 600 690 C 800 630 950 700 1080 660 L 1080 1000 L 0 1000 Z" fill="#6E9E4B"/>
   ${house(120, 780, '#8C7B6A')}${house(250, 800, '#A08E79')}${house(380, 770, '#7D6D5E')}
   ${poplar(620, 900, 1, 0)}${poplar(700, 920, 0.85, 1)}${poplar(990, 900, 1.05, 2)}
   <rect x="0" y="980" width="1080" height="200" fill="#3FA7C9"/>${glit}
   <g transform="translate(560 960)"><rect x="0" y="0" width="300" height="20" fill="#B07A47"/><rect x="20" y="20" width="12" height="80" fill="#8A5E36"/><rect x="270" y="20" width="12" height="80" fill="#8A5E36"/><rect x="230" y="-90" width="14" height="90" fill="#8A5E36"/><rect x="200" y="-95" width="110" height="14" fill="#B07A47"/></g>
   <rect x="0" y="1170" width="1080" height="750" fill="#E9D3A1"/>
   <g transform="translate(130 1180)"><rect x="-6" y="0" width="12" height="90" fill="#fff"/><path d="M-110 0 Q 0 -70 110 0 Z" fill="#E2365B"/><path d="M-110 0 Q -55 -40 0 -64 L 0 0 Z" fill="#fff" opacity=".5"/></g>`,
   `<linearGradient id="sum" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FB3F0"/><stop offset="1" stop-color="#BFE6FA"/></linearGradient>`);
}
