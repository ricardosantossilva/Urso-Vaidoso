// New backgrounds (2026-11-15 17:00 diesel VAT video):
// transitoSVG: urban ring-road traffic jam at dusk with overhead electronic message gantry and creeping tail lights
// oficinaSVG: car mechanic workshop with a car up on a lift, tool pegboard, oil drum and a turning wall fan
// arrabidaSVG: Arrábida-style coastal road on limestone hills above a turquoise bay, with a small car and gulls
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function carShape(x, y, s, body, back = true) {
  // back view of a car (tail lights)
  return `<g transform="translate(${x} ${y}) scale(${s})">
    <path d="M-90 -40 Q-80 -95 -45 -100 L45 -100 Q80 -95 90 -40 Z" fill="${body}" opacity=".92"/>
    <rect x="-100" y="-45" width="200" height="70" rx="16" fill="${body}"/>
    <path d="M-62 -48 L-42 -90 L42 -90 L62 -48 Z" fill="#2B3A4F" opacity=".85"/>
    <rect x="-92" y="-30" width="40" height="18" rx="6" fill="#FF3B30"/><rect x="52" y="-30" width="40" height="18" rx="6" fill="#FF3B30"/>
    <rect x="-28" y="-8" width="56" height="18" rx="3" fill="#F2F2F2"/>
    <rect x="-90" y="22" width="34" height="24" rx="6" fill="#1A1A1A"/><rect x="56" y="22" width="34" height="24" rx="6" fill="#1A1A1A"/>
  </g>`;
}

function transitoSVG(t = 0, sign = true) {
  const defs = `<linearGradient id="tsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B2F6B"/><stop offset=".45" stop-color="#C2577A"/><stop offset=".75" stop-color="#F3A35C"/></linearGradient>
  <radialGradient id="tgl"><stop offset="0" stop-color="#FF3B30" stop-opacity=".55"/><stop offset="1" stop-color="#FF3B30" stop-opacity="0"/></radialGradient>`;
  let city = '';
  for (let i = 0; i < 14; i++) { const x = i * 80 - 20, h = 140 + ((i * 53) % 160); city += `<rect x="${x}" y="${860 - h}" width="74" height="${h}" fill="#3A3360"/>`;
    for (let r = 0; r < Math.floor(h / 40); r++) for (let c = 0; c < 3; c++) if ((i + r + c) % 3) city += `<rect x="${x + 10 + c * 22}" y="${870 - h + r * 40}" width="12" height="16" fill="#FFD98A" opacity="${0.5 + 0.4 * Math.sin(t * 2 + i + r)}"/>`; }
  // creeping cars in 3 lanes, perspective
  let cars = ''; const cols = ['#C8202C', '#E8E4DA', '#2E6FB5', '#3C3C44', '#E3B341', '#7A8796'];
  for (let lane = 0; lane < 3; lane++) for (let k = 0; k < 4; k++) {
    const depth = ((k + (t * 0.06 + lane * 0.13)) % 4) / 4; const sc = 0.45 + depth * 1.2;
    const y = 930 + depth * 760; const x = 540 + (lane - 1) * (120 + depth * 330);
    cars += `<ellipse cx="${x}" cy="${y - 10}" rx="${150 * sc}" ry="${50 * sc}" fill="url(#tgl)"/>` + carShape(x, y, sc, cols[(lane * 4 + k) % 6]);
  }
  // sort not needed much; draw far first by building order
  const blink = (Math.floor(t * 2) % 2) ? '#FFB020' : '#FF8A00';
  return W(`<rect width="1080" height="1920" fill="url(#tsk)"/>
    <circle cx="820" cy="700" r="70" fill="#FFD27A" opacity=".8"/>
    ${city}
    <path d="M0 860 L1080 860 L1080 1920 L0 1920 Z" fill="#4A4A55"/>
    <path d="M440 860 L640 860 L1080 1500 L1080 1920 L0 1920 L0 1500 Z" fill="#55555F"/>
    ${[-1, 1].map(d => `<path d="M${540 + d * 70} 860 L${540 + d * 420} 1920" stroke="#F2F2F2" stroke-width="10" stroke-dasharray="50 50" stroke-dashoffset="${-t * 30}"/>`).join('')}
    <path d="M0 880 L1080 880" stroke="#9A9AA6" stroke-width="16"/>
    ${cars}
    ${sign ? '' : '<!--'}<g><rect x="40" y="430" width="22" height="470" fill="#5E6A78"/><rect x="1018" y="430" width="22" height="470" fill="#5E6A78"/>
      <rect x="30" y="430" width="1020" height="34" fill="#6E7A88"/>
      <rect x="250" y="464" width="580" height="170" rx="10" fill="#111"/>
      <rect x="262" y="476" width="556" height="146" rx="6" fill="#050505"/>
      <text x="540" y="535" text-anchor="middle" font-family="monospace" font-weight="900" font-size="46" fill="${blink}">TRÂNSITO LENTO</text>
      <text x="540" y="597" text-anchor="middle" font-family="monospace" font-weight="900" font-size="46" fill="${blink}">+12 MIN</text></g>${sign ? '' : '-->'}
  `, defs);
}

