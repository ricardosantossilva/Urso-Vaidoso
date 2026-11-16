// New backgrounds: santamariaSVG (Santa Maria, Azores, coast at night with a launch tower catching a rocket), conservatoriaSVG (company registry counter with ticket display and stamps), setecidadesSVG (Sete Cidades twin crater lakes at sunset, Azores)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function santamariaSVG(t = 0) {
  let stars = ''; for (let i = 0; i < 60; i++) { const x = (i * 173) % 1080, y = 40 + (i * 97) % 820; const o = 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i)); stars += `<circle cx="${x}" cy="${y}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${o.toFixed(2)}"/>`; }
  // rocket slowly descending into the tower arms
  const ry = 380 + Math.min(1, t / 6) * 120 + Math.sin(t * 3) * 4;
  const flame = 40 + Math.sin(t * 30) * 12;
  let waves = ''; for (let i = 0; i < 6; i++) { const y = 1260 + i * 26, o = Math.sin(t * 1.5 + i) * 20; waves += `<path d="M0 ${y} q 90 ${-10} 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0" transform="translate(${o} 0)" stroke="#5C8FC0" stroke-width="4" fill="none" opacity=".5"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#sk)"/>${stars}
   <circle cx="180" cy="520" r="46" fill="#F4F1DE"/>
   <path d="M0 1080 Q 200 960 420 1010 T 760 990 Q 900 960 1080 1020 L1080 1240 L0 1240 Z" fill="#2C4A3A"/>
   <rect y="1230" width="1080" height="240" fill="#1D3B66"/>${waves}
   <g transform="translate(700 0)">
     <rect x="-40" y="560" width="80" height="560" fill="#5B6573"/>
     ${Array.from({ length: 14 }, (_, i) => `<path d="M-40 ${580 + i * 38} L40 ${598 + i * 38} M40 ${580 + i * 38} L-40 ${598 + i * 38}" stroke="#3A424D" stroke-width="5"/>`).join('')}
     <rect x="-60" y="1100" width="120" height="30" fill="#3A424D"/>
     <rect x="-170" y="${ry + 300}" width="130" height="18" fill="#8A95A3"/><rect x="40" y="${ry + 300}" width="130" height="18" fill="#8A95A3"/>
     <g transform="translate(-105 ${ry})">
       <path d="M0 0 q 30 -90 60 0 Z" fill="#E6E9EE"/><rect x="0" y="0" width="60" height="420" fill="#DDE2E8"/><rect x="0" y="60" width="60" height="10" fill="#9AA5B2"/>
       <path d="M0 360 l-26 60 h26 Z M60 360 l26 60 h-26 Z" fill="#9AA5B2"/>
       <path d="M10 420 q 20 ${flame} 40 0 Z" fill="#FFB347" opacity=".9"/><path d="M20 420 q 10 ${flame * 0.6} 20 0 Z" fill="#FFF2B0"/>
     </g>
     <circle cx="0" cy="555" r="10" fill="${Math.sin(t * 6) > 0 ? '#FF4D4D' : '#661B1B'}"/>
   </g>
   <path d="M0 1460 L1080 1460 L1080 1920 L0 1920 Z" fill="#3B3A36"/>
   <path d="M0 1460 Q 300 1430 560 1470 T 1080 1450 L1080 1520 L0 1520 Z" fill="#4A4842"/>
   ${Array.from({ length: 18 }, (_, i) => `<ellipse cx="${(i * 131) % 1080}" cy="${1560 + (i * 83) % 340}" rx="${18 + i % 4 * 6}" ry="${8 + i % 3 * 3}" fill="#2E2D2A"/>`).join('')}`,
   `<linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1430"/><stop offset=".6" stop-color="#22305E"/><stop offset="1" stop-color="#4C4F7A"/></linearGradient>`);
}
function conservatoriaSVG(t = 0) {
  const fan = (t * 220) % 360;
  const n = 40 + Math.floor(t / 2.5) % 10;
  let tiles = ''; for (let x = 0; x < 1080; x += 90) for (let y = 1380; y < 1920; y += 90) tiles += `<rect x="${x}" y="${y}" width="90" height="90" fill="${((x + y) / 90) % 2 ? '#CFC6B5' : '#B9AF9C'}"/>`;
  return W(`<rect width="1080" height="1920" fill="#E9E1CF"/>
   <rect y="0" width="1080" height="150" fill="#D8CDB6"/>
   <g transform="translate(540 90)"><rect x="-6" y="0" width="12" height="40" fill="#555"/><g transform="translate(0 40) rotate(${fan})"><ellipse rx="160" ry="16" fill="#6B5B45"/><ellipse rx="16" ry="160" fill="#6B5B45" opacity=".9"/></g><circle cy="40" r="20" fill="#444"/></g>
   <rect x="0" y="400" width="1080" height="420" fill="#F5EFE2"/>
   <g transform="translate(160 430)"><rect width="260" height="150" rx="14" fill="#1B2430"/><text x="130" y="60" text-anchor="middle" font-family="Inter" font-weight="800" font-size="34" fill="#9FB3C8">SENHA</text><text x="130" y="128" text-anchor="middle" font-family="Inter" font-weight="900" font-size="64" fill="#FF5A4E">E${n}</text></g>
   <g transform="translate(560 440)"><rect width="380" height="120" rx="14" fill="#0B2343"/><text x="190" y="54" text-anchor="middle" font-family="Inter" font-weight="900" font-size="38" fill="#fff">REGISTO</text><text x="190" y="98" text-anchor="middle" font-family="Inter" font-weight="800" font-size="32" fill="#FFD45C">COMERCIAL</text></g>
   ${[0, 1, 2].map(i => `<g transform="translate(${70 + i * 330} 640)"><rect width="280" height="170" fill="#BFD7E6" opacity=".7"/><rect width="280" height="170" fill="none" stroke="#7A6448" stroke-width="12"/><circle cx="140" cy="190" r="12" fill="#7A6448"/></g>`).join('')}
   <rect x="0" y="820" width="1080" height="80" fill="#8B6B4A"/><rect x="0" y="900" width="1080" height="480" fill="#A07E5A"/>
   ${[0, 1, 2, 3].map(i => `<rect x="${40 + i * 260}" y="940" width="220" height="400" rx="8" fill="#94724F"/>`).join('')}
   <g transform="translate(860 ${845 - Math.abs(Math.sin(t * 2.2)) * 50})"><rect x="-14" y="-70" width="28" height="60" rx="8" fill="#5A3A22"/><rect x="-44" y="-12" width="88" height="22" rx="6" fill="#2B2B2B"/></g>
   <rect x="800" y="860" width="120" height="14" fill="#C8202C" opacity=".7"/>
   <g transform="translate(200 850) rotate(-6)"><rect width="150" height="40" fill="#FFFDF6"/><rect x="10" y="10" width="100" height="6" fill="#C9C1B0"/><rect x="10" y="22" width="70" height="6" fill="#C9C1B0"/></g>
   ${tiles}`);
}
function setecidadesSVG(t = 0) {
  let clouds = ''; for (let i = 0; i < 4; i++) { const x = ((t * 18 + i * 320) % 1400) - 200, y = 420 + i * 70; clouds += `<g transform="translate(${x} ${y})" fill="#FFE8D6" opacity=".8"><ellipse rx="120" ry="34"/><ellipse cx="60" cy="-20" rx="70" ry="30"/></g>`; }
  const g = 0.5 + 0.5 * Math.sin(t * 2);
  let birds = ''; for (let i = 0; i < 3; i++) { const x = (t * 60 + i * 260) % 1200 - 60, y = 640 + i * 40 + Math.sin(t * 3 + i) * 10; birds += `<path d="M${x} ${y} q 12 -12 24 0 q 12 -12 24 0" stroke="#3A2E3A" stroke-width="4" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#ss)"/>
   <circle cx="540" cy="760" r="120" fill="#FFC56B" opacity=".9"/>${clouds}${birds}
   <path d="M0 860 Q 270 700 540 820 T 1080 800 L1080 1920 L0 1920 Z" fill="#3E7A47"/>
   <path d="M0 930 Q 300 840 560 900 T 1080 890 L1080 1920 L0 1920 Z" fill="#4E9150"/>
   <ellipse cx="330" cy="1080" rx="300" ry="90" fill="#2F8FA6"/><ellipse cx="760" cy="1060" rx="250" ry="80" fill="#3E9A62"/>
   <rect x="520" y="1040" width="80" height="26" fill="#C9B48E"/>
   ${[0, 1, 2, 3].map(i => `<ellipse cx="${330 + Math.sin(t + i) * 200}" cy="${1060 + i * 14}" rx="60" ry="3" fill="#fff" opacity="${(0.3 * g).toFixed(2)}"/>`).join('')}
   <path d="M0 1150 Q 300 1100 540 1160 T 1080 1140 L1080 1920 L0 1920 Z" fill="#5FA35A"/>
   ${Array.from({ length: 12 }, (_, i) => `<g transform="translate(${60 + i * 90} ${1200 + (i % 3) * 20}) rotate(${Math.sin(t * 2 + i) * 6})"><circle r="22" fill="${['#7EA6E0', '#A58BD8', '#E0B0E8'][i % 3]}"/><circle r="12" cx="14" cy="-10" fill="${['#9DBDF0', '#BFA6EA', '#F0C8F2'][i % 3]}"/></g>`).join('')}
   <rect x="0" y="1380" width="1080" height="20" fill="#7A6448"/>${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 95 + 20}" y="1330" width="14" height="60" fill="#7A6448"/>`).join('')}
   <rect y="1400" width="1080" height="520" fill="#6E8F55"/>`,
   `<linearGradient id="ss" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A4C8A"/><stop offset=".5" stop-color="#E88A6A"/><stop offset="1" stop-color="#FFC98A"/></linearGradient>`);
}
