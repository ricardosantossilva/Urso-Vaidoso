// Music video backgrounds (2026-11-17 'Uma dica por dia: saúde no IRS'):
// farmaciaSVG: old-town shopping street dressed for Christmas, a tiled pharmacy with a blinking green neon cross,
//   swinging 'Farmácia' sign, zigzag light garlands across the street and drifting confetti
// patinsSVG: neon roller-disco rink at night, skaters circling the oval, pulsing neon rings and sweeping coloured beams
// monsarazSVG: Monsaraz-style walled hilltop village at night, lit castle keep, Milky Way, shooting star,
//   and the big lake below reflecting the moon
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function farmaciaSVG(t = 0) {
  const cols = ['#FFD45C', '#E2365B', '#2E9E5B', '#5BC0F2', '#F07B2E'];
  // zigzag garlands of bulbs across the street
  let lights = '';
  [[350, 60], [540, 55], [730, 45]].forEach(([y0, sag], g) => {
    lights += `<path d="M-20 ${y0} Q 540 ${y0 + sag * 2} 1100 ${y0}" stroke="#3A2A20" stroke-width="3" fill="none"/>`;
    for (let i = 0; i < 18; i++) {
      const x = i * 62, u = (x + 20) / 1120, y = y0 + 4 * sag * u * (1 - u) * 2 * 0.5 + 8;
      const on = (i + g + Math.floor(t * 4)) % 3 !== 0;
      lights += `<circle cx="${x}" cy="${y}" r="11" fill="${cols[(i + g) % 5]}" opacity="${on ? 1 : 0.35}"/>` +
        (on ? `<circle cx="${x}" cy="${y}" r="24" fill="${cols[(i + g) % 5]}" opacity=".18"/>` : '');
    }
  });
  // drifting confetti
  let conf = '';
  for (let i = 0; i < 26; i++) {
    const k = ((t * 0.18 + i * 0.137) % 1), x = (i * 211 + Math.sin(t * 2 + i) * 30) % 1080;
    conf += `<rect x="${x}" y="${200 + k * 1500}" width="14" height="8" fill="${cols[i % 5]}" transform="rotate(${t * 120 + i * 40} ${x + 7} ${200 + k * 1500 + 4})" opacity=".85"/>`;
  }
  const cross = 0.55 + 0.45 * (Math.sin(t * 6) > 0 ? 1 : 0.3);
  const swing = Math.sin(t * 2.2) * 7;
  const tile = Array.from({ length: 60 }, (_, i) => `<rect x="${330 + (i % 10) * 42}" y="${560 + Math.floor(i / 10) * 42}" width="40" height="40" fill="${(i + Math.floor(i / 10)) % 2 ? '#2E6DB4' : '#EAF2FA'}"/>`).join('');
  return W(`<rect width="1080" height="1920" fill="url(#fsk)"/>
   <rect x="-10" y="380" width="330" height="660" fill="#F3E2B8"/><rect x="760" y="360" width="330" height="680" fill="#E9B8A8"/>
   <rect x="320" y="320" width="440" height="720" fill="#F6F1E6"/>
   ${tile}
   ${[[40, 470], [180, 470], [40, 650], [180, 650], [800, 450], [940, 450], [800, 640], [940, 640]].map(([x, y]) => `<rect x="${x}" y="${y}" width="90" height="130" fill="#3E5A74"/><rect x="${x - 8}" y="${y + 126}" width="106" height="10" fill="#2B2B2B"/><rect x="${x + 8}" y="${y + 8}" width="74" height="114" fill="#FFE7A8" opacity="${0.35 + 0.25 * Math.sin(t * 1.5 + x)}"/>`).join('')}
   <rect x="360" y="850" width="360" height="190" fill="#1D5E4A"/><rect x="380" y="868" width="150" height="172" fill="#BFE6D4" opacity=".85"/><rect x="550" y="868" width="150" height="172" fill="#BFE6D4" opacity=".85"/>
   ${[0, 1, 2, 3].map(i => `<rect x="${395 + i * 32}" y="${960 - (i % 2) * 20}" width="22" height="${50 + (i % 2) * 20}" rx="5" fill="${cols[i]}"/>`).join('')}
   <rect x="380" y="815" width="320" height="34" fill="#1D5E4A"/><text x="540" y="842" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="28" fill="#F6F1E6">FARMÁCIA</text>
   <g transform="translate(800 720)"><rect x="-6" y="-6" width="80" height="12" fill="#2B2B2B"/>
     <g transform="rotate(${swing} 60 0)"><line x1="30" y1="0" x2="30" y2="30" stroke="#2B2B2B" stroke-width="4"/><line x1="90" y1="0" x2="90" y2="30" stroke="#2B2B2B" stroke-width="4"/>
     <rect x="0" y="30" width="120" height="70" rx="10" fill="#1D5E4A"/><text x="60" y="74" text-anchor="middle" font-family="Georgia,serif" font-size="22" font-weight="700" fill="#FFD45C">Farmácia</text></g></g>
   <g transform="translate(250 760) scale(.7)" opacity="${cross}"><circle r="95" fill="#3BFF8A" opacity=".18"/>
     <rect x="-24" y="-70" width="48" height="140" fill="#3BFF8A"/><rect x="-70" y="-24" width="140" height="48" fill="#3BFF8A"/></g>
   ${lights}
   <rect y="1040" width="1080" height="880" fill="#D6CCBA"/>
   ${Array.from({ length: 9 }, (_, r) => `<path d="M-40 ${1080 + r * 95} ${Array.from({ length: 22 }, (_, i) => `l 25 ${i % 2 ? -14 : 14}`).join(' ')} l 25 14" stroke="#2B2B2B" stroke-width="7" fill="none" opacity=".3"/>`).join('')}
   ${[[120, 1300], [960, 1320]].map(([x, y]) => `<g transform="translate(${x} ${y})"><rect x="-40" y="0" width="80" height="70" rx="8" fill="#B65A3A"/><path d="M0 0 L-50 -150 L50 -150 Z" fill="#2E7D4F"/>${[0, 1, 2, 3, 4].map(i => `<circle cx="${-30 + i * 15}" cy="${-30 - i * 22}" r="7" fill="${cols[(i + Math.floor(t * 3)) % 5]}"/>`).join('')}<path d="M0 -175 l8 18 l-16 0 Z" fill="#FFD45C"/></g>`).join('')}
   ${conf}`,
   `<linearGradient id="fsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1B2550"/><stop offset=".5" stop-color="#4A3A7A"/><stop offset="1" stop-color="#E58A6A"/></linearGradient>`);
}

