// New backgrounds: quartoSVG (grandmother's bedroom with iron bed and lumpy mattress), moedaSVG (old mint workshop with coin press), santanaSVG (Santana, Madeira, triangular thatched houses)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function quartoSVG(t = 0) {
  const sway = Math.sin(t * 1.4) * 14;
  const mothX = 760 + Math.sin(t * 2.3) * 120, mothY = 560 + Math.cos(t * 3.1) * 70, fl = Math.abs(Math.sin(t * 22));
  const paper = Array.from({ length: 9 }, (_, r) => Array.from({ length: 8 }, (_, c) => `<g transform="translate(${c * 150 + (r % 2) * 75} ${r * 140 + 40})" fill="#C9A77E" opacity=".55"><circle r="10"/><circle cx="-16" r="6"/><circle cx="16" r="6"/><circle cy="-16" r="6"/><circle cy="16" r="6"/></g>`).join('')).join('');
  return W(`<rect width="1080" height="1920" fill="#E9D6B4"/>${paper}
   <rect y="1180" width="1080" height="16" fill="#8A6242"/>
   <g transform="translate(90 440)"><rect x="-14" y="-14" width="348" height="448" fill="#6B4A32"/><rect width="320" height="420" fill="url(#qn)"/><circle cx="240" cy="90" r="34" fill="#F5F0DC"/>
     ${[0, 1, 2, 3, 4].map(i => `<circle cx="${30 + i * 62}" cy="${40 + (i * 53) % 130}" r="4" fill="#fff" opacity="${.5 + .5 * Math.sin(t * 3 + i)}"/>`).join('')}
     <rect x="154" width="12" height="420" fill="#6B4A32"/><rect y="200" width="320" height="12" fill="#6B4A32"/></g>
   <path d="M70 420 Q ${130 + sway} 660 ${90 + sway} 900 L40 900 L40 420 Z" fill="#B5473C"/><path d="M430 420 Q ${370 + sway} 660 ${410 + sway} 900 L460 900 L460 420 Z" fill="#B5473C"/>
   <rect x="40" y="404" width="420" height="20" rx="8" fill="#6B4A32"/>
   <g transform="translate(640 560)"><rect x="-120" y="-150" width="240" height="300" rx="10" fill="#7A5638"/><rect x="-100" y="-130" width="200" height="260" rx="6" fill="#DCE9EC"/><ellipse cx="-20" cy="-30" rx="46" ry="60" fill="#fff" opacity=".5"/></g>
   <g transform="translate(${mothX} ${mothY})"><ellipse rx="6" ry="14" fill="#5A4632"/><path d="M0 -4 Q ${-34 * fl - 6} -24 ${-30 * fl - 4} 6 Z" fill="#8C745A"/><path d="M0 -4 Q ${34 * fl + 6} -24 ${30 * fl + 4} 6 Z" fill="#8C745A"/></g>
   <g transform="translate(540 1040)"><path d="M-480 140 L-480 -60 M480 140 L480 -60" stroke="#3A3A42" stroke-width="20"/><path d="M-480 -60 Q 0 -140 480 -60" stroke="#3A3A42" stroke-width="14" fill="none"/>
     ${[-360, -240, -120, 0, 120, 240, 360].map(x => `<line x1="${x}" y1="${-88 + Math.abs(x) * .06}" x2="${x}" y2="60" stroke="#3A3A42" stroke-width="8"/>`).join('')}
     <rect x="-470" y="50" width="940" height="110" rx="46" fill="#F2E7D0"/>${[-340, -170, 0, 170, 340].map(x => `<circle cx="${x}" cy="105" r="12" fill="#C7B592"/>`).join('')}
     <rect x="-470" y="96" width="940" height="10" fill="#7FA6C9" opacity=".6"/></g>
   <rect y="1200" width="1080" height="720" fill="#A87B52"/>${Array.from({ length: 8 }, (_, i) => `<rect y="${1240 + i * 90}" width="1080" height="5" fill="#8A6242"/>`).join('')}
   <ellipse cx="540" cy="1640" rx="470" ry="140" fill="#9D3C3C"/><ellipse cx="540" cy="1640" rx="400" ry="108" fill="none" stroke="#E7C985" stroke-width="8"/>`,
   `<linearGradient id="qn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D2B58"/><stop offset="1" stop-color="#5A5C94"/></linearGradient>`);
}
function moedaSVG(t = 0) {
  const p = (Math.sin(t * 3.4) + 1) / 2, ram = 500 + p * 190;
  const gear = (x, y, r, dir) => `<g transform="translate(${x} ${y}) rotate(${t * 50 * dir})"><circle r="${r}" fill="#8C7A5C"/>${Array.from({ length: 10 }, (_, i) => `<rect x="-12" y="${-r - 22}" width="24" height="34" fill="#8C7A5C" transform="rotate(${i * 36})"/>`).join('')}<circle r="${r * .35}" fill="#3A3226"/></g>`;
  const coins = Array.from({ length: 11 }, (_, i) => { const x = ((t * 90 + i * 118) % 1300) - 110; return `<g transform="translate(${x} 1110)"><ellipse rx="42" ry="16" fill="#B8862A"/><ellipse cy="-8" rx="42" ry="16" fill="#F2C94C"/><ellipse cy="-8" rx="26" ry="9" fill="none" stroke="#B8862A" stroke-width="4"/></g>`; }).join('');
  const dust = Array.from({ length: 14 }, (_, i) => `<circle cx="${(i * 89 + t * 14) % 1080}" cy="${480 + (i * 67 + Math.sin(t + i) * 26) % 560}" r="4" fill="#FFE9A8" opacity=".5"/>`).join('');
  return W(`<rect width="1080" height="1920" fill="#3F352B"/>
   ${Array.from({ length: 10 }, (_, r) => Array.from({ length: 8 }, (_, c) => `<rect x="${c * 150 + (r % 2) * 75 - 60}" y="${r * 86 + 10}" width="140" height="76" fill="#6E4A36" stroke="#4C3528" stroke-width="5"/>`).join('')).join('')}
   ${[150, 930].map(x => `<g transform="translate(${x} 470)"><path d="M-95 120 L-95 -60 A95 95 0 0 1 95 -60 L95 120 Z" fill="#F2D58C"/><path d="M0 -150 L0 120 M-95 -20 L95 -20 M-95 60 L95 60" stroke="#4C3528" stroke-width="9"/></g>`).join('')}
   ${gear(205, 840, 92, 1)}${gear(345, 770, 62, -1)}${gear(880, 830, 100, -1)}
   <g><rect x="380" y="430" width="44" height="620" fill="#2F2A26"/><rect x="656" y="430" width="44" height="620" fill="#2F2A26"/><rect x="350" y="400" width="380" height="74" rx="10" fill="#47403A"/>
     <rect x="520" y="474" width="40" height="${ram - 474}" fill="#B9BEC4"/><rect x="460" y="${ram}" width="160" height="66" rx="8" fill="#6B7076"/><rect x="430" y="1000" width="220" height="50" fill="#47403A"/>
     ${p > .86 ? `<g fill="#FFD45C">${[-120, -70, 70, 120].map(x => `<path d="M${540 + x} 990 l14 -34 l14 34 Z"/>`).join('')}</g>` : ''}</g>
   <rect y="1070" width="1080" height="60" fill="#23201D"/>${coins}<rect y="1130" width="1080" height="40" fill="#5A5048"/>
   ${dust}
   <rect y="1170" width="1080" height="750" fill="#7E7264"/>${Array.from({ length: 7 }, (_, r) => Array.from({ length: 6 }, (_, c) => `<rect x="${c * 190 + (r % 2) * 95 - 70}" y="${1180 + r * 110}" width="186" height="106" fill="#8C8072" stroke="#6B6054" stroke-width="4"/>`).join('')).join('')}`);
}
function santanaSVG(t = 0) {
  const cloud = (i) => { const x = ((t * 22 + i * 390) % 1400) - 220, y = 150 + i * 92; return `<g fill="#fff" opacity=".85" transform="translate(${x} ${y})"><ellipse rx="120" ry="42"/><ellipse cx="-80" cy="14" rx="74" ry="30"/><ellipse cx="86" cy="12" rx="80" ry="32"/></g>`; };
  const hut = (x, y, s, door) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-170 220 L0 -170 L170 220 Z" fill="#7A5A32"/>${Array.from({ length: 8 }, (_, i) => `<path d="M${-22 - i * 19} ${-100 + i * 42} L${22 + i * 19} ${-100 + i * 42}" stroke="#5F4524" stroke-width="7"/>`).join('')}
     <path d="M-112 220 L0 -30 L112 220 Z" fill="#F5F1E4"/><path d="M-112 220 L0 -30 L112 220" fill="none" stroke="#C8202C" stroke-width="14"/><path d="M-76 220 L0 50 L76 220" fill="none" stroke="#2E6DB4" stroke-width="12"/>
     <rect x="-30" y="118" width="60" height="102" fill="${door}"/><circle cx="16" cy="172" r="5" fill="#FFD45C"/><rect x="-14" y="60" width="28" height="30" fill="#2E6DB4"/></g>`;
  const fl = (x, y, c, i) => { const b = Math.sin(t * 2 + i) * 6; return `<g transform="translate(${x + b} ${y})"><rect x="-3" y="0" width="6" height="52" fill="#2F7A3B" transform="rotate(${b})"/><circle cy="-8" r="26" fill="${c}"/><circle cx="-18" cy="6" r="18" fill="${c}"/><circle cx="18" cy="6" r="18" fill="${c}"/></g>`; };
  return W(`<rect width="1080" height="1920" fill="url(#ssk)"/>
   <path d="M0 640 L170 330 L340 560 L560 250 L800 540 L950 380 L1080 520 L1080 1000 L0 1000 Z" fill="#3E7D5A"/>
   <path d="M0 760 L240 520 L470 720 L700 480 L1080 760 L1080 1100 L0 1100 Z" fill="#4F9B66"/>
   ${[0, 1, 2].map(cloud).join('')}
   <path d="M0 900 Q 300 780 620 880 T 1080 840 L1080 1300 L0 1300 Z" fill="#6CB86F"/>
   ${Array.from({ length: 6 }, (_, i) => `<path d="M0 ${930 + i * 46} Q 400 ${850 + i * 46} 1080 ${920 + i * 46}" stroke="#57A25E" stroke-width="7" fill="none"/>`).join('')}
   ${hut(240, 800, .92, '#C8202C')}${hut(800, 780, 1.02, '#2E6DB4')}${hut(520, 880, .72, '#2F7A3B')}
   <rect y="1160" width="1080" height="760" fill="#5FA862"/>
   <path d="M420 1160 Q 560 1500 360 1920 L760 1920 Q 690 1500 620 1160 Z" fill="#CDBFA4"/>
   ${[[70, 1190, '#7FA8E8'], [170, 1250, '#E58FB8'], [950, 1200, '#7FA8E8'], [860, 1260, '#E58FB8'], [1010, 1290, '#F3C969'], [60, 1320, '#F3C969']].map((f, i) => fl(f[0], f[1], f[2], i)).join('')}`,
   `<linearGradient id="ssk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FB7E6"/><stop offset="1" stop-color="#DDF1F7"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { quartoSVG, moedaSVG, santanaSVG };
