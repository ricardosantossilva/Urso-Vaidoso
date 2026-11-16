// Backgrounds: bancoSVG (bank branch hall with marble counter, teller glass, ticket display, swinging pendulum clock, scrolling rate screen),
// aquedutoSVG (Lisbon Águas Livres-style aqueduct arches over a green valley at morning, drifting clouds, birds),
// marvaoSVG (Marvão-style walled village and castle on a granite crag above a sea of clouds at golden hour)
const W3 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function bancoSVG(t = 0) {
  const sw = Math.sin(t * 2.4) * 14;
  const tick = 100 + Math.floor(t * 0.7) % 20;
  const off = (t * 60) % 520;
  let cols = '';
  for (let i = 0; i < 4; i++) { const x = 60 + i * 300; cols += `<rect x="${x}" y="380" width="70" height="900" fill="#E9E1D2"/><rect x="${x - 12}" y="380" width="94" height="30" fill="#D6CCBA"/><rect x="${x - 12}" y="1250" width="94" height="30" fill="#D6CCBA"/>`; }
  let windows = '';
  for (let i = 0; i < 3; i++) { const x = 150 + i * 300; windows += `<rect x="${x}" y="560" width="190" height="300" rx="8" fill="#BFD9E6" opacity=".9"/><rect x="${x}" y="560" width="190" height="300" rx="8" fill="none" stroke="#8C7A5E" stroke-width="8"/><circle cx="${x + 95}" cy="780" r="30" fill="#F2E3C4"/><rect x="${x + 55}" y="810" width="80" height="50" rx="20" fill="#2D5B7A"/>`; }
  return W3(`<rect width="1080" height="1920" fill="#F4EEE2"/>
   <rect y="0" width="1080" height="380" fill="#EFE6D6"/>
   <rect x="0" y="365" width="1080" height="20" fill="#C9A86A"/>
   ${cols}${windows}
   <g transform="translate(130 450)"><rect x="-60" y="-20" width="120" height="70" rx="10" fill="#0B2343"/><text x="0" y="30" font-family="Inter" font-weight="900" font-size="44" fill="#FF5A4E" text-anchor="middle">A${tick}</text></g>
   <g transform="translate(950 430)"><circle r="56" fill="#FBF5EA" stroke="#8C6A3A" stroke-width="10"/><line x1="0" y1="0" x2="0" y2="-38" stroke="#0B2343" stroke-width="6"/><line x1="0" y1="0" x2="${Math.cos(t) * 30}" y2="${Math.sin(t) * 30}" stroke="#0B2343" stroke-width="4"/>
     <rect x="-8" y="56" width="16" height="140" fill="#8C6A3A"/><g transform="translate(0 70) rotate(${sw})"><line x1="0" y1="0" x2="0" y2="110" stroke="#C9A86A" stroke-width="5"/><circle cy="118" r="20" fill="#C9A86A"/></g></g>
   <g transform="translate(560 420)"><rect x="-200" y="-30" width="400" height="80" rx="10" fill="#0B2343"/><clipPath id="rc"><rect x="-190" y="-25" width="380" height="70"/></clipPath>
     <g clip-path="url(#rc)"><text x="${190 - off}" y="22" font-family="Inter" font-weight="800" font-size="36" fill="#7CE0A3">CRÉDITO HABITAÇÃO · TAXA VARIÁVEL · TAXA FIXA ·</text></g></g>
   <rect x="0" y="1280" width="1080" height="640" fill="#CDBFA8"/>
   <rect x="0" y="1180" width="1080" height="130" fill="#7A2E3A"/><rect x="0" y="1170" width="1080" height="22" fill="#EADFCB"/>
   <rect x="0" y="1300" width="1080" height="12" fill="#5A1F2A"/>
   ${[0, 1, 2, 3, 4, 5, 6].map(i => `<rect x="${i * 160}" y="1440" width="150" height="150" fill="${i % 2 ? '#BFAF95' : '#D9CBB3'}"/><rect x="${i * 160 + 80}" y="1600" width="150" height="150" fill="${i % 2 ? '#D9CBB3' : '#BFAF95'}"/>`).join('')}
  `);
}
function aquedutoSVG(t = 0) {
  let arches = '';
  const n = 9;
  for (let i = 0; i < n; i++) {
    const x = -40 + i * 130, h = 520 + Math.sin(i * 0.7) * 30 + (i > 2 && i < 7 ? 160 : 0);
    arches += `<rect x="${x}" y="${1280 - h}" width="40" height="${h}" fill="#D9CBAE"/><path d="M${x + 40} ${1280 - h + 120} h90 v-30 h-90 Z" fill="#CDBD9E"/><path d="M${x + 40} ${1280 - h + 150} q45 -60 90 0 v ${h - 150} h-90 Z" fill="url(#sky3)"/>`;
  }
  let clouds = '';
  for (let i = 0; i < 3; i++) { const x = ((t * 18 + i * 420) % 1400) - 200, y = 480 + i * 110; clouds += `<g transform="translate(${x} ${y})" fill="#fff" opacity=".9"><ellipse rx="110" ry="40"/><ellipse cx="60" cy="-20" rx="70" ry="45"/><ellipse cx="-60" cy="-10" rx="60" ry="35"/></g>`; }
  let birds = '';
  for (let i = 0; i < 4; i++) { const x = ((t * 70 + i * 260) % 1300) - 100, y = 620 + Math.sin(t * 2 + i) * 30 + i * 30, f = Math.sin(t * 9 + i) * 10; birds += `<path d="M${x - 18} ${y - f} Q${x - 8} ${y - 8} ${x} ${y} Q${x + 8} ${y - 8} ${x + 18} ${y - f}" stroke="#2B3440" stroke-width="4" fill="none"/>`; }
  return W3(`<rect width="1080" height="1920" fill="url(#sky3)"/>
   <circle cx="860" cy="560" r="80" fill="#FFE7A8" opacity=".9"/>
   ${clouds}
   <path d="M0 1050 Q 300 950 600 1020 T 1080 990 V 1920 H0 Z" fill="#8DB37A"/>
   <rect x="-60" y="${1280 - 760}" width="1200" height="60" fill="#CDBD9E"/>
   ${arches}
   <path d="M0 1240 Q 300 1180 600 1250 T 1080 1220 V 1920 H0 Z" fill="#6E9A5E"/>
   ${[120, 300, 820, 980].map((x, i) => `<g transform="translate(${x} ${1290 + i * 15}) rotate(${Math.sin(t * 1.5 + i) * 3})"><rect x="-10" y="0" width="20" height="90" fill="#5C4030"/><circle cy="-30" r="70" fill="#4E7F45"/></g>`).join('')}
   <rect x="0" y="1500" width="1080" height="420" fill="#5E8A50"/>
   ${birds}
  `, `<linearGradient id="sky3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC3E8"/><stop offset="1" stop-color="#E4F2F8"/></linearGradient>`);
}
function marvaoSVG(t = 0) {
  let fog = '';
  for (let i = 0; i < 5; i++) { const x = ((t * (12 + i * 4) + i * 300) % 1500) - 300, y = 1180 + i * 60; fog += `<ellipse cx="${x}" cy="${y}" rx="300" ry="50" fill="#FFF3E2" opacity=".75"/>`; }
  let houses = '';
  for (let i = 0; i < 10; i++) { const x = 230 + i * 62, y = 900 - Math.sin(i * 0.5) * 40; houses += `<rect x="${x}" y="${y}" width="58" height="70" fill="#FBF7EF"/><path d="M${x - 4} ${y} l33 -26 l33 26 Z" fill="#C46A44"/><rect x="${x + 22}" y="${y + 30}" width="14" height="22" fill="#2D5B7A"/>`; }
  const flag = Math.sin(t * 6) * 8;
  return W3(`<rect width="1080" height="1920" fill="url(#gold)"/>
   <circle cx="200" cy="560" r="90" fill="#FFD27A" opacity=".85"/>
   <path d="M120 1200 L260 900 L380 860 L520 760 L700 780 L860 900 L960 1200 Z" fill="#7C7A70"/>
   <path d="M180 1200 L300 960 L460 880 L640 860 L820 960 L900 1200 Z" fill="#908C80"/>
   <path d="M210 880 h660 v26 h-660 Z" fill="#D8CDB6"/>
   ${[230, 330, 430, 530, 630, 730, 830].map(x => `<rect x="${x}" y="866" width="30" height="20" fill="#D8CDB6"/>`).join('')}
   ${houses}
   <g transform="translate(640 650)"><rect x="-70" y="0" width="140" height="160" fill="#CFC3AA"/>${[-70, -35, 0, 35].map(x => `<rect x="${x}" y="-22" width="22" height="22" fill="#CFC3AA"/>`).join('')}
     <line x1="0" y1="-22" x2="0" y2="-110" stroke="#4A3A2A" stroke-width="5"/><path d="M0 -110 q 30 ${-6 + flag} 60 0 v 36 q -30 ${6 - flag} -60 0 Z" fill="#2FA36B"/><path d="M0 -110 h22 v36 h-22 Z" fill="#C8202C"/></g>
   ${fog}
   <rect x="0" y="1300" width="1080" height="620" fill="#F6E6CC"/>
   ${fog.replace(/cy="(\d+)"/g, (m, y) => `cy="${+y + 260}"`)}
  `, `<linearGradient id="gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B26B"/><stop offset=".55" stop-color="#FAD9A6"/><stop offset="1" stop-color="#FFF1DC"/></linearGradient>`);
}
