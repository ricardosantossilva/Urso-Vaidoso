// New backgrounds (fado, black-and-white video): becoSVG (Alfama-style stepped alley at night: tall tiled houses, flickering wrought-iron wall lamps,
// balconies with flower pots, a swinging bird cage and a cat on the steps), tascaSVG (fado night in a tasca: checked tablecloths, wine barrels,
// spotlit little stage with a guitarist strumming, guitars on the wall and a 'Fado hoje' chalkboard), miradouroSVG (viewpoint above the Tejo at dusk:
// red suspension bridge, statue on the far bank, a kiosk with a lamp, a drifting sailboat and the setting sun)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function becoSVG(t = 0) {
  const defs = `<linearGradient id="bcSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0C1630"/><stop offset="1" stop-color="#28385E"/></linearGradient>
  <radialGradient id="bcLamp" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFE7A3" stop-opacity=".95"/><stop offset="1" stop-color="#FFE7A3" stop-opacity="0"/></radialGradient>
  <pattern id="bcTile" width="40" height="40" patternUnits="userSpaceOnUse"><rect width="40" height="40" fill="#24456E"/><circle cx="20" cy="20" r="8" fill="#5F7FA5"/><path d="M0 0 L40 40 M40 0 L0 40" stroke="#5F7FA5" stroke-width="2" opacity=".35"/></pattern>`;
  let s = `<rect width="1080" height="1920" fill="url(#bcSky)"/>`;
  s += `<circle cx="540" cy="180" r="60" fill="#F2EAD0"/>`;
  for (let i = 0; i < 25; i++) s += `<circle cx="${400 + (i * 97) % 280}" cy="${(i * 61) % 400}" r="2" fill="#fff" opacity="${.3 + .6 * Math.abs(Math.sin(t * 2 + i))}"/>`;
  // left houses (tiled) and right houses (ochre/pink), perspective narrowing upward
  s += `<path d="M0 0 H380 L420 1400 H0 Z" fill="url(#bcTile)"/><path d="M380 0 L420 1400 L440 1400 L400 0 Z" fill="#1E3555"/>`;
  s += `<path d="M1080 0 H700 L660 1400 H1080 Z" fill="#D9A55B"/><path d="M700 0 L660 1400 L640 1400 L680 0 Z" fill="#6B4A22"/>`;
  // windows with shutters and balconies with flower pots
  const win = (x, y, lit, side) => {
    const g = lit ? `#FFD98A` : `#1A2235`;
    return `<rect x="${x}" y="${y}" width="90" height="130" fill="${g}"/><rect x="${x - 4}" y="${y - 4}" width="98" height="138" fill="none" stroke="#F4F1EA" stroke-width="8"/>
      <rect x="${x - 20}" y="${y + 130}" width="130" height="10" fill="#222"/>${[0, 1, 2, 3, 4, 5].map(k => `<rect x="${x - 16 + k * 24}" y="${y + 92}" width="4" height="40" fill="#222"/>`).join('')}
      <rect x="${x - 6 + side * 70}" y="${y + 104}" width="30" height="26" fill="#A0502A"/><circle cx="${x + 9 + side * 70}" cy="${y + 96}" r="16" fill="#C8202C"/><circle cx="${x + 2 + side * 70}" cy="${y + 88}" r="9" fill="#2E8B57"/>`;
  };
  s += win(120, 260, true, 0) + win(120, 620, false, 1) + win(860, 300, false, 0) + win(860, 680, true, 1);
  // swinging bird cage on the right balcony
  const cg = Math.sin(t * 2) * 8;
  s += `<g transform="translate(830 820) rotate(${cg})"><line x1="0" y1="0" x2="0" y2="40" stroke="#222" stroke-width="3"/><path d="M-34 110 V70 Q0 30 34 70 V110 Z" fill="none" stroke="#E8E2D0" stroke-width="4"/>${[-22, -11, 0, 11, 22].map(x => `<line x1="${x}" y1="${60}" x2="${x}" y2="110" stroke="#E8E2D0" stroke-width="2"/>`).join('')}<ellipse cx="0" cy="92" rx="12" ry="9" fill="#FFD45C"/></g>`;
  // wrought-iron wall lamps with flicker
  const lamp = (x, y, d) => {
    const fl = .75 + .25 * Math.abs(Math.sin(t * 9 + x) * Math.sin(t * 3.3 + y));
    return `<path d="M${x} ${y} h${d * 60} v20" stroke="#111" stroke-width="7" fill="none"/><circle cx="${x + d * 60}" cy="${y + 70}" r="${170 * fl}" fill="url(#bcLamp)" opacity="${fl}"/>
      <path d="M${x + d * 60 - 26} ${y + 30} h52 l-10 70 h-32 Z" fill="#FFF0B8" stroke="#111" stroke-width="6"/><path d="M${x + d * 60 - 32} ${y + 30} h64 l-32 -24 Z" fill="#111"/>`;
  };
  s += lamp(380, 520, 1) + lamp(700, 440, -1) + lamp(400, 960, 1);
  // stepped alley in the centre going up, then a landing in front
  for (let k = 0; k < 14; k++) {
    const y = 1400 - k * 48, w = 300 - k * 14;
    s += `<rect x="${540 - w / 2}" y="${y}" width="${w}" height="48" fill="${k % 2 ? '#BDB6A6' : '#D6CFBE'}"/><rect x="${540 - w / 2}" y="${y}" width="${w}" height="6" fill="#8F8878"/>`;
  }
  s += `<rect x="0" y="1400" width="1080" height="520" fill="#CFC8B7"/>`;
  // wavy calçada pattern on the landing
  for (let r = 0; r < 9; r++) s += `<path d="M0 ${1440 + r * 56} ${Array.from({ length: 12 }, (_, i) => `Q ${i * 90 + 45} ${1440 + r * 56 + (i % 2 ? 22 : -22)} ${(i + 1) * 90} ${1440 + r * 56}`).join(' ')}" stroke="#2A2A2A" stroke-width="7" fill="none" opacity=".28"/>`;
  // cat on the steps, tail swishing
  const tl = Math.sin(t * 3) * 20;
  s += `<g transform="translate(600 1230)" fill="#141414"><ellipse cx="0" cy="0" rx="46" ry="26"/><circle cx="40" cy="-26" r="22"/><path d="M28 -44 l6 -18 l8 14 Z M46 -44 l8 -16 l4 16 Z"/><path d="M-44 0 Q -80 ${-30 + tl} -70 ${-70 + tl}" stroke="#141414" stroke-width="10" fill="none" stroke-linecap="round"/><circle cx="46" cy="-28" r="4" fill="#E6D36A"/></g>`;
  return W(s, defs);
}

