// New backgrounds (2026-11-28 O Urso responde #9 Parte 1):
// ponteSVG: Porto iron double-deck arch bridge over the Douro at night with Christmas light garlands, monastery dome on the hill, a rabelo boat and reflections
// atelierSVG: home crafts atelier at night with a workbench, jeweller's lamp, a board of handmade monocles, a price tag, a Christmas window with falling snow
// cristalSVG: Porto crystal-palace-style gardens at night with a glowing dome pavilion, a fountain, a strutting peacock and fairy lights in trees
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function ponteSVG(t = 0) {
  const cols = ['#FFD45C', '#E2365B', '#7FE0FF', '#9CF08A'];
  let bulbs = '';
  // garland along the arch
  for (let i = 0; i <= 40; i++) {
    const u = i / 40, x = 90 + u * 900, y = 1010 - Math.sin(u * Math.PI) * 330;
    const on = (Math.floor(t * 3) + i) % 4 !== 0;
    bulbs += `<circle cx="${x}" cy="${y}" r="${on ? 9 : 5}" fill="${cols[i % 4]}" opacity="${on ? 1 : .4}"/>`;
  }
  // upper deck lights
  for (let i = 0; i < 28; i++) { const x = 60 + i * 36; const on = (Math.floor(t * 4) + i) % 3 !== 0; bulbs += `<circle cx="${x}" cy="652" r="${on ? 7 : 4}" fill="#FFE9A8" opacity="${on ? 1 : .5}"/>`; }
  let stars = ''; for (let i = 0; i < 40; i++) { const tw = .5 + .5 * Math.sin(t * 2 + i); stars += `<circle cx="${(i * 197) % 1080}" cy="${(i * 89) % 520}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${tw}"/>`; }
  let ripples = ''; for (let i = 0; i < 14; i++) { const y = 1200 + i * 22, off = Math.sin(t * 1.5 + i) * 30; ripples += `<rect x="${200 + off + (i % 3) * 120}" y="${y}" width="${140 - i * 4}" height="5" rx="2" fill="${cols[i % 4]}" opacity=".45"/>`; }
  const bx = ((t * 30) % 1400) - 200;
  const struts = Array.from({ length: 19 }, (_, i) => { const u = i / 18, x = 90 + u * 900, y = 1010 - Math.sin(u * Math.PI) * 330; return `<line x1="${x}" y1="${y}" x2="${x}" y2="660" stroke="#2A3440" stroke-width="6"/>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>${stars}
   <circle cx="880" cy="140" r="44" fill="#FFF6D8" opacity=".9"/>
   <path d="M600 760 Q 760 560 1080 600 L1080 1120 L600 1120 Z" fill="#1E2A3A"/>
   <g transform="translate(860 590)"><rect x="-90" y="0" width="180" height="70" fill="#C9C1B0"/><ellipse cx="0" cy="0" rx="80" ry="70" fill="#D8D0BE"/><rect x="-6" y="-100" width="12" height="40" fill="#C9C1B0"/>${[-60, -20, 20, 60].map(x => `<rect x="${x - 7}" y="20" width="14" height="30" fill="#FFD27A" opacity="${.7 + .3 * Math.sin(t * 3 + x)}"/>`).join('')}</g>
   <path d="M0 820 Q 200 700 420 760 L420 1120 L0 1120 Z" fill="#26303E"/>
   ${Array.from({ length: 8 }, (_, i) => `<rect x="${20 + i * 48}" y="${790 - (i % 3) * 20}" width="30" height="40" fill="#FFC86B" opacity="${.5 + .5 * Math.sin(t * 2 + i * 1.7)}"/>`).join('')}
   <rect x="0" y="640" width="1080" height="26" fill="#3A4656"/>
   <path d="M90 1010 Q 540 350 990 1010" fill="none" stroke="#3A4656" stroke-width="34"/>
   <path d="M150 1010 Q 540 430 930 1010" fill="none" stroke="#2F3A48" stroke-width="16"/>
   ${struts}${bulbs}
   <rect x="0" y="1000" width="1080" height="24" fill="#3A4656"/>
   <rect x="0" y="1024" width="1080" height="896" fill="url(#rv)"/>${ripples}
   <g transform="translate(${bx} ${1300 + Math.sin(t * 2) * 6})"><path d="M-110 0 L110 0 L80 40 L-80 40 Z" fill="#6B4A32"/><rect x="-6" y="-170" width="10" height="170" fill="#4A3424"/><path d="M4 -160 L90 -110 L90 -10 L4 -10 Z" fill="#EFE4CC"/><rect x="-70" y="-40" width="60" height="40" fill="#8A5A3A"/></g>
   <rect x="0" y="1500" width="1080" height="420" fill="#14202E"/>
   ${Array.from({ length: 12 }, (_, i) => `<circle cx="${45 + i * 90}" cy="1520" r="10" fill="${cols[i % 4]}" opacity="${.6 + .4 * Math.sin(t * 4 + i)}"/>`).join('')}
   <path d="M0 1520 ${Array.from({ length: 12 }, (_, i) => `Q ${90 + i * 90} 1560 ${90 + i * 90} 1520`).join(' ')}" fill="none" stroke="#222" stroke-width="3"/>`,
    `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1630"/><stop offset=".6" stop-color="#25305A"/><stop offset="1" stop-color="#3A2F5A"/></linearGradient>
     <linearGradient id="rv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B2A48"/><stop offset="1" stop-color="#0D1626"/></linearGradient>`);
}

function atelierSVG(t = 0) {
  let snow = ''; for (let i = 0; i < 26; i++) { const x = 640 + (i * 53) % 340 + Math.sin(t + i) * 8, y = 470 + ((t * 40 + i * 37) % 300); snow += `<circle cx="${x}" cy="${y}" r="4" fill="#fff" opacity=".9"/>`; }
  const mono = (x, y, r, c) => `<g transform="translate(${x} ${y})"><circle r="${r}" fill="#CFE8F5" opacity=".7" stroke="${c}" stroke-width="7"/><path d="M${r} 0 q 25 30 10 70" fill="none" stroke="${c}" stroke-width="3"/></g>`;
  let board = ''; const gc = ['#C9A227', '#B8B8B8', '#C77B4A', '#C9A227', '#8A6BB8', '#C9A227'];
  for (let i = 0; i < 6; i++) board += mono(130 + (i % 3) * 120, 520 + Math.floor(i / 3) * 150 + Math.sin(t * 2 + i) * 4, 34, gc[i]);
  const sw = Math.sin(t * 1.6) * 6;
  return W(`<rect width="1080" height="1920" fill="#5A3B2E"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 90}" y="0" width="88" height="1000" fill="${i % 2 ? '#62422F' : '#5A3B2E'}"/>`).join('')}
   <rect x="80" y="440" width="420" height="340" rx="14" fill="#B58A5A" stroke="#7A5434" stroke-width="12"/>${board}
   <g transform="translate(290 820) rotate(${sw})"><rect x="-90" y="0" width="180" height="70" rx="10" fill="#FFD45C"/><circle cx="-60" cy="35" r="10" fill="#7A5434"/><text x="10" y="50" font-family="Inter" font-weight="900" font-size="40" text-anchor="middle" fill="#0A1F3C">€25</text></g>
   <rect x="620" y="440" width="380" height="360" rx="10" fill="#203A5E"/><rect x="620" y="440" width="380" height="360" rx="10" fill="none" stroke="#E9DCC2" stroke-width="16"/>
   <line x1="810" y1="440" x2="810" y2="800" stroke="#E9DCC2" stroke-width="10"/>${snow}
   <path d="M620 450 ${Array.from({ length: 8 }, (_, i) => `Q ${645 + i * 47} 490 ${667 + i * 47} 450`).join(' ')}" fill="none" stroke="#2E6B3A" stroke-width="12"/>
   ${Array.from({ length: 8 }, (_, i) => `<circle cx="${650 + i * 47}" cy="478" r="8" fill="${['#E2365B', '#FFD45C', '#7FE0FF'][i % 3]}" opacity="${(Math.floor(t * 3) + i) % 2 ? 1 : .35}"/>`).join('')}
   <g transform="translate(560 120)"><rect x="-6" y="0" width="12" height="220" fill="#333"/><g transform="rotate(${Math.sin(t) * 3} 0 220)"><path d="M-90 300 L90 300 L50 220 L-50 220 Z" fill="#2F7A5A"/><ellipse cx="0" cy="300" rx="90" ry="14" fill="#FFF3B0" opacity=".9"/><path d="M-90 300 L-260 1000 L260 1000 L90 300 Z" fill="#FFF3B0" opacity=".08"/></g></g>
   <rect x="0" y="1000" width="1080" height="70" fill="#8A5A3A"/><rect x="0" y="1060" width="1080" height="860" fill="#3E2A20"/>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${i * 180}" y="1070" width="178" height="850" fill="${i % 2 ? '#43302A' : '#3E2A20'}"/>`).join('')}
   <g transform="translate(860 990)"><rect x="-60" y="-30" width="120" height="30" rx="6" fill="#6B6B6B"/><circle cx="0" cy="-40" r="${18 + Math.sin(t * 6) * 2}" fill="#B8B8B8"/></g>`);
}

function cristalSVG(t = 0) {
  let fairy = ''; for (let i = 0; i < 50; i++) { const x = (i * 131) % 1080, y = 560 + (i * 47) % 300; fairy += `<circle cx="${x}" cy="${y}" r="5" fill="#FFE9A8" opacity="${.4 + .6 * Math.abs(Math.sin(t * 2 + i))}"/>`; }
  let stars = ''; for (let i = 0; i < 30; i++) stars += `<circle cx="${(i * 211) % 1080}" cy="${(i * 67) % 420}" r="2" fill="#fff" opacity="${.5 + .5 * Math.sin(t * 3 + i)}"/>`;
  let drops = ''; for (let i = 0; i < 12; i++) { const ph = (t * 1.2 + i / 12) % 1, ang = (i / 12) * Math.PI * 2; drops += `<circle cx="${540 + Math.cos(ang) * ph * 120}" cy="${1180 - Math.sin(ph * Math.PI) * 130}" r="7" fill="#BFE8FF" opacity="${1 - ph}"/>`; }
  const px = 140 + Math.sin(t * .6) * 60, fan = 1 + .08 * Math.sin(t * 3);
  return W(`<rect width="1080" height="1920" fill="url(#csk)"/>${stars}
   <g transform="translate(540 560)"><ellipse cx="0" cy="40" rx="330" ry="250" fill="#2B3E5A"/><ellipse cx="0" cy="40" rx="330" ry="250" fill="none" stroke="#9FD3FF" stroke-width="6" opacity=".7"/>
     ${Array.from({ length: 9 }, (_, i) => `<path d="M${-330 + i * 82.5} 40 Q ${-330 + i * 82.5} -150 0 -210" fill="none" stroke="#9FD3FF" stroke-width="3" opacity=".5"/>`).join('')}
     <rect x="-360" y="40" width="720" height="140" fill="#3A4E6A"/>${Array.from({ length: 8 }, (_, i) => `<rect x="${-330 + i * 85}" y="70" width="50" height="90" rx="20" fill="#FFD27A" opacity="${.6 + .4 * Math.sin(t * 2 + i)}"/>`).join('')}</g>
   <circle cx="150" cy="700" r="150" fill="#1E4A34"/><circle cx="940" cy="690" r="170" fill="#1A4230"/>${fairy}
   <rect y="900" width="1080" height="1020" fill="#2A5A3A"/>
   <ellipse cx="540" cy="1200" rx="240" ry="56" fill="#6FA8C8"/><ellipse cx="540" cy="1200" rx="240" ry="56" fill="none" stroke="#D8CDBD" stroke-width="12"/><rect x="525" y="1060" width="30" height="130" fill="#D8CDBD"/>${drops}
   <g transform="translate(${px} 1000)"><g transform="scale(${fan})">${Array.from({ length: 9 }, (_, i) => `<path d="M0 0 L${Math.cos(Math.PI * (.15 + i * .0875)) * -150} ${-Math.sin(Math.PI * (.15 + i * .0875)) * 150}" stroke="#1F7A5A" stroke-width="22" stroke-linecap="round"/><circle cx="${Math.cos(Math.PI * (.15 + i * .0875)) * -140}" cy="${-Math.sin(Math.PI * (.15 + i * .0875)) * 140}" r="12" fill="#2BA3D6"/>`).join('')}</g>
     <ellipse cx="0" cy="10" rx="34" ry="44" fill="#1E5FB0"/><rect x="-6" y="-60" width="12" height="60" fill="#1E5FB0"/><circle cx="0" cy="-66" r="16" fill="#1E5FB0"/><path d="M14 -66 l14 4 l-14 4 Z" fill="#E8A93A"/></g>
   <rect y="1500" width="1080" height="420" fill="#C9B89A"/>${Array.from({ length: 24 }, (_, i) => `<circle cx="${(i * 137) % 1080}" cy="${1530 + (i * 71) % 380}" r="5" fill="#B3A283"/>`).join('')}`,
    `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A1530"/><stop offset="1" stop-color="#2A3A66"/></linearGradient>`);
}
