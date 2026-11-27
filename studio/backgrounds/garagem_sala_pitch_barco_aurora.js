// Music video backgrounds (2026-11-27 'Fado do Empreendedor (Urso Vaidoso)'):
// garagemSVG: startup garage at dawn with a half-open roll-up door, workbench, blinking neon 'CEO' sign, swinging bulb and a whiteboard plan
// salaSVG: living room at 3 a.m. with a laptop on an ironing board, flying email envelopes, wall clock near 03:00, slippers, mop and bucket, moon window
// pitchSVG: 'Demo Day' pitch stage with a giant screen whose chart shoots off the top, sweeping spotlights, empty chairs and a coat stand with a top hat
// barcoSVG: party on a river boat deck at night with swaying string lights, glowing dance floor tiles, lifebuoys, city lights and fireworks
// auroraSVG: sunrise over Lisbon hills with a giant rising sun, a white Panteão-style dome, pastel houses, flying pigeons and a morning tram
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
const PAL = ['#E2365B', '#FFD45C', '#2E9E5B', '#2E6DB4', '#F07B2E', '#9B59D0'];
const rnd = i => { const x = Math.sin(i * 127.1 + 311.7) * 43758.5453; return x - Math.floor(x); };

function garagemSVG(t = 0) {
  const defs = `<linearGradient id="gDawn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B07A"/><stop offset="1" stop-color="#FCE3B0"/></linearGradient>
  <radialGradient id="gBulb" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF4C8" stop-opacity=".9"/><stop offset="1" stop-color="#FFF4C8" stop-opacity="0"/></radialGradient>`;
  let s = `<rect width="1080" height="1920" fill="#5B5F6B"/>`;
  // brick wall
  for (let r = 0; r < 30; r++) for (let c = 0; c < 9; c++) s += `<rect x="${c * 130 - (r % 2) * 65}" y="${r * 44}" width="124" height="38" rx="3" fill="${['#8E4B3B', '#9A5644', '#83432F'][(r + c) % 3]}"/>`;
  // roll-up door half open, dawn street behind
  const open = 330 + Math.sin(t * 0.4) * 20;
  s += `<rect x="120" y="300" width="840" height="760" fill="url(#gDawn)"/>`;
  s += `<circle cx="760" cy="${980 - Math.min(1, t / 20) * 60}" r="90" fill="#FFE08A"/>`;
  s += `<path d="M120 1060 L300 820 L420 900 L560 760 L700 880 L820 800 L960 960 V1060 Z" fill="#C98D6B" opacity=".6"/>`;
  for (let i = 0; i < Math.floor(open / 40); i++) s += `<rect x="120" y="${300 + i * 40}" width="840" height="36" fill="${i % 2 ? '#A9AEB8' : '#B7BCC6'}"/>`;
  s += `<rect x="100" y="280" width="880" height="24" fill="#3A3D45"/><rect x="100" y="280" width="24" height="790" fill="#3A3D45"/><rect x="956" y="280" width="24" height="790" fill="#3A3D45"/>`;
  // neon CEO sign blinking
  const on = (Math.floor(t * 2.2) % 7) !== 0;
  s += `<rect x="30" y="820" width="250" height="110" rx="20" fill="#1A1C22"/>`;
  s += `<text x="155" y="904" text-anchor="middle" font-family="Inter" font-weight="900" font-size="78" fill="${on ? '#FF5FA2' : '#5A2A40'}" ${on ? 'style="filter:drop-shadow(0 0 14px #FF5FA2)"' : ''}>CEO</text>`;
  // whiteboard with the plan
  s += `<g transform="translate(40 560) rotate(-3)"><rect width="260" height="220" rx="8" fill="#F4F6F8" stroke="#888" stroke-width="6"/>
    <text x="20" y="50" font-family="Inter" font-weight="900" font-size="30" fill="#2E6DB4">PLANO</text>
    <text x="20" y="98" font-family="Inter" font-weight="700" font-size="26" fill="#333">1. Ideia ✔</text>
    <text x="20" y="140" font-family="Inter" font-weight="700" font-size="26" fill="#333">2. ???</text>
    <text x="20" y="182" font-family="Inter" font-weight="700" font-size="26" fill="#E2365B">3. Lucro 💶</text></g>`;
  // floor and workbench
  s += `<rect y="1060" width="1080" height="860" fill="#6E6A66"/>`;
  for (let i = 0; i < 8; i++) s += `<path d="M${i * 160 - 200} 1920 L${540 + (i - 3.5) * 40} 1060" stroke="#5E5A56" stroke-width="4"/>`;
  s += `<rect x="640" y="900" width="400" height="34" fill="#8A5A34"/><rect x="660" y="934" width="26" height="200" fill="#6B4426"/><rect x="994" y="934" width="26" height="200" fill="#6B4426"/>`;
  s += `<rect x="760" y="800" width="170" height="104" rx="8" fill="#22262E"/><rect x="770" y="810" width="150" height="84" fill="${on ? '#7FD0FF' : '#5FB0E0'}"/><rect x="740" y="900" width="210" height="10" rx="4" fill="#444"/>`;
  // steaming mug
  s += `<rect x="680" y="850" width="44" height="50" rx="8" fill="#FFFFFF"/>`;
  for (let i = 0; i < 3; i++) { const k = (t * 0.6 + i / 3) % 1; s += `<path d="M${690 + i * 12} ${845 - k * 90} q 10 -14 0 -28" stroke="#fff" stroke-width="5" fill="none" opacity="${1 - k}"/>`; }
  // swinging bulb
  const a = Math.sin(t * 1.6) * 10;
  s += `<g transform="translate(540 0) rotate(${a})"><line x1="0" y1="0" x2="0" y2="420" stroke="#222" stroke-width="4"/><circle cy="440" r="140" fill="url(#gBulb)"/><circle cy="440" r="26" fill="#FFF2B0"/></g>`;
  // scooter and beanbag
  s += `<g transform="translate(70 980)"><rect x="0" y="0" width="12" height="160" fill="#2E9E5B" transform="rotate(-12)"/><rect x="10" y="150" width="170" height="16" rx="8" fill="#2E9E5B"/><circle cx="20" cy="176" r="22" fill="#222"/><circle cx="170" cy="176" r="22" fill="#222"/></g>`;
  return W(s, defs);
}