function tascaSVG(t = 0) {
  const defs = `<radialGradient id="tsSpot" cx=".5" cy="0" r="1"><stop offset="0" stop-color="#FFF4D0" stop-opacity=".85"/><stop offset="1" stop-color="#FFF4D0" stop-opacity="0"/></radialGradient>
  <pattern id="tsCheck" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="#F4F1EA"/><rect width="30" height="30" fill="#C8202C"/><rect x="30" y="30" width="30" height="30" fill="#C8202C"/></pattern>`;
  let s = `<rect width="1080" height="1920" fill="#3A2416"/>`;
  // wood-panelled wall with planks
  for (let i = 0; i < 12; i++) s += `<rect x="${i * 90}" y="0" width="88" height="1180" fill="${i % 2 ? '#4A2E1C' : '#553521'}"/>`;
  s += `<rect y="1180" width="1080" height="740" fill="#2A1A10"/>`;
  for (let i = 0; i < 10; i++) s += `<line x1="0" y1="${1200 + i * 75}" x2="1080" y2="${1200 + i * 75}" stroke="#1A0F08" stroke-width="4"/>`;
  // 'Fado hoje' chalkboard
  s += `<g transform="translate(70 380) rotate(-3)"><rect width="260" height="200" fill="#1B1F1C" stroke="#8A5A32" stroke-width="14"/><text x="130" y="85" text-anchor="middle" font-family="Lora,serif" font-style="italic" font-size="52" fill="#F4F1EA">Fado</text><text x="130" y="150" text-anchor="middle" font-family="Lora,serif" font-size="46" fill="#F4F1EA">hoje</text></g>`;
  // guitars hanging on the wall (guitarra portuguesa: round pear body)
  const guit = (x, y, r) => `<g transform="translate(${x} ${y}) rotate(${r})"><ellipse cx="0" cy="80" rx="62" ry="70" fill="#C98B4A" stroke="#3A2416" stroke-width="5"/><circle cx="0" cy="70" r="16" fill="#2A1A10"/><rect x="-10" y="-120" width="20" height="140" fill="#3A2416"/><path d="M-26 -150 h52 l-10 32 h-32 Z" fill="#E8D7A8"/>${[-18, -9, 0, 9, 18].map(k => `<circle cx="${k}" cy="-138" r="4" fill="#3A2416"/>`).join('')}</g>`;
  s += guit(820, 360, 8) + guit(960, 420, -6);
  // spotlit little stage in the middle
  s += `<path d="M540 0 L320 1180 H760 Z" fill="url(#tsSpot)"/>`;
  s += `<rect x="300" y="1080" width="480" height="40" fill="#1A0F08"/>`;
  // guitarist silhouette on a chair, strumming
  const st = Math.sin(t * 14) * 10;
  s += `<g transform="translate(540 820)" fill="#0E0905"><circle cx="0" cy="0" r="44"/><rect x="-46" y="40" width="92" height="160" rx="30"/><rect x="-60" y="190" width="120" height="20"/><rect x="-50" y="210" width="16" height="70"/><rect x="34" y="210" width="16" height="70"/>
    <ellipse cx="10" cy="170" rx="58" ry="52" fill="#6E4A28"/><rect x="-120" y="150" width="130" height="14" transform="rotate(-18 10 170)" fill="#3A2416"/>
    <path d="M40 80 Q 70 ${130 + st} 30 ${165 + st}" stroke="#0E0905" stroke-width="22" fill="none" stroke-linecap="round"/></g>`;
  // wine barrels on both sides
  const barrel = (x, y) => `<g transform="translate(${x} ${y})"><ellipse cx="0" cy="0" rx="110" ry="130" fill="#7A4A26"/><rect x="-112" y="-60" width="224" height="14" fill="#222"/><rect x="-112" y="46" width="224" height="14" fill="#222"/><ellipse cx="0" cy="0" rx="60" ry="128" fill="none" stroke="#5A3418" stroke-width="5"/><circle cx="0" cy="100" r="10" fill="#222"/></g>`;
  s += barrel(110, 1100) + barrel(970, 1100);
  // tables with checked tablecloths and candles flickering
  const table = (x, y) => {
    const fl = 1 + .2 * Math.sin(t * 12 + x);
    return `<path d="M${x - 170} ${y} h340 l30 120 h-400 Z" fill="url(#tsCheck)"/><rect x="${x - 6}" y="${y - 50}" width="12" height="50" fill="#F4F1EA"/><ellipse cx="${x}" cy="${y - 62}" rx="${8 * fl}" ry="${16 * fl}" fill="#FFD45C"/><circle cx="${x}" cy="${y - 62}" r="${50 * fl}" fill="#FFE7A3" opacity=".25"/>
      <rect x="${x + 60}" y="${y - 80}" width="26" height="80" rx="6" fill="#1E3B22"/><path d="M${x - 90} ${y - 40} h44 l-8 40 h-28 Z" fill="#E8E2D0" opacity=".85"/>`;
  };
  s += table(200, 1500) + table(880, 1500);
  // musical notes drifting from the guitar
  for (let i = 0; i < 6; i++) { const p = (t * .4 + i / 6) % 1; s += `<text x="${560 + Math.sin(p * 6 + i) * 120}" y="${980 - p * 560}" font-size="54" fill="#F4F1EA" opacity="${1 - p}">${i % 2 ? '♪' : '♫'}</text>`; }
  return W(s, defs);
}

