// New backgrounds: floresSVG (whitewashed village street under a canopy of swaying paper flowers, Festas do Povo style),
// feiraSVG (night funfair dance platform with a spinning carousel, a turning Ferris wheel and falling confetti),
// funchalSVG (Funchal-style bay at night: lit hillside amphitheatre of houses, harbour lights and fireworks)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function floresSVG(t = 0) {
  const cols = ['#E2365B', '#FFD45C', '#F28AB2', '#2E9E5B', '#7FB8F0', '#F07B2E', '#B57EDC'];
  // flower canopy: rows of paper flowers hanging on strings across the street, swaying
  let canopy = '';
  for (let r = 0; r < 4; r++) {
    const y0 = 340 + r * 80, sag = 40 + r * 6;
    canopy += `<path d="M-20 ${y0} Q 540 ${y0 + sag} 1100 ${y0}" stroke="#5B4636" stroke-width="3" fill="none" opacity=".6"/>`;
    for (let i = 0; i < 13; i++) {
      const x = -20 + i * 92 + (r % 2) * 46, u = Math.max(0, Math.min(1, (x + 20) / 1120)), y = y0 + 2 * sag * u * (1 - u) * 2;
      const sw = Math.sin(t * 2.2 + i * 0.6 + r) * 7, c = cols[(i * 3 + r * 2) % cols.length];
      const rr = 30 - r * 2;
      canopy += `<g transform="translate(${x + sw} ${y + 10}) rotate(${sw * 2})">${[0, 72, 144, 216, 288].map(a => `<ellipse cx="0" cy="${-rr * 0.6}" rx="${rr * 0.45}" ry="${rr * 0.7}" fill="${c}" transform="rotate(${a})"/>`).join('')}<circle r="${rr * 0.3}" fill="#FFF3C4"/></g>`;
    }
  }
  // whitewashed houses with yellow and blue trims, both sides in perspective
  const side = (left) => {
    let s = '';
    for (let k = 0; k < 4; k++) {
      const x0 = left ? 0 : 1080, d = left ? 1 : -1, w = 150 - k * 22, x = x0 + d * (k * 120);
      const top = 520 + k * 40, bot = 1150 - k * 30;
      s += `<polygon points="${x},${top - 40} ${x + d * w},${top} ${x + d * w},${bot} ${x},${bot + 40}" fill="#FAF7F0" stroke="#E6DFD0" stroke-width="3"/>`;
      s += `<polygon points="${x},${bot + 10} ${x + d * w},${bot - 25} ${x + d * w},${bot} ${x},${bot + 40}" fill="${k % 2 ? '#2E6DB4' : '#E8B923'}"/>`;
      s += `<rect x="${Math.min(x + d * w * 0.3, x + d * w * 0.7)}" y="${top + 120}" width="${w * 0.35}" height="${200 - k * 20}" fill="#3E5A74" stroke="${k % 2 ? '#E8B923' : '#2E6DB4'}" stroke-width="8"/>`;
    }
    return s;
  };
  let petals = '';
  for (let i = 0; i < 14; i++) { const k = (t * 0.18 + i / 14) % 1; petals += `<ellipse cx="${(i * 151 + Math.sin(k * 9 + i) * 50) % 1080}" cy="${640 + k * 1100}" rx="9" ry="5" fill="${cols[i % cols.length]}" opacity="${0.9 - k * 0.5}" transform="rotate(${k * 360 + i * 30} ${(i * 151) % 1080} ${640 + k * 1100})"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#fsk)"/>
   <polygon points="380,620 700,620 1080,1260 0,1260" fill="#F2EBDD"/>
   ${side(true)}${side(false)}
   <rect x="430" y="700" width="220" height="330" fill="#FAF7F0"/><path d="M420 700 L540 610 L660 700 Z" fill="#E8B923"/><rect x="505" y="850" width="70" height="180" rx="35" fill="#6B4A32"/><rect x="520" y="650" width="40" height="40" rx="20" fill="#2E6DB4"/>
   <rect y="1150" width="1080" height="770" fill="#CFC4B0"/>
   ${Array.from({ length: 8 }, (_, r) => Array.from({ length: 9 }, (_, c) => `<rect x="${c * 125 + (r % 2) * 60 - 30}" y="${1180 + r * 95}" width="110" height="80" rx="18" fill="#BDB09A" opacity=".7"/>`).join('')).join('')}
   ${canopy}${petals}`,
   `<linearGradient id="fsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC8F0"/><stop offset=".6" stop-color="#C9EBFA"/><stop offset="1" stop-color="#FFF6E0"/></linearGradient>`);
}

