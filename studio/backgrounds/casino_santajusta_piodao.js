// New backgrounds (2026-11-17 19:00 spy / foreign accounts video): casinoSVG (Estoril-style casino at night with palm garden, fountain jets and searchlights), santajustaSVG (Santa Justa-style iron lift in the Baixa at night with moving cabin), piodaoSVG (Piodao-style schist village on terraced hillside at dusk with blue windows, white church and chimney smoke)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function stars(t, n, h, seed = 1) { let s = ''; for (let i = 0; i < n; i++) { const x = (i * 197 * seed + 53) % 1080, y = (i * 113 * seed + 31) % h, o = 0.4 + 0.6 * Math.abs(Math.sin(t * 2 + i)); s += `<circle cx="${x}" cy="${y}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${o.toFixed(2)}"/>`; } return s; }
function casinoSVG(t = 0) {
  const palm = (x, y, s) => { const sw = Math.sin(t * 1.3 + x) * 4; let f = ''; for (let k = 0; k < 7; k++) { const a = -160 + k * 23 + sw; f += `<path d="M0 0 Q ${Math.cos(a * Math.PI / 180) * 90} ${Math.sin(a * Math.PI / 180) * 90 - 30} ${Math.cos(a * Math.PI / 180) * 170} ${Math.sin(a * Math.PI / 180) * 170 + 40}" stroke="#1E5A3C" stroke-width="22" fill="none" stroke-linecap="round"/>`; } return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-10 0 Q 10 200 -6 420 L 14 420 Q 28 200 10 0 Z" fill="#7A5A3A"/>${f}</g>`; };
  const beam = (x, a) => `<path d="M${x} 900 L ${x + Math.sin(a) * 900 - 60} -100 L ${x + Math.sin(a) * 900 + 60} -100 Z" fill="#FFF6C8" opacity="0.13"/>`;
  let jets = ''; for (let i = 0; i < 5; i++) { const h = 150 + Math.sin(t * 3 + i * 1.3) * 40; jets += `<path d="M${400 + i * 70} 1210 Q ${400 + i * 70 + 10} ${1210 - h} ${400 + i * 70 + 25} ${1210 - h * 0.2}" stroke="#BFE8FF" stroke-width="10" fill="none" opacity="0.8"/>`; }
  let wins = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 9; c++) { const on = Math.sin(t * 0.7 + r * 3 + c * 1.7) > -0.6; wins += `<rect x="${180 + c * 82}" y="${700 + r * 90}" width="52" height="60" rx="4" fill="${on ? '#FFD983' : '#5A5070'}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#csk)"/>${stars(t, 60, 600)}
   <circle cx="880" cy="140" r="0"/>
   ${beam(300, Math.sin(t * 0.8) * 0.5)}${beam(780, Math.sin(t * 0.8 + 2) * 0.5)}
   <rect x="140" y="600" width="800" height="400" fill="#F4EFE4"/><rect x="140" y="600" width="800" height="30" fill="#E2D9C6"/>
   <rect x="380" y="430" width="320" height="180" fill="#F4EFE4"/><rect x="400" y="460" width="280" height="90" rx="10" fill="#14213D"/>
   <text x="540" y="525" text-anchor="middle" font-family="Lora,serif" font-weight="700" font-size="58" fill="${Math.sin(t * 4) > -0.8 ? '#FFD45C' : '#B8962F'}">CASINO</text>
   ${wins}<rect x="470" y="900" width="140" height="100" fill="#8A5A2B"/><rect x="140" y="990" width="800" height="20" fill="#D8CCB4"/>
   <rect x="0" y="1010" width="1080" height="910" fill="#2E5A3A"/>
   <ellipse cx="540" cy="1220" rx="330" ry="70" fill="#9FC9DF" stroke="#E8E1D0" stroke-width="16"/>${jets}
   ${palm(80, 650, 1)}${palm(1000, 640, 1.05)}${palm(250, 760, 0.7)}${palm(840, 760, 0.7)}
   <path d="M0 1400 Q 540 1340 1080 1400 L1080 1920 L0 1920 Z" fill="#24492F"/>`,
   `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1230"/><stop offset="0.5" stop-color="#2A2556"/><stop offset="1" stop-color="#5B3A6E"/></linearGradient>`);
}
function santajustaSVG(t = 0) {
  const cab = 980 - (0.5 + 0.5 * Math.sin(t * 0.6)) * 420;
  let lattice = ''; for (let y = 520; y < 1300; y += 60) lattice += `<path d="M420 ${y} L 540 ${y + 60} L 660 ${y} M 420 ${y + 60} L 540 ${y} L 660 ${y + 60}" stroke="#3B3A40" stroke-width="6" fill="none"/>`;
  let arches = ''; for (let i = 0; i < 4; i++) arches += `<path d="M${440 + i * 55} 600 q 27 -40 55 0" stroke="#3B3A40" stroke-width="5" fill="none"/>`;
  const bld = (x, w, h, c) => { let ws = ''; for (let r = 0; r < Math.floor(h / 110); r++) for (let k = 0; k < Math.floor(w / 90); k++) ws += `<rect x="${x + 22 + k * 90}" y="${1400 - h + 40 + r * 110}" width="44" height="64" fill="${(r + k + Math.floor(t * 0.5)) % 5 === 0 ? '#5A4A3A' : '#FFD983'}"/>`; return `<rect x="${x}" y="${1400 - h}" width="${w}" height="${h}" fill="${c}"/>${ws}`; };
  const lamp = x => `<g><rect x="${x - 5}" y="1250" width="10" height="250" fill="#222"/><circle cx="${x}" cy="1245" r="${22 + Math.sin(t * 5 + x) * 1.5}" fill="#FFE9A8"/><circle cx="${x}" cy="1245" r="60" fill="#FFE9A8" opacity="0.18"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#jsk)"/>${stars(t, 45, 520, 2)}<circle cx="900" cy="470" r="60" fill="#F6F0D8"/>
   ${bld(0, 360, 700, '#C9A27A')}${bld(700, 380, 640, '#B7C4C9')}
   <rect x="420" y="480" width="240" height="920" fill="#2B2A30" opacity="0.35"/>${lattice}${arches}
   <rect x="400" y="440" width="280" height="50" fill="#3B3A40"/><rect x="430" y="410" width="220" height="34" fill="#3B3A40"/>
   <path d="M660 470 L 900 470" stroke="#3B3A40" stroke-width="18"/>
   <g transform="translate(0 ${cab - 980})"><rect x="455" y="900" width="170" height="160" rx="10" fill="#8B2E2E"/><rect x="470" y="915" width="60" height="70" fill="#FFE3A3"/><rect x="550" y="915" width="60" height="70" fill="#FFE3A3"/></g>
   <rect x="0" y="1400" width="1080" height="520" fill="#5A5560"/>
   <path d="M0 1500 L1080 1500" stroke="#E8E4DA" stroke-width="6" stroke-dasharray="40 30"/>
   ${lamp(120)}${lamp(960)}`,
   `<linearGradient id="jsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1A3A"/><stop offset="1" stop-color="#3E4C7A"/></linearGradient>`);
}
function piodaoSVG(t = 0) {
  let houses = ''; let i = 0;
  for (let r = 0; r < 6; r++) for (let c = 0; c < 7; c++) { i++; const x = 60 + c * 140 + (r % 2) * 60 + Math.sin(i * 3) * 15, y = 560 + r * 120 + Math.cos(i * 2) * 10;
    const lit = Math.sin(t * 0.8 + i * 1.9) > -0.3;
    houses += `<g transform="translate(${x} ${y})"><path d="M-10 0 L 50 -38 L 110 0 Z" fill="#3E3A3A"/><rect x="0" y="0" width="100" height="80" fill="${i % 3 ? '#6E5E52' : '#7B6A5C'}"/><rect x="18" y="22" width="24" height="30" fill="${lit ? '#FFD983' : '#2E5FA8'}" stroke="#2E5FA8" stroke-width="5"/><rect x="60" y="34" width="22" height="46" fill="#2E5FA8"/></g>`;
    if (i % 9 === 0) { for (let k = 0; k < 3; k++) { const p = ((t * 0.4 + k / 3) % 1); houses += `<circle cx="${x + 80 + p * 30}" cy="${y - 40 - p * 120}" r="${10 + p * 20}" fill="#DDD" opacity="${0.5 * (1 - p)}"/>`; } } }
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>${stars(t, 25, 380, 3)}
   <path d="M0 520 Q 300 380 560 470 T 1080 420 L1080 1920 L0 1920 Z" fill="#4E5A3E"/>
   <path d="M0 600 Q 540 520 1080 580" stroke="#3F4A32" stroke-width="10" fill="none"/>
   ${houses}
   <g transform="translate(470 1290)"><rect x="0" y="0" width="160" height="120" fill="#F4F1EA"/><path d="M0 0 L80 -50 L160 0 Z" fill="#F4F1EA"/><rect x="-10" y="-90" width="30" height="210" fill="#F4F1EA"/><path d="M-10 -90 L5 -130 L20 -90 Z" fill="#2E5FA8"/><rect x="140" y="-90" width="30" height="210" fill="#F4F1EA"/><path d="M140 -90 L155 -130 L170 -90 Z" fill="#2E5FA8"/><rect x="60" y="50" width="40" height="70" fill="#2E5FA8"/></g>
   <path d="M0 1420 Q 540 1380 1080 1420 L1080 1920 L0 1920 Z" fill="#3A4630"/>`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D2350"/><stop offset="0.6" stop-color="#C46A5A"/><stop offset="1" stop-color="#F0B27A"/></linearGradient>`);
}
