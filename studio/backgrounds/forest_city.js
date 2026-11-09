// Two worlds for Urso Vaidoso: forestSVG(t) and citySVG(t), both 1080x1920.
function forestSVG(t = 0, o = {}) {
  const gloom = o.mood === 'gloom';
  const trunk = (x, w, c, top = 0) => `<rect x="${x}" y="${top}" width="${w}" height="1500" fill="${c}"/><path d="M${x + w * 0.3} ${top} L${x + w * 0.3} 1500" stroke="rgba(0,0,0,.12)" stroke-width="${w * 0.12}"/>`;
  let far = '', mid = '', near = '';
  [[30, 50], [170, 40], [330, 60], [520, 44], [690, 56], [860, 46], [1000, 52]].forEach(([x, w]) => far += trunk(x, w, '#5E7F6A'));
  [[-30, 90], [260, 80], [610, 96], [930, 90]].forEach(([x, w]) => mid += trunk(x, w, '#4A3628'));
  const canopy = (cx, cy, r, c) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${c}"/>`;
  let can = '';
  for (let i = 0; i < 14; i++) can += canopy(i * 90 - 20 + Math.sin(t * 0.8 + i) * 4, 120 + (i % 3) * 70, 150, i % 2 ? '#2F6B4A' : '#3A7D57');
  for (let i = 0; i < 10; i++) can += canopy(i * 120 + 30, 360 + (i % 2) * 50, 110, i % 2 ? '#2A5E41' : '#346F4C');
  // light rays
  let rays = '';
  if (!gloom) [[180, 0.18], [460, 0.12], [760, 0.16]].forEach(([x, a], i) => rays += `<path d="M${x} 300 L${x + 120} 300 L${x + 420} 1500 L${x + 160} 1500 Z" fill="#FFF3B0" opacity="${a * (0.8 + 0.2 * Math.sin(t * 1.5 + i))}"/>`);
  // ferns + mushrooms
  const fern = (x, y, s, f) => `<g transform="translate(${x} ${y}) scale(${s}) rotate(${Math.sin(t * 1.6 + x) * 3})">${[-60, -30, 0, 30, 60].map(a => `<path d="M0 0 Q ${a * 1.2} -80 ${a * 2.2} -150" stroke="${f}" stroke-width="22" fill="none" stroke-linecap="round"/>`).join('')}</g>`;
  const mush = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-14" y="-50" width="28" height="55" rx="10" fill="#F6EFE4"/><path d="M-60 -45 C -55 -110, 55 -110, 60 -45 Z" fill="#D2423A"/><circle cx="-25" cy="-72" r="9" fill="#fff"/><circle cx="18" cy="-82" r="7" fill="#fff"/><circle cx="32" cy="-58" r="6" fill="#fff"/></g>`;
  // fireflies/pollen
  let motes = '';
  for (let i = 0; i < 18; i++) { const x = (i * 157 + t * 20 * (i % 3 + 1)) % 1080, y = 700 + ((i * 263 + Math.sin(t + i) * 40) % 700);
    motes += `<circle cx="${x}" cy="${y}" r="${3 + (i % 3)}" fill="#FFF3B0" opacity="${0.4 + 0.4 * Math.sin(t * 3 + i)}"/>`; }
  // stream
  const sw = (k) => `M0 ${1430 + k} C 200 ${1400 + k}, 380 ${1470 + k}, 560 ${1440 + k} C 760 ${1405 + k}, 900 ${1460 + k}, 1080 ${1430 + k}`;
  return `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
   <defs><linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${gloom ? '#4F6355' : '#BFE3C6'}"/><stop offset="1" stop-color="${gloom ? '#6F8274' : '#E9F3D6'}"/></linearGradient>
   <linearGradient id="fground" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5C8A44"/><stop offset="1" stop-color="#3E6B33"/></linearGradient></defs>
   <rect width="1080" height="1920" fill="url(#fsky)"/>
   <g opacity=".55">${far}</g>
   ${rays}
   ${mid}
   ${can}
   <path d="M0 1250 C 250 1210, 500 1270, 760 1230 C 900 1210, 1000 1240, 1080 1230 L1080 1920 L0 1920 Z" fill="url(#fground)"/>
   <path d="${sw(0)} L1080 1520 C 900 1550, 700 1500, 540 1530 C 360 1560, 180 1500, 0 1520 Z" fill="#6FB7D9"/>
   <path d="${sw(18)}" stroke="#BFE6F5" stroke-width="5" fill="none" stroke-dasharray="40 30" stroke-dashoffset="${-t * 60}"/>
   <path d="${sw(48)}" stroke="#BFE6F5" stroke-width="4" fill="none" stroke-dasharray="30 40" stroke-dashoffset="${-t * 45}" opacity=".7"/>
   <!-- log bridge -->
   <rect x="640" y="1440" width="360" height="56" rx="28" fill="#7A5236"/><circle cx="1000" cy="1468" r="28" fill="#B9875C"/><circle cx="1000" cy="1468" r="14" fill="#7A5236"/>
   ${fern(60, 1300, 1, '#4F8A3E')}${fern(1010, 1290, 0.9, '#4F8A3E')}${fern(120, 1880, 1.4, '#2F6B2C')}${fern(980, 1900, 1.5, '#2F6B2C')}
   ${mush(250, 1340, 0.9)}${mush(840, 1340, 0.7)}${mush(180, 1700, 1.2)}
   <!-- tree stump desk -->
   <g transform="translate(860 1720)"><path d="M-120 0 L-110 -140 L110 -140 L120 0 Z" fill="#7A5236"/><ellipse cx="0" cy="-140" rx="112" ry="30" fill="#C99A6A"/><ellipse cx="0" cy="-140" rx="70" ry="18" fill="none" stroke="#A47548" stroke-width="5"/></g>
   ${motes}
  </svg>`;
}

