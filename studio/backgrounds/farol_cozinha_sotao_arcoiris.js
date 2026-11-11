// Storm Charles backgrounds: farolSVG (stormy headland with lighthouse and giant waves), cozinhaSVG (kitchen with rain-lashed window and bending trees),
// sotaoSVG (attic studio with leaking skylight and bucket), arcoirisSVG (calm beach after the storm with rainbow and lifeguard tower)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
const rain = (t, n = 70, c = '#CFE3F2', o = .55, ang = 18, y0 = 0, y1 = 1920) => { let r = ''; for (let i = 0; i < n; i++) { const x = ((i * 97) % 1180) - 50, sp = 900 + (i % 5) * 120, y = y0 + ((t * sp + i * 173) % (y1 - y0)); r += `<line x1="${x + (y - y0) * Math.tan(ang * Math.PI / 180) * .3}" y1="${y}" x2="${x + (y - y0) * Math.tan(ang * Math.PI / 180) * .3 - 14}" y2="${y + 46}" stroke="${c}" stroke-width="4" stroke-linecap="round" opacity="${o}"/>`; } return r; };
function farolSVG(t = 0) {
  const flash = (t % 4.3) < 0.12 ? 1 : 0;
  let waves = '';
  for (let k = 0; k < 4; k++) { const y = 1000 + k * 90, ph = t * (1.6 + k * .3) + k; let d = `M-40 ${y}`; for (let x = -40; x <= 1120; x += 40) d += ` L${x} ${y + Math.sin(x / 90 + ph) * (34 - k * 5)}`; d += ' L1120 1920 L-40 1920 Z'; waves += `<path d="${d}" fill="${['#2C4A63', '#33587A', '#3D6A8E', '#4A7BA0'][k]}"/>`; }
  const big = 1 + Math.sin(t * 1.3) * .5; // giant breaking wave against the rock
  return W(`<rect width="1080" height="1920" fill="url(#fsk)"/>
   ${[0, 1, 2, 3].map(i => `<ellipse cx="${(i * 330 + t * 30) % 1400 - 160}" cy="${150 + (i % 2) * 120}" rx="260" ry="80" fill="#3B4656" opacity=".85"/>`).join('')}
   ${flash ? `<path d="M760 60 L700 300 L760 300 L690 560" stroke="#FFF6B0" stroke-width="12" fill="none"/><rect width="1080" height="1920" fill="#fff" opacity=".18"/>` : ''}
   <path d="M620 1000 C 640 860, 700 800, 760 780 L1080 760 L1080 1100 Z" fill="#2B2B30"/>
   <g transform="translate(860 520)"><rect x="-40" y="0" width="80" height="260" fill="#F4F1EA"/>${[40, 120, 200].map(y => `<rect x="-40" y="${y}" width="80" height="30" fill="#C8202C"/>`).join('')}<rect x="-55" y="-60" width="110" height="60" rx="8" fill="#2B2B30"/><rect x="-35" y="-50" width="70" height="40" fill="#FFE27A"/><path d="M-60 -60 L0 -110 L60 -60 Z" fill="#C8202C"/>
     <path d="M0 -30 L${-700} ${-120 + Math.sin(t) * 40} L${-700} ${60 + Math.sin(t) * 40} Z" fill="#FFF3B0" opacity=".22"/></g>
   <path d="M560 1000 C 600 ${800 - big * 140}, 720 ${720 - big * 180}, 820 ${760 - big * 120} C 760 ${820 - big * 60}, 700 900, 700 1000 Z" fill="#EAF4FA" opacity=".9"/>
   ${waves}
   ${Array.from({ length: 14 }, (_, i) => `<circle cx="${(i * 83 + t * 60) % 1080}" cy="${1000 + Math.sin(t * 3 + i) * 20}" r="${10 + (i % 3) * 6}" fill="#fff" opacity=".7"/>`).join('')}
   <rect y="1330" width="1080" height="590" fill="#6E6A62"/><rect y="1330" width="1080" height="26" fill="#8C877E"/>
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${i * 110}" y="1290" width="16" height="70" fill="#3A3A3A"/>`).join('')}<rect y="1290" width="1080" height="12" fill="#3A3A3A"/>
   ${rain(t, 80, '#D8E8F5', .5, 22)}`,
    `<linearGradient id="fsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E2633"/><stop offset=".7" stop-color="#4C5A6B"/><stop offset="1" stop-color="#7C8794"/></linearGradient>`);
}
function cozinhaSVG(t = 0) {
  const bend = Math.sin(t * 2.2) * 14 + 18;
  const tree = (x, s) => `<g transform="translate(${x} 900) scale(${s}) skewX(${-bend})"><rect x="-10" y="-200" width="20" height="200" fill="#4A3424"/><ellipse cx="0" cy="-230" rx="90" ry="70" fill="#3E6B45"/></g>`;
  return W(`<rect width="1080" height="1920" fill="#F2E3C9"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="0" y="${i * 80}" width="1080" height="2" fill="#E5D2B2"/>`).join('')}
   <rect x="160" y="420" width="760" height="560" rx="10" fill="#FFFFFF"/>
   <svg x="185" y="445" width="710" height="510" viewBox="0 0 710 510"><rect width="710" height="510" fill="#5E6D80"/><rect y="380" width="710" height="130" fill="#4C5E4A"/>
     ${[120, 360, 600].map((x, i) => tree(x, 1 + i * .1).replace('translate(' + x + ' 900)', 'translate(' + x + ' 420)')).join('')}
     ${rain(t, 40, '#E6F0F8', .6, 30, 0, 510)}
     ${Array.from({ length: 6 }, (_, i) => `<ellipse cx="${(i * 140 + t * 700) % 900 - 60}" cy="${100 + i * 50}" rx="16" ry="8" fill="#6F9A4E" transform="rotate(${t * 300 + i * 50} ${(i * 140 + t * 700) % 900 - 60} ${100 + i * 50})"/>`).join('')}</svg>
   <rect x="530" y="420" width="20" height="560" fill="#FFFFFF"/><rect x="160" y="690" width="760" height="20" fill="#FFFFFF"/>
   ${Array.from({ length: 8 }, (_, i) => { const y = 470 + ((t * 120 + i * 70) % 480); return `<path d="M${200 + i * 85} ${y} q 4 14 0 22" stroke="#BFD6E8" stroke-width="6" fill="none" opacity=".8"/>`; }).join('')}
   <rect x="120" y="980" width="840" height="30" rx="6" fill="#B98A5E"/>
   <g transform="translate(250 930)"><rect x="-40" y="0" width="80" height="50" rx="8" fill="#C8202C"/><rect x="-14" y="-20" width="28" height="20" fill="#2B2B2B"/>${Array.from({ length: 3 }, (_, i) => `<path d="M${-10 + i * 12} ${-30 - ((t * 40 + i * 15) % 60)} q 8 -12 0 -24" stroke="#fff" stroke-width="5" fill="none" opacity="${.7 - ((t * 40 + i * 15) % 60) / 90}"/>`).join('')}</g>
   <g transform="translate(800 930)"><rect x="-30" y="0" width="60" height="50" rx="6" fill="#2E6DB4"/><path d="M30 10 q 26 8 0 30" stroke="#2E6DB4" stroke-width="8" fill="none"/></g>
   <rect y="1010" width="1080" height="910" fill="#E8D7B8"/>
   ${Array.from({ length: 6 }, (_, r) => Array.from({ length: 6 }, (_, c) => `<rect x="${c * 180 + (r % 2) * 90 - 90}" y="${1300 + r * 110}" width="176" height="106" fill="${(r + c) % 2 ? '#D9C49E' : '#E9DDC4'}"/>`).join('')).join('')}`);
}
function sotaoSVG(t = 0) {
  const drop = (t * 1.6) % 1;
  return W(`<rect width="1080" height="1920" fill="#E9D8BC"/>
   <path d="M0 0 L540 0 L0 700 Z" fill="#CDB591"/><path d="M1080 0 L540 0 L1080 700 Z" fill="#CDB591"/>
   ${Array.from({ length: 7 }, (_, i) => `<line x1="${i * 90}" y1="0" x2="0" y2="${700 - i * 116}" stroke="#B89B72" stroke-width="10"/><line x1="${1080 - i * 90}" y1="0" x2="1080" y2="${700 - i * 116}" stroke="#B89B72" stroke-width="10"/>`).join('')}
   <g transform="translate(540 230)"><rect x="-150" y="-110" width="300" height="220" rx="10" fill="#7C6A54"/><rect x="-134" y="-94" width="268" height="188" fill="#566578"/>${rain(t, 20, '#E6F0F8', .7, 10, 0, 188).replace(/<line /g, '<line transform="translate(-134 -94)" ')}<line x1="0" y1="-94" x2="0" y2="94" stroke="#7C6A54" stroke-width="10"/></g>
   <circle cx="560" cy="${360 + drop * 760}" r="11" fill="#7FB6E0"/><circle cx="545" cy="${360 + ((drop + .5) % 1) * 760}" r="9" fill="#7FB6E0"/>
   <rect y="1150" width="1080" height="770" fill="#A9825B"/>${Array.from({ length: 9 }, (_, i) => `<rect x="0" y="${1150 + i * 86}" width="1080" height="4" fill="#8F6C49"/>`).join('')}
   <g transform="translate(560 1140)"><path d="M-70 -90 L70 -90 L55 0 L-55 0 Z" fill="#9AA5B1"/><ellipse cx="0" cy="-90" rx="70" ry="14" fill="#BAC4CE"/><ellipse cx="0" cy="-86" rx="58" ry="9" fill="#7FB6E0"/>${drop > .9 ? `<ellipse cx="0" cy="-92" rx="${20 + (drop - .9) * 300}" ry="${5 + (drop - .9) * 60}" fill="none" stroke="#CFE6F7" stroke-width="4"/>` : ''}</g>
   <g transform="translate(860 980)"><rect x="-150" y="0" width="300" height="20" fill="#6B4A32"/><rect x="-140" y="20" width="16" height="150" fill="#6B4A32"/><rect x="124" y="20" width="16" height="150" fill="#6B4A32"/>
     <rect x="-90" y="-110" width="170" height="110" rx="8" fill="#2B2B30"/><rect x="-80" y="-100" width="150" height="88" fill="#DDEBF7"/><rect x="-70" y="-90" width="90" height="10" fill="#9FB3C8"/><rect x="-70" y="-72" width="60" height="10" fill="#9FB3C8"/><text x="-5" y="-26" text-anchor="middle" font-family="Inter" font-weight="900" font-size="26" fill="#C8202C">€0,00</text>
     <rect x="-110" y="0" width="210" height="10" fill="#3A3A40"/></g>
   <g transform="translate(150 1080)"><rect x="-40" y="0" width="80" height="70" rx="8" fill="#B65A3A"/>${[-40, 0, 40].map((a, i) => `<ellipse cx="${Math.sin(t * 2 + i) * 4}" cy="-50" rx="22" ry="60" fill="#4E9A4B" transform="rotate(${a})"/>`).join('')}</g>`);
}
function arcoirisSVG(t = 0) {
  const arc = (r, c) => `<path d="M${540 - r} 1000 A ${r} ${r} 0 0 1 ${540 + r} 1000" stroke="${c}" stroke-width="34" fill="none" opacity=".75"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#ask)"/>
   <circle cx="900" cy="230" r="90" fill="#FFE27A"/><circle cx="900" cy="230" r="150" fill="#FFE27A" opacity=".2"/>
   ${['#E2365B', '#F29A3B', '#FFD45C', '#5DB868', '#4C8FD6', '#7A5BC9'].map((c, i) => arc(560 - i * 34, c)).join('')}
   ${[0, 1].map(i => `<ellipse cx="${(i * 600 + t * 25) % 1400 - 200}" cy="${170 + i * 90}" rx="150" ry="46" fill="#fff" opacity=".9"/>`).join('')}
   <rect y="990" width="1080" height="160" fill="#4FA3D1"/>${Array.from({ length: 10 }, (_, i) => `<path d="M${(i * 120 + t * 30) % 1200 - 60} ${1010 + (i % 3) * 40} q 30 -14 60 0" stroke="#fff" stroke-width="5" fill="none" opacity=".7"/>`).join('')}
   <path d="M0 1150 Q 540 1110 1080 1150 L1080 1920 L0 1920 Z" fill="#F2D9A6"/>
   <g transform="translate(150 1180)"><rect x="-70" y="-140" width="140" height="90" rx="6" fill="#C8202C"/><path d="M-90 -140 L0 -190 L90 -140 Z" fill="#F4F1EA"/>${[-50, 50].map(x => `<line x1="${x}" y1="-50" x2="${x * 1.4}" y2="120" stroke="#6B4A32" stroke-width="12"/>`).join('')}<line x1="-60" y1="30" x2="60" y2="30" stroke="#6B4A32" stroke-width="10"/><rect x="60" y="-260" width="6" height="120" fill="#2B2B2B"/><path d="M66 -260 L${130 + Math.sin(t * 3) * 6} -240 L66 -220 Z" fill="#2FA36B"/></g>
   ${Array.from({ length: 5 }, (_, i) => `<ellipse cx="${200 + i * 190}" cy="${1500 + (i % 2) * 120}" rx="22" ry="12" fill="#E8C98F"/>`).join('')}
   ${[0, 1].map(i => { const x = (t * 60 + i * 500) % 1300 - 100; return `<path d="M${x} ${360 + i * 60} q 18 -16 36 0 q 18 -16 36 0" stroke="#2B2B30" stroke-width="5" fill="none"/>`; }).join('')}`,
    `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8CCBF0"/><stop offset="1" stop-color="#E4F4FF"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { farolSVG, cozinhaSVG, sotaoSVG, arcoirisSVG };
