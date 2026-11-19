// New backgrounds: queimaSVG (Coimbra-style Queima das Fitas student street parade with coloured ribbon garlands, black capes and top hats),
// ginasioSVG (school gym turned into a finalists' party: mirror ball, basketball hoop, balloon arch, sweeping spotlights, light-up court),
// sadoSVG (Sado estuary at sunset, Setúbal style, with jumping dolphins, a fishing boat, the Tróia sand spit, storks and the Arrábida hills)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function queimaSVG(t = 0) {
  // faculty ribbon colours (fitas)
  const fitas = ['#E2365B', '#FFD45C', '#2E6DB4', '#2E9E5B', '#9B59D0', '#F07B2E', '#7FD3F0', '#FFFFFF'];
  // old university street: tall ochre / white / pink houses with iron balconies
  const house = (x, w, top, col, trim) => {
    let s = `<rect x="${x}" y="${top}" width="${w}" height="${1300 - top}" fill="${col}"/><rect x="${x - 8}" y="${top - 18}" width="${w + 16}" height="22" fill="${trim}"/>`;
    for (let j = 0; j < 3; j++) for (let i = 0; i < 2; i++) {
      const wx = x + w * (0.14 + i * 0.46), ww = w * 0.3, wy = top + 50 + j * 230;
      if (wy > 1120) continue;
      s += `<rect x="${wx}" y="${wy}" width="${ww}" height="150" rx="${ww / 2}" ry="18" fill="#2C3E57"/><rect x="${wx}" y="${wy}" width="${ww}" height="150" fill="none" stroke="${trim}" stroke-width="8"/>`;
      s += `<path d="M${wx - 12} ${wy + 150} h${ww + 24} M${wx - 12} ${wy + 120} v30 M${wx + ww + 12} ${wy + 120} v30" stroke="#1D1D1D" stroke-width="5" fill="none"/>`;
      for (let k = 0; k < 4; k++) s += `<path d="M${wx - 6 + k * (ww + 12) / 3} ${wy + 122} v28" stroke="#1D1D1D" stroke-width="3"/>`;
    }
    return s;
  };
  // ribbon garlands across the street, ribbons fluttering
  const garland = (y0, sag, ph) => {
    let s = `<path d="M-20 ${y0} Q 540 ${y0 + sag * 2} 1100 ${y0}" stroke="#333" stroke-width="5" fill="none"/>`;
    for (let i = 0; i < 24; i++) {
      const x = -20 + i * 48, u = (x + 20) / 1120, y = y0 + 4 * sag * u * (1 - u);
      const sw = Math.sin(t * 3 + i * 0.9 + ph) * 16;
      s += `<path d="M${x} ${y} q ${sw} 50 ${sw * 0.4} 110" stroke="${fitas[(i + ph) % 8]}" stroke-width="12" fill="none" stroke-linecap="round"/>`;
    }
    return s;
  };
  // students in black capes with top hats and canes, bobbing in the parade
  const student = (x, base, sc, k) => {
    const b = Math.abs(Math.sin(t * 4 + k)) * 10, cane = Math.sin(t * 4 + k) * 18;
    return `<g transform="translate(${x} ${base - b}) scale(${sc})">
      <path d="M-46 0 L-36 -150 Q0 -175 36 -150 L46 0 Z" fill="#111"/>
      <circle cx="0" cy="-185" r="30" fill="#E8C4A0"/>
      <rect x="-30" y="-262" width="60" height="62" fill="#111"/><rect x="-44" y="-206" width="88" height="10" fill="#111"/>
      <rect x="-30" y="-222" width="60" height="9" fill="${fitas[k % 8]}"/>
      <g transform="rotate(${cane} 40 -110)"><path d="M40 -110 L70 -10" stroke="${fitas[(k + 3) % 8]}" stroke-width="9" stroke-linecap="round"/><path d="M40 -110 q 4 -26 26 -20" stroke="${fitas[(k + 3) % 8]}" stroke-width="9" fill="none"/></g>
    </g>`;
  };
  // decorated float (carro alegórico) rolling slowly across
  const fx = ((t * 40) % 1500) - 300;
  const float = `<g transform="translate(${fx} 1250)">
    <rect x="0" y="-120" width="300" height="110" rx="12" fill="#FBF5EA"/>
    ${Array.from({ length: 10 }, (_, i) => `<rect x="${8 + i * 29}" y="-120" width="22" height="110" fill="${fitas[i % 8]}" opacity="0.85"/>`).join('')}
    <circle cx="60" cy="0" r="28" fill="#222"/><circle cx="240" cy="0" r="28" fill="#222"/>
    <text x="150" y="-138" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="#FFD45C" stroke="#111" stroke-width="2">FITAS 🎓</text></g>`;
  // falling confetti
  let conf = '';
  for (let i = 0; i < 40; i++) {
    const y = ((t * (60 + (i % 5) * 18) + i * 97) % 1300) + 300, x = (i * 151) % 1080 + Math.sin(t * 2 + i) * 20;
    conf += `<rect x="${x}" y="${y}" width="12" height="20" fill="${fitas[i % 8]}" transform="rotate(${t * 140 + i * 40} ${x} ${y})"/>`;
  }
  let crowd = '';
  for (let k = 0; k < 9; k++) crowd += student(60 + k * 120, 1330, 0.62, k);
  return W(`<rect width="1080" height="1300" fill="url(#qmSky)"/>
    <rect x="430" y="420" width="220" height="880" fill="#E9DCC0"/><rect x="470" y="330" width="140" height="120" fill="#E9DCC0"/><path d="M460 330 L540 250 L620 330 Z" fill="#B65A3A"/>
    <circle cx="540" cy="470" r="42" fill="#FBF7EC" stroke="#3A2E22" stroke-width="6"/><path d="M540 470 L540 440 M540 470 L562 478" stroke="#3A2E22" stroke-width="6" transform="rotate(${t * 6} 540 470)"/>
    ${house(-20, 300, 520, '#E8B44A', '#FBF7EC')}${house(800, 300, 480, '#F2B8B8', '#FBF7EC')}
    ${house(240, 190, 760, '#FBF7EC', '#2E6DB4')}${house(650, 190, 740, '#F6E3B4', '#7A2E3A')}
    ${garland(380, 70, 0)}${garland(600, 60, 3)}${garland(820, 50, 5)}
    <rect y="1290" width="1080" height="630" fill="#8E8172"/>
    ${Array.from({ length: 14 }, (_, r) => Array.from({ length: 12 }, (_, i) => `<rect x="${i * 92 + (r % 2) * 46 - 40}" y="${1300 + r * 46}" width="86" height="40" rx="6" fill="${(i + r) % 3 ? '#A39684' : '#968A79'}"/>`).join('')).join('')}
    ${float}${crowd}${conf}`,
    `<linearGradient id="qmSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3F8FD9"/><stop offset="1" stop-color="#BFE3F5"/></linearGradient>`);
}

