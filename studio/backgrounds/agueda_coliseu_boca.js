// New backgrounds: aguedaSVG (Águeda-style street with a canopy of floating colourful umbrellas, white houses with painted trims,
// café tables, painted benches and drifting confetti), coliseuSVG (Coliseu-style music hall stage: red velvet curtains, gold boxes,
// domed ceiling of bulbs, sweeping spotlights, beat-pulsing footlights and a blinking 'ESPECTÁCULO' marquee),
// bocaSVG (Boca do Inferno, Cascais, at sunset: rock arch with crashing waves and spray, setting sun, a lighthouse and gulls)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function aguedaSVG(t = 0) {
  const cols = ['#E2365B', '#FFD45C', '#2E9E5B', '#2E6DB4', '#F07B2E', '#9B59D0', '#7FD3F0', '#FF8FB1'];
  let s = `<rect width="1080" height="1920" fill="url(#sky)"/>`;
  // white houses on both sides with coloured trims and balconies
  const house = (x, w, top, trim) => {
    let h = `<rect x="${x}" y="${top}" width="${w}" height="${1500 - top}" fill="#F6F1E7" stroke="#D8CFBF" stroke-width="4"/>`;
    h += `<rect x="${x}" y="${top}" width="${w}" height="26" fill="${trim}"/>`;
    for (let r = 0; r < 4; r++) for (let c = 0; c < 2; c++) {
      const wx = x + 30 + c * (w / 2), wy = top + 90 + r * 190;
      if (wy > 1380) continue;
      h += `<rect x="${wx}" y="${wy}" width="${w / 2 - 60}" height="120" rx="8" fill="#5D7FA3" stroke="${trim}" stroke-width="10"/>`;
      h += `<rect x="${wx - 10}" y="${wy + 112}" width="${w / 2 - 40}" height="14" fill="#333"/>`;
    }
    return h;
  };
  s += house(-60, 330, 260, '#2E6DB4') + house(810, 330, 220, '#F2B705');
  // street perspective
  s += `<path d="M270 1500 L810 1500 L1080 1920 L0 1920 Z" fill="#C9B79C"/>`;
  for (let i = 0; i < 9; i++) { const y = 1520 + i * 48; s += `<line x1="${270 - i * 30}" y1="${y}" x2="${810 + i * 30}" y2="${y}" stroke="#B4A285" stroke-width="3"/>`; }
  // far end of the street
  s += `<rect x="270" y="760" width="540" height="740" fill="#EDE4D3"/><rect x="420" y="1080" width="240" height="420" fill="#8FB7D8"/>`;
  s += `<rect x="300" y="900" width="100" height="140" rx="6" fill="#5D7FA3" stroke="#E2365B" stroke-width="8"/><rect x="680" y="900" width="100" height="140" rx="6" fill="#5D7FA3" stroke="#2E9E5B" stroke-width="8"/>`;
  // café tables and a painted bench
  [[150, 1640], [930, 1640]].forEach(([x, y], k) => {
    s += `<ellipse cx="${x}" cy="${y}" rx="70" ry="18" fill="${k ? '#E2365B' : '#2E6DB4'}"/><rect x="${x - 6}" y="${y}" width="12" height="90" fill="#444"/>`;
    s += `<rect x="${x - 26}" y="${y - 36}" width="18" height="34" rx="4" fill="#fff"/><path d="M${x - 8} ${y - 26} q12 4 0 16" stroke="#fff" stroke-width="4" fill="none"/>`;
  });
  s += `<rect x="420" y="1560" width="240" height="26" rx="8" fill="#F07B2E"/><rect x="420" y="1530" width="240" height="22" rx="8" fill="#FFD45C"/><rect x="440" y="1586" width="12" height="50" fill="#444"/><rect x="628" y="1586" width="12" height="50" fill="#444"/>`;
  // umbrella canopy: three rows of open umbrellas on wires, swaying gently
  const umb = (cx, cy, r, col, a) => {
    let u = `<g transform="translate(${cx} ${cy}) rotate(${a})"><path d="M${-r} 0 Q 0 ${-r * 0.9} ${r} 0 Q ${r * 0.75} ${-r * 0.12} ${r / 2} 0 Q ${r / 4} ${-r * 0.12} 0 0 Q ${-r / 4} ${-r * 0.12} ${-r / 2} 0 Q ${-r * 0.75} ${-r * 0.12} ${-r} 0 Z" fill="${col}" stroke="rgba(0,0,0,.25)" stroke-width="3"/>`;
    u += `<line x1="0" y1="${-r * 0.45}" x2="0" y2="${r * 0.35}" stroke="#333" stroke-width="4"/><path d="M0 ${r * 0.35} q0 14 -12 14" stroke="#333" stroke-width="4" fill="none"/></g>`;
    return u;
  };
  const rows = [[420, 120, 10], [640, 90, 9], [820, 62, 9]];
  rows.forEach(([y, r, n], ri) => {
    s += `<line x1="0" y1="${y - r * 0.4}" x2="1080" y2="${y - r * 0.4}" stroke="#555" stroke-width="2"/>`;
    for (let i = 0; i < n; i++) {
      const cx = -40 + i * (1160 / (n - 1)) + (ri % 2) * 50;
      const sway = Math.sin(t * 1.4 + i * 0.9 + ri) * 7;
      const bob = Math.sin(t * 1.1 + i + ri * 2) * 8;
      s += umb(cx, y + bob, r, cols[(i + ri * 3) % cols.length], sway);
    }
  });
  // drifting confetti
  for (let i = 0; i < 26; i++) {
    const k = ((t * 0.12 + i * 0.137) % 1), x = (i * 97 + Math.sin(t + i) * 40) % 1080, y = 300 + k * 1500;
    s += `<rect x="${x}" y="${y}" width="14" height="8" fill="${cols[i % cols.length]}" transform="rotate(${t * 120 + i * 40} ${x} ${y})" opacity="${0.85 - k * 0.4}"/>`;
  }
  return W(s, `<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC8F2"/><stop offset="1" stop-color="#D9F0FB"/></linearGradient>`);
}