function feiraSVG(t = 0) {
  const beat = Math.floor(Math.max(0, t) * 2);
  const pal = ['#E2365B', '#FFD45C', '#2E9E5B', '#2E6DB4', '#9B59D0', '#F07B2E'];
  // Ferris wheel turning on the right
  const a0 = t * 12;
  let wheel = `<g transform="translate(820 520)"><circle r="300" fill="none" stroke="#C9D6E6" stroke-width="8" opacity=".85"/><circle r="40" fill="#C9D6E6"/>`;
  for (let i = 0; i < 12; i++) {
    const a = (a0 + i * 30) * Math.PI / 180, x = Math.cos(a) * 300, y = Math.sin(a) * 300;
    wheel += `<line x1="0" y1="0" x2="${x}" y2="${y}" stroke="#C9D6E6" stroke-width="4" opacity=".6"/><circle cx="${x}" cy="${y}" r="8" fill="#FFE9A8" opacity="${0.6 + 0.4 * Math.sin(t * 6 + i)}"/>`;
    wheel += `<g transform="translate(${x} ${y + 8})"><rect x="-24" y="0" width="48" height="40" rx="8" fill="${pal[i % 6]}"/></g>`;
  }
  wheel += `</g><path d="M820 520 L640 1050 M820 520 L1000 1050" stroke="#8A9AB0" stroke-width="12"/>`;
  // carousel on the left, its horses bobbing
  let car = `<g transform="translate(230 760)"><path d="M-220 0 L0 -160 L220 0 Z" fill="#E2365B"/>${Array.from({ length: 8 }, (_, i) => `<path d="M${-220 + i * 55} 0 q 27 40 55 0" fill="${i % 2 ? '#FFFFFF' : '#E2365B'}"/>`).join('')}<rect x="-200" y="30" width="400" height="16" fill="#FFD45C"/>`;
  for (let i = 0; i < 6; i++) {
    const ph = t * 1.4 + i, x = Math.sin(ph) * 170, z = Math.cos(ph), y = 140 + Math.sin(t * 4 + i) * 22;
    car += `<line x1="${x}" y1="46" x2="${x}" y2="300" stroke="#E8C66B" stroke-width="6" opacity="${0.5 + 0.5 * (z + 1) / 2}"/><ellipse cx="${x}" cy="${y}" rx="${40 * (0.7 + 0.3 * (z + 1) / 2)}" ry="22" fill="${pal[(i + 2) % 6]}" opacity="${0.5 + 0.5 * (z + 1) / 2}"/>`;
  }
  car += `<rect x="-230" y="300" width="460" height="40" rx="10" fill="#7A3FAE"/>${Array.from({ length: 12 }, (_, i) => `<circle cx="${-210 + i * 38}" cy="320" r="7" fill="#FFE9A8" opacity="${(i + beat) % 2 ? 1 : 0.35}"/>`).join('')}</g>`;
  // dance platform with light-up boards
  let floor = '';
  for (let r = 0; r < 6; r++) for (let c = 0; c < 8; c++) {
    const y0 = 1200 + r * 120, x0 = c * 135;
    floor += `<rect x="${x0 + 4}" y="${y0 + 4}" width="127" height="112" rx="6" fill="${pal[(r * 2 + c * 3 + beat) % 6]}" opacity="${(r + c + beat) % 3 === 0 ? 0.9 : 0.35}"/>`;
  }
  let lights = '';
  for (let i = 0; i < 20; i++) { const x = 20 + i * 55, y = 1080 + Math.sin(i * 0.5) * 20; lights += `<circle cx="${x}" cy="${y}" r="10" fill="${pal[i % 6]}" opacity="${(i + beat) % 3 ? 1 : 0.3}"/>`; }
  let conf = '';
  for (let i = 0; i < 30; i++) { const k = (t * 0.25 + i / 30) % 1, x = (i * 97 + Math.sin(k * 8 + i) * 40) % 1080; conf += `<rect x="${x}" y="${-20 + k * 1300}" width="14" height="8" fill="${pal[i % 6]}" transform="rotate(${k * 720 + i * 20} ${x} ${-20 + k * 1300})"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#nsk)"/>
   ${Array.from({ length: 30 }, (_, i) => `<circle cx="${(i * 173) % 1080}" cy="${(i * 97) % 500}" r="2.5" fill="#fff" opacity="${0.3 + 0.5 * Math.abs(Math.sin(t * 2 + i))}"/>`).join('')}
   ${wheel}${car}
   <rect y="1100" width="1080" height="820" fill="#1A1030"/>${floor}${lights}
   <rect x="0" y="1095" width="1080" height="20" fill="#E8C66B"/>${conf}`,
   `<linearGradient id="nsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0C0A2A"/><stop offset=".6" stop-color="#2B1858"/><stop offset="1" stop-color="#5A2A78"/></linearGradient>`);
}

