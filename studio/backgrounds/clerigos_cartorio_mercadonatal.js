// New backgrounds (2026-11-19 19:00 home sale gain video):
// clerigosSVG: Porto baroque granite bell tower (Clérigos style) at night above a sloping granite street with hanging Christmas star garlands, glowing shop windows and drifting sparkles
// cartorioSVG: old notary office (cartório) for a house deed with dark wood panelling, desk with house keys and a bobbing rubber stamp, ticking wall clock, Christmas wreath and rain on the window
// mercadoSVG: Christmas market at night with wooden chalets with glowing roofs, a turning carousel, a big decorated tree and falling snow-like confetti
const W2 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function clerigosSVG(t = 0) {
  const star = (x, y, s, ph) => { const g = 0.6 + 0.4 * Math.sin(t * 3 + ph); return `<g transform="translate(${x} ${y}) scale(${s})" opacity="${g}"><path d="M0 -26 L7 -8 L26 -8 L11 4 L17 24 L0 12 L-17 24 L-11 4 L-26 -8 L-7 -8 Z" fill="#FFE27A"/></g>`; };
  let garl = '';
  [[620, 0], [760, 1.5], [900, 3]].forEach(([y, ph]) => {
    const sag = 60 + Math.sin(t * 1.2 + ph) * 8;
    garl += `<path d="M0 ${y} Q 540 ${y + sag} 1080 ${y}" stroke="#2B2B2B" stroke-width="3" fill="none"/>`;
    for (let i = 1; i < 9; i++) { const x = i * 120, yy = y + sag * (1 - Math.pow((x - 540) / 540, 2)); garl += star(x, yy + 22, 0.9, i + ph); }
  });
  let spark = ''; for (let i = 0; i < 40; i++) { const x = (i * 97 + Math.sin(t + i) * 20) % 1080, y = (i * 53 + t * 40) % 1100 + 380; spark += `<circle cx="${x}" cy="${y}" r="${2 + (i % 3)}" fill="#FFF6C8" opacity="${0.4 + 0.4 * Math.sin(t * 4 + i)}"/>`; }
  const shop = (x, w, c) => `<g transform="translate(${x} 1060)"><rect width="${w}" height="240" fill="#6E6A60"/><rect x="18" y="40" width="${w - 36}" height="170" rx="6" fill="${c}"/><rect x="18" y="40" width="${w - 36}" height="170" rx="6" fill="#FFD27A" opacity="${0.25 + 0.15 * Math.sin(t * 2 + x)}"/></g>`;
  return W2(`<rect width="1080" height="1920" fill="url(#csk)"/>
   <circle cx="880" cy="440" r="48" fill="#FFF8E0" opacity=".9"/>
   ${Array.from({ length: 30 }, (_, i) => `<circle cx="${(i * 173) % 1080}" cy="${380 + (i * 61) % 300}" r="2" fill="#fff" opacity="${0.5 + 0.5 * Math.sin(t * 2 + i)}"/>`).join('')}
   <g transform="translate(540 0)">
     <rect x="-95" y="560" width="190" height="700" fill="#B9AE98"/>
     <rect x="-80" y="470" width="160" height="110" fill="#C4B9A3"/>
     <rect x="-60" y="400" width="120" height="80" fill="#CFC5AF"/>
     <path d="M-60 400 Q 0 330 60 400 Z" fill="#B9AE98"/><rect x="-6" y="300" width="12" height="60" fill="#8E846F"/><circle cy="300" r="12" fill="#E8C766"/>
     ${[640, 780, 920, 1060].map(y => `<rect x="-38" y="${y}" width="76" height="100" rx="38" fill="#3A3226"/><rect x="-30" y="${y + 10}" width="60" height="88" rx="30" fill="#FFCF6B" opacity="${0.6 + 0.3 * Math.sin(t * 2 + y)}"/>`).join('')}
     <circle cy="510" r="34" fill="#F4EBD3"/><line x1="0" y1="510" x2="${Math.sin(t) * 20}" y2="${490}" stroke="#333" stroke-width="5"/>
     ${Array.from({ length: 6 }, (_, i) => `<circle cx="${-90 + i * 36}" cy="${560}" r="6" fill="#FFE27A" opacity="${0.5 + 0.5 * Math.sin(t * 5 + i)}"/>`).join('')}
   </g>
   <path d="M0 520 L300 600 L300 1300 L0 1300 Z" fill="#8F8573"/><path d="M1080 520 L780 600 L780 1300 L1080 1300 Z" fill="#9A907D"/>
   ${[0, 1, 2].map(i => `<rect x="${40 + i * 80}" y="${700 + i * 10}" width="50" height="80" fill="#FFCF6B" opacity=".75"/>`).join('')}
   ${[0, 1, 2].map(i => `<rect x="${990 - i * 80}" y="${700 + i * 10}" width="50" height="80" fill="#FFCF6B" opacity=".75"/>`).join('')}
   ${shop(0, 300, '#B7473B')}${shop(780, 300, '#2F6B4F')}
   <path d="M0 1300 L1080 1300 L1080 1920 L0 1920 Z" fill="#5E584C"/>
   ${Array.from({ length: 60 }, (_, i) => `<rect x="${(i % 10) * 110 + (Math.floor(i / 10) % 2) * 55}" y="${1310 + Math.floor(i / 10) * 100}" width="100" height="90" rx="10" fill="#6C665A"/>`).join('')}
   ${garl}${spark}`,
   `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1A3A"/><stop offset=".6" stop-color="#253B6E"/><stop offset="1" stop-color="#3A4F80"/></linearGradient>`);
}

