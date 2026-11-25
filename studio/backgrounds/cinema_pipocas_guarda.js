// New backgrounds (2026-11-25 O Urso responde #6 Parte 1):
// salaSVG: multiplex cinema auditorium with rows of red velvet seats, glowing screen with a film countdown, projector beam with dust
// pipocasSVG: cinema lobby candy bar with a popping popcorn machine, pink neon PIPOCAS sign, session-time screens and film poster frames
// guardaSVG: Guarda-style granite gothic cathedral square at dusk with snow falling, lit street lamps and glowing windows
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function salaSVG(t = 0) {
  const n = 5 - Math.floor((t * 1.2) % 5);
  const ang = ((t * 1.2) % 1) * 360;
  const fl = 0.85 + 0.15 * Math.sin(t * 23) * Math.sin(t * 7);
  let dust = '';
  for (let i = 0; i < 26; i++) {
    const u = (i * 0.137 + t * 0.03 * (1 + (i % 3))) % 1;
    const x = 900 - u * 620 + Math.sin(i * 3 + t) * 30, y = 120 + u * 380 + ((i * 53) % 120) - 40;
    dust += `<circle cx="${x}" cy="${y}" r="${2 + (i % 3)}" fill="#fff" opacity="${0.25 + 0.2 * Math.sin(t * 2 + i)}"/>`;
  }
  let seats = '';
  for (let r = 0; r < 6; r++) {
    const y = 1080 + r * 150, s = 1 + r * 0.18, cnt = 9 - Math.floor(r / 2), wdt = 1080 / cnt;
    for (let i = 0; i < cnt + 1; i++) {
      const x = i * wdt - (r % 2) * wdt / 2;
      seats += `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-44" y="-70" width="88" height="90" rx="22" fill="#8E1B26"/><rect x="-44" y="-70" width="88" height="22" rx="11" fill="#B3303C"/><rect x="-50" y="10" width="100" height="26" rx="8" fill="#5E1018"/></g>`;
    }
  }
  return W(`<rect width="1080" height="1920" fill="#120A16"/>
  <rect x="0" y="0" width="1080" height="1100" fill="url(#wall)"/>
  <path d="M0 0 L120 0 L120 1000 L0 1060 Z" fill="#3A0E18"/><path d="M1080 0 L960 0 L960 1000 L1080 1060 Z" fill="#3A0E18"/>
  ${[0, 1, 2, 3].map(i => `<path d="M${20 + i * 26} 0 V1040" stroke="#52162A" stroke-width="8"/><path d="M${980 + i * 26} 0 V1040" stroke="#52162A" stroke-width="8"/>`).join('')}
  <rect x="150" y="430" width="780" height="520" rx="10" fill="#0B0B0B"/>
  <rect x="165" y="445" width="750" height="490" fill="#E9E4D6" opacity="${fl}"/>
  <g transform="translate(540 690)" opacity="${fl}"><circle r="190" fill="none" stroke="#6B6658" stroke-width="10"/><circle r="150" fill="none" stroke="#6B6658" stroke-width="6"/>
    <path d="M0 0 L0 -190 A190 190 0 ${ang > 180 ? 1 : 0} 1 ${190 * Math.sin(ang * Math.PI / 180)} ${-190 * Math.cos(ang * Math.PI / 180)} Z" fill="#B8B09A" opacity=".6"/>
    <line x1="-260" y1="0" x2="260" y2="0" stroke="#6B6658" stroke-width="5"/><line x1="0" y1="-240" x2="0" y2="240" stroke="#6B6658" stroke-width="5"/>
    <text y="70" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="210" fill="#2B2924">${n}</text></g>
  <path d="M960 70 L165 445 L165 935 L960 110 Z" fill="url(#beam)" opacity="${0.5 + 0.15 * Math.sin(t * 9)}"/>
  <rect x="930" y="50" width="80" height="80" rx="12" fill="#2A2430"/><circle cx="950" cy="90" r="14" fill="#FFF6D8"/>
  ${dust}
  ${[0, 1, 2, 3, 4, 5].map(i => `<circle cx="${60 + i * 192}" cy="1040" r="6" fill="#FFC76B" opacity="${0.5 + 0.5 * Math.sin(t * 3 + i)}"/>`).join('')}
  ${seats}`,
  `<linearGradient id="wall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1E0F1E"/><stop offset="1" stop-color="#3B1626"/></linearGradient>
   <linearGradient id="beam" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF6D8" stop-opacity=".55"/><stop offset="1" stop-color="#FFF6D8" stop-opacity="0"/></linearGradient>`);
}

