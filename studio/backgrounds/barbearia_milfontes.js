// New backgrounds (2026-11-25 19:00 O Urso responde #6 Parte 2):
// barbeariaSVG: old Lisbon barbershop with a spinning red-white-blue barber pole, big mirror, chrome barber chairs, checkered floor and a price board
// milfontesSVG: Vila Nova de Milfontes-style Mira river estuary at sunset with a long low bridge, white houses, a small fort, sandbank, bobbing boats and gulls
// (reuses salaSVG from cinema_pipocas_guarda.js for the recap)
const W2 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function barbeariaSVG(t = 0) {
  const off = (t * 60) % 60;
  let floor = '';
  for (let r = 0; r < 8; r++) for (let c = 0; c < 10; c++) if ((r + c) % 2 === 0) floor += `<rect x="${c * 108}" y="${1300 + r * 80}" width="108" height="80" fill="#2A2A2E"/>`;
  let stripes = '';
  for (let i = -2; i < 12; i++) { const y = 560 + i * 60 + off; stripes += `<path d="M0 ${y} L70 ${y - 40} L70 ${y - 10} L0 ${y + 30} Z" fill="${i % 2 ? '#C8202C' : '#1F4FA0'}"/>`; }
  const chair = x => `<g transform="translate(${x} 1150)"><rect x="-90" y="-150" width="180" height="170" rx="30" fill="#7A1E24"/><rect x="-110" y="10" width="220" height="40" rx="14" fill="#C9CED6"/><rect x="-14" y="50" width="28" height="120" fill="#AEB4BD"/><ellipse cx="0" cy="175" rx="90" ry="18" fill="#8E949C"/></g>`;
  const sw = Math.sin(t * 1.6) * 6;
  return W2(`<rect width="1080" height="1920" fill="#E8DCC4"/>
  <rect x="0" y="0" width="1080" height="420" fill="#D3C3A3"/>
  ${[0,1,2,3,4,5,6,7,8,9].map(i=>`<rect x="${i*108}" y="980" width="108" height="320" fill="${i%2?'#2E7D6E':'#3A9584'}"/>`).join('')}
  <rect x="0" y="1300" width="1080" height="620" fill="#F2EEE6"/>${floor}
  <rect x="180" y="420" width="720" height="520" rx="16" fill="#8C6A3E"/><rect x="200" y="440" width="680" height="480" rx="10" fill="#BFD6DE"/>
  <path d="M260 460 L420 460 L300 900 L220 900 Z" fill="#fff" opacity=".35"/><path d="M560 460 L620 460 L520 900 L470 900 Z" fill="#fff" opacity=".25"/>
  <g transform="translate(960 540)"><rect x="-6" y="-60" width="82" height="30" rx="12" fill="#C9CED6"/><svg x="0" y="-30" width="70" height="380"><rect width="70" height="380" fill="#fff"/>${stripes}</svg><rect x="0" y="-30" width="70" height="380" fill="none" stroke="#AEB4BD" stroke-width="6"/><rect x="-6" y="350" width="82" height="30" rx="12" fill="#C9CED6"/></g>
  <g transform="translate(80 470) rotate(${sw} 0 -40)"><line x1="0" y1="-60" x2="0" y2="0" stroke="#5A4630" stroke-width="4"/><rect x="-62" y="0" width="124" height="190" rx="10" fill="#1E2B24"/><text x="0" y="40" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="26" fill="#F4E9C8">PREÇOS</text><text x="0" y="90" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700" font-size="24" fill="#F4E9C8">Corte</text><text x="0" y="130" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700" font-size="24" fill="#F4E9C8">Barba</text><text x="0" y="170" text-anchor="middle" font-family="Inter,sans-serif" font-weight="700" font-size="24" fill="#F4E9C8">Bigode</text></g>
  <rect x="0" y="960" width="1080" height="24" fill="#6B4A2E"/>
  ${chair(-60)}${chair(1140)}
  <g opacity="${0.5+0.5*Math.sin(t*4)}"><circle cx="540" cy="80" r="40" fill="#FFF4C8"/></g><line x1="540" y1="0" x2="540" y2="40" stroke="#5A4630" stroke-width="6"/>`);
}
function milfontesSVG(t = 0) {
  let houses = '';
  for (let i = 0; i < 12; i++) { const x = 20 + i * 88, h = 70 + (i * 37) % 60; houses += `<rect x="${x}" y="${900 - h}" width="76" height="${h}" fill="#FBF8F1"/><rect x="${x}" y="${900 - h}" width="76" height="12" fill="${i%3?'#2A62B8':'#E0A537'}"/><rect x="${x + 26}" y="${900 - h + 30}" width="20" height="24" fill="${(Math.floor(t*0.7)+i)%5===0?'#FFD45C':'#5B7A99'}"/>`; }
  let waves = '';
  for (let i = 0; i < 9; i++) { const y = 1120 + i * 90, ph = t * 1.2 + i; waves += `<path d="M0 ${y} ${Array.from({length:12},(_,k)=>`Q ${k*90+45} ${y + Math.sin(ph+k)*12} ${(k+1)*90} ${y}`).join(' ')}" stroke="#FFC88A" stroke-width="5" fill="none" opacity="${0.35 - i*0.03}"/>`; }
  const boat = (x, y, c, p) => `<g transform="translate(${x} ${y + Math.sin(t * 2 + p) * 8}) rotate(${Math.sin(t * 1.5 + p) * 3})"><path d="M-70 0 L70 0 L50 34 L-50 34 Z" fill="${c}"/><rect x="-4" y="-90" width="8" height="90" fill="#5A4630"/><path d="M4 -86 L54 -10 L4 -10 Z" fill="#FBF8F1"/></g>`;
  const gull = (x, y, p) => { const f = Math.sin(t * 6 + p) * 14; return `<path d="M${x - 30} ${y + f} Q ${x - 14} ${y - 10} ${x} ${y} Q ${x + 14} ${y - 10} ${x + 30} ${y + f}" stroke="#2B2B33" stroke-width="5" fill="none"/>`; };
  return W2(`<rect width="1080" height="1920" fill="url(#sky)"/>
  <circle cx="780" cy="${700 + Math.sin(t * 0.3) * 6}" r="110" fill="#FFE1A0" opacity=".95"/>
  <path d="M0 860 Q 300 820 560 850 T 1080 830 L1080 900 L0 900 Z" fill="#B07A5A"/>
  ${houses}
  <g transform="translate(80 760)"><rect x="0" y="0" width="200" height="140" fill="#E8D9B8"/><path d="M0 0 h20 v-26 h20 v26 h20 v-26 h20 v26 h20 v-26 h20 v26 h20 v-26 h20 v26 h20 v-26 h20 v26" fill="#E8D9B8"/></g>
  <rect x="0" y="900" width="1080" height="1020" fill="url(#river)"/>
  <rect x="0" y="960" width="1080" height="26" fill="#C8B9A3"/>
  ${Array.from({length:14},(_,i)=>`<rect x="${10 + i * 78}" y="986" width="16" height="70" fill="#A8977F"/>`).join('')}
  <path d="M600 1500 Q 840 1440 1080 1470 L1080 1560 Q 840 1540 600 1500 Z" fill="#F0D7A6"/>
  ${waves}
  ${boat(260 + Math.sin(t*0.2)*20, 1230, '#C8202C', 0)}${boat(840, 1340, '#1F4FA0', 2)}
  ${gull(200 + (t * 40) % 900, 520, 0)}${gull(420 + (t * 30) % 700, 600, 1.5)}`,
  `<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4B3A78"/><stop offset=".45" stop-color="#E77F6A"/><stop offset="1" stop-color="#FFC07A"/></linearGradient>
   <linearGradient id="river" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E9926E"/><stop offset="1" stop-color="#2D4F78"/></linearGradient>`);
}
