// New backgrounds: estacaoSVG (IPMA-style weather station on the Alentejo plain near Mora in a downpour), infiltracaoSVG (rented flat with a leaking ceiling and buckets), drogariaSVG (old Portuguese hardware shop / drogaria with roof tiles, buckets and paint)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function rainLines(t, n, col, sp, len, x0 = 0, w = 1080, y0 = 0, h = 1920, slant = 60) {
  let r = '';
  for (let i = 0; i < n; i++) {
    const x = x0 + ((i * 137.3) % w), ph = ((i * 0.377) % 1);
    const y = y0 + (((t * sp / h) + ph) % 1) * h;
    r += `<line x1="${x}" y1="${y}" x2="${x - slant * len / 200}" y2="${y + len}" stroke="${col}" stroke-width="4" stroke-linecap="round"/>`;
  }
  return r;
}
function estacaoSVG(t = 0) {
  const oak = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s}) rotate(${Math.sin(t * 2.2 + x) * 3})"><path d="M-12 0 Q -6 -80 -30 -140 M12 0 Q 10 -70 40 -130" stroke="#3B2A1E" stroke-width="22" fill="none"/><ellipse cx="0" cy="-170" rx="150" ry="70" fill="#2F4A33"/><ellipse cx="-80" cy="-140" rx="80" ry="45" fill="#36553A"/><ellipse cx="90" cy="-145" rx="80" ry="45" fill="#2A4430"/></g>`;
  const cup = a => { const x = Math.cos(a) * 70, z = Math.sin(a) * 26; return `<line x1="0" y1="0" x2="${x}" y2="${z}" stroke="#DDE3EA" stroke-width="6"/><circle cx="${x}" cy="${z}" r="16" fill="#C8202C"/>`; };
  const ang = t * 9;
  let puddles = '';
  for (let i = 0; i < 6; i++) { const ph = ((t * 1.3 + i * 0.37) % 1); puddles += `<ellipse cx="${120 + i * 160}" cy="${1650 + (i % 2) * 70}" rx="${20 + ph * 70}" ry="${6 + ph * 18}" fill="none" stroke="rgba(220,235,250,${0.7 - ph * 0.7})" stroke-width="4"/>`; }
  const flash = (t % 4.2) < 0.12 ? 0.35 : 0;
  return W(`<rect width="1080" height="1920" fill="url(#esk)"/>
   ${[0, 1, 2, 3].map(i => `<ellipse cx="${((i * 330 + t * 30) % 1500) - 200}" cy="${470 + (i % 2) * 90}" rx="300" ry="90" fill="#4A5563" opacity=".85"/>`).join('')}
   <rect y="1080" width="1080" height="840" fill="#5E6B3E"/>
   <path d="M0 1080 Q 300 1040 560 1075 T 1080 1060 L1080 1110 L0 1110 Z" fill="#6F7B48"/>
   ${oak(130, 1110, .9)}${oak(930, 1095, .75)}${oak(700, 1085, .45)}
   <g transform="translate(560 1080)">
     <rect x="-150" y="-40" width="300" height="40" fill="#E8E4DA"/>
     <rect x="-6" y="-520" width="12" height="520" fill="#9AA3AD"/>
     <g transform="translate(0 -520)">${cup(ang)}${cup(ang + 2.09)}${cup(ang + 4.19)}<circle r="12" fill="#5B6570"/></g>
     <path d="M0 -440 L 90 -${440 + Math.sin(t * 3) * 10} L 90 -${410 + Math.sin(t * 3) * 10} Z" fill="#E86A2C"/>
     <g transform="translate(-260 -150)"><rect x="-40" y="0" width="80" height="150" fill="#D6DCE2"/><rect x="-46" y="-10" width="92" height="18" rx="4" fill="#AEB7C0"/><rect x="-34" y="40" width="68" height="${20 + (t * 6) % 90}" fill="#4A90C8" opacity=".75"/><text x="0" y="-24" font-family="Inter" font-weight="900" font-size="30" fill="#F6F2E8" text-anchor="middle">mm</text></g>
     <rect x="90" y="-210" width="170" height="170" fill="#F6F2E8" stroke="#C9C1B1" stroke-width="6"/><g stroke="#C9C1B1" stroke-width="4">${[0, 1, 2, 3, 4].map(i => `<line x1="${95}" y1="${-200 + i * 34}" x2="${255}" y2="${-200 + i * 34}"/>`).join('')}</g><rect x="160" y="-40" width="10" height="40" fill="#C9C1B1"/><rect x="230" y="-40" width="10" height="40" fill="#C9C1B1"/>
   </g>
   ${puddles}
   ${rainLines(t, 70, 'rgba(210,225,240,.55)', 1700, 70)}
   <rect width="1080" height="1920" fill="#fff" opacity="${flash}"/>`,
   `<linearGradient id="esk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2E3640"/><stop offset=".55" stop-color="#5D6874"/><stop offset=".56" stop-color="#5D6874"/></linearGradient>`);
}
function infiltracaoSVG(t = 0) {
  const drips = [[250, 840], [560, 880], [860, 860]];
  let d = '';
  drips.forEach(([x, by], i) => { const ph = ((t * 1.6 + i * 0.33) % 1); const y = 420 + ph * (by - 420);
    d += `<path d="M${x} ${y} q -12 20 0 30 q 12 -10 0 -30 Z" fill="#7FB8E6"/>`;
    const sp = ((t * 1.6 + i * 0.33 + 0.02) % 1); if (sp < 0.18) d += `<ellipse cx="${x}" cy="${by - 4}" rx="${20 + sp * 160}" ry="${5 + sp * 20}" fill="none" stroke="#7FB8E6" stroke-width="4" opacity="${1 - sp * 5}"/>`; });
  const bucket = (x, y, c) => `<g transform="translate(${x} ${y})"><path d="M-60 0 L60 0 L48 110 L-48 110 Z" fill="${c}"/><ellipse cx="0" cy="0" rx="60" ry="14" fill="#3E7FB8"/><path d="M-60 0 Q 0 -70 60 0" fill="none" stroke="#555" stroke-width="5"/></g>`;
  return W(`<rect width="1080" height="1920" fill="#E9DCC2"/>
   <g opacity=".35">${Array.from({ length: 12 }, (_, i) => `<rect x="${i * 95}" y="380" width="40" height="1120" fill="#D6C29E"/>`).join('')}</g>
   <rect width="1080" height="400" fill="#F1EADB"/><rect y="380" width="1080" height="26" fill="#C9B48E"/>
   <path d="M170 380 q 80 70 160 10 q 60 60 120 -10 Z" fill="#B7A27A" opacity=".7"/>
   <path d="M480 380 q 80 90 170 15 q 60 40 110 -15 Z" fill="#B09B72" opacity=".7"/>
   <path d="M780 380 q 70 60 150 5 Z" fill="#B7A27A" opacity=".7"/>
   <g transform="translate(720 520)"><rect width="260" height="380" fill="#4B6B8A"/><rect x="12" y="12" width="236" height="356" fill="#8FA9C2"/>${rainLines(t, 14, 'rgba(255,255,255,.7)', 900, 40, 12, 236, 12, 330, 20)}<rect x="124" y="12" width="12" height="356" fill="#4B6B8A"/><rect x="12" y="180" width="236" height="12" fill="#4B6B8A"/></g>
   <g transform="translate(90 600)"><rect width="300" height="220" fill="#7A2E3A"/><rect x="14" y="14" width="272" height="192" fill="#D8C7A4"/><circle cx="150" cy="110" r="60" fill="#B98A5A"/><circle cx="150" cy="${110 + Math.sin(t) * 2}" r="34" fill="#E8C78C"/></g>
   <rect y="1480" width="1080" height="440" fill="#8B6845"/>${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 140}" y="1480" width="4" height="440" fill="#6E5236"/>`).join('')}
   <g transform="translate(540 0) rotate(${Math.sin(t * 2) * 6})"><line x1="0" y1="0" x2="0" y2="140" stroke="#333" stroke-width="4"/><circle cy="150" r="22" fill="#FFF3B0"/></g>
   <rect x="120" y="970" width="880" height="22" fill="#6E5236"/>${bucket(250, 860, '#E8A93A')}${bucket(560, 900, '#C8202C')}${bucket(860, 880, '#2FA36B')}
   ${d}`);
}
function drogariaSVG(t = 0) {
  const shelf = (y) => `<rect x="40" y="${y}" width="1000" height="18" fill="#6B4A32"/>`;
  let items = '';
  const cols = ['#C8202C', '#2F6FB2', '#E8A93A', '#2FA36B', '#7A2E3A'];
  for (let r = 0; r < 3; r++) for (let i = 0; i < 9; i++) {
    const x = 70 + i * 108, y = 440 + r * 230, c = cols[(i + r) % 5];
    if (r === 0) items += `<g transform="translate(${x} ${y + 150})"><rect x="0" y="-80" width="80" height="80" rx="6" fill="${c}"/><rect x="0" y="-80" width="80" height="18" fill="#DDD"/><rect x="18" y="-50" width="44" height="26" fill="#fff" opacity=".8"/></g>`;
    else if (r === 1) items += `<g transform="translate(${x} ${y + 150})"><path d="M0 0 Q 40 -60 80 0 Z" fill="#B65A3A"/><path d="M0 -20 Q 40 -80 80 -20 L80 0 Q 40 -60 0 0 Z" fill="#C46A45"/></g>`;
    else items += `<g transform="translate(${x + 40} ${y + 150})"><path d="M-34 -90 L34 -90 L26 0 L-26 0 Z" fill="${c}"/><ellipse cy="-90" rx="34" ry="8" fill="#333" opacity=".3"/></g>`;
  }
  const sw = Math.sin(t * 2.4) * 8;
  return W(`<rect width="1080" height="1920" fill="#E6D3B3"/>
   <rect y="0" width="1080" height="420" fill="#2F5D50"/>
   <g transform="translate(540 120) rotate(${sw * 0.3})"><rect x="-300" y="0" width="600" height="0"/></g>
   <rect x="160" y="60" width="760" height="120" rx="10" fill="#F4EBD8" stroke="#B38B4A" stroke-width="8"/>
   <text x="540" y="146" font-family="Lora,serif" font-weight="700" font-size="80" fill="#2F5D50" text-anchor="middle">DROGARIA</text>
   ${shelf(590)}${shelf(820)}${shelf(1050)}${items}
   <rect x="0" y="1120" width="1080" height="800" fill="#B98A5A"/><rect x="0" y="1120" width="1080" height="30" fill="#8B6845"/>
   <g fill="#F3EEE4" opacity=".9">${Array.from({ length: 6 }, (_, i) => `<rect x="${i * 180 + 30}" y="1180" width="140" height="140" rx="6"/>`).join('')}</g>
   ${Array.from({ length: 5 }, (_, i) => `<g transform="translate(${140 + i * 200} 400) rotate(${Math.sin(t * 1.8 + i) * 6})"><line x1="0" y1="0" x2="0" y2="${120 + (i % 2) * 40}" stroke="#555" stroke-width="3"/><path d="M-30 ${120 + (i % 2) * 40} l60 0 l-8 ${40} l-44 0 Z" fill="${cols[i]}"/></g>`).join('')}
   <g transform="translate(940 1060)"><rect x="-50" y="-40" width="100" height="60" rx="8" fill="#444"/><text x="0" y="0" font-family="Inter" font-weight="900" font-size="26" fill="#7CFF8A" text-anchor="middle">${(8 + Math.floor(t * 2) % 2 * 0).toString()}00,00</text></g>`);
}
