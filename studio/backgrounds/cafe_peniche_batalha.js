// New backgrounds (2026-11-15 11:00): cafeSVG (neighbourhood café at night with wall TV showing the 1-4 score, espresso machine steam, swaying scarves),
// penicheSVG (Peniche-style sea fortress with star-shaped walls, crashing waves, bobbing fishing boats, gulls), batalhaSVG (Batalha-style gothic monastery at sunset with pinnacles, swallows)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function cafeSVG(t = 0) {
  const tiles = Array.from({ length: 9 }, (_, i) => Array.from({ length: 4 }, (_, j) => `<rect x="${i * 120}" y="${980 + j * 80}" width="118" height="78" fill="${(i + j) % 2 ? '#2F6FB3' : '#EAF2FA'}"/><circle cx="${i * 120 + 59}" cy="${980 + j * 80 + 39}" r="18" fill="${(i + j) % 2 ? '#EAF2FA' : '#2F6FB3'}"/>`).join('')).join('');
  let steam = ''; for (let i = 0; i < 4; i++) { const k = ((t * 0.6 + i / 4) % 1); steam += `<circle cx="${210 + Math.sin(k * 9 + i) * 18}" cy="${1040 - k * 220}" r="${16 + k * 26}" fill="#fff" opacity="${0.55 * (1 - k)}"/>`; }
  const scarf = (x, c1, c2, ph) => { const a = Math.sin(t * 2.2 + ph) * 6; return `<g transform="translate(${x} 760) rotate(${a})">${Array.from({ length: 7 }, (_, i) => `<rect x="-22" y="${i * 34}" width="44" height="34" fill="${i % 2 ? c2 : c1}"/>`).join('')}<path d="M-22 238 l0 26 M-8 238 l0 26 M8 238 l0 26 M22 238 l0 26" stroke="${c1}" stroke-width="6"/></g>`; };
  const flick = 0.85 + 0.15 * Math.sin(t * 13);
  return W(`<rect width="1080" height="1920" fill="#3B2A22"/>
   <rect y="0" width="1080" height="980" fill="#5A3B2C"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 90}" y="0" width="6" height="980" fill="#4A3024"/>`).join('')}
   <g transform="translate(540 380)"><rect x="-300" y="0" width="600" height="340" rx="16" fill="#111"/><rect x="-282" y="18" width="564" height="304" rx="6" fill="#1E7A3C" opacity="${flick}"/>
     <rect x="-240" y="60" width="480" height="150" rx="14" fill="#0B2343"/>
     <text x="-120" y="165" text-anchor="middle" font-family="Inter" font-weight="900" font-size="80" fill="#fff">1</text><text x="0" y="160" text-anchor="middle" font-family="Inter" font-weight="900" font-size="64" fill="#FFD45C">-</text><text x="120" y="165" text-anchor="middle" font-family="Inter" font-weight="900" font-size="80" fill="#fff">4</text>
     <rect x="-210" y="90" width="40" height="26" fill="#C8202C"/><rect x="-210" y="90" width="16" height="26" fill="#1E7A3C"/><rect x="170" y="90" width="40" height="26" fill="#C8202C"/><rect x="186" y="90" width="8" height="26" fill="#fff"/><rect x="170" y="100" width="40" height="6" fill="#fff"/>
     <text x="0" y="280" text-anchor="middle" font-family="Inter" font-weight="800" font-size="40" fill="#fff">FINAL · 90+3'</text></g>
   ${scarf(150, '#C8202C', '#1E7A3C', 0)}${scarf(930, '#1E7A3C', '#C8202C', 1.7)}
   ${tiles}
   <rect y="1300" width="1080" height="70" fill="#7A4E36"/><rect y="1290" width="1080" height="20" fill="#A87452"/>
   <g transform="translate(210 1170)"><rect x="-120" y="0" width="240" height="120" rx="14" fill="#BFC7D1"/><rect x="-100" y="20" width="200" height="40" rx="8" fill="#8D97A3"/><rect x="-60" y="60" width="20" height="40" fill="#555"/><rect x="40" y="60" width="20" height="40" fill="#555"/><rect x="-80" y="100" width="40" height="18" rx="4" fill="#fff"/></g>
   ${steam}
   <g transform="translate(870 1240)"><rect x="-40" y="-60" width="30" height="60" rx="4" fill="#F3C969" opacity=".9"/><rect x="10" y="-50" width="30" height="50" rx="4" fill="#F3C969" opacity=".9"/><rect x="-40" y="-66" width="30" height="12" rx="4" fill="#fff"/><rect x="10" y="-56" width="30" height="12" rx="4" fill="#fff"/></g>
   <rect y="1370" width="1080" height="550" fill="#C9B79A"/>${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 140}" y="1370" width="4" height="550" fill="#B5A283"/>`).join('')}
   <circle cx="540" cy="60" r="0"/>${[180, 540, 900].map(x => `<g transform="translate(${x} 0)"><line x1="0" y1="0" x2="0" y2="90" stroke="#222" stroke-width="4"/><path d="M-50 90 L50 90 L30 140 L-30 140 Z" fill="#E8A93A"/><ellipse cx="0" cy="150" rx="30" ry="10" fill="#FFE9A8" opacity=".8"/></g>`).join('')}`);
}
function penicheSVG(t = 0) {
  let waves = ''; for (let r = 0; r < 4; r++) { const y = 1180 + r * 80, ph = t * (1.2 + r * 0.2) + r; let d = `M0 ${y}`; for (let x = 0; x <= 1080; x += 40) d += ` L${x} ${y + Math.sin(x / 70 + ph) * 12}`; d += ` L1080 1920 L0 1920 Z`; waves += `<path d="${d}" fill="${['#2B7BB0', '#236C9E', '#1D5E8B', '#174F77'][r]}"/>`; }
  const spray = Array.from({ length: 6 }, (_, i) => { const k = (t * 0.8 + i / 6) % 1; return `<circle cx="${620 + i * 25 + Math.sin(i) * 20}" cy="${1150 - Math.sin(k * Math.PI) * 160}" r="${14 + i % 3 * 6}" fill="#fff" opacity="${0.8 * (1 - k)}"/>`; }).join('');
  const boat = (x, y, c, ph) => `<g transform="translate(${x} ${y + Math.sin(t * 2 + ph) * 10}) rotate(${Math.sin(t * 2 + ph) * 4})"><path d="M-90 0 L90 0 L65 45 L-65 45 Z" fill="${c}"/><rect x="-90" y="0" width="180" height="10" fill="#fff"/><rect x="-20" y="-50" width="50" height="50" fill="#F2EFE6"/><rect x="0" y="-110" width="6" height="60" fill="#444"/></g>`;
  const gull = (i) => { const x = (t * 60 + i * 300) % 1200 - 60, y = 820 + i * 40 + Math.sin(t * 3 + i) * 15, w = Math.sin(t * 8 + i) * 10; return `<path d="M${x - 26} ${y - w} Q ${x - 12} ${y - 14} ${x} ${y} Q ${x + 12} ${y - 14} ${x + 26} ${y - w}" stroke="#fff" stroke-width="6" fill="none"/>`; };
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>
   <circle cx="860" cy="560" r="80" fill="#FFF3C4"/>
   ${[0, 1, 2].map(i => `<ellipse cx="${(t * 15 + i * 420) % 1400 - 160}" cy="${470 + i * 60}" rx="140" ry="36" fill="#fff" opacity=".8"/>`).join('')}
   <path d="M0 1000 L120 900 L320 930 L400 860 L640 860 L720 930 L900 900 L1080 980 L1080 1220 L0 1220 Z" fill="#B9A98C"/>
   <path d="M0 1000 L120 900 L320 930 L400 860 L640 860 L720 930 L900 900 L1080 980" fill="none" stroke="#8F7F65" stroke-width="10"/>
   <g fill="#E9E1CF"><rect x="430" y="740" width="180" height="130"/><rect x="460" y="700" width="120" height="50"/><rect x="150" y="840" width="120" height="70"/><rect x="800" y="840" width="120" height="70"/></g>
   ${Array.from({ length: 7 }, (_, i) => `<rect x="${440 + i * 25}" y="725" width="14" height="18" fill="#E9E1CF"/>`).join('')}
   <rect x="500" y="780" width="40" height="60" rx="20" fill="#7A6A52"/>
   <rect x="520" y="620" width="6" height="90" fill="#555"/><path d="M526 622 L${600 + Math.sin(t * 4) * 8} ${640 + Math.sin(t * 4) * 4} L526 664 Z" fill="#1E7A3C"/><path d="M526 622 L556 630 L556 656 L526 664 Z" fill="#C8202C"/>
   <path d="M0 1080 L160 1060 L260 1120 L0 1180 Z" fill="#7F6E58"/><path d="M1080 1060 L880 1080 L820 1140 L1080 1180 Z" fill="#7F6E58"/>
   ${waves}${spray}${boat(260, 1320, '#2F6FB3', 0)}${boat(820, 1450, '#C8202C', 1.3)}${boat(500, 1620, '#F3C969', 2.4)}
   ${[0, 1, 2].map(gull).join('')}`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC3EA"/><stop offset="1" stop-color="#DDF1FB"/></linearGradient>`);
}
function batalhaSVG(t = 0) {
  const pin = (x, y, h) => `<path d="M${x - 10} ${y} L${x} ${y - h} L${x + 10} ${y} Z" fill="#D9B98A"/>`;
  const arch = (x, y, w, h) => `<path d="M${x} ${y + h} L${x} ${y + w * 0.4} Q ${x} ${y} ${x + w / 2} ${y - w * 0.2} Q ${x + w} ${y} ${x + w} ${y + w * 0.4} L${x + w} ${y + h} Z" fill="#8E6B45"/>`;
  const swallow = i => { const x = (t * 90 * (i % 2 ? 1 : -1) + i * 260 + 2000) % 1200 - 60, y = 640 + i * 50 + Math.sin(t * 2 + i) * 30, w = Math.sin(t * 10 + i) * 8; return `<path d="M${x - 22} ${y - w} L${x} ${y} L${x + 22} ${y - w} M${x} ${y} l-6 12 M${x} ${y} l6 12" stroke="#2A2230" stroke-width="5" fill="none"/>`; };
  return W(`<rect width="1080" height="1920" fill="url(#bsk)"/>
   <circle cx="200" cy="700" r="${110 + Math.sin(t) * 4}" fill="#FFD27A" opacity=".9"/>
   <g><rect x="120" y="760" width="840" height="560" fill="#D9B98A"/>
     <path d="M380 760 L540 600 L700 760 Z" fill="#CFAE7E"/>
     <rect x="130" y="700" width="120" height="620" fill="#CFAE7E"/><rect x="830" y="700" width="120" height="620" fill="#CFAE7E"/>
     ${[150, 190, 230, 850, 890, 930].map(x => pin(x, 700, 70)).join('')}${[300, 380, 460, 620, 700, 780].map(x => pin(x, 760, 50)).join('')}${pin(540, 600, 90)}
     ${Array.from({ length: 30 }, (_, i) => `<rect x="${250 + i * 19}" y="752" width="10" height="16" fill="#CFAE7E"/>`).join('')}
     ${arch(440, 1000, 200, 320)}${arch(470, 1040, 140, 280).replace('#8E6B45', '#5C4330')}
     <circle cx="540" cy="880" r="70" fill="#B8956A"/><circle cx="540" cy="880" r="54" fill="#6E5338"/>${Array.from({ length: 8 }, (_, i) => `<line x1="540" y1="880" x2="${540 + Math.cos(i * Math.PI / 4) * 54}" y2="${880 + Math.sin(i * Math.PI / 4) * 54}" stroke="#B8956A" stroke-width="6"/>`).join('')}
     ${[170, 320, 700, 870].map(x => `<path d="M${x} 1080 L${x} 960 Q ${x + 25} 920 ${x + 50} 960 L${x + 50} 1080 Z" fill="#6E5338"/>`).join('')}</g>
   <rect y="1320" width="1080" height="600" fill="#C7B596"/>${Array.from({ length: 10 }, (_, i) => `<line x1="${i * 120}" y1="1320" x2="${i * 120 - 200}" y2="1920" stroke="#B3A07F" stroke-width="4"/>`).join('')}
   ${[0, 1, 2, 3].map(swallow).join('')}`,
   `<linearGradient id="bsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6A35C"/><stop offset=".55" stop-color="#F9D29A"/><stop offset="1" stop-color="#FCEBD0"/></linearGradient>`);
}
