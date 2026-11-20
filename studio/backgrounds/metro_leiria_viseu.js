// New backgrounds: metroSVG (Lisbon-style underground metro platform with azulejo wall and sliding train), leiriaSVG (Leiria-style castle on a green hill over a river with a footbridge and water mill), viseuSVG (Viseu-style granite cathedral square with twin towers, cobbles and pigeons)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function metroSVG(t = 0) {
  // tiled wall with blue/white azulejo pattern, arch ceiling, platform, train gliding past behind the yellow line
  let tiles = '';
  for (let r = 0; r < 9; r++) for (let c = 0; c < 12; c++) {
    const x = c * 90, y = 420 + r * 90;
    tiles += `<rect x="${x}" y="${y}" width="88" height="88" fill="${(r + c) % 2 ? '#F4F7FB' : '#E3ECF7'}"/><circle cx="${x + 44}" cy="${y + 44}" r="${(r + c) % 2 ? 22 : 14}" fill="none" stroke="#2C5DA8" stroke-width="6"/><path d="M${x + 44} ${y + 8} L${x + 80} ${y + 44} L${x + 44} ${y + 80} L${x + 8} ${y + 44} Z" fill="none" stroke="#6E93CC" stroke-width="3"/>`;
  }
  const tx = ((t * 260) % 2600) - 1500;
  let train = `<g transform="translate(${tx} 0)"><rect x="0" y="860" width="1400" height="330" rx="40" fill="#E9EEF2"/><rect x="0" y="860" width="1400" height="40" rx="20" fill="#2C5DA8"/>${Array.from({ length: 7 }, (_, i) => `<rect x="${40 + i * 195}" y="930" width="150" height="120" rx="14" fill="#2B3A4F"/><rect x="${50 + i * 195}" y="940" width="40" height="100" rx="8" fill="#3E5470"/>`).join('')}<rect x="0" y="1120" width="1400" height="24" fill="#2C5DA8"/></g>`;
  const blink = (Math.sin(t * 5) > 0) ? '#FFB020' : '#7A5410';
  return W(`<rect width="1080" height="1920" fill="#1A2230"/>
   <path d="M0 0 H1080 V420 Q540 360 0 420 Z" fill="#CBD3DC"/>
   ${[0, 1, 2, 3].map(i => `<rect x="${110 + i * 250}" y="${120 + i * 6}" width="120" height="16" rx="8" fill="#FFF6D8"/><rect x="${90 + i * 250}" y="${136 + i * 6}" width="160" height="60" fill="#FFF6D8" opacity=".12"/>`).join('')}
   ${tiles}
   <rect x="0" y="830" width="1080" height="400" fill="#141B26"/>${train}
   <g transform="translate(140 470)"><rect width="300" height="110" rx="14" fill="#11161F"/><circle cx="50" cy="55" r="26" fill="${blink}"/><rect x="100" y="34" width="170" height="14" rx="6" fill="#FFB020"/><rect x="100" y="62" width="120" height="14" rx="6" fill="#FFB020" opacity=".7"/></g>
   <g transform="translate(720 470)"><circle cx="70" cy="60" r="56" fill="#C8202C"/><rect x="34" y="50" width="72" height="20" fill="#fff"/><rect x="150" y="30" width="80" height="60" rx="10" fill="#2C5DA8"/></g>
   <rect x="0" y="1230" width="1080" height="34" fill="#F2C230"/>${Array.from({ length: 27 }, (_, i) => `<circle cx="${20 + i * 40}" cy="1247" r="6" fill="#B08A10"/>`).join('')}
   <rect x="0" y="1264" width="1080" height="656" fill="#9AA0A8"/>
   ${Array.from({ length: 9 }, (_, i) => `<line x1="${i * 135}" y1="1264" x2="${i * 135 - 200}" y2="1920" stroke="#8A9098" stroke-width="5"/>`).join('')}
   ${[1400, 1560, 1740].map(y => `<line x1="0" y1="${y}" x2="1080" y2="${y}" stroke="#8A9098" stroke-width="4"/>`).join('')}`);
}
function leiriaSVG(t = 0) {
  // green hill with castle walls and keep, river with footbridge, turning mill wheel, swaying poplars, drifting clouds
  const cloud = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#fff" opacity=".9"><ellipse rx="90" ry="40"/><ellipse cx="60" cy="-20" rx="60" ry="40"/><ellipse cx="-50" cy="-10" rx="50" ry="30"/></g>`;
  const pop = (x, y, s, i) => `<g transform="translate(${x} ${y}) rotate(${Math.sin(t * 1.6 + i) * 3}) scale(${s})"><rect x="-8" y="0" width="16" height="120" fill="#5A3E2A"/><ellipse cx="0" cy="-90" rx="46" ry="140" fill="${i % 2 ? '#4E8A3E' : '#5FA04B'}"/></g>`;
  const a = t * 40;
  const wheel = `<g transform="translate(860 1080) rotate(${a})"><circle r="110" fill="none" stroke="#6B4A32" stroke-width="16"/>${Array.from({ length: 8 }, (_, i) => `<rect x="-6" y="-110" width="12" height="220" fill="#6B4A32" transform="rotate(${i * 22.5})"/>`).join('')}<circle r="20" fill="#4A3220"/></g>`;
  let rip = ''; for (let i = 0; i < 12; i++) rip += `<rect x="${(i * 97 + t * 30) % 1100 - 20}" y="${1170 + (i % 4) * 32}" width="${40 + (i % 3) * 18}" height="5" rx="2" fill="#E4F3FA" opacity=".6"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#lsk)"/>
   ${cloud((t * 18) % 1300 - 150, 160, 1)}${cloud((t * 12 + 600) % 1300 - 150, 300, .8)}
   <path d="M-50 980 Q 300 520 640 600 Q 900 660 1130 980 Z" fill="#6FA85A"/>
   <g transform="translate(420 380)" fill="#D9CBB0"><rect x="-260" y="190" width="560" height="90"/>${Array.from({ length: 14 }, (_, i) => `<rect x="${-260 + i * 40}" y="170" width="24" height="24"/>`).join('')}
     <rect x="-60" y="10" width="140" height="190"/>${Array.from({ length: 4 }, (_, i) => `<rect x="${-60 + i * 38}" y="-12" width="26" height="26"/>`).join('')}<rect x="-14" y="70" width="40" height="60" rx="20" fill="#5A4A3A"/>
     <rect x="200" y="110" width="70" height="90"/><path d="M200 110 l35 -50 l35 50 Z" fill="#B65A3A"/>
     <rect x="2" y="-90" width="6" height="80" fill="#5A4A3A"/><path d="M8 -90 q ${30 + Math.sin(t * 4) * 8} 10 60 0 v 36 q -30 ${10 + Math.sin(t * 4) * 6} -60 0 Z" fill="#2F6DB0"/></g>
   ${[160, 260, 760, 960].map((x, i) => pop(x, 900, .9 + (i % 2) * .2, i)).join('')}
   <rect y="960" width="1080" height="180" fill="#EADFC9"/>${Array.from({ length: 9 }, (_, i) => `<rect x="${30 + i * 120}" y="${990 + (i % 2) * 20}" width="80" height="90" fill="#fff"/><path d="M${30 + i * 120} ${990 + (i % 2) * 20} l40 -34 l40 34 Z" fill="#B65A3A"/><rect x="${55 + i * 120}" y="${1030 + (i % 2) * 20}" width="28" height="30" fill="#3E5A74"/>`).join('')}
   <rect y="1140" width="1080" height="190" fill="#4E92B8"/>${rip}
   <rect x="740" y="960" width="200" height="180" fill="#F1E6D2"/><path d="M740 960 l100 -70 l100 70 Z" fill="#B65A3A"/>${wheel}
   <path d="M60 1150 Q 380 1060 700 1150" stroke="#8C6A4A" stroke-width="18" fill="none"/>${Array.from({ length: 9 }, (_, i) => `<line x1="${100 + i * 70}" y1="${1150 - Math.sin((i + 1) / 10 * Math.PI) * 88}" x2="${100 + i * 70}" y2="${1150 - Math.sin((i + 1) / 10 * Math.PI) * 88 - 40}" stroke="#8C6A4A" stroke-width="6"/>`).join('')}
   <rect y="1330" width="1080" height="590" fill="#D8C9A8"/>${Array.from({ length: 40 }, (_, i) => `<rect x="${(i * 131) % 1080}" y="${1360 + (i * 67) % 540}" width="44" height="22" rx="6" fill="#C7B690"/>`).join('')}`,
   `<linearGradient id="lsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7CC4EE"/><stop offset="1" stop-color="#E8F6FF"/></linearGradient>`);
}
function viseuSVG(t = 0) {
  // granite cathedral with two square towers at golden hour, side arcade, cobbled square, hopping pigeons
  let pig = ''; for (let i = 0; i < 5; i++) { const hop = Math.abs(Math.sin(t * 4 + i * 1.3)) * 14; const x = 120 + i * 200 + Math.sin(t * .7 + i) * 30; pig += `<g transform="translate(${x} ${1430 + (i % 2) * 70 - hop})"><ellipse rx="26" ry="16" fill="#8E96A3"/><circle cx="20" cy="-14" r="11" fill="#7A828F"/><path d="M30 -14 l10 3 l-10 3 Z" fill="#E8A93A"/><path d="M-22 0 l-18 -8 l4 14 Z" fill="#6E7582"/></g>`; }
  const tower = x => `<g transform="translate(${x} 420)" fill="#B9B0A2"><rect width="200" height="540"/><rect y="-30" width="200" height="34" fill="#A79E90"/>${[0, 1, 2, 3, 4].map(i => `<rect x="${i * 44}" y="-58" width="26" height="30"/>`).join('')}<rect x="70" y="80" width="60" height="110" rx="30" fill="#3A3530"/><rect x="70" y="260" width="60" height="90" rx="30" fill="#3A3530"/></g>`;
  const bell = Math.sin(t * 3) * 10;
  return W(`<rect width="1080" height="1920" fill="url(#vsk)"/>
   <circle cx="900" cy="250" r="80" fill="#FFE6A0" opacity=".9"/>
   ${tower(170)}${tower(710)}
   <g transform="translate(270 500) rotate(${bell})"><path d="M-22 0 h44 l8 50 h-60 Z" fill="#C79A3A"/></g>
   <rect x="370" y="560" width="340" height="400" fill="#C4BBAD"/><path d="M370 560 L540 450 L710 560 Z" fill="#B0A797"/>
   <circle cx="540" cy="650" r="54" fill="#3A3530"/><circle cx="540" cy="650" r="54" fill="none" stroke="#9A9182" stroke-width="10"/>${Array.from({ length: 8 }, (_, i) => `<line x1="540" y1="650" x2="${540 + Math.cos(i * Math.PI / 4) * 50}" y2="${650 + Math.sin(i * Math.PI / 4) * 50}" stroke="#9A9182" stroke-width="5"/>`).join('')}
   <path d="M470 960 V800 a70 70 0 0 1 140 0 V960 Z" fill="#4A3A2C"/>
   <rect x="0" y="760" width="170" height="200" fill="#CFC6B8"/>${[0, 1].map(i => `<path d="M${15 + i * 80} 960 V850 a32 32 0 0 1 64 0 V960 Z" fill="#5A5048"/>`).join('')}
   <rect x="910" y="760" width="170" height="200" fill="#CFC6B8"/>${[0, 1].map(i => `<path d="M${925 + i * 80} 960 V850 a32 32 0 0 1 64 0 V960 Z" fill="#5A5048"/>`).join('')}
   <rect y="960" width="1080" height="30" fill="#A79E90"/>
   <path d="M0 990 H1080 V1920 H0 Z" fill="#9C958A"/>
   ${Array.from({ length: 16 }, (_, r) => Array.from({ length: 12 }, (_, c) => `<rect x="${c * 92 + (r % 2) * 46 - 20}" y="${1000 + r * 58}" width="84" height="50" rx="12" fill="${(r * 3 + c) % 4 ? '#ABA498' : '#B7B0A4'}"/>`).join('')).join('')}
   ${pig}`,
   `<linearGradient id="vsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B97A"/><stop offset=".55" stop-color="#FBD9A8"/><stop offset="1" stop-color="#FFF1DC"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { metroSVG, leiriaSVG, viseuSVG };
