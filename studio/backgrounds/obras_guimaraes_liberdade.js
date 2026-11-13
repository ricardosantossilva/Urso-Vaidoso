// New backgrounds (2026-11-13 13:00): obrasSVG (new apartment blocks under construction with a swinging tower crane and VENDE-SE banners),
// guimaraesSVG (medieval castle keep on a green hill with waving flags and clouds), liberdadeSVG (tree-lined avenue with wavy calcada pavement, kiosk and falling autumn leaves)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function obrasSVG(t = 0) {
  const sw = Math.sin(t * 0.8) * 6;
  let win = '';
  const block = (x, y, w, h, floors, col) => {
    let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${col}"/>`;
    for (let f = 0; f < floors; f++) for (let c = 0; c < Math.floor(w / 70); c++)
      s += `<rect x="${x + 18 + c * 70}" y="${y + 20 + f * 70}" width="38" height="44" fill="${(f + c) % 3 ? '#9FC3E0' : '#F6E7B0'}"/>`;
    return s;
  };
  const clouds = [0, 1, 2].map(i => { const x = ((t * 18 + i * 420) % 1400) - 200; return `<g fill="#fff" opacity=".9"><ellipse cx="${x}" cy="${460 + i * 70}" rx="90" ry="34"/><ellipse cx="${x + 60}" cy="${445 + i * 70}" rx="70" ry="40"/></g>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="url(#osk)"/>${clouds}
   ${block(40, 820, 320, 600, 8, '#E9D9C2')}
   ${block(700, 760, 340, 660, 9, '#DCC7A8')}
   <g stroke="#8E9AA6" stroke-width="10" fill="none"><rect x="390" y="900" width="290" height="520"/><line x1="390" y1="1030" x2="680" y2="1030"/><line x1="390" y1="1160" x2="680" y2="1160"/><line x1="390" y1="1290" x2="680" y2="1290"/><line x1="390" y1="900" x2="680" y2="1420"/></g>
   <g transform="translate(540 420)"><rect x="-14" y="0" width="28" height="1000" fill="#E8B21E"/><path d="M-14 0 l28 40 M14 40 l-28 40" stroke="#B9880F" stroke-width="5"/>
    <g transform="rotate(${sw})"><rect x="-260" y="-30" width="700" height="26" fill="#E8B21E"/><rect x="-300" y="-46" width="80" height="60" fill="#5D6670"/>
     <line x1="${300}" y1="-4" x2="${300}" y2="${200 + Math.sin(t * 1.3) * 20}" stroke="#333" stroke-width="4"/><rect x="${260}" y="${200 + Math.sin(t * 1.3) * 20}" width="80" height="50" fill="#B65A3A"/></g></g>
   <g transform="translate(70 1000) rotate(-3)"><rect width="260" height="90" fill="#C8202C"/><text x="130" y="62" font-family="Inter" font-weight="900" font-size="48" fill="#fff" text-anchor="middle">VENDE-SE</text></g>
   <g transform="translate(730 960) rotate(2)"><rect width="280" height="90" fill="#C8202C"/><text x="140" y="62" font-family="Inter" font-weight="900" font-size="48" fill="#fff" text-anchor="middle">VENDE-SE</text></g>
   <rect y="1420" width="1080" height="500" fill="#B9A58A"/><rect y="1420" width="1080" height="30" fill="#8E7B62"/>
   <g fill="#F28C1E">${[120, 330, 760, 960].map(x => `<path d="M${x} 1560 l30 -90 l30 90 Z"/><rect x="${x + 8}" y="1500" width="44" height="12" fill="#fff"/>`).join('')}</g>`,
   `<linearGradient id="osk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FB3E6"/><stop offset="1" stop-color="#CFE7F5"/></linearGradient>`);
}

