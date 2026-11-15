// New backgrounds (2026-11-15 21:00 gift VAT video): fachadaSVG (old Chiado-style department store facade at night during a Christmas light show, big lit tree projected, crowd silhouettes, falling snow sparkles), embrulhosSVG (small business back room wrapping client gifts: shelves of wrapped boxes, spinning ribbon reel, swinging lamp), chocolatariaSVG (artisan chocolate shop with glass counter, bear-shaped chocolates, hanging paper stars)
const WN = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function fachadaSVG(t = 0) {
  const cols = [0, 1, 2, 3, 4, 5].map(i => `<rect x="${110 + i * 160}" y="420" width="40" height="760" fill="#C9B79A"/>`).join('');
  let wins = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) { const on = (Math.floor(t * 2) + r + c) % 4 !== 0; wins += `<rect x="${160 + c * 160}" y="${460 + r * 230}" width="100" height="160" rx="50" fill="${on ? '#FFE7A3' : '#C99A4A'}" opacity=".9"/>`; }
  // projected tree on facade, made of light dots
  let tree = ''; for (let row = 0; row < 12; row++) { const n = row + 1; for (let k = 0; k < n; k++) { const x = 540 + (k - (n - 1) / 2) * 46, y = 520 + row * 50; const tw = 0.5 + 0.5 * Math.sin(t * 5 + row * 1.3 + k * 2.1); const col = ['#FFD45C', '#E2365B', '#7FE0B0', '#FFFFFF'][(row + k) % 4]; tree += `<circle cx="${x}" cy="${y}" r="${9 + tw * 5}" fill="${col}" opacity="${0.55 + tw * 0.45}"/>`; } }
  const star = `<g transform="translate(540 470) rotate(${t * 30})"><path d="M0 -44 L12 -12 L44 -12 L18 8 L28 40 L0 20 L-28 40 L-18 8 L-44 -12 L-12 -12 Z" fill="#FFD45C"/></g>`;
  let snow = ''; for (let i = 0; i < 40; i++) { const x = (i * 97 + Math.sin(t + i) * 30) % 1080, y = 380 + ((t * 60 + i * 113) % 1500); snow += `<circle cx="${x}" cy="${y}" r="${3 + (i % 3)}" fill="#fff" opacity=".7"/>`; }
  let crowd = ''; for (let i = 0; i < 14; i++) { const x = 20 + i * 78, bob = Math.sin(t * 3 + i) * 5, h = 60 + (i % 3) * 14; crowd += `<g transform="translate(${x} ${1240 + bob})" fill="#0E1A2E"><circle cy="-${h}" r="26"/><rect x="-30" y="-${h - 20}" width="60" height="${h + 40}" rx="24"/></g>`; }
  return WN(`<rect width="1080" height="1920" fill="url(#fsk)"/>
   <rect x="60" y="380" width="960" height="840" fill="#E3D3B6"/><rect x="40" y="370" width="1000" height="30" fill="#C9B79A"/>${cols}${wins}
   <rect x="60" y="380" width="960" height="840" fill="#0B2343" opacity=".35"/>${tree}<rect x="522" y="1120" width="36" height="60" fill="#8A5A3A"/>${star}
   <g stroke="#FFD45C" stroke-width="4" fill="none" opacity=".8">${[0, 1, 2].map(i => `<path d="M0 ${390 + i * 6} Q 270 ${430 + i * 6} 540 ${390 + i * 6} T 1080 ${390 + i * 6}"/>`).join('')}</g>
   <rect y="1180" width="1080" height="740" fill="#2A2F3A"/>${Array.from({ length: 24 }, (_, i) => `<path d="M${(i * 90) % 1080} ${1320 + (i % 6) * 100} q 45 -30 90 0" stroke="#3B4252" stroke-width="10" fill="none"/>`).join('')}
   ${crowd}${snow}`,
    `<linearGradient id="fsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050B1C"/><stop offset="1" stop-color="#1B2A4E"/></linearGradient>`);
}
function embrulhosSVG(t = 0) {
  const box = (x, y, w, h, c, r) => `<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" fill="${c}"/><rect x="${w / 2 - 8}" width="16" height="${h}" fill="${r}"/><rect y="${h / 2 - 8}" width="${w}" height="16" fill="${r}"/><path d="M${w / 2} 0 q -30 -30 -40 0 Z M${w / 2} 0 q 30 -30 40 0 Z" fill="${r}"/></g>`;
  const pal = [['#C8202C', '#FFD45C'], ['#2FA36B', '#FBF5EA'], ['#0B2343', '#E2365B'], ['#FFD45C', '#C8202C'], ['#7A2E3A', '#FFD45C']];
  let shelves = ''; for (let s = 0; s < 3; s++) { shelves += `<rect x="40" y="${520 + s * 230}" width="1000" height="20" fill="#7A5236"/>`; for (let i = 0; i < 6; i++) { const [c, r] = pal[(i + s * 2) % 5]; const w = 110 + (i % 3) * 20, h = 90 + ((i + s) % 3) * 30; shelves += box(70 + i * 160, 520 + s * 230 - h, w, h, c, r); } }
  const sw = Math.sin(t * 1.6) * 8;
  const reel = `<g transform="translate(900 1220)"><circle r="70" fill="#E2365B"/><g transform="rotate(${t * 140})"><circle r="44" fill="#B0203F"/><rect x="-6" y="-44" width="12" height="88" fill="#FFD45C"/></g><circle r="12" fill="#FBF5EA"/><path d="M0 70 Q -120 140 -300 120" stroke="#E2365B" stroke-width="14" fill="none"/></g>`;
  return WN(`<rect width="1080" height="1920" fill="#F2E3C6"/><rect width="1080" height="1180" fill="url(#ewl)"/>
   <rect x="0" y="0" width="1080" height="380" fill="#E7D2AB"/>
   <g transform="translate(540 0) rotate(${sw})"><line x1="0" y1="0" x2="0" y2="140" stroke="#333" stroke-width="5"/><path d="M-70 200 L-40 140 L40 140 L70 200 Z" fill="#2FA36B"/><ellipse cy="200" rx="70" ry="14" fill="#FFF4C2"/></g>
   ${shelves}
   <rect y="1180" width="1080" height="740" fill="#B98A5E"/><rect y="1180" width="1080" height="30" fill="#8C6440"/>
   ${box(120, 1260, 220, 140, '#C8202C', '#FFD45C')}${box(380, 1300, 160, 100, '#2FA36B', '#FBF5EA')}
   <g transform="translate(620 1330)"><rect width="150" height="90" fill="#FBF5EA"/><rect x="18" y="16" width="114" height="14" fill="#9FB3C8"/><rect x="18" y="44" width="80" height="14" fill="#9FB3C8"/></g>
   ${reel}`,
    `<linearGradient id="ewl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F7E9CF"/><stop offset="1" stop-color="#EAD3A8"/></linearGradient>`);
}
function chocolatariaSVG(t = 0) {
  let stars = ''; for (let i = 0; i < 6; i++) { const x = 100 + i * 175, len = 120 + (i % 3) * 60, r = Math.sin(t * 1.4 + i) * 10; stars += `<g transform="translate(${x} 0) rotate(${r})"><line x1="0" y1="0" x2="0" y2="${len}" stroke="#7A5236" stroke-width="3"/><g transform="translate(0 ${len + 40}) rotate(${t * 20 + i * 30})"><path d="M0 -40 L11 -11 L40 -11 L17 7 L25 36 L0 18 L-25 36 L-17 7 L-40 -11 L-11 -11 Z" fill="${['#FFD45C', '#E2365B', '#FBF5EA'][i % 3]}"/></g></g>`; }
  const choc = (x, y, c) => `<g transform="translate(${x} ${y})"><circle cx="-16" cy="-34" r="11" fill="${c}"/><circle cx="16" cy="-34" r="11" fill="${c}"/><circle cy="-22" r="24" fill="${c}"/><ellipse cy="12" rx="28" ry="24" fill="${c}"/></g>`;
  let row = ''; for (let i = 0; i < 9; i++) row += choc(110 + i * 108, 1290, ['#5A3420', '#7A4A2E', '#E8D8C0'][i % 3]);
  let row2 = ''; for (let i = 0; i < 9; i++) row2 += choc(110 + i * 108, 1410, ['#7A4A2E', '#E8D8C0', '#5A3420'][i % 3]);
  const glint = 120 + ((t * 300) % 1100);
  return WN(`<rect width="1080" height="1920" fill="#5A2E22"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 90}" y="0" width="45" height="1180" fill="#6A3828"/>`).join('')}
   <g transform="translate(0 420)">${[0, 1].map(s => `<rect x="60" y="${s * 260 + 200}" width="960" height="18" fill="#3B1E14"/>` + Array.from({ length: 7 }, (_, i) => `<rect x="${90 + i * 135}" y="${s * 260 + 80}" width="100" height="120" rx="10" fill="${['#C8202C', '#FFD45C', '#2FA36B', '#E2365B'][(i + s) % 4]}"/><rect x="${90 + i * 135}" y="${s * 260 + 125}" width="100" height="22" fill="#FBF5EA" opacity=".85"/>`).join('')).join('')}</g>
   ${stars}
   <rect y="1180" width="1080" height="740" fill="#3B1E14"/>
   <rect x="40" y="1200" width="1000" height="300" rx="16" fill="#CFE8F2" opacity=".35"/>${row}${row2}
   <rect x="${glint}" y="1200" width="40" height="300" fill="#fff" opacity=".25" transform="skewX(-20)"/>
   <rect x="40" y="1500" width="1000" height="40" fill="#8C5A3A"/><rect y="1540" width="1080" height="380" fill="#2A140D"/>`);
}
