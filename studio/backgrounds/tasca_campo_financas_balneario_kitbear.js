// Football video backgrounds: tascaSVG (snack bar with TV), campoSVG (amateur pitch), financasSVG (tax office counter), balnearioSVG (locker room)
// plus kitBearSVG(o): a teammate bear in football kit, viewBox 400x600, feet at (200,590).
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function kitBearSVG(o = {}) {
  const O = Object.assign({ fur: '#7A4E30', shirt: '#C8202C', shorts: '#1B4F2A', num: 10, run: 0, mouth: 0, kick: 0, flip: 1 }, o);
  const ph = O.run, lA = Math.sin(ph) * 35, lB = -Math.sin(ph) * 35, aA = -Math.sin(ph) * 40, aB = Math.sin(ph) * 40;
  const leg = (x, a, k) => `<g transform="translate(${x} 430) rotate(${a + k})"><rect x="-22" y="0" width="44" height="120" rx="20" fill="${O.fur}"/><rect x="-22" y="70" width="44" height="50" rx="10" fill="#F7F7F7"/><ellipse cx="8" cy="128" rx="34" ry="16" fill="#1A1A1A"/></g>`;
  const arm = (x, a) => `<g transform="translate(${x} 270) rotate(${a})"><rect x="-20" y="0" width="40" height="120" rx="20" fill="${O.shirt}"/><circle cy="125" r="24" fill="${O.fur}"/></g>`;
  const mo = Math.max(0, Math.min(1, O.mouth));
  return `<svg viewBox="0 0 400 600" xmlns="http://www.w3.org/2000/svg" style="overflow:visible"><g transform="translate(200 0) scale(${O.flip} 1) translate(-200 0)">
   <ellipse cx="200" cy="592" rx="110" ry="14" fill="rgba(0,0,0,.25)"/>
   ${leg(160, lA, 0)}${leg(240, lB, -O.kick)}${arm(110, aA)}
   <rect x="110" y="250" width="180" height="200" rx="50" fill="${O.shirt}"/><text x="200" y="380" text-anchor="middle" font-family="Inter" font-weight="900" font-size="80" fill="#F7F7F7">${O.num}</text>
   <rect x="118" y="410" width="164" height="70" rx="20" fill="${O.shorts}"/>
   ${arm(290, aB)}
   <circle cx="120" cy="80" r="40" fill="${O.fur}"/><circle cx="280" cy="80" r="40" fill="${O.fur}"/>
   <circle cx="200" cy="160" r="110" fill="${O.fur}"/><ellipse cx="200" cy="205" rx="58" ry="42" fill="#D9AE85"/>
   <circle cx="160" cy="140" r="12" fill="#1A0F0A"/><circle cx="240" cy="140" r="12" fill="#1A0F0A"/>
   <ellipse cx="200" cy="188" rx="20" ry="14" fill="#2A160E"/>
   ${mo > 0.02 ? `<ellipse cx="200" cy="228" rx="18" ry="${4 + mo * 16}" fill="#5A1A22"/>` : `<path d="M182 224 Q 200 236 218 224" stroke="#2A160E" stroke-width="6" fill="none" stroke-linecap="round"/>`}
  </g></svg>`;
}
function tascaSVG(t = 0) {
  const tiles = (y, h) => { let s = ''; for (let i = 0; i < 27; i++) for (let j = 0; j < h / 40; j++) s += `<rect x="${i * 40 + 2}" y="${y + j * 40 + 2}" width="36" height="36" fill="${(i + j) % 2 ? '#F4F1EA' : '#DCE8F2'}"/><circle cx="${i * 40 + 20}" cy="${y + j * 40 + 20}" r="6" fill="#2E6DB4" opacity=".7"/>`; return s; };
  return W(`<rect width="1080" height="1920" fill="#E9DCC6"/>
   ${tiles(1000, 280)}
   <rect x="0" y="0" width="1080" height="1000" fill="#F2E6CF"/>
   <rect x="120" y="420" width="840" height="470" rx="18" fill="#1B1B1B"/><rect x="145" y="445" width="790" height="420" fill="#2A6E3A"/><rect x="145" y="445" width="790" height="420" fill="url(#tvg)"/>
   <circle cx="540" cy="600" r="${60 + Math.sin(t * 3) * 4}" fill="#F7F7F7"/><path d="M510 570 l30 -15 l30 15 l-8 38 h-44 Z" fill="#1B1B1B"/>
   <rect x="145" y="735" width="790" height="130" fill="#C8202C"/><text x="540" y="782" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="#FFD45C" letter-spacing="6">ÚLTIMA HORA</text>
   <text x="540" y="842" text-anchor="middle" font-family="Inter" font-weight="900" font-size="38" fill="#fff">O capitão diz adeus à seleção · 146 golos</text>
   <rect x="520" y="890" width="40" height="60" fill="#1B1B1B"/>
   <rect x="720" y="20" width="260" height="140" rx="10" fill="#6B4A32"/>${[0].map(r => [0, 1, 2].map(c => `<rect x="${740 + c * 80}" y="${40 + r * 90}" width="50" height="70" rx="8" fill="${['#2E7D32', '#8D6E63', '#F9A825', '#C62828'][(r + c) % 4]}"/>`).join('')).join('')}
   <rect x="0" y="1000" width="1080" height="30" fill="#6B4A32"/>
   <rect x="0" y="1280" width="1080" height="640" fill="#8A6A4A"/><rect x="0" y="1280" width="1080" height="20" fill="#5E4129"/>
   ${[200, 520, 840].map((x, i) => `<g transform="translate(${x} 1010)"><rect x="-40" y="-26" width="80" height="26" rx="6" fill="#F7F7F7"/><rect x="-26" y="-60" width="52" height="40" rx="8" fill="#FBF5EA"/><path d="M26 -50 q 22 0 18 18" stroke="#FBF5EA" stroke-width="8" fill="none"/><path d="M-8 -70 q ${8 + Math.sin(t * 3 + i) * 6} -20 0 -40" stroke="#fff" stroke-width="4" fill="none" opacity=".6"/></g>`).join('')}`,
   `<linearGradient id="tvg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3E8E52" stop-opacity="0"/><stop offset="1" stop-color="#0E3A1C" stop-opacity=".6"/></linearGradient>`);
}
function campoSVG(t = 0) {
  let stripes = ''; for (let i = 0; i < 9; i++) { const y0 = 900 + Math.pow(i / 9, 1.4) * 1020, y1 = 900 + Math.pow((i + 1) / 9, 1.4) * 1020; stripes += `<rect y="${y0}" width="1080" height="${y1 - y0 + 1}" fill="${i % 2 ? '#3E9A4A' : '#48A957'}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#csk2)"/>
   <rect y="620" width="1080" height="200" fill="#9AA6B4"/>${Array.from({ length: 6 }, (_, r) => `<rect y="${640 + r * 30}" width="1080" height="10" fill="#7E8A98"/>`).join('')}
   ${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 97) % 1080}" cy="${650 + (i * 37) % 160}" r="9" fill="${['#C8202C', '#F9A825', '#2E6DB4', '#F7F7F7'][i % 4]}" opacity=".7"/>`).join('')}
   ${[60, 1020].map(x => `<rect x="${x - 8}" y="300" width="16" height="520" fill="#4A5563"/><rect x="${x - 60}" y="280" width="120" height="50" rx="6" fill="#4A5563"/>${[0, 1, 2].map(i => `<circle cx="${x - 36 + i * 36}" cy="305" r="12" fill="#FFF6C8"/>`).join('')}`).join('')}
   <rect y="820" width="1080" height="80" fill="#3E9A4A"/>${stripes}
   <path d="M60 1920 L300 900 L780 900 L1020 1920" stroke="#F7F7F7" stroke-width="6" fill="none" opacity=".85"/>
   <path d="M400 900 L400 860 L680 860 L680 900" stroke="#F7F7F7" stroke-width="8" fill="none"/><rect x="410" y="864" width="260" height="36" fill="none" stroke="#DDD" stroke-width="2" stroke-dasharray="6 6"/>
   <ellipse cx="540" cy="1260" rx="200" ry="40" fill="none" stroke="#F7F7F7" stroke-width="6" opacity=".8"/>
   <line x1="0" y1="1260" x2="1080" y2="1260" stroke="#F7F7F7" stroke-width="6" opacity=".8"/>`,
   `<linearGradient id="csk2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FB6E8"/><stop offset="1" stop-color="#E4F3FF"/></linearGradient>`);
}
function financasSVG(t = 0) {
  const blink = Math.floor(t * 1.5) % 2;
  return W(`<rect width="1080" height="1920" fill="#E6E9EC"/>
   <rect y="0" width="1080" height="180" fill="#D1D6DB"/>
   <rect x="140" y="20" width="800" height="150" rx="16" fill="#1B2430"/><text x="300" y="68" text-anchor="middle" font-family="Inter" font-weight="800" font-size="40" fill="#9FB3C8">SENHA</text><text x="300" y="150" text-anchor="middle" font-family="Inter" font-weight="900" font-size="78" fill="${blink ? '#FF5252' : '#FF8A80'}">A027</text>
   <text x="700" y="68" text-anchor="middle" font-family="Inter" font-weight="800" font-size="40" fill="#9FB3C8">BALCÃO</text><text x="700" y="150" text-anchor="middle" font-family="Inter" font-weight="900" font-size="78" fill="#FF8A80">3</text>
   <rect x="0" y="460" width="1080" height="560" fill="#F4F6F8"/>${[0, 1, 2].map(i => `<rect x="${60 + i * 340}" y="520" width="280" height="300" rx="8" fill="#DDE6EE"/><rect x="${80 + i * 340}" y="540" width="240" height="160" fill="#BFD3E6"/><text x="${200 + i * 340}" y="780" text-anchor="middle" font-family="Inter" font-weight="900" font-size="54" fill="#1B2430">${i + 1}</text>`).join('')}
   <rect x="0" y="820" width="1080" height="200" fill="#B0BEC5"/><rect x="0" y="820" width="1080" height="24" fill="#90A4AE"/>
   ${[0, 1, 2, 3, 4].map(i => `<rect x="${140 + i * 170}" y="${860 + (i % 2) * 20}" width="110" height="80" rx="4" fill="#FBF5EA" transform="rotate(${(i % 2 ? 4 : -5)} ${195 + i * 170} 900)"/>`).join('')}
   <rect y="1020" width="1080" height="900" fill="#C9CFD5"/>${Array.from({ length: 10 }, (_, i) => `<line x1="0" y1="${1060 + i * 90}" x2="1080" y2="${1060 + i * 90}" stroke="#B5BCC3" stroke-width="4"/>`).join('')}
   ${Array.from({ length: 12 }, (_, i) => `<line x1="${i * 100}" y1="1020" x2="${i * 100 - 60}" y2="1920" stroke="#B5BCC3" stroke-width="4"/>`).join('')}`);
}
function balnearioSVG(t = 0) {
  const cols = ['#C8202C', '#1B4F2A', '#C8202C', '#F9A825', '#1B4F2A', '#C8202C'];
  return W(`<rect width="1080" height="1920" fill="#CFD8DC"/>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${30 + i * 175}" y="260" width="160" height="820" rx="8" fill="#5C7A8C"/><rect x="${40 + i * 175}" y="270" width="140" height="390" rx="6" fill="#6E8FA3"/><rect x="${40 + i * 175}" y="680" width="140" height="390" rx="6" fill="#6E8FA3"/>${[0, 1, 2].map(k => `<rect x="${70 + i * 175}" y="${300 + k * 14}" width="80" height="6" fill="#4A6372"/>`).join('')}
     <g transform="translate(${110 + i * 175} 420) rotate(${Math.sin(t * 1.2 + i) * 2})"><path d="M-60 0 L-30 -30 L30 -30 L60 0 L45 20 L35 10 L35 160 L-35 160 L-35 10 L-45 20 Z" fill="${cols[i]}"/><text x="0" y="100" text-anchor="middle" font-family="Inter" font-weight="900" font-size="56" fill="#F7F7F7">${[3, 10, 7, 9, 11, 21][i]}</text></g>`).join('')}
   <rect x="0" y="1080" width="1080" height="70" fill="#8D6E4F"/><rect x="0" y="1150" width="1080" height="24" fill="#6B4A32"/>
   ${[150, 930].map(x => `<rect x="${x - 10}" y="1174" width="20" height="120" fill="#5E4129"/>`).join('')}
   <rect y="1294" width="1080" height="626" fill="#B0BEC5"/>${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${1330 + i * 70}" x2="1080" y2="${1330 + i * 70}" stroke="#9EACB4" stroke-width="4"/>`).join('')}${Array.from({ length: 12 }, (_, i) => `<line x1="${i * 100}" y1="1294" x2="${i * 100}" y2="1920" stroke="#9EACB4" stroke-width="4"/>`).join('')}
   <g transform="translate(820 1060)"><ellipse rx="70" ry="16" fill="#F7F7F7"/><rect x="-60" y="-16" width="120" height="10" rx="4" fill="#E0E0E0"/></g>
   <rect x="0" y="0" width="1080" height="240" fill="#B0BEC5"/>${[180, 540, 900].map(x => `<rect x="${x - 90}" y="60" width="180" height="24" rx="10" fill="#FFFDE7"/><rect x="${x - 120}" y="84" width="240" height="60" fill="#FFFDE7" opacity=".12"/>`).join('')}`);
}
if (typeof module !== 'undefined') module.exports = { tascaSVG, campoSVG, financasSVG, balnearioSVG, kitBearSVG };
