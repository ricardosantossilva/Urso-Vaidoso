// New backgrounds: sinesSVG (Sines-style refinery and oil port at dusk), carroSVG (car interior at night on a wet road, wipers and fuel gauge), maraoSVG (Serra do Marão winding mountain road at sunset with a tunnel)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function sinesSVG(t = 0) {
  let tanks = '';
  [[120, 1010, 150], [330, 1030, 120], [820, 1000, 170]].forEach(([x, y, r]) => {
    tanks += `<g><rect x="${x - r / 2}" y="${y - 150}" width="${r}" height="150" fill="#D9DEE4"/><ellipse cx="${x}" cy="${y - 150}" rx="${r / 2}" ry="18" fill="#EEF1F4"/><rect x="${x - r / 2}" y="${y - 95}" width="${r}" height="10" fill="#C8202C" opacity=".7"/></g>`;
  });
  let pipes = '';
  for (let i = 0; i < 6; i++) pipes += `<rect x="${430 + i * 55}" y="${700 + (i % 3) * 30}" width="26" height="${300 - (i % 3) * 30}" fill="#5B6573"/><rect x="${426 + i * 55}" y="${690 + (i % 3) * 30}" width="34" height="14" fill="#47505C"/>`;
  const flame = (x, y, ph) => { const f = 1 + Math.sin(t * 11 + ph) * 0.15 + Math.sin(t * 17 + ph) * 0.08;
    return `<g transform="translate(${x} ${y}) scale(${f})"><path d="M0 0 C -28 -40, -10 -80, 0 -120 C 10 -80, 28 -40, 0 0 Z" fill="#FF9A2E"/><path d="M0 0 C -14 -25, -5 -55, 0 -75 C 5 -55, 14 -25, 0 0 Z" fill="#FFE27A"/></g>`; };
  let smoke = '';
  for (let i = 0; i < 5; i++) { const p = ((t * 0.12 + i / 5) % 1); smoke += `<circle cx="${640 + p * 160}" cy="${560 - p * 260}" r="${30 + p * 60}" fill="#8A7E8C" opacity="${0.35 * (1 - p)}"/>`; }
  const sx = -260 + ((t * 18) % 1500);
  let lights = '';
  for (let i = 0; i < 14; i++) lights += `<circle cx="${440 + (i % 7) * 50}" cy="${760 + Math.floor(i / 7) * 120}" r="5" fill="#FFE27A" opacity="${0.5 + 0.5 * Math.sin(t * 3 + i)}"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#sk)"/>
   <circle cx="200" cy="560" r="70" fill="#FFC56B" opacity=".9"/>
   ${smoke}
   <rect x="610" y="420" width="34" height="600" fill="#6B7380"/><rect x="760" y="520" width="26" height="500" fill="#6B7380"/>
   ${flame(627, 420, 0)}${flame(773, 520, 2)}
   ${pipes}${lights}${tanks}
   <rect y="1000" width="1080" height="920" fill="url(#sea)"/>
   ${[0, 1, 2, 3, 4].map(i => `<path d="M0 ${1080 + i * 90 + Math.sin(t * 2 + i) * 6} q 135 -14 270 0 t 270 0 t 270 0 t 270 0" stroke="#F7B98A" stroke-width="4" fill="none" opacity=".35"/>`).join('')}
   <g transform="translate(${sx} 1060)"><path d="M0 0 h 420 l -30 70 h -360 Z" fill="#2A3442"/><rect x="40" y="-30" width="300" height="30" fill="#C8202C"/><rect x="330" y="-80" width="70" height="80" fill="#EEF1F4"/><rect x="350" y="-110" width="16" height="30" fill="#2A3442"/></g>
   <rect x="880" y="900" width="200" height="22" fill="#47505C"/><rect x="900" y="922" width="14" height="140" fill="#47505C"/><rect x="1040" y="922" width="14" height="140" fill="#47505C"/>
   <rect y="1820" width="1080" height="100" fill="#1D2633"/>`,
   `<linearGradient id="sk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B2D5C"/><stop offset=".45" stop-color="#C2577A"/><stop offset=".55" stop-color="#F29C6B"/></linearGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3E4F7A"/><stop offset="1" stop-color="#18213A"/></linearGradient>`);
}