function patinsSVG(t = 0) {
  const beat = Math.floor(Math.max(0, t - 0.44) * 123 / 60);
  const pal = ['#FF3EA5', '#3EE0FF', '#FFE14D', '#8B5CFF', '#3BFF8A', '#FF8A3E'];
  let beams = '';
  for (let i = 0; i < 5; i++) { const a = Math.sin(t * 1.1 + i * 1.7) * 30 + (i - 2) * 16; const x = 120 + i * 210; beams += `<polygon points="${x},150 ${x + Math.tan(a * Math.PI / 180) * 1300 - 80},1500 ${x + Math.tan(a * Math.PI / 180) * 1300 + 80},1500" fill="${pal[i]}" opacity=".13"/>`; }
  // neon rings of the rink (an oval seen in perspective)
  let rings = '';
  for (let k = 0; k < 4; k++) { const c = pal[(k + beat) % 6]; rings += `<ellipse cx="540" cy="1250" rx="${560 - k * 70}" ry="${260 - k * 34}" fill="none" stroke="${c}" stroke-width="${k === 0 ? 14 : 6}" opacity="${k === 0 ? 0.95 : 0.55}"/>`; }
  // skaters circling the oval (simple silhouettes with coloured tops)
  let sk = '';
  for (let i = 0; i < 7; i++) {
    const a = t * 0.9 + i * (Math.PI * 2 / 7), x = 540 + Math.cos(a) * 450, y = 1250 + Math.sin(a) * 200;
    if (Math.sin(a) > 0.25) continue; // the ones in front would hide the dancers
    const s = 0.75 + 0.25 * (Math.sin(a) + 1) / 2, dir = Math.sin(a) < 0 ? -1 : 1;
    sk += `<g transform="translate(${x} ${y}) scale(${s * dir} ${s})"><circle cy="-150" r="22" fill="#2A1A3A"/><rect x="-22" y="-125" width="44" height="70" rx="14" fill="${pal[i % 6]}"/>
      <path d="M-14 -58 L-26 -10 M14 -58 L22 -10" stroke="#2A1A3A" stroke-width="14" stroke-linecap="round"/><path d="M-22 -110 L-55 -80 M22 -110 L52 -135" stroke="#2A1A3A" stroke-width="10" stroke-linecap="round"/>
      <rect x="-42" y="-14" width="34" height="14" rx="5" fill="#fff"/><rect x="8" y="-14" width="34" height="14" rx="5" fill="#fff"/>
      <circle cx="-36" cy="2" r="5" fill="${pal[(i + 2) % 6]}"/><circle cx="-14" cy="2" r="5" fill="${pal[(i + 2) % 6]}"/><circle cx="14" cy="2" r="5" fill="${pal[(i + 2) % 6]}"/><circle cx="36" cy="2" r="5" fill="${pal[(i + 2) % 6]}"/></g>`;
  }
  let sparks = '';
  for (let i = 0; i < 22; i++) { const x = (i * 173 + t * 40 * (i % 3 + 1)) % 1080, y = 200 + (i * 97) % 650; sparks += `<circle cx="${x}" cy="${y}" r="${3 + (i % 3) * 2}" fill="${pal[i % 6]}" opacity="${0.3 + 0.7 * Math.abs(Math.sin(t * 3 + i))}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>
   ${Array.from({ length: 9 }, (_, i) => `<rect x="${i * 125}" y="560" width="100" height="420" fill="#1C1030"/><rect x="${i * 125 + 10}" y="570" width="80" height="12" fill="${pal[(i + beat) % 6]}" opacity=".8"/>`).join('')}
   <rect x="330" y="680" width="420" height="76" rx="38" fill="#120A20" stroke="${pal[beat % 6]}" stroke-width="7"/>
   <text x="540" y="736" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="50" fill="${pal[(beat + 3) % 6]}" letter-spacing="5">PATINAGEM</text>
   ${beams}
   <rect y="980" width="1080" height="940" fill="#160C26"/>
   <ellipse cx="540" cy="1250" rx="560" ry="260" fill="#2B1848"/>
   ${Array.from({ length: 8 }, (_, i) => `<ellipse cx="540" cy="1250" rx="${520 - i * 60}" ry="${240 - i * 28}" fill="none" stroke="#3D2463" stroke-width="2"/>`).join('')}
   ${rings}${sk}${sparks}
   <rect y="1560" width="1080" height="360" fill="#120A20"/>
   ${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 92}" y="1560" width="60" height="16" fill="${pal[(i + beat) % 6]}" opacity="${(i + beat) % 2 ? 0.9 : 0.3}"/>`).join('')}`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0A0618"/><stop offset=".6" stop-color="#25124A"/><stop offset="1" stop-color="#160C26"/></linearGradient>`);
}

