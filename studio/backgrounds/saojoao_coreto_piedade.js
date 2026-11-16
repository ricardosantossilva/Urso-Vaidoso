// New backgrounds (2026-11-16 music video 'Sem retenção'):
// saojoaoSVG (Porto Ribeira on São João night: stacked colourful houses, rabelo boats on the Douro, rising paper balloons),
// coretoSVG (village festa dance at night: octagonal bandstand with a band, Minho-style arches of coloured lights, flags),
// piedadeSVG (Lagos-style golden cliffs and sea arches at sunset, sea stacks, rolling waves, a sailboat and gulls)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function saojoaoSVG(t = 0) {
  const hc = ['#E2365B', '#F2B705', '#2E6DB4', '#F07B2E', '#2E9E5B', '#C8D2DC', '#9B59D0', '#E8A0B4'];
  // stacked Ribeira houses climbing the hill
  let houses = '';
  for (let row = 0; row < 3; row++) for (let i = 0; i < 9; i++) {
    const w = 120, x = i * 122 - 10 + (row % 2) * 40, base = 980 - row * 170, h = 190 + ((i * 37 + row * 11) % 60);
    const c = hc[(i * 3 + row * 5) % 8];
    houses += `<rect x="${x}" y="${base - h}" width="${w}" height="${h}" fill="${c}" opacity="${1 - row * 0.12}"/>`;
    houses += `<path d="M${x - 6} ${base - h} L${x + w / 2} ${base - h - 40} L${x + w + 6} ${base - h} Z" fill="#9C4A2E"/>`;
    for (let r = 0; r < 2; r++) for (let k = 0; k < 2; k++) {
      const lit = Math.sin(t * 1.5 + i * 2 + r + k * 3 + row) > -0.3;
      houses += `<rect x="${x + 20 + k * 55}" y="${base - h + 30 + r * 75}" width="32" height="50" fill="${lit ? '#FFE08A' : '#3A3050'}"/>`;
    }
  }
  // the river with reflections and two rabelo boats bobbing
  let water = '';
  for (let i = 0; i < 14; i++) { const y = 1010 + i * 12, x = (i * 151 + t * 40) % 1200 - 100; water += `<rect x="${x}" y="${y}" width="${120 + (i % 3) * 40}" height="4" fill="${hc[i % 8]}" opacity=".35"/>`; }
  const rabelo = (x0, ph) => { const y = 1060 + Math.sin(t * 2 + ph) * 6, a = Math.sin(t * 1.6 + ph) * 2; return `<g transform="translate(${x0} ${y}) rotate(${a})"><path d="M-110 0 Q 0 40 110 -6 L 96 -20 L -96 -20 Z" fill="#5A3A22"/><rect x="-60" y="-34" width="70" height="16" fill="#7A5232"/><rect x="-6" y="-160" width="6" height="140" fill="#4A2E1A"/><path d="M0 -150 L 70 -110 L 0 -40 Z" fill="#EDE3D3"/><rect x="-104" y="-40" width="40" height="8" fill="#8A6040" transform="rotate(-20 -104 -40)"/></g>`; };
  // rising São João paper balloons
  let balloons = '';
  for (let i = 0; i < 8; i++) {
    const k = (t * 0.07 + i / 8) % 1, x = 80 + (i * 137) % 920 + Math.sin(t * 0.8 + i) * 25, y = 780 - k * 700, s = 1 - k * 0.5;
    balloons += `<g transform="translate(${x} ${y}) scale(${s})" opacity="${1 - k * 0.6}"><path d="M-28 0 Q -34 -60 0 -70 Q 34 -60 28 0 Z" fill="${hc[i % 5]}"/><ellipse cx="0" cy="2" rx="16" ry="6" fill="#FFD45C"/><circle cx="0" cy="0" r="${22 + 4 * Math.sin(t * 9 + i)}" fill="#FFD45C" opacity=".25"/></g>`;
  }
  let stars = '';
  for (let i = 0; i < 26; i++) stars += `<circle cx="${(i * 233) % 1080}" cy="${40 + (i * 97) % 300}" r="2.5" fill="#fff" opacity="${0.3 + 0.7 * Math.abs(Math.sin(t * 2 + i))}"/>`;
  // quay with a string of lights
  let lights = '';
  for (let i = 0; i < 15; i++) { const x = 10 + i * 76, u = x / 1080, y = 1150 + 50 * 4 * u * (1 - u); lights += `<circle cx="${x}" cy="${y}" r="11" fill="${hc[i % 5]}" opacity="${0.75 + 0.25 * Math.sin(t * 6 + i)}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#sjs)"/>${stars}
   <circle cx="900" cy="150" r="54" fill="#FFF3C8"/>
   ${houses}${balloons}
   <rect y="990" width="1080" height="190" fill="#1E3550"/>${water}
   ${rabelo(260, 0)}${rabelo(800, 1.7)}
   <rect y="1150" width="1080" height="770" fill="#8C8478"/>
   ${Array.from({ length: 8 }, (_, r) => Array.from({ length: 11 }, (_, c) => `<rect x="${c * 104 + (r % 2) * 52 - 40}" y="${1170 + r * 96}" width="98" height="90" fill="#9C9488" stroke="#6E675E" stroke-width="3"/>`).join('')).join('')}
   <path d="M-20 1150 Q 540 1260 1100 1150" stroke="#3A3050" stroke-width="3" fill="none"/>${lights}`,
   `<linearGradient id="sjs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1638"/><stop offset=".6" stop-color="#2B2A5E"/><stop offset="1" stop-color="#4A3A6E"/></linearGradient>`);
}

