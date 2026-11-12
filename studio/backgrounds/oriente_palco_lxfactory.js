// New backgrounds (2026-11-12 17:00 Web Summit video):
// orienteSVG: Gare do Oriente style station with white steel "tree" canopy in heavy rain, puddles and a train sliding by
// palcoSVG: big tech-conference main stage with a giant screen, moving spotlights and an audience of silhouettes
// lxfactorySVG: old red-brick industrial street turned creative quarter, murals, string lights, bikes and a bookshop arch
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function orienteSVG(t = 0) {
  // steel tree canopy: columns branching into ribs
  let trees = '';
  [140, 420, 700, 980].forEach((x, i) => {
    let ribs = '';
    for (let k = -3; k <= 3; k++) ribs += `<path d="M${x} 760 Q ${x + k * 40} 600 ${x + k * 70} 470" stroke="#E9EEF3" stroke-width="10" fill="none"/>`;
    trees += `<rect x="${x - 14}" y="760" width="28" height="420" fill="#DCE3EA"/>${ribs}`;
  });
  let ridge = ''; for (let x = -40; x < 1120; x += 70) ridge += `<path d="M${x} 470 Q ${x + 35} 420 ${x + 70} 470" stroke="#E9EEF3" stroke-width="8" fill="none"/>`;
  let rain = ''; for (let i = 0; i < 90; i++) { const x = (i * 97) % 1080, y = ((i * 211) + t * 1400) % 1920; rain += `<line x1="${x}" y1="${y}" x2="${x - 14}" y2="${y + 46}" stroke="#BFD3E6" stroke-width="3" opacity=".55"/>`; }
  const tx = ((t * 260) % 2400) - 1300;
  let ripples = ''; for (let i = 0; i < 6; i++) { const ph = (t * 1.3 + i * 0.37) % 1; ripples += `<ellipse cx="${120 + i * 170}" cy="${1560 + (i % 2) * 80}" rx="${10 + ph * 60}" ry="${3 + ph * 14}" fill="none" stroke="#9FB6CC" stroke-width="3" opacity="${1 - ph}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#osk)"/>
   ${ridge}${trees}
   <rect y="1040" width="1080" height="40" fill="#8C97A3"/>
   <g transform="translate(${tx} 960)"><rect width="1300" height="110" rx="30" fill="#F4F4F0"/><rect y="30" width="1300" height="34" fill="#2D6CB5"/>${Array.from({ length: 11 }, (_, i) => `<rect x="${40 + i * 115}" y="10" width="80" height="16" rx="5" fill="#33475B"/>`).join('')}</g>
   <rect y="1080" width="1080" height="840" fill="#56636F"/>
   <rect y="1080" width="1080" height="14" fill="#F2C230"/>
   <rect y="1420" width="1080" height="500" fill="#4A5661" opacity=".7"/>${ripples}
   ${rain}`,
   `<linearGradient id="osk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3D4D5E"/><stop offset=".6" stop-color="#6E8193"/><stop offset="1" stop-color="#8C9DAD"/></linearGradient>`);
}

function palcoSVG(t = 0) {
  const beams = [0, 1, 2, 3].map(i => { const a = Math.sin(t * 0.9 + i * 1.7) * 18; const x = 160 + i * 250; return `<g transform="rotate(${a} ${x} 380)"><path d="M${x - 14} 380 L${x - 150} 1150 L${x + 150} 1150 L${x + 14} 380 Z" fill="${['#7FD3FF', '#FF7FD0', '#FFE27F', '#9CFFB5'][i]}" opacity=".16"/></g>`; }).join('');
  let crowd = ''; for (let r = 0; r < 3; r++) for (let i = 0; i < 13; i++) { const x = i * 88 + (r % 2) * 44 - 10, y = 1250 + r * 110 + Math.sin(t * 3 + i + r) * 4; crowd += `<g fill="${['#1B1F3A', '#151831', '#10122A'][r]}"><circle cx="${x}" cy="${y}" r="34"/><rect x="${x - 50}" y="${y + 26}" width="100" height="120" rx="40"/></g>`; }
  const bars = [0.45, 0.6, 0.8, 1].map((h, i) => `<rect x="${330 + i * 110}" y="${880 - h * 300 * (0.85 + 0.15 * Math.sin(t * 2 + i))}" width="70" height="${h * 300 * (0.85 + 0.15 * Math.sin(t * 2 + i))}" rx="8" fill="#5BE0C8"/>`).join('');
  return W(`<rect width="1080" height="1920" fill="#0C0E24"/>
   <rect x="0" y="380" width="1080" height="40" fill="#1E2250"/>
   ${Array.from({ length: 8 }, (_, i) => `<circle cx="${100 + i * 126}" cy="400" r="12" fill="#FFF6C8" opacity="${0.6 + 0.4 * Math.sin(t * 4 + i)}"/>`).join('')}
   <rect x="200" y="480" width="680" height="440" rx="18" fill="#141A46" stroke="#3A4AC8" stroke-width="10"/>
   <rect x="230" y="510" width="620" height="380" rx="10" fill="url(#scr)"/>${bars}
   <path d="M300 900 L780 560" stroke="#FFD45C" stroke-width="12" stroke-linecap="round" opacity=".9"/>
   ${beams}
   <rect y="1080" width="1080" height="60" fill="#262B66"/><rect y="1140" width="1080" height="780" fill="#0A0B1C"/>
   ${crowd}`,
   `<linearGradient id="scr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2B2F8F"/><stop offset="1" stop-color="#6A2B8F"/></linearGradient>`);
}

