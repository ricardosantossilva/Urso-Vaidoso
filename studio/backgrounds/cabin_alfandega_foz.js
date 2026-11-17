// Backgrounds 2026-11-17 13:00: cabinSVG (plane cabin at night flying to a football away game), alfandegaSVG (airport arrivals customs hall with green and red channels and luggage belt), fozSVG (Porto Foz do Douro pier and small lighthouse at sunset with crashing waves)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function cabinSVG(t = 0) {
  // windows on the left wall with clouds passing, aisle perspective with seats
  let wins = '';
  for (let i = 0; i < 3; i++) {
    const y = 470 + i * 250, x = 70;
    let cl = '';
    for (let j = 0; j < 3; j++) { const cx = ((j * 90 - t * 60 + i * 40) % 300 + 300) % 300 - 40; cl += `<ellipse cx="${cx}" cy="${70 + j * 30}" rx="50" ry="16" fill="#3C4F7A" opacity=".8"/>`; }
    wins += `<g transform="translate(${x} ${y})"><rect x="-6" y="-6" width="152" height="202" rx="70" fill="#D9DDE3"/><clipPath id="cw${i}"><rect width="140" height="190" rx="64"/></clipPath><g clip-path="url(#cw${i})"><rect width="140" height="190" fill="#0E1838"/><circle cx="${100}" cy="40" r="16" fill="#F4EBC8"/>${cl}<circle cx="${30 + i * 20}" cy="${150}" r="2" fill="#FFD45C" opacity="${0.5 + 0.5 * Math.sin(t * 3 + i)}"/></g></g>`;
  }
  let seats = '';
  const rows = [[1500, 1.0], [1260, 0.78], [1080, 0.6], [950, 0.47]];
  rows.slice().reverse().forEach(([y, s]) => {
    [-1, 1].forEach(side => {
      const cx = 540 + side * 300 * s;
      seats += `<g transform="translate(${cx} ${y}) scale(${s})"><rect x="-190" y="-260" width="380" height="330" rx="40" fill="#1F3B73"/><rect x="-170" y="-250" width="340" height="70" rx="26" fill="#E9EEF5"/><rect x="-200" y="60" width="400" height="80" rx="20" fill="#18305E"/>${s > 0.9 ? `<rect x="-110" y="-150" width="220" height="130" rx="10" fill="#0B1220"/><rect x="-100" y="-140" width="200" height="110" rx="6" fill="#123A2A"/><text x="0" y="-95" text-anchor="middle" font-family="Inter" font-weight="900" font-size="34" fill="#fff">CARDIFF</text><text x="0" y="-55" text-anchor="middle" font-family="Inter" font-weight="800" font-size="30" fill="#FFD45C">19:45 ⚽</text>` : ''}</g>`;
    });
  });
  const bump = Math.sin(t * 2.2) * 3;
  return W(`<rect width="1080" height="1920" fill="#2A3346"/>
   <path d="M0 380 Q540 250 1080 380 L1080 0 L0 0 Z" fill="#3A4560"/>
   <rect x="0" y="380" width="1080" height="70" fill="#C9CFD8"/>
   ${[0, 1, 2, 3].map(i => `<rect x="${60 + i * 250}" y="392" width="200" height="46" rx="10" fill="#B4BCC8"/><circle cx="${160 + i * 250}" cy="415" r="7" fill="${i % 2 ? '#7EE0A1' : '#FFE9A8'}" opacity="${0.6 + 0.4 * Math.sin(t * 4 + i)}"/>`).join('')}
   <path d="M0 450 L300 900 L300 1920 L0 1920 Z" fill="#B9C1CD"/>
   <path d="M1080 450 L780 900 L780 1920 L1080 1920 Z" fill="#B9C1CD"/>
   <path d="M300 900 L780 900 L1080 1920 L0 1920 Z" fill="#2C3E66"/>
   <path d="M480 900 L600 900 L700 1920 L380 1920 Z" fill="#355089"/>
   <g transform="translate(0 ${bump})">${wins}</g>
   <rect x="300" y="760" width="480" height="140" fill="#E4E8EE"/><rect x="470" y="790" width="140" height="60" rx="8" fill="#20304F"/><text x="540" y="830" text-anchor="middle" font-family="Inter" font-weight="800" font-size="26" fill="#9EF0B4">EXIT</text>
   <g transform="translate(0 ${bump})">${seats}</g>`);
}

