// New backgrounds: feiraCavaloSVG (Golegã-style November fair street: striped stalls, bunting, smoking roast-chestnut cart, a trotting horse and rider),
// festivalSVG (open-air summer festival stage at night: laser fans, LED equalizer wall, confetti cannons and a crowd of raised hands),
// montadoSVG (Alentejo montado at dusk: cork oaks, a whitewashed monte with blue trim, a rising full moon, stars and fireflies)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function feiraCavaloSVG(t = 0) {
  const defs = `<linearGradient id="fcSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC3EE"/><stop offset="1" stop-color="#D9EEF8"/></linearGradient>
  <linearGradient id="fcGround" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D8B98A"/><stop offset="1" stop-color="#B8925E"/></linearGradient>`;
  let s = `<rect width="1080" height="1920" fill="url(#fcSky)"/>`;
  // drifting clouds
  for (let i = 0; i < 3; i++) { const x = ((i * 420 + t * 18) % 1400) - 200, y = 140 + i * 90; s += `<g opacity=".9"><ellipse cx="${x}" cy="${y}" rx="110" ry="34" fill="#fff"/><ellipse cx="${x + 60}" cy="${y - 18}" rx="70" ry="30" fill="#fff"/></g>`; }
  // church tower with bell and white houses behind
  s += `<rect x="760" y="430" width="120" height="420" fill="#F4EFE6"/><rect x="760" y="430" width="120" height="16" fill="#D9A43A"/><path d="M750 430 L820 330 L890 430 Z" fill="#C46A3A"/>`;
  const bell = Math.sin(t * 3) * 14;
  s += `<rect x="795" y="470" width="50" height="70" rx="20" fill="#3A3A3A"/><g transform="translate(820 490) rotate(${bell})"><path d="M-16 0 Q-16 -26 0 -26 Q16 -26 16 0 L20 12 L-20 12 Z" fill="#C9A13A"/></g>`;
  const houses = [[0, 620, 260, '#FFFFFF', '#2E6DB4'], [250, 660, 230, '#FBEFD5', '#C8202C'], [470, 600, 270, '#FFFFFF', '#E0A21A'], [880, 640, 220, '#F7E3E8', '#2E6DB4']];
  houses.forEach(([x, y, w, c, tr]) => {
    s += `<rect x="${x}" y="${y}" width="${w}" height="${1040 - y}" fill="${c}"/><rect x="${x}" y="${y}" width="${w}" height="14" fill="${tr}"/><rect x="${x}" y="1010" width="${w}" height="30" fill="${tr}"/>`;
    for (let k = 0; k < 2; k++) s += `<rect x="${x + 40 + k * (w - 130)}" y="${y + 80}" width="50" height="80" fill="#5B7A99"/><rect x="${x + 36 + k * (w - 130)}" y="${y + 76}" width="58" height="88" fill="none" stroke="${tr}" stroke-width="6"/>`;
  });
  // bunting across the street (green and red), swaying
  for (let r = 0; r < 2; r++) {
    const y0 = 560 + r * 120, sag = 60;
    s += `<path d="M-20 ${y0} Q 540 ${y0 + sag * 2} 1100 ${y0}" stroke="#444" stroke-width="3" fill="none"/>`;
    for (let i = 0; i < 16; i++) {
      const x = -10 + i * 72, u = (x + 20) / 1120, y = y0 + 2 * sag * 2 * u * (1 - u), sw = Math.sin(t * 3 + i * .7 + r) * 6;
      s += `<path d="M${x - 22} ${y} L${x + 22} ${y} L${x + sw} ${y + 46} Z" fill="${['#C8202C', '#1E8A4C', '#F2B705'][(i + r) % 3]}"/>`;
    }
  }
  // ground
  s += `<rect y="1040" width="1080" height="880" fill="url(#fcGround)"/>`;
  for (let i = 0; i < 40; i++) s += `<ellipse cx="${(i * 137) % 1080}" cy="${1080 + (i * 53) % 820}" rx="14" ry="5" fill="#A88350" opacity=".5"/>`;
  // striped stalls left and right
  const stall = (x, c) => {
    let st = `<rect x="${x}" y="900" width="220" height="150" fill="#7A5434"/><rect x="${x + 10}" y="960" width="200" height="60" fill="#F3E2BF"/>`;
    for (let k = 0; k < 6; k++) st += `<path d="M${x - 10 + k * 40} 860 h40 v50 q-20 ${14 + Math.sin(t * 4 + k) * 4} -40 0 Z" fill="${k % 2 ? '#fff' : c}"/>`;
    return st;
  };
  s += stall(20, '#C8202C') + stall(840, '#1E6DB4');
  // roast chestnut cart with smoke
  s += `<g transform="translate(860 1120)"><rect x="0" y="40" width="170" height="90" rx="10" fill="#3B3B3B"/><rect x="20" y="0" width="130" height="44" rx="6" fill="#222"/><circle cx="40" cy="140" r="26" fill="#222"/><circle cx="130" cy="140" r="26" fill="#222"/>`;
  for (let k = 0; k < 6; k++) s += `<circle cx="${40 + k * 18}" cy="16" r="9" fill="#6B3A1E"/>`;
  s += `<text x="85" y="100" text-anchor="middle" font-family="Inter" font-weight="900" font-size="26" fill="#FFD45C">CASTANHAS</text></g>`;
  for (let k = 0; k < 5; k++) { const p = ((t * .35 + k / 5) % 1); s += `<circle cx="${940 + Math.sin(p * 6 + k) * 30}" cy="${1110 - p * 420}" r="${20 + p * 50}" fill="#EEE" opacity="${.55 * (1 - p)}"/>`; }
  // trotting horse and rider crossing the back of the fair
  const hx = ((t * 120) % 1500) - 250, tr = Math.sin(t * 10);
  s += `<g transform="translate(${hx} 980)"><ellipse cx="0" cy="0" rx="80" ry="34" fill="#5A3A22"/><path d="M60 -10 L110 -70 L130 -60 L95 5 Z" fill="#5A3A22"/><path d="M110 -70 l4 -16 l8 14 Z" fill="#5A3A22"/><path d="M70 -20 Q 95 -70 112 -66" stroke="#2A1A10" stroke-width="10" fill="none"/>
    <path d="M-70 -10 q-40 10 -36 50" stroke="#2A1A10" stroke-width="10" fill="none"/>
    <rect x="${-55 + tr * 8}" y="20" width="12" height="70" fill="#5A3A22"/><rect x="${-25 - tr * 8}" y="20" width="12" height="70" fill="#5A3A22"/><rect x="${35 + tr * 8}" y="20" width="12" height="70" fill="#5A3A22"/><rect x="${60 - tr * 8}" y="20" width="12" height="70" fill="#5A3A22"/>
    <rect x="-18" y="-100" width="36" height="70" rx="10" fill="#1F1F1F"/><circle cx="0" cy="-118" r="18" fill="#E8C6A0"/><ellipse cx="0" cy="-132" rx="32" ry="7" fill="#111"/><rect x="-16" y="-158" width="32" height="26" rx="4" fill="#111"/></g>`;
  // floating flags near camera
  return W(s, defs);
}

