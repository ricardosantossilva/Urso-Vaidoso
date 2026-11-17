// New backgrounds (2026-11-17 08:00 blackout rumour video):
// almourolSVG: Almourol-style castle on a river island at night, floodlights flickering on and off, moon, stars, ripples
// arquivoSVG: Torre do Tombo-style archive stacks with mobile shelving, year-labelled boxes 2016-2026, swinging lamp, drifting dust
// furnasSVG: Furnas (Azores) valley at sunrise with steaming hot springs, cozido pots in the ground, colourful houses, hydrangeas
const W3 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function almourolSVG(t = 0) {
  // flicker: lights on most of the time, short dark blinks
  const ph = (t * 1.7) % 3.1;
  const on = !(ph > 1.2 && ph < 1.45) && !(ph > 2.3 && ph < 2.42);
  let stars = '';
  for (let i = 0; i < 60; i++) { const x = (i * 197) % 1080, y = 60 + (i * 89) % 720; const tw = 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i)); stars += `<circle cx="${x}" cy="${y}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${tw}"/>`; }
  const lit = on ? '#F3E3B5' : '#3B4560', win = on ? '#FFD45C' : '#1B2235';
  let rip = '';
  for (let i = 0; i < 14; i++) { const y = 1180 + i * 22, x = 120 + ((i * 173 + t * 40) % 840); rip += `<rect x="${x}" y="${y}" width="${60 + (i % 4) * 25}" height="4" rx="2" fill="${on ? '#E8C873' : '#5A6B90'}" opacity="${0.35 + 0.3 * Math.sin(t * 3 + i)}"/>`; }
  return W3(`<rect width="1080" height="1920" fill="url(#ask)"/>${stars}
   <circle cx="860" cy="560" r="70" fill="#F4F1DE"/><circle cx="885" cy="545" r="62" fill="#1A2440" opacity=".25"/>
   <path d="M0 960 Q 200 900 380 950 T 760 930 T 1080 950 L1080 1100 L0 1100 Z" fill="#1E2B3D"/>
   <rect y="1100" width="1080" height="820" fill="url(#ariv)"/>${rip}
   <ellipse cx="540" cy="1110" rx="330" ry="60" fill="#2A3424"/>
   <path d="M260 1100 Q 330 1000 420 990 L 680 990 Q 760 1000 820 1100 Z" fill="#3A4630"/>
   ${on ? '<path d="M300 1100 L 420 700 L 660 700 L 780 1100 Z" fill="#FFE9A8" opacity=".08"/>' : ''}
   <g fill="${lit}">
     <rect x="360" y="840" width="360" height="160"/>
     ${[360, 420, 480, 540, 600, 660].map(x => `<rect x="${x}" y="822" width="34" height="22"/>`).join('')}
     <rect x="470" y="660" width="140" height="190"/>${[470, 520, 570].map(x => `<rect x="${x}" y="640" width="30" height="22"/>`).join('')}
     <rect x="340" y="800" width="60" height="200"/><rect x="680" y="800" width="60" height="200"/>
     ${[340, 370, 680, 710].map(x => `<rect x="${x}" y="784" width="24" height="18"/>`).join('')}
   </g>
   <rect x="528" y="720" width="24" height="44" rx="12" fill="${win}"/><rect x="420" y="890" width="20" height="36" rx="10" fill="${win}"/><rect x="640" y="890" width="20" height="36" rx="10" fill="${win}"/>
   <rect x="536" y="590" width="6" height="52" fill="#20283A"/><path d="M542 592 q 30 ${6 + Math.sin(t * 4) * 6} 50 0 l0 22 q -20 ${6 + Math.sin(t * 4 + 1) * 6} -50 0 Z" fill="#C8202C"/>
   <rect y="1700" width="1080" height="220" fill="#101828"/><path d="M0 1700 Q 300 1660 600 1690 T 1080 1680 L1080 1700 Z" fill="#101828"/>`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1430"/><stop offset="1" stop-color="#26355E"/></linearGradient>
    <linearGradient id="ariv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1F2E50"/><stop offset="1" stop-color="#0E1730"/></linearGradient>`);
}

function arquivoSVG(t = 0) {
  const cols = ['#C9A46A', '#B88C52', '#D6B47A', '#A97D47'];
  const shelf = (x0, w, yr0, off) => {
    let g = `<rect x="${x0}" y="420" width="${w}" height="1000" fill="#8A97A8"/><rect x="${x0 + 10}" y="430" width="${w - 20}" height="980" fill="#E9EDF2"/>`;
    for (let r = 0; r < 5; r++) {
      const y = 450 + r * 190; g += `<rect x="${x0 + 10}" y="${y + 160}" width="${w - 20}" height="14" fill="#8A97A8"/>`;
      for (let b = 0; b < 3; b++) { const bx = x0 + 24 + b * ((w - 40) / 3), bw = (w - 40) / 3 - 10; const yr = yr0 + ((r * 3 + b + off) % 11);
        g += `<rect x="${bx}" y="${y + 30}" width="${bw}" height="130" rx="4" fill="${cols[(r + b + off) % 4]}"/><rect x="${bx + bw / 2 - 36}" y="${y + 70}" width="72" height="40" rx="4" fill="#FBF5EA"/><text x="${bx + bw / 2}" y="${y + 100}" font-family="Inter,sans-serif" font-weight="800" font-size="24" text-anchor="middle" fill="#0A1F3C">${yr}</text>`; }
    }
    return g;
  };
  const slide = Math.sin(t * 0.8) * 30;
  const sw = Math.sin(t * 2) * 8;
  let dust = '';
  for (let i = 0; i < 26; i++) { const x = (i * 131 + t * 12) % 1080, y = 420 + ((i * 97 + t * 18 * (1 + i % 3)) % 900); dust += `<circle cx="${x}" cy="${y}" r="${2 + i % 3}" fill="#FFF3C8" opacity=".55"/>`; }
  return W3(`<rect width="1080" height="1920" fill="#D9D2C3"/>
   <rect width="1080" height="400" fill="#BFB6A4"/>${[120, 400, 680, 960].map(x => `<rect x="${x - 40}" y="380" width="80" height="16" fill="#9C927E"/>`).join('')}
   <g transform="translate(${slide} 0)">${shelf(30, 330, 2016, 0)}</g>${shelf(380, 330, 2016, 4)}<g transform="translate(${-slide} 0)">${shelf(730, 330, 2016, 7)}</g>
   ${[195, 545, 895].map(x => `<circle cx="${x}" cy="1390" r="26" fill="#5A6B80"/><rect x="${x - 4}" y="1366" width="8" height="48" fill="#C8202C"/>`).join('')}
   <rect y="1420" width="1080" height="500" fill="#9C8F78"/>${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 140}" y="1420" width="4" height="500" fill="#8A7E68"/>`).join('')}
   <rect x="0" y="1520" width="1080" height="8" fill="#C9BFA9"/><rect x="0" y="1560" width="1080" height="8" fill="#C9BFA9"/>
   <g transform="translate(540 0) rotate(${sw})"><rect x="-2" y="0" width="4" height="420" fill="#333"/><path d="M-70 470 Q 0 390 70 470 Z" fill="#2E5A3A"/><ellipse cx="0" cy="472" rx="70" ry="10" fill="#FFE9A8"/></g>
   <path d="M${470} 480 L ${610} 480 L ${760 + sw * 6} 1420 L ${320 + sw * 6} 1420 Z" fill="#FFE9A8" opacity=".14"/>${dust}`);
}

function furnasSVG(t = 0) {
  const steam = (x, y, s, k) => { let g = ''; for (let i = 0; i < 5; i++) { const p = ((t * 0.35 + i / 5 + k) % 1); g += `<circle cx="${x + Math.sin(p * 6 + i) * 30 * s}" cy="${y - p * 360 * s}" r="${(30 + p * 70) * s}" fill="#FFFFFF" opacity="${0.55 * (1 - p)}"/>`; } return g; };
  const house = (x, y, c, w = 130) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="110" fill="${c}"/><rect width="${w}" height="12" y="0" fill="#3B3B3B"/><path d="M-8 0 L ${w / 2} -50 L ${w + 8} 0 Z" fill="#B65A3A"/><rect x="${w / 2 - 16}" y="50" width="32" height="60" fill="#5A3A28"/><rect x="14" y="30" width="26" height="30" fill="#DDEBF7"/><rect x="${w - 40}" y="30" width="26" height="30" fill="#DDEBF7"/></g>`;
  const hyd = (x, y, c) => `<g transform="translate(${x} ${y + Math.sin(t * 2 + x) * 3})">${[[-20, 0], [20, 0], [0, -18], [0, 14], [-10, -6], [12, -8]].map(([a, b]) => `<circle cx="${a}" cy="${b}" r="18" fill="${c}"/>`).join('')}</g>`;
  const sunY = 760 - Math.min(1, t / 40) * 60;
  return W3(`<rect width="1080" height="1920" fill="url(#fsk)"/>
   <circle cx="760" cy="${sunY}" r="90" fill="#FFD27A"/><circle cx="760" cy="${sunY}" r="140" fill="#FFD27A" opacity=".25"/>
   <path d="M0 820 Q 180 640 380 760 Q 560 600 760 740 Q 920 640 1080 760 L1080 1080 L0 1080 Z" fill="#3F7A45"/>
   <path d="M0 900 Q 260 800 520 880 T 1080 870 L1080 1100 L0 1100 Z" fill="#4F9150"/>
   ${house(120, 930, '#F3F0E8')}${house(300, 950, '#F2C14E', 120)}${house(470, 930, '#F3F0E8', 140)}${house(660, 955, '#7FB3D5', 120)}${house(830, 935, '#F3F0E8', 130)}
   <rect x="560" y="820" width="30" height="120" fill="#F3F0E8"/><path d="M552 820 L575 780 L598 820 Z" fill="#3B3B3B"/>
   <rect y="1080" width="1080" height="840" fill="#B8A27A"/>
   <ellipse cx="300" cy="1250" rx="200" ry="50" fill="#CBB98F"/><ellipse cx="300" cy="1250" rx="120" ry="28" fill="#8FB5B0"/>
   ${[[650, 1210], [790, 1240], [930, 1220]].map(([x, y]) => `<g><ellipse cx="${x}" cy="${y}" rx="48" ry="16" fill="#6B5A42"/><rect x="${x - 6}" y="${y - 30}" width="12" height="30" fill="#7A4A2A"/><rect x="${x - 26}" y="${y - 44}" width="52" height="16" rx="4" fill="#E6E0D0"/></g>`).join('')}
   ${steam(300, 1230, 1.1, 0)}${steam(650, 1190, 0.7, .3)}${steam(790, 1220, 0.7, .6)}${steam(930, 1200, 0.7, .15)}
   ${hyd(60, 1110, '#6F8FE0')}${hyd(150, 1130, '#A07BE0')}${hyd(980, 1110, '#6F8FE0')}${hyd(1040, 1140, '#E07BB8')}${hyd(520, 1120, '#8FA8F0')}
   <rect y="1600" width="1080" height="320" fill="#A08B64"/>`,
   `<linearGradient id="fsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B78C"/><stop offset=".55" stop-color="#FCE2B8"/><stop offset="1" stop-color="#E9F4F8"/></linearGradient>`);
}