function coretoSVG(t = 0) {
  const beat = Math.floor(Math.max(0, t - 0.2) * 118 / 60);
  const pal = ['#E2365B', '#FFD45C', '#2E9E5B', '#2E6DB4', '#F07B2E', '#9B59D0'];
  // Minho-style arches of coloured lights framing the square
  let arches = '';
  for (let a = 0; a < 3; a++) {
    const cx = 540, rx = 520 - a * 120, ry = 640 - a * 150, cy = 1100 - a * 30;
    for (let i = 0; i <= 26; i++) {
      const ang = Math.PI * i / 26, x = cx - Math.cos(ang) * rx, y = cy - Math.sin(ang) * ry;
      const on = (i + a + beat) % 3 !== 0;
      arches += `<circle cx="${x}" cy="${y}" r="${on ? 12 : 8}" fill="${pal[(i + a * 2) % 6]}" opacity="${on ? 0.95 : 0.35}"/>`;
      if (on) arches += `<circle cx="${x}" cy="${y}" r="26" fill="${pal[(i + a * 2) % 6]}" opacity=".18"/>`;
    }
  }
  // octagonal bandstand (coreto) with a band
  let band = '';
  for (let i = 0; i < 5; i++) { const x = 400 + i * 70, y = 850 + Math.sin(t * 12.4 + i) * 4; band += `<circle cx="${x}" cy="${y - 40}" r="16" fill="#1A1A2A"/><rect x="${x - 16}" y="${y - 24}" width="32" height="50" rx="8" fill="#1A2A4A"/><circle cx="${x + 18}" cy="${y - 10}" r="10" fill="#E8B830"/>`; }
  const coreto = `<g><path d="M330 760 L540 680 L750 760 Z" fill="#B8323A"/><rect x="330" y="760" width="420" height="16" fill="#EDE3D3"/>
    ${[350, 455, 540, 625, 730].map(x => `<rect x="${x - 6}" y="776" width="12" height="130" fill="#EDE3D3"/>`).join('')}
    ${band}<rect x="320" y="900" width="440" height="70" fill="#EDE3D3"/>
    ${Array.from({ length: 10 }, (_, i) => `<rect x="${330 + i * 43}" y="880" width="8" height="24" fill="#EDE3D3"/>`).join('')}
    <rect x="320" y="905" width="440" height="10" fill="#C9BFAF"/><circle cx="540" cy="672" r="10" fill="#FFD45C"/></g>`;
  // little waving flags strung across the top
  let flags = '';
  for (let i = 0; i < 18; i++) { const x = i * 62, u = x / 1080, y = 120 + 90 * 4 * u * (1 - u), sw = Math.sin(t * 4 + i) * 8; flags += `<path d="M${x} ${y} l 50 0 l -25 ${55 + sw} Z" fill="${pal[i % 6]}"/>`; }
  // dancing floor: festive square in granite with coloured light pools
  let pools = '';
  for (let i = 0; i < 5; i++) { const x = 100 + i * 220 + Math.sin(t * 1.5 + i) * 60; pools += `<ellipse cx="${x}" cy="${1400 + (i % 2) * 180}" rx="200" ry="70" fill="${pal[(i + beat) % 6]}" opacity=".28"/>`; }
  let confetti = '';
  for (let i = 0; i < 30; i++) { const k = (t * 0.25 + i / 30) % 1, x = (i * 173 + Math.sin(t + i) * 40) % 1080; confetti += `<rect x="${x}" y="${k * 1100}" width="12" height="18" fill="${pal[i % 6]}" transform="rotate(${t * 200 + i * 40} ${x} ${k * 1100})" opacity=".85"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#cts)"/>
   <path d="M0 980 L0 820 L120 820 L120 760 L200 760 L200 820 L880 820 L880 740 L960 700 L1040 740 L1040 820 L1080 820 L1080 980 Z" fill="#241A3C"/>
   <rect x="930" y="600" width="60" height="140" fill="#241A3C"/><path d="M920 600 L960 540 L1000 600 Z" fill="#241A3C"/>
   ${flags}${arches}${coreto}
   <rect y="970" width="1080" height="950" fill="#3A3448"/>
   ${Array.from({ length: 9 }, (_, r) => `<line x1="0" y1="${1010 + r * 100}" x2="1080" y2="${1010 + r * 100}" stroke="#2A2436" stroke-width="4"/>`).join('')}
   ${Array.from({ length: 13 }, (_, c) => `<line x1="${c * 90}" y1="970" x2="${c * 90 - 300 + c * 50}" y2="1920" stroke="#2A2436" stroke-width="4"/>`).join('')}
   ${pools}${confetti}`,
   `<linearGradient id="cts" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B0A24"/><stop offset="1" stop-color="#3A1E52"/></linearGradient>`);
}

