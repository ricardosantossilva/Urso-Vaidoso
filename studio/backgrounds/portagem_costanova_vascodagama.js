// New backgrounds (2026-11-14 08:00 tolls video): portagemSVG (motorway toll plaza with gantry, booths and moving cars),
// costanovaSVG (Costa Nova beach with striped palheiro houses, dunes and rolling tide), pontevgSVG (very long low bridge over the Tagus estuary at sunrise with flamingos)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function carSVG(x, y, s, c, flip = false) {
  return `<g transform="translate(${x} ${y}) scale(${flip ? -s : s} ${s})"><rect x="-90" y="-50" width="180" height="50" rx="16" fill="${c}"/><path d="M-55 -50 L-35 -88 L40 -88 L62 -50 Z" fill="${c}"/><path d="M-45 -52 L-30 -80 L0 -80 L0 -52 Z M8 -52 L8 -80 L36 -80 L52 -52 Z" fill="#CFE6F5"/><circle cx="-50" cy="2" r="22" fill="#1E2530"/><circle cx="50" cy="2" r="22" fill="#1E2530"/><circle cx="-50" cy="2" r="9" fill="#9AA6B2"/><circle cx="50" cy="2" r="9" fill="#9AA6B2"/><rect x="78" y="-40" width="14" height="10" rx="3" fill="#FFE27A"/></g>`;
}
function portagemSVG(t = 0) {
  // sky + hills
  let clouds = ''; for (let i = 0; i < 4; i++) { const x = ((t * 18 + i * 300) % 1400) - 200; clouds += `<g transform="translate(${x} ${450 + i * 40})" fill="#fff" opacity=".9"><ellipse rx="90" ry="30"/><ellipse cx="50" cy="-18" rx="60" ry="30"/><ellipse cx="-50" cy="-10" rx="50" ry="24"/></g>`; }
  // booths
  let booths = ''; for (let i = 0; i < 5; i++) { const x = 60 + i * 220; const green = Math.floor(t * 1.3 + i) % 3 !== 0;
    booths += `<g transform="translate(${x} 860)"><rect x="0" y="0" width="90" height="150" rx="8" fill="#E9EDF2"/><rect x="10" y="20" width="70" height="60" rx="6" fill="#9CC9E6"/><rect x="0" y="-10" width="90" height="16" fill="#0B4F8A"/><circle cx="45" cy="105" r="14" fill="${green ? '#2FBF5B' : '#D9342B'}"/>
      <g transform="translate(90 125) rotate(${green ? -70 + Math.sin(t * 3 + i) * 4 : 0})"><rect x="0" y="-5" width="120" height="10" rx="5" fill="#fff" stroke="#D9342B" stroke-width="2"/><rect x="25" y="-5" width="18" height="10" fill="#D9342B"/><rect x="70" y="-5" width="18" height="10" fill="#D9342B"/></g></g>`; }
  const carX = ((t * 160) % 1500) - 250, carX2 = ((t * 110 + 700) % 1500) - 250;
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>${clouds}
   <path d="M0 760 Q 200 640 420 720 T 820 690 T 1080 720 L1080 860 L0 860 Z" fill="#8DBF6A"/><path d="M0 800 Q 260 720 520 790 T 1080 770 L1080 860 L0 860 Z" fill="#6FA552"/>
   <rect x="0" y="700" width="1080" height="60" fill="#0B4F8A"/><rect x="0" y="690" width="1080" height="12" fill="#083B68"/>
   ${[0, 1, 2, 3, 4].map(i => `<rect x="${78 + i * 220}" y="712" width="54" height="36" rx="6" fill="${(Math.floor(t * 1.3 + i) % 3 !== 0) ? '#2FBF5B' : '#D9342B'}"/>`).join('')}
   <text x="540" y="745" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="0" fill="#fff"></text>
   <rect x="0" y="1000" width="1080" height="920" fill="#5A6270"/>${booths}
   ${[0, 1, 2, 3, 4, 5].map(i => `<rect x="${170 + i * 220}" y="1010" width="10" height="900" fill="#F2F2F2" opacity=".0"/>`).join('')}
   ${Array.from({ length: 6 }, (_, i) => `<rect x="${(i * 220 + 150 - (t * 200) % 220)}" y="1460" width="110" height="14" fill="#F4F4F4"/>`).join('')}
   ${carSVG(carX, 1240, 1.3, '#E2365B')}${carSVG(carX2, 1700, 1.5, '#F2B33D')}
   <rect x="0" y="1840" width="1080" height="80" fill="#4A515D"/>`,
    `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC4EE"/><stop offset="1" stop-color="#E4F4FF"/></linearGradient>`);
}
function costanovaSVG(t = 0) {
  const cols = ['#C8202C', '#1F5FA8', '#2FA36B', '#E8A93A', '#7A2E3A', '#1F5FA8'];
  let houses = ''; for (let i = 0; i < 6; i++) { const x = -20 + i * 190, c = cols[i];
    let stripes = ''; for (let k = 0; k < 7; k++) stripes += `<rect x="${k * 26}" y="0" width="13" height="200" fill="${c}"/>`;
    houses += `<g transform="translate(${x} 560)"><path d="M0 0 L91 -70 L182 0 Z" fill="${c}"/><rect x="0" y="0" width="182" height="200" fill="#fff"/>${stripes}<rect x="66" y="110" width="50" height="90" fill="#fff" stroke="${c}" stroke-width="6"/><rect x="20" y="40" width="40" height="40" fill="#fff" stroke="${c}" stroke-width="5"/><rect x="122" y="40" width="40" height="40" fill="#fff" stroke="${c}" stroke-width="5"/></g>`; }
  let gulls = ''; for (let i = 0; i < 3; i++) { const x = ((t * 50 + i * 380) % 1300) - 100, y = 470 + Math.sin(t * 2 + i) * 20; gulls += `<path d="M${x - 24} ${y} q 12 -14 24 0 q 12 -14 24 0" stroke="#33404F" stroke-width="5" fill="none"/>`; }
  const tide = Math.sin(t * 1.4) * 40;
  let foam = ''; for (let i = 0; i < 12; i++) foam += `<ellipse cx="${i * 100 + (t * 30) % 100}" cy="${1105 + tide}" rx="60" ry="12" fill="#fff" opacity=".85"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#csk)"/>${gulls}
   <rect y="760" width="1080" height="140" fill="#EED9A8"/>
   ${Array.from({ length: 14 }, (_, i) => `<path d="M${i * 80} 790 l6 -40 l6 40" stroke="#9BAF5A" stroke-width="5" fill="none" transform="rotate(${Math.sin(t * 2 + i) * 6} ${i * 80 + 6} 790)"/>`).join('')}
   ${houses}
   <rect y="900" width="1080" height="1020" fill="#F3DFAE"/>
   <path d="M0 ${1060 + tide} Q 270 ${1030 + tide} 540 ${1060 + tide} T 1080 ${1060 + tide} L1080 1920 L0 1920 Z" fill="#3E9FCB" opacity="0"/>
   <rect y="${960}" width="1080" height="${130 + tide}" fill="#3E9FCB"/><rect y="960" width="1080" height="40" fill="#2B86B3"/>${foam}
   ${Array.from({ length: 24 }, (_, i) => `<circle cx="${(i * 149) % 1080}" cy="${1300 + (i * 83) % 600}" r="${3 + (i % 3)}" fill="#E2C98E"/>`).join('')}
   <g transform="translate(150 1220) rotate(${Math.sin(t * 2) * 4})"><path d="M0 0 L0 -160" stroke="#6B4A32" stroke-width="8"/><path d="M-110 -150 Q 0 -230 110 -150 Z" fill="#E2365B"/><path d="M-110 -150 Q -55 -175 0 -150 Q 55 -175 110 -150" fill="#FFD45C"/></g>`,
    `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8ED1F5"/><stop offset="1" stop-color="#F0FAFF"/></linearGradient>`);
}
function pontevgSVG(t = 0) {
  let pylons = ''; [260, 760].forEach(x => { pylons += `<g transform="translate(${x} 0)"><path d="M-30 820 L-12 540 L12 540 L30 820 Z" fill="#E7E2D6"/>${Array.from({ length: 6 }, (_, k) => `<line x1="0" y1="${560 + k * 18}" x2="${-230 + k * 30}" y2="820" stroke="#F4EFE4" stroke-width="3"/><line x1="0" y1="${560 + k * 18}" x2="${230 - k * 30}" y2="820" stroke="#F4EFE4" stroke-width="3"/>`).join('')}</g>`; });
  let piers = ''; for (let i = 0; i < 14; i++) piers += `<rect x="${i * 80}" y="830" width="12" height="${40 - i}" fill="#B9AE9A"/>`;
  let fl = ''; for (let i = 0; i < 5; i++) { const x = 140 + i * 190 + Math.sin(t + i) * 10, y = 1010 + (i % 2) * 30; fl += `<g transform="translate(${x} ${y})"><line x1="0" y1="0" x2="0" y2="70" stroke="#E48A9A" stroke-width="5"/><ellipse cx="0" cy="-10" rx="34" ry="20" fill="#F2A3B3"/><path d="M20 -18 q 30 -30 12 -60 q -4 -8 8 -10" stroke="#F2A3B3" stroke-width="9" fill="none"/><path d="M40 -78 l12 10 l-14 2 Z" fill="#33404F"/></g>`; }
  const sunY = 700 - Math.min(40, t * 1.5);
  const carX = ((t * 120) % 1300) - 100;
  return W(`<rect width="1080" height="1920" fill="url(#vsk)"/><circle cx="820" cy="${sunY}" r="80" fill="#FFD37A"/><circle cx="820" cy="${sunY}" r="130" fill="#FFD37A" opacity=".25"/>
   <rect y="830" width="1080" height="1090" fill="url(#vwt)"/>
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${(i * 170 + t * 25) % 1180 - 80}" y="${880 + i * 20}" width="${70 + (i % 3) * 30}" height="5" rx="2" fill="#FFE0A8" opacity=".55"/>`).join('')}
   ${piers}<rect y="812" width="1080" height="20" fill="#D8D0C0"/><rect y="806" width="1080" height="6" fill="#F4EFE4"/>${pylons}
   <g transform="translate(${carX} 806) scale(.35)">${carSVG(0, 0, 1, '#C8202C')}</g>
   <rect y="960" width="1080" height="960" fill="#C9B48E" opacity=".0"/>
   <path d="M0 1080 Q 300 1040 600 1090 T 1080 1070 L1080 1920 L0 1920 Z" fill="#B7A27A"/><path d="M0 1150 Q 400 1110 1080 1160 L1080 1920 L0 1920 Z" fill="#A28E66"/>${fl}`,
    `<linearGradient id="vsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5B6FA8"/><stop offset=".55" stop-color="#F2A47A"/><stop offset="1" stop-color="#FFD9A8"/></linearGradient><linearGradient id="vwt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E89A7A"/><stop offset="1" stop-color="#6E7FA8"/></linearGradient>`);
}
