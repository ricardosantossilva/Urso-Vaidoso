// Brand music video backgrounds (2026-11-16 'Urso Vaidoso (Ai, Ai, Ai)'):
// bicaSVG: steep Lisbon street with the yellow Bica funicular, paper garlands, laundry lines and manjerico pots
// arenaSVG: big arena stage with a giant LED screen, moving-head spotlights, sparkler fountains and a phone-light crowd
// praiaSVG: Carcavelos-style beach at sunset with a star-shaped fort on the point, surfers, lifeguard flags
// rooftopSVG: night rooftop party over Lisbon with the lit castle on the hill, DJ booth, balloons, fireworks
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
const PAL = ['#E2365B', '#FFD45C', '#2E9E5B', '#2E6DB4', '#F07B2E', '#9B59D0'];

function bicaSVG(t = 0) {
  // street climbs from bottom-left to top-right; houses on both sides drawn as tall slanted facades
  const houseL = (x, y, w, h, c, k) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}"/>` +
    Array.from({ length: 3 }, (_, r) => Array.from({ length: 2 }, (_, i) => `<rect x="${x + 30 + i * (w / 2)}" y="${y + 40 + r * 150}" width="${w / 2 - 70}" height="90" fill="#33506B"/><rect x="${x + 22 + i * (w / 2)}" y="${y + 128 + r * 150}" width="${w / 2 - 54}" height="10" fill="#222"/>` +
      (r === 1 ? `<rect x="${x + 36 + i * (w / 2)}" y="${y + 104 + r * 150}" width="${w / 2 - 82}" height="22" fill="${PAL[(k + i) % 6]}" opacity=".85"/>` : '')).join('')).join('') + `</g>`;
  // laundry lines that flap
  const laundry = (y0, x0, x1, ph) => {
    let s = `<path d="M${x0} ${y0} Q ${(x0 + x1) / 2} ${y0 + 40} ${x1} ${y0}" stroke="#eee" stroke-width="3" fill="none"/>`;
    for (let i = 0; i < 6; i++) {
      const u = (i + 0.5) / 6, x = x0 + (x1 - x0) * u, y = y0 + 160 * u * (1 - u) * 0.25 * 4 * 0.25 * 4;
      const sw = Math.sin(t * 4 + i + ph) * 8;
      s += `<path d="M${x - 26} ${y} l 52 0 l ${4 + sw} ${70} l -60 0 Z" fill="${['#FFFFFF', '#9CC9E8', '#F2B8A8', '#FFD45C', '#FFFFFF', '#2E9E5B'][i]}"/>`;
    }
    return s;
  };
  const garland = (y0, sag, ph) => {
    let s = `<path d="M-20 ${y0} Q 540 ${y0 + sag} 1100 ${y0 - 60}" stroke="#7A5A3A" stroke-width="3" fill="none"/>`;
    for (let i = 0; i < 18; i++) {
      const u = i / 17, x = -10 + u * 1100, y = (1 - u) * (1 - u) * y0 + 2 * u * (1 - u) * (y0 + sag) + u * u * (y0 - 60);
      const sw = Math.sin(t * 3.2 + i * 0.8 + ph) * 10;
      s += `<path d="M${x - 24} ${y} q 24 ${46 + sw} 48 0 Z" fill="${PAL[(i + ph) % 6]}"/>`;
    }
    return s;
  };
  // funicular car going up and down slowly
  const k = (Math.sin(t * 0.35) + 1) / 2, fx = 380 + k * 260, fy = 1080 - k * 300;
  const fun = `<g transform="translate(${fx} ${fy}) rotate(-38)"><rect x="-150" y="-110" width="300" height="140" rx="16" fill="#F2C230"/><rect x="-150" y="20" width="300" height="20" fill="#E9E9E9"/>
     ${[-110, -40, 30, 100].map(x => `<rect x="${x - 25}" y="-90" width="54" height="64" rx="6" fill="#3E5A74"/>`).join('')}<rect x="-150" y="-118" width="300" height="12" rx="6" fill="#B88B14"/>
     <circle cx="-100" cy="44" r="14" fill="#333"/><circle cx="100" cy="44" r="14" fill="#333"/><text x="0" y="12" text-anchor="middle" font-family="Inter" font-weight="900" font-size="22" fill="#7A5A10">BICA</text></g>`;
  const pots = [[130, 1500], [930, 1480], [210, 1640], [860, 1650]].map(([x, y], i) => `<g transform="translate(${x} ${y})"><path d="M-40 0 h80 l-12 70 h-56 Z" fill="#B65A3A"/><circle cy="-30" r="${46 + Math.sin(t * 2 + i) * 2}" fill="#3F8E3A"/><circle cx="-18" cy="-44" r="16" fill="#58AA4F"/><path d="M0 -76 v-60" stroke="#333" stroke-width="3"/><path d="M-30 -136 h60 l-30 -40 Z" fill="${PAL[i]}"/></g>`).join('');
  return W(`<rect width="1080" height="1920" fill="url(#bsk)"/>
   <circle cx="860" cy="260" r="80" fill="#FFF3C4" opacity=".8"/>
   ${houseL(-30, 260, 330, 760, '#F3D9A6', 0)}${houseL(780, 120, 330, 860, '#9CC9E8', 2)}
   ${Array.from({ length: 30 }, (_, i) => `<rect x="${790 + (i % 6) * 52}" y="${700 + Math.floor(i / 6) * 52}" width="48" height="48" fill="${i % 2 ? '#2E6DB4' : '#fff'}" opacity=".9"/>`).join('')}
   <path d="M300 1020 L780 560 L780 1020 Z" fill="#E8DCC6"/><path d="M300 1020 L780 560" stroke="#8A7E6A" stroke-width="10"/><path d="M330 1020 L800 570" stroke="#8A7E6A" stroke-width="6"/>
   ${fun}
   ${laundry(330, -20, 300, 0)}${laundry(250, 780, 1100, 2)}
   ${garland(470, 140, 0)}${garland(640, 110, 3)}
   <rect y="1020" width="1080" height="900" fill="#D9CFBE"/>
   ${Array.from({ length: 10 }, (_, r) => `<path d="M-40 ${1060 + r * 88} ${Array.from({ length: 22 }, (_, i) => `l 25 ${i % 2 ? -14 : 14}`).join(' ')}" stroke="#2B2B2B" stroke-width="7" fill="none" opacity=".3"/>`).join('')}
   ${pots}
   ${Array.from({ length: 8 }, (_, i) => { const q = ((t * 0.25 + i / 8) % 1); return `<rect x="${(i * 157 + q * 120) % 1080}" y="${300 + q * 900}" width="14" height="10" fill="${PAL[i % 6]}" transform="rotate(${q * 500 + i * 40} ${(i * 157 + q * 120) % 1080} ${300 + q * 900})" opacity=".9"/>`; }).join('')}`,
   `<linearGradient id="bsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5DB7F0"/><stop offset=".6" stop-color="#BFE6FA"/><stop offset="1" stop-color="#F8F1DE"/></linearGradient>`);
}