function pipocasSVG(t = 0) {
  let corn = '';
  for (let i = 0; i < 22; i++) {
    const ph = (t * 0.9 + i * 0.173) % 1;
    const x = 760 + Math.sin(i * 2.3) * 90 + Math.sin(ph * 6 + i) * 10, y = 960 - Math.sin(ph * Math.PI) * 150 - (i % 4) * 8 + 60;
    corn += `<g transform="translate(${x} ${y})"><circle r="13" fill="#FFF4D2"/><circle cx="9" cy="-6" r="9" fill="#FFE9A8"/><circle cx="-8" cy="5" r="8" fill="#FFFBEA"/></g>`;
  }
  let pile = '';
  for (let i = 0; i < 40; i++) pile += `<circle cx="${640 + (i * 37) % 240}" cy="${1010 + ((i * 17) % 50)}" r="${11 + (i % 3) * 3}" fill="${i % 2 ? '#FFF4D2' : '#FFE29A'}"/>`;
  const neon = 0.7 + 0.3 * (Math.sin(t * 13) > -0.85 ? 1 : 0);
  const poster = (x, y, c1, c2, ic) => `<g transform="translate(${x} ${y})"><rect x="-8" y="-8" width="196" height="276" rx="8" fill="#D9B45A"/><rect width="180" height="260" fill="${c1}"/><circle cx="90" cy="110" r="60" fill="${c2}"/><text x="90" y="135" text-anchor="middle" font-size="70">${ic}</text><rect x="20" y="200" width="140" height="16" rx="8" fill="#fff" opacity=".7"/><rect x="40" y="226" width="100" height="12" rx="6" fill="#fff" opacity=".5"/></g>`;
  const times = ['14:20', '16:45', '19:10', '21:30', '23:55'];
  const hi = Math.floor(t * 0.8) % 5;
  return W(`<rect width="1080" height="1920" fill="url(#lob)"/>
  <rect y="0" width="1080" height="160" fill="#0E0B1A"/>${[0, 1, 2, 3, 4, 5, 6].map(i => `<circle cx="${80 + i * 155}" cy="120" r="12" fill="#FFF1C2" opacity="${0.6 + 0.4 * Math.sin(t * 4 + i * 1.3)}"/>`).join('')}
  ${poster(40, 420, '#2E3F8F', '#F2B43C', '🚀')}${poster(860, 420, '#7A1E3A', '#F4D9E0', '🦖')}
  <g transform="translate(300 400)"><rect width="480" height="300" rx="14" fill="#0B0F1E" stroke="#2C3557" stroke-width="8"/>
   <text x="240" y="60" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="38" fill="#7FD3FF">SESSÕES</text>
   ${times.map((s, i) => `<text x="${60 + (i % 3) * 140}" y="${130 + Math.floor(i / 3) * 80}" font-family="Inter,sans-serif" font-weight="800" font-size="44" fill="${i === hi ? '#FFD45C' : '#E8EEF8'}">${s}</text>`).join('')}</g>
  <g opacity="${neon}"><text x="260" y="860" font-family="Inter,sans-serif" font-weight="900" font-size="96" fill="none" stroke="#FF4FA3" stroke-width="16" opacity=".35">PIPOCAS</text>
   <text x="260" y="860" font-family="Inter,sans-serif" font-weight="900" font-size="96" fill="#FFD1EA" stroke="#FF4FA3" stroke-width="4">PIPOCAS</text></g>
  <rect x="610" y="880" width="300" height="220" rx="10" fill="#C8202C" opacity=".25"/>
  <rect x="610" y="880" width="300" height="220" rx="10" fill="none" stroke="#E8B04A" stroke-width="10"/>
  ${corn}${pile}
  <rect x="600" y="1100" width="320" height="60" fill="#C8202C"/><rect x="600" y="1100" width="320" height="14" fill="#E8B04A"/>
  <rect x="0" y="1150" width="1080" height="770" fill="#5A1A26"/><rect x="0" y="1150" width="1080" height="24" fill="#E8B04A"/>
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<rect x="${i * 140}" y="1174" width="70" height="746" fill="#6A2230"/>`).join('')}
  ${[0, 1, 2].map(i => `<g transform="translate(${150 + i * 120} ${1100})"><path d="M-35 -110 L35 -110 L25 0 L-25 0 Z" fill="#fff"/><path d="M-30 -110 L-18 -110 L-14 0 L-22 0 Z M-2 -110 L10 -110 L8 0 L-2 0 Z" fill="#C8202C"/><circle cx="-14" cy="-120" r="16" fill="#FFF4D2"/><circle cx="10" cy="-126" r="16" fill="#FFE9A8"/><circle cx="-2" cy="-140" r="14" fill="#FFF4D2"/></g>`).join('')}`,
  `<linearGradient id="lob" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#22163A"/><stop offset="1" stop-color="#3D1F44"/></linearGradient>`);
}

