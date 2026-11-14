// Backgrounds (2026-11-14 19:00 Grammy prize video): karaokeSVG (Bairro Alto style karaoke bar with lyrics screen, stage mic and sweeping coloured spots), joaninaSVG (Coimbra baroque library with gilded shelves, ladders and floating dust), louleSVG (Loulé-style market hall with Moorish domes and arches at dusk, palms and swaying lanterns)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function karaokeSVG(t = 0) {
  const spots = ['#FF3D8B', '#3DD6FF', '#FFD45C', '#8B5CFF'].map((c, i) => {
    const a = Math.sin(t * 1.3 + i * 1.7) * 22;
    return `<g transform="translate(${160 + i * 250} 0) rotate(${a})" opacity=".28"><path d="M-20 0 L20 0 L170 1500 L-170 1500 Z" fill="${c}"/></g>`;
  }).join('');
  const bulbs = Array.from({ length: 18 }, (_, i) => `<circle cx="${40 + i * 60}" cy="${440 + Math.sin(i * 0.9) * 14}" r="11" fill="${(Math.floor(t * 4) + i) % 3 === 0 ? '#FFF2A8' : '#C9A24A'}"/>`).join('');
  const prog = (t * 0.22) % 1;
  const tables = [140, 940].map(x => `<g transform="translate(${x} 1330)"><ellipse cx="0" cy="0" rx="110" ry="26" fill="#3A1E2E"/><rect x="-8" y="0" width="16" height="140" fill="#2A1420"/><rect x="-30" y="-46" width="16" height="46" rx="4" fill="#E8A93A" opacity=".9"/><rect x="18" y="-38" width="14" height="38" rx="4" fill="#9BE0C4" opacity=".9"/></g>`).join('');
  return W(`<rect width="1080" height="1920" fill="url(#kbg)"/>
   <rect y="0" width="1080" height="420" fill="#1A0F24"/>
   ${bulbs}
   <g transform="translate(540 700)"><rect x="-330" y="-200" width="660" height="380" rx="18" fill="#0C0C14" stroke="#555" stroke-width="10"/>
     <rect x="-306" y="-176" width="612" height="332" rx="8" fill="url(#scr)"/>
     <text x="0" y="-40" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="52" fill="#fff">♪ Lá lá lá, lá lá ♪</text>
     <rect x="-250" y="10" width="500" height="16" rx="8" fill="#ffffff44"/><rect x="-250" y="10" width="${500 * prog}" height="16" rx="8" fill="#FF3D8B"/>
     <text x="0" y="100" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="40" fill="#FFD45C">KARAOKE</text></g>
   ${spots}
   <rect y="1000" width="1080" height="920" fill="#2B1630"/>
   <path d="M0 1000 L1080 1000 L1080 1040 L0 1040 Z" fill="#5A2A50"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 90}" y="1040" width="88" height="880" fill="${i % 2 ? '#331a38' : '#2B1630'}"/>`).join('')}
   <g transform="translate(540 1000)"><rect x="-6" y="0" width="12" height="190" fill="#AAA"/><ellipse cx="0" cy="190" rx="60" ry="14" fill="#777"/><rect x="-18" y="-50" width="36" height="56" rx="16" fill="#333"/></g>
   ${tables}`,
   `<linearGradient id="kbg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A1240"/><stop offset="1" stop-color="#4A1E4A"/></linearGradient>
    <linearGradient id="scr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1B3A8A"/><stop offset="1" stop-color="#6A1E8A"/></linearGradient>`);
}

function joaninaSVG(t = 0) {
  const shelf = (x, w) => {
    let books = '';
    for (let r = 0; r < 7; r++) for (let b = 0; b < Math.floor(w / 26); b++) {
      const c = ['#7A2E1E', '#5A3A1A', '#8A5A2A', '#3A2A1A', '#6A4A22'][(b * 7 + r * 3) % 5];
      books += `<rect x="${x + 10 + b * 26}" y="${470 + r * 110}" width="22" height="${88 - (b % 3) * 8}" fill="${c}"/>`;
    }
    const lines = Array.from({ length: 8 }, (_, r) => `<rect x="${x}" y="${460 + r * 110}" width="${w}" height="12" fill="#D9A93A"/>`).join('');
    return `<rect x="${x - 12}" y="440" width="${w + 24}" height="800" fill="#1E3A2A"/>${books}${lines}<rect x="${x - 12}" y="440" width="12" height="800" fill="#E8B84A"/><rect x="${x + w}" y="440" width="12" height="800" fill="#E8B84A"/>`;
  };
  const dust = Array.from({ length: 26 }, (_, i) => {
    const y = 1200 - ((t * 30 + i * 47) % 800); const x = 200 + (i * 131) % 700 + Math.sin(t + i) * 20;
    return `<circle cx="${x}" cy="${y}" r="${2 + (i % 3)}" fill="#FFF3C0" opacity=".55"/>`;
  }).join('');
  return W(`<rect width="1080" height="1920" fill="#2A1A10"/>
   <path d="M0 0 L1080 0 L1080 420 Q540 330 0 420 Z" fill="#6B3E1E"/>
   <path d="M120 420 Q540 360 960 420" stroke="#E8B84A" stroke-width="16" fill="none"/>
   <ellipse cx="540" cy="200" rx="300" ry="110" fill="#8A5A3A" opacity=".5"/>
   ${shelf(40, 300)}${shelf(740, 300)}
   <g transform="translate(540 460)"><path d="M-170 780 L-170 140 Q0 -40 170 140 L170 780 Z" fill="#E8B84A"/><path d="M-140 780 L-140 160 Q0 10 140 160 L140 780 Z" fill="url(#door)"/>
     <circle cx="0" cy="90" r="40" fill="#C8202C"/><path d="M-30 90 L30 90 M0 60 L0 120" stroke="#E8B84A" stroke-width="8"/></g>
   <g transform="translate(${330 + Math.sin(t * 0.8) * 6} 520) rotate(8)"><rect x="0" y="0" width="10" height="720" fill="#8A5A2A"/><rect x="60" y="0" width="10" height="720" fill="#8A5A2A"/>${Array.from({ length: 9 }, (_, i) => `<rect x="0" y="${30 + i * 80}" width="70" height="8" fill="#8A5A2A"/>`).join('')}</g>
   ${dust}
   <rect y="1240" width="1080" height="680" fill="url(#floor)"/>
   ${Array.from({ length: 9 }, (_, i) => `<line x1="${i * 135}" y1="1240" x2="${540 + (i * 135 - 540) * 2.4}" y2="1920" stroke="#3A2414" stroke-width="4"/>`).join('')}
   <g transform="translate(540 1300)"><rect x="-260" y="0" width="520" height="40" rx="8" fill="#5A2E1A"/><rect x="-60" y="-40" width="120" height="40" rx="4" fill="#F3E6C8"/><line x1="0" y1="-40" x2="0" y2="0" stroke="#B89A6A" stroke-width="3"/></g>`,
   `<linearGradient id="door" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE8A8"/><stop offset="1" stop-color="#C89A4A"/></linearGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6A4024"/><stop offset="1" stop-color="#4A2A16"/></linearGradient>`);
}

