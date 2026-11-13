// New backgrounds: arraialSVG (Santos Populares street party with paper bunting and sardine grill),
// discoSVG (retro dance floor with mirror ball and light-up tiles), terracoSVG (rooftop terrace at sunset with string lights)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function arraialSVG(t = 0) {
  const cols = ['#E2365B', '#FFD45C', '#2E9E5B', '#2E6DB4', '#F07B2E'];
  const bunting = (y0, sag, ph) => {
    let s = `<path d="M-20 ${y0} Q 540 ${y0 + sag} 1100 ${y0}" stroke="#6B4A32" stroke-width="4" fill="none"/>`;
    for (let i = 0; i < 16; i++) {
      const x = -10 + i * 72, u = x / 1080, y = y0 + 4 * sag * u * (1 - u) * 0.5 * 2 * 0.5 * 2;
      const sw = Math.sin(t * 3 + i * 0.7 + ph) * 6;
      s += `<path d="M${x} ${y} l 60 0 l -30 ${70 + sw} Z" fill="${cols[(i + ph) % 5]}"/>`;
    }
    return s;
  };
  let smoke = '';
  for (let i = 0; i < 5; i++) { const k = ((t * 0.5 + i / 5) % 1); smoke += `<circle cx="${820 + Math.sin(k * 6 + i) * 30}" cy="${1180 - k * 360}" r="${20 + k * 40}" fill="#fff" opacity="${0.45 * (1 - k)}"/>`; }
  const house = (x, w, h, c, win) => `<rect x="${x}" y="${900 - h}" width="${w}" height="${h}" fill="${c}"/><path d="M${x - 10} ${900 - h} L${x + w / 2} ${830 - h} L${x + w + 10} ${900 - h} Z" fill="#B65A3A"/>` +
    Array.from({ length: win }, (_, i) => `<rect x="${x + 30 + i * 90}" y="${960 - h}" width="50" height="80" fill="#3E5A74"/><rect x="${x + 22 + i * 90}" y="${1036 - h}" width="66" height="8" fill="#2B2B2B"/>`).join('');
  return W(`<rect width="1080" height="1920" fill="url(#ask)"/>
   ${house(-20, 300, 560, '#F3D9A6', 3)}${house(290, 260, 620, '#F2F2F2', 2)}${house(560, 280, 540, '#9CC9E8', 3)}${house(850, 260, 600, '#F2B8A8', 2)}
   ${Array.from({ length: 28 }, (_, i) => `<rect x="${290 + (i % 7) * 37}" y="${330 + Math.floor(i / 7) * 37}" width="34" height="34" fill="${i % 2 ? '#2E6DB4' : '#fff'}" opacity=".9"/>`).join('')}
   ${bunting(380, 120, 0)}${bunting(560, 90, 2)}
   <rect y="900" width="1080" height="1020" fill="#D9CFBE"/>
   ${Array.from({ length: 10 }, (_, r) => `<path d="M-40 ${950 + r * 90} ${Array.from({ length: 22 }, (_, i) => `l 25 ${i % 2 ? -16 : 16}`).join(' ')} l 25 16" stroke="#2B2B2B" stroke-width="7" fill="none" opacity=".35"/>`).join('')}
   <g transform="translate(820 1200)"><rect x="-120" y="0" width="240" height="26" fill="#333"/><rect x="-110" y="26" width="10" height="130" fill="#333"/><rect x="100" y="26" width="10" height="130" fill="#333"/>
     ${[-80, -30, 20, 70].map(x => `<ellipse cx="${x}" cy="-8" rx="26" ry="9" fill="#9AA6B0"/><circle cx="${x - 22}" cy="-8" r="4" fill="#1A0F0A"/>`).join('')}
     ${[-90, -40, 10, 60].map(x => `<ellipse cx="${x}" cy="4" rx="14" ry="5" fill="#F07B2E" opacity="${0.6 + 0.4 * Math.sin(t * 9 + x)}"/>`).join('')}</g>${smoke}
   ${[[150, 1500], [930, 1520]].map(([x, y]) => `<g transform="translate(${x} ${y})"><rect x="-8" y="-40" width="16" height="120" fill="#2E9E5B"/><circle cy="-70" r="60" fill="#E2365B"/><circle cx="-30" cy="-90" r="12" fill="#FFD45C"/><circle cx="25" cy="-60" r="12" fill="#FFD45C"/><circle cx="0" cy="-110" r="12" fill="#FFD45C"/></g>`).join('')}`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7A35C"/><stop offset=".55" stop-color="#FBD38A"/><stop offset="1" stop-color="#FFF1D6"/></linearGradient>`);
}

