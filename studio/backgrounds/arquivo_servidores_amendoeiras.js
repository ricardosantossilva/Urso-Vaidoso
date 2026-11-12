// New backgrounds (2026-11-12 'velha guarda' video):
// arquivoSVG: 1980s back office in a Baixa building, grey filing cabinets, typewriter, fax machine spitting paper, wall calendar, turning ceiling fan, paper towers
// servidoresSVG: bright modern data room with server racks, blinking lights, and a little robot arm stamping invoices on a conveyor belt
// amendoeirasSVG: Tras-os-Montes hillside with almond trees in blossom, granite village church and schist walls, petals drifting
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function arquivoSVG(t = 0) {
  const cab = (x, y) => `<g transform="translate(${x} ${y})"><rect width="170" height="420" rx="6" fill="#8D9499"/>${[0, 1, 2, 3].map(i => `<rect x="12" y="${14 + i * 102}" width="146" height="90" rx="4" fill="#A3AAAF" stroke="#6F777C" stroke-width="3"/><rect x="62" y="${50 + i * 102}" width="46" height="12" rx="5" fill="#5D6468"/><rect x="70" y="${30 + i * 102}" width="30" height="14" fill="#F4F1EA"/>`).join('')}</g>`;
  const stack = (x, y, n, w = 120) => Array.from({ length: n }, (_, i) => `<rect x="${x + Math.sin(i * 1.7) * 6}" y="${y - i * 14}" width="${w}" height="12" fill="${i % 3 ? '#F7F3E8' : '#EFE6CC'}" stroke="#CFC4A8" stroke-width="2"/>`).join('');
  const fanA = t * 160;
  const fax = Array.from({ length: 6 }, (_, i) => { const p = ((t * 0.6 + i / 6) % 1); return `<rect x="${830 + Math.sin(i) * 4}" y="${905 + p * 160}" width="120" height="14" rx="3" fill="#FBF8F0" stroke="#D8CFB8" stroke-width="2" opacity="${1 - p * 0.3}" transform="rotate(${p * 30 - 10} 890 ${910 + p * 160})"/>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="#D9CFA9"/>
   <rect width="1080" height="380" fill="#E8E0C2"/>
   <g transform="translate(540 0)"><rect x="-4" y="0" width="8" height="70" fill="#5A4A38"/><circle cy="74" r="20" fill="#5A4A38"/>
     <g transform="translate(0 78) scale(1 .25) rotate(${fanA})">${[0, 90, 180, 270].map(a => `<rect x="-14" y="0" width="28" height="210" rx="12" fill="#7A6450" transform="rotate(${a})"/>`).join('')}</g></g>
   <rect y="380" width="1080" height="14" fill="#A8946E"/>
   <g transform="translate(60 420)"><rect width="300" height="340" fill="#F7F3E8" stroke="#8A7A5E" stroke-width="6"/><rect x="0" y="0" width="300" height="70" fill="#C8202C"/><text x="150" y="50" text-anchor="middle" font-family="Inter" font-weight="900" font-size="44" fill="#fff">MARÇO</text>
     ${Array.from({ length: 28 }, (_, i) => `<rect x="${18 + (i % 7) * 39}" y="${90 + Math.floor(i / 7) * 58}" width="32" height="44" fill="${i === 17 ? '#FFD45C' : '#ECE5D2'}"/>`).join('')}<text x="150" y="330" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="#8A7A5E">1987</text></g>
   <g transform="translate(700 430)"><rect width="300" height="220" rx="8" fill="#A9C7D9" stroke="#7A6450" stroke-width="10"/><path d="M0 110 L300 110 M150 0 L150 220" stroke="#7A6450" stroke-width="8"/><rect x="20" y="20" width="110" height="70" fill="#C6DCE8"/></g>
   ${cab(20, 820)}${cab(200, 820)}
   <rect y="1240" width="1080" height="680" fill="#8B6B4A"/>${Array.from({ length: 9 }, (_, i) => `<rect x="0" y="${1250 + i * 75}" width="1080" height="4" fill="#7A5C3E"/>`).join('')}
   <g transform="translate(400 900)"><rect x="0" y="100" width="640" height="40" fill="#6B4A32"/><rect x="20" y="140" width="40" height="200" fill="#5A3E2A"/><rect x="580" y="140" width="40" height="200" fill="#5A3E2A"/>
     <g transform="translate(40 20)"><rect width="230" height="80" rx="12" fill="#2F3A36"/><rect x="20" y="-46" width="190" height="60" rx="6" fill="#F7F3E8" transform="rotate(${Math.sin(t * 6) * 1.5})"/>${Array.from({ length: 10 }, (_, i) => `<circle cx="${30 + i * 19}" cy="${50 + (i % 2) * 14}" r="7" fill="#DCD6C8"/>`).join('')}</g>
     <g transform="translate(400 10)"><rect width="190" height="95" rx="10" fill="#E2DDD0" stroke="#9A9488" stroke-width="4"/><rect x="18" y="-20" width="150" height="30" rx="6" fill="#C9C3B5"/><rect x="20" y="40" width="70" height="40" fill="#3A3F3C"/><circle cx="140" cy="60" r="${(t * 4) % 1 < .5 ? 9 : 6}" fill="#3FBF5E"/></g></g>
   ${fax}
   ${stack(300, 1190, 22)}${stack(860, 1215, 16, 140)}${stack(80, 1235, 9, 150)}`);
}

function servidoresSVG(t = 0) {
  const rack = (x, y, ph) => `<g transform="translate(${x} ${y})"><rect width="180" height="620" rx="10" fill="#1F2A36"/>${Array.from({ length: 12 }, (_, i) => `<rect x="12" y="${14 + i * 50}" width="156" height="40" rx="4" fill="#2C3A4A"/>${[0, 1, 2].map(j => { const on = Math.sin(t * (3 + j) + i * 1.3 + ph) > 0; return `<circle cx="${130 + j * 12}" cy="${34 + i * 50}" r="4" fill="${on ? ['#3FE07A', '#4FC3F7', '#FFD45C'][j] : '#3D4C5C'}"/>`; }).join('')}<rect x="22" y="${28 + i * 50}" width="70" height="6" rx="3" fill="#41536A"/>`).join('')}</g>`;
  const belt = Array.from({ length: 5 }, (_, i) => { const x = ((t * 140 + i * 230) % 1150) - 70; return `<g transform="translate(${x} 1110)"><rect width="120" height="150" rx="6" fill="#FBF8F0" stroke="#C9D6E2" stroke-width="3" transform="translate(0 -150)"/><rect x="18" y="-128" width="70" height="10" rx="4" fill="#9FB3C8"/><rect x="18" y="-108" width="84" height="8" rx="4" fill="#C9D6E2"/><rect x="18" y="-94" width="60" height="8" rx="4" fill="#C9D6E2"/>${x > 470 ? `<g transform="translate(60 -50) rotate(-12)"><rect x="-40" y="-16" width="80" height="32" rx="6" fill="none" stroke="#2FA36B" stroke-width="5"/><path d="M-16 0 l10 10 l20 -20" stroke="#2FA36B" stroke-width="6" fill="none"/></g>` : ''}</g>`; }).join('');
  const press = Math.max(0, Math.sin(t * 4.4)) * 70;
  return W(`<rect width="1080" height="1920" fill="url(#srv)"/>
   <rect y="380" width="1080" height="10" fill="#9ED2F5" opacity=".6"/>
   ${rack(30, 420, 0)}${rack(230, 420, 1.7)}${rack(870, 420, 3.1)}
   <g opacity=".55">${Array.from({ length: 6 }, (_, i) => `<rect x="${440 + i * 70}" y="420" width="40" height="${300 + Math.sin(t * 2 + i) * 40}" rx="6" fill="#BEE3FA"/>`).join('')}</g>
   <rect y="1040" width="1080" height="880" fill="#DDE7EF"/>${Array.from({ length: 7 }, (_, i) => `<rect x="${i * 160}" y="1040" width="4" height="880" fill="#C3D1DD"/>`).join('')}
   <rect x="0" y="1110" width="1080" height="40" fill="#3A4757"/>${Array.from({ length: 14 }, (_, i) => `<circle cx="${((i * 80 + t * 140) % 1120) - 20}" cy="1130" r="12" fill="#57667A"/>`).join('')}
   ${belt}
   <g transform="translate(560 640)"><rect x="-60" y="-20" width="120" height="40" rx="10" fill="#E8A93A"/><rect x="-14" y="10" width="28" height="${230 + press}" fill="#F2C230"/><rect x="-55" y="${230 + press}" width="110" height="46" rx="8" fill="#2FA36B"/>
     <circle cx="-30" cy="0" r="8" fill="#fff"/><circle cx="30" cy="0" r="8" fill="#fff"/><circle cx="-30" cy="0" r="4" fill="#1A0F0A"/><circle cx="30" cy="0" r="4" fill="#1A0F0A"/></g>`,
   `<linearGradient id="srv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1A2B"/><stop offset=".5" stop-color="#16324F"/><stop offset="1" stop-color="#1D4268"/></linearGradient>`);
}

function amendoeirasSVG(t = 0) {
  const tree = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 C -6 -60, 10 -110, -10 -160 M0 -90 C 30 -120, 50 -140, 70 -170 M-4 -120 C -40 -140, -60 -160, -80 -190" stroke="#4A3426" stroke-width="16" fill="none" stroke-linecap="round"/>${Array.from({ length: 14 }, (_, i) => `<circle cx="${Math.cos(i * 2.4) * 80}" cy="${-170 + Math.sin(i * 1.9) * 50}" r="${34 + (i % 3) * 8}" fill="${i % 2 ? '#FBE3EA' : '#F6C6D4'}"/>`).join('')}</g>`;
  const petals = Array.from({ length: 16 }, (_, i) => { const p = ((t * 0.12 + i / 16) % 1); return `<ellipse cx="${(i * 131 + Math.sin(t + i) * 50) % 1080}" cy="${420 + p * 900}" rx="9" ry="5" fill="#F6C6D4" transform="rotate(${t * 80 + i * 40} ${(i * 131) % 1080} ${420 + p * 900})"/>`; }).join('');
  return W(`<rect width="1080" height="1920" fill="url(#amd)"/>
   <path d="M0 700 C 200 600, 400 640, 560 600 C 760 560, 900 620, 1080 580 L1080 1100 L0 1100 Z" fill="#9BB48A"/>
   <path d="M0 820 C 260 740, 520 800, 760 740 C 900 710, 1000 740, 1080 720 L1080 1200 L0 1200 Z" fill="#7FA06E"/>
   <g transform="translate(700 560)"><rect x="-90" y="0" width="180" height="200" fill="#B9B2A6"/><path d="M-100 0 L0 -60 L100 0 Z" fill="#8A4A32"/><rect x="60" y="-150" width="60" height="350" fill="#AFA89C"/><path d="M55 -150 L90 -195 L125 -150 Z" fill="#8A4A32"/><rect x="78" y="-120" width="24" height="36" rx="12" fill="#4A4038"/><rect x="-24" y="110" width="48" height="90" rx="24" fill="#5A4030"/><circle cy="60" r="18" fill="#4A4038"/></g>
   ${Array.from({ length: 4 }, (_, i) => `<g transform="translate(${80 + i * 100} 800)"><rect width="70" height="60" fill="#A99F92"/><path d="M-6 0 L35 -26 L76 0 Z" fill="#8A4A32"/></g>`).join('')}
   ${tree(150, 1010, 1.2)}${tree(930, 990, 1.1)}${tree(520, 960, 0.7)}${tree(360, 1000, 0.8)}
   <rect y="1080" width="1080" height="840" fill="#6E8B5A"/>
   <g>${Array.from({ length: 20 }, (_, i) => `<rect x="${i * 56}" y="${1080 + (i % 2) * 6}" width="52" height="34" rx="5" fill="${i % 2 ? '#6B6460' : '#5A5450'}"/>`).join('')}</g>
   ${petals}`,
   `<linearGradient id="amd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#9FD0F0"/><stop offset="1" stop-color="#F4F8FF"/></linearGradient>`);
}