function carroSVG(t = 0) {
  let drops = '';
  for (let i = 0; i < 40; i++) { const x = (i * 97) % 1000 + 40, y = 420 + (i * 53) % 420; drops += `<circle cx="${x}" cy="${y}" r="${3 + i % 4}" fill="#BFD4EA" opacity=".55"/>`; }
  let lamps = '';
  for (let i = 0; i < 6; i++) { const p = ((t * 0.5 + i / 6) % 1); const s = 0.2 + p * 1.6; const x = 540 + (p * 460) * (i % 2 ? 1 : -1);
    lamps += `<g transform="translate(${x} ${640 - p * 160}) scale(${s})"><rect x="-3" y="0" width="6" height="140" fill="#3A4250"/><circle cx="0" cy="0" r="12" fill="#FFE6A0"/><circle cx="0" cy="0" r="40" fill="#FFE6A0" opacity=".18"/></g>`; }
  let lines = '';
  for (let i = 0; i < 6; i++) { const p = ((t * 0.9 + i / 6) % 1); lines += `<rect x="${536 - p * 10}" y="${660 + p * 220}" width="${8 + p * 20}" height="${10 + p * 50}" fill="#F2F2F2" opacity="${0.4 + p * 0.6}"/>`; }
  const wa = Math.sin(t * 3.2) * 55;
  const needle = -60 + Math.sin(t * 0.7) * 8;
  return W(`<rect width="1080" height="1920" fill="#0E1626"/>
   <rect x="0" y="380" width="1080" height="560" fill="url(#nt)"/>
   <path d="M0 940 L 520 650 L 560 650 L 1080 940 Z" fill="#232B38"/>
   ${lines}${lamps}
   <g transform="translate(1000 660)" opacity=".9"><rect x="-70" y="-60" width="140" height="110" rx="10" fill="#1E5FA8"/><text x="0" y="-18" font-family="Inter" font-weight="900" font-size="30" fill="#fff" text-anchor="middle">GASÓLEO</text><text x="0" y="28" font-family="Inter" font-weight="900" font-size="38" fill="#FFD45C" text-anchor="middle">2,03</text></g>
   ${drops}
   <g transform="translate(270 940) rotate(${-70 + wa})"><rect x="0" y="-5" width="430" height="10" rx="5" fill="#111"/></g>
   <g transform="translate(700 940) rotate(${-70 + wa})"><rect x="0" y="-5" width="400" height="10" rx="5" fill="#111"/></g>
   <path d="M0 380 L 1080 380 L 1080 420 Q 540 360 0 420 Z" fill="#1A2130"/>
   <rect x="0" y="380" width="70" height="600" fill="#1A2130"/><rect x="1010" y="380" width="70" height="600" fill="#1A2130"/>
   <path d="M0 940 Q 540 880 1080 940 L 1080 1920 L 0 1920 Z" fill="#232A36"/>
   <g transform="translate(540 1020)"><rect x="-250" y="-40" width="500" height="150" rx="40" fill="#151B26"/>
     <circle cx="-120" cy="40" r="60" fill="#0B0F17" stroke="#3FA9F5" stroke-width="4"/><text x="-120" y="55" font-family="Inter" font-weight="800" font-size="34" fill="#3FA9F5" text-anchor="middle">90</text>
     <circle cx="120" cy="40" r="60" fill="#0B0F17" stroke="#3FA9F5" stroke-width="4"/>
     <text x="80" y="88" font-family="Inter" font-weight="800" font-size="22" fill="#C8202C">E</text><text x="150" y="88" font-family="Inter" font-weight="800" font-size="22" fill="#3FA9F5">F</text>
     <g transform="translate(120 40) rotate(${needle})"><rect x="-3" y="-50" width="6" height="50" fill="#FF7A2E"/></g>
     <circle cx="120" cy="40" r="7" fill="#FF7A2E"/>
     <circle cx="120" cy="-10" r="${6 + Math.sin(t * 6) * 2}" fill="#FFB02E" opacity="${0.5 + 0.5 * Math.sin(t * 6)}"/></g>`,
   `<linearGradient id="nt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0D1830"/><stop offset="1" stop-color="#3B4A68"/></linearGradient>`);
}

