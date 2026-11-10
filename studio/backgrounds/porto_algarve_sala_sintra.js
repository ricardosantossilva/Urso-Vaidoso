// New backgrounds (2026-11-10 Euromilhões video): portoSVG (Porto riverside on a rainy evening, coloured houses, iron bridge arch, lottery kiosk),
// algarveSVG (golden Algarve sea cliffs and arches with a golden yacht), salaSVG (living room on a rainy night, TV showing the draw balls),
// sintraSVG (colourful hilltop palace above misty Sintra woods)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
const rain = (t, n = 70, op = .45, y0 = 0, y1 = 1920) => Array.from({ length: n }, (_, i) => { const x = (i * 157) % 1080, sp = 900 + (i % 5) * 120; const y = y0 + ((t * sp + i * 271) % (y1 - y0)); return `<line x1="${x}" y1="${y}" x2="${x - 10}" y2="${y + 38}" stroke="#DCEBFA" stroke-width="3" opacity="${op}"/>`; }).join('');
function portoSVG(t = 0) {
  const cols = ['#E7B04A', '#C8503A', '#3E7CB1', '#F1E2C4', '#7FAE6E', '#D97A8E', '#5C8FA8', '#E8C77A'];
  let houses = ''; for (let i = 0; i < 11; i++) { const x = i * 100 - 10, h = 330 + (i * 53) % 160, y = 980 - h; houses += `<rect x="${x}" y="${y}" width="102" height="${h}" fill="${cols[i % cols.length]}"/><path d="M${x} ${y} L${x + 51} ${y - 40} L${x + 102} ${y} Z" fill="#9A4A32"/>` + Array.from({ length: Math.floor(h / 90) }, (_, r) => `<rect x="${x + 20}" y="${y + 30 + r * 90}" width="24" height="44" fill="${(i + r) % 3 ? '#2E4258' : '#FFE29A'}"/><rect x="${x + 58}" y="${y + 30 + r * 90}" width="24" height="44" fill="${(i + r) % 4 ? '#2E4258' : '#FFE29A'}"/>`).join(''); }
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>
   <path d="M-60 700 Q 540 380 1140 700" stroke="#4A4F57" stroke-width="34" fill="none"/><path d="M-60 700 Q 540 420 1140 700" stroke="#4A4F57" stroke-width="10" fill="none"/>
   ${Array.from({ length: 16 }, (_, i) => { const x = i * 72; const yy = 700 - Math.sin(Math.PI * (x + 60) / 1200) * 300; return `<line x1="${x}" y1="${yy}" x2="${x}" y2="560" stroke="#4A4F57" stroke-width="6"/>`; }).join('')}
   <rect x="-20" y="548" width="1120" height="22" fill="#3A3F47"/>
   ${houses}
   <rect y="980" width="1080" height="200" fill="#3E5C74"/>${Array.from({ length: 10 }, (_, i) => `<rect x="${(i * 113 + Math.sin(t * 2 + i) * 12) % 1080}" y="${1000 + (i % 4) * 40}" width="60" height="5" rx="2" fill="#FFE29A" opacity=".5"/>`).join('')}
   <g transform="translate(${140 + Math.sin(t * .8) * 30} 1060)"><path d="M0 0 L240 0 L210 40 L30 40 Z" fill="#6B4A32"/><rect x="60" y="-60" width="16" height="60" fill="#4A3324"/><rect x="40" y="-30" width="120" height="30" fill="#C9A06A"/></g>
   <rect y="1180" width="1080" height="740" fill="#6F6A62"/>${Array.from({ length: 60 }, (_, i) => `<rect x="${(i * 97) % 1080}" y="${1200 + ((i * 61) % 700)}" width="70" height="34" rx="6" fill="#7C766D"/>`).join('')}
   <g transform="translate(820 1180)"><rect x="-150" y="-330" width="300" height="330" fill="#1F5A45"/><path d="M-180 -330 L180 -330 L150 -390 L-150 -390 Z" fill="#C8202C"/>
     <rect x="-130" y="-300" width="260" height="60" fill="#FFD45C"/><text x="0" y="-258" text-anchor="middle" font-family="Inter" font-weight="900" font-size="38" fill="#0A1F3C">LOTARIA</text>
     <rect x="-120" y="-220" width="240" height="150" fill="#DDEFF7"/>${[0, 1, 2].map(i => `<rect x="${-105 + i * 78}" y="-205" width="60" height="110" fill="#FBF5EA" transform="rotate(${-4 + i * 4} ${-75 + i * 78} -150)"/><circle cx="${-75 + i * 78}" cy="-170" r="14" fill="${['#C8202C', '#2E6DB4', '#FFD45C'][i]}"/>`).join('')}</g>
   ${rain(t, 80, .4)}`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3D4B63"/><stop offset=".7" stop-color="#7A8AA3"/><stop offset="1" stop-color="#A9B3C2"/></linearGradient>`);
}
function algarveSVG(t = 0) {
  const bob = Math.sin(t * 2.2) * 10, sun = `<circle cx="820" cy="180" r="90" fill="#FFE07A"/><circle cx="820" cy="180" r="150" fill="#FFE07A" opacity=".25"/>`;
  let glints = ''; for (let i = 0; i < 18; i++) glints += `<rect x="${(i * 131 + t * 30) % 1080}" y="${860 + (i % 6) * 70}" width="${40 + (i % 3) * 20}" height="6" rx="3" fill="#fff" opacity="${.35 + .25 * Math.sin(t * 3 + i)}"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#ask)"/>${sun}
   <path d="M0 520 L60 470 L120 500 L180 440 L260 480 L300 560 L330 860 L0 860 Z" fill="#D88A3E"/><path d="M60 600 q 70 -90 140 0 L200 860 L60 860 Z" fill="#3E9AC2"/>
   <path d="M760 560 L820 500 L900 520 L980 470 L1080 500 L1080 860 L740 860 Z" fill="#C97A34"/><path d="M820 660 q 60 -80 120 0 L940 860 L820 860 Z" fill="#3E9AC2"/>
   <path d="M560 860 L590 640 L640 620 L680 660 L690 860 Z" fill="#E09A52"/>
   <rect y="860" width="1080" height="560" fill="#2F8DBA"/>${glints}
   <g transform="translate(${420 + Math.sin(t * .6) * 40} ${1040 + bob})"><path d="M-220 0 L220 0 L170 70 L-170 70 Z" fill="#E6B740"/><path d="M-220 0 L220 0 L210 14 L-210 14 Z" fill="#FFE07A"/><rect x="-110" y="-70" width="200" height="70" rx="10" fill="#F2CC5A"/><rect x="-90" y="-56" width="60" height="30" rx="6" fill="#BFE3F5"/><rect x="-10" y="-56" width="60" height="30" rx="6" fill="#BFE3F5"/><rect x="-40" y="-130" width="10" height="60" fill="#B8902E"/><path d="M-30 -130 L40 -112 L-30 -96 Z" fill="#C8202C"/></g>
   <path d="M0 1400 Q 300 1340 540 1390 T 1080 1380 L1080 1920 L0 1920 Z" fill="#F2D9A6"/>${Array.from({ length: 30 }, (_, i) => `<circle cx="${(i * 139) % 1080}" cy="${1440 + (i * 67) % 460}" r="4" fill="#DEC28A"/>`).join('')}
   <path d="M0 1420 Q 270 ${1395 + Math.sin(t * 2) * 10} 540 1420 T 1080 1410" stroke="#fff" stroke-width="10" fill="none" opacity=".7"/>`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC8F0"/><stop offset="1" stop-color="#E8F6FF"/></linearGradient>`);
}
function salaSVG(t = 0) {
  const balls = [7, 19, 23, 38, 44].map((n, i) => { const yy = 700 + Math.sin(t * 4 + i) * 14; return `<circle cx="${430 + i * 56}" cy="${yy}" r="24" fill="${i % 2 ? '#FFD45C' : '#fff'}"/><text x="${430 + i * 56}" y="${yy + 9}" text-anchor="middle" font-family="Inter" font-weight="900" font-size="24" fill="#0A1F3C">${n}</text>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="#E9D8C0"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 92}" y="0" width="46" height="1250" fill="#E2CDB0"/>`).join('')}
   <g transform="translate(60 470)"><rect width="280" height="420" fill="#1B2A44"/><g clip-path="url(#win)">${Array.from({ length: 24 }, (_, i) => { const x = (i * 53) % 280, y = (t * (700 + (i % 4) * 100) + i * 97) % 440 - 20; return `<line x1="${x}" y1="${y}" x2="${x - 6}" y2="${y + 30}" stroke="#BFD8F2" stroke-width="3" opacity=".7"/>`; }).join('')}</g><rect x="132" width="16" height="420" fill="#F5EDE0"/><rect y="202" width="280" height="16" fill="#F5EDE0"/><rect x="-14" y="-14" width="308" height="448" fill="none" stroke="#F5EDE0" stroke-width="20"/><rect x="-40" y="-40" width="60" height="500" fill="#A8433F"/><rect x="260" y="-40" width="60" height="500" fill="#A8433F"/></g>
   <g><rect x="380" y="540" width="620" height="380" rx="18" fill="#1A1A1A"/><rect x="400" y="560" width="580" height="320" rx="8" fill="url(#tv)"/><circle cx="690" cy="630" r="${46 + Math.sin(t * 6) * 3}" fill="none" stroke="#FFD45C" stroke-width="6"/>${balls}<rect x="430" y="780" width="520" height="70" rx="10" fill="#C8202C"/><text x="690" y="830" text-anchor="middle" font-family="Inter" font-weight="900" font-size="44" fill="#fff">JACKPOT 141 M€</text><rect x="650" y="920" width="80" height="40" fill="#2B2B2B"/></g>
   <rect x="380" y="960" width="620" height="60" fill="#7A4E32"/>
   <rect y="1250" width="1080" height="670" fill="#9C6B45"/>${Array.from({ length: 12 }, (_, i) => `<line x1="0" y1="${1280 + i * 56}" x2="1080" y2="${1280 + i * 56}" stroke="#86593A" stroke-width="4"/>`).join('')}
   <ellipse cx="540" cy="1700" rx="460" ry="120" fill="#2E6D74" opacity=".85"/><ellipse cx="540" cy="1700" rx="380" ry="90" fill="none" stroke="#E7C985" stroke-width="8" opacity=".8"/>
   <g transform="translate(940 1250)"><rect x="-30" y="-260" width="12" height="260" fill="#3A2A20"/><path d="M-80 -260 L40 -260 L10 -360 L-50 -360 Z" fill="#F3C969"/><circle cx="-20" cy="-300" r="90" fill="#FFE9A8" opacity=".18"/></g>`,
   `<clipPath id="win"><rect width="280" height="420"/></clipPath><radialGradient id="tv" cx=".5" cy=".4" r=".7"><stop offset="0" stop-color="#3B5BB0"/><stop offset="1" stop-color="#14204A"/></radialGradient>`);
}
function sintraSVG(t = 0) {
  const mist = i => `<ellipse cx="${(i * 400 + t * 25) % 1500 - 200}" cy="${880 + i * 60}" rx="320" ry="50" fill="#fff" opacity=".35"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#ssk)"/>
   <path d="M0 900 Q 200 560 420 620 Q 560 480 700 600 Q 880 520 1080 760 L1080 1300 L0 1300 Z" fill="#3F7A4A"/>
   ${Array.from({ length: 22 }, (_, i) => `<circle cx="${(i * 97) % 1080}" cy="${760 + (i * 41) % 300}" r="${50 + (i % 4) * 14}" fill="${['#356B3F', '#4E8C55', '#2F5F38'][i % 3]}"/>`).join('')}
   <g transform="translate(540 600)">
     <rect x="-200" y="-40" width="400" height="140" fill="#E8A13A"/><rect x="-200" y="-40" width="400" height="18" fill="#C8202C"/>${Array.from({ length: 9 }, (_, i) => `<rect x="${-195 + i * 45}" y="-60" width="26" height="22" fill="#E8A13A"/>`).join('')}
     <rect x="-300" y="-110" width="120" height="210" fill="#C94A4A"/><ellipse cx="-240" cy="-110" rx="66" ry="56" fill="#C94A4A"/><circle cx="-240" cy="-176" r="10" fill="#E8A13A"/>
     <rect x="150" y="-170" width="110" height="270" fill="#E7DCC8"/><path d="M150 -170 q 55 -100 110 0 Z" fill="#6E93B8"/>
     <rect x="-60" y="-150" width="120" height="110" fill="#C94A4A"/><path d="M-70 -150 L0 -230 L70 -150 Z" fill="#7A2E3A"/>
     ${[-150, -90, -30, 30, 90].map(x => `<path d="M${x} 100 v-50 q 22 -30 44 0 v50 Z" fill="#7A4E32"/>`).join('')}
   </g>
   ${[0, 1, 2, 3].map(mist).join('')}
   <rect y="1300" width="1080" height="620" fill="#B9A988"/>${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 113) % 1080}" cy="${1330 + (i * 59) % 580}" r="${5 + i % 4}" fill="#A6977A"/>`).join('')}
   <rect y="1290" width="1080" height="30" fill="#8C7C60"/>
   ${[0, 1, 2, 3, 4].map(i => { const x = (i * 260 + t * 18) % 1180 - 50, y = 300 + Math.sin(t + i) * 12 + (i % 3) * 60; return `<path d="M${x} ${y} q 12 -12 24 0 q 12 -12 24 0" stroke="#2B3440" stroke-width="4" fill="none"/>`; }).join('')}`,
   `<linearGradient id="ssk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9CFE8"/><stop offset="1" stop-color="#E6F1F4"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { portoSVG, algarveSVG, salaSVG, sintraSVG };
