// New backgrounds: obsSVG (old astronomical observatory with domes in a park at night, twinkling stars, shooting stars),
// ovarSVG (street of azulejo-tiled house fronts with green shutters, letterboxes and a drifting envelope),
// evoraSVG (Roman temple columns on a hilltop square at sunrise, birds and a rising sun)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function obsSVG(t = 0) {
  let stars = '';
  for (let i = 0; i < 70; i++) { const x = (i * 157) % 1080, y = (i * 91) % 1000, o = 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i)); stars += `<circle cx="${x}" cy="${y}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${o.toFixed(2)}"/>`; }
  let shoot = '';
  for (let i = 0; i < 2; i++) { const p = ((t * 0.45 + i * 0.5) % 1); const x = 1100 - p * 900, y = 120 + i * 260 + p * 380; if (p < 0.6) shoot += `<line x1="${x}" y1="${y}" x2="${x + 140}" y2="${y - 60}" stroke="#FFF6C8" stroke-width="5" stroke-linecap="round" opacity="${(1 - p / 0.6).toFixed(2)}"/><circle cx="${x}" cy="${y}" r="7" fill="#fff"/>`; }
  const tree = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-12" y="0" width="24" height="120" fill="#141B2E"/><circle cx="0" cy="-40" r="100" fill="#16324A"/><circle cx="-60" cy="0" r="70" fill="#1B3B55"/><circle cx="60" cy="0" r="70" fill="#1B3B55"/></g>`;
  const rot = Math.sin(t * 0.6) * 8;
  return W(`<rect width="1080" height="1920" fill="url(#osk)"/>${stars}${shoot}
   <circle cx="860" cy="440" r="70" fill="#F4EBC8"/><circle cx="888" cy="425" r="62" fill="#1C2B57"/>
   ${tree(80, 980, 1.2)}${tree(1000, 960, 1.3)}
   <g transform="translate(540 760)">
     <rect x="-330" y="80" width="660" height="330" fill="#E9DFC9"/>${[-260, -150, -40, 70, 180].map(x => `<rect x="${x}" y="150" width="60" height="110" rx="30" fill="#2B3A5C"/><rect x="${x}" y="150" width="60" height="110" rx="30" fill="#FFD77A" opacity="${(0.5 + 0.4 * Math.sin(t * 3 + x)).toFixed(2)}"/>`).join('')}
     <rect x="-350" y="60" width="700" height="30" fill="#D8CBB0"/>
     <rect x="-120" y="-60" width="240" height="130" fill="#E9DFC9"/>
     <path d="M-140 -60 A140 140 0 0 1 140 -60 Z" fill="#B9C3CF"/><g transform="rotate(${rot})"><rect x="-20" y="-200" width="40" height="150" fill="#2B3A5C"/><rect x="-30" y="-230" width="60" height="50" rx="10" fill="#7C8BA3"/></g>
     <path d="M-330 60 A70 70 0 0 1 -190 60 Z" fill="#B9C3CF"/><path d="M190 60 A70 70 0 0 1 330 60 Z" fill="#B9C3CF"/>
   </g>
   <rect y="1170" width="1080" height="750" fill="#1D3A2E"/><path d="M0 1170 Q540 1110 1080 1170 L1080 1260 L0 1260 Z" fill="#244634"/>
   <path d="M380 1920 L470 1170 L610 1170 L700 1920 Z" fill="#8E7F68"/>
   ${[200, 880].map(x => `<rect x="${x - 5}" y="1050" width="10" height="200" fill="#11151F"/><circle cx="${x}" cy="1045" r="20" fill="#FFE7A0" opacity="${(0.8 + 0.2 * Math.sin(t * 5)).toFixed(2)}"/><circle cx="${x}" cy="1045" r="60" fill="#FFE7A0" opacity="0.15"/>`).join('')}`,
   `<linearGradient id="osk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1230"/><stop offset=".7" stop-color="#26306A"/><stop offset="1" stop-color="#4A3E7A"/></linearGradient>`);
}
function ovarSVG(t = 0) {
  const tile = (id, a, b) => `<pattern id="${id}" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="${a}"/><circle cx="30" cy="30" r="16" fill="none" stroke="${b}" stroke-width="5"/><path d="M30 6 L36 30 L30 54 L24 30 Z" fill="${b}"/><path d="M6 30 L30 24 L54 30 L30 36 Z" fill="${b}" opacity=".7"/></pattern>`;
  const house = (x, w, h, fill, door) => `<g transform="translate(${x} ${1250 - h})"><rect width="${w}" height="${h}" fill="url(#${fill})"/><rect y="-24" width="${w}" height="30" fill="#F4EFE4"/><rect x="-6" y="-34" width="${w + 12}" height="14" fill="#C9B48E"/>
     ${[0, 1].map(r => [0, 1].map(c => `<g transform="translate(${30 + c * (w - 140)} ${60 + r * 220})"><rect width="80" height="140" fill="#F4EFE4"/><rect x="8" y="8" width="64" height="124" fill="#2F6B4F"/><line x1="40" y1="8" x2="40" y2="132" stroke="#1F4A36" stroke-width="4"/></g>`).join('')).join('')}
     <g transform="translate(${w / 2 - 50} ${h - 200})"><rect width="100" height="200" fill="#F4EFE4"/><rect x="8" y="8" width="84" height="192" fill="${door}"/><rect x="30" y="110" width="40" height="14" rx="3" fill="#D4AF5F"/></g></g>`;
  const env = 0.5 + 0.5 * Math.sin(t * 1.3);
  return W(`<rect width="1080" height="1920" fill="url(#vsk)"/>
   <g transform="translate(${(t * 18) % 1300 - 200} 470)" fill="#fff" opacity=".9"><ellipse rx="90" ry="34"/><ellipse cx="60" cy="-20" rx="60" ry="34"/></g>
   ${house(-20, 380, 760, 'tA', '#7A2E3A')}${house(370, 340, 700, 'tB', '#1F4A7A')}${house(720, 380, 780, 'tC', '#2F6B4F')}
   <rect y="1250" width="1080" height="670" fill="#C9C2B4"/>${Array.from({ length: 40 }, (_, i) => `<rect x="${(i * 97) % 1080}" y="${1270 + ((i * 53) % 640)}" width="40" height="22" rx="4" fill="#B5AD9C"/>`).join('')}
   <rect y="1250" width="1080" height="24" fill="#9E9584"/>
   <g transform="translate(${520 + Math.sin(t * 1.7) * 20} ${1000 + Math.sin(t * 2.3) * 14}) rotate(${Math.sin(t * 2) * 10})" opacity="${(0.6 + 0.4 * env).toFixed(2)}"><rect x="-55" y="-36" width="110" height="72" rx="6" fill="#FBF5EA" stroke="#9E8A6A" stroke-width="3"/><path d="M-55 -36 L0 6 L55 -36" fill="none" stroke="#9E8A6A" stroke-width="3"/></g>`,
   `<linearGradient id="vsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8CC8EE"/><stop offset="1" stop-color="#E7F4FC"/></linearGradient>${tile('tA', '#EAF0F8', '#2D5BA8')}${tile('tB', '#FFF6E2', '#D58B2A')}${tile('tC', '#E8F4EE', '#2F7D62')}`);
}
function evoraSVG(t = 0) {
  const sunY = 760 - Math.min(1, t / 40) * 60 - Math.sin(t * 0.5) * 6;
  let birds = ''; for (let i = 0; i < 4; i++) { const x = (t * 40 + i * 260) % 1300 - 100, y = 520 + i * 40 + Math.sin(t * 2 + i) * 14, f = Math.sin(t * 9 + i) * 10; birds += `<path d="M${x - 22} ${y - f} Q${x - 10} ${y - 8} ${x} ${y} Q${x + 10} ${y - 8} ${x + 22} ${y - f}" stroke="#4A2E3A" stroke-width="5" fill="none" stroke-linecap="round"/>`; }
  const col = x => `<g transform="translate(${x} 700)"><rect x="-26" y="40" width="52" height="420" fill="#E6D3B3"/>${[0, 1, 2, 3].map(k => `<line x1="${-16 + k * 11}" y1="50" x2="${-16 + k * 11}" y2="450" stroke="#C7AF89" stroke-width="3"/>`).join('')}<rect x="-40" y="10" width="80" height="34" fill="#D9C29C"/><path d="M-40 10 Q-48 -6 -30 -10 L30 -10 Q48 -6 40 10 Z" fill="#E6D3B3"/><rect x="-36" y="460" width="72" height="30" fill="#CBB48E"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#esky)"/><circle cx="760" cy="${sunY}" r="120" fill="#FFD27A"/><circle cx="760" cy="${sunY}" r="200" fill="#FFD27A" opacity=".25"/>${birds}
   <path d="M0 1000 Q270 940 540 990 T1080 970 L1080 1250 L0 1250 Z" fill="#C98E5E"/>
   <g transform="translate(0 0)"><rect x="150" y="1180" width="780" height="80" fill="#B9A07A"/><rect x="170" y="1150" width="740" height="40" fill="#CDB68F"/>
   <rect x="160" y="640" width="760" height="70" fill="#D9C29C"/><rect x="160" y="620" width="760" height="24" fill="#CBB48E"/>
   ${[220, 340, 460, 580, 700, 820].map(col).join('')}</g>
   <rect y="1250" width="1080" height="670" fill="#E2CFA8"/>${Array.from({ length: 36 }, (_, i) => `<ellipse cx="${(i * 131) % 1080}" cy="${1280 + ((i * 67) % 620)}" rx="26" ry="12" fill="#D2BD93"/>`).join('')}
   ${[60, 1020].map(x => `<g transform="translate(${x} 1130)"><rect x="-8" y="0" width="16" height="140" fill="#5A3E2B"/><ellipse cx="0" cy="-30" rx="${70 + Math.sin(t * 1.5) * 4}" ry="90" fill="#6E8B4A"/></g>`).join('')}`,
   `<linearGradient id="esky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B6A0"/><stop offset=".55" stop-color="#FCD9A8"/><stop offset="1" stop-color="#FFF1D6"/></linearGradient>`);
}
