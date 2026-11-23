// New backgrounds (2026-11-23 19:00, O Urso responde #4 Parte 2):
// oticaSVG: Lisbon Baixa optician shop (ótica) at night with a big glowing window, a giant gold monocle on a turning display stand, rows of glasses, a blinking 'ÓTICA' sign and a striped awning
// mafraSVG: Mafra-style baroque palace-convent facade at dusk with two bell towers and swinging bells, central dome, long stone front, lamp posts and flying pigeons
const W2 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function oticaSVG(t = 0) {
  const spin = Math.cos(t * 1.4);
  const blink = (Math.floor(t * 2) % 4) ? 1 : 0.35;
  let glasses = '';
  for (let r = 0; r < 2; r++) for (let i = 0; i < 4; i++) {
    const x = 170 + i * 120 + (r ? 520 : 0), y = 760 + (i % 2) * 70;
    glasses += `<g transform="translate(${x} ${y})"><circle cx="-22" cy="0" r="18" fill="none" stroke="${['#0B2343','#C8202C','#2E6B5A','#7A2E3A'][i]}" stroke-width="6"/><circle cx="22" cy="0" r="18" fill="none" stroke="${['#0B2343','#C8202C','#2E6B5A','#7A2E3A'][i]}" stroke-width="6"/><line x1="-4" y1="0" x2="4" y2="0" stroke="#333" stroke-width="5"/></g>`;
  }
  const sparks = Array.from({ length: 6 }, (_, i) => { const p = (t * 0.5 + i / 6) % 1; return `<circle cx="${540 + Math.cos(i * 2 + t) * 150}" cy="${640 - p * 160}" r="${6 * (1 - p)}" fill="#FFE9A8" opacity="${1 - p}"/>`; }).join('');
  return W2(`<rect width="1080" height="1920" fill="#14223A"/>
   <rect y="0" width="1080" height="380" fill="#1C2E4C"/>
   ${Array.from({ length: 5 }, (_, i) => `<rect x="${60 + i * 210}" y="40" width="120" height="150" rx="60" fill="#2A4168"/><rect x="${70 + i * 210}" y="60" width="100" height="120" rx="50" fill="${(i + Math.floor(t * 0.7)) % 3 ? '#F6C760' : '#30476E'}" opacity=".7"/>`).join('')}
   <rect x="40" y="380" width="1000" height="620" fill="#E8DCC6"/>
   <g>${Array.from({ length: 10 }, (_, i) => `<path d="M${40 + i * 100} 380 h100 l-10 70 h-80 Z" fill="${i % 2 ? '#FFFFFF' : '#2E6B5A'}"/>`).join('')}</g>
   <rect x="300" y="460" width="480" height="70" rx="12" fill="#0B2343"/><text x="540" y="512" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="54" fill="#FFD45C" opacity="${blink}">ÓTICA</text>
   <rect x="90" y="560" width="900" height="420" rx="8" fill="#FFF3D1"/><rect x="90" y="560" width="900" height="420" rx="8" fill="url(#g1)"/>
   ${glasses}
   <g transform="translate(540 650)"><g transform="scale(${spin} 1)"><circle r="70" fill="none" stroke="#D9A520" stroke-width="16"/><circle r="56" fill="#FFFFFF" opacity=".45"/></g><path d="M0 70 q30 60 0 120" stroke="#D9A520" stroke-width="6" fill="none"/></g>
   <rect x="470" y="840" width="140" height="20" rx="6" fill="#7A2E3A"/><rect x="525" y="800" width="30" height="45" fill="#7A2E3A"/>
   ${sparks}
   <rect y="1000" width="1080" height="920" fill="#C9BBA3"/>
   ${Array.from({ length: 12 }, (_, r) => Array.from({ length: 9 }, (_, i) => `<path d="M${(i * 130 + (r % 2) * 65) - 20} ${1030 + r * 75} q55 -24 110 0" stroke="#A89A80" stroke-width="5" fill="none"/>`).join('')).join('')}
   <g transform="translate(990 1000)"><rect x="-8" y="-420" width="16" height="420" fill="#2A2F36"/><circle cx="0" cy="-430" r="${28 + Math.sin(t * 3) * 3}" fill="#FFE9A8"/></g>`,
   `<linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".0"/><stop offset=".5" stop-color="#FFFFFF" stop-opacity=".35"/><stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/></linearGradient>`);
}