function guardaSVG(t = 0) {
  let snow = '';
  for (let i = 0; i < 70; i++) {
    const x = (i * 97 + Math.sin(t + i) * 30) % 1080, y = ((i * 211) % 1920 + t * (60 + (i % 5) * 25)) % 1920;
    snow += `<circle cx="${x}" cy="${y}" r="${3 + (i % 4)}" fill="#fff" opacity=".85"/>`;
  }
  const win = (x, y, w, h, k) => `<path d="M${x} ${y + h} V${y + w / 2} A${w / 2} ${w / 2} 0 0 1 ${x + w} ${y + w / 2} V${y + h} Z" fill="#FFC76B" opacity="${0.6 + 0.35 * Math.sin(t * 1.5 + k)}"/>`;
  const lamp = (x, k) => `<g transform="translate(${x} 900)"><rect x="-6" y="0" width="12" height="260" fill="#1A1A22"/><path d="M-26 0 L26 0 L18 -50 L-18 -50 Z" fill="#1A1A22"/><circle cy="-22" r="16" fill="#FFE3A0" opacity="${0.85 + 0.15 * Math.sin(t * 9 + k)}"/><circle cy="-22" r="60" fill="#FFE3A0" opacity=".18"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#gsk)"/>
  <circle cx="880" cy="140" r="40" fill="#F2EEE2" opacity=".8"/>
  <g fill="#8D8A88" stroke="#5F5C5C" stroke-width="3">
   <rect x="160" y="420" width="190" height="560"/><rect x="730" y="420" width="190" height="560"/>
   <rect x="350" y="560" width="380" height="420"/>
   <path d="M350 560 L540 420 L730 560 Z"/>
   ${[0, 1, 2, 3, 4].map(i => `<rect x="${160 + i * 40}" y="390" width="26" height="34"/><rect x="${730 + i * 40}" y="390" width="26" height="34"/>`).join('')}
   <path d="M175 420 L175 360 L190 340 L205 360 L205 420 Z M305 420 L305 360 L320 340 L335 360 L335 420 Z M745 420 L745 360 L760 340 L775 360 L775 420 Z M875 420 L875 360 L890 340 L905 360 L905 420 Z"/>
  </g>
  <path d="M160 420 H350 M730 420 H920 M350 560 L540 420 L730 560" stroke="#fff" stroke-width="10" opacity=".9" fill="none"/>
  <circle cx="540" cy="640" r="70" fill="#4A3A5C" stroke="#5F5C5C" stroke-width="10"/><circle cx="540" cy="640" r="70" fill="#FFC76B" opacity="${0.4 + 0.2 * Math.sin(t * 2)}"/>
  ${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<line x1="540" y1="640" x2="${540 + 70 * Math.cos(i * Math.PI / 4)}" y2="${640 + 70 * Math.sin(i * Math.PI / 4)}" stroke="#5F5C5C" stroke-width="5"/>`).join('')}
  <path d="M480 980 V820 A60 60 0 0 1 600 820 V980 Z" fill="#3A2A20"/>
  ${win(225, 520, 60, 150, 0)}${win(795, 520, 60, 150, 1)}${win(225, 760, 60, 150, 2)}${win(795, 760, 60, 150, 3)}${win(400, 760, 50, 140, 4)}${win(630, 760, 50, 140, 5)}
  <rect x="0" y="980" width="1080" height="940" fill="#DCE3EC"/>
  ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `<path d="M0 ${1020 + i * 100} H1080" stroke="#C6CFDA" stroke-width="4"/>`).join('')}
  <path d="M0 980 Q 270 960 540 985 T 1080 975 V1000 H0 Z" fill="#fff"/>
  ${lamp(80, 0)}${lamp(1000, 2)}
  ${snow}`,
  `<linearGradient id="gsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2A3560"/><stop offset=".6" stop-color="#6A6E9A"/><stop offset="1" stop-color="#B9A6B8"/></linearGradient>`);
}