function festivalSVG(t = 0) {
  const defs = `<linearGradient id="fsSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#090B26"/><stop offset="1" stop-color="#2A0E45"/></linearGradient>
  <radialGradient id="fsGlow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".9"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient>`;
  let s = `<rect width="1080" height="1920" fill="url(#fsSky)"/>`;
  for (let i = 0; i < 40; i++) s += `<circle cx="${(i * 211) % 1080}" cy="${(i * 97) % 520}" r="2" fill="#fff" opacity="${.3 + .5 * Math.abs(Math.sin(t * 2 + i))}"/>`;
  // stage truss
  s += `<rect x="60" y="420" width="960" height="40" fill="#2B2B33"/><rect x="60" y="420" width="40" height="760" fill="#2B2B33"/><rect x="980" y="420" width="40" height="760" fill="#2B2B33"/>`;
  for (let i = 0; i < 24; i++) s += `<path d="M${60 + i * 40} 420 l20 40 l20 -40" stroke="#4A4A55" stroke-width="3" fill="none"/>`;
  // LED equalizer wall
  s += `<rect x="120" y="500" width="840" height="560" fill="#0A0A14"/>`;
  for (let c = 0; c < 14; c++) {
    const h = Math.round(4 + 9 * Math.abs(Math.sin(t * 4.1 + c * .9) * Math.cos(t * 1.7 + c * .4)));
    for (let r = 0; r < 14; r++) {
      const on = r < h, col = r > 10 ? '#FF3B5C' : r > 7 ? '#FFD45C' : '#3BE3B0';
      s += `<rect x="${136 + c * 59}" y="${1030 - r * 38}" width="48" height="30" rx="4" fill="${on ? col : '#1A1A28'}" opacity="${on ? .95 : 1}"/>`;
    }
  }
  // laser fans from both sides
  const lasers = (x, y, c, off) => { let l = ''; for (let k = 0; k < 7; k++) { const a = (-150 + k * 20 + Math.sin(t * 1.6 + off) * 25) * Math.PI / 180; l += `<line x1="${x}" y1="${y}" x2="${x + Math.cos(a) * 1500}" y2="${y + Math.sin(a) * 1500}" stroke="${c}" stroke-width="5" opacity=".55"/>`; } return l; };
  s += lasers(100, 470, '#3BE3FF', 0) + lasers(980, 470, '#FF3BD1', 2);
  // spotlights on the truss
  for (let i = 0; i < 6; i++) { const x = 180 + i * 145; s += `<rect x="${x - 18}" y="440" width="36" height="30" rx="6" fill="#111"/><circle cx="${x}" cy="476" r="${10 + 4 * Math.abs(Math.sin(t * 5 + i))}" fill="url(#fsGlow)"/>`; }
  // stage floor
  s += `<rect x="0" y="1150" width="1080" height="770" fill="#15121F"/><rect x="0" y="1150" width="1080" height="12" fill="#3BE3FF" opacity=".6"/>`;
  for (let i = 0; i < 8; i++) s += `<line x1="${540 + (i - 3.5) * 60}" y1="1162" x2="${540 + (i - 3.5) * 260}" y2="1920" stroke="#2C2440" stroke-width="3"/>`;
  // confetti cannons
  const cols = ['#FFD45C', '#FF3B5C', '#3BE3B0', '#3BE3FF', '#FF8A3B', '#FFFFFF'];
  for (let i = 0; i < 46; i++) {
    const p = (t * .22 + i * .37) % 1, side = i % 2, x0 = side ? 1000 : 80;
    const x = x0 + (side ? -1 : 1) * p * (300 + (i * 37) % 500), y = 1150 - Math.sin(p * Math.PI) * (700 + (i * 53) % 300) + p * 300;
    s += `<rect x="${x}" y="${y}" width="16" height="9" fill="${cols[i % 6]}" transform="rotate(${t * 300 + i * 40} ${x} ${y})"/>`;
  }
  // crowd of raised hands in silhouette at the bottom
  for (let i = 0; i < 12; i++) {
    const x = 20 + i * 92, up = Math.max(0, Math.sin(t * 7.8 + i * 1.3));
    s += `<g fill="#05040A"><circle cx="${x + 40}" cy="${1850 - up * 10}" r="46"/><rect x="${x + 4}" y="${1700 - up * 60}" width="20" height="${180 + up * 60}" rx="10" transform="rotate(-8 ${x + 14} 1880)"/><circle cx="${x + 10}" cy="${1700 - up * 60}" r="16"/></g>`;
  }
  return W(s, defs);
}

