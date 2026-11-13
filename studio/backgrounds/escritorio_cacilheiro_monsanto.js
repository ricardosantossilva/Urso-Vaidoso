// New backgrounds: homeofficeSVG (Lisbon flat home office at night, laptop with spinning loading wheel and offline cloud), cacilheiroSVG (deck of a Tagus ferry crossing to Cacilhas, Lisbon skyline and gulls), monsantoSVG (Beira granite village with houses wedged under giant boulders at golden hour)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function homeofficeSVG(t = 0) {
  let spokes = ''; for (let i = 0; i < 8; i++) { const a = i * 45 + t * 300; spokes += `<rect x="-5" y="-48" width="10" height="24" rx="5" fill="#fff" opacity="${0.25 + (i / 8) * 0.75}" transform="rotate(${a})"/>`; }
  const books = Array.from({ length: 14 }, (_, i) => `<rect x="${40 + i * 26}" y="${640 - (i % 3) * 14}" width="22" height="${110 + (i % 3) * 14}" fill="${['#C8202C', '#2F6FA8', '#E8A93A', '#3F8A44', '#7A2E3A'][i % 5]}"/>`).join('');
  const leaf = Math.sin(t * 1.5) * 4;
  return W(`<rect width="1080" height="1920" fill="#2A2F45"/>
   <rect y="0" width="1080" height="1160" fill="url(#wall)"/>
   <g transform="translate(610 420)"><rect x="0" y="0" width="400" height="460" fill="#0E1A33" stroke="#E9DCC4" stroke-width="18"/><line x1="200" y1="0" x2="200" y2="460" stroke="#E9DCC4" stroke-width="12"/><line x1="0" y1="230" x2="400" y2="230" stroke="#E9DCC4" stroke-width="12"/>
     <circle cx="300" cy="90" r="38" fill="#F4E9B8"/>${[[60, 60], [140, 150], [260, 300], [90, 380], [340, 400]].map(([x, y], i) => `<circle cx="${x}" cy="${y}" r="4" fill="#fff" opacity="${0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i))}"/>`).join('')}</g>
   <rect x="30" y="760" width="400" height="16" fill="#8A5A3B"/><rect x="30" y="600" width="400" height="16" fill="#8A5A3B"/>${books}
   <rect y="1160" width="1080" height="760" fill="#6B4A32"/><rect y="1160" width="1080" height="30" fill="#5A3D29"/>
   <rect x="80" y="1060" width="920" height="40" rx="8" fill="#B07A4F"/><rect x="120" y="1100" width="30" height="300" fill="#8A5A3B"/><rect x="930" y="1100" width="30" height="300" fill="#8A5A3B"/>
   <g transform="translate(400 820)"><rect x="0" y="0" width="420" height="240" rx="16" fill="#1B2430"/><rect x="14" y="14" width="392" height="212" rx="8" fill="#2F6FA8"/>
     <g transform="translate(206 100)">${spokes}</g><rect x="96" y="176" width="220" height="26" rx="13" fill="#0E1A33" opacity=".6"/><rect x="-30" y="240" width="480" height="20" rx="8" fill="#9FB3C8"/></g>
   <g transform="translate(860 980)"><rect x="-40" y="40" width="80" height="80" rx="10" fill="#C86A3A"/><g transform="rotate(${leaf})"><ellipse cx="-30" cy="0" rx="20" ry="60" fill="#3F8A44" transform="rotate(-25)"/><ellipse cx="30" cy="0" rx="20" ry="60" fill="#4E9A4B" transform="rotate(25)"/><ellipse cx="0" cy="-20" rx="20" ry="70" fill="#5FA25A"/></g></g>
   <g transform="translate(180 990)"><rect x="-30" y="0" width="60" height="70" rx="8" fill="#F7F7F7"/><path d="M30 15 q 30 0 30 20 q 0 20 -30 20" fill="none" stroke="#F7F7F7" stroke-width="8"/>${[0, 1].map(i => `<path d="M${-10 + i * 20} ${-10 - ((t * 40 + i * 20) % 50)} q 10 -15 0 -30" stroke="#fff" stroke-width="5" fill="none" opacity="${0.6 - ((t * 40 + i * 20) % 50) / 90}"/>`).join('')}</g>`,
    `<linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B4566"/><stop offset="1" stop-color="#55607F"/></linearGradient>`);
}
function cacilheiroSVG(t = 0) {
  const bob = Math.sin(t * 1.6) * 8;
  let gulls = ''; for (let i = 0; i < 3; i++) { const x = (t * 60 + i * 380) % 1200 - 60, y = 500 + i * 70 + Math.sin(t * 2 + i) * 20, f = Math.sin(t * 9 + i) * 12; gulls += `<path d="M${x - 30} ${y + f} q 15 -18 30 0 q 15 -18 30 0" stroke="#fff" stroke-width="7" fill="none"/>`; }
  let waves = ''; for (let i = 0; i < 6; i++) { const off = (t * 40 + i * 60) % 200; waves += `<path d="M${-200 + off} ${1000 + i * 40} q 50 -14 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0 t 100 0" stroke="#BFE3F2" stroke-width="5" fill="none" opacity=".5"/>`; }
  const houses = Array.from({ length: 22 }, (_, i) => { const h = 50 + (i * 37) % 70; return `<rect x="${i * 50}" y="${880 - h}" width="48" height="${h}" fill="${['#F2D7A8', '#E9E1D3', '#F3C969', '#E8B4A0', '#D6E4EE'][i % 5]}"/><rect x="${i * 50}" y="${872 - h}" width="48" height="10" fill="#B65A3A"/>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="url(#csk)"/>
   <circle cx="860" cy="560" r="70" fill="#FFE6A8" opacity=".9"/>
   <path d="M0 830 Q 200 700 420 760 Q 600 690 760 740 Q 920 700 1080 760 L1080 880 L0 880 Z" fill="#C9B79C"/>${houses}
   <g transform="translate(380 650)" fill="#EDE6D8"><rect x="-40" y="0" width="80" height="120"/><path d="M-50 0 L0 -60 L50 0 Z"/><rect x="60" y="40" width="160" height="80"/></g>
   ${gulls}
   <rect y="880" width="1080" height="400" fill="#4A8FB8"/>${waves}
   <g transform="translate(0 ${bob})"><rect y="1180" width="1080" height="760" fill="#E36A2A"/><rect y="1180" width="1080" height="34" fill="#F7F7F7"/>
     ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 92}" y="1100" width="12" height="100" fill="#F7F7F7"/>`).join('')}<rect y="1094" width="1080" height="14" rx="7" fill="#F7F7F7"/>
     <rect y="1440" width="1080" height="480" fill="#C9C2B3"/>${Array.from({ length: 9 }, (_, i) => `<line x1="${i * 135}" y1="1440" x2="${i * 135}" y2="1920" stroke="#B3AC9D" stroke-width="4"/>`).join('')}
     <g transform="translate(940 1250)"><circle r="70" fill="none" stroke="#F7F7F7" stroke-width="26"/><circle r="70" fill="none" stroke="#C8202C" stroke-width="26" stroke-dasharray="55 55"/></g></g>`,
    `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7FB6DA"/><stop offset=".6" stop-color="#F6C99A"/><stop offset="1" stop-color="#F6D7B0"/></linearGradient>`);
}
function monsantoSVG(t = 0) {
  const boulder = (x, y, rx, ry, c = '#9C968A') => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}"/><ellipse cx="${x - rx * 0.3}" cy="${y - ry * 0.35}" rx="${rx * 0.45}" ry="${ry * 0.3}" fill="#B5AFA2" opacity=".7"/>`;
  const house = (x, y, w, h, door = '#3F6E9E') => `<g transform="translate(${x} ${y})"><rect x="0" y="0" width="${w}" height="${h}" fill="#D9CDB7"/><rect x="${w * 0.4}" y="${h * 0.45}" width="${w * 0.22}" height="${h * 0.55}" fill="${door}"/><rect x="${w * 0.1}" y="${h * 0.2}" width="${w * 0.18}" height="${h * 0.2}" fill="#3A3026"/><rect x="${w * 0.72}" y="${h * 0.2}" width="${w * 0.18}" height="${h * 0.2}" fill="#3A3026"/></g>`;
  const smoke = [0, 1, 2].map(i => { const p = (t * 0.4 + i / 3) % 1; return `<circle cx="${700 + Math.sin(p * 6) * 14}" cy="${880 - p * 220}" r="${14 + p * 22}" fill="#fff" opacity="${0.5 * (1 - p)}"/>`; }).join('');
  let birds = ''; for (let i = 0; i < 2; i++) { const x = 1100 - ((t * 50 + i * 500) % 1250), y = 520 + i * 90, f = Math.sin(t * 8 + i) * 10; birds += `<path d="M${x - 22} ${y + f} q 11 -12 22 0 q 11 -12 22 0" stroke="#4A3B2E" stroke-width="5" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#msk)"/>
   <path d="M0 760 Q 300 640 560 700 Q 820 620 1080 690 L1080 1000 L0 1000 Z" fill="#A9A28F"/>
   <g transform="translate(860 620)"><rect x="-60" y="0" width="120" height="110" fill="#9C968A"/>${[-60, -30, 0, 30].map(x => `<rect x="${x}" y="-20" width="20" height="24" fill="#9C968A"/>`).join('')}</g>
   ${birds}
   <rect y="900" width="1080" height="1020" fill="#8C8676"/>
   ${house(120, 860, 220, 170)}${boulder(250, 850, 220, 130)}
   ${house(600, 880, 200, 160, '#7A2E3A')}<rect x="680" y="840" width="34" height="50" fill="#B5AFA2"/>${smoke}${boulder(860, 900, 200, 150, '#8F897C')}
   ${boulder(480, 1000, 120, 80, '#A39D90')}
   <path d="M0 1080 Q 540 1040 1080 1090 L1080 1920 L0 1920 Z" fill="#7A745F"/>
   ${Array.from({ length: 26 }, (_, i) => `<ellipse cx="${(i * 131) % 1080}" cy="${1140 + (i * 83) % 760}" rx="${26 + (i % 4) * 8}" ry="${14 + (i % 3) * 5}" fill="#6C6653"/>`).join('')}
   <g transform="translate(140 1100)"><rect x="-6" y="0" width="12" height="90" fill="#5A4636"/><g transform="rotate(${Math.sin(t * 1.4) * 4})"><circle cx="0" cy="-10" r="44" fill="#6B8F3A"/><circle cx="-30" cy="10" r="30" fill="#5E7F33"/><circle cx="30" cy="10" r="30" fill="#7AA046"/></g></g>`,
    `<linearGradient id="msk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2A65A"/><stop offset=".55" stop-color="#F7D29A"/><stop offset="1" stop-color="#E9C892"/></linearGradient>`);
}
