// New backgrounds (2026-11-15 08:00 rent update video):
// caixasSVG: rented flat mid-move, stacked cardboard boxes, mirrors leaning on the wall, swinging bare bulb, window with rooftops
// taviraSVG: Tavira riverside with the old multi-arch bridge over the Gilão, hipped 'tesoura' roofs, palms, drifting boat
// nazareSVG: Nazaré beach with colourful fishing boats on the sand, the Sítio cliff, rolling waves and gulls
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function caixasSVG(t = 0) {
  const sw = Math.sin(t * 1.6) * 6;
  const box = (x, y, w, h, c = '#C99A62') => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}" stroke="#8C6538" stroke-width="4"/><rect x="${x + w / 2 - 14}" y="${y}" width="28" height="${h}" fill="#E5C48F" opacity=".8"/><rect x="${x + 16}" y="${y + h - 46}" width="${Math.min(110, w - 40)}" height="26" fill="#fff" opacity=".7"/></g>`;
  const mirror = (x, y, w, h, r) => `<g transform="translate(${x} ${y}) rotate(${r})"><rect x="${-w / 2 - 14}" y="${-h - 14}" width="${w + 28}" height="${h + 28}" rx="${w / 2 + 14}" fill="#C9A13A"/><rect x="${-w / 2}" y="${-h}" width="${w}" height="${h}" rx="${w / 2}" fill="url(#mir)"/><path d="M${-w / 4} ${-h + 40} l ${w / 3} ${h / 3}" stroke="#fff" stroke-width="10" opacity=".55"/></g>`;
  let stars = '';
  for (let i = 0; i < 4; i++) { const o = 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i)); stars += `<circle cx="${700 + i * 70}" cy="${470 + (i % 2) * 40}" r="4" fill="#FFF6C8" opacity="${o}"/>`; }
  return W(`<rect width="1080" height="1920" fill="#E9D9C0"/>
   <rect y="0" width="1080" height="1100" fill="#DCC6A6"/>
   <g opacity=".25">${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 90}" y="0" width="45" height="1100" fill="#C8AE88"/>`).join('')}</g>
   <rect x="640" y="420" width="360" height="430" fill="#20304F"/>${stars}
   <g fill="#3B2C3F">${[0, 1, 2, 3, 4].map(i => `<path d="M${640 + i * 75} 850 l0 -${90 + (i % 3) * 40} l38 -40 l38 40 l0 ${90 + (i % 3) * 40} Z"/>`).join('')}</g>
   <circle cx="930" cy="500" r="34" fill="#FFF3C4"/>
   <rect x="630" y="410" width="380" height="450" fill="none" stroke="#F4EEE2" stroke-width="22"/><rect x="810" y="410" width="20" height="450" fill="#F4EEE2"/>
   <line x1="400" y1="0" x2="${400 + sw}" y2="430" stroke="#333" stroke-width="5"/>
   <g transform="translate(${400 + sw} 430)"><path d="M-22 0 h44 v20 h-44 Z" fill="#555"/><circle cy="50" r="34" fill="#FFE9A0"/><circle cy="50" r="70" fill="#FFE9A0" opacity=".25"/></g>
   <rect y="1100" width="1080" height="820" fill="#B98A5A"/>
   <g stroke="#A4774A" stroke-width="4">${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${1140 + i * 90}" x2="1080" y2="${1140 + i * 90}"/>`).join('')}</g>
   ${mirror(130, 1100, 150, 420, -6)}${mirror(300, 1110, 110, 330, 4)}${mirror(960, 1120, 130, 380, 7)}
   ${box(20, 900, 240, 200)}${box(60, 720, 200, 180, '#D2A56C')}${box(780, 920, 260, 190)}${box(820, 760, 200, 160, '#D2A56C')}${box(850, 640, 150, 120)}
   <g transform="translate(470 1000) rotate(-4)"><rect width="170" height="110" fill="#C99A62" stroke="#8C6538" stroke-width="4"/><text x="85" y="70" font-family="Inter" font-weight="900" font-size="34" fill="#7A2E3A" text-anchor="middle">FRÁGIL</text></g>`,
    `<linearGradient id="mir" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E6F2FA"/><stop offset="1" stop-color="#9DB8CC"/></linearGradient>`);
}