function guimaraesSVG(t = 0) {
  const flag = (x, y, c1, c2) => { const w = Math.sin(t * 4 + x) * 10; return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y - 120}" stroke="#4A3B2C" stroke-width="6"/><path d="M${x} ${y - 120} q 40 ${w} 80 0 l0 50 q -40 ${-w} -80 0 Z" fill="${c1}"/><path d="M${x} ${y - 120} l32 0 l0 50 l-32 0 Z" fill="${c2}"/>`; };
  const merl = (x, y, n, w) => Array.from({ length: n }, (_, i) => `<rect x="${x + i * w * 2}" y="${y - 40}" width="${w}" height="40"/>`).join('');
  const clouds = [0, 1].map(i => { const x = ((t * 14 + i * 600) % 1400) - 250; return `<g fill="#fff" opacity=".85"><ellipse cx="${x}" cy="${480 + i * 110}" rx="120" ry="40"/><ellipse cx="${x + 80}" cy="${460 + i * 110}" rx="80" ry="46"/></g>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="url(#gsk)"/>${clouds}
   <path d="M0 1250 Q 300 1000 540 1020 Q 800 1040 1080 1220 L1080 1920 L0 1920 Z" fill="#5E9B4A"/>
   <g fill="#A79C8A">
    <rect x="230" y="760" width="620" height="300"/>${merl(230, 760, 8, 40)}
    <rect x="430" y="560" width="220" height="220" fill="#988D7B"/>${merl(430, 560, 3, 40).replace(/<rect/g, '<rect fill="#988D7B"')}
    <rect x="180" y="700" width="110" height="360"/>${merl(180, 700, 2, 30)}
    <rect x="790" y="700" width="110" height="360"/>${merl(790, 700, 2, 30)}
    <path d="M500 1060 l0 -90 q 40 -50 80 0 l0 90 Z" fill="#4A3B2C"/>
    <rect x="525" y="620" width="30" height="60" fill="#4A3B2C"/></g>
   ${flag(540, 520, '#C8202C', '#2F8F3E')}${flag(235, 660, '#1F5FA8', '#fff')}${flag(845, 660, '#1F5FA8', '#fff')}
   <path d="M0 1400 Q 540 1300 1080 1420 L1080 1920 L0 1920 Z" fill="#4C8A3C"/>
   <path d="M480 1920 Q 520 1600 540 1320 Q 560 1600 600 1920 Z" fill="#CDBB94"/>`,
   `<linearGradient id="gsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EC5EF"/><stop offset="1" stop-color="#E4F1F8"/></linearGradient>`);
}

function liberdadeSVG(t = 0) {
  let waves = '';
  for (let i = 0; i < 12; i++) { const y = 1300 + i * 55; waves += `<path d="M0 ${y} q 135 -30 270 0 t 270 0 t 270 0 t 270 0" stroke="#2B2B2B" stroke-width="14" fill="none" opacity=".75"/>`; }
  const tree = (x, s) => `<g transform="translate(${x} 1250) scale(${s})"><rect x="-16" y="-420" width="32" height="420" fill="#8A7B66"/><circle cx="0" cy="-520" r="170" fill="#C9902B"/><circle cx="-110" cy="-450" r="120" fill="#D9A23A"/><circle cx="110" cy="-450" r="120" fill="#B97A22"/></g>`;
  let leaves = '';
  for (let i = 0; i < 12; i++) { const p = ((t * 0.18 + i / 12) % 1); const x = (i * 97 + Math.sin(t * 2 + i) * 40) % 1080; leaves += `<ellipse cx="${x}" cy="${560 + p * 1250}" rx="14" ry="8" fill="${i % 2 ? '#D98B2B' : '#B9561E'}" transform="rotate(${t * 120 + i * 30} ${x} ${560 + p * 1250})"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#lsk)"/>
   <g fill="#EFE6D6"><rect x="0" y="620" width="300" height="640"/><rect x="780" y="580" width="300" height="680"/></g>
   <g fill="#9FB8CF">${[0, 1, 2, 3, 4, 5].map(r => [0, 1, 2].map(c => `<rect x="${30 + c * 90}" y="${660 + r * 95}" width="50" height="62"/><rect x="${810 + c * 90}" y="${620 + r * 100}" width="50" height="62"/>`).join('')).join('')}</g>
   <rect x="0" y="1240" width="1080" height="680" fill="#F1ECE2"/>${waves}
   ${tree(120, 1)}${tree(960, 1.05)}${tree(540, 0.7)}
   <g transform="translate(540 1250)"><rect x="-90" y="-180" width="180" height="180" fill="#2F5D3A"/><path d="M-120 -180 Q 0 -280 120 -180 Z" fill="#2F5D3A"/><rect x="-70" y="-150" width="140" height="70" fill="#F6E7B0"/><text y="-102" font-family="Inter" font-weight="900" font-size="30" text-anchor="middle" fill="#2F5D3A">QUIOSQUE</text></g>
   ${leaves}`,
   `<linearGradient id="lsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F5C08A"/><stop offset="1" stop-color="#FBE6CC"/></linearGradient>`);
}
