// Backgrounds: quintalSVG (Minho farmyard at dawn with granite espigueiro and pecking hens),
// escolaSVG (old village primary school classroom with chalkboard), aroucaSVG (516-style pedestrian suspension bridge over a river gorge at sunset)
const W3 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function henSVG(x, y, s, peck, c = '#F4EDE0', flip = 1) {
  return `<g transform="translate(${x} ${y}) scale(${s * flip} ${s})">
    <path d="M-52 -18 q -28 -34 -6 -50 q 8 20 26 26 Z" fill="${c}"/>
    <ellipse cx="0" cy="-20" rx="50" ry="36" fill="${c}"/>
    <path d="M-16 -26 q 20 26 42 2 q -16 -16 -42 -2 Z" fill="#D9CDB8"/>
    <g transform="translate(36 -40) rotate(${peck})">
      <rect x="-9" y="-6" width="20" height="36" rx="9" fill="${c}"/>
      <circle cx="8" cy="30" r="18" fill="${c}"/>
      <path d="M2 14 q 4 -12 8 -2 q 4 -10 8 2 Z" fill="#D2262E"/>
      <path d="M24 28 l 16 6 l -16 6 Z" fill="#E8A93A"/>
      <circle cx="12" cy="26" r="3.4" fill="#1B2430"/>
      <path d="M20 42 q 4 12 -4 14 q -6 -6 -2 -14 Z" fill="#D2262E"/>
    </g>
    <path d="M-10 14 v 24 m -10 0 h 18 M 12 14 v 24 m -8 0 h 18" stroke="#E8A93A" stroke-width="6" fill="none" stroke-linecap="round"/>
  </g>`;
}

function quintalSVG(t = 0) {
  const peck = i => { const p = (t * 0.9 + i * 0.37) % 1; return p < 0.25 ? 62 * Math.sin(p * 4 * Math.PI) ** 2 : 0; };
  const walk = (base, range, sp) => base + Math.sin(t * sp) * range;
  const cloud = (x, y, s) => `<g transform="translate(${((x + t * 12) % 1300) - 110} ${y}) scale(${s})" fill="#FFF3E2" opacity=".9"><ellipse rx="90" ry="26"/><ellipse cx="-50" cy="12" rx="60" ry="20"/><ellipse cx="56" cy="10" rx="66" ry="22"/></g>`;
  const smoke = [0, 1, 2, 3].map(i => { const p = (t * 0.28 + i / 4) % 1; return `<circle cx="${868 + Math.sin(p * 7 + i) * 18}" cy="${596 - p * 220}" r="${12 + p * 26}" fill="#fff" opacity="${0.42 * (1 - p)}"/>`; }).join('');
  const grain = Array.from({ length: 26 }, (_, i) => `<circle cx="${(i * 149) % 1080}" cy="${1490 + (i * 83) % 400}" r="${3 + (i % 3)}" fill="#C8A765"/>`).join('');
  const vine = Array.from({ length: 11 }, (_, i) => { const sw = Math.sin(t * 1.4 + i) * 5; return `<ellipse cx="${60 + i * 100 + sw}" cy="${1000 + (i % 3) * 12}" rx="66" ry="38" fill="${['#5E8F3E', '#6FA24A', '#4F7E36'][i % 3]}"/>`; }).join('');
  return W3(`<rect width="1080" height="1920" fill="url(#qsk)"/>
    <circle cx="210" cy="520" r="88" fill="#FFE6A6"/><circle cx="210" cy="520" r="150" fill="#FFE6A6" opacity=".28"/>
    ${cloud(100, 420, 1)}${cloud(620, 500, 1.2)}${cloud(980, 390, .8)}
    <path d="M0 860 Q 180 690 420 800 T 800 760 T 1080 810 V 1100 H0 Z" fill="#7FA37A"/>
    <path d="M0 930 Q 240 810 520 900 T 1080 870 V 1100 H0 Z" fill="#5F8C58"/>
    ${smoke}
    <g transform="translate(700 640)">
      <rect x="0" y="120" width="340" height="300" fill="#A79F92"/>
      ${Array.from({ length: 6 }, (_, r) => Array.from({ length: 6 }, (_, c) => `<rect x="${c * 58 + (r % 2) * 22}" y="${126 + r * 48}" width="52" height="42" fill="#958D80"/>`).join('')).join('')}
      <path d="M-26 126 L170 10 L366 126 Z" fill="#B4552F"/>
      <rect x="150" y="-44" width="40" height="72" fill="#8E867A"/>
      <rect x="44" y="210" width="84" height="110" fill="#37506A"/><rect x="44" y="210" width="84" height="110" fill="none" stroke="#EDE6D8" stroke-width="8"/>
      <rect x="214" y="250" width="86" height="170" fill="#6B3F26"/>
    </g>
    <g transform="translate(120 700)">
      <rect x="20" y="210" width="26" height="150" fill="#9A9184"/><rect x="254" y="210" width="26" height="150" fill="#9A9184"/><rect x="137" y="210" width="26" height="150" fill="#9A9184"/>
      <rect x="-4" y="196" width="308" height="20" fill="#B5AD9F"/>
      <rect x="10" y="50" width="280" height="150" fill="#C4BBAB"/>
      ${Array.from({ length: 14 }, (_, i) => `<rect x="${22 + i * 19}" y="62" width="9" height="126" fill="#6E665A"/>`).join('')}
      <path d="M-14 56 L150 -36 L314 56 Z" fill="#A9A092"/>
      <rect x="143" y="-82" width="14" height="52" fill="#8E867A"/><rect x="128" y="-68" width="44" height="12" fill="#8E867A"/>
    </g>
    <rect y="1040" width="1080" height="40" fill="#8A6A45"/>
    ${vine}
    ${[80, 300, 520, 740, 960].map(x => `<rect x="${x}" y="1010" width="16" height="220" fill="#6E5236"/>`).join('')}
    <rect y="1190" width="1080" height="730" fill="#B59A68"/>
    <rect y="1190" width="1080" height="30" fill="#9B8154"/>
    ${grain}
    ${henSVG(walk(190, 40, .6), 1296, 1.05, peck(0))}
    ${henSVG(walk(880, 46, .5), 1330, 1.15, peck(1), '#C9823F', -1)}
    ${henSVG(walk(560, 60, .4), 1262, .8, peck(2), '#8C5A34')}`,
    `<linearGradient id="qsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B98A"/><stop offset=".55" stop-color="#FBDDB0"/><stop offset="1" stop-color="#FDF0D4"/></linearGradient>`);
}