function lxfactorySVG(t = 0) {
  const bulbs = Array.from({ length: 16 }, (_, i) => { const x = 40 + i * 66, y = 520 + Math.sin(i / 15 * Math.PI) * 90; return `<circle cx="${x}" cy="${y}" r="11" fill="#FFE59A" opacity="${0.7 + 0.3 * Math.sin(t * 3 + i)}"/>`; }).join('');
  const bricks = (x, y, w, h) => { let s = ''; for (let r = 0; r < h / 30; r++) s += `<line x1="${x}" y1="${y + r * 30}" x2="${x + w}" y2="${y + r * 30}" stroke="#8E3B2A" stroke-width="3"/>`; return s; };
  const bike = (x) => `<g transform="translate(${x} 1240)" stroke="#20323F" stroke-width="7" fill="none"><circle cx="0" cy="0" r="46"/><circle cx="130" cy="0" r="46"/><path d="M0 0 L50 -70 L110 -70 L130 0 M50 -70 L65 0 L110 -70 M40 -90 L60 -90 M110 -70 L105 -100 L130 -100"/></g>`;
  const fly = ((t * 60) % 1300) - 100;
  return W(`<rect width="1080" height="1920" fill="url(#lsk)"/>
   <rect x="0" y="380" width="420" height="900" fill="#B4513A"/>${bricks(0, 380, 420, 900)}
   ${[0, 1, 2].map(r => [0, 1].map(c => `<rect x="${60 + c * 180}" y="${430 + r * 230}" width="120" height="170" rx="60" fill="#2F3B44"/><rect x="${66 + c * 180}" y="${436 + r * 230}" width="108" height="158" rx="54" fill="#F6CF72" opacity=".55"/>`).join('')).join('')}
   <rect x="660" y="420" width="420" height="860" fill="#A6472F"/>${bricks(660, 420, 420, 860)}
   <g transform="translate(700 700)"><circle cx="160" cy="160" r="150" fill="#2AB3A6"/><circle cx="110" cy="130" r="70" fill="#F2C230"/><path d="M40 260 Q160 120 300 250" stroke="#E2365B" stroke-width="30" fill="none"/><circle cx="210" cy="110" r="30" fill="#fff"/></g>
   <rect x="420" y="600" width="240" height="680" fill="#5E6B73"/><path d="M440 1280 L440 820 Q540 700 640 820 L640 1280 Z" fill="#2B2420"/><path d="M460 1280 L460 830 Q540 730 620 830 L620 1280 Z" fill="#7A4E2E"/>
   ${Array.from({ length: 5 }, (_, i) => `<rect x="${472 + i * 28}" y="900" width="20" height="${120 + (i % 3) * 30}" fill="${['#E2365B', '#2AB3A6', '#F2C230', '#4B6CC9', '#fff'][i]}"/>`).join('')}
   <path d="M0 520 Q540 650 1080 520" stroke="#333" stroke-width="3" fill="none"/>${bulbs}
   <rect y="1280" width="1080" height="640" fill="#8F8A82"/>${Array.from({ length: 40 }, (_, i) => `<rect x="${(i % 10) * 108 + ((i / 10 | 0) % 2) * 54}" y="${1290 + (i / 10 | 0) * 60}" width="100" height="52" rx="6" fill="#9C978E"/>`).join('')}
   ${bike(120)}${bike(800)}
   <path d="M${fly} 460 q12 -14 24 0 q12 -14 24 0" stroke="#2B2B2B" stroke-width="4" fill="none"/>`,
   `<linearGradient id="lsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F8B37A"/><stop offset=".55" stop-color="#F7D9A8"/><stop offset="1" stop-color="#EFE3C8"/></linearGradient>`);
}
