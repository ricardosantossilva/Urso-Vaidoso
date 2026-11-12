// New backgrounds (2026-11-12 13:00 bitcoin video): beatoSVG (startup hub in an old brick factory in Beato, Lisbon, with chimney, string lights and a big wall screen with a falling price line),
// ericeiraSVG (Ericeira surf coast: white-and-blue houses on the cliff, rolling waves with a surfer), bomjesusSVG (Bom Jesus do Monte zigzag baroque staircase in Braga with the church on top)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function beatoSVG(t = 0) {
  // brick hall interior; screen sits below the subtitle band (y 420..820)
  let bricks = '';
  for (let r = 0; r < 40; r++) for (let i = 0; i < 12; i++) bricks += `<rect x="${(i * 96) - (r % 2) * 48}" y="${r * 34}" width="92" height="30" fill="${['#A9533B', '#B65E44', '#9C4A35'][(r * 7 + i) % 3]}"/>`;
  // price line falling, drawn progressively
  const pts = []; for (let i = 0; i <= 40; i++) { const x = i * 17; const y = 60 + i * 5 + Math.sin(i * 1.3) * 22 + (i > 26 ? (i - 26) * 9 : 0); pts.push(`${x},${y}`); }
  const prog = Math.min(41, 8 + Math.floor((t * 9) % 60));
  const line = pts.slice(0, prog).join(' ');
  let lights = ''; for (let i = 0; i < 16; i++) { const x = i * 72 + 20, y = 110 + Math.sin(i * 0.6) * 30; lights += `<circle cx="${x}" cy="${y}" r="9" fill="#FFE29A" opacity="${0.6 + 0.4 * Math.sin(t * 3 + i)}"/>`; }
  return W(`<rect width="1080" height="1920" fill="#8E4532"/>${bricks}
   <rect y="0" width="1080" height="70" fill="#3A3A3A"/>${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${i * 200 + 40}" y="0" width="16" height="1300" fill="#2E2E2E" opacity=".55"/>`).join('')}
   <path d="M0 110 ${Array.from({ length: 16 }, (_, i) => `L ${i * 72 + 20} ${110 + Math.sin(i * 0.6) * 30}`).join(' ')} L1080 120" stroke="#222" stroke-width="3" fill="none"/>${lights}
   <g transform="translate(160 430)"><rect x="-20" y="-20" width="800" height="420" rx="16" fill="#1A1F29"/><rect width="760" height="380" fill="#0E1A2B"/>
     ${[0, 1, 2, 3].map(i => `<line x1="0" y1="${i * 95 + 40}" x2="760" y2="${i * 95 + 40}" stroke="#20324D" stroke-width="2"/>`).join('')}
     <polyline points="${line}" transform="translate(40 0)" fill="none" stroke="#FF4D5E" stroke-width="9" stroke-linejoin="round" stroke-linecap="round"/>
     <text x="700" y="60" text-anchor="end" font-family="Inter" font-weight="900" font-size="54" fill="#FF4D5E">₿ ▼</text></g>
   <g transform="translate(940 380)"><rect x="-40" y="0" width="80" height="560" fill="#9C4A35"/><rect x="-50" y="-10" width="100" height="24" fill="#6E3324"/>
     ${[0, 1, 2].map(i => { const k = ((t * 0.5 + i / 3) % 1); return `<circle cx="${Math.sin(k * 6) * 20}" cy="${-30 - k * 200}" r="${24 + k * 30}" fill="#D9D2C8" opacity="${0.5 * (1 - k)}"/>`; }).join('')}</g>
   <rect y="1240" width="1080" height="680" fill="#5B5F66"/><rect y="1240" width="1080" height="16" fill="#3E4248"/>
   ${Array.from({ length: 10 }, (_, i) => `<line x1="${i * 120}" y1="1256" x2="${i * 120 - 160}" y2="1920" stroke="#4F535A" stroke-width="4"/>`).join('')}
   <g transform="translate(80 1050)"><rect width="200" height="16" fill="#C9A57A"/><rect x="10" y="16" width="10" height="190" fill="#333"/><rect x="180" y="16" width="10" height="190" fill="#333"/><rect x="40" y="-90" width="120" height="90" rx="6" fill="#20242C"/><rect x="48" y="-82" width="104" height="70" fill="#3B6EA8"/></g>
   <g transform="translate(880 1100)"><rect x="-26" y="-140" width="52" height="140" rx="10" fill="#3F7D4A"/><ellipse cx="0" cy="-150" rx="60" ry="50" fill="#4E9A4B"/><rect x="-40" y="0" width="80" height="70" fill="#B9855E"/></g>`);
}
function ericeiraSVG(t = 0) {
  const house = (x, y, w, h, c) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" fill="#FAFAF5"/><rect y="${h - 22}" width="${w}" height="22" fill="${c}"/><rect x="0" y="0" width="${w}" height="10" fill="${c}"/><rect x="${w * 0.2}" y="${h * 0.3}" width="${w * 0.22}" height="${h * 0.3}" fill="${c}"/><rect x="${w * 0.58}" y="${h * 0.3}" width="${w * 0.22}" height="${h * 0.3}" fill="${c}"/><path d="M-6 0 L${w / 2} -${h * 0.35} L${w + 6} 0 Z" fill="#C46A45"/></g>`;
  const wave = (y, amp, ph, c) => `<path d="M0 ${y} ${Array.from({ length: 28 }, (_, i) => `Q ${i * 40 + 20} ${y - amp * Math.sin(t * 1.4 + i * 0.7 + ph) - amp} ${i * 40 + 40} ${y}`).join(' ')} L1080 1920 L0 1920 Z" fill="${c}"/>`;
  const sx = 200 + ((t * 70) % 760), sy = 1060 + Math.sin(t * 2) * 16;
  return W(`<rect width="1080" height="1920" fill="url(#esky)"/>
   <circle cx="860" cy="560" r="80" fill="#FFF3C4"/><circle cx="860" cy="560" r="140" fill="#FFF3C4" opacity=".25"/>
   ${[0, 1, 2].map(i => `<g transform="translate(${((t * 18 + i * 400) % 1300) - 150} ${600 + i * 60})" fill="#fff" opacity=".85"><ellipse rx="90" ry="26"/><ellipse cx="40" cy="-16" rx="50" ry="26"/></g>`).join('')}
   ${[0, 1].map(i => { const x = ((t * 60 + i * 500) % 1200) - 60; return `<path d="M${x} ${700 + i * 40} q 14 -14 28 0 q 14 -14 28 0" stroke="#2B3A55" stroke-width="5" fill="none"/>`; }).join('')}
   <path d="M0 760 L380 760 L470 860 L520 1000 L0 1000 Z" fill="#B8915E"/><path d="M0 1000 L520 1000 L560 1060 L0 1060 Z" fill="#8E6E45"/>
   ${house(20, 640, 110, 120, '#2E6DB4')}${house(140, 660, 90, 100, '#2E6DB4')}${house(240, 630, 120, 130, '#1F8A9E')}${house(30, 520, 130, 120, '#2E6DB4')}${house(180, 540, 100, 110, '#2E6DB4')}
   <rect x="300" y="470" width="40" height="160" fill="#FAFAF5"/><path d="M290 470 L320 420 L350 470 Z" fill="#C46A45"/>
   ${wave(1000, 18, 0, '#2E8DB8')}${wave(1070, 26, 1.5, '#1F78A4')}
   <g transform="translate(${sx} ${sy}) rotate(-8)"><ellipse rx="70" ry="12" fill="#FFD45C"/><rect x="-8" y="-70" width="16" height="60" rx="6" fill="#1B2430"/><circle cx="0" cy="-82" r="14" fill="#E8B48A"/><line x1="-6" y1="-56" x2="-40" y2="-80" stroke="#1B2430" stroke-width="8"/><line x1="6" y1="-56" x2="40" y2="-70" stroke="#1B2430" stroke-width="8"/></g>
   ${wave(1140, 22, 3, '#17689A')}
   ${Array.from({ length: 12 }, (_, i) => `<ellipse cx="${(i * 97 + t * 30) % 1080}" cy="${1160 + (i % 3) * 30}" rx="40" ry="6" fill="#fff" opacity=".5"/>`).join('')}
   <rect y="1300" width="1080" height="620" fill="#E8D3A6"/><path d="M0 1300 ${Array.from({ length: 28 }, (_, i) => `Q ${i * 40 + 20} ${1290 + 10 * Math.sin(t * 2 + i)} ${i * 40 + 40} 1300`).join(' ')} L1080 1330 L0 1330 Z" fill="#fff" opacity=".7"/>
   ${Array.from({ length: 26 }, (_, i) => `<circle cx="${(i * 131) % 1080}" cy="${1360 + (i * 59) % 540}" r="${3 + (i % 3)}" fill="#D2BB8A"/>`).join('')}
   <g transform="translate(980 1270)"><rect x="-8" y="-200" width="16" height="200" fill="#6B4A32"/><path d="M-10 -200 L-90 -170 L-10 -150 Z" fill="#E2365B"/></g>`,
   `<linearGradient id="esky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FCBEF"/><stop offset="1" stop-color="#FCE7C8"/></linearGradient>`);
}
function bomjesusSVG(t = 0) {
  // zigzag baroque stairs climbing a wooded hill to a twin-tower church, white walls with granite trim
  let stairs = '';
  for (let k = 0; k < 6; k++) {
    const y = 1240 - k * 105, dir = k % 2, x0 = dir ? 300 : 520, w = 260;
    stairs += `<g transform="translate(${x0} ${y})"><rect width="${w}" height="100" fill="#F4F1EA"/>${Array.from({ length: 6 }, (_, i) => `<rect x="${dir ? w - (i + 1) * 43 : i * 43}" y="${100 - (i + 1) * 16}" width="43" height="${(i + 1) * 16}" fill="#D9D3C5" stroke="#B9B2A3" stroke-width="2"/>`).join('')}<rect x="-8" y="-12" width="${w + 16}" height="14" fill="#7E7A72"/><rect x="${dir ? -16 : w}" y="-40" width="16" height="40" fill="#7E7A72"/><circle cx="${dir ? -8 : w + 8}" cy="-48" r="12" fill="#7E7A72"/></g>`;
  }
  const tree = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-10" y="0" width="20" height="90" fill="#5A3E2A"/><circle cx="0" cy="-20" r="70" fill="${c}"/><circle cx="-45" cy="10" r="50" fill="${c}"/><circle cx="45" cy="10" r="50" fill="${c}"/></g>`;
  const sway = Math.sin(t * 1.2) * 3;
  return W(`<rect width="1080" height="1920" fill="url(#bsky)"/>
   ${[0, 1].map(i => `<g transform="translate(${((t * 14 + i * 600) % 1300) - 150} ${130 + i * 80})" fill="#fff" opacity=".7"><ellipse rx="110" ry="26"/><ellipse cx="50" cy="-16" rx="60" ry="28"/></g>`).join('')}
   <path d="M0 900 Q 300 640 540 620 Q 800 640 1080 880 L1080 1920 L0 1920 Z" fill="#3F7A45"/>
   <g transform="translate(540 470)"><rect x="-150" y="0" width="300" height="200" fill="#F4F1EA"/><rect x="-150" y="0" width="300" height="12" fill="#8C877E"/>
     ${[-1, 1].map(s => `<rect x="${s * 150 - 50}" y="-140" width="100" height="340" fill="#F4F1EA" stroke="#8C877E" stroke-width="6"/><path d="M${s * 150 - 56} -140 Q ${s * 150} -230 ${s * 150 + 56} -140 Z" fill="#8C877E"/><rect x="${s * 150 - 6}" y="-260" width="12" height="40" fill="#8C877E"/><rect x="${s * 150 - 20}" y="-80" width="40" height="70" rx="20" fill="#4A5566"/>`).join('')}
     <path d="M-100 0 L0 -80 L100 0 Z" fill="#8C877E"/><rect x="-36" y="90" width="72" height="110" rx="36" fill="#4A5566"/><circle cx="0" cy="40" r="26" fill="#E7DCC4" stroke="#8C877E" stroke-width="5"/></g>
   ${tree(150, 820, 1.2, '#2F6B3A')}${tree(930, 820, 1.3, '#356F3E')}${tree(90, 1080, 1.4, '#2C6236')}${tree(1000, 1100, 1.4, '#2F6B3A')}
   <g transform="rotate(${sway} 540 1000)">${stairs}</g>
   <rect y="1340" width="1080" height="580" fill="#CFC8B8"/>${Array.from({ length: 9 }, (_, r) => Array.from({ length: 10 }, (_, i) => `<rect x="${i * 112 + (r % 2) * 56 - 40}" y="${1360 + r * 64}" width="104" height="56" rx="6" fill="${(r + i) % 2 ? '#C2BBAA' : '#D6CFBF'}"/>`).join('')).join('')}
   ${[0, 1, 2, 3, 4].map(i => { const k = (t * 0.25 + i / 5) % 1; return `<path d="M${100 + i * 200} ${1000 + k * 300} q 8 -10 16 0 q -8 10 -16 0" fill="#E2A33A" opacity="${1 - k}"/>`; }).join('')}`,
   `<linearGradient id="bsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FB4E6"/><stop offset="1" stop-color="#DDF0FA"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { beatoSVG, ericeiraSVG, bomjesusSVG };
