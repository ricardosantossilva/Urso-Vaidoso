// New backgrounds: tabuleirosSVG (Tomar-style Festa dos Tabuleiros street with tall bread-and-flower trays and paper flower canopy),
// beachclubSVG (Algarve beach club at night with a wooden dance deck, palm trees, pool and DJ hut),
// picoSVG (Pico island volcano in the Azores at sunset with black basalt vineyard walls and a whale tail in the channel)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function tabuleirosSVG(t = 0) {
  const flowers = ['#E2365B', '#FFD45C', '#F07B2E', '#FFFFFF', '#2E9E5B', '#D23C8C'];
  // white houses with coloured trims on both sides of the street, in perspective
  const house = (x, w, top, trim, door) => {
    let s = `<rect x="${x}" y="${top}" width="${w}" height="${1290 - top}" fill="#FBF7EC"/>`;
    s += `<rect x="${x}" y="${top}" width="${w}" height="16" fill="${trim}"/><path d="M${x - 14} ${top} L${x + w / 2} ${top - 70} L${x + w + 14} ${top} Z" fill="#B65A3A"/>`;
    for (let j = 0; j < 2; j++) for (let i = 0; i < 2; i++) {
      const wx = x + w * (0.16 + i * 0.44), ww = w * 0.26, wy = top + 62 + j * 300;
      s += `<rect x="${wx - 8}" y="${wy}" width="${ww + 16}" height="134" fill="${trim}"/><rect x="${wx}" y="${wy + 8}" width="${ww}" height="118" fill="#31506E"/><path d="M${wx + ww / 2} ${wy + 8} v118 M${wx} ${wy + 66} h${ww}" stroke="#FBF7EC" stroke-width="5"/>`;
      s += `<rect x="${wx - 14}" y="${wy + 136}" width="${ww + 28}" height="14" fill="#8A5A3A"/>`;
      for (let k = 0; k < 4; k++) s += `<circle cx="${wx + k * ww / 3}" cy="${wy + 130 + Math.sin(t * 2 + k + x) * 2}" r="11" fill="${flowers[(k + i + j) % 6]}"/>`;
    }
    s += `<rect x="${x}" y="1205" width="${w}" height="85" fill="${trim}" opacity="0.85"/>`;
    for (let i = 0; i < w / 42; i++) s += `<path d="M${x + i * 42 + 21} 1222 l16 25 l-16 25 l-16 -25 Z" fill="#FBF7EC" opacity="0.75"/>`;
    if (door) s += `<rect x="${x + w * 0.36}" y="1120" width="${w * 0.28}" height="170" rx="6" fill="${trim}"/><rect x="${x + w * 0.4}" y="1134" width="${w * 0.2}" height="156" fill="#6B3F26"/>`;
    return s;
  };
  // paper flower garlands strung across the street
  const garland = (y0, sag, ph) => {
    let s = `<path d="M-20 ${y0} Q 540 ${y0 + sag * 2} 1100 ${y0}" stroke="#2E7D4F" stroke-width="10" fill="none"/>`;
    for (let i = 0; i < 19; i++) {
      const x = -20 + i * 62, u = (x + 20) / 1120, y = y0 + 4 * sag * u * (1 - u);
      const sw = Math.sin(t * 2.4 + i * 0.8 + ph) * 10;
      s += `<path d="M${x} ${y} q ${sw * 0.5} 34 ${sw} 74" stroke="#2E7D4F" stroke-width="4" fill="none"/>`;
      s += `<circle cx="${x + sw}" cy="${y + 84}" r="22" fill="${flowers[(i + ph) % 6]}"/><circle cx="${x + sw}" cy="${y + 84}" r="8" fill="#FFD45C"/>`;
      s += `<circle cx="${x}" cy="${y}" r="17" fill="${flowers[(i + ph + 2) % 6]}"/>`;
    }
    return s;
  };
  // a tall tray tower: stacked rings of bread with paper flowers, a crown on top
  const tabuleiro = (x, base, sc, ph) => {
    const sway = Math.sin(t * 1.9 + ph) * 3;
    let s = `<g transform="translate(${x} ${base}) rotate(${sway}) scale(${sc})">`;
    s += `<rect x="-5" y="-470" width="10" height="470" fill="#A9794F"/>`;
    for (let i = 0; i < 5; i++) {
      const y = -70 - i * 78, r = 66 - i * 5;
      for (let k = -2; k <= 2; k++) s += `<ellipse cx="${k * r * 0.42}" cy="${y}" rx="${r * 0.3}" ry="27" fill="${k % 2 ? '#D99A4E' : '#C4833C'}"/><path d="M${k * r * 0.42 - 12} ${y - 10} q 12 10 24 0" stroke="#8E5A26" stroke-width="3" fill="none"/>`;
      for (let k = -3; k <= 3; k++) s += `<circle cx="${k * r * 0.34}" cy="${y + 34}" r="13" fill="${flowers[(k + 3 + i + ph) % 6]}"/>`;
    }
    s += `<ellipse cx="0" cy="8" rx="94" ry="16" fill="#FFFFFF"/><ellipse cx="0" cy="4" rx="84" ry="10" fill="#E9E2D2"/>`;
    s += `<path d="M0 -490 v-54" stroke="#FFD45C" stroke-width="8"/><path d="M-20 -526 h40" stroke="#FFD45C" stroke-width="8"/><circle cx="0" cy="-484" r="18" fill="#E2365B"/>`;
    return s + `</g>`;
  };
  // falling paper petals
  let petals = '';
  for (let i = 0; i < 22; i++) {
    const k = (t * 0.16 + i * 0.137) % 1, x = (i * 97 + 40) % 1080 + Math.sin(k * 12 + i) * 34;
    petals += `<ellipse cx="${x}" cy="${240 + k * 1120}" rx="11" ry="6" fill="${flowers[i % 6]}" opacity="0.9" transform="rotate(${t * 90 + i * 40} ${x} ${240 + k * 1120})"/>`;
  }
  // cobbled street
  let cobbles = '';
  for (let r = 0; r < 12; r++) {
    const y = 1296 + r * r * 3.2 + r * 18, h = 12 + r * 2.6, w = 54 + r * 9;
    for (let i = -1; i < 1080 / w + 1; i++) cobbles += `<rect x="${i * w + (r % 2) * w / 2 + 3}" y="${y}" width="${w - 6}" height="${h}" rx="5" fill="${(i + r) % 3 ? '#B9AE9B' : '#A79B87'}"/>`;
  }
  return W(`<rect width="1080" height="1320" fill="url(#tbSky)"/>
    <circle cx="830" cy="170" r="74" fill="#FFF3C4" opacity="0.85"/>
    ${[0, 1, 2].map(i => `<g transform="translate(${((t * 12 + i * 400) % 1400) - 200} ${110 + i * 60})" opacity="0.9"><ellipse rx="96" ry="26" fill="#fff"/><ellipse cx="46" cy="-16" rx="52" ry="24" fill="#fff"/></g>`).join('')}
    ${house(-40, 300, 470, '#2E6DB4', true)}${house(260, 280, 540, '#E0A526', false)}${house(540, 280, 520, '#2E9E5B', true)}${house(820, 300, 450, '#C8202C', false)}
    <rect y="1290" width="1080" height="630" fill="#C6BBA8"/>${cobbles}
    ${garland(250, 90, 0)}${garland(400, 70, 2)}
    ${tabuleiro(120, 1330, 1.05, 0)}${tabuleiro(360, 1296, 0.82, 1)}${tabuleiro(720, 1296, 0.82, 3)}${tabuleiro(960, 1330, 1.05, 4)}
    ${petals}`, `<linearGradient id="tbSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5FB4E8"/><stop offset="1" stop-color="#D7EEF8"/></linearGradient>`);
}