function salaSVG(t = 0) {
  const defs = `<radialGradient id="sGlow" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#8FD3FF" stop-opacity=".55"/><stop offset="1" stop-color="#8FD3FF" stop-opacity="0"/></radialGradient>`;
  let s = `<rect width="1080" height="1920" fill="#1B2440"/>`;
  // wallpaper stripes
  for (let i = 0; i < 14; i++) s += `<rect x="${i * 80}" width="40" height="1100" fill="#202B4C"/>`;
  // window with moon and sleeping city
  s += `<rect x="600" y="400" width="400" height="460" rx="10" fill="#0D1530" stroke="#C9B48A" stroke-width="16"/>`;
  for (let i = 0; i < 22; i++) { const tw = 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i)); s += `<circle cx="${620 + rnd(i) * 360}" cy="${420 + rnd(i + 50) * 220}" r="3" fill="#fff" opacity="${tw}"/>`; }
  s += `<circle cx="900" cy="490" r="50" fill="#F4F1DE"/><circle cx="880" cy="480" r="50" fill="#0D1530"/>`;
  for (let i = 0; i < 7; i++) { const h = 80 + rnd(i + 9) * 160; s += `<rect x="${610 + i * 56}" y="${850 - h}" width="50" height="${h}" fill="#111A36"/>`; for (let j = 0; j < 3; j++) if (rnd(i * 7 + j) > 0.75) s += `<rect x="${622 + i * 56}" y="${860 - h + 20 + j * 34}" width="12" height="14" fill="#FFD45C" opacity=".8"/>`; }
  s += `<rect x="792" y="400" width="16" height="460" fill="#C9B48A"/><rect x="600" y="622" width="400" height="16" fill="#C9B48A"/>`;
  // wall clock near 03:00, second hand ticking
  const sec = Math.floor(t) % 60, mn = 2 + t / 60;
  s += `<g transform="translate(200 560)"><circle r="120" fill="#F4EFE4" stroke="#7A2E3A" stroke-width="14"/>`;
  for (let i = 0; i < 12; i++) s += `<rect x="-4" y="-104" width="8" height="18" fill="#333" transform="rotate(${i * 30})"/>`;
  s += `<rect x="-5" y="-64" width="10" height="64" rx="5" fill="#222" transform="rotate(${90 + mn * 0.5})"/><rect x="-3" y="-92" width="6" height="92" rx="3" fill="#222" transform="rotate(${mn * 6})"/><rect x="-1.5" y="-98" width="3" height="98" fill="#E2365B" transform="rotate(${sec * 6})"/><circle r="8" fill="#222"/></g>`;
  s += `<text x="200" y="740" text-anchor="middle" font-family="Inter" font-weight="900" font-size="46" fill="#FFD45C">03:0${Math.floor(mn) % 10}</text>`;
  // floor
  s += `<rect y="1100" width="1080" height="820" fill="#5B3A2A"/>`;
  for (let i = 0; i < 12; i++) s += `<rect y="${1100 + i * 70}" width="1080" height="4" fill="#4A2E20"/>`;
  s += `<ellipse cx="540" cy="1500" rx="460" ry="120" fill="#7A2E3A" opacity=".6"/>`;
  // ironing board desk with laptop
  s += `<path d="M380 960 L860 940 L900 960 L380 980 Z" fill="#9CC9E8"/><line x1="480" y1="975" x2="760" y2="1180" stroke="#AAA" stroke-width="10"/><line x1="760" y1="968" x2="480" y2="1180" stroke="#AAA" stroke-width="10"/>`;
  s += `<circle cx="640" cy="860" r="220" fill="url(#sGlow)"/>`;
  s += `<rect x="540" y="830" width="200" height="120" rx="8" fill="#22262E"/><rect x="552" y="842" width="176" height="96" fill="#8FD3FF"/><rect x="520" y="946" width="240" height="10" rx="4" fill="#555"/>`;
  // flying email envelopes
  for (let i = 0; i < 5; i++) { const k = (t * 0.35 + i / 5) % 1, x = 640 + Math.sin(k * 6 + i) * 120 - 40 + (i - 2) * 60, y = 830 - k * 560; s += `<g transform="translate(${x} ${y}) rotate(${Math.sin(t * 3 + i) * 14})" opacity="${1 - k}"><rect width="80" height="54" rx="6" fill="#fff"/><path d="M0 0 L40 30 L80 0" stroke="#E2365B" stroke-width="5" fill="none"/></g>`; }
  // mop and bucket in the corner
  s += `<g transform="translate(90 900) rotate(${Math.sin(t) * 2})"><rect x="40" y="0" width="12" height="300" fill="#C98D4B"/><path d="M10 300 h72 l14 60 h-100 Z" fill="#DDD"/></g><path d="M130 1130 h140 l-16 120 h-108 Z" fill="#2E6DB4"/>`;
  // fluffy slippers
  const bob = Math.abs(Math.sin(t * 2)) * 6;
  s += `<ellipse cx="420" cy="${1680 - bob}" rx="80" ry="36" fill="#F2B8D0"/><ellipse cx="600" cy="${1690 - (6 - bob)}" rx="80" ry="36" fill="#F2B8D0"/><circle cx="380" cy="${1660 - bob}" r="16" fill="#fff"/><circle cx="560" cy="${1670 - (6 - bob)}" r="16" fill="#fff"/>`;
  return W(s, defs);
}