function escolaSVG(t = 0) {
  const beam = .16 + Math.sin(t * .8) * .04;
  const dust = Array.from({ length: 14 }, (_, i) => { const p = (t * .05 + i * .071) % 1; return `<circle cx="${150 + (i * 67) % 340 + Math.sin(t + i) * 12}" cy="${1220 - p * 760}" r="${2 + i % 3}" fill="#FFF6D8" opacity="${.5 * (1 - p)}"/>`; }).join('');
  const sw = Math.sin(t * 1.6) * 8;
  const desk = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-120" y="0" width="240" height="26" rx="4" fill="#8A5A34"/><rect x="-108" y="26" width="216" height="62" fill="#6F4526"/><rect x="-108" y="88" width="16" height="110" fill="#3B3B3B"/><rect x="92" y="88" width="16" height="110" fill="#3B3B3B"/><circle cx="74" cy="12" r="10" fill="#22303E"/></g>`;
  const abacus = [0, 1, 2, 3, 4].map(r => { const off = (Math.sin(t * .7 + r) + 1) * 28; return `<rect x="10" y="${16 + r * 26}" width="180" height="4" fill="#6B4A32"/>${[0, 1, 2, 3].map(k => `<circle cx="${28 + k * 22 + off}" cy="${18 + r * 26}" r="10" fill="${['#D2262E', '#F3C23C', '#2E6DB4', '#3FA45B', '#E0702E'][r]}"/>`).join('')}`; }).join('');
  return W3(`<rect width="1080" height="1920" fill="#E8DFC8"/>
    <rect y="0" width="1080" height="150" fill="#D8CDB2"/>
    <rect y="1000" width="1080" height="210" fill="#7FA08A"/><rect y="994" width="1080" height="12" fill="#5C7A66"/>
    <g transform="translate(40 430)">
      <rect width="330" height="430" fill="#F6EFD9" stroke="#6B4A32" stroke-width="16"/>
      <path d="M165 0 V430 M0 215 H330" stroke="#6B4A32" stroke-width="9"/>
      <rect x="10" y="10" width="146" height="196" fill="#BFE2F2"/><rect x="172" y="10" width="146" height="196" fill="#BFE2F2"/>
      <path d="M10 170 Q 60 130 156 160 V206 H10 Z" fill="#7FA37A"/><path d="M172 150 Q 240 120 318 160 V206 H172 Z" fill="#6E9568"/>
    </g>
    <path d="M60 860 L340 860 L620 1500 L150 1500 Z" fill="#FFF3C8" opacity="${beam}"/>
    ${dust}
    <g transform="translate(410 440)">
      <rect x="-14" y="-14" width="650" height="400" rx="8" fill="#7A5230"/>
      <rect width="622" height="372" fill="#27503F"/>
      <rect x="0" y="372" width="622" height="16" fill="#6A4628"/>
      <text x="311" y="74" text-anchor="middle" font-family="Lora, serif" font-size="46" fill="#F2EFE2" font-style="italic">Lição de hoje</text>
      <path d="M90 100 H532" stroke="#F2EFE2" stroke-width="3" opacity=".7"/>
      <text x="70" y="178" font-family="Lora, serif" font-size="42" fill="#F2EFE2" opacity=".82">2 + 2 = 4</text>
      <text x="70" y="248" font-family="Lora, serif" font-size="42" fill="#F2EFE2" opacity=".82">a, e, i, o, u</text>
      <ellipse cx="456" cy="214" rx="56" ry="72" fill="none" stroke="#F2EFE2" stroke-width="6" opacity=".85"/>
      <rect x="520" y="362" width="60" height="12" rx="3" fill="#F7F4EA"/>
    </g>
    <g transform="translate(${848 + sw * .3} 880)"><rect x="-4" y="-30" width="8" height="30" fill="#6B4A32"/><g transform="translate(-100 0)"><rect width="200" height="150" fill="none" stroke="#6B4A32" stroke-width="12"/>${abacus}</g></g>
    <circle cx="540" cy="104" r="62" fill="#FAF6E8" stroke="#6B4A32" stroke-width="10"/>
    <path d="M540 104 L540 60" stroke="#1B2430" stroke-width="7" stroke-linecap="round"/>
    <path d="M540 104 L${540 + Math.sin(t * .9) * 40} ${104 - Math.cos(t * .9) * 40}" stroke="#C8202C" stroke-width="4" stroke-linecap="round"/>
    <rect y="1210" width="1080" height="710" fill="#A9794A"/>
    ${Array.from({ length: 9 }, (_, i) => `<path d="M${i * 135 - 60} 1210 L${i * 190 - 340} 1920" stroke="#8C6238" stroke-width="5"/>`).join('')}
    ${[1300, 1440, 1600, 1770].map(y => `<rect y="${y}" width="1080" height="4" fill="#8C6238"/>`).join('')}
    ${desk(210, 1290, .9)}${desk(850, 1290, .9)}${desk(530, 1250, .72)}`);
}

