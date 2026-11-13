// 2026-11-13 08:00 backgrounds: serraSVG (wind farm on a Minho mountain ridge at dawn), banhoSVG (retro pink-and-mint tiled bathroom with bulb mirror), alquevaSVG (Alqueva lake at sunset, floating solar panels, white hill village)
const W3 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function turbine(x, y, s, t, sp) {
  const a = (t * sp * 60) % 360; let bl = '';
  for (let i = 0; i < 3; i++) bl += `<path d="M0 0 L-9 -8 L-4 -150 L4 -150 L9 -8 Z" fill="#F4F6F8" transform="rotate(${a + i * 120})"/>`;
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-7 0 L-12 330 L12 330 L7 0 Z" fill="#E8ECEF"/><g>${bl}</g><circle r="12" fill="#DDE3E8"/></g>`;
}
function serraSVG(t = 0) {
  let clouds = ''; for (let i = 0; i < 3; i++) { const x = ((t * 18 + i * 420) % 1400) - 200; clouds += `<g transform="translate(${x} ${430 + i * 90})" fill="#FFE9DA" opacity=".8"><ellipse rx="110" ry="30"/><ellipse cx="60" cy="-18" rx="70" ry="28"/></g>`; }
  return W3(`<rect width="1080" height="1920" fill="url(#ssk)"/><circle cx="820" cy="760" r="90" fill="#FFD9A0"/>${clouds}
   <path d="M0 900 L180 760 L380 860 L560 720 L760 840 L1080 700 L1080 1920 L0 1920 Z" fill="#7C8FA8"/>
   ${turbine(200, 770, 0.8, t, 0.9)}${turbine(560, 730, 0.9, t, 0.7)}${turbine(930, 715, 0.85, t, 1.1)}
   <path d="M0 1050 L240 930 L480 1010 L720 900 L1080 1000 L1080 1920 L0 1920 Z" fill="#4E7A55"/>
   ${turbine(380, 960, 1.3, t, 0.8)}${turbine(820, 930, 1.4, t, 0.6)}
   <path d="M0 1250 L300 1140 L640 1220 L1080 1120 L1080 1920 L0 1920 Z" fill="#3B6343"/>
   <g fill="#8D8273"><rect x="80" y="1210" width="180" height="70" rx="8"/><path d="M70 1215 L170 1165 L270 1215 Z" fill="#9B4F35"/></g>
   <rect y="1700" width="1080" height="220" fill="#2E4F36"/>`,
   `<linearGradient id="ssk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3D4C7A"/><stop offset=".45" stop-color="#E79A8A"/><stop offset=".7" stop-color="#FFD3A4"/></linearGradient>`);
}
function banhoSVG(t = 0) {
  let tiles = ''; for (let r = 0; r < 14; r++) for (let c = 0; c < 9; c++) tiles += `<rect x="${c * 120 + (r % 2) * 60 - 60}" y="${980 + r * 70}" width="116" height="66" fill="${(r + c) % 2 ? '#9ED9C5' : '#F7B8C4'}"/>`;
  let bulbs = ''; for (let i = 0; i < 6; i++) { const on = 0.75 + 0.25 * Math.sin(t * 9 + i * 1.7); bulbs += `<circle cx="${330 + i * 84}" cy="440" r="22" fill="#FFF3C4" opacity="${on}"/><circle cx="${330 + i * 84}" cy="440" r="40" fill="#FFE9A0" opacity="${on * 0.25}"/>`; }
  let steam = ''; for (let i = 0; i < 4; i++) { const k = ((t * 0.25 + i / 4) % 1); steam += `<ellipse cx="${860 + Math.sin(k * 6 + i) * 30}" cy="${960 - k * 380}" rx="${50 + k * 40}" ry="${26 + k * 14}" fill="#fff" opacity="${0.35 * (1 - k)}"/>`; }
  return W3(`<rect width="1080" height="1920" fill="#F6E7DA"/>${tiles}<rect y="960" width="1080" height="22" fill="#D9C2B0"/>
   <rect x="290" y="400" width="500" height="560" rx="40" fill="#C9A26B"/><rect x="320" y="470" width="440" height="460" rx="24" fill="#CFE6EE"/>
   <path d="M360 520 L460 880" stroke="#fff" stroke-width="18" opacity=".45"/>${bulbs}
   <rect x="740" y="900" width="300" height="120" rx="50" fill="#fff"/><rect x="760" y="1010" width="20" height="60" fill="#C9A26B"/><rect x="1000" y="1010" width="20" height="60" fill="#C9A26B"/>${steam}
   <rect x="60" y="560" width="160" height="40" rx="6" fill="#C9A26B"/><rect x="80" y="500" width="34" height="60" rx="8" fill="#7A2E3A"/><rect x="130" y="515" width="28" height="45" rx="6" fill="#2F7FA8"/><circle cx="185" cy="535" r="22" fill="#F2C14E"/>`);
}
function alquevaSVG(t = 0) {
  let panels = ''; for (let r = 0; r < 4; r++) for (let c = 0; c < 7; c++) { const x = 140 + c * 112 + r * 30, y = 1040 + r * 46 + Math.sin(t * 1.5 + c * .6 + r) * 3; panels += `<path d="M${x} ${y} l96 0 l-14 36 l-96 0 Z" fill="#1F3E6E" stroke="#8FB3E0" stroke-width="3"/>`; }
  let glit = ''; for (let i = 0; i < 10; i++) { const x = (i * 113 + t * 40) % 1080; glit += `<rect x="${x}" y="${1300 + (i % 4) * 60}" width="60" height="5" rx="2" fill="#FFD9A0" opacity="${0.4 + 0.4 * Math.sin(t * 3 + i)}"/>`; }
  return W3(`<rect width="1080" height="1920" fill="url(#ask)"/><circle cx="540" cy="900" r="120" fill="#FFB36B"/>
   <path d="M0 960 Q 200 820 420 900 Q 560 950 700 880 Q 880 790 1080 900 L1080 1000 L0 1000 Z" fill="#8A5A4A"/>
   <g fill="#FBF6EE"><rect x="640" y="840" width="60" height="44"/><rect x="705" y="828" width="50" height="56"/><rect x="760" y="846" width="70" height="38"/><rect x="725" y="770" width="34" height="80"/><path d="M720 770 L742 740 L764 770 Z" fill="#E9DCCB"/><rect x="600" y="855" width="40" height="30"/></g>
   <rect y="990" width="1080" height="930" fill="url(#alk)"/>${panels}${glit}
   <path d="M0 1720 Q 300 1660 620 1700 Q 860 1730 1080 1680 L1080 1920 L0 1920 Z" fill="#A8834E"/>
   <g fill="#5E6B3A"><circle cx="120" cy="1690" r="70"/><circle cx="200" cy="1710" r="55"/><rect x="110" y="1700" width="16" height="90" fill="#5A3D2B"/></g>`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5B3A78"/><stop offset=".5" stop-color="#E77A5C"/><stop offset=".85" stop-color="#FFC48A"/></linearGradient>
    <linearGradient id="alk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D98A6A"/><stop offset=".4" stop-color="#4C6E9C"/><stop offset="1" stop-color="#2A456E"/></linearGradient>`);
}