function pitchSVG(t = 0) {
  const defs = `<linearGradient id="pBeam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".45"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient>`;
  let s = `<rect width="1080" height="1920" fill="#14182A"/>`;
  // curtains
  for (let i = 0; i < 12; i++) s += `<rect x="${i * 90}" y="0" width="60" height="1200" fill="#2A1B3D" opacity=".8"/>`;
  // DEMO DAY banner
  s += `<rect x="240" y="40" width="600" height="110" rx="16" fill="#E2365B"/><text x="540" y="118" text-anchor="middle" font-family="Inter" font-weight="900" font-size="66" fill="#fff" letter-spacing="6">DEMO DAY</text>`;
  // giant screen with hockey-stick chart shooting off the top
  s += `<rect x="90" y="190" width="900" height="560" rx="14" fill="#0B0F1C" stroke="#3A4466" stroke-width="10"/>`;
  for (let i = 1; i < 6; i++) s += `<line x1="120" y1="${190 + i * 92}" x2="960" y2="${190 + i * 92}" stroke="#223" stroke-width="3"/>`;
  const k = (t * 0.25) % 1, pts = [];
  for (let i = 0; i <= 40; i++) { const u = i / 40; if (u > k * 1.25) break; const y = 700 - 40 * u - 520 * Math.pow(u, 5) * 1.6; pts.push(`${130 + u * 820},${y}`); }
  if (pts.length > 1) s += `<polyline points="${pts.join(' ')}" fill="none" stroke="#2FE38A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>`;
  if (k > 0.7) s += `<text x="900" y="${240 - (k - 0.7) * 300}" text-anchor="middle" font-size="80">🚀</text>`;
    // stage
  s += `<rect y="1120" width="1080" height="800" fill="#2B2F45"/><rect y="1100" width="1080" height="40" fill="#C99300"/>`;
  // sweeping spotlights
  for (let i = 0; i < 3; i++) { const a = Math.sin(t * 0.9 + i * 2) * 18; s += `<g transform="translate(${180 + i * 360} 0) rotate(${a})"><path d="M-30 0 L30 0 L240 1400 L-240 1400 Z" fill="url(#pBeam)"/></g>`; }
  // empty chairs row
  for (let i = 0; i < 7; i++) s += `<g transform="translate(${60 + i * 150} 1720)"><rect width="110" height="20" rx="6" fill="#7A2E3A"/><rect y="-90" width="110" height="90" rx="14" fill="#94394A"/><rect x="10" y="20" width="10" height="70" fill="#444"/><rect x="90" y="20" width="10" height="70" fill="#444"/></g>`;
  // coat stand with a forgotten top hat
  const sw = Math.sin(t * 1.3) * 4;
  s += `<g transform="translate(980 760) rotate(${sw})"><rect x="-6" y="0" width="12" height="360" fill="#5A3A22"/><path d="M-60 360 h120" stroke="#5A3A22" stroke-width="12"/><rect x="-40" y="-60" width="80" height="62" fill="#111"/><rect x="-60" y="0" width="120" height="12" rx="4" fill="#111"/><rect x="-40" y="-20" width="80" height="10" fill="#7A2E3A"/></g>`;
  return W(s, defs);
}

