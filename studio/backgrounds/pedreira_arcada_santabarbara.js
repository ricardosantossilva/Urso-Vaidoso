// pedreiraSVG: Braga quarry stadium at night (stands on two sides, granite rock face behind the goal, floodlights, flag waving)
// arcadaSVG: Braga Arcada square at dusk with arched arcade, café tables, fountain spraying and pigeons
// barbaraSVG: medieval palace garden (Santa Bárbara style) with clipped flower beds, gothic arcade wall and drifting petals
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function pedreiraSVG(t = 0) {
  let crowdL = '', crowdR = '';
  for (let r = 0; r < 9; r++) for (let i = 0; i < 9; i++) {
    const c = ['#C8202C', '#1E7A3C', '#F2F2F2', '#FFD45C'][(r * 7 + i * 3) % 4];
    const bob = Math.sin(t * 6 + i + r * 1.7) * 4;
    crowdL += `<circle cx="${30 + i * 26 + r * 8}" cy="${760 + r * 56 + bob}" r="10" fill="${c}"/>`;
    crowdR += `<circle cx="${1050 - i * 26 - r * 8}" cy="${760 + r * 56 + bob}" r="10" fill="${c}"/>`;
  }
  const flag = (x, y) => { let p = `M${x} ${y}`; for (let k = 0; k <= 10; k++) p += ` L${x + k * 14} ${y + Math.sin(t * 5 + k * .7) * 8}`; for (let k = 10; k >= 0; k--) p += ` L${x + k * 14} ${y + 70 + Math.sin(t * 5 + k * .7) * 8}`; return `<path d="${p} Z" fill="#1E7A3C"/><path d="${p} Z" fill="#C8202C" clip-path="url(#fc${x})"/><clipPath id="fc${x}"><rect x="${x + 56}" y="${y - 20}" width="200" height="120"/></clipPath>`; };
  const light = (x) => `<g><rect x="${x - 4}" y="400" width="8" height="200" fill="#5A6470"/><rect x="${x - 50}" y="380" width="100" height="40" rx="6" fill="#DDE6EE"/><polygon points="${x - 50},420 ${x + 50},420 ${x + 260 * Math.sign(540 - x)},1300 ${x - 140 * Math.sign(540 - x)},1300" fill="#FFFBE0" opacity="${0.10 + Math.sin(t * 3 + x) * 0.02}"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#ns)"/>
   ${[...Array(30)].map((_, i) => `<circle cx="${(i * 137) % 1080}" cy="${(i * 71) % 360 + 20}" r="2" fill="#fff" opacity="${0.4 + 0.4 * Math.sin(t * 2 + i)}"/>`).join('')}
   <path d="M260 420 L330 380 L420 400 L520 360 L620 390 L700 370 L820 410 L820 900 L260 900 Z" fill="#6E6A66"/>
   <path d="M300 460 L360 520 M420 430 L470 560 M560 420 L540 600 M660 430 L700 560 M760 450 L740 620" stroke="#55514D" stroke-width="10"/>
   <path d="M260 600 L820 640 L820 900 L260 900 Z" fill="#7C7873" opacity=".6"/>
   <path d="M0 700 L300 640 L300 1260 L0 1300 Z" fill="#2C3440"/>${crowdL}
   <path d="M1080 700 L780 640 L780 1260 L1080 1300 Z" fill="#2C3440"/>${crowdR}
   <rect x="0" y="640" width="1080" height="14" fill="#C9D3DC"/>
   ${light(120)}${light(960)}
   <path d="M0 1260 L1080 1260 L1080 1920 L0 1920 Z" fill="url(#gr)"/>
   ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="0" y="${1260 + i * 110}" width="1080" height="55" fill="#2E8B44" opacity=".35"/>`).join('')}
   <path d="M440 1260 L640 1260 L640 1300 L440 1300 Z" fill="none" stroke="#fff" stroke-width="6"/>
   <rect x="430" y="1180" width="220" height="80" fill="none" stroke="#fff" stroke-width="8"/>
   ${flag(150, 560)}`,
    `<linearGradient id="ns" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1632"/><stop offset="1" stop-color="#24365C"/></linearGradient>
     <linearGradient id="gr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A7A3B"/><stop offset="1" stop-color="#1D5E2C"/></linearGradient>`);
}
function arcadaSVG(t = 0) {
  let arches = '';
  for (let i = 0; i < 7; i++) { const x = 40 + i * 145; arches += `<rect x="${x}" y="700" width="20" height="360" fill="#E9E1D2"/><path d="M${x + 20} 760 a 62 62 0 0 1 125 0 L${x + 145} 1060 L${x + 20} 1060 Z" fill="#3B2E28"/><rect x="${x + 40}" y="840" width="85" height="120" fill="#F6C66B" opacity="${0.75 + 0.15 * Math.sin(t * 2 + i)}"/>`; }
  let wins = ''; for (let i = 0; i < 7; i++) { const x = 70 + i * 145; wins += `<rect x="${x}" y="460" width="70" height="120" rx="6" fill="#F3D08A" opacity=".85"/><rect x="${x - 8}" y="590" width="86" height="12" fill="#C9BFAE"/>`; }
  let drops = ''; for (let i = 0; i < 18; i++) { const ph = ((t * 1.2 + i / 18) % 1); const ang = (i / 18) * Math.PI * 2; drops += `<circle cx="${540 + Math.cos(ang) * 110 * ph}" cy="${1240 - Math.sin(ph * Math.PI) * 160}" r="7" fill="#BFE3FF" opacity="${1 - ph}"/>`; }
  let pig = ''; for (let i = 0; i < 3; i++) { const hop = Math.abs(Math.sin(t * 4 + i * 2)) * 18; const x = 160 + i * 330 + Math.sin(t * .6 + i) * 40; pig += `<g transform="translate(${x} ${1420 - hop})"><ellipse rx="28" ry="18" fill="#8A93A6"/><circle cx="22" cy="-16" r="12" fill="#7A8396"/><path d="M33 -16 l10 3 l-10 3 Z" fill="#E8A93A"/></g>`; }
  return W(`<rect width="1080" height="1920" fill="url(#dk)"/>
   <circle cx="860" cy="${150 + Math.sin(t * .3) * 6}" r="60" fill="#FFE4B0" opacity=".8"/>
   <rect x="0" y="400" width="1080" height="660" fill="#F2EBDD"/><rect x="0" y="390" width="1080" height="24" fill="#C9BFAE"/>
   <path d="M0 400 L540 380 L1080 400" fill="#B65A3A"/>
   ${wins}${arches}
   <rect x="0" y="1060" width="1080" height="860" fill="#B9AFA0"/>
   ${[...Array(10)].map((_, i) => `<path d="M${i * 120 - 60} 1920 L${540 + (i - 4.5) * 40} 1060" stroke="#A59B8C" stroke-width="4"/>`).join('')}
   <ellipse cx="540" cy="1260" rx="230" ry="50" fill="#8D8475"/><ellipse cx="540" cy="1250" rx="210" ry="40" fill="#6FB3D9"/>
   <rect x="525" y="1100" width="30" height="150" fill="#D8CDBD"/>${drops}
   ${pig}`,
    `<linearGradient id="dk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B3F7A"/><stop offset=".5" stop-color="#C77A8E"/><stop offset="1" stop-color="#F2B47A"/></linearGradient>`);
}
function barbaraSVG(t = 0) {
  let arc = ''; for (let i = 0; i < 6; i++) { const x = 60 + i * 165; arc += `<path d="M${x} 1000 L${x} 700 Q ${x + 70} 600 ${x + 140} 700 L${x + 140} 1000 Z" fill="#4A3A33"/>`; }
  let beds = ''; for (let r = 0; r < 4; r++) for (let i = 0; i < 5; i++) { const y = 1150 + r * 160, x = 60 + i * 200 + (r % 2) * 100; beds += `<ellipse cx="${x}" cy="${y}" rx="85" ry="40" fill="#2F7D3A"/><ellipse cx="${x}" cy="${y - 8}" rx="60" ry="24" fill="${['#E2365B', '#FFD45C', '#B66BD9', '#FF8C42'][(r + i) % 4]}"/>`; }
  let pet = ''; for (let i = 0; i < 14; i++) { const ph = (t * .12 + i / 14) % 1; pet += `<ellipse cx="${(i * 97 + Math.sin(t + i) * 60) % 1080}" cy="${380 + ph * 1400}" rx="9" ry="5" fill="#F7A8C4" transform="rotate(${t * 60 + i * 30} ${(i * 97) % 1080} ${380 + ph * 1400})" opacity=".85"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#bs)"/>
   <rect x="0" y="560" width="1080" height="440" fill="#CFC2AD"/>
   ${[...Array(12)].map((_, i) => `<rect x="${i * 92}" y="520" width="56" height="50" fill="#CFC2AD"/>`).join('')}
   ${arc}
   <rect x="440" y="420" width="200" height="160" fill="#BFB29C"/><path d="M440 420 L540 360 L640 420 Z" fill="#9A8F7D"/>
   <rect x="0" y="1000" width="1080" height="920" fill="#5FA05A"/>
   <path d="M540 1000 L470 1920 L610 1920 Z" fill="#D8C9A6"/>
   ${beds}${pet}`,
    `<linearGradient id="bs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8EC7F0"/><stop offset="1" stop-color="#E7F4FF"/></linearGradient>`);
}