function mafraSVG(t = 0) {
  const b1 = Math.sin(t * 2.2) * 14, b2 = Math.sin(t * 2.2 + 1.5) * 14;
  const pig = Array.from({ length: 5 }, (_, i) => { const p = (t * 0.08 + i / 5) % 1; const x = -60 + p * 1200, y = 420 + Math.sin(p * 9 + i) * 40 + i * 25; const f = Math.sin(t * 12 + i) * 10; return `<path d="M${x - 18} ${y - f} Q${x} ${y + 6} ${x + 18} ${y - f}" stroke="#3A3F4A" stroke-width="5" fill="none"/>`; }).join('');
  const tower = (x, b) => `<g transform="translate(${x} 0)"><rect x="-80" y="470" width="160" height="560" fill="#E6D7B5"/><rect x="-90" y="460" width="180" height="20" fill="#CDBB94"/>
     <rect x="-46" y="520" width="92" height="120" rx="46" fill="#3A3226"/><g transform="translate(0 540) rotate(${b})"><line x1="0" y1="0" x2="0" y2="30" stroke="#5A4A2A" stroke-width="6"/><path d="M-30 90 Q-28 30 0 30 Q28 30 30 90 Z" fill="#C9962A"/></g>
     <path d="M-70 460 Q-70 400 0 380 Q70 400 70 460 Z" fill="#6E7B70"/><rect x="-6" y="330" width="12" height="55" fill="#6E7B70"/><circle cy="325" r="10" fill="#C9962A"/>
     ${Array.from({ length: 3 }, (_, r) => `<rect x="-40" y="${700 + r * 100}" width="80" height="60" rx="6" fill="#B9A67E"/>`).join('')}</g>`;
  return W2(`<rect width="1080" height="1920" fill="url(#sky)"/>
   <circle cx="${880 - t * 3}" cy="520" r="70" fill="#FFC56B" opacity=".85"/>
   ${pig}
   <rect x="0" y="640" width="1080" height="390" fill="#EADCBB"/>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="${30 + i * 120}" y="${700}" width="56" height="90" rx="6" fill="#B9A67E"/><rect x="${30 + i * 120}" y="${850}" width="56" height="90" rx="6" fill="#B9A67E"/>`).join('')}
   <g transform="translate(540 0)"><rect x="-150" y="560" width="300" height="470" fill="#F0E3C4"/><path d="M-110 560 Q0 380 110 560 Z" fill="#7C8A7E"/><rect x="-8" y="400" width="16" height="60" fill="#7C8A7E"/><circle cy="395" r="12" fill="#C9962A"/>
     <path d="M-180 640 L0 560 L180 640 Z" fill="#D9C79F"/>${[-90, 0, 90].map(x => `<rect x="${x - 22}" y="660" width="44" height="370" fill="#D2BE95"/>`).join('')}<rect x="-55" y="880" width="110" height="150" rx="55" fill="#4A3B2A"/></g>
   ${tower(150, b1)}${tower(930, b2)}
   <rect y="1030" width="1080" height="890" fill="#BFB2A0"/>
   ${Array.from({ length: 8 }, (_, i) => `<rect x="0" y="${1060 + i * 110}" width="1080" height="5" fill="#A99C88"/>`).join('')}
   ${[60, 1020].map(x => `<g transform="translate(${x} 1060)"><rect x="-7" y="-330" width="14" height="330" fill="#2A2F36"/><circle cx="0" cy="-340" r="${22 + Math.sin(t * 2.5 + x) * 3}" fill="#FFE9A8"/></g>`).join('')}`,
   `<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B4A7A"/><stop offset=".45" stop-color="#C67A6A"/><stop offset=".7" stop-color="#F2B07A"/></linearGradient>`);
}