function coliseuSVG(t = 0) {
  const bpm = 117.5, ph = (t * bpm / 60) % 1, beat = Math.floor(t * bpm / 60);
  let s = `<rect width="1080" height="1920" fill="#1A0B16"/>`;
  // domed ceiling with rings of bulbs
  s += `<ellipse cx="540" cy="80" rx="760" ry="420" fill="#3A1830"/>`;
  for (let ring = 0; ring < 3; ring++) {
    const rx = 700 - ring * 180, ry = 380 - ring * 100, n = 22 - ring * 5;
    for (let i = 0; i <= n; i++) {
      const a = Math.PI * i / n, x = 540 - Math.cos(a) * rx, y = 80 + Math.sin(a) * ry;
      const on = (i + beat + ring) % 3 !== 0;
      s += `<circle cx="${x}" cy="${y}" r="9" fill="${on ? '#FFE9A8' : '#6B4A3A'}" opacity="${on ? 1 : 0.6}"/>`;
    }
  }
  // gold boxes (balconies) on the sides
  for (let lvl = 0; lvl < 3; lvl++) for (const side of [0, 1]) {
    const y = 520 + lvl * 200, x = side ? 900 : 0;
    s += `<rect x="${x}" y="${y}" width="180" height="150" fill="#5A1020"/><path d="M${x} ${y + 150} h180" stroke="#D4A938" stroke-width="16"/>`;
    for (let k = 0; k < 4; k++) s += `<circle cx="${x + 25 + k * 43}" cy="${y + 150}" r="8" fill="#F5D27A"/>`;
  }
  // red velvet curtains swaying
  const sw = Math.sin(t * 1.2) * 10;
  s += `<path d="M180 380 Q ${300 + sw} 900 ${230 + sw} 1500 L180 1500 Z" fill="#A3122A"/><path d="M900 380 Q ${780 - sw} 900 ${850 - sw} 1500 L900 1500 Z" fill="#A3122A"/>`;
  s += `<path d="M180 380 Q540 520 900 380 L900 440 Q540 590 180 440 Z" fill="#C21B36"/>`;
  for (let i = 0; i < 7; i++) s += `<path d="M${200 + i * 110} 440 q55 60 110 0" stroke="#D4A938" stroke-width="8" fill="none"/>`;
  // marquee sign with blinking bulbs
  s += `<rect x="370" y="684" width="340" height="64" rx="14" fill="#0B2343" stroke="#D4A938" stroke-width="8"/>`;
  s += `<text x="540" y="730" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="38" fill="#FFD45C">ESPECTÁCULO</text>`;
  for (let i = 0; i < 16; i++) { const x = 380 + i * 21.3, on = (i + beat) % 2; s += `<circle cx="${x}" cy="680" r="5" fill="${on ? '#FFF2B0' : '#7A5A2A'}"/><circle cx="${x}" cy="752" r="5" fill="${on ? '#7A5A2A' : '#FFF2B0'}"/>`; }
  // sweeping spotlights
  [[300, 1.0, '#FFE9A8'], [780, -1.0, '#FF8FB1'], [540, 0.6, '#9BD7FF']].forEach(([x, d, c], k) => {
    const a = Math.sin(t * 0.9 * d + k) * 22;
    s += `<g transform="rotate(${a} ${x} 380)" opacity="0.32"><path d="M${x - 14} 380 L${x - 210} 1700 L${x + 210} 1700 L${x + 14} 380 Z" fill="${c}"/></g>`;
  });
  // stage floor with planks and footlights pulsing on the beat
  s += `<path d="M120 1500 L960 1500 L1080 1920 L0 1920 Z" fill="#6B3E22"/>`;
  for (let i = 0; i < 8; i++) s += `<line x1="${120 + i * 120}" y1="1500" x2="${i * 154}" y2="1920" stroke="#55301A" stroke-width="4"/>`;
  s += `<rect x="120" y="1490" width="840" height="20" fill="#D4A938"/>`;
  const glow = 0.45 + 0.55 * Math.max(0, Math.cos(ph * Math.PI));
  for (let i = 0; i < 9; i++) s += `<ellipse cx="${160 + i * 95}" cy="1500" rx="30" ry="12" fill="#FFF2B0" opacity="${glow}"/>`;
  // floating sparkles
  for (let i = 0; i < 18; i++) { const k = (t * 0.15 + i * 0.173) % 1; s += `<circle cx="${(i * 131) % 1080}" cy="${1450 - k * 900}" r="${3 + (i % 3)}" fill="#FFE9A8" opacity="${1 - k}"/>`; }
  return W(s);
}