function ginasioSVG(t = 0) {
  const neon = ['#FF3D8B', '#2FE6D0', '#FFD45C', '#8E5BFF', '#FF8A2B', '#4DA3FF'];
  const beat = Math.floor(t * 2.27);
  // wooden wall with high windows, banner, basketball hoop
  let windows = '';
  for (let i = 0; i < 6; i++) windows += `<rect x="${40 + i * 175}" y="140" width="140" height="120" fill="#16123A"/><path d="M${110 + i * 175} 140 v120 M${40 + i * 175} 200 h140" stroke="#5A4A3A" stroke-width="6"/>`;
  const hoop = `<rect x="430" y="330" width="220" height="150" fill="#FBFBFB" stroke="#C8202C" stroke-width="8"/><rect x="500" y="400" width="80" height="60" fill="none" stroke="#C8202C" stroke-width="6"/>
    <ellipse cx="540" cy="490" rx="56" ry="12" fill="none" stroke="#F07B2E" stroke-width="8"/>
    ${Array.from({ length: 7 }, (_, i) => `<path d="M${488 + i * 17} 492 L${500 + i * 13 + Math.sin(t * 3 + i) * 4} 560" stroke="#fff" stroke-width="3"/>`).join('')}`;
  // spinning mirror ball
  let ball = `<path d="M540 0 v600" stroke="#888" stroke-width="3"/><circle cx="540" cy="640" r="70" fill="#9AA3AE"/>`;
  for (let i = 0; i < 7; i++) for (let j = 0; j < 7; j++) {
    const a = (i / 7) * Math.PI * 2 + t * 1.6, x = 540 + Math.cos(a) * 60 * Math.sin((j + 0.5) / 7 * Math.PI), y = 580 + j * 18;
    if (Math.sin(a) > -0.2) ball += `<rect x="${x - 7}" y="${y - 7}" width="14" height="14" fill="${(i + j + beat) % 4 ? '#E9EEF3' : neon[(i + j) % 6]}" opacity="${0.6 + 0.4 * Math.sin(a)}"/>`;
  }
  // light specks thrown by the ball
  let specks = '';
  for (let i = 0; i < 40; i++) {
    const x = ((i * 173 + t * 120) % 1200) - 60, y = (i * 89) % 1100 + 120;
    specks += `<circle cx="${x}" cy="${y}" r="${4 + (i % 3) * 2}" fill="${neon[i % 6]}" opacity="0.55"/>`;
  }
  // sweeping spotlights from both corners
  let beams = '';
  for (let i = 0; i < 4; i++) {
    const side = i % 2 ? 1080 : 0, a = Math.sin(t * 1.2 + i * 1.6) * 28 + (i % 2 ? -32 : 32);
    beams += `<path d="M${side} 300 L${side - 110} 1700 L${side + 110} 1700 Z" fill="${neon[i]}" opacity="0.18" transform="rotate(${a} ${side} 300)"/>`;
  }
  // balloon arch with bobbing balloons
  let arch = '';
  for (let i = 0; i < 26; i++) {
    const a = Math.PI * (i / 25), x = 540 - Math.cos(a) * 470, y = 1240 - Math.sin(a) * 520 + Math.sin(t * 2.5 + i) * 6;
    arch += `<ellipse cx="${x}" cy="${y}" rx="40" ry="46" fill="${['#FFD45C', '#E2365B', '#FFFFFF', '#2E6DB4'][i % 4]}"/><ellipse cx="${x - 12}" cy="${y - 16}" rx="9" ry="12" fill="#fff" opacity="0.5"/>`;
  }
  // banner
  const banner = `<g transform="rotate(${Math.sin(t * 1.5) * 1.2} 540 70)"><rect x="170" y="50" width="740" height="44" rx="8" fill="#0B2343"/><text x="540" y="83" text-anchor="middle" font-family="Inter" font-weight="900" font-size="30" fill="#FFD45C" letter-spacing="4">FESTA DE FINALISTAS 🎓</text></g>`;
  // light-up court floor in perspective
  let floor = '';
  for (let r = 0; r < 8; r++) {
    const y = 1230 + r * r * 5 + r * 34, h = 30 + r * 10;
    for (let i = 0; i < 7; i++) {
      const lit = (i + r + beat) % 3 === 0, c = neon[(i * 2 + r + beat) % 6];
      const x0 = 540 + (i - 3.5) * (130 + r * 34), x1 = 540 + (i - 2.5) * (130 + r * 34);
      const x2 = 540 + (i - 2.5) * (130 + (r + 1) * 34), x3 = 540 + (i - 3.5) * (130 + (r + 1) * 34);
      floor += `<path d="M${x0 + 3} ${y} L${x1 - 3} ${y} L${x2 - 3} ${y + h - 4} L${x3 + 3} ${y + h - 4} Z" fill="${lit ? c : '#B8834E'}" opacity="${lit ? 0.85 : 1}"/>`;
    }
  }
  floor += `<ellipse cx="540" cy="1420" rx="300" ry="60" fill="none" stroke="#fff" stroke-width="6" opacity="0.6"/>`;
  // speakers with pumping cones
  const spk = x => { const p = 1 + 0.08 * Math.abs(Math.sin(t * 7)); return `<rect x="${x}" y="1000" width="130" height="230" rx="10" fill="#151515"/><circle cx="${x + 65}" cy="1065" r="${32 * p}" fill="#333"/><circle cx="${x + 65}" cy="1165" r="${44 * p}" fill="#333"/><circle cx="${x + 65}" cy="1165" r="14" fill="#555"/>`; };
  return W(`<rect width="1080" height="1240" fill="#3A2448"/><rect y="0" width="1080" height="120" fill="#24162E"/>${windows}
    <rect y="820" width="1080" height="420" fill="#5B3A2A"/>${Array.from({ length: 20 }, (_, i) => `<path d="M${i * 56} 820 v420" stroke="#4A2E20" stroke-width="4"/>`).join('')}
    ${banner}${hoop}${arch}${spk(10)}${spk(940)}${beams}${ball}${specks}
    <rect y="1230" width="1080" height="690" fill="#8C5E36"/>${floor}`);
}

