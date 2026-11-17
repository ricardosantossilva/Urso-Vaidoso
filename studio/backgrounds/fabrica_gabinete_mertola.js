// New backgrounds: fabricaSVG (shoe factory floor, São João da Madeira style, moving conveyor with shoes, ticking pair counter),
// gabineteSVG (director's office at night with a big desk, open safe, Newton's cradle and a city window),
// mertolaSVG (Mértola-style white village on a hill with castle over the Guadiana river at sunset, stork and ripples)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function fabricaSVG(t = 0) {
  const shoe = (x, y, c) => `<g transform="translate(${x} ${y})"><path d="M-50 0 L-50 -40 Q-50 -55 -35 -55 L-10 -55 Q0 -30 30 -25 Q55 -20 55 0 Z" fill="${c}"/><rect x="-52" y="0" width="110" height="10" rx="4" fill="#2A1F18"/><path d="M-30 -45 L-5 -40" stroke="#F5E6C8" stroke-width="4"/></g>`;
  const cols = ['#7A3B1E', '#1F2E44', '#A8322D', '#3E2A1E', '#C9A26B'];
  let shoes = ''; for (let i = 0; i < 7; i++) { const x = ((t * 120 + i * 190) % 1330) - 120; shoes += shoe(x, 1205, cols[i % 5]); }
  let rollers = ''; for (let x = 0; x < 1080; x += 60) rollers += `<circle cx="${x + ((t * 120) % 60)}" cy="1240" r="12" fill="#5A6470"/>`;
  const count = 1200 + Math.floor(t * 3);
  const lamp = (x) => `<g transform="translate(${x} 0)"><line x1="0" y1="0" x2="0" y2="430" stroke="#333" stroke-width="4"/><path d="M-70 470 L-30 430 L30 430 L70 470 Z" fill="#2F4F4F"/><ellipse cx="0" cy="472" rx="70" ry="10" fill="#FFF3C4"/><path d="M-70 472 L-200 1100 L200 1100 L70 472 Z" fill="#FFF3C4" opacity=".12"/></g>`;
  return W(`<rect width="1080" height="1920" fill="#D9D2C3"/>
   <rect y="0" width="1080" height="180" fill="#A9A397"/>${Array.from({ length: 6 }, (_, i) => `<path d="M${i * 180} 180 L${i * 180 + 90} 60 L${i * 180 + 180} 180 Z" fill="#BDB7AB"/><path d="M${i * 180 + 90} 60 L${i * 180 + 180} 180 L${i * 180 + 180} 60 Z" fill="#E8F3FA" opacity=".8"/>`).join('')}
   <rect y="380" width="1080" height="20" fill="#8C8578"/>
   ${[[60, 420], [400, 420], [740, 420]].map(([x, y]) => `<rect x="${x}" y="${y}" width="280" height="300" fill="#E9F4FA" stroke="#6D6A62" stroke-width="10"/><line x1="${x + 140}" y1="${y}" x2="${x + 140}" y2="${y + 300}" stroke="#6D6A62" stroke-width="6"/><line x1="${x}" y1="${y + 150}" x2="${x + 280}" y2="${y + 150}" stroke="#6D6A62" stroke-width="6"/>`).join('')}
   <g transform="translate(540 820)"><rect x="-230" y="-60" width="460" height="120" rx="14" fill="#1B2430"/><text x="0" y="-18" text-anchor="middle" font-family="Inter" font-weight="800" font-size="30" fill="#9FB3C8">PARES HOJE</text><text x="0" y="40" text-anchor="middle" font-family="Inter" font-weight="900" font-size="58" fill="#3BE37A">${count}</text></g>
   <g transform="translate(940 760)"><circle r="56" fill="#FBF5EA" stroke="#333" stroke-width="8"/><line x1="0" y1="0" x2="${Math.sin(t * 0.5) * 34}" y2="${-Math.cos(t * 0.5) * 34}" stroke="#333" stroke-width="6"/><line x1="0" y1="0" x2="${Math.sin(t * 6) * 44}" y2="${-Math.cos(t * 6) * 44}" stroke="#C8202C" stroke-width="3"/></g>
   ${lamp(200)}${lamp(880)}
   <rect y="900" width="1080" height="1020" fill="#9AA0A6"/>
   ${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${960 + i * 80}" x2="1080" y2="${960 + i * 80}" stroke="#8A9096" stroke-width="3"/>`).join('')}
   <rect x="0" y="1210" width="1080" height="40" fill="#2F3A44"/>${rollers}
   ${shoes}
   <rect x="0" y="1250" width="1080" height="30" fill="#3E4A55"/>
   ${[80, 500, 920].map(x => `<rect x="${x}" y="1280" width="30" height="200" fill="#3E4A55"/>`).join('')}
   <g transform="translate(70 1000)"><rect width="150" height="190" fill="#C9A26B"/><rect y="60" width="150" height="8" fill="#9C7A4A"/><rect y="125" width="150" height="8" fill="#9C7A4A"/></g>
   <g transform="translate(870 1020)"><rect width="140" height="170" fill="#C9A26B"/><rect y="80" width="140" height="8" fill="#9C7A4A"/></g>`);
}

function gabineteSVG(t = 0) {
  let city = ''; for (let i = 0; i < 9; i++) { const h = 160 + (i * 73) % 220, x = 100 + i * 100; city += `<rect x="${x}" y="${900 - h}" width="80" height="${h}" fill="#22324F"/>`; for (let r = 0; r < Math.floor(h / 40); r++) for (let c = 0; c < 2; c++) { const on = ((i * 7 + r * 3 + c + Math.floor(t * 1.5)) % 5) > 1; city += `<rect x="${x + 12 + c * 34}" y="${900 - h + 14 + r * 40}" width="20" height="18" fill="${on ? '#FFD87A' : '#2D3F60'}"/>`; } }
  const a = Math.sin(t * 5);
  const ball = (x, ang) => `<g transform="translate(${x} 1040) rotate(${ang})"><line x1="0" y1="0" x2="0" y2="70" stroke="#999" stroke-width="2"/><circle cy="80" r="14" fill="#C9CED6"/></g>`;
  const cradle = `<g><rect x="180" y="1030" width="170" height="8" fill="#555"/>${ball(205, a > 0 ? a * 35 : 0)}${ball(235, 0)}${ball(265, 0)}${ball(295, 0)}${ball(325, a < 0 ? a * 35 : 0)}</g>`;
  return W(`<rect width="1080" height="1920" fill="#4A2F2A"/>
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${i * 108}" y="0" width="6" height="1000" fill="#3E2622"/>`).join('')}
   <rect x="110" y="420" width="860" height="520" fill="#0E1A33" stroke="#C9A24A" stroke-width="16"/>
   <rect x="110" y="420" width="860" height="520" fill="url(#gsky)"/>
   <circle cx="${820 - t * 2}" cy="520" r="40" fill="#F4EBC8"/>
   ${city}
   <line x1="540" y1="420" x2="540" y2="940" stroke="#C9A24A" stroke-width="10"/>
   <g transform="translate(860 1000)"><rect x="-90" y="0" width="180" height="200" rx="10" fill="#3C434C"/><rect x="-78" y="12" width="156" height="176" rx="6" fill="#2C3138"/>${Array.from({ length: 4 }, (_, i) => `<rect x="${-60 + (i % 2) * 64}" y="${40 + Math.floor(i / 2) * 60}" width="54" height="40" rx="4" fill="#F2C94C"/>`).join('')}<g transform="translate(90 0) rotate(${-70 + Math.sin(t) * 3}) translate(0 0)"><rect x="0" y="0" width="160" height="200" rx="10" fill="#4A525C"/><circle cx="80" cy="100" r="34" fill="#8C96A3"/><line x1="80" y1="100" x2="${80 + Math.cos(t * 2) * 28}" y2="${100 + Math.sin(t * 2) * 28}" stroke="#222" stroke-width="6"/></g></g>
   <rect y="1200" width="1080" height="720" fill="#6B3E2E"/>
   <rect x="0" y="1100" width="1080" height="110" fill="#5A3324"/><rect x="0" y="1090" width="1080" height="20" fill="#7D4A36"/>
   ${cradle}
   <g transform="translate(480 1060)"><rect x="-40" y="0" width="80" height="34" fill="#E8E2D2"/><rect x="-40" y="-8" width="80" height="10" fill="#C8202C"/><rect x="-6" y="-8" width="12" height="42" fill="#C8202C"/></g>
   <g transform="translate(640 1040)"><rect x="-6" y="0" width="12" height="50" fill="#C9A24A"/><ellipse cx="0" cy="0" rx="50" ry="18" fill="#2F7A4B"/><ellipse cx="0" cy="50" rx="40" ry="8" fill="#C9A24A"/></g>`,
   `<linearGradient id="gsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1630"/><stop offset="1" stop-color="#2B3E6B"/></linearGradient>`);
}

function mertolaSVG(t = 0) {
  const house = (x, y, w, h, roof = true) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#FAF6EE"/><rect x="${x}" y="${y + h - 14}" width="${w}" height="14" fill="#E8B23A"/>${roof ? `<path d="M${x - 6} ${y} L${x + w / 2} ${y - 26} L${x + w + 6} ${y} Z" fill="#C46A3E"/>` : ''}<rect x="${x + w / 2 - 10}" y="${y + h - 50}" width="20" height="36" fill="#2F6FB0"/>`;
  let houses = ''; [[120, 900, 120, 90], [260, 870, 100, 110], [380, 900, 140, 80], [560, 880, 110, 100], [690, 905, 130, 80], [840, 880, 110, 100], [180, 1000, 140, 90], [340, 990, 120, 100], [480, 1010, 150, 80], [650, 1000, 130, 90], [800, 1010, 140, 80]].forEach(h => houses += house(...h));
  const sx = ((t * 60) % 1400) - 160, sy = 560 + Math.sin(t * 1.5) * 20, wing = Math.sin(t * 7) * 18;
  let rip = ''; for (let i = 0; i < 9; i++) { const y = 1260 + i * 60, off = Math.sin(t * 1.5 + i) * 30; rip += `<path d="M${120 + off} ${y} q 60 -10 120 0 M${620 - off} ${y + 20} q 60 -10 120 0" stroke="#F7C77E" stroke-width="5" fill="none" opacity=".6"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#msky)"/>
   <circle cx="830" cy="${720 + t * 1.5}" r="80" fill="#FFD27A" opacity=".95"/>
   <path d="M0 1000 Q 200 760 540 780 Q 860 790 1080 980 L1080 1220 L0 1220 Z" fill="#B99B64"/>
   <g transform="translate(560 690)"><rect x="-150" y="-10" width="300" height="120" fill="#C9B48E"/>${Array.from({ length: 7 }, (_, i) => `<rect x="${-150 + i * 46}" y="-30" width="26" height="22" fill="#C9B48E"/>`).join('')}<rect x="-40" y="-130" width="80" height="130" fill="#BCA57D"/>${Array.from({ length: 3 }, (_, i) => `<rect x="${-40 + i * 30}" y="-150" width="20" height="22" fill="#BCA57D"/>`).join('')}<rect x="-8" y="-210" width="4" height="70" fill="#444"/><path d="M-4 -210 L${40 + Math.sin(t * 3) * 6} ${-195 + Math.sin(t * 3) * 4} L-4 -180 Z" fill="#C8202C"/></g>
   <g transform="translate(300 800)"><rect x="-60" y="0" width="120" height="70" fill="#FAF6EE"/><path d="M-60 0 L0 -40 L60 0 Z" fill="#FAF6EE"/><rect x="-10" y="-80" width="20" height="40" fill="#FAF6EE"/></g>
   ${houses}
   <rect y="1150" width="1080" height="80" fill="#8E7A4E"/>
   <rect y="1220" width="1080" height="700" fill="url(#mriver)"/>${rip}
   <g transform="translate(${sx} ${sy})"><ellipse rx="34" ry="12" fill="#FFF"/><path d="M30 -4 L58 2 L30 6 Z" fill="#E0532E"/><circle cx="26" cy="-6" r="8" fill="#FFF"/><path d="M-10 0 L-60 ${-30 - wing} L-30 0 Z" fill="#222"/><path d="M-10 0 L-40 ${-20 + wing} L-20 0 Z" fill="#333"/><line x1="-20" y1="8" x2="-60" y2="20" stroke="#E0532E" stroke-width="4"/></g>`,
   `<linearGradient id="msky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5B7DB8"/><stop offset=".5" stop-color="#F2A26B"/><stop offset="1" stop-color="#FFD9A0"/></linearGradient><linearGradient id="mriver" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4E7FA8"/><stop offset="1" stop-color="#2D5576"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { fabricaSVG, gabineteSVG, mertolaSVG };