function aroucaSVG(t = 0) {
  const deck = x => 860 + 74 * (1 - Math.pow((x - 540) / 620, 2)) + Math.sin(t * 1.2) * 4;
  const mainCable = x => 650 + 210 * (1 - Math.pow((x - 540) / 620, 2)) + Math.sin(t * 1.2) * 4;
  const hangers = Array.from({ length: 25 }, (_, i) => { const x = 20 + i * 43.3; return `<line x1="${x}" y1="${mainCable(x)}" x2="${x}" y2="${deck(x)}" stroke="#2C2C34" stroke-width="3"/>`; }).join('');
  let cableD = '', deckD = '';
  for (let x = -80; x <= 1160; x += 30) { cableD += `${cableD ? 'L' : 'M'}${x} ${mainCable(x)} `; deckD += `${deckD ? 'L' : 'M'}${x} ${deck(x)} `; }
  const walkers = [0, 1, 2].map(i => { const x = ((t * 26 + i * 340) % 1080); return `<g transform="translate(${x} ${deck(x) - 8})" fill="#20202A"><circle cy="-40" r="9"/><rect x="-7" y="-32" width="14" height="30" rx="5"/></g>`; }).join('');
  const river = Array.from({ length: 14 }, (_, i) => { const y = 1190 + i * 18; return `<path d="M${-60 + Math.sin(t * 1.6 + i) * 30} ${y} q 120 ${10 + i % 3 * 4} 240 0 t 240 0 t 240 0 t 240 0 t 240 0" stroke="#EAF4F2" stroke-width="3" fill="none" opacity="${.18 + (i % 4) * .08}"/>`; }).join('');
  const mist = [0, 1, 2].map(i => `<ellipse cx="${((t * 18 + i * 420) % 1400) - 160}" cy="${1120 + i * 22}" rx="300" ry="30" fill="#FFF" opacity=".24"/>`).join('');
  const birds = [0, 1, 2].map(i => { const x = ((t * 44 + i * 300) % 1240) - 80; const f = Math.sin(t * 9 + i) * 9; return `<path d="M${x - 16} ${420 + i * 46 + f} Q ${x} ${412 + i * 46} ${x} ${422 + i * 46} Q ${x} ${412 + i * 46} ${x + 16} ${420 + i * 46 + f}" stroke="#3A2A3A" stroke-width="4" fill="none"/>`; }).join('');
  return W3(`<rect width="1080" height="1920" fill="url(#ask)"/>
    <circle cx="760" cy="560" r="96" fill="#FFE2A0"/><circle cx="760" cy="560" r="180" fill="#FFD27E" opacity=".3"/>
    ${birds}
    <path d="M0 700 L150 560 L300 690 L470 590 L640 720 L820 600 L1080 730 V1300 H0 Z" fill="#8A6A8E"/>
    <path d="M0 820 L120 700 L260 860 L420 1180 H0 Z" fill="#5E5570"/>
    <path d="M1080 800 L950 690 L800 880 L640 1180 H1080 Z" fill="#544C66"/>
    <path d="M0 960 L180 880 L330 1010 L470 1200 H0 Z" fill="#3F5F48"/>
    <path d="M1080 950 L900 880 L760 1020 L610 1200 H1080 Z" fill="#37563F"/>
    ${[40, 110, 190, 260].map((x, i) => `<path d="M${x} ${905 + i * 16} l 24 ${-70 - i * 6} l 24 ${70 + i * 6} Z" fill="#2F4B37"/>`).join('')}
    ${[820, 900, 970, 1040].map((x, i) => `<path d="M${x} ${960 - i * 18} l 24 ${-74} l 24 74 Z" fill="#2B4632"/>`).join('')}
    <rect y="1180" width="1080" height="260" fill="url(#ariv)"/>
    ${river}${mist}
    <g fill="#34343E"><rect x="-18" y="640" width="54" height="290"/><rect x="1044" y="640" width="54" height="290"/></g>
    <path d="${cableD}" stroke="#23232B" stroke-width="10" fill="none"/>
    ${hangers}
    <path d="${deckD}" stroke="#3A2C22" stroke-width="20" fill="none"/>
    <path d="${deckD}" stroke="#B98A52" stroke-width="7" fill="none"/>
    ${walkers}
    <path d="M0 1400 Q 300 1340 620 1400 T 1080 1380 V1920 H0 Z" fill="#6E7F4C"/>
    <rect y="1500" width="1080" height="420" fill="#8E8466"/>
    ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 96 - 20}" y="1500" width="86" height="420" fill="${i % 2 ? '#A0764B' : '#94693F'}"/><rect x="${i * 96 - 20}" y="1500" width="4" height="420" fill="#6C4A2B"/>`).join('')}
    <rect y="1490" width="1080" height="16" fill="#5B3F27"/>`,
    `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A3F78"/><stop offset=".42" stop-color="#C4708C"/><stop offset=".72" stop-color="#F7B27A"/></linearGradient>
     <linearGradient id="ariv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6CA7A8"/><stop offset="1" stop-color="#2F6A70"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { quintalSVG, escolaSVG, aroucaSVG };