function arenaSVG(t = 0) {
  const beat = Math.floor(Math.max(0, t) * 118 / 60);
  let beams = '';
  for (let i = 0; i < 8; i++) {
    const x0 = 80 + i * 131, a = Math.sin(t * 1.1 + i * 0.9) * 28;
    const dx = Math.tan(a * Math.PI / 180) * 1200;
    beams += `<polygon points="${x0},120 ${x0 + dx - 110},1400 ${x0 + dx + 110},1400" fill="${PAL[i % 6]}" opacity=".18"/><circle cx="${x0}" cy="120" r="22" fill="#fff" opacity=".9"/>`;
  }
  // LED screen with a pulsing bear head and equalizer
  let eq = '';
  for (let i = 0; i < 18; i++) { const h = 40 + 140 * Math.abs(Math.sin(t * 5 + i * 0.7) * Math.cos(t * 2.3 + i)); eq += `<rect x="${190 + i * 40}" y="${820 - h}" width="28" height="${h}" fill="${PAL[(i + beat) % 6]}"/>`; }
  const s = 1 + 0.05 * Math.abs(Math.sin(t * Math.PI * 118 / 60));
  const head = `<g transform="translate(540 520) scale(${s})"><circle cx="-95" cy="-85" r="48" fill="#8A5A3B"/><circle cx="95" cy="-85" r="48" fill="#8A5A3B"/><circle r="130" fill="#A06A45"/><ellipse cy="40" rx="62" ry="46" fill="#E8C9A6"/><ellipse cy="14" rx="22" ry="14" fill="#2B1B12"/><circle cx="-48" cy="-24" r="12" fill="#1A0F0A"/><circle cx="48" cy="-24" r="12" fill="#1A0F0A"/><circle cx="48" cy="-24" r="26" fill="none" stroke="#D4AF37" stroke-width="6"/><path d="M-60 52 q 30 -22 60 0 q 30 -22 60 0" stroke="#2B1B12" stroke-width="12" fill="none" stroke-linecap="round"/></g>`;
  // sparkler fountains at the front of the stage
  let sparks = '';
  for (const fx of [120, 960]) for (let i = 0; i < 14; i++) { const q = ((t * 1.6 + i / 14) % 1), ang = -Math.PI / 2 + (i % 7 - 3) * 0.12; sparks += `<circle cx="${fx + Math.cos(ang) * q * 300}" cy="${1060 + Math.sin(ang) * q * 300 + q * q * 160}" r="${5 - q * 3}" fill="#FFE9A8" opacity="${1 - q}"/>`; }
  // crowd with phone lights
  let crowd = '';
  for (let i = 0; i < 22; i++) { const x = i * 52 - 10, y = 1780 + (i % 3) * 30, b = Math.sin(t * 7.4 + i) * 10; crowd += `<circle cx="${x}" cy="${y + b}" r="38" fill="#120A20"/><rect x="${x + 18}" y="${y - 110 + b}" width="12" height="70" rx="5" fill="#120A20"/><circle cx="${x + 24}" cy="${y - 118 + b}" r="9" fill="#FFF6C8" opacity="${0.6 + 0.4 * Math.sin(t * 3 + i)}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#ask2)"/>
   ${beams}
   <rect x="140" y="240" width="800" height="620" rx="18" fill="#0C0618" stroke="#2A1846" stroke-width="10"/>
   <rect x="160" y="260" width="760" height="580" fill="url(#scr)"/>${head}${eq}
   <text x="540" y="410" text-anchor="middle" font-family="Lora,serif" font-weight="700" font-size="54" fill="#FFD45C" opacity=".95">URSO VAIDOSO</text>
   <rect x="0" y="1040" width="1080" height="70" fill="#2A1846"/><rect x="0" y="1110" width="1080" height="810" fill="#1A0E30"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 92}" y="1110" width="86" height="40" fill="${PAL[(i + beat) % 6]}" opacity="${(i + beat) % 2 ? .8 : .3}"/>`).join('')}
   ${sparks}${crowd}`,
   `<linearGradient id="ask2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#07030F"/><stop offset="1" stop-color="#2B1450"/></linearGradient>
    <radialGradient id="scr" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#3B1E6E"/><stop offset="1" stop-color="#120828"/></radialGradient>`);
}