function louleSVG(t = 0) {
  const dome = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-70" y="0" width="140" height="120" fill="#E9B97A"/><path d="M-70 0 Q-70 -110 0 -130 Q70 -110 70 0 Z" fill="#C86A3A"/><rect x="-4" y="-170" width="8" height="44" fill="#7A3A1A"/><circle cy="-176" r="9" fill="#E8B84A"/></g>`;
  const arches = Array.from({ length: 6 }, (_, i) => `<g transform="translate(${130 + i * 165} 860)"><path d="M-60 260 L-60 60 Q-60 -10 0 -30 Q60 -10 60 60 L60 260 Z" fill="#3A2A3A"/><path d="M-60 60 Q-60 -10 0 -30 Q60 -10 60 60" stroke="#B85A2A" stroke-width="14" fill="none"/></g>`).join('');
  const lantern = (x, i) => { const a = Math.sin(t * 1.6 + i) * 8; return `<g transform="translate(${x} 700) rotate(${a})"><line x1="0" y1="0" x2="0" y2="60" stroke="#5A3A2A" stroke-width="3"/><rect x="-18" y="60" width="36" height="46" rx="8" fill="#FFC65A"/><rect x="-18" y="60" width="36" height="46" rx="8" fill="#FFF3B0" opacity="${0.4 + 0.3 * Math.sin(t * 5 + i)}"/></g>`; };
  const palm = (x, s, ph) => { const a = Math.sin(t * 0.9 + ph) * 4; return `<g transform="translate(${x} 1160) scale(${s})"><path d="M-10 0 Q-20 -200 10 -420 L24 -420 Q0 -200 12 0 Z" fill="#7A5A3A"/><g transform="translate(16 -420) rotate(${a})">${[-70, -35, 0, 35, 70, 110, -110].map(r => `<path d="M0 0 Q90 -30 170 40 Q90 -6 0 0 Z" fill="#3E8A4A" transform="rotate(${r})"/>`).join('')}</g></g>`; };
  return W(`<rect width="1080" height="1920" fill="url(#lsky)"/>
   <circle cx="860" cy="560" r="70" fill="#FFB27A" opacity=".8"/>
   <rect x="40" y="760" width="1000" height="420" fill="#F2C98A"/>
   <path d="M40 760 L1040 760 L1040 790 L40 790 Z" fill="#B85A2A"/>
   ${Array.from({ length: 25 }, (_, i) => `<rect x="${40 + i * 40}" y="738" width="22" height="26" fill="#B85A2A"/>`).join('')}
   ${dome(160, 640, 0.9)}${dome(920, 640, 0.9)}${dome(540, 610, 1.1)}
   ${arches}
   ${[200, 380, 700, 880].map(lantern).join('')}
   ${palm(30, 1.1, 0)}${palm(1060, 1.0, 1.4)}
   <rect y="1160" width="1080" height="760" fill="#E8DCC4"/>
   ${Array.from({ length: 14 }, (_, r) => `<path d="M0 ${1190 + r * 52} ${Array.from({ length: 14 }, (_, k) => `Q${k * 80 + 40} ${1170 + r * 52} ${k * 80 + 80} ${1190 + r * 52}`).join(' ')}" stroke="#2A2A2A" stroke-width="10" fill="none" opacity=".75"/>`).join('')}`,
   `<linearGradient id="lsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A3A7A"/><stop offset=".6" stop-color="#C86A7A"/><stop offset="1" stop-color="#FFB27A"/></linearGradient>`);
}