function monsarazSVG(t = 0) {
  let stars = '';
  for (let i = 0; i < 90; i++) { const x = (i * 263) % 1080, y = 40 + (i * 151) % 820; stars += `<circle cx="${x}" cy="${y}" r="${1.5 + (i % 3)}" fill="#fff" opacity="${0.35 + 0.65 * Math.abs(Math.sin(t * 1.7 + i * 1.3))}"/>`; }
  // Milky Way band of soft dust
  let milky = '';
  for (let i = 0; i < 40; i++) { const u = i / 39, x = -60 + u * 1200, y = 720 - u * 640 + Math.sin(i * 1.9) * 40; milky += `<circle cx="${x}" cy="${y}" r="${40 + (i % 4) * 18}" fill="#C9C2FF" opacity=".06"/><circle cx="${x + 20}" cy="${y - 10}" r="2.5" fill="#fff" opacity=".7"/>`; }
  const sk = (t * 0.35) % 1, sx = 900 - sk * 520, sy = 160 + sk * 260;
  const shoot = sk < 0.5 ? `<line x1="${sx}" y1="${sy}" x2="${sx + 150}" y2="${sy - 75}" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity="${1 - sk * 2}"/>` : '';
  const houses = [[40, 140], [190, 120], [320, 150], [470, 120], [610, 140], [760, 130], [900, 150]].map(([x, w], i) =>
    `<rect x="${x}" y="${880 - (i % 2) * 20}" width="${w}" height="${120 + (i % 2) * 20}" fill="#E8ECF2"/><rect x="${x}" y="${872 - (i % 2) * 20}" width="${w}" height="10" fill="#C98A5A"/>` +
    `<rect x="${x + 22}" y="${920 - (i % 2) * 20}" width="28" height="40" fill="#FFC867" opacity="${0.55 + 0.45 * Math.abs(Math.sin(t * 0.8 + i * 2.1))}"/><rect x="${x + w - 50}" y="${930 - (i % 2) * 20}" width="28" height="40" fill="#FFC867" opacity="${0.5 + 0.5 * Math.abs(Math.sin(t * 0.6 + i))}"/>`).join('');
  const flag = Math.sin(t * 4) * 8;
  let ripple = '';
  for (let i = 0; i < 10; i++) { const y = 1130 + i * 24, w = 60 + i * 14, x = 820 + Math.sin(t * 1.5 + i) * 12; ripple += `<rect x="${x - w / 2}" y="${y}" width="${w}" height="5" rx="2.5" fill="#F4EBC8" opacity="${0.6 - i * 0.05}"/>`; }
  return W(`<rect width="1080" height="1920" fill="url(#msk)"/>${milky}${stars}${shoot}
   <circle cx="820" cy="300" r="62" fill="#F4EBC8"/><circle cx="820" cy="300" r="110" fill="#F4EBC8" opacity=".1"/>
   <path d="M-20 1060 Q 200 900 540 880 Q 860 870 1100 1000 L1100 1080 L-20 1080 Z" fill="#1E2A3A"/>
   <path d="M0 880 L0 820 ${Array.from({ length: 27 }, (_, i) => `L${i * 40 + 20} ${i % 2 ? 820 : 800} L${i * 40 + 40} ${i % 2 ? 820 : 800}`).join(' ')} L1080 820 L1080 880 Z" fill="#9AA3AE"/>
   <rect x="430" y="560" width="190" height="300" fill="#B9C0C8"/>
   ${Array.from({ length: 5 }, (_, i) => `<rect x="${430 + i * 40}" y="540" width="28" height="24" fill="#B9C0C8"/>`).join('')}
   <rect x="500" y="640" width="40" height="60" rx="20" fill="#FFC867" opacity="${0.6 + 0.4 * Math.abs(Math.sin(t * 2))}"/>
   <polygon points="430,860 380,860 525,520 670,860 620,860" fill="#FFD27A" opacity=".08"/>
   <line x1="525" y1="540" x2="525" y2="460" stroke="#333" stroke-width="5"/><path d="M525 462 q 30 ${-6 + flag} 60 0 q -30 ${6 - flag} -60 26 Z" fill="#E2365B"/>
   ${houses}
   <rect y="1080" width="1080" height="840" fill="#14243A"/>
   ${Array.from({ length: 14 }, (_, i) => `<rect x="${(i * 157 + t * 25) % 1180 - 100}" y="${1110 + i * 55}" width="${90 + (i % 3) * 40}" height="4" rx="2" fill="#5D7FA6" opacity=".35"/>`).join('')}
   ${ripple}
   <path d="M-20 1600 Q 300 1520 640 1580 Q 900 1620 1100 1560 L1100 1940 L-20 1940 Z" fill="#0E1726"/>
   ${[[110, 1560], [980, 1540]].map(([x, y]) => `<g transform="translate(${x} ${y}) rotate(${Math.sin(t * 1.2 + x) * 2})"><rect x="-10" y="0" width="20" height="90" fill="#2A1E16"/><ellipse cy="-30" rx="110" ry="60" fill="#0B1420"/></g>`).join('')}`,
   `<linearGradient id="msk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#05081A"/><stop offset=".7" stop-color="#16244A"/><stop offset="1" stop-color="#2B3A66"/></linearGradient>`);
}
