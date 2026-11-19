// New backgrounds: imprensaSVG (football club press room with sponsor wall, microphones, camera flashes),
// correiosSVG (post office counter with registered-letter scale, ticket display and parcels),
// berlengasSVG (Berlengas island fort on a rock with the stone causeway, sunset sea, gulls)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function imprensaSVG(t = 0) {
  // sponsor backdrop: repeating ball and shield pattern (no real brands)
  let wall = '';
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) {
    const x = 60 + c * 200 + (r % 2) * 100, y = 420 + r * 130;
    wall += (r + c) % 2 ? `<g transform="translate(${x} ${y})"><circle r="34" fill="#fff"/><path d="M0 -14 l13 9 -5 15 h-16 l-5 -15 Z" fill="#1B2430"/></g>`
      : `<g transform="translate(${x} ${y})"><path d="M-30 -36 h60 v30 q0 34 -30 46 q-30 -12 -30 -46 Z" fill="#E7C985"/><text y="8" text-anchor="middle" font-family="Inter" font-weight="900" font-size="22" fill="#0B2343">FC</text></g>`;
  }
  let flashes = '';
  for (let i = 0; i < 4; i++) { const ph = (t * 1.3 + i * 0.37) % 1; if (ph < 0.12) flashes += `<circle cx="${120 + i * 270}" cy="${1240 + (i % 2) * 40}" r="${90 - ph * 300}" fill="#fff" opacity="${0.9 - ph * 6}"/>`; }
  const mic = (x, c) => `<g transform="translate(${x} 1150)"><rect x="-5" y="0" width="10" height="90" fill="#333"/><rect x="-18" y="-40" width="36" height="50" rx="16" fill="#222"/><rect x="-22" y="-8" width="44" height="22" rx="4" fill="${c}"/></g>`;
  return W(`<rect width="1080" height="1920" fill="#14213D"/>
   <rect x="0" y="360" width="1080" height="760" fill="#C8202C"/>${wall}
   <rect x="0" y="360" width="1080" height="760" fill="url(#vig)"/>
   <rect x="0" y="1100" width="1080" height="160" fill="#0B2343"/><rect x="0" y="1100" width="1080" height="12" fill="#E7C985"/>
   ${mic(380, '#2E6DB4')}${mic(470, '#FFD45C')}${mic(560, '#2FA36B')}${mic(650, '#E2365B')}
   <rect y="1260" width="1080" height="660" fill="#2A2F3A"/>${Array.from({ length: 6 }, (_, i) => `<rect x="${i * 190 + 20}" y="${1300 + (i % 2) * 30}" width="150" height="120" rx="14" fill="#3A4150"/>`).join('')}
   ${flashes}`,
   `<radialGradient id="vig" cx=".5" cy=".5" r=".7"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></radialGradient>`);
}
function correiosSVG(t = 0) {
  const n = 40 + Math.floor(t / 2.5) % 9;
  const swing = Math.sin(t * 2) * 6;
  return W(`<rect width="1080" height="1920" fill="#F2E9D8"/>
   <rect x="0" y="0" width="1080" height="380" fill="#E6D9C0"/>
   <rect x="0" y="380" width="1080" height="16" fill="#C8202C"/>
   <g transform="translate(830 430)"><rect x="-120" y="0" width="240" height="140" rx="12" fill="#1B2430"/><text x="0" y="40" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#9FB3C8">SENHA</text><text x="0" y="112" text-anchor="middle" font-family="Inter" font-weight="900" font-size="70" fill="#FF5A4E">A${n}</text></g>
   <g transform="translate(220 420) rotate(${swing})"><line x1="0" y1="-40" x2="0" y2="20" stroke="#555" stroke-width="4"/><rect x="-110" y="20" width="220" height="90" rx="10" fill="#C8202C"/><text x="0" y="80" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="#fff">CORREIO</text></g>
   ${[0, 1, 2].map(r => `<rect x="560" y="${640 + r * 110}" width="460" height="16" fill="#8A6A48"/>${[0, 1, 2, 3].map(i => `<rect x="${575 + i * 110}" y="${560 + r * 110 + (i % 2) * 20}" width="${90 - (i % 2) * 20}" height="${80 - (i % 2) * 20}" fill="${['#C99A62', '#B88A55', '#D8B07A'][((r + i) % 3)]}"/><rect x="${575 + i * 110}" y="${590 + r * 110 + (i % 2) * 10}" width="${90 - (i % 2) * 20}" height="8" fill="#E9D7B0"/>`).join('')}`).join('')}
   <rect x="40" y="560" width="460" height="400" rx="10" fill="#E9F2F8"/><rect x="40" y="560" width="460" height="400" rx="10" fill="none" stroke="#B9C9D6" stroke-width="10"/>
   <text x="270" y="640" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="#0B2343">CARTA REGISTADA</text>
   <g transform="translate(270 800)"><rect x="-120" y="40" width="240" height="40" rx="8" fill="#555"/><rect x="-90" y="-10" width="180" height="50" rx="6" fill="#888"/><rect x="-60" y="${-60 + Math.sin(t * 3) * 6}" width="120" height="70" fill="#fff" stroke="#C8202C" stroke-width="6"/><text x="0" y="${-15 + Math.sin(t * 3) * 6}" text-anchor="middle" font-family="Inter" font-weight="900" font-size="22" fill="#C8202C">AR</text></g>
   <rect y="1080" width="1080" height="200" fill="#B8862E"/><rect y="1080" width="1080" height="24" fill="#D9A84A"/>
   <rect y="1280" width="1080" height="640" fill="#CFC3AE"/>${Array.from({ length: 8 }, (_, i) => `<line x1="${i * 150}" y1="1280" x2="${i * 150 - 100}" y2="1920" stroke="#BCAF98" stroke-width="5"/>`).join('')}`);
}
function berlengasSVG(t = 0) {
  let waves = ''; for (let i = 0; i < 10; i++) { const y = 1080 + i * 26; waves += `<path d="M-20 ${y} ${Array.from({ length: 12 }, (_, k) => `q 50 ${Math.sin(t * 2 + i + k) * 8 - 8} 100 0`).join(' ')}" stroke="#fff" stroke-width="4" fill="none" opacity="${0.25 + (i % 3) * 0.1}"/>`; }
  let gulls = ''; for (let i = 0; i < 3; i++) { const x = (t * 50 + i * 360) % 1200 - 60, y = 260 + i * 70 + Math.sin(t * 2 + i) * 15; gulls += `<path d="M${x - 24} ${y} q 12 -14 24 0 q 12 -14 24 0" stroke="#2B2B2B" stroke-width="5" fill="none"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#bsk)"/>
   <circle cx="250" cy="760" r="110" fill="#FFD27A" opacity=".9"/>
   ${gulls}
   <path d="M420 1000 C 470 760, 560 700, 700 720 C 840 740, 960 820, 1000 1000 Z" fill="#6E5A4A"/>
   <path d="M480 1000 C 500 880, 560 820, 640 830 L 640 1000 Z" fill="#5A4A3C"/>
   <g transform="translate(720 640)"><rect x="-150" y="40" width="300" height="140" fill="#B9A58A"/>${Array.from({ length: 8 }, (_, i) => `<rect x="${-150 + i * 40}" y="20" width="24" height="24" fill="#B9A58A"/>`).join('')}<rect x="-60" y="-40" width="120" height="90" fill="#A8947A"/><path d="M-30 180 v-60 a30 30 0 0 1 60 0 v60 Z" fill="#3A2E24"/><rect x="-6" y="-110" width="6" height="80" fill="#333"/><path d="M0 -110 l${50 + Math.sin(t * 4) * 8} 14 l-${50 + Math.sin(t * 4) * 8} 14 Z" fill="#2E6DB4"/></g>
   <path d="M300 1000 L 560 820 L 600 840 L 340 1010 Z" fill="#9C8A72"/>${[0, 1, 2, 3].map(i => `<path d="M${330 + i * 60} ${990 - i * 42} a 22 22 0 0 1 44 -30" stroke="#5A4A3C" stroke-width="10" fill="none"/>`).join('')}
   <rect y="1000" width="1080" height="330" fill="#1E6E8C"/>${waves}
   <rect y="1330" width="1080" height="590" fill="#8C7A64"/>${Array.from({ length: 14 }, (_, i) => `<ellipse cx="${(i * 97) % 1080}" cy="${1380 + (i * 53) % 500}" rx="${40 + (i % 4) * 14}" ry="${18 + (i % 3) * 6}" fill="#7A6A56"/>`).join('')}`,
   `<linearGradient id="bsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3B4E8C"/><stop offset=".55" stop-color="#E88A6A"/><stop offset="1" stop-color="#FFD9A0"/></linearGradient>`);
}
if (typeof module !== 'undefined') module.exports = { imprensaSVG, correiosSVG, berlengasSVG };
