// New backgrounds (2026-11-14 13:00 travel allowance video):
// aeroportoSVG: Lisbon-style airport departures hall with flip-board, big windows and a taking-off plane
// comportaSVG: Alentejo coast beach with straw parasols, wooden boardwalk, stilt fishing huts and rolling waves
// pontelimaSVG: Ponte de Lima medieval stone bridge over the Lima river at golden hour with plane trees
const W3 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function aeroportoSVG(t = 0) {
  const px = ((t * 120) % 1600) - 300, py = 760 - ((t * 120) % 1600) * 0.18;
  const plane = `<g transform="translate(${px} ${py}) rotate(-10)"><ellipse rx="120" ry="18" fill="#F4F7FA"/><path d="M-20 0 L-70 -70 L-40 -70 L30 0 Z" fill="#D9E1EA"/><path d="M-20 4 L-60 60 L-34 60 L24 4 Z" fill="#C9D3DE"/><path d="M-110 -4 L-130 -46 L-112 -46 L-90 -4 Z" fill="#2A6FB0"/><circle cx="96" cy="-4" r="6" fill="#2A3B52"/></g>`;
  const rows = ['FUNCHAL', 'PORTO', 'PARIS', 'LONDRES', 'MADRID', 'FARO'];
  const flip = Math.floor(t * 2) % rows.length;
  let board = '';
  rows.forEach((r, i) => {
    const y = 470 + i * 62, name = rows[(i + flip) % rows.length];
    const st = (i + flip) % 3 === 0 ? ['EMBARQUE', '#4CD07D'] : ['A HORAS', '#FFD45C'];
    board += `<rect x="150" y="${y}" width="780" height="52" fill="#141A22"/><text x="170" y="${y + 38}" font-family="Inter" font-weight="800" font-size="32" fill="#F3F3F3">${name}</text><text x="560" y="${y + 38}" font-family="Inter" font-weight="800" font-size="30" fill="#9FB3C8">1${3 + i}:${(i * 7) % 6}5</text><text x="700" y="${y + 38}" font-family="Inter" font-weight="800" font-size="28" fill="${st[1]}">${st[0]}</text>`;
  });
  return W3(`<rect width="1080" height="1920" fill="#DCE4EC"/>
   <rect y="0" width="1080" height="420" fill="#C8D2DC"/>${Array.from({ length: 9 }, (_, i) => `<rect x="${i * 130 - 20}" y="0" width="22" height="420" fill="#AEB9C5"/>`).join('')}
   <rect x="0" y="380" width="1080" height="560" fill="url(#ask)"/>${plane}
   <rect x="0" y="860" width="1080" height="60" fill="#8E9AA8"/>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${i * 216 - 8}" y="380" width="16" height="540" fill="#5E6B7A"/>`).join('')}
   <rect x="120" y="420" width="840" height="430" rx="14" fill="#0B1118" opacity=".96"/>
   <text x="540" y="458" text-anchor="middle" font-family="Inter" font-weight="900" font-size="30" fill="#FFD45C" letter-spacing="6">PARTIDAS · DEPARTURES</text>${board}
   <rect y="920" width="1080" height="1000" fill="#EDEFF2"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${(i % 4) * 300 - 60}" y="${980 + Math.floor(i / 4) * 300}" width="290" height="290" fill="${(i % 2) ? '#E3E6EA' : '#F5F6F8'}"/>`).join('')}
   <g transform="translate(${880 - ((t * 40) % 200)} 1180)"><rect x="-40" y="-60" width="80" height="110" rx="12" fill="#C8202C"/><rect x="-6" y="-100" width="12" height="44" fill="#333"/><circle cx="-24" cy="56" r="10" fill="#222"/><circle cx="24" cy="56" r="10" fill="#222"/></g>`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC3EC"/><stop offset="1" stop-color="#DDF1FB"/></linearGradient>`);
}