function oficinaSVG(t = 0) {
  const defs = `<linearGradient id="ow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5D7A8C"/><stop offset="1" stop-color="#46606F"/></linearGradient>`;
  let tools = '';
  for (let i = 0; i < 6; i++) { const x = 120 + i * 60, sw = Math.sin(t * 1.5 + i) * 3;
    tools += `<g transform="translate(${x} 470) rotate(${sw})"><rect x="-5" y="0" width="10" height="${90 + (i % 3) * 20}" rx="4" fill="#B7C0C8"/><circle cx="0" cy="${100 + (i % 3) * 20}" r="${14 + (i % 2) * 5}" fill="none" stroke="#B7C0C8" stroke-width="8"/></g>`; }
  const fa = t * 400;
  const blades = [0, 120, 240].map(a => `<ellipse cx="0" cy="-34" rx="16" ry="36" fill="#D9DEE3" transform="rotate(${a + fa})"/>`).join('');
  const liftY = 760 + Math.sin(t * 0.8) * 6;
  return W(`<rect width="1080" height="1920" fill="url(#ow)"/>
    <rect x="0" y="420" width="1080" height="14" fill="#F2C230"/><rect x="0" y="434" width="1080" height="10" fill="#222"/>
    <rect x="80" y="450" width="420" height="230" rx="10" fill="#8C6A44"/>${Array.from({ length: 40 }, (_, i) => `<circle cx="${100 + (i % 10) * 40}" cy="${465 + Math.floor(i / 10) * 55}" r="4" fill="#5C4428"/>`).join('')}${tools}
    <g transform="translate(860 560)"><circle r="72" fill="#3B4B57"/><circle r="64" fill="none" stroke="#9AA8B3" stroke-width="5"/>${blades}<circle r="12" fill="#222"/></g>
    <rect x="600" y="470" width="150" height="110" rx="6" fill="#E9EEF2"/><text x="675" y="512" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="26" fill="#C8202C">OFICINA</text><rect x="620" y="530" width="110" height="10" fill="#9AA8B3"/><rect x="620" y="550" width="80" height="10" fill="#9AA8B3"/>
    <rect y="1000" width="1080" height="920" fill="#7B858C"/>${Array.from({ length: 6 }, (_, i) => `<path d="M0 ${1060 + i * 150} L1080 ${1060 + i * 150}" stroke="#6C757B" stroke-width="4"/>`).join('')}
    <ellipse cx="760" cy="1240" rx="120" ry="26" fill="#3A3F44" opacity=".6"/>
    <g><rect x="170" y="${liftY}" width="740" height="22" fill="#F2C230"/>
      <rect x="230" y="${liftY + 22}" width="30" height="${1000 - liftY}" fill="#E0B020"/><rect x="820" y="${liftY + 22}" width="30" height="${1000 - liftY}" fill="#E0B020"/>
      <g transform="translate(540 ${liftY})"><path d="M-330 0 L-330 -70 Q-320 -100 -260 -110 L-150 -190 Q-120 -205 -60 -205 L120 -205 Q170 -205 210 -170 L280 -110 Q330 -100 335 -70 L335 0 Z" fill="#C8202C"/>
        <path d="M-130 -115 L-75 -180 L40 -180 L40 -115 Z M60 -115 L60 -180 L130 -180 Q160 -175 190 -140 L215 -115 Z" fill="#BFE0F2"/>
        <circle cx="-200" cy="0" r="52" fill="#1A1A1A"/><circle cx="-200" cy="0" r="22" fill="#9AA8B3"/><circle cx="210" cy="0" r="52" fill="#1A1A1A"/><circle cx="210" cy="0" r="22" fill="#9AA8B3"/>
        <rect x="300" y="-80" width="30" height="16" rx="4" fill="#FFE07A"/></g></g>
    <g transform="translate(110 900)"><rect x="-50" y="0" width="100" height="140" rx="8" fill="#2F6FB5"/><rect x="-50" y="30" width="100" height="10" fill="#1F4F85"/><rect x="-50" y="95" width="100" height="10" fill="#1F4F85"/></g>
  `, defs);
}

