// New backgrounds (2026-11-22 19:00, O Urso responde #3 Parte 2):
// relojoariaSVG: old Lisbon watchmaker shop (relojoaria) with a wall of ticking clocks, swinging pendulums, a big hourglass with falling sand and a wooden counter
// espichelSVG: Cabo Espichel at sunset with the long pilgrims' sanctuary building, white chapel, clifftop lighthouse with sweeping beam, rolling sea and gulls
const W2 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function relojoariaSVG(t = 0) {
  let clocks = '';
  const spots = [[150, 520, 80], [360, 470, 60], [560, 540, 90], [790, 480, 70], [960, 580, 55], [260, 720, 55], [700, 730, 65], [930, 780, 60], [110, 860, 50]];
  spots.forEach(([x, y, r], i) => {
    const ang = (t * (6 + i * 2) * 6 + i * 40) % 360, ang2 = (t * 6 + i * 70) % 360;
    clocks += `<g transform="translate(${x} ${y})"><circle r="${r + 10}" fill="${['#8C5A2E', '#C9A24A', '#6B3F22'][i % 3]}"/><circle r="${r}" fill="#FBF5EA"/>`;
    for (let h = 0; h < 12; h++) clocks += `<rect x="-2" y="${-r + 4}" width="4" height="${h % 3 ? 6 : 12}" fill="#0B2343" transform="rotate(${h * 30})"/>`;
    clocks += `<line x1="0" y1="0" x2="0" y2="${-r * .55}" stroke="#0B2343" stroke-width="6" stroke-linecap="round" transform="rotate(${ang2})"/><line x1="0" y1="0" x2="0" y2="${-r * .85}" stroke="#C8202C" stroke-width="3" transform="rotate(${ang})"/><circle r="5" fill="#0B2343"/></g>`;
  });
  let pend = '';
  [[420, 900], [620, 920]].forEach(([x, y], i) => { const a = Math.sin(t * 3 + i) * 16;
    pend += `<rect x="${x - 55}" y="${y - 40}" width="110" height="330" rx="12" fill="#5A3A22"/><rect x="${x - 42}" y="${y - 28}" width="84" height="300" rx="8" fill="#2A1A10"/><circle cx="${x}" cy="${y + 20}" r="32" fill="#FBF5EA"/><g transform="translate(${x} ${y + 60}) rotate(${a})"><line x1="0" y1="0" x2="0" y2="170" stroke="#C9A24A" stroke-width="5"/><circle cy="180" r="24" fill="#C9A24A"/></g>`; });
  const fill = (t * 0.05) % 1;
  const hg = `<g transform="translate(900 1080)"><rect x="-70" y="-150" width="140" height="18" rx="6" fill="#6B3F22"/><rect x="-70" y="132" width="140" height="18" rx="6" fill="#6B3F22"/>
    <path d="M-55 -132 L55 -132 L8 0 L55 132 L-55 132 L-8 0 Z" fill="rgba(220,240,255,.55)" stroke="#9FB3C8" stroke-width="4"/>
    <path d="M${-45 + fill * 35} ${-122 + fill * 100} L${45 - fill * 35} ${-122 + fill * 100} L6 -4 L-6 -4 Z" fill="#E8C47A"/>
    <line x1="0" y1="0" x2="0" y2="${130 - fill * 60}" stroke="#E8C47A" stroke-width="4"/>
    <path d="M-50 128 L50 128 L${30 - fill * 20} ${128 - fill * 70} L${-30 + fill * 20} ${128 - fill * 70} Z" fill="#E8C47A"/></g>`;
  return W2(`<rect width="1080" height="1920" fill="#3B2A1E"/>
   <rect y="380" width="1080" height="640" fill="url(#rwp)"/>
   ${clocks}${pend}
   <rect y="1240" width="1080" height="680" fill="#5A3A22"/><rect y="1220" width="1080" height="40" fill="#8C5A2E"/>
   <rect x="60" y="1300" width="960" height="160" rx="10" fill="rgba(255,255,255,.08)"/>
   ${hg}
   <g transform="translate(540 420)"><rect x="-190" y="-40" width="380" height="64" rx="10" fill="#0B2343"/><text y="6" text-anchor="middle" font-family="Lora" font-weight="700" font-size="40" fill="#FFD45C">RELOJOARIA</text></g>`,
   `<linearGradient id="rwp" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6E4A2E"/><stop offset="1" stop-color="#4A3020"/></linearGradient>`);
}

function espichelSVG(t = 0) {
  let gulls = '';
  for (let i = 0; i < 5; i++) { const x = ((t * 50 + i * 240) % 1300) - 100, y = 420 + i * 40 + Math.sin(t * 2 + i) * 18, f = Math.sin(t * 8 + i) * 10;
    gulls += `<path d="M${x - 22} ${y} q 11 ${-12 - f} 22 0 q 11 ${-12 - f} 22 0" stroke="#fff" stroke-width="5" fill="none"/>`; }
  let waves = '';
  for (let r = 0; r < 6; r++) { const y = 1040 + r * 60, o = Math.sin(t * 2 + r) * 30;
    waves += `<path d="M${-60 + o} ${y} q 60 -16 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0" stroke="rgba(255,255,255,.45)" stroke-width="5" fill="none"/>`; }
  const beam = Math.sin(t * 1.2) * 30;
  let arches = '';
  for (let i = 0; i < 12; i++) arches += `<rect x="${30 + i * 40}" y="860" width="24" height="44" rx="12" fill="#C98A3E"/>`;
  return W2(`<rect width="1080" height="1920" fill="url(#esk)"/>
   <circle cx="760" cy="760" r="110" fill="#FFD27A" opacity=".95"/>
   ${gulls}
   <rect y="980" width="1080" height="940" fill="#2F6E8F"/>${waves}
   <path d="M0 830 L700 800 L860 860 L900 1000 L0 1000 Z" fill="#B88A5A"/>
   <path d="M0 960 L900 990 L940 1960 L0 1960 Z" fill="#9C7348"/>
   <rect x="20" y="820" width="520" height="100" fill="#F4EDE0"/><rect x="20" y="806" width="520" height="16" fill="#C9653E"/>${arches}
   <g transform="translate(600 690)"><rect x="-60" y="40" width="120" height="190" fill="#FBF8F2"/><path d="M-70 40 L0 -30 L70 40Z" fill="#FBF8F2"/><rect x="-20" y="150" width="40" height="80" rx="20" fill="#6B4A32"/><rect x="-8" y="-60" width="16" height="40" fill="#FBF8F2"/><rect x="-22" y="-50" width="44" height="12" fill="#FBF8F2"/></g>
   <g transform="translate(790 640)"><path d="M0 0 L ${700} ${-120 + beam * 4} L 700 ${40 + beam * 4} Z" fill="rgba(255,240,170,.28)"/><rect x="-26" y="0" width="52" height="210" fill="#fff"/><rect x="-26" y="60" width="52" height="30" fill="#C8202C"/><rect x="-36" y="-36" width="72" height="40" rx="8" fill="#FFE38A"/><path d="M-40 -36 L0 -70 L40 -36Z" fill="#C8202C"/></g>`,
   `<linearGradient id="esk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A4A8A"/><stop offset=".55" stop-color="#F08A5D"/><stop offset="1" stop-color="#FFC98A"/></linearGradient>`);
}