function miradouroSVG(t = 0) {
  const defs = `<linearGradient id="mdSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B2550"/><stop offset=".5" stop-color="#C0607A"/><stop offset=".8" stop-color="#F3A65A"/><stop offset="1" stop-color="#FBD38A"/></linearGradient>
  <linearGradient id="mdRiver" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E7A06A"/><stop offset="1" stop-color="#3A3560"/></linearGradient>`;
  let s = `<rect width="1080" height="1920" fill="url(#mdSky)"/>`;
  // setting sun
  const sy = 860 + t * 3;
  s += `<circle cx="300" cy="${sy}" r="90" fill="#FFE6A8"/>`;
  s += `<rect y="900" width="1080" height="300" fill="url(#mdRiver)"/>`;
  for (let i = 0; i < 14; i++) s += `<rect x="${(i * 173 + t * 30) % 1180 - 100}" y="${920 + (i * 37) % 260}" width="${60 + (i % 3) * 30}" height="4" fill="#FFE6A8" opacity=".5"/>`;
  // far bank with statue on a pedestal
  s += `<path d="M0 900 Q 300 860 560 880 T 1080 870 V905 H0 Z" fill="#3B2F4A"/><rect x="880" y="720" width="40" height="160" fill="#2C2338"/><path d="M870 720 h60 l-10 -20 h-40 Z" fill="#2C2338"/><path d="M900 700 l-40 -12 v-10 l40 6 l40 -6 v10 Z" fill="#2C2338"/><circle cx="900" cy="672" r="12" fill="#2C2338"/>`;
  // red suspension bridge: two towers, main cable, deck
  s += `<rect x="420" y="560" width="26" height="360" fill="#B5352B"/><rect x="760" y="560" width="26" height="360" fill="#B5352B"/><rect x="420" y="640" width="366" height="12" fill="#B5352B"/>`;
  s += `<path d="M-40 840 Q 200 760 433 565 Q 603 820 773 565 Q 950 760 1120 840" stroke="#B5352B" stroke-width="8" fill="none"/>`;
  for (let k = 0; k < 30; k++) { const x = -20 + k * 38; s += `<line x1="${x}" y1="${830}" x2="${x}" y2="${x < 433 ? 840 - (x + 40) / 473 * 260 : x < 773 ? 575 + Math.sin((x - 433) / 340 * Math.PI) * 240 : 575 + (x - 773) / 347 * 260}" stroke="#B5352B" stroke-width="2"/>`; }
  s += `<rect x="-20" y="830" width="1120" height="16" fill="#8C2A22"/>`;
  // cars on the deck
  for (let i = 0; i < 5; i++) { const x = ((t * 140 + i * 260) % 1300) - 100; s += `<rect x="${x}" y="822" width="30" height="10" rx="3" fill="#FFF1C2"/>`; }
  // drifting sailboat
  const bx = 100 + ((t * 25) % 900);
  s += `<g transform="translate(${bx} ${1060 + Math.sin(t * 2) * 6})"><path d="M-50 0 h100 l-16 22 h-68 Z" fill="#F4F1EA"/><path d="M0 -10 V-120 L54 -10 Z" fill="#F4F1EA"/><path d="M-4 -10 V-100 L-44 -10 Z" fill="#E8D7A8"/></g>`;
  // the miradouro: tiled parapet, kiosk with a lamp, tree and benches
  s += `<rect y="1200" width="1080" height="720" fill="#D7CFBC"/>`;
  for (let r = 0; r < 7; r++) s += `<path d="M0 ${1290 + r * 90} ${Array.from({ length: 9 }, (_, i) => `Q ${i * 120 + 60} ${1290 + r * 90 + (i % 2 ? 28 : -28)} ${(i + 1) * 120} ${1290 + r * 90}`).join(' ')}" stroke="#222" stroke-width="8" fill="none" opacity=".28"/>`;
  s += `<rect y="1170" width="1080" height="50" fill="#F4F1EA"/>${Array.from({ length: 27 }, (_, i) => `<rect x="${i * 40 + 6}" y="1178" width="28" height="34" fill="#3E6FA8"/>`).join('')}`;
  s += `<g transform="translate(110 900)"><rect x="0" y="120" width="170" height="160" fill="#2E7D4F"/><path d="M-20 120 L85 50 L190 120 Z" fill="#1F5A38"/><rect x="20" y="170" width="130" height="50" fill="#FFE6A8"/><rect x="80" y="-60" width="10" height="120" fill="#111"/><circle cx="85" cy="-70" r="${18 + Math.sin(t * 4) * 2}" fill="#FFF1C2"/></g>`;
  const sw = Math.sin(t * 1.3) * 4;
  s += `<g transform="translate(980 1180)"><rect x="-16" y="-260" width="32" height="260" fill="#3A2A1C"/><g transform="rotate(${sw} 0 -300)"><circle cx="-60" cy="-310" r="90" fill="#2F4A2A"/><circle cx="40" cy="-340" r="100" fill="#365532"/><circle cx="-10" cy="-400" r="80" fill="#3F6139"/></g></g>`;
  // gulls
  for (let i = 0; i < 3; i++) { const x = ((t * (60 + i * 15) + i * 400) % 1300) - 100, y = 420 + i * 90, f = Math.sin(t * 6 + i) * 12; s += `<path d="M${x - 30} ${y + f} Q ${x - 15} ${y - 6} ${x} ${y} Q ${x + 15} ${y - 6} ${x + 30} ${y + f}" stroke="#1A1424" stroke-width="5" fill="none"/>`; }
  return W(s, defs);
}
