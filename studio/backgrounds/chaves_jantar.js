// New backgrounds (2026-11-28 19:00 O Urso responde #9 Parte 2):
// chavesSVG: Chaves-style Roman stone bridge with many low arches over the Tâmega at dusk, lanterns on the parapet, a castle keep on the hill, ripples and drifting clouds
// jantarSVG: dining room table at night with a laptop showing a glowing 'IRS · ANEXO B' form, a pig money box, a stack of receipts, a wall calendar 'MAIO', a swinging pendant lamp and a dark window with falling snow
// (also reuses atelierSVG from ponte_atelier_cristal.js for the recap)
const W2 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function chavesSVG(t = 0) {
  let arches = '';
  for (let i = 0; i < 9; i++) { const x = -20 + i * 130; arches += `<path d="M${x} 1180 L${x} 1110 Q ${x + 55} 1040 ${x + 110} 1110 L${x + 110} 1180 Z" fill="#1E2A3A"/>`; }
  let lamps = '';
  for (let i = 0; i < 7; i++) { const x = 70 + i * 160, f = .7 + .3 * Math.sin(t * 5 + i * 1.3); lamps += `<rect x="${x - 3}" y="960" width="6" height="60" fill="#2A2A2A"/><rect x="${x - 14}" y="935" width="28" height="30" rx="4" fill="#FFD27A" opacity="${f}"/><circle cx="${x}" cy="950" r="${40 * f}" fill="#FFD27A" opacity=".18"/>`; }
  let rip = ''; for (let i = 0; i < 16; i++) { const y = 1230 + i * 26, off = Math.sin(t * 1.4 + i * .8) * 40; rip += `<rect x="${(i * 173) % 900 + off}" y="${y}" width="${120 + (i % 4) * 30}" height="5" rx="2" fill="#FFC27A" opacity=".35"/>`; }
  const cx = (t * 18) % 1400 - 300;
  return W2(`<rect width="1080" height="1920" fill="url(#csk)"/>
   <g opacity=".85"><ellipse cx="${cx}" cy="560" rx="160" ry="34" fill="#F4B9A0"/><ellipse cx="${cx + 520}" cy="470" rx="120" ry="26" fill="#F7C9AE"/></g>
   <circle cx="820" cy="760" r="70" fill="#FFB36B" opacity=".9"/>
   <path d="M0 900 Q 300 720 620 820 Q 860 700 1080 780 L1080 1000 L0 1000 Z" fill="#3B3550"/>
   <g transform="translate(300 700)"><rect x="-55" y="0" width="110" height="140" fill="#6E6676"/>${[-45, -20, 5, 30].map(x => `<rect x="${x}" y="-18" width="16" height="20" fill="#6E6676"/>`).join('')}<rect x="-12" y="40" width="24" height="34" fill="#FFD27A" opacity="${.6 + .3 * Math.sin(t * 2)}"/></g>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="${520 + i * 60}" y="${850 - (i % 3) * 18}" width="44" height="60" fill="#E8DCC6"/><rect x="${532 + i * 60}" y="${866 - (i % 3) * 18}" width="18" height="18" fill="#FFC86B" opacity="${.5 + .5 * Math.sin(t * 2 + i)}"/>`).join('')}
   <rect x="0" y="1000" width="1080" height="110" fill="#8C7A64"/>
   <rect x="0" y="1000" width="1080" height="20" fill="#A8957C"/>
   ${arches}${lamps}
   <rect x="0" y="1180" width="1080" height="740" fill="url(#crv)"/>${rip}
   <rect x="0" y="1560" width="1080" height="360" fill="#2B3A2E"/>
   ${Array.from({ length: 10 }, (_, i) => `<path d="M${i * 115} 1560 q 20 -${40 + 20 * Math.sin(t * 2 + i)} 40 0" fill="#3E5A40"/>`).join('')}`,
    `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2C2A5A"/><stop offset=".55" stop-color="#9A5A7A"/><stop offset="1" stop-color="#F2A070"/></linearGradient>
     <linearGradient id="crv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6A4A6A"/><stop offset="1" stop-color="#1E2234"/></linearGradient>`);
}

function jantarSVG(t = 0) {
  const sw = Math.sin(t * 1.6) * 6;
  let snow = ''; for (let i = 0; i < 26; i++) { const x = 90 + (i * 61) % 380, y = 560 + ((t * 60 + i * 47) % 380); snow += `<circle cx="${x + Math.sin(t + i) * 8}" cy="${y}" r="${3 + i % 3}" fill="#fff" opacity=".85"/>`; }
  const glow = .75 + .25 * Math.sin(t * 3);
  return W2(`<rect width="1080" height="1920" fill="#3A4A5E"/>
   <rect x="0" y="0" width="1080" height="1100" fill="#4C5E74"/>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="${i * 120}" y="0" width="60" height="1100" fill="#52657C"/>`).join('')}
   <rect x="70" y="540" width="420" height="420" fill="#101A2E" stroke="#E8DCC6" stroke-width="18"/>${snow}
   <line x1="280" y1="540" x2="280" y2="960" stroke="#E8DCC6" stroke-width="10"/><line x1="70" y1="750" x2="490" y2="750" stroke="#E8DCC6" stroke-width="10"/>
   <g transform="translate(760 560)"><rect x="-130" y="0" width="260" height="300" fill="#FBF5EA"/><rect x="-130" y="0" width="260" height="70" fill="#C8202C"/><text x="0" y="50" font-family="Inter" font-weight="900" font-size="44" fill="#fff" text-anchor="middle">MAIO</text>
    ${Array.from({ length: 20 }, (_, i) => `<rect x="${-110 + (i % 5) * 46}" y="${90 + Math.floor(i / 5) * 48}" width="34" height="34" fill="${i === 17 ? '#FFD45C' : '#E3DACA'}"/>`).join('')}</g>
   <g transform="translate(540 0) rotate(${sw})"><line x1="0" y1="0" x2="0" y2="430" stroke="#222" stroke-width="5"/><path d="M-90 500 L-50 430 L50 430 L90 500 Z" fill="#2F7A6A"/><ellipse cx="0" cy="505" rx="90" ry="14" fill="#FFE9A8" opacity="${glow}"/></g>
   <rect x="0" y="1100" width="1080" height="820" fill="#5A3B2E"/>
   <rect x="0" y="1100" width="1080" height="30" fill="#7A5240"/>
   <g transform="translate(560 1020)"><path d="M-170 80 L170 80 L200 110 L-200 110 Z" fill="#9AA6B4"/><rect x="-160" y="-140" width="320" height="220" rx="12" fill="#1B2430"/><rect x="-146" y="-126" width="292" height="192" fill="#DDEBF7" opacity="${glow}"/>
    <rect x="-146" y="-126" width="292" height="40" fill="#0B2343"/><text x="0" y="-98" font-family="Inter" font-weight="900" font-size="24" fill="#fff" text-anchor="middle">IRS · ANEXO B</text>
    ${[0, 1, 2, 3].map(i => `<rect x="-126" y="${-70 + i * 32}" width="${200 - i * 30}" height="14" rx="6" fill="#9FB3C8"/>`).join('')}</g>
   <g transform="translate(900 ${960 + Math.sin(t * 2.2) * 4})"><ellipse cx="0" cy="0" rx="80" ry="60" fill="#F2A3B5"/><circle cx="62" cy="-6" r="24" fill="#F2A3B5"/><ellipse cx="74" cy="-4" rx="10" ry="8" fill="#E07A93"/><rect x="-20" y="-62" width="40" height="8" rx="4" fill="#6B2E3A"/><rect x="-50" y="50" width="16" height="24" fill="#E07A93"/><rect x="30" y="50" width="16" height="24" fill="#E07A93"/></g>
   ${Array.from({ length: 5 }, (_, i) => `<rect x="${130 + i * 6}" y="${1090 - i * 12}" width="170" height="10" fill="#FBF5EA" transform="rotate(${(i % 2 ? 4 : -3) + Math.sin(t + i) * 1.5} 215 1090)"/>`).join('')}`);
}