function arrabidaSVG(t = 0) {
  const defs = `<linearGradient id="ask2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC8F0"/><stop offset="1" stop-color="#D7F0FA"/></linearGradient>
  <linearGradient id="asea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1FB5C2"/><stop offset="1" stop-color="#0E7C9A"/></linearGradient>`;
  let gulls = ''; for (let i = 0; i < 3; i++) { const x = (t * 40 + i * 330) % 1200 - 60, y = 470 + i * 60 + Math.sin(t * 2 + i) * 14, f = Math.sin(t * 7 + i) * 8;
    gulls += `<path d="M${x - 26} ${y + f} Q${x - 12} ${y - 10} ${x} ${y} Q${x + 12} ${y - 10} ${x + 26} ${y + f}" stroke="#FFFFFF" stroke-width="5" fill="none"/>`; }
  let waves = ''; for (let i = 0; i < 8; i++) { const y = 1010 + i * 40, o = (t * 30 + i * 70) % 200;
    waves += `<path d="M${-200 + o} ${y} q50 -12 100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0 t100 0" stroke="#BFF3F5" stroke-width="4" fill="none" opacity=".5"/>`; }
  const cp = (t * 0.05) % 1; const cx = 1100 - cp * 1300, cy = 860 + cp * 40;
  return W(`<rect width="1080" height="1920" fill="url(#ask2)"/>
    <ellipse cx="${200 + Math.sin(t * .2) * 30}" cy="560" rx="140" ry="36" fill="#FFFFFF" opacity=".8"/>
    ${gulls}
    <path d="M0 760 Q160 600 340 690 Q480 560 660 650 Q820 540 1080 680 L1080 1000 L0 1000 Z" fill="#5E8F4E"/>
    <path d="M0 830 Q200 720 420 800 Q620 700 860 780 Q980 740 1080 770 L1080 1000 L0 1000 Z" fill="#4C7C3F"/>
    <path d="M620 700 Q660 760 700 820 L760 1000 L560 1000 Z" fill="#E9E1CF" opacity=".9"/>
    <path d="M-50 905 Q300 850 540 875 Q800 900 1130 845" stroke="#6C6C70" stroke-width="34" fill="none"/>
    <path d="M-50 905 Q300 850 540 875 Q800 900 1130 845" stroke="#F2F2F2" stroke-width="3" stroke-dasharray="26 24" fill="none"/>
    <g transform="translate(${cx} ${cy - 22}) scale(.45)"><rect x="-80" y="-40" width="160" height="40" rx="12" fill="#F3C969"/><path d="M-50 -40 L-30 -75 L40 -75 L60 -40 Z" fill="#F3C969"/><circle cx="-45" cy="2" r="18" fill="#222"/><circle cx="45" cy="2" r="18" fill="#222"/></g>
    <rect y="990" width="1080" height="420" fill="url(#asea)"/>${waves}
    <path d="M0 1380 Q300 1340 600 1370 Q850 1395 1080 1360 L1080 1920 L0 1920 Z" fill="#F1E3C2"/>
    <path d="M0 1380 Q300 1340 600 1370 Q850 1395 1080 1360" stroke="#FFFFFF" stroke-width="10" fill="none" opacity="${0.6 + 0.3 * Math.sin(t * 2)}"/>
    ${Array.from({ length: 24 }, (_, i) => `<circle cx="${(i * 149) % 1080}" cy="${1440 + (i * 83) % 460}" r="${3 + (i % 3)}" fill="#DCC9A0"/>`).join('')}
  `, defs);
}