function cartorioSVG(t = 0) {
  const sw = Math.sin(t * Math.PI) * 18;
  let rain = ''; for (let i = 0; i < 18; i++) { const x = 720 + (i * 37) % 260, y = 440 + ((i * 71 + t * 420) % 420); rain += `<line x1="${x}" y1="${y}" x2="${x - 6}" y2="${y + 24}" stroke="#BFD6F0" stroke-width="3" opacity=".7"/>`; }
  const stampY = Math.max(0, Math.sin(t * 2.4)) * -40;
  return W2(`<rect width="1080" height="1920" fill="#5B3B26"/>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="${i * 120 + 6}" y="380" width="108" height="900" fill="#6A4630"/><rect x="${i * 120 + 20}" y="400" width="80" height="380" fill="none" stroke="#4A2F1E" stroke-width="5"/>`).join('')}
   <rect y="360" width="1080" height="24" fill="#3E2716"/>
   <g><rect x="700" y="420" width="300" height="460" rx="8" fill="#26384F"/><rect x="714" y="434" width="272" height="432" fill="#3C5878"/>${rain}<line x1="850" y1="434" x2="850" y2="866" stroke="#26384F" stroke-width="10"/><line x1="714" y1="650" x2="986" y2="650" stroke="#26384F" stroke-width="10"/></g>
   <g transform="translate(220 560)"><circle r="95" fill="#F4EBD3" stroke="#8A6A3A" stroke-width="14"/>${Array.from({ length: 12 }, (_, i) => `<rect x="-3" y="-82" width="6" height="16" fill="#333" transform="rotate(${i * 30})"/>`).join('')}
     <line x1="0" y1="0" x2="0" y2="-50" stroke="#222" stroke-width="8" transform="rotate(${(t * 6) % 360 + 200})"/><line x1="0" y1="0" x2="0" y2="-74" stroke="#C8202C" stroke-width="4" transform="rotate(${Math.floor(t) * 6})"/><circle r="8" fill="#222"/></g>
   <g transform="translate(220 680) rotate(${sw})"><line x1="0" y1="0" x2="0" y2="150" stroke="#8A6A3A" stroke-width="6"/><circle cy="160" r="22" fill="#E8C766"/></g>
   <g transform="translate(470 520)"><circle r="78" fill="none" stroke="#2F6B3A" stroke-width="34"/>${Array.from({ length: 8 }, (_, i) => `<circle cx="${Math.cos(i * 0.785) * 78}" cy="${Math.sin(i * 0.785) * 78}" r="9" fill="#C8202C"/>`).join('')}<path d="M-30 70 L0 100 L30 70 Z" fill="#C8202C"/></g>
   <rect y="1240" width="1080" height="680" fill="#3A2416"/>
   <rect x="0" y="1180" width="1080" height="80" fill="#7A4E2E"/><rect x="0" y="1170" width="1080" height="18" fill="#9A6A40"/>
   <g transform="translate(830 1110)"><rect x="-60" y="0" width="160" height="60" rx="4" fill="#F7F1E3" transform="rotate(-6)"/><rect x="-50" y="12" width="120" height="6" fill="#9FB3C8" transform="rotate(-6)"/><rect x="-50" y="28" width="90" height="6" fill="#9FB3C8" transform="rotate(-6)"/></g>
   <g transform="translate(980 ${1120 + stampY})"><rect x="-16" y="-70" width="32" height="60" rx="10" fill="#7A2E3A"/><rect x="-34" y="-14" width="68" height="20" rx="4" fill="#3A2416"/></g>
   <g transform="translate(560 1140) rotate(${Math.sin(t * 2) * 6})"><circle r="16" fill="none" stroke="#E8C766" stroke-width="8"/><rect x="12" y="-5" width="60" height="10" fill="#E8C766"/><rect x="54" y="4" width="8" height="14" fill="#E8C766"/><rect x="66" y="4" width="8" height="10" fill="#E8C766"/></g>`);
}

function mercadoSVG(t = 0) {
  const chalet = (x, y, c, ph) => `<g transform="translate(${x} ${y})"><rect x="-120" y="0" width="240" height="180" fill="#8A5A34"/><path d="M-150 10 L0 -90 L150 10 Z" fill="${c}"/>${Array.from({ length: 7 }, (_, i) => `<circle cx="${-130 + i * 43}" cy="${10 - (i < 4 ? i : 6 - i) * 30}" r="7" fill="#FFE27A" opacity="${0.5 + 0.5 * Math.sin(t * 4 + i + ph)}"/>`).join('')}<rect x="-100" y="30" width="200" height="90" fill="#FFCF6B" opacity=".85"/><rect x="-120" y="120" width="240" height="20" fill="#5E3A1E"/></g>`;
  const a = t * 0.9;
  let horses = ''; for (let i = 0; i < 6; i++) { const ang = a + i * Math.PI / 3, x = Math.cos(ang) * 150, z = Math.sin(ang); horses += `<g transform="translate(${x} ${40 + Math.sin(t * 3 + i) * 14}) scale(${0.8 + 0.2 * z})" opacity="${0.7 + 0.3 * z}"><line y1="-120" y2="40" x1="0" x2="0" stroke="#E8C766" stroke-width="5"/><ellipse rx="34" ry="18" fill="${['#F7F1E3', '#E2365B', '#5DA7CF'][i % 3]}"/><circle cx="30" cy="-16" r="12" fill="${['#F7F1E3', '#E2365B', '#5DA7CF'][i % 3]}"/></g>`; }
  let snow = ''; for (let i = 0; i < 50; i++) { const x = (i * 89 + Math.sin(t + i) * 30) % 1080, y = (i * 47 + t * 60) % 1500 + 380; snow += `<circle cx="${x}" cy="${y}" r="${3 + (i % 3)}" fill="#fff" opacity=".8"/>`; }
  return W2(`<rect width="1080" height="1920" fill="url(#msk)"/>
   <g transform="translate(540 480)">${Array.from({ length: 4 }, (_, i) => `<path d="M0 ${i * 120 - 40} L${-90 - i * 50} ${i * 120 + 100} L${90 + i * 50} ${i * 120 + 100} Z" fill="#1F6B3E"/>`).join('')}
     <rect x="-24" y="520" width="48" height="80" fill="#5E3A1E"/><path d="M0 -90 L12 -60 L44 -60 L18 -42 L28 -10 L0 -30 L-28 -10 L-18 -42 L-44 -60 L-12 -60 Z" fill="#FFE27A" transform="rotate(${Math.sin(t) * 8})"/>
     ${Array.from({ length: 18 }, (_, i) => `<circle cx="${Math.sin(i * 2.3) * (40 + i * 10)}" cy="${i * 28}" r="10" fill="${['#E2365B', '#FFE27A', '#5DA7CF'][i % 3]}" opacity="${0.5 + 0.5 * Math.sin(t * 5 + i)}"/>`).join('')}</g>
   ${chalet(160, 860, '#C8202C', 0)}${chalet(920, 860, '#2F6B3A', 2)}
   <g transform="translate(540 960)"><path d="M-200 -110 L0 -190 L200 -110 Z" fill="#C8202C"/>${Array.from({ length: 8 }, (_, i) => `<rect x="${-200 + i * 50}" y="-110" width="25" height="20" fill="#FBF5EA"/>`).join('')}${horses}<ellipse cy="80" rx="210" ry="30" fill="#7A2E3A"/></g>
   <rect y="1080" width="1080" height="840" fill="#3B4560"/>
   ${Array.from({ length: 12 }, (_, i) => `<circle cx="${i * 95 + 40}" cy="${1100}" r="7" fill="#FFE27A" opacity="${0.5 + 0.5 * Math.sin(t * 3 + i)}"/>`).join('')}
   ${snow}`,
   `<linearGradient id="msk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#101C3D"/><stop offset="1" stop-color="#34466E"/></linearGradient>`);
}