function citySVG(t = 0, o = {}) {
  const gloom = o.mood === 'gloom';
  const facade = (x, w, c, tile, floors) => {
    let s = `<rect x="${x}" y="200" width="${w}" height="1150" fill="${c}"/>`;
    if (tile) s += `<rect x="${x}" y="200" width="${w}" height="1150" fill="url(#az)" opacity=".85"/>`;
    s += `<rect x="${x - 10}" y="190" width="${w + 20}" height="26" fill="#EDE4D3"/>`;
    for (let f = 0; f < floors; f++) { const y = 270 + f * 250;
      for (let k = 0; k < 2; k++) { const wx = x + 40 + k * (w - 160);
        s += `<rect x="${wx - 8}" y="${y - 8}" width="96" height="176" rx="6" fill="#EDE4D3"/><rect x="${wx}" y="${y}" width="80" height="160" rx="4" fill="${(f + k) % 3 ? '#3E5A74' : '#FFE3A0'}"/><rect x="${wx - 14}" y="${y + 160}" width="108" height="12" fill="#2B3440"/>`;
        s += `<path d="M${wx - 14} ${y + 172} L${wx - 14} ${y + 120} M${wx + 94} ${y + 172} L${wx + 94} ${y + 120} M${wx - 14} ${y + 130} L${wx + 94} ${y + 130}" stroke="#2B3440" stroke-width="5"/>`; } }
    return s; };
  // calçada waves
  let calc = '';
  for (let r = 0; r < 9; r++) { const y = 1460 + r * 52;
    calc += `<path d="M0 ${y} ${Array.from({ length: 10 }, (_, i) => `Q ${i * 120 + 60} ${y - 24} ${i * 120 + 120} ${y}`).join(' ')}" stroke="#2B2B2B" stroke-width="12" fill="none" opacity=".85"/>`; }
  // tram (generic, no logos)
  const tx = ((t * 120) % 2200) - 900;
  const tram = `<g transform="translate(${tx} 1150)"><rect x="0" y="0" width="560" height="250" rx="30" fill="#F4C430"/><rect x="0" y="180" width="560" height="70" rx="0" fill="#E9E1CF"/>
    ${[0, 1, 2, 3, 4].map(i => `<rect x="${40 + i * 100}" y="40" width="70" height="100" rx="10" fill="#9CC3D6"/>`).join('')}
    <rect x="-10" y="-20" width="580" height="30" rx="12" fill="#C8A027"/><path d="M280 -20 L320 -110" stroke="#2B3440" stroke-width="6"/>
    <circle cx="120" cy="262" r="26" fill="#2B3440"/><circle cx="440" cy="262" r="26" fill="#2B3440"/></g>`;
  // pigeons
  const pig = (x, y, k) => { const hop = Math.abs(Math.sin(t * 4 + k)) * 14;
    return `<g transform="translate(${x} ${y - hop})"><ellipse cx="0" cy="0" rx="34" ry="24" fill="#8C97A6"/><circle cx="26" cy="-22" r="15" fill="#7A8594"/><path d="M40 -22 L52 -18 L40 -14 Z" fill="#E8A93A"/><circle cx="30" cy="-25" r="3" fill="#111"/><path d="M-30 -4 L-56 6 L-30 10 Z" fill="#6B7584"/></g>`; };
  return `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
   <defs>
    <pattern id="az" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#F4F7FB"/><path d="M30 6 L54 30 L30 54 L6 30 Z" fill="none" stroke="#2E6DB4" stroke-width="5"/><circle cx="30" cy="30" r="8" fill="#2E6DB4"/><circle cx="0" cy="0" r="8" fill="#2E6DB4"/><circle cx="60" cy="0" r="8" fill="#2E6DB4"/><circle cx="0" cy="60" r="8" fill="#2E6DB4"/><circle cx="60" cy="60" r="8" fill="#2E6DB4"/></pattern>
    <linearGradient id="csky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${gloom ? '#5F6E80' : '#8CCBEE'}"/><stop offset="1" stop-color="${gloom ? '#A9B3BE' : '#FCE3C2'}"/></linearGradient>
   </defs>
   <rect width="1080" height="1920" fill="url(#csky)"/>
   <!-- far street perspective -->
   <rect x="380" y="560" width="320" height="800" fill="#EBD9BC"/><path d="M370 560 L540 470 L710 560 Z" fill="#B65A3A"/>
   ${[0,1,2].map(r=>[0,1].map(c=>`<rect x="${420+c*150}" y="${620+r*170}" width="80" height="110" rx="4" fill="#3E5A74"/>`).join('')).join('')}
   <!-- facades -->
   ${facade(-60, 470, '#F6EFE4', true, 4)}
   ${facade(670, 470, '#E8A98F', false, 4)}
   <rect x="-60" y="1190" width="470" height="160" fill="#C9B79A"/><rect x="40" y="1210" width="140" height="140" rx="70" fill="#4A3628"/><rect x="230" y="1230" width="140" height="120" fill="#3E5A74"/>
   <rect x="670" y="1190" width="470" height="160" fill="#C78671"/><rect x="760" y="1220" width="200" height="130" fill="#3E5A74"/><path d="M740 1200 L980 1200 L960 1250 L760 1250 Z" fill="#2E6DB4" opacity=".9"/>
   <!-- street -->
   <rect y="1350" width="1080" height="110" fill="#8D8A84"/><path d="M0 1395 L1080 1395 M0 1415 L1080 1415" stroke="#B5B0A6" stroke-width="6"/>
   ${tram}
   <rect y="1440" width="1080" height="480" fill="#EDE6D8"/>${calc}
   <!-- lamp -->
   <g transform="translate(960 1500)"><rect x="-9" y="-560" width="18" height="560" fill="#2B3440"/><path d="M-40 -600 L40 -600 L28 -540 L-28 -540 Z" fill="#2B3440"/><rect x="-26" y="-596" width="52" height="50" fill="#FFE9A8"/></g>
   <!-- café table -->
   <g transform="translate(150 1640)"><ellipse cx="0" cy="-110" rx="110" ry="22" fill="#C8202C"/><rect x="-6" y="-110" width="12" height="110" fill="#2B3440"/><rect x="-60" y="-4" width="120" height="10" rx="4" fill="#2B3440"/><rect x="-14" y="-140" width="26" height="30" rx="6" fill="#fff"/><path d="M12 -132 C 26 -132, 26 -118, 12 -118" stroke="#fff" stroke-width="5" fill="none"/></g>
   ${pig(780, 1760, 0)}${pig(880, 1820, 1.7)}
  </svg>`;
}
if (typeof module !== 'undefined') module.exports = { forestSVG, citySVG };