function taviraSVG(t = 0) {
  const house = (x, w, h, c, roofs) => {
    let r = ''; const rw = w / roofs;
    for (let i = 0; i < roofs; i++) r += `<path d="M${x + i * rw} ${1040 - h} l${rw / 2} -${rw * 0.55} l${rw / 2} ${rw * 0.55} Z" fill="#C2603E"/><path d="M${x + i * rw + rw / 2} ${1040 - h - rw * 0.55} l${rw / 2} ${rw * 0.55} l-${rw * 0.2} 0 Z" fill="#9E4A2E"/>`;
    let win = ''; for (let j = 0; j < Math.floor(w / 70); j++) win += `<rect x="${x + 20 + j * 70}" y="${1040 - h + 40}" width="34" height="56" rx="4" fill="#3F6E8C"/>`;
    return `<rect x="${x}" y="${1040 - h}" width="${w}" height="${h}" fill="${c}"/>${r}${win}`;
  };
  const bx = ((t * 18) % 1300) - 150;
  let gulls = ''; for (let i = 0; i < 3; i++) { const gx = ((t * 40 + i * 330) % 1200) - 60, gy = 520 + i * 50 + Math.sin(t * 2 + i) * 14; gulls += `<path d="M${gx} ${gy} q 16 -14 32 0 q 16 -14 32 0" stroke="#fff" stroke-width="5" fill="none"/>`; }
  let ripples = ''; for (let i = 0; i < 9; i++) { const y = 1330 + i * 60, o = (Math.sin(t * 2 + i) + 1) / 2; ripples += `<path d="M${40 + (i * 97) % 600} ${y} q 40 -10 80 0" stroke="#fff" stroke-width="4" fill="none" opacity="${0.2 + o * 0.4}"/>`; }
  const palm = (x, s) => { const sway = Math.sin(t * 1.4 + x) * 5; return `<g transform="translate(${x} 1060) scale(${s})"><path d="M0 0 q 10 -150 0 -300" stroke="#7A5A3A" stroke-width="22" fill="none"/><g transform="translate(0 -300) rotate(${sway})">${[-70, -30, 10, 50, 90, 130, 170].map(a => `<path d="M0 0 q 60 -40 130 10" transform="rotate(${a})" stroke="#3E8A4A" stroke-width="18" fill="none" stroke-linecap="round"/>`).join('')}</g></g>`; };
  return W(`<rect width="1080" height="1920" fill="url(#tsk)"/>
   <circle cx="830" cy="600" r="80" fill="#FFF0B8" opacity=".9"/>${gulls}
   ${house(-20, 230, 260, '#F7F3EA', 3)}${house(210, 200, 300, '#F4E6C4', 2)}${house(410, 240, 240, '#FBFAF5', 3)}${house(650, 200, 290, '#EFD9D2', 2)}${house(850, 250, 250, '#F7F3EA', 3)}
   <rect y="1040" width="1080" height="40" fill="#D9C9A8"/>
   ${palm(120, 0.8)}${palm(960, 0.9)}
   <rect y="1080" width="1080" height="840" fill="url(#triv)"/>
   <g fill="#D8BE92"><rect x="0" y="1120" width="1080" height="60"/>${[0, 1, 2, 3, 4, 5, 6].map(i => `<path d="M${i * 160 - 20} 1180 h40 v120 h-40 Z"/>`).join('')}</g>
   <g fill="#9EC3D6">${[0, 1, 2, 3, 4, 5].map(i => `<path d="M${i * 160 + 20} 1180 a60 70 0 0 1 120 0 v120 h-120 Z" fill="#2E6F8E" opacity=".35"/>`).join('')}</g>
   <rect x="0" y="1108" width="1080" height="14" fill="#C7AB7E"/>
   ${ripples}
   <g transform="translate(${bx} ${1480 + Math.sin(t * 2) * 6})"><path d="M-90 0 h180 l-30 40 h-120 Z" fill="#2F6FB0"/><rect x="-90" y="-8" width="180" height="10" fill="#F2C230"/><line x1="0" y1="-8" x2="0" y2="-120" stroke="#5A3E2A" stroke-width="6"/><path d="M4 -115 l60 90 h-60 Z" fill="#fff"/></g>`,
    `<linearGradient id="tsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FB6E6"/><stop offset=".55" stop-color="#BFE0F2"/></linearGradient><linearGradient id="triv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4E9CB8"/><stop offset="1" stop-color="#2D6D8C"/></linearGradient>`);
}