function barcoSVG(t = 0) {
  const defs = `<linearGradient id="bSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1030"/><stop offset="1" stop-color="#2B1F5C"/></linearGradient>`;
  let s = `<rect width="1080" height="1920" fill="url(#bSky)"/>`;
  // fireworks
  for (let f = 0; f < 3; f++) {
    const k = ((t * 0.5 + f / 3) % 1), cx = 200 + f * 340, cy = 220 + rnd(f) * 200, c = PAL[(f * 2 + Math.floor(t * 0.5)) % 6];
    for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2, r = 30 + k * 170; s += `<circle cx="${cx + Math.cos(a) * r}" cy="${cy + Math.sin(a) * r + k * k * 40}" r="${7 * (1 - k) + 2}" fill="${c}" opacity="${1 - k}"/>`; }
  }
  // far city lights on the riverbank
  for (let i = 0; i < 18; i++) { const h = 60 + rnd(i + 3) * 160; s += `<rect x="${i * 62}" y="${760 - h}" width="56" height="${h}" fill="#141634"/>`; for (let j = 0; j < 4; j++) if (rnd(i * 5 + j) > 0.5) s += `<rect x="${i * 62 + 10 + (j % 2) * 22}" y="${770 - h + 16 + Math.floor(j / 2) * 30}" width="10" height="12" fill="#FFD45C" opacity="${0.5 + 0.5 * Math.abs(Math.sin(t + i + j))}"/>`; }
  // river with reflections
  s += `<rect y="760" width="1080" height="360" fill="#0E1A3A"/>`;
  for (let i = 0; i < 26; i++) { const x = rnd(i + 70) * 1080, y = 780 + rnd(i + 90) * 320; s += `<rect x="${x + Math.sin(t * 2 + i) * 16}" y="${y}" width="${40 + rnd(i) * 60}" height="5" rx="2" fill="${PAL[i % 6]}" opacity=".5"/>`; }
  // boat deck
  const roll = Math.sin(t * 0.9) * 1.2;
  s += `<g transform="rotate(${roll} 540 1500)">`;
  s += `<rect x="-40" y="1060" width="1160" height="60" fill="#F4F1EA"/><rect x="-40" y="1050" width="1160" height="14" fill="#2E6DB4"/>`;
  for (let i = 0; i < 12; i++) s += `<rect x="${i * 96}" y="1000" width="8" height="60" fill="#DDD"/>`;
  s += `<rect x="-40" y="1000" width="1160" height="8" fill="#DDD"/>`;
  // lifebuoys
  [[120, 1020], [960, 1020]].forEach(([x, y]) => s += `<circle cx="${x}" cy="${y}" r="38" fill="none" stroke="#E2365B" stroke-width="22"/><circle cx="${x}" cy="${y}" r="38" fill="none" stroke="#fff" stroke-width="22" stroke-dasharray="20 40"/>`);
  // glowing dance floor tiles
  for (let r = 0; r < 8; r++) for (let c = 0; c < 9; c++) { const on = (Math.floor(t * 2.15) + r * 3 + c * 5) % 4 === 0; s += `<rect x="${c * 120}" y="${1120 + r * 100}" width="116" height="96" fill="${on ? PAL[(r + c) % 6] : '#2A2448'}" opacity="${on ? 0.85 : 1}"/>`; }
  s += `</g>`;
  // swaying string lights
  for (let g = 0; g < 2; g++) {
    const y0 = 120 + g * 160, sag = 120 + Math.sin(t * 1.2 + g) * 14;
    s += `<path d="M-20 ${y0} Q 540 ${y0 + sag * 2} 1100 ${y0}" stroke="#333" stroke-width="3" fill="none"/>`;
    for (let i = 0; i < 16; i++) { const u = i / 15, x = -20 + u * 1120, y = (1 - u) * (1 - u) * y0 + 2 * u * (1 - u) * (y0 + sag * 2) + u * u * y0; s += `<circle cx="${x}" cy="${y + 12}" r="13" fill="${PAL[(i + g + Math.floor(t * 2)) % 6]}" opacity="${0.6 + 0.4 * Math.abs(Math.sin(t * 3 + i))}"/>`; }
  }
  return W(s, defs);
}