function maraoSVG(t = 0) {
  let clouds = '';
  for (let i = 0; i < 4; i++) { const x = ((t * 14 + i * 300) % 1400) - 200; clouds += `<g transform="translate(${x} ${420 + i * 60})" opacity=".8"><ellipse rx="110" ry="30" fill="#FBD9C0"/><ellipse cx="60" cy="-16" rx="70" ry="26" fill="#FBD9C0"/></g>`; }
  const road = 'M -40 1500 C 300 1440, 700 1380, 640 1200 C 590 1060, 260 1080, 320 940 C 360 860, 620 860, 760 800';
  const car = (p, c) => { const x = -40 + p * 800, y = 1500 - p * 700; return `<g transform="translate(${x} ${y})"><rect x="-26" y="-16" width="52" height="24" rx="8" fill="${c}"/><circle cx="-14" cy="10" r="7" fill="#222"/><circle cx="14" cy="10" r="7" fill="#222"/></g>`; };
  let birds = '';
  for (let i = 0; i < 3; i++) { const x = (t * 40 + i * 140) % 1200 - 60; birds += `<path d="M${x} ${520 + i * 30} q 12 -12 24 0 q 12 -12 24 0" stroke="#3A2E3E" stroke-width="4" fill="none"/>`; }
  let heather = '';
  for (let i = 0; i < 14; i++) { const x = (i * 83) % 1080, y = 1580 + (i * 37) % 200, sw = Math.sin(t * 2 + i) * 4; heather += `<g transform="translate(${x} ${y}) rotate(${sw})"><circle r="16" fill="#B65FA6"/><circle cx="18" cy="6" r="12" fill="#C97BBA"/><circle cx="-16" cy="8" r="12" fill="#9C4E91"/></g>`; }
  return W(`<rect width="1080" height="1920" fill="url(#ms)"/>
   <circle cx="820" cy="640" r="90" fill="#FFE1A0"/>
   ${clouds}${birds}
   <path d="M0 900 L 220 700 L 380 820 L 560 640 L 760 800 L 920 680 L 1080 780 L 1080 1100 L 0 1100 Z" fill="#7A5C7E"/>
   <path d="M0 1050 L 260 860 L 480 980 L 700 840 L 900 960 L 1080 880 L 1080 1920 L 0 1920 Z" fill="#5E7A4E"/>
   <path d="M0 1300 Q 300 1150 540 1250 T 1080 1200 L 1080 1920 L 0 1920 Z" fill="#4D6A3F"/>
   <path d="${road}" stroke="#3B3B42" stroke-width="54" fill="none" stroke-linecap="round"/>
   <path d="${road}" stroke="#F4F1E6" stroke-width="4" fill="none" stroke-dasharray="22 20" stroke-dashoffset="${-t * 60}"/>
   <path d="M720 830 a 50 50 0 0 1 100 0 v 30 h -100 Z" fill="#2A2A30" stroke="#BDB5A8" stroke-width="10"/>
   ${car((t * 0.06) % 1, '#C8202C')}${car((t * 0.06 + 0.45) % 1, '#F4F1E6')}
   ${heather}`,
   `<linearGradient id="ms" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A4C8C"/><stop offset=".35" stop-color="#E8889A"/><stop offset=".55" stop-color="#FFC48A"/></linearGradient>`);
}