function beachclubSVG(t = 0) {
  const neon = ['#FF3D8B', '#2FE6D0', '#FFD45C', '#8E5BFF', '#FF8A2B'];
  const beat = Math.floor(t * 2.4);
  // moving light beams from the DJ hut roof
  let beams = '';
  for (let i = 0; i < 6; i++) {
    const a = Math.sin(t * 1.3 + i * 1.1) * 34 + (i - 2.5) * 13;
    beams += `<path d="M540 560 L${540 - 90} 1500 L${540 + 90} 1500 Z" fill="${neon[i % 5]}" opacity="0.16" transform="rotate(${a} 540 560)"/>`;
  }
  // palm tree with swaying fronds and fairy lights around the trunk
  const palm = (x, base, h, flip, ph) => {
    const sw = Math.sin(t * 1.5 + ph) * 8;
    let s = `<path d="M${x} ${base} q ${flip * 44} ${-h / 2} ${flip * 12} ${-h}" stroke="#3B2A22" stroke-width="30" fill="none" stroke-linecap="round"/>`;
    for (let i = 0; i < 9; i++) {
      const u = i / 9, px = x + flip * (Math.sin(u * Math.PI) * 28 + u * 12), py = base - h * u;
      s += `<circle cx="${px}" cy="${py}" r="9" fill="${neon[(i + beat) % 5]}"/>`;
    }
    const tx = x + flip * 12, ty = base - h;
    [-150, -112, -70, -30, 12, 48].forEach((a, i) => {
      s += `<g transform="translate(${tx} ${ty}) rotate(${a + sw * (i % 2 ? 1 : -1)})"><path d="M0 0 Q 120 -46 250 26 Q 120 6 0 0 Z" fill="${i % 2 ? '#14523F' : '#1B6A50'}"/></g>`;
    });
    return s;
  };
  // string of bulbs
  let bulbs = '';
  for (let r = 0; r < 2; r++) {
    const y0 = 420 + r * 110;
    bulbs += `<path d="M0 ${y0} Q 540 ${y0 + 130} 1080 ${y0}" stroke="#222" stroke-width="4" fill="none"/>`;
    for (let i = 0; i < 15; i++) {
      const u = i / 14, x = u * 1080, y = y0 + 4 * 65 * u * (1 - u);
      const on = (i + beat + r) % 3 !== 0;
      bulbs += `<circle cx="${x}" cy="${y + 12}" r="13" fill="${neon[(i + r) % 5]}" opacity="${on ? 1 : 0.35}"/>`;
      if (on) bulbs += `<circle cx="${x}" cy="${y + 12}" r="30" fill="${neon[(i + r) % 5]}" opacity="0.22"/>`;
    }
  }
  // moon glitter on the sea
  let glitter = '';
  for (let i = 0; i < 26; i++) {
    const y = 800 + i * 9, w = 26 + i * 7, x = 930 + Math.sin(t * 2 + i * 1.7) * (14 + i * 3);
    glitter += `<rect x="${x - w / 2}" y="${y}" width="${w}" height="3" fill="#FFF3C4" opacity="${0.75 - i * 0.02}"/>`;
  }
  // wooden deck dance floor with lit planks
  let deck = '';
  for (let r = 0; r < 8; r++) {
    const y = 1210 + r * r * 5 + r * 34, h = 30 + r * 10;
    for (let i = 0; i < 7; i++) {
      const c = neon[(i * 2 + r + beat) % 5], lit = (i + r + beat) % 3 === 0;
      const x0 = 540 + (i - 3.5) * (130 + r * 34), x1 = 540 + (i - 2.5) * (130 + r * 34);
      const x2 = 540 + (i - 2.5) * (130 + (r + 1) * 34), x3 = 540 + (i - 3.5) * (130 + (r + 1) * 34);
      deck += `<path d="M${x0 + 3} ${y} L${x1 - 3} ${y} L${x2 - 3} ${y + h - 4} L${x3 + 3} ${y + h - 4} Z" fill="${lit ? c : '#5A3E2B'}" opacity="${lit ? 0.85 : 1}"/>`;
    }
  }
  // DJ hut with thatched roof
  const hut = `<rect x="350" y="760" width="380" height="330" fill="#3A2719"/>
    <path d="M300 770 L540 600 L780 770 Z" fill="#B98E4E"/>${Array.from({ length: 13 }, (_, i) => `<path d="M${312 + i * 38} 772 v${22 + (i % 3) * 10}" stroke="#94703A" stroke-width="9"/>`).join('')}
    <rect x="395" y="830" width="290" height="120" rx="10" fill="#0F1630"/>
    ${Array.from({ length: 12 }, (_, i) => { const h = 18 + Math.abs(Math.sin(t * 7 + i * 0.9)) * 78; return `<rect x="${412 + i * 22}" y="${938 - h}" width="15" height="${h}" fill="${neon[i % 5]}"/>`; }).join('')}
    <rect x="370" y="980" width="340" height="110" fill="#23180F"/>
    <circle cx="450" cy="1030" r="40" fill="#111"/><circle cx="450" cy="1030" r="13" fill="${neon[0]}"/><path d="M450 1030 L450 994" stroke="#777" stroke-width="4" transform="rotate(${t * 240} 450 1030)"/>
    <circle cx="630" cy="1030" r="40" fill="#111"/><circle cx="630" cy="1030" r="13" fill="${neon[1]}"/><path d="M630 1030 L630 994" stroke="#777" stroke-width="4" transform="rotate(${t * 240} 630 1030)"/>`;
  // glowing pool on the left
  const pool = `<ellipse cx="130" cy="1160" rx="240" ry="62" fill="#17D2D8"/><ellipse cx="130" cy="1160" rx="240" ry="62" fill="none" stroke="#E9FFFF" stroke-width="6"/>
    ${[0, 1, 2].map(i => `<path d="M${-40 + i * 60} ${1146 + i * 14} q 40 ${Math.sin(t * 3 + i) * 12} 80 0 t 80 0" stroke="#E9FFFF" stroke-width="4" fill="none" opacity="0.7"/>`).join('')}`;
  // floating beach balls
  let balls = '';
  for (let i = 0; i < 3; i++) {
    const x = 760 + i * 120, y = 1120 + Math.sin(t * 3.4 + i * 2) * 26;
    balls += `<circle cx="${x}" cy="${y}" r="30" fill="#fff"/><path d="M${x} ${y - 30} A30 30 0 0 1 ${x + 30} ${y} L${x} ${y} Z" fill="${neon[i]}"/><path d="M${x} ${y + 30} A30 30 0 0 1 ${x - 30} ${y} L${x} ${y} Z" fill="${neon[(i + 2) % 5]}"/>`;
  }
  let stars = '';
  for (let i = 0; i < 40; i++) stars += `<circle cx="${(i * 139) % 1080}" cy="${(i * 67) % 560 + 30}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${0.35 + 0.5 * Math.abs(Math.sin(t * 2 + i))}"/>`;
  return W(`<rect width="1080" height="800" fill="url(#bcSky)"/>${stars}
    <circle cx="930" cy="400" r="62" fill="#FFF3C4"/><circle cx="906" cy="384" r="52" fill="#FFF8DD" opacity="0.5"/>
    <rect y="790" width="1080" height="330" fill="#0E2348"/>${glitter}
    <rect y="1050" width="1080" height="170" fill="#D9BE8C"/>
    ${hut}${beams}${pool}${balls}
    ${palm(70, 1180, 720, 1, 0)}${palm(1010, 1180, 760, -1, 2)}
    ${bulbs}
    <rect y="1200" width="1080" height="720" fill="#2B1B12"/>${deck}`, `<linearGradient id="bcSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A0F2E"/><stop offset="0.7" stop-color="#2B1B5A"/><stop offset="1" stop-color="#7B2E6E"/></linearGradient>`);
}