function comportaSVG(t = 0) {
  const para = (x, y, s, ph) => `<g transform="translate(${x} ${y}) scale(${s}) rotate(${Math.sin(t * 1.6 + ph) * 3})"><rect x="-5" y="0" width="10" height="190" fill="#8A6A44"/><path d="M-120 10 L0 -50 L120 10 Q 60 30 0 18 Q -60 30 -120 10 Z" fill="#D9B46A"/>${Array.from({ length: 9 }, (_, i) => `<line x1="${-110 + i * 27}" y1="12" x2="${-112 + i * 27}" y2="34" stroke="#B88F48" stroke-width="5"/>`).join('')}</g>`;
  let waves = ''; for (let i = 0; i < 4; i++) { const y = 860 + i * 55, o = Math.sin(t * 1.4 + i) * 30; waves += `<path d="M-40 ${y} Q 135 ${y - 18} 270 ${y} T 540 ${y} T 810 ${y} T 1120 ${y}" transform="translate(${o} 0)" fill="none" stroke="#FFFFFF" stroke-width="7" opacity="${0.8 - i * 0.15}"/>`; }
  return W3(`<rect width="1080" height="1920" fill="url(#csk)"/>
   <circle cx="830" cy="500" r="90" fill="#FFE9A8"/>
   <g fill="#FFFFFF" opacity=".85" transform="translate(${(t * 12) % 300} 0)"><ellipse cx="160" cy="460" rx="110" ry="30"/><ellipse cx="520" cy="560" rx="90" ry="24"/></g>
   <rect y="760" width="1080" height="320" fill="#3E9CC4"/>${waves}
   <g transform="translate(160 760)"><rect x="-6" y="-10" width="8" height="120" fill="#6B4A32"/><rect x="40" y="-10" width="8" height="120" fill="#6B4A32"/><rect x="-30" y="-110" width="100" height="100" fill="#A5774A"/><path d="M-40 -110 L20 -160 L80 -110 Z" fill="#7A5434"/></g>
   <path d="M0 1060 Q 540 1010 1080 1070 L1080 1920 L0 1920 Z" fill="#F2DDAF"/>
   ${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 131) % 1080}" cy="${1120 + (i * 67) % 780}" r="${3 + (i % 3)}" fill="#E3C98F"/>`).join('')}
   <g>${Array.from({ length: 12 }, (_, i) => `<rect x="${380 + i * 4}" y="${1100 + i * 70}" width="${180 + i * 14}" height="40" fill="#B98D5B" stroke="#8E6A42" stroke-width="3" transform="skewX(-8)"/>`).join('')}</g>
   ${para(150, 1010, 1.0, 0)}${para(930, 990, 1.1, 1.3)}${para(700, 1040, 0.8, 2.2)}
   <g transform="translate(${(t * 70) % 1300 - 100} ${640 + Math.sin(t * 3) * 14})" fill="none" stroke="#2A3B52" stroke-width="5"><path d="M-22 0 q 11 -12 22 0 q 11 -12 22 0"/></g>`,
   `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FD0F0"/><stop offset="1" stop-color="#FDF2D6"/></linearGradient>`);
}

function pontelimaSVG(t = 0) {
  const tree = (x, y, s, c) => `<g transform="translate(${x} ${y}) scale(${s}) rotate(${Math.sin(t * 1.2 + x) * 1.5})"><rect x="-14" y="0" width="28" height="200" fill="#D7CFC0"/><circle cx="0" cy="-40" r="120" fill="${c}"/><circle cx="-80" cy="10" r="85" fill="${c}"/><circle cx="80" cy="10" r="85" fill="${c}"/></g>`;
  let arches = ''; for (let i = 0; i < 7; i++) { const x = 40 + i * 150; arches += `<path d="M${x} 1010 L${x} 960 A 60 60 0 0 1 ${x + 120} 960 L${x + 120} 1010 Z" fill="#3E6E7E"/>`; }
  let ripple = ''; for (let i = 0; i < 8; i++) { const x = ((t * 50 + i * 150) % 1240) - 80, y = 1060 + (i % 4) * 40; ripple += `<line x1="${x}" y1="${y}" x2="${x + 70}" y2="${y}" stroke="#FFE2A8" stroke-width="5" opacity=".7"/>`; }
  return W3(`<rect width="1080" height="1920" fill="url(#psk)"/>
   <circle cx="240" cy="560" r="80" fill="#FFD27A" opacity=".9"/>
   <path d="M0 760 Q 270 680 540 740 T 1080 720 L1080 900 L0 900 Z" fill="#6E8F63"/>
   <g fill="#F1E6D2"><rect x="700" y="640" width="120" height="160"/><path d="M690 640 L760 590 L830 640 Z" fill="#B65A3A"/><rect x="860" y="660" width="90" height="140"/><path d="M850 660 L905 620 L960 660 Z" fill="#B65A3A"/><rect x="740" y="520" width="40" height="120"/><path d="M732 520 L760 480 L788 520 Z" fill="#8F8A80"/></g>
   <rect x="0" y="870" width="1080" height="40" fill="#BDB2A0"/>
   <rect x="0" y="900" width="1080" height="120" fill="#A89C88"/>${arches}
   ${Array.from({ length: 22 }, (_, i) => `<rect x="${i * 50}" y="856" width="30" height="20" fill="#9B8F7C"/>`).join('')}
   <rect y="1010" width="1080" height="260" fill="#3E7E8E"/>${ripple}
   <path d="M0 1240 Q 540 1200 1080 1250 L1080 1920 L0 1920 Z" fill="#7FA36A"/>
   <path d="M0 1320 Q 540 1290 1080 1330 L1080 1920 L0 1920 Z" fill="#D8C9A8"/>
   ${tree(90, 1060, 1.0, '#C99A3E')}${tree(1000, 1050, 1.1, '#D4A947')}
   ${Array.from({ length: 6 }, (_, i) => { const tt = ((t * 0.25 + i / 6) % 1); return `<ellipse cx="${100 + i * 170 + Math.sin(tt * 9 + i) * 40}" cy="${900 + tt * 900}" rx="14" ry="8" fill="#D9932E" transform="rotate(${tt * 300} ${100 + i * 170} ${900 + tt * 900})"/>`; }).join('')}`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B98A"/><stop offset=".6" stop-color="#FCE2B8"/><stop offset="1" stop-color="#FFF3DC"/></linearGradient>`);
}