function auroraSVG(t = 0) {
  const defs = `<linearGradient id="aSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FA8DC"/><stop offset=".45" stop-color="#F7B7A3"/><stop offset="1" stop-color="#FFE3A3"/></linearGradient>
  <radialGradient id="aSun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF6D0"/><stop offset=".55" stop-color="#FFD45C"/><stop offset="1" stop-color="#FFD45C" stop-opacity="0"/></radialGradient>`;
  let s = `<rect width="1080" height="1920" fill="url(#aSky)"/>`;
  // giant rising sun with turning rays
  const sy = 820 - Math.min(1, t / 30) * 120;
  s += `<g transform="translate(540 ${sy}) rotate(${t * 6})">`;
  for (let i = 0; i < 16; i++) s += `<path d="M-18 -200 L18 -200 L6 -420 L-6 -420 Z" fill="#FFE9A0" opacity=".55" transform="rotate(${i * 22.5})"/>`;
  s += `</g><circle cx="540" cy="${sy}" r="260" fill="url(#aSun)"/><circle cx="540" cy="${sy}" r="150" fill="#FFE27A"/>`;
  // drifting clouds
  for (let i = 0; i < 4; i++) { const x = ((t * 14 + i * 300) % 1400) - 200, y = 180 + i * 110; s += `<g opacity=".85"><ellipse cx="${x}" cy="${y}" rx="110" ry="34" fill="#FFF3EA"/><ellipse cx="${x + 60}" cy="${y - 20}" rx="70" ry="34" fill="#FFF3EA"/></g>`; }
  // far hill with the white dome
  s += `<path d="M0 980 Q 300 820 620 900 T 1080 860 V1200 H0 Z" fill="#C98F8F"/>`;
  s += `<g transform="translate(300 790)"><rect x="-90" y="40" width="180" height="90" fill="#F4EFE4"/><path d="M-70 40 A70 80 0 0 1 70 40 Z" fill="#F7F3EC"/><rect x="-8" y="-60" width="16" height="30" fill="#F4EFE4"/><circle cy="-66" r="10" fill="#E8DFCF"/>${[-60, -20, 20, 60].map(x => `<rect x="${x - 6}" y="64" width="12" height="60" fill="#D8CFC0"/>`).join('')}</g>`;
  // pastel houses on the near hill
  s += `<path d="M0 1120 Q 540 980 1080 1120 V1920 H0 Z" fill="#E8C79A"/>`;
  const cols = ['#F2B8A8', '#FFD45C', '#9CC9E8', '#F4EFE4', '#B7D9A8', '#F07B2E'];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) {
    const x = c * 160 - 20 + (r % 2) * 70, y = 1080 + r * 200 + Math.abs(c - 3) * 18, col = cols[(r * 3 + c) % 6];
    s += `<rect x="${x}" y="${y}" width="140" height="190" fill="${col}"/><path d="M${x - 10} ${y} L${x + 70} ${y - 50} L${x + 150} ${y} Z" fill="#B65A3A"/>`;
    for (let w = 0; w < 2; w++) { const lit = rnd(r * 13 + c * 3 + w) > 0.5 && t < 4 + rnd(c + r) * 40; s += `<rect x="${x + 20 + w * 62}" y="${y + 40}" width="38" height="56" fill="${lit ? '#FFE27A' : '#33506B'}"/>`; }
  }
  // morning tram sliding along the bottom street
  const tx = ((t * 60) % 1700) - 400;
  s += `<rect y="1820" width="1080" height="100" fill="#8A8178"/><line x1="0" y1="1850" x2="1080" y2="1850" stroke="#555" stroke-width="5"/>`;
  s += `<g transform="translate(${tx} 1700)"><rect width="300" height="140" rx="18" fill="#F2C230"/><rect y="100" width="300" height="20" fill="#E9E9E9"/>${[20, 90, 160, 230].map(x => `<rect x="${x}" y="22" width="52" height="58" rx="6" fill="#3E5A74"/>`).join('')}<line x1="150" y1="0" x2="190" y2="-80" stroke="#333" stroke-width="5"/><text x="150" y="134" text-anchor="middle" font-family="Inter" font-weight="900" font-size="20" fill="#7A5A10">28</text></g>`;
  // flying pigeons
  for (let i = 0; i < 6; i++) { const x = ((t * 80 + i * 220) % 1300) - 100, y = 520 + Math.sin(t + i) * 60 + i * 30, f = Math.sin(t * 10 + i) * 14; s += `<path d="M${x - 24} ${y - f} Q ${x - 10} ${y - 10} ${x} ${y} Q ${x + 10} ${y - 10} ${x + 24} ${y - f}" stroke="#4A4F5A" stroke-width="6" fill="none" stroke-linecap="round"/>`; }
  return W(s, defs);
}