function sadoSVG(t = 0) {
  // sunset sky, low sun over the estuary, Arrábida hills on the left, Tróia sand spit on the right
  let glitter = '';
  for (let i = 0; i < 30; i++) {
    const y = 940 + i * 10, w = 30 + i * 8, x = 620 + Math.sin(t * 2 + i * 1.7) * (12 + i * 3);
    glitter += `<rect x="${x - w / 2}" y="${y}" width="${w}" height="4" fill="#FFE2A0" opacity="${0.8 - i * 0.022}"/>`;
  }
  let ripples = '';
  for (let i = 0; i < 14; i++) {
    const y = 1000 + i * 42, x = ((i * 233 + t * 30) % 1200) - 60;
    ripples += `<path d="M${x} ${y} q 30 -8 60 0 t 60 0" stroke="#FFC98A" stroke-width="3" fill="none" opacity="0.5"/>`;
  }
  // dolphins leaping in arcs, one after the other
  const dolphin = (x0, y0, ph) => {
    const k = ((t * 0.45 + ph) % 1), x = x0 + k * 260, y = y0 - Math.sin(k * Math.PI) * 150, a = -50 + k * 100;
    if (Math.sin(k * Math.PI) < 0.08) return `<ellipse cx="${x}" cy="${y0 + 6}" rx="${30 + k * 20}" ry="6" fill="#FFF3D6" opacity="0.6"/>`;
    return `<g transform="translate(${x} ${y}) rotate(${a})"><path d="M-70 0 Q-20 -34 50 -8 Q70 -2 84 4 Q60 8 46 10 Q-10 26 -70 0 Z" fill="#4A5B6E"/><path d="M-6 -22 L10 -48 L18 -18 Z" fill="#4A5B6E"/><path d="M-70 0 L-96 -18 L-88 2 L-98 20 Z" fill="#4A5B6E"/><path d="M-40 10 Q10 20 46 10" stroke="#C9D3DD" stroke-width="6" fill="none"/></g>`;
  };
  // fishing boat bobbing
  const by = 1080 + Math.sin(t * 1.8) * 8, bx = 230 + Math.sin(t * 0.3) * 20;
  const boat = `<g transform="translate(${bx} ${by}) rotate(${Math.sin(t * 1.8) * 3})"><path d="M-110 0 L110 0 L80 46 L-86 46 Z" fill="#2E6DB4"/><rect x="-110" y="-8" width="220" height="12" fill="#FFD45C"/><rect x="-30" y="-70" width="60" height="62" fill="#FBF7EC"/><path d="M10 -70 V-170" stroke="#3A2E22" stroke-width="6"/><path d="M10 -165 L60 -120 L10 -120 Z" fill="#E2365B"/></g>`;
  // storks gliding
  let birds = '';
  for (let i = 0; i < 4; i++) {
    const x = ((t * 45 + i * 300) % 1300) - 100, y = 330 + i * 60 + Math.sin(t * 1.4 + i) * 14, f = Math.sin(t * 5 + i) * 10;
    birds += `<path d="M${x - 34} ${y + f} Q ${x - 14} ${y - 8} ${x} ${y} Q ${x + 14} ${y - 8} ${x + 34} ${y + f}" stroke="#2A1E2E" stroke-width="6" fill="none"/>`;
  }
  return W(`<rect width="1080" height="960" fill="url(#sdSky)"/>
    <circle cx="620" cy="860" r="110" fill="#FFD27A"/><circle cx="620" cy="860" r="190" fill="#FFB25C" opacity="0.25"/>
    ${[0, 1, 2].map(i => `<ellipse cx="${(i * 400 + t * 12) % 1400 - 150}" cy="${250 + i * 90}" rx="${170 - i * 20}" ry="22" fill="#FFB8A0" opacity="0.5"/>`).join('')}
    <path d="M-20 960 L-20 640 Q 120 560 260 620 Q 380 520 520 700 Q 600 820 700 960 Z" fill="#5B3B52"/>
    <path d="M-20 960 L-20 760 Q 160 700 330 790 Q 440 860 520 960 Z" fill="#43304A"/>
    <path d="M760 950 Q 900 930 1100 935 L1100 965 L740 965 Z" fill="#E7C38E"/>
    ${Array.from({ length: 6 }, (_, i) => `<rect x="${820 + i * 40}" y="${905 - (i % 3) * 14}" width="26" height="${30 + (i % 3) * 14}" fill="#8A6F86"/>`).join('')}
    <rect y="955" width="1080" height="965" fill="url(#sdSea)"/>${glitter}${ripples}
    ${dolphin(520, 1180, 0)}${dolphin(640, 1260, 0.35)}${dolphin(420, 1340, 0.7)}
    ${boat}${birds}
    <rect y="1700" width="1080" height="220" fill="#D9B98A"/><path d="M0 1700 q 60 -14 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0" stroke="#FFF3D6" stroke-width="6" fill="none" opacity="${0.5 + 0.3 * Math.sin(t * 2)}"/>`,
    `<linearGradient id="sdSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4B3B7A"/><stop offset="0.55" stop-color="#E06C6C"/><stop offset="1" stop-color="#FFB36B"/></linearGradient>
     <linearGradient id="sdSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#C46A6E"/><stop offset="1" stop-color="#3A3E6A"/></linearGradient>`);
}