function discoSVG(t = 0) {
  const beat = Math.floor(Math.max(0, t - 0.21) * 123 / 60);
  const pal = ['#E2365B', '#FFD45C', '#2E9E5B', '#2E6DB4', '#9B59D0', '#F07B2E'];
  let tiles = '';
  for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
    const y0 = 1150 + r * 110, sk = (r + 1) * 14;
    const col = pal[(r * 3 + c * 5 + beat) % 6];
    tiles += `<polygon points="${c * 160 - sk * (3 - c) / 3},${y0} ${(c + 1) * 160 - sk * (2 - c) / 3},${y0} ${(c + 1) * 160 - sk * (2 - c) / 3},${y0 + 104} ${c * 160 - sk * (3 - c) / 3},${y0 + 104}" fill="${col}" opacity="${(r + c + beat) % 3 === 0 ? 0.95 : 0.45}"/>`;
  }
  let beams = '';
  for (let i = 0; i < 6; i++) { const a = Math.sin(t * 1.3 + i) * 35 + (i - 2.5) * 18; beams += `<polygon points="540,260 ${540 + Math.tan(a * Math.PI / 180) * 1400 - 90},1700 ${540 + Math.tan(a * Math.PI / 180) * 1400 + 90},1700" fill="${pal[i]}" opacity=".16"/>`; }
  let facets = '';
  for (let r = -3; r <= 3; r++) for (let c = -3; c <= 3; c++) { if (r * r + c * c > 11) continue; const on = (r * 7 + c * 3 + beat) % 4 === 0; facets += `<rect x="${540 + c * 26 - 12}" y="${260 + r * 26 - 12}" width="24" height="24" fill="${on ? '#FFFFFF' : '#B8C4CE'}"/>`; }
  let sparks = '';
  for (let i = 0; i < 24; i++) { const x = (i * 197 + t * 60 * (i % 3 + 1)) % 1080, y = 380 + (i * 131) % 700; sparks += `<circle cx="${x}" cy="${y}" r="${4 + (i % 3) * 2}" fill="#fff" opacity="${0.4 + 0.6 * Math.abs(Math.sin(t * 4 + i))}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#dsk)"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 92}" y="0" width="70" height="1150" fill="#2A1846" opacity=".5"/>`).join('')}
   ${beams}<line x1="540" y1="0" x2="540" y2="160" stroke="#888" stroke-width="5"/>
   <circle cx="540" cy="260" r="100" fill="#9AA8B4"/>${facets}${sparks}
   <rect y="1140" width="1080" height="780" fill="#140B24"/>${tiles}
   <rect x="0" y="1090" width="1080" height="60" fill="#3A2266"/>
   ${[100, 980].map(x => `<g transform="translate(${x} 1000)"><rect x="-60" y="-160" width="120" height="250" rx="12" fill="#1B1B1B"/><circle cy="-90" r="40" fill="#333"/><circle cy="-90" r="${16 + 6 * Math.abs(Math.sin(t * 12.4))}" fill="#555"/><circle cy="20" r="${26 + 6 * Math.abs(Math.sin(t * 12.4))}" fill="#444"/></g>`).join('')}`,
   `<linearGradient id="dsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A0E33"/><stop offset="1" stop-color="#4A2470"/></linearGradient>`);
}

function terracoSVG(t = 0) {
  let bulbs = '';
  for (let k = 0; k < 2; k++) for (let i = 0; i < 14; i++) {
    const x = 20 + i * 80, u = x / 1080, y = 420 + k * 170 + 120 * u * (1 - u) * 4 * 0.5;
    bulbs += `<circle cx="${x}" cy="${y}" r="13" fill="#FFE9A8" opacity="${0.7 + 0.3 * Math.sin(t * 5 + i + k)}"/><circle cx="${x}" cy="${y}" r="34" fill="#FFE9A8" opacity=".15"/>`;
  }
  let birds = '';
  for (let i = 0; i < 3; i++) { const x = ((t * 70 + i * 330) % 1300) - 100, y = 260 + i * 60 + Math.sin(t * 2 + i) * 15; birds += `<path d="M${x} ${y} q 14 -14 28 0 q 14 -14 28 0" stroke="#3A2440" stroke-width="5" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#tsk)"/>
   <circle cx="540" cy="${760 + Math.sin(t * 0.2) * 6}" r="150" fill="#FFB25C" opacity=".95"/>${birds}
   ${Array.from({ length: 16 }, (_, i) => `<rect x="${i * 70}" y="${700 + (i % 5) * 20}" width="62" height="${260 - (i % 5) * 20}" fill="#7A4E6E"/>`).join('')}
   <rect x="300" y="610" width="40" height="120" fill="#7A4E6E"/><path d="M280 620 L320 560 L360 620 Z" fill="#7A4E6E"/>
   <rect y="900" width="1080" height="70" fill="#5A3A55"/>
   ${bulbs}
   <rect y="960" width="1080" height="960" fill="#C98A5E"/>
   ${Array.from({ length: 9 }, (_, r) => `<line x1="0" y1="${1000 + r * 100}" x2="1080" y2="${1000 + r * 100}" stroke="#A86E48" stroke-width="5"/>`).join('')}
   ${Array.from({ length: 12 }, (_, c) => `<line x1="${c * 100}" y1="960" x2="${c * 100 - 60}" y2="1920" stroke="#A86E48" stroke-width="5"/>`).join('')}
   <rect x="0" y="940" width="1080" height="30" fill="#EDE3D3"/>${Array.from({ length: 22 }, (_, i) => `<rect x="${i * 50 + 10}" y="870" width="10" height="70" fill="#EDE3D3"/>`).join('')}
   ${[[120, 1250], [960, 1280]].map(([x, y]) => `<g transform="translate(${x} ${y})"><path d="M-50 0 L50 0 L36 110 L-36 110 Z" fill="#B65A3A"/>${[-30, 0, 30].map((dx, j) => `<ellipse cx="${dx + Math.sin(t * 2 + j) * 4}" cy="-50" rx="26" ry="70" fill="#4E9A4B" transform="rotate(${dx / 2} ${dx} 0)"/>`).join('')}</g>`).join('')}`,
   `<linearGradient id="tsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B2A6A"/><stop offset=".45" stop-color="#E26A6A"/><stop offset=".75" stop-color="#FFB27A"/><stop offset="1" stop-color="#FFE0B0"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { arraialSVG, discoSVG, terracoSVG };