function piedadeSVG(t = 0) {
  let waves = '';
  for (let i = 0; i < 9; i++) {
    const y = 1000 + i * 34, sh = Math.sin(t * 1.2 + i) * 30;
    waves += `<path d="M-40 ${y} Q 135 ${y - 12} 270 ${y} T 540 ${y} T 810 ${y} T 1080 ${y} T 1350 ${y}" transform="translate(${sh} 0)" stroke="#FFD9A8" stroke-width="3" fill="none" opacity="${0.5 - i * 0.04}"/>`;
  }
  let glitter = '';
  for (let i = 0; i < 18; i++) glitter += `<rect x="${470 + Math.sin(i * 3.1) * 90 + Math.sin(t * 2 + i) * 10}" y="${960 + i * 12}" width="${30 - i}" height="4" fill="#FFF1C8" opacity="${0.4 + 0.5 * Math.abs(Math.sin(t * 5 + i))}"/>`;
  let gulls = '';
  for (let i = 0; i < 4; i++) { const x = ((t * 55 + i * 290) % 1300) - 100, y = 330 + i * 55 + Math.sin(t * 2.4 + i) * 18; gulls += `<path d="M${x} ${y} q 14 -12 28 0 q 14 -12 28 0" stroke="#4A2A3A" stroke-width="5" fill="none"/>`; }
  const boatX = 140 + (t * 12) % 900, boatY = 1000 + Math.sin(t * 1.6) * 5;
  const cliff = '#C9782E', cliffD = '#9E5522';
  return W(`<rect width="1080" height="1920" fill="url(#pds)"/>
   <circle cx="540" cy="${900 + Math.sin(t * 0.3) * 4}" r="130" fill="#FFC864"/>
   <circle cx="540" cy="900" r="210" fill="#FFC864" opacity=".18"/>${gulls}
   <rect y="960" width="1080" height="340" fill="url(#pdsea)"/>${glitter}${waves}
   <g transform="translate(${boatX} ${boatY})"><path d="M-40 0 L40 0 L28 16 L-28 16 Z" fill="#2A1E2E"/><rect x="-2" y="-90" width="4" height="90" fill="#2A1E2E"/><path d="M2 -86 L44 -6 L2 -6 Z" fill="#F4E8D8"/></g>
   <path d="M0 520 L60 500 L130 560 L180 620 L210 760 L190 980 L240 1060 L260 1300 L0 1300 Z" fill="${cliff}"/>
   <path d="M60 720 Q 120 700 150 800 L150 980 L60 980 Z" fill="#7A3E1A" opacity=".75"/>
   <path d="M1080 560 L1000 540 L930 600 L880 700 L860 860 L900 980 L840 1080 L820 1300 L1080 1300 Z" fill="${cliff}"/>
   <path d="M940 760 Q 990 700 1040 760 L1040 1000 L940 1000 Z" fill="#7A3E1A" opacity=".8"/>
   <path d="M330 1010 L340 860 L370 820 L400 870 L410 1010 Z" fill="${cliffD}"/>
   <path d="M690 1010 L700 900 L720 870 L745 905 L752 1010 Z" fill="${cliffD}"/>
   ${[[350, 1010], [720, 1010]].map(([x, y], j) => `<ellipse cx="${x + 20}" cy="${y + 4}" rx="${50 + 6 * Math.sin(t * 3 + j)}" ry="8" fill="#FFF" opacity=".5"/>`).join('')}
   <rect y="1290" width="1080" height="630" fill="#E3B98A"/>
   ${Array.from({ length: 16 }, (_, i) => `<ellipse cx="${(i * 191) % 1080}" cy="${1330 + (i * 77) % 560}" rx="40" ry="8" fill="#D1A574" opacity=".7"/>`).join('')}
   <path d="M0 1290 Q 270 ${1270 + Math.sin(t * 1.4) * 12} 540 1290 T 1080 1290" stroke="#FFFFFF" stroke-width="10" fill="none" opacity=".75"/>`,
   `<linearGradient id="pds" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E2058"/><stop offset=".4" stop-color="#C8506A"/><stop offset=".75" stop-color="#FF9A5A"/><stop offset="1" stop-color="#FFD08A"/></linearGradient>
    <linearGradient id="pdsea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E07A5A"/><stop offset="1" stop-color="#2E4A7A"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { saojoaoSVG, coretoSVG, piedadeSVG };