function alfandegaSVG(t = 0) {
  // arrivals customs hall: big green and red signs at the very top, luggage belt with moving suitcases, glass doors
  let bags = '';
  const cols = ['#C8202C', '#2E6FB7', '#F1B33C', '#3BA372', '#7A2E3A'];
  for (let i = 0; i < 6; i++) { const x = ((i * 210 + t * 90) % 1260) - 150; bags += `<g transform="translate(${x} 900)"><rect x="-60" y="-80" width="120" height="90" rx="14" fill="${cols[i % 5]}"/><rect x="-22" y="-98" width="44" height="20" rx="6" fill="none" stroke="#333" stroke-width="6"/></g>`; }
  const pulse = 0.75 + 0.25 * Math.sin(t * 3);
  return W(`<rect width="1080" height="1920" fill="#E9ECEF"/>
   <rect x="0" y="0" width="1080" height="200" fill="#CBD2DA"/>
   <rect x="40" y="40" width="470" height="140" rx="18" fill="#1E9E57" opacity="${pulse}"/><text x="275" y="100" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="#fff">NADA A DECLARAR</text><text x="275" y="150" text-anchor="middle" font-family="Inter" font-weight="700" font-size="30" fill="#DFF7E8">Nothing to declare</text>
   <rect x="570" y="40" width="470" height="140" rx="18" fill="#C8202C" opacity="${1.5 - pulse}"/><text x="805" y="100" text-anchor="middle" font-family="Inter" font-weight="900" font-size="40" fill="#fff">ARTIGOS A DECLARAR</text><text x="805" y="150" text-anchor="middle" font-family="Inter" font-weight="700" font-size="30" fill="#FBDADC">Goods to declare</text>
   <rect x="0" y="360" width="1080" height="560" fill="#D6DCE3"/>
   ${[0, 1, 2, 3, 4].map(i => `<rect x="${30 + i * 210}" y="400" width="180" height="440" fill="#BFD9EA" opacity=".8"/><rect x="${30 + i * 210}" y="400" width="180" height="440" fill="none" stroke="#9AA6B2" stroke-width="8"/><line x1="${70 + i * 210 + ((t * 40) % 120)}" y1="420" x2="${30 + i * 210 + ((t * 40) % 120)}" y2="820" stroke="#fff" stroke-width="10" opacity=".35"/>`).join('')}
   <rect x="0" y="905" width="1080" height="60" fill="#3D4652"/><rect x="0" y="905" width="1080" height="10" fill="#59636F"/>
   ${bags}
   <rect x="0" y="965" width="1080" height="955" fill="#C7C1B5"/>
   ${[0, 1, 2, 3, 4, 5, 6].map(i => `<line x1="${i * 180}" y1="965" x2="${i * 260 - 240}" y2="1920" stroke="#B3AC9F" stroke-width="4"/>`).join('')}
   <line x1="540" y1="965" x2="540" y2="1920" stroke="#1E9E57" stroke-width="16" opacity=".55"/>
   <line x1="0" y1="1300" x2="1080" y2="1300" stroke="#B3AC9F" stroke-width="4"/><line x1="0" y1="1650" x2="1080" y2="1650" stroke="#B3AC9F" stroke-width="4"/>`);
}

function fozSVG(t = 0) {
  // Foz do Douro: granite pier with a small lighthouse, Atlantic waves crashing and spraying, sunset, gulls
  const sp = Math.max(0, Math.sin(t * 1.6));
  let gulls = '';
  for (let i = 0; i < 3; i++) { const x = ((t * 50 + i * 330) % 1300) - 100, y = 520 + i * 70 + Math.sin(t * 2 + i) * 15, f = Math.sin(t * 8 + i) * 12; gulls += `<path d="M${x - 30} ${y + f} Q${x - 15} ${y - 12} ${x} ${y} Q${x + 15} ${y - 12} ${x + 30} ${y + f}" stroke="#2A2A35" stroke-width="5" fill="none"/>`; }
  let waves = '';
  for (let i = 0; i < 4; i++) { const y = 1040 + i * 60, o = Math.sin(t * 1.5 + i) * 30; waves += `<path d="M0 ${y} q 135 ${-20 + o / 3} 270 0 t 270 0 t 270 0 t 270 0" stroke="#BFE3F2" stroke-width="6" fill="none" opacity=".6"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#fsk)"/>
   <circle cx="760" cy="860" r="110" fill="#FFD27A"/>
   <rect x="0" y="900" width="1080" height="500" fill="url(#fse)"/>
   <rect x="640" y="900" width="240" height="420" fill="#FFD27A" opacity=".18"/>
   ${waves}
   <path d="M0 1080 L420 1010 L470 1030 L470 1100 L0 1240 Z" fill="#7C7A78"/>
   <path d="M0 1240 L470 1100 L470 1130 L0 1290 Z" fill="#5F5D5B"/>
   <g transform="translate(430 770)"><rect x="-30" y="0" width="60" height="250" fill="#F2EFE8"/><rect x="-30" y="60" width="60" height="30" fill="#C8202C"/><rect x="-30" y="150" width="60" height="30" fill="#C8202C"/><rect x="-40" y="-10" width="80" height="16" fill="#4A4A4A"/><rect x="-22" y="-60" width="44" height="50" fill="#FFF3B0" opacity="${0.6 + 0.4 * Math.sin(t * 4)}"/><path d="M-30 -60 L0 -95 L30 -60 Z" fill="#C8202C"/></g>
   <g opacity="${sp}"><circle cx="490" cy="${1000 - sp * 120}" r="${50 + sp * 40}" fill="#fff" opacity=".85"/><circle cx="540" cy="${1030 - sp * 80}" r="${40 + sp * 30}" fill="#fff" opacity=".7"/><circle cx="450" cy="${1020 - sp * 60}" r="${30 + sp * 20}" fill="#fff" opacity=".7"/></g>
   ${gulls}
   <rect x="0" y="1400" width="1080" height="520" fill="#D9C7A3"/>
   <path d="M0 1400 q 270 ${-25 + Math.sin(t * 1.5) * 12} 540 0 t 540 0 L1080 1430 L0 1430 Z" fill="#EAF6FB" opacity=".8"/>
   <path d="M0 1560 L1080 1500 L1080 1920 L0 1920 Z" fill="#C9B48E"/>`,
   `<linearGradient id="fsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B2A5E"/><stop offset=".45" stop-color="#E36F5B"/><stop offset=".6" stop-color="#FFB46B"/></linearGradient>
    <linearGradient id="fse" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3E6E9A"/><stop offset="1" stop-color="#1D3E63"/></linearGradient>`);
}
