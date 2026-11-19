// New backgrounds: tradingSVG (trading room at night with a wall of candlestick screens and a scrolling LED ticker), penthouseSVG (Lisbon penthouse at night with infinity pool over the city lights and the river), caparicaSVG (Costa da Caparica beach with a little open beach train, surfers on rolling waves and beach bars)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function tradingSVG(t = 0) {
  const screen = (x, y, w, h, seed, up) => {
    let c = ''; const n = 12; let v = 0.5;
    for (let i = 0; i < n; i++) {
      const r = Math.sin(seed * 7 + i * 1.7) * 0.5 + (up ? 0.12 : -0.1);
      const o = v, cl = Math.min(0.92, Math.max(0.08, v + r * 0.25)); v = cl;
      const g = cl >= o, cx = x + 16 + i * (w - 32) / n, top = y + h - 14 - Math.max(o, cl) * (h - 28), bot = y + h - 14 - Math.min(o, cl) * (h - 28);
      const vis = ((t * 3 + seed) % n) > i - 1 ? 1 : 0.25;
      c += `<line x1="${cx + 6}" y1="${top - 8}" x2="${cx + 6}" y2="${bot + 8}" stroke="${g ? '#3DDC84' : '#FF5A5F'}" stroke-width="2" opacity="${vis}"/><rect x="${cx}" y="${top}" width="12" height="${Math.max(4, bot - top)}" fill="${g ? '#3DDC84' : '#FF5A5F'}" opacity="${vis}"/>`;
    }
    return `<rect x="${x - 8}" y="${y - 8}" width="${w + 16}" height="${h + 16}" rx="10" fill="#0A0F18"/><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#0F1C2E"/>${[1, 2, 3].map(k => `<line x1="${x}" y1="${y + k * h / 4}" x2="${x + w}" y2="${y + k * h / 4}" stroke="#1E3350" stroke-width="2"/>`).join('')}${c}`;
  };
  const items = ['IPO $83 ▲', 'ESTREIA ▲', 'AÇÕES ▲', 'BOLSA ▼', 'IPO $83 ▲', 'LUCRO? ▲', 'IMPOSTO ▼'];
  const tick = items.map((s, i) => `<text x="${i * 340}" y="0" font-family="Inter,sans-serif" font-weight="800" font-size="40" fill="${s.includes('▼') ? '#FF5A5F' : '#3DDC84'}">${s}</text>`).join('');
  const off = -((t * 120) % 2380);
  return W(`<rect width="1080" height="1920" fill="url(#tg)"/>
   <rect y="0" width="1080" height="160" fill="#05080F"/>
   ${screen(40, 400, 320, 240, 1, true)}${screen(380, 400, 320, 240, 2, true)}${screen(720, 400, 320, 240, 3, false)}
   ${screen(40, 670, 320, 240, 4, false)}${screen(380, 670, 320, 240, 5, true)}${screen(720, 670, 320, 240, 6, true)}
   <rect x="0" y="940" width="1080" height="70" fill="#05080F"/><g transform="translate(${off} 990)">${tick}<g transform="translate(2380 0)">${tick}</g></g>
   <rect y="1010" width="1080" height="910" fill="#1A2233"/>
   <rect y="1300" width="1080" height="620" fill="#232D42"/>
   ${[0, 1, 2].map(i => `<g transform="translate(${180 + i * 360} 1240)"><rect x="-150" y="0" width="300" height="24" rx="6" fill="#3A2A20"/><rect x="-120" y="-120" width="110" height="80" rx="6" fill="#0A0F18"/><rect x="-112" y="-112" width="94" height="64" fill="${['#123B2A', '#3B1216', '#123B2A'][i]}"/><rect x="10" y="-120" width="110" height="80" rx="6" fill="#0A0F18"/><rect x="18" y="-112" width="94" height="64" fill="#0F2440"/><rect x="-20" y="-40" width="40" height="40" fill="#0A0F18"/></g>`).join('')}
   <circle cx="${540 + Math.sin(t * 2) * 300}" cy="160" r="260" fill="#3DDC84" opacity="0.05"/>`,
    `<linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1220"/><stop offset="1" stop-color="#16203A"/></linearGradient>`);
}