function praiaSVG(t = 0) {
  // sun setting slowly, sea with rolling waves, star-shaped fort on the point
  const sunY = 760 + Math.min(1, t / 400) * 30;
  let waves = '';
  for (let r = 0; r < 6; r++) {
    const y = 920 + r * 34, ph = t * (0.8 + r * 0.1) + r;
    waves += `<path d="M0 ${y} ${Array.from({ length: 13 }, (_, i) => `Q ${i * 90 + 45} ${y + Math.sin(ph + i) * 10 - 8} ${(i + 1) * 90} ${y}`).join(' ')}" stroke="#FFE2B8" stroke-width="${3 + r}" fill="none" opacity="${0.25 + r * 0.08}"/>`;
  }
  const foam = (Math.sin(t * 0.9) + 1) / 2;
  const fort = `<g transform="translate(130 860)"><path d="M-160 40 L-100 -20 L-40 0 L0 -50 L40 0 L100 -20 L160 40 Z" fill="#C9B79C"/><rect x="-30" y="-110" width="60" height="70" fill="#D8C8AE"/><path d="M-36 -110 h72 l-36 -40 Z" fill="#B65A3A"/><rect x="-6" y="-200" width="12" height="90" fill="#555"/><circle cy="-200" r="12" fill="#FFE9A8" opacity="${0.5 + 0.5 * Math.sin(t * 3)}"/></g>`;
  const surfer = (x0, sp, y) => { const x = (x0 + t * sp) % 1300 - 110; return `<g transform="translate(${x} ${y + Math.sin(t * 2 + x0) * 8})"><ellipse rx="60" ry="9" fill="#F07B2E"/><rect x="-6" y="-58" width="12" height="50" rx="5" fill="#1A1A1A"/><circle cy="-70" r="12" fill="#1A1A1A"/></g>`; };
  const flag = (x, c) => `<g transform="translate(${x} 1240)"><rect x="-4" y="-160" width="8" height="200" fill="#EEE"/><path d="M4 -160 q 40 ${-8 + Math.sin(t * 6 + x) * 10} 80 0 v 50 q -40 ${8 + Math.sin(t * 6 + x) * 10} -80 0 Z" fill="${c}"/></g>`;
  let gulls = '';
  for (let i = 0; i < 4; i++) { const x = (i * 300 + t * 40) % 1200 - 60, y = 380 + i * 60 + Math.sin(t + i) * 20, f = Math.sin(t * 6 + i) * 10; gulls += `<path d="M${x - 24} ${y - f} Q ${x - 10} ${y - 12} ${x} ${y} Q ${x + 10} ${y - 12} ${x + 24} ${y - f}" stroke="#2B1B30" stroke-width="5" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>
   <circle cx="620" cy="${sunY}" r="120" fill="#FFD27A"/><circle cx="620" cy="${sunY}" r="180" fill="#FFB35C" opacity=".25"/>
   <rect y="840" width="1080" height="260" fill="url(#psea)"/>
   <path d="M480 850 L760 850 L700 1090 L540 1090 Z" fill="#FFD27A" opacity=".3"/>
   ${waves}${fort}${surfer(100, 35, 990)}${surfer(700, 28, 1040)}
   <path d="M0 1100 Q 540 ${1060 + foam * 30} 1080 1100 L1080 1920 L0 1920 Z" fill="#E9C98E"/>
   <path d="M0 1100 Q 540 ${1060 + foam * 30} 1080 1100" stroke="#fff" stroke-width="10" fill="none" opacity=".8"/>
   ${flag(880, '#E2365B')}${flag(980, '#FFD45C')}
   <g transform="translate(180 1420)"><rect x="-6" y="-200" width="12" height="220" fill="#7A5A3A"/><path d="M-130 -190 Q 0 -280 130 -190 Z" fill="#2E6DB4"/><path d="M-130 -190 Q -65 -230 0 -190 Q 65 -230 130 -190" fill="#fff" opacity=".6"/></g>
   ${gulls}`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3C2A6B"/><stop offset=".45" stop-color="#E86A5A"/><stop offset=".8" stop-color="#FFB86B"/></linearGradient>
    <linearGradient id="psea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E08A6A"/><stop offset="1" stop-color="#2E5C8A"/></linearGradient>`);
}

function rooftopSVG(t = 0) {
  // Lisbon at night, castle walls lit on the hill, fireworks, balloons, DJ booth
  let fw = '';
  for (let i = 0; i < 4; i++) {
    const T = 2.6, q = ((t + i * 0.7) % T) / T, cx = 160 + i * 250, cy = 260 + (i % 2) * 120;
    if (q < 0.25) fw += `<circle cx="${cx}" cy="${cy + (1 - q / 0.25) * 500}" r="5" fill="#FFE9A8"/>`;
    else { const r = (q - 0.25) / 0.75; for (let k = 0; k < 14; k++) { const a = k / 14 * Math.PI * 2; fw += `<circle cx="${cx + Math.cos(a) * r * 150}" cy="${cy + Math.sin(a) * r * 150 + r * r * 60}" r="${6 - r * 4}" fill="${PAL[(i + k) % 6]}" opacity="${1 - r}"/>`; } }
  }
  let city = '';
  for (let i = 0; i < 26; i++) { const x = i * 42, h = 60 + (i * 37) % 90; city += `<rect x="${x}" y="${900 - h}" width="40" height="${h}" fill="#1D1838"/>` + Array.from({ length: 3 }, (_, k) => `<rect x="${x + 8 + (k % 2) * 16}" y="${900 - h + 14 + k * 22}" width="8" height="10" fill="#FFD27A" opacity="${((i + k) % 3) ? .9 : .2}"/>`).join(''); }
  const castle = `<g transform="translate(540 640)"><path d="M-420 140 Q 0 -60 420 140 Z" fill="#241D45"/>${[-160, -80, 0, 80, 160].map((x, i) => `<rect x="${x - 30}" y="${-60 - (i % 2) * 30}" width="60" height="${140 + (i % 2) * 30}" fill="#E8B866"/>${[0, 1, 2].map(k => `<rect x="${x - 30 + k * 24}" y="${-74 - (i % 2) * 30}" width="12" height="14" fill="#E8B866"/>`).join('')}`).join('')}<rect x="-190" y="20" width="380" height="60" fill="#D9A653"/></g>`;
  let bulbs = '';
  for (let k = 0; k < 2; k++) for (let i = 0; i < 14; i++) { const u = i / 13, x = u * 1080, y = 1000 + k * 90 + 70 * 4 * u * (1 - u); bulbs += `<circle cx="${x}" cy="${y}" r="11" fill="${PAL[(i + k) % 6]}" opacity="${0.55 + 0.45 * Math.sin(t * 5 + i + k)}"/>`; }
  let balloons = '';
  for (let i = 0; i < 7; i++) { const x = 60 + i * 160 + Math.sin(t + i) * 20, y = 1250 - ((t * 25 + i * 90) % 260); balloons += `<path d="M${x} ${y + 60} q -10 50 6 110" stroke="#ddd" stroke-width="2" fill="none"/><ellipse cx="${x}" cy="${y}" rx="42" ry="54" fill="${PAL[i % 6]}"/><ellipse cx="${x - 14}" cy="${y - 18}" rx="9" ry="14" fill="#fff" opacity=".4"/>`; }
  const dj = `<g transform="translate(860 1430)"><rect x="-150" y="0" width="300" height="140" rx="10" fill="#1B1B1B"/><rect x="-150" y="0" width="300" height="20" fill="#E2365B"/><circle cx="-70" cy="70" r="40" fill="#333"/><circle cx="70" cy="70" r="40" fill="#333"/><line x1="-70" y1="70" x2="${-70 + Math.cos(t * 6) * 36}" y2="${70 + Math.sin(t * 6) * 36}" stroke="#FFD45C" stroke-width="5"/><line x1="70" y1="70" x2="${70 + Math.cos(t * 6 + 2) * 36}" y2="${70 + Math.sin(t * 6 + 2) * 36}" stroke="#FFD45C" stroke-width="5"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#rsk)"/>
   ${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 233) % 1080}" cy="${(i * 97) % 520}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${0.3 + 0.7 * Math.abs(Math.sin(t * 2 + i))}"/>`).join('')}
   ${fw}${castle}${city}
   <rect y="900" width="1080" height="1020" fill="#3A2A2A"/>
   ${Array.from({ length: 9 }, (_, r) => Array.from({ length: 9 }, (_, c) => `<rect x="${c * 120}" y="${1150 + r * 90}" width="118" height="88" fill="${(r + c) % 2 ? '#B65A3A' : '#A04E33'}"/>`).join('')).join('')}
   <rect y="900" width="1080" height="50" fill="#EDE3D2"/>
   ${Array.from({ length: 18 }, (_, i) => `<rect x="${i * 60 + 10}" y="860" width="16" height="90" fill="#EDE3D2"/>`).join('')}
   ${bulbs}${balloons}${dj}
   ${Array.from({ length: 14 }, (_, i) => { const q = ((t * 0.3 + i / 14) % 1); return `<rect x="${(i * 131 + q * 90) % 1080}" y="${700 + q * 1000}" width="14" height="10" fill="${PAL[i % 6]}" transform="rotate(${q * 600 + i * 30} ${(i * 131 + q * 90) % 1080} ${700 + q * 1000})"/>`; }).join('')}`,
   `<linearGradient id="rsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B0A24"/><stop offset=".6" stop-color="#2B2058"/><stop offset="1" stop-color="#5A3A6E"/></linearGradient>`);
}
