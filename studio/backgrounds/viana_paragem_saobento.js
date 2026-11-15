// New backgrounds (2026-11-15 13:00 telework video):
// vianaSVG: Viana do Castelo riverside in heavy rain, hilltop basilica (Santa Luzia style), iron bridge, falling rain, ripples
// paragemSVG: windy bus stop shelter on a granite street in a storm, swaying tree, slanted rain, puddle splashes, passing bus lights
// saobentoSVG: Porto railway station hall (São Bento style) with blue-and-white azulejo panels, big clock, skylight and drifting light
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function rainLayer(t, n = 90, slant = 0, speed = 1400, op = 0.55) {
  let r = '';
  for (let i = 0; i < n; i++) {
    const x0 = (i * 97.3) % 1180 - 50, ph = (i * 0.137) % 1;
    const y = ((t * speed + ph * 2000) % 2000) - 80, x = x0 + slant * (y / 1920) * 300;
    r += `<line x1="${x}" y1="${y}" x2="${x + slant * 26}" y2="${y + 60}" stroke="#DCE8F5" stroke-width="3" opacity="${op}"/>`;
  }
  return r;
}
function vianaSVG(t = 0) {
  const houses = [['#E9D9B8', 70], ['#F2F0EA', 120], ['#D7826B', 90], ['#F2F0EA', 110], ['#E8C35A', 80], ['#9DB7C9', 100], ['#F2F0EA', 95], ['#D7826B', 115]];
  let hx = 0, hs = '';
  houses.forEach(([c, w], i) => { const h = 150 + (i * 37) % 70; hs += `<g transform="translate(${hx} ${980 - h})"><rect width="${w + 40}" height="${h}" fill="${c}"/><path d="M-6 0 L${(w + 40) / 2} -40 L${w + 46} 0 Z" fill="#9A4A33"/>${[0, 1].map(k => `<rect x="${14 + k * (w / 2)}" y="30" width="22" height="34" fill="#4F6A86"/>`).join('')}</g>`; hx += w + 40; });
  let ripples = ''; for (let i = 0; i < 14; i++) { const p = (t * 1.3 + i * 0.29) % 1, x = (i * 151) % 1080, y = 1120 + (i * 67) % 260; ripples += `<ellipse cx="${x}" cy="${y}" rx="${8 + p * 40}" ry="${3 + p * 10}" fill="none" stroke="#C9D8E6" stroke-width="3" opacity="${1 - p}"/>`; }
  const cloudX = Math.sin(t * 0.3) * 30;
  return W(`<rect width="1080" height="1920" fill="url(#vsk)"/>
   <g opacity=".85" transform="translate(${cloudX} 0)"><ellipse cx="200" cy="420" rx="300" ry="90" fill="#6E7C8C"/><ellipse cx="760" cy="390" rx="360" ry="100" fill="#5F6D7D"/><ellipse cx="480" cy="470" rx="280" ry="70" fill="#7C8A99"/></g>
   <path d="M0 820 Q 300 560 540 600 Q 800 640 1080 760 L1080 1000 L0 1000 Z" fill="#3E6B4E"/>
   <g transform="translate(560 600)"><rect x="-110" y="-60" width="220" height="80" fill="#D9D3C6"/><ellipse cx="0" cy="-70" rx="70" ry="80" fill="#CFC8BA"/><rect x="-8" y="-180" width="16" height="40" fill="#BDB6A8"/><circle cy="-185" r="12" fill="#BDB6A8"/><rect x="-150" y="-30" width="40" height="50" fill="#D9D3C6"/><rect x="110" y="-30" width="40" height="50" fill="#D9D3C6"/><circle cy="-10" r="22" fill="#8C8A84"/></g>
   ${hs}
   <rect y="980" width="1080" height="420" fill="#56738A"/>${ripples}
   <g stroke="#5B5F66" stroke-width="10" fill="none"><line x1="-20" y1="1060" x2="1100" y2="1060"/><line x1="-20" y1="1110" x2="1100" y2="1110"/>${Array.from({ length: 12 }, (_, i) => `<path d="M${i * 95} 1060 l47 50 l48 -50"/>`).join('')}</g>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${60 + i * 190}" y="1110" width="24" height="260" fill="#4A4E55"/>`).join('')}
   <rect y="1380" width="1080" height="540" fill="#6D6A66"/>${Array.from({ length: 40 }, (_, i) => `<rect x="${(i * 131) % 1080}" y="${1400 + (i * 53) % 500}" width="70" height="34" rx="6" fill="#625F5B"/>`).join('')}
   ${rainLayer(t, 110, 0.15)}`,
   `<linearGradient id="vsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4A5868"/><stop offset="1" stop-color="#9AA8B6"/></linearGradient>`);
}
function paragemSVG(t = 0) {
  const sway = Math.sin(t * 2.2) * 10, gust = Math.sin(t * 3.1) * 0.5 + 0.5;
  let splashes = ''; for (let i = 0; i < 10; i++) { const p = (t * 1.8 + i * 0.37) % 1, x = 60 + (i * 113) % 980, y = 1500 + (i * 41) % 300; splashes += `<g opacity="${1 - p}"><ellipse cx="${x}" cy="${y}" rx="${6 + p * 34}" ry="${2 + p * 8}" fill="none" stroke="#C9D8E6" stroke-width="3"/><circle cx="${x - 10}" cy="${y - p * 30}" r="4" fill="#C9D8E6"/><circle cx="${x + 12}" cy="${y - p * 26}" r="4" fill="#C9D8E6"/></g>`; }
  const busX = ((t * 260) % 2200) - 1100;
  let leaves = ''; for (let i = 0; i < 8; i++) { const p = (t * 0.5 + i * 0.125) % 1; leaves += `<ellipse cx="${-40 + p * 1200}" cy="${520 + (i * 83) % 500 + Math.sin(p * 12 + i) * 40}" rx="14" ry="7" fill="#C9862E" transform="rotate(${p * 720} ${-40 + p * 1200} ${520 + (i * 83) % 500})"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>
   <g fill="#8E8A82"><rect x="0" y="420" width="320" height="700"/><rect x="760" y="380" width="320" height="740"/></g>
   ${[0, 1, 2].map(r => [0, 1].map(c => `<rect x="${50 + c * 140}" y="${480 + r * 200}" width="80" height="120" fill="${(r + c) % 2 ? '#F4D58A' : '#5B6B7C'}"/>`).join('')).join('')}
   ${[0, 1, 2].map(r => [0, 1].map(c => `<rect x="${810 + c * 140}" y="${440 + r * 200}" width="80" height="120" fill="${(r + c + 1) % 2 ? '#F4D58A' : '#5B6B7C'}"/>`).join('')).join('')}
   <g transform="translate(560 1120) rotate(${sway * 0.4})"><rect x="-16" y="-320" width="32" height="320" fill="#5A4030"/><g transform="rotate(${sway})"><circle cx="0" cy="-380" r="130" fill="#3F6E3C"/><circle cx="-90" cy="-320" r="90" fill="#4A7D44"/><circle cx="90" cy="-330" r="95" fill="#36623A"/></g></g>
   <rect y="1120" width="1080" height="140" fill="#4B4F57"/>
   <g transform="translate(${busX} 1040)"><rect width="900" height="200" rx="26" fill="#E3B23C"/><rect x="40" y="30" width="800" height="80" rx="10" fill="#2E3D4F"/><circle cx="150" cy="200" r="40" fill="#222"/><circle cx="740" cy="200" r="40" fill="#222"/><circle cx="890" cy="160" r="18" fill="#FFF3B0"/></g>
   <rect y="1260" width="1080" height="660" fill="#77736E"/>${Array.from({ length: 36 }, (_, i) => `<rect x="${(i * 149) % 1080}" y="${1280 + (i * 61) % 600}" width="90" height="40" rx="6" fill="#6C6863"/>`).join('')}
   <ellipse cx="540" cy="1640" rx="420" ry="70" fill="#8FA3B5" opacity=".7"/>
   <g transform="translate(70 900)"><rect x="0" y="0" width="16" height="560" fill="#3A4452"/><rect x="920" y="0" width="16" height="560" fill="#3A4452"/><rect x="-20" y="-30" width="980" height="40" rx="10" fill="#2F6B8F"/><rect x="16" y="10" width="904" height="420" fill="#BFD8E8" opacity=".25"/>
     <rect x="640" y="60" width="200" height="90" rx="10" fill="#2F6B8F"/><text x="740" y="120" text-anchor="middle" font-family="Inter" font-weight="900" font-size="46" fill="#fff">BUS</text>
     <rect x="120" y="500" width="700" height="22" rx="8" fill="#5A4030"/></g>
   ${leaves}${splashes}
   ${rainLayer(t, 130, 1.2 + gust * 0.6, 1700, 0.6)}`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B4656"/><stop offset="1" stop-color="#8794A3"/></linearGradient>`);
}
function saobentoSVG(t = 0) {
  const tile = (x, y, w, h, k) => {
    let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#F4F6FA" stroke="#1F4E9A" stroke-width="10"/>`;
    for (let i = 0; i < 6; i++) s += `<path d="M${x + 20} ${y + h - 30 - i * (h / 7)} q ${w / 4} ${-30 - (i + k) % 3 * 15} ${w / 2} 0 t ${w / 2 - 40} 0" fill="none" stroke="#2D63B8" stroke-width="${6 + (i % 2) * 4}" opacity=".85"/>`;
    s += `<circle cx="${x + w * 0.7}" cy="${y + h * 0.3}" r="${h * 0.09}" fill="none" stroke="#2D63B8" stroke-width="6"/>`;
    return s;
  };
  const beam = 0.18 + Math.sin(t * 0.8) * 0.06;
  const hand = (t * 6) % 360;
  let dust = ''; for (let i = 0; i < 18; i++) { const p = (t * 0.08 + i / 18) % 1; dust += `<circle cx="${300 + (i * 61) % 500 + Math.sin(p * 9 + i) * 20}" cy="${1500 - p * 1000}" r="3" fill="#FFF6D8" opacity="${0.6 * Math.sin(p * Math.PI)}"/>`; }
  return W(`<rect width="1080" height="1920" fill="#E9DCC3"/>
   <rect x="0" y="0" width="1080" height="400" fill="#CDBB98"/>
   <rect x="240" y="0" width="600" height="160" fill="#F8F2E0"/>${[0, 1, 2, 3].map(i => `<rect x="${250 + i * 150}" y="0" width="8" height="160" fill="#A9946E"/>`).join('')}
   <path d="M240 160 L120 1500 L960 1500 L840 160 Z" fill="#FFF6D8" opacity="${beam}"/>
   <rect x="0" y="400" width="1080" height="30" fill="#B49E77"/>
   ${tile(30, 470, 330, 520, 0)}${tile(375, 470, 330, 520, 1)}${tile(720, 470, 330, 520, 2)}
   <rect x="0" y="1000" width="1080" height="20" fill="#B49E77"/>
   <g fill="#1F4E9A">${Array.from({ length: 27 }, (_, i) => `<rect x="${i * 40}" y="1030" width="32" height="32" opacity="${i % 2 ? 1 : .55}"/>`).join('')}</g>
   <g transform="translate(540 1110)"><circle r="0" /></g>
   <rect y="1080" width="1080" height="840" fill="#BFA98A"/>${Array.from({ length: 12 }, (_, i) => `<line x1="${i * 100}" y1="1080" x2="${540 + (i * 100 - 540) * 2.2}" y2="1920" stroke="#AE9878" stroke-width="4"/>`).join('')}
   ${[1200, 1360, 1560].map(y => `<line x1="0" y1="${y}" x2="1080" y2="${y}" stroke="#AE9878" stroke-width="4"/>`).join('')}
   <g transform="translate(540 1060)"><circle r="0"/></g>
   ${dust}`);
}