function bocaSVG(t = 0) {
  let s = `<rect width="1080" height="1920" fill="url(#sunset)"/>`;
  // setting sun sinking slowly into the sea
  const sy = 860 + t * 0.6;
  s += `<circle cx="760" cy="${sy}" r="150" fill="#FFB347" opacity="0.95"/><circle cx="760" cy="${sy}" r="220" fill="#FFB347" opacity="0.18"/>`;
  // sea
  s += `<rect x="0" y="960" width="1080" height="960" fill="url(#sea)"/>`;
  for (let i = 0; i < 9; i++) { const y = 990 + i * 40, o = Math.sin(t * 1.5 + i) * 30; s += `<path d="M${560 + o} ${y} h${400 - i * 20}" stroke="#FFD08A" stroke-width="5" opacity="${0.6 - i * 0.05}"/>`; }
  // distant lighthouse on the coast (Guia style) with a turning beam
  s += `<path d="M0 940 Q 120 900 260 930 L260 975 L0 975 Z" fill="#5B4A55"/>`;
  s += `<rect x="150" y="820" width="34" height="115" fill="#F6F1E7"/><rect x="150" y="850" width="34" height="18" fill="#C8202C"/><rect x="144" y="804" width="46" height="20" fill="#333"/><circle cx="167" cy="814" r="8" fill="#FFF2B0"/>`;
  const ba = (t * 50) % 360;
  s += `<g transform="rotate(${ba} 167 814)" opacity="0.35"><path d="M167 814 L560 780 L560 850 Z" fill="#FFF2B0"/></g>`;
  // the rock arch (Boca do Inferno) in the foreground
  s += `<path d="M0 1180 L0 1920 L1080 1920 L1080 1240 Q 960 1150 840 1210 Q 760 1250 700 1330 L 700 1520 Q 620 1430 520 1440 Q 420 1450 380 1530 L 380 1300 Q 300 1170 160 1170 Z" fill="#6E4E3A"/>`;
  s += `<path d="M380 1530 Q 420 1450 520 1440 Q 620 1430 700 1520 L700 1650 L380 1650 Z" fill="#2A3E5A"/>`;
  s += `<path d="M0 1180 Q 160 1150 380 1300" stroke="#8C6A50" stroke-width="18" fill="none"/><path d="M700 1330 Q 840 1190 1080 1240" stroke="#8C6A50" stroke-width="18" fill="none"/>`;
  // waves crashing through the arch, with spray
  const c = (Math.sin(t * 1.6) + 1) / 2;
  s += `<path d="M380 ${1640 - c * 40} Q 460 ${1580 - c * 70} 540 ${1620 - c * 30} T 700 ${1630 - c * 50} L700 1660 L380 1660 Z" fill="#E9F4FA" opacity="0.9"/>`;
  for (let i = 0; i < 14; i++) { const k = (t * 0.5 + i / 14) % 1, x = 420 + (i * 23) % 260; s += `<circle cx="${x + Math.sin(i) * 20}" cy="${1600 - k * 260 * c}" r="${6 + (i % 4) * 3}" fill="#fff" opacity="${(1 - k) * c * 0.8}"/>`; }
  // gulls gliding
  for (let i = 0; i < 4; i++) { const x = ((t * 40 + i * 300) % 1300) - 100, y = 520 + i * 70 + Math.sin(t * 2 + i) * 15, f = Math.sin(t * 6 + i) * 10; s += `<path d="M${x - 26} ${y + f} Q ${x - 12} ${y - 10} ${x} ${y} Q ${x + 12} ${y - 10} ${x + 26} ${y + f}" stroke="#2B2230" stroke-width="5" fill="none"/>`; }
  return W(s, `<linearGradient id="sunset" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B2A6B"/><stop offset="0.45" stop-color="#E4607A"/><stop offset="1" stop-color="#FFB86B"/></linearGradient><linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3D5D8C"/><stop offset="1" stop-color="#1E2F4D"/></linearGradient>`);
}
