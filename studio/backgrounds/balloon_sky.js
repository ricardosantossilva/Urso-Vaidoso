// Sky world: the bear in a hot-air balloon. skySVG(t) background only; balloonSVG(t) the balloon envelope + ropes; basketSVG() front basket.
function skySVG(t = 0) {
  const cl = (cx, cy, s, op) => `<g transform="translate(${cx} ${cy}) scale(${s})" opacity="${op}"><ellipse cx="0" cy="0" rx="120" ry="42" fill="#fff"/><circle cx="-50" cy="-22" r="44" fill="#fff"/><circle cx="26" cy="-40" r="56" fill="#fff"/><circle cx="80" cy="-10" r="36" fill="#fff"/></g>`;
  let clouds = '';
  // clouds drift downward = we rise
  [[120, 0, 1.1, .95], [820, 500, 0.9, .9], [400, 1000, 1.3, .85], [950, 1400, 0.8, .9], [180, 1700, 1.0, .8], [700, 300, 0.6, .7]].forEach(([x, y0, s, op], i) => {
    const y = ((y0 + t * 70) % 2300) - 200; clouds += cl(x + Math.sin(t * .3 + i) * 20, y, s, op); });
  const gy = 1840 + t * 6;
  let city = '';
  for (let i = 0; i < 24; i++) { const h = 30 + ((i * 37) % 60); city += `<rect x="${i * 46}" y="${gy - h}" width="40" height="${h + 200}" fill="#9AA9C0"/>`; }
  let birds = '';
  for (let i = 0; i < 4; i++) { const bx = ((t * 80 + i * 300) % 1300) - 100, by = 700 + i * 120 + Math.sin(t * 2 + i) * 20, f = Math.sin(t * 10 + i) * 12;
    birds += `<path d="M${bx - 20} ${by - f} Q ${bx - 9} ${by - 12} ${bx} ${by} Q ${bx + 9} ${by - 12} ${bx + 20} ${by - f}" stroke="#2B3A4A" stroke-width="4" fill="none" stroke-linecap="round"/>`; }
  return `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">
   <defs><linearGradient id="bsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4FA3E0"/><stop offset=".6" stop-color="#A8D8F4"/><stop offset="1" stop-color="#FCE3C2"/></linearGradient>
   <radialGradient id="bsun"><stop offset="0" stop-color="#FFF6D0"/><stop offset=".6" stop-color="#FFD66B"/><stop offset="1" stop-color="rgba(255,214,107,0)"/></radialGradient></defs>
   <rect width="1080" height="1920" fill="url(#bsky)"/><circle cx="180" cy="300" r="150" fill="url(#bsun)"/>
   ${clouds}${birds}<g opacity=".8">${city}</g></svg>`;
}
function balloonSVG() {
  // envelope stripes in brand colours, ropes to basket rim at y 1090
  const stripes = ['#123259', '#D4AF5F', '#7A2E3A', '#D4AF5F', '#123259', '#D4AF5F', '#7A2E3A', '#D4AF5F', '#123259'];
  const n = stripes.length; let s = '';
  for (let i = 0; i < n; i++) {
    const a0 = -1 + 2 * i / n, a1 = -1 + 2 * (i + 1) / n;
    const x0 = 540 + a0 * 360, x1 = 540 + a1 * 360, xb0 = 540 + a0 * 120, xb1 = 540 + a1 * 120;
    s += `<path d="M${540 + a0 * 40} 170 C ${x0 - 30 * a0} 200, ${x0} 420, ${x0} 560 C ${x0} 760, ${xb0} 860, ${xb0} 930 L ${xb1} 930 C ${xb1} 860, ${x1} 760, ${x1} 560 C ${x1} 420, ${x1 - 30 * a1} 200, ${540 + a1 * 40} 170 Z" fill="${stripes[i]}"/>`;
  }
  return `<svg viewBox="0 0 1080 1920" width="1080" height="1920" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
   <ellipse cx="540" cy="560" rx="362" ry="392" fill="#0B2343"/>${s}
   <ellipse cx="420" cy="380" rx="70" ry="140" fill="#fff" opacity=".12" transform="rotate(20 420 380)"/>
   <rect x="410" y="925" width="260" height="22" rx="8" fill="#6B4A32"/>
   <path d="M420 945 L392 1090 M660 945 L688 1090 M480 945 L470 1090 M600 945 L610 1090" stroke="#5B3E2A" stroke-width="6"/>
   <text x="540" y="600" text-anchor="middle" font-family="Lora" font-weight="700" font-size="88" fill="#F6EFE4" opacity=".95">UV</text>
  </svg>`;
}
function basketSVG() {
  let weave = '';
  for (let r = 0; r < 4; r++) for (let c = 0; c < 9; c++) weave += `<rect x="${372 + c * 38 + (r % 2) * 19}" y="${1110 + r * 36}" width="30" height="26" rx="6" fill="#B07A47"/>`;
  return `<svg viewBox="0 0 1080 1920" width="1080" height="1920" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
   <path d="M360 1090 L720 1090 L700 1260 L380 1260 Z" fill="#8A5A34"/>${weave}
   <rect x="348" y="1076" width="384" height="34" rx="14" fill="#6B4A32"/>
   <rect x="640" y="1150" width="60" height="70" rx="8" fill="#C8B28A"/><text x="670" y="1196" text-anchor="middle" font-family="Inter" font-weight="900" font-size="22" fill="#6B4A32">IVA</text>
  </svg>`;
}
if (typeof module !== 'undefined') module.exports = { skySVG, balloonSVG, basketSVG };
