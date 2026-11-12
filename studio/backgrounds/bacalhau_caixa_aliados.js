// New backgrounds: bacalhoeiraSVG (old codfish shop on a Lisbon street with dried cod hanging and price tags),
// caixaSVG (supermarket checkout with moving conveyor, card terminal and shelves), aliadosSVG (Porto avenue at night with Christmas lights and city hall tower)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function bacalhoeiraSVG(t = 0) {
  const cod = (x, y, s, i) => { const r = Math.sin(t * 1.6 + i) * 4; return `<g transform="translate(${x} ${y}) rotate(${r}) scale(${s})"><line x1="0" y1="-40" x2="0" y2="0" stroke="#5A4630" stroke-width="4"/><path d="M0 0 C 60 20, 70 120, 40 230 L 0 290 L -40 230 C -70 120, -60 20, 0 0 Z" fill="#E8DCC0" stroke="#B9A57E" stroke-width="5"/><path d="M0 20 L0 260" stroke="#CDBB93" stroke-width="6"/><path d="M-20 290 L0 260 L20 290 Z" fill="#D9C9A5"/></g>`; };
  const tag = (x, y, p) => `<g transform="translate(${x} ${y}) rotate(-4)"><rect width="150" height="70" rx="8" fill="#FFF8E6" stroke="#C8202C" stroke-width="5"/><text x="75" y="48" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="#C8202C">${p}</text></g>`;
  return W(`<rect width="1080" height="1920" fill="#F4E9D6"/>
   <rect x="0" y="0" width="1080" height="420" fill="#D9C7A8"/>
   ${[0, 1, 2, 3].map(i => `<rect x="${60 + i * 260}" y="40" width="160" height="150" fill="#3E5A74"/><rect x="${50 + i * 260}" y="190" width="180" height="12" fill="#2B2B2B"/>`).join('')}
   <rect x="0" y="420" width="1080" height="70" fill="#1F4E3D"/>
   <rect x="0" y="490" width="1080" height="810" fill="#6E4B30"/>
   <rect x="40" y="520" width="1000" height="760" fill="#3A2A1C"/>
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${60 + i * 165}" y="520" width="10" height="760" fill="#4A3624"/>`).join('')}
   <rect x="40" y="560" width="1000" height="12" fill="#8A6A48"/>
   ${[0, 1, 2, 3, 4, 5].map(i => cod(130 + i * 165, 600, 0.95, i)).join('')}
   ${tag(90, 930, '21,95€')}${tag(420, 950, '+32%')}${tag(760, 930, '21,95€')}
   <rect x="40" y="1060" width="1000" height="220" fill="#8A6A48"/>
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${60 + i * 98}" y="1080" width="86" height="80" rx="6" fill="#E8DCC0"/>`).join('')}
   <rect y="1300" width="1080" height="620" fill="#EEE7DA"/>
   ${Array.from({ length: 9 }, (_, r) => `<path d="M-40 ${1340 + r * 64} ${Array.from({ length: 22 }, (_, i) => `l 25 ${i % 2 ? -14 : 14}`).join(' ')} l 25 14" stroke="#24384F" stroke-width="7" fill="none" opacity=".45"/>`).join('')}`);
}
function caixaSVG(t = 0) {
  const off = (t * 60) % 80;
  const shelf = (y, cols) => cols.map((c, i) => `<rect x="${30 + i * 86}" y="${y}" width="70" height="${90 + (i % 3) * 14}" rx="6" fill="${c}" transform="translate(0 ${-(i % 3) * 14})"/>`).join('');
  const C = ['#E2365B', '#FFD45C', '#2E6DB4', '#2FA36B', '#F28C38', '#8E5BB5', '#E2365B', '#FFD45C', '#2E6DB4', '#2FA36B', '#F28C38', '#8E5BB5'];
  return W(`<rect width="1080" height="1920" fill="#EAF2F6"/>
   <rect x="0" y="0" width="1080" height="160" fill="#DDE8EE"/>${[0, 1, 2, 3].map(i => `<rect x="${60 + i * 270}" y="40" width="200" height="22" rx="10" fill="#FFFFFF"/>`).join('')}
   <rect x="0" y="420" width="1080" height="520" fill="#CFDCE4"/>
   ${[460, 620, 780].map(y => `<rect x="0" y="${y + 100}" width="1080" height="16" fill="#9FB3C8"/>` + shelf(y, C)).join('')}
   <rect x="0" y="940" width="1080" height="360" fill="#F6F8FA"/>
   <rect x="0" y="1060" width="1080" height="140" fill="#2B3440"/>
   ${Array.from({ length: 16 }, (_, i) => `<rect x="${i * 80 - off}" y="1070" width="6" height="120" fill="#3D4856"/>`).join('')}
   ${[0, 1, 2].map(i => { const x = ((t * 60 + i * 380) % 1300) - 160; return `<g transform="translate(${x} 1000)"><rect width="${[120, 90, 140][i]}" height="${[70, 90, 60][i]}" rx="10" fill="${['#F3C969', '#E8DCC0', '#9CD3F5'][i]}"/></g>`; }).join('')}
   <g transform="translate(860 920)"><rect x="-60" y="0" width="120" height="150" rx="16" fill="#1B2430"/><rect x="-48" y="12" width="96" height="60" rx="6" fill="${Math.floor(t * 2) % 2 ? '#7FD6A0' : '#5FC08A'}"/><text x="0" y="52" text-anchor="middle" font-family="Inter" font-weight="900" font-size="30" fill="#0B2343">NIF?</text>${[0, 1, 2].map(r => [0, 1, 2].map(c => `<rect x="${-40 + c * 30}" y="${84 + r * 20}" width="20" height="12" rx="3" fill="#596474"/>`).join('')).join('')}</g>
   <rect y="1300" width="1080" height="620" fill="#D7DDE2"/>${Array.from({ length: 7 }, (_, i) => `<line x1="${i * 180}" y1="1300" x2="${i * 180 - 120}" y2="1920" stroke="#C3CAD1" stroke-width="5"/>`).join('')}`);
}
function aliadosSVG(t = 0) {
  let lights = ''; for (let r = 0; r < 5; r++) for (let i = 0; i < 12; i++) { const x = 40 + i * 92, y = 470 + r * 90 + Math.sin(i * 0.9) * 18; const on = (Math.floor(t * 3) + i + r) % 3; lights += `<circle cx="${x}" cy="${y}" r="${9 + (on ? 0 : 3)}" fill="${['#FFE9A8', '#FFD45C', '#FFF6D5'][on]}"/><circle cx="${x}" cy="${y}" r="26" fill="#FFE9A8" opacity="${on ? 0.12 : 0.28}"/>`; }
  let snow = ''; for (let i = 0; i < 26; i++) { const x = (i * 97 + Math.sin(t + i) * 30) % 1080, y = (i * 173 + t * 60) % 1300 + 380; snow += `<circle cx="${x}" cy="${y}" r="${3 + (i % 3)}" fill="#fff" opacity=".7"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#ask)"/>
   <g fill="#2A3350"><rect x="440" y="390" width="200" height="600"/><rect x="470" y="300" width="140" height="100"/><path d="M470 300 L540 230 L610 300 Z"/><rect x="530" y="200" width="20" height="40"/></g>
   <circle cx="540" cy="440" r="34" fill="#FFF6D5"/><circle cx="540" cy="440" r="34" fill="none" stroke="#C9A85A" stroke-width="6"/><line x1="540" y1="440" x2="540" y2="416" stroke="#2A3350" stroke-width="5"/><line x1="540" y1="440" x2="${540 + 18 * Math.cos(t)}" y2="${440 + 18 * Math.sin(t)}" stroke="#2A3350" stroke-width="4"/>
   <rect x="0" y="620" width="440" height="460" fill="#323B5A"/><rect x="640" y="620" width="440" height="460" fill="#323B5A"/>
   ${[0, 1, 2, 3].map(r => [0, 1, 2, 3].map(c => `<rect x="${30 + c * 100}" y="${650 + r * 100}" width="50" height="60" fill="#FFE9A8" opacity="${(r + c) % 3 ? .75 : .35}"/><rect x="${670 + c * 100}" y="${650 + r * 100}" width="50" height="60" fill="#FFE9A8" opacity="${(r + c) % 2 ? .75 : .35}"/>`).join('')).join('')}
   ${lights}
   <g transform="translate(540 1080)"><path d="M0 -330 L140 0 L-140 0 Z" fill="#1E6B45"/><path d="M0 -250 L110 -60 L-110 -60 Z" fill="#2A8A58"/>${[0, 1, 2, 3, 4, 5, 6].map(i => `<circle cx="${Math.sin(i * 1.7) * (20 + i * 15)}" cy="${-280 + i * 40}" r="9" fill="${['#E2365B', '#FFD45C', '#FFF6D5'][(i + Math.floor(t * 2)) % 3]}"/>`).join('')}<path d="M0 -360 l10 22 l24 2 l-18 15 l6 24 l-22 -13 l-22 13 l6 -24 l-18 -15 l24 -2 Z" fill="#FFD45C"/></g>
   ${snow}
   <rect y="1300" width="1080" height="620" fill="#4A4E5C"/><rect y="1300" width="1080" height="22" fill="#6A6E7C"/>
   ${Array.from({ length: 8 }, (_, i) => `<line x1="${i * 160}" y1="1322" x2="${i * 160 - 80}" y2="1920" stroke="#3E4250" stroke-width="5"/>`).join('')}`,
   `<linearGradient id="ask" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1530"/><stop offset=".7" stop-color="#26305A"/><stop offset="1" stop-color="#4A3E6A"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { bacalhoeiraSVG, caixaSVG, aliadosSVG };