function picoSVG(t = 0) {
  // sun low behind the volcano, slowly sinking
  const sy = 690 + Math.sin(t * 0.25) * 8;
  // clouds around the summit drifting slowly
  const cloud = (x, y, s, o) => `<g transform="translate(${x} ${y}) scale(${s})" opacity="${o}"><ellipse rx="130" ry="26" fill="#FFD9B8"/><ellipse cx="-50" cy="-14" rx="70" ry="24" fill="#FFE7CF"/><ellipse cx="56" cy="-12" rx="80" ry="22" fill="#FFC9A6"/></g>`;
  let clouds = '';
  for (let i = 0; i < 6; i++) clouds += cloud(((t * (10 + i * 3) + i * 240) % 1400) - 160, 320 + i * 62, 0.9 + (i % 3) * 0.3, 0.8);
  // sea glitter
  let glitter = '';
  for (let i = 0; i < 30; i++) {
    const y = 985 + i * 7, w = 40 + i * 9, x = 540 + Math.sin(t * 2.1 + i * 1.9) * (20 + i * 4);
    glitter += `<rect x="${x - w / 2}" y="${y}" width="${w}" height="4" fill="#FFE1A0" opacity="${0.8 - i * 0.02}"/>`;
  }
  // a whale tail rising and sinking in the channel
  const k = (t % 7) / 7, up = k < 0.5 ? Math.sin(k * 2 * Math.PI) : 0;
  const tail = `<g transform="translate(250 ${1090 - up * 74})" opacity="${up > 0.02 ? 1 : 0}"><path d="M-12 60 Q -8 10 0 0 Q 8 10 12 60 Z" fill="#1C2A3E"/><path d="M0 4 Q -40 -30 -92 -14 Q -50 6 -6 26 Z" fill="#1C2A3E"/><path d="M0 4 Q 40 -30 92 -14 Q 50 6 6 26 Z" fill="#1C2A3E"/></g>
    <ellipse cx="250" cy="1094" rx="${60 + up * 40}" ry="9" fill="#fff" opacity="${up > 0.02 ? 0.55 : 0}"/>`;
  // gulls
  let gulls = '';
  for (let i = 0; i < 4; i++) {
    const x = ((t * (34 + i * 8) + i * 300) % 1300) - 110, y = 250 + i * 70 + Math.sin(t * 1.5 + i) * 18, f = Math.sin(t * 7 + i) * 12;
    gulls += `<path d="M${x - 30} ${y - f} Q ${x - 12} ${y - 12} ${x} ${y} Q ${x + 12} ${y - 12} ${x + 30} ${y - f}" stroke="#2A1E2E" stroke-width="5" fill="none"/>`;
  }
  // black basalt vineyard walls (currais) with green vines swaying
  let walls = '';
  for (let r = 0; r < 5; r++) {
    const y = 1190 + r * r * 8 + r * 56, h = 22 + r * 7, cell = 150 + r * 34;
    for (let i = -1; i < 1080 / cell + 1; i++) {
      const x = i * cell + (r % 2) * cell / 2;
      walls += `<rect x="${x}" y="${y}" width="${cell}" height="${h}" fill="#26232B"/>`;
      for (let s = 0; s < 5; s++) walls += `<ellipse cx="${x + cell * (s + 0.5) / 5}" cy="${y + h * (s % 2 ? 0.3 : 0.7)}" rx="${cell / 12}" ry="${h / 3.6}" fill="${(s + i) % 2 ? '#3A3641' : '#312D38'}"/>`;
      walls += `<rect x="${x + cell - 12}" y="${y - 36 - r * 8}" width="${16 + r * 3}" height="${40 + r * 9}" fill="#26232B"/>`;
      for (let v = 0; v < 3; v++) {
        const vx = x + cell * (0.22 + v * 0.26), vy = y - 22 - r * 4, sw = Math.sin(t * 1.8 + v + i + r) * 5;
        walls += `<circle cx="${vx + sw}" cy="${vy}" r="${22 + r * 6}" fill="${v % 2 ? '#5C7D32' : '#6E9238'}"/><circle cx="${vx + sw + 12}" cy="${vy - 10}" r="${11 + r * 3}" fill="#88A947"/>`;
      }
    }
  }
  // small black-and-white basalt wine house with a red door and chimney smoke
  let smoke = '';
  for (let i = 0; i < 5; i++) { const q = (t * 0.4 + i / 5) % 1; smoke += `<circle cx="${912 + Math.sin(q * 6 + i) * 18}" cy="${1000 - q * 170}" r="${10 + q * 26}" fill="#fff" opacity="${0.42 * (1 - q)}"/>`; }
  const adega = `<rect x="800" y="1060" width="190" height="130" fill="#2B2830"/><path d="M786 1062 L895 992 L1004 1062 Z" fill="#A9472E"/><rect x="900" y="1000" width="24" height="42" fill="#2B2830"/><rect x="858" y="1104" width="56" height="86" fill="#B32030"/><rect x="938" y="1088" width="36" height="38" fill="#FFD27A"/>${smoke}`;
  return W(`<rect width="1080" height="1000" fill="url(#pkSky)"/>
    <circle cx="710" cy="${sy}" r="150" fill="#FFD27A" opacity="0.35"/><circle cx="710" cy="${sy}" r="94" fill="#FFE9A8"/>
    ${gulls}
    <path d="M-60 1000 C 130 900 300 720 430 520 C 470 455 500 395 528 372 L 556 330 L 590 372 C 620 400 650 460 700 540 C 820 730 960 900 1160 1000 Z" fill="url(#pkMt)"/>
    <path d="M528 372 L556 330 L590 372 C 572 388 546 386 528 372 Z" fill="#6E4A5C"/>
    <path d="M430 520 C 455 560 480 600 470 690 M700 540 C 680 600 660 640 668 730 M556 400 C 548 520 570 640 556 780" stroke="#3B2840" stroke-width="7" fill="none" opacity="0.5"/>
    ${clouds}
    <rect y="985" width="1080" height="220" fill="url(#pkSea)"/>${glitter}${tail}
    <path d="M0 1180 Q 280 1140 560 1168 T 1080 1150 V1920 H0 Z" fill="#3F5A2B"/>
    ${adega}${walls}
    <rect y="1500" width="1080" height="420" fill="#4A6A30"/>
    ${Array.from({ length: 16 }, (_, i) => `<path d="M${i * 72 + 10} ${1560 + (i % 4) * 70} q ${6 + Math.sin(t * 2 + i) * 8} -26 ${2 + Math.sin(t * 2 + i) * 14} -50" stroke="#6E9238" stroke-width="7" fill="none" stroke-linecap="round"/>`).join('')}`,
    `<linearGradient id="pkSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E2A63"/><stop offset="0.45" stop-color="#B8467A"/><stop offset="0.8" stop-color="#F58A4B"/><stop offset="1" stop-color="#FFC56B"/></linearGradient>
     <linearGradient id="pkMt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A3350"/><stop offset="1" stop-color="#2C3A3E"/></linearGradient>
     <linearGradient id="pkSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9805A"/><stop offset="1" stop-color="#2B3F6B"/></linearGradient>`);
}