function nazareSVG(t = 0) {
  let waves = ''; for (let i = 0; i < 4; i++) { const ph = (t * 0.35 + i / 4) % 1; const y = 1080 + ph * 140; waves += `<path d="M0 ${y} q 135 -24 270 0 t 270 0 t 270 0 t 270 0" stroke="#fff" stroke-width="${10 - ph * 6}" fill="none" opacity="${1 - ph}"/>`; }
  let gulls = ''; for (let i = 0; i < 3; i++) { const gx = ((t * 50 + i * 380) % 1250) - 80, gy = 600 + i * 60 + Math.sin(t * 2.4 + i) * 16; gulls += `<path d="M${gx} ${gy} q 16 -14 32 0 q 16 -14 32 0" stroke="#22324A" stroke-width="5" fill="none"/>`; }
  const boat = (x, y, c1, c2, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-120 0 q 0 50 40 60 h160 q 40 -10 40 -60 Z" fill="${c1}"/><path d="M-120 0 h240 v14 h-240 Z" fill="${c2}"/><path d="M-120 0 q -20 -40 -10 -70 l 20 70 Z" fill="${c1}"/><circle cx="-60" cy="30" r="10" fill="#fff"/><path d="M-30 25 h80" stroke="#fff" stroke-width="6"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#nsk)"/>
   <path d="M620 1000 L620 640 Q 700 560 820 580 L1080 560 L1080 1000 Z" fill="#8C7356"/>
   <path d="M640 640 Q 720 590 820 600 L1080 585 L1080 620 L820 632 Q 720 630 640 670 Z" fill="#6E8F4E"/>
   <g fill="#F7F3EA">${[0, 1, 2, 3, 4].map(i => `<rect x="${830 + i * 48}" y="${540 - (i % 2) * 20}" width="40" height="44"/>`).join('')}</g>
   <rect x="${770}" y="500" width="34" height="80" fill="#F7F3EA"/><path d="M770 500 l17 -26 l17 26 Z" fill="#C2603E"/>
   <rect y="1000" width="1080" height="200" fill="url(#nsea)"/>${waves}
   ${gulls}
   <rect y="1190" width="1080" height="730" fill="#EBD7A8"/>
   <g fill="#E0C894" opacity=".7">${Array.from({ length: 14 }, (_, i) => `<ellipse cx="${(i * 173) % 1080}" cy="${1260 + (i * 61) % 600}" rx="60" ry="8"/>`).join('')}</g>
   ${boat(170, 1250, '#2F6FB0', '#F2C230', 0.9)}${boat(900, 1270, '#C8202C', '#2FA36B', 0.85)}${boat(520, 1235, '#F2C230', '#2F6FB0', 0.6)}`,
    `<linearGradient id="nsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F6B98A"/><stop offset=".6" stop-color="#FCE3C0"/></linearGradient><linearGradient id="nsea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2D7FA8"/><stop offset="1" stop-color="#5FB3C9"/></linearGradient>`);
}