function funchalSVG(t = 0) {
  // hillside amphitheatre of lit houses
  let houses = '';
  for (let i = 0; i < 90; i++) {
    const x = (i * 131) % 1080, row = Math.floor(i / 9), y = 520 + row * 52 + Math.abs(x - 540) * -0.18 + 60;
    houses += `<rect x="${x}" y="${y}" width="22" height="16" fill="#FFE09A" opacity="${0.45 + 0.5 * Math.abs(Math.sin(t * 0.8 + i * 1.7))}"/>`;
  }
  // fireworks bursting in turn
  let fw = '';
  const bursts = [[260, 300, '#FF5A7A', 0], [760, 240, '#FFD45C', 0.9], [520, 380, '#7FE0FF', 1.8], [900, 420, '#B8FF7A', 2.6]];
  bursts.forEach(([cx, cy, col, off]) => {
    const k = ((t + off) % 3.2) / 3.2;
    if (k < 0.25) { const h = k / 0.25; fw += `<circle cx="${cx}" cy="${1000 - (1000 - cy) * h}" r="5" fill="#fff"/>`; }
    else { const e = (k - 0.25) / 0.75, r = 40 + e * 150;
      for (let j = 0; j < 16; j++) { const a = j * Math.PI / 8; fw += `<circle cx="${cx + Math.cos(a) * r}" cy="${cy + Math.sin(a) * r + e * e * 60}" r="${6 - e * 4}" fill="${col}" opacity="${1 - e}"/>`; } }
  });
  let water = '';
  for (let i = 0; i < 18; i++) { const y = 1110 + i * 45, x = (i * 211 + t * 30) % 1080; water += `<rect x="${x}" y="${y}" width="${120 - i * 3}" height="5" rx="2" fill="#FFE09A" opacity="${0.35 - i * 0.015}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#msk)"/>
   ${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 137) % 1080}" cy="${(i * 61) % 420}" r="2" fill="#fff" opacity="${0.3 + 0.5 * Math.abs(Math.sin(t * 1.5 + i))}"/>`).join('')}
   ${fw}
   <path d="M0 560 Q 200 420 420 470 Q 600 380 780 450 Q 950 400 1080 480 L1080 1100 L0 1100 Z" fill="#1E2A44"/>
   <path d="M0 760 Q 300 640 540 700 Q 800 640 1080 720 L1080 1100 L0 1100 Z" fill="#26365A"/>
   ${houses}
   <rect y="1080" width="1080" height="840" fill="#0E1A33"/>${water}
   <g transform="translate(${700 + Math.sin(t * 0.3) * 10} 1060)"><path d="M-260 0 L260 0 L220 60 L-230 60 Z" fill="#F2F2F2"/><rect x="-200" y="-50" width="380" height="50" fill="#FFFFFF"/><rect x="-150" y="-90" width="260" height="40" fill="#E6ECF2"/>${Array.from({ length: 14 }, (_, i) => `<rect x="${-190 + i * 26}" y="-38" width="14" height="10" fill="#FFE09A"/>`).join('')}<rect x="60" y="-140" width="40" height="50" fill="#C8202C"/></g>
   <rect y="1300" width="1080" height="620" fill="#3A3F4A"/>${Array.from({ length: 11 }, (_, i) => `<rect x="${i * 100}" y="1300" width="96" height="620" fill="#444A57" opacity=".6"/>`).join('')}
   <rect y="1290" width="1080" height="18" fill="#C9D6E6"/>
   ${[140, 940].map(x => `<g transform="translate(${x} 1300)"><rect x="-6" y="-260" width="12" height="260" fill="#1B1B1B"/><circle cy="-270" r="22" fill="#FFE09A"/><circle cy="-270" r="60" fill="#FFE09A" opacity=".18"/></g>`).join('')}`,
   `<linearGradient id="msk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#070B22"/><stop offset=".7" stop-color="#1B2550"/><stop offset="1" stop-color="#2E3A6A"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { floresSVG, feiraSVG, funchalSVG };