function montadoSVG(t = 0) {
  const defs = `<linearGradient id="mtSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B2350"/><stop offset=".45" stop-color="#6A3F7A"/><stop offset=".75" stop-color="#E5835A"/><stop offset="1" stop-color="#F6C27A"/></linearGradient>
  <radialGradient id="mtMoon" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF6D8"/><stop offset=".6" stop-color="#FFE9A8"/><stop offset="1" stop-color="#FFE9A8" stop-opacity="0"/></radialGradient>`;
  let s = `<rect width="1080" height="1920" fill="url(#mtSky)"/>`;
  for (let i = 0; i < 50; i++) s += `<circle cx="${(i * 173) % 1080}" cy="${(i * 89) % 600}" r="${1.5 + (i % 3) * .7}" fill="#fff" opacity="${.25 + .6 * Math.abs(Math.sin(t * 1.5 + i * 1.7))}"/>`;
  // full moon rising slowly
  const my = 900 - t * 4;
  s += `<circle cx="760" cy="${my}" r="170" fill="url(#mtMoon)" opacity=".7"/><circle cx="760" cy="${my}" r="95" fill="#FFF3CF"/><circle cx="730" cy="${my - 20}" r="14" fill="#EBDDB0"/><circle cx="790" cy="${my + 25}" r="10" fill="#EBDDB0"/>`;
  // rolling plains
  s += `<path d="M0 1040 Q 270 980 540 1020 T 1080 1000 V1920 H0 Z" fill="#7A5A3A"/><path d="M0 1120 Q 300 1080 600 1110 T 1080 1090 V1920 H0 Z" fill="#5C4A2E"/><path d="M0 1260 Q 400 1220 1080 1250 V1920 H0 Z" fill="#46391F"/>`;
  // whitewashed monte with blue trim and chimney smoke
  s += `<g transform="translate(150 930)"><rect x="0" y="40" width="300" height="110" fill="#F4F1EA"/><rect x="0" y="130" width="300" height="20" fill="#2E6DB4"/><path d="M-10 44 L150 0 L310 44 Z" fill="#B5542C"/><rect x="230" y="-10" width="34" height="40" fill="#F4F1EA"/><rect x="40" y="80" width="40" height="50" fill="#FFCF6B"/><rect x="200" y="80" width="40" height="50" fill="#FFCF6B"/><rect x="120" y="70" width="50" height="80" fill="#2E6DB4"/></g>`;
  for (let k = 0; k < 4; k++) { const p = (t * .25 + k / 4) % 1; s += `<circle cx="${397 + Math.sin(p * 5) * 16}" cy="${915 - p * 260}" r="${10 + p * 30}" fill="#E8DCEB" opacity="${.5 * (1 - p)}"/>`; }
  // cork oaks, swaying gently
  const oak = (x, y, sc) => {
    const sw = Math.sin(t * 1.2 + x) * 3;
    return `<g transform="translate(${x} ${y}) scale(${sc})"><path d="M-14 0 L-10 -120 L-50 -170 M-10 -120 L30 -175 M-10 -120 L-8 -190" stroke="#2A1C10" stroke-width="22" fill="none" stroke-linecap="round"/><rect x="-16" y="-80" width="30" height="80" fill="#9A4A26"/>
      <g transform="rotate(${sw} 0 -200)"><ellipse cx="-60" cy="-200" rx="90" ry="55" fill="#24331C"/><ellipse cx="40" cy="-215" rx="100" ry="60" fill="#2B3D21"/><ellipse cx="-10" cy="-250" rx="80" ry="50" fill="#33472A"/></g></g>`;
  };
  s += oak(80, 1180, 1.1) + oak(560, 1110, 0.8) + oak(960, 1200, 1.3) + oak(760, 1080, 0.6);
  // fireflies
  for (let i = 0; i < 22; i++) {
    const x = (i * 149 + Math.sin(t * .8 + i) * 40) % 1080, y = 1150 + (i * 67) % 600 + Math.cos(t * 1.1 + i) * 30;
    s += `<circle cx="${x}" cy="${y}" r="6" fill="#FFF3A0" opacity="${.3 + .7 * Math.abs(Math.sin(t * 3 + i * 2))}"/>`;
  }
  // a stork flying across
  const sx = ((t * 70) % 1500) - 200, fl = Math.sin(t * 6) * 18;
  s += `<g transform="translate(${sx} 700)" stroke="#1A1424" stroke-width="7" fill="none" stroke-linecap="round"><path d="M-40 ${fl} Q -20 0 0 0 Q 20 0 40 ${fl}"/><path d="M0 0 L60 4"/></g>`;
  return W(s, defs);
}