function penthouseSVG(t = 0) {
  let lights = ''; for (let i = 0; i < 70; i++) { const x = (i * 97) % 1080, y = 820 + (i * 53) % 200, on = Math.sin(t * 2 + i) > -0.6; lights += `<rect x="${x}" y="${y}" width="8" height="10" fill="#FFD27A" opacity="${on ? 0.9 : 0.25}"/>`; }
  let stars = ''; for (let i = 0; i < 25; i++) stars += `<circle cx="${(i * 211) % 1080}" cy="${170 + (i * 89) % 420}" r="${2 + (i % 2)}" fill="#fff" opacity="${0.4 + 0.5 * Math.abs(Math.sin(t * 1.5 + i))}"/>`;
  let rip = ''; for (let i = 0; i < 6; i++) rip += `<path d="M${60 + i * 170 + Math.sin(t * 2 + i) * 20} ${1230 + (i % 3) * 30} q 30 -10 60 0" stroke="#BFF1FF" stroke-width="4" fill="none" opacity=".7"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#pg)"/>${stars}
   <circle cx="860" cy="560" r="60" fill="#FFF4D6"/>
   <path d="M0 840 L60 790 L130 820 L200 760 L280 800 L360 740 L430 790 L520 750 L600 800 L700 730 L790 790 L880 760 L960 800 L1080 770 L1080 1040 L0 1040 Z" fill="#1C2340"/>${lights}
   <rect y="1040" width="1080" height="80" fill="#0E2238"/><path d="M0 1070 q 270 ${Math.sin(t) * 6} 540 0 t 540 0" stroke="#4A6C96" stroke-width="3" fill="none"/>
   <rect y="1120" width="1080" height="24" fill="#E8E2D6"/>
   <rect y="1144" width="1080" height="190" fill="url(#pool)"/>${rip}
   <rect y="1334" width="1080" height="586" fill="#D9CDB8"/>${[0, 1, 2, 3, 4, 5].map(i => `<line x1="${i * 216}" y1="1334" x2="${i * 216 - 100}" y2="1920" stroke="#C7B9A0" stroke-width="4"/>`).join('')}
   <g transform="translate(80 1150)"><rect x="0" y="0" width="16" height="190" fill="#3A3A3A"/><circle cx="8" cy="-10" r="26" fill="#FFE9A8" opacity="${0.75 + 0.25 * Math.sin(t * 3)}"/></g>
   <g transform="translate(960 1260) rotate(${Math.sin(t * 1.2) * 3})"><rect x="-8" y="-200" width="16" height="200" fill="#6B4A32"/>${[0, 1, 2, 3, 4].map(k => `<path d="M0 -200 q ${-80 + k * 40} -60 ${-130 + k * 65} 10" stroke="#2E7D4A" stroke-width="22" fill="none" stroke-linecap="round"/>`).join('')}<rect x="-50" y="0" width="100" height="70" rx="8" fill="#F5F0E6"/></g>`,
    `<linearGradient id="pg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0E1230"/><stop offset=".6" stop-color="#2C2A5C"/><stop offset="1" stop-color="#4B3466"/></linearGradient>
     <linearGradient id="pool" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2FB6D6"/><stop offset="1" stop-color="#1A6F9C"/></linearGradient>`);
}

function caparicaSVG(t = 0) {
  const waveY = k => 900 + k * 40;
  let waves = ''; for (let k = 0; k < 4; k++) { const ph = t * (1.2 + k * 0.2) + k; waves += `<path d="M0 ${waveY(k) + Math.sin(ph) * 8} ${Array.from({ length: 10 }, (_, i) => `q 60 ${-18 + Math.sin(ph + i) * 6} 120 0`).join(' ')} L1080 ${waveY(k) + 60} L0 ${waveY(k) + 60} Z" fill="${['#2B8CC4', '#3AA0D2', '#56B5DE', '#7CC9E6'][k]}"/><path d="M0 ${waveY(k) + Math.sin(ph) * 8} ${Array.from({ length: 10 }, (_, i) => `q 60 ${-18 + Math.sin(ph + i) * 6} 120 0`).join(' ')}" stroke="#fff" stroke-width="5" fill="none" opacity=".8"/>`; }
  const sx = 200 + Math.sin(t * 0.8) * 120;
  const surfer = `<g transform="translate(${sx} ${905 + Math.sin(t * 2) * 6})"><ellipse rx="44" ry="8" fill="#F2C14E"/><rect x="-5" y="-50" width="10" height="44" fill="#1B2430"/><circle cy="-60" r="10" fill="#8A5A3C"/></g>`;
  const tx = 1180 - ((t * 140) % 1600);
  const car = (x, c) => `<g transform="translate(${x} 0)"><rect x="0" y="-60" width="170" height="60" rx="10" fill="${c}"/><rect x="0" y="-100" width="170" height="14" fill="#fff"/>${[20, 70, 120].map(px => `<rect x="${px}" y="-86" width="6" height="26" fill="#fff"/>`).join('')}<circle cx="35" cy="6" r="16" fill="#222"/><circle cx="135" cy="6" r="16" fill="#222"/></g>`;
  const train = `<g transform="translate(${tx} 1140)">${car(0, '#E2365B')}${car(185, '#F2C14E')}${car(370, '#2FA36B')}<rect x="-80" y="-80" width="76" height="80" rx="12" fill="#1F5FA8"/><circle cx="-56" cy="6" r="16" fill="#222"/></g>`;
  const bar = (x, c) => `<g transform="translate(${x} 1010)"><rect x="0" y="0" width="180" height="90" fill="#F5E6C8"/><path d="M-10 0 L90 -50 L190 0 Z" fill="${c}"/><rect x="60" y="30" width="60" height="60" fill="#6B4A32"/></g>`;
  return W(`<rect width="1080" height="1920" fill="url(#cg)"/>
   <circle cx="860" cy="560" r="80" fill="#FFF1B8"/>
   ${[0, 1, 2].map(i => { const x = ((t * 20 + i * 400) % 1300) - 150; return `<g transform="translate(${x} ${640 + i * 50})"><ellipse rx="80" ry="26" fill="#fff" opacity=".9"/><ellipse cx="40" cy="-14" rx="50" ry="22" fill="#fff" opacity=".9"/></g>`; }).join('')}
   ${waves}${surfer}
   <rect y="1000" width="1080" height="920" fill="#F2DDA9"/>${bar(80, '#1F5FA8')}${bar(820, '#E2365B')}
   <rect y="1150" width="1080" height="10" fill="#B8A27A"/>${train}
   ${Array.from({ length: 24 }, (_, i) => `<circle cx="${(i * 149) % 1080}" cy="${1220 + (i * 83) % 680}" r="4" fill="#DCC48E"/>`).join('')}
   <g transform="translate(540 1050) rotate(${Math.sin(t * 2) * 4})"><rect x="-4" y="-120" width="8" height="140" fill="#666"/><path d="M0 -120 q -110 -10 -120 50 q 60 -30 120 -50 q 110 -10 120 50 q -60 -30 -120 -50 Z" fill="#E2365B"/></g>`,
    `<linearGradient id="cg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC8F2"/><stop offset=".45" stop-color="#BFE6F7"/><stop offset="1" stop-color="#FCE9C4"/></linearGradient>`);
}
