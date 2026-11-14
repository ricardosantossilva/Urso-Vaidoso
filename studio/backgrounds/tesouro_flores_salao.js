// New backgrounds (2026-11-14 11:00 royal bracelet video):
// tesouroSVG: royal treasury vault with glass showcases, glowing jewels and sweeping spotlights
// floresSVG: Porto old street (Rua das Flores style) with granite facades, filigree jewellery shop window and swinging sign
// salaoSVG: old aunt's drawing room in a palacete with swaying chandelier, portraits and grandfather clock pendulum
const W3 = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function tesouroSVG(t = 0) {
  const sw = Math.sin(t * 0.9) * 120;
  const case_ = (x, y, w, h, gem) => `<g transform="translate(${x} ${y})">
    <rect x="-${w/2+20}" y="${h}" width="${w+40}" height="260" fill="#2A1E16"/><rect x="-${w/2+20}" y="${h}" width="${w+40}" height="18" fill="#C9A24A"/>
    <rect x="-${w/2}" y="0" width="${w}" height="${h}" fill="rgba(170,210,235,.18)" stroke="#D9C38A" stroke-width="5"/>
    <path d="M-${w/2-20} 20 L-${w/2-60} ${h-20}" stroke="rgba(255,255,255,.35)" stroke-width="10"/>
    ${gem}</g>`;
  const sparkle = (x, y, ph) => { const k = (Math.sin(t * 4 + ph) + 1) / 2; return `<g transform="translate(${x} ${y}) scale(${0.4 + k})" opacity="${0.3 + k * 0.7}"><path d="M0 -18 L4 -4 L18 0 L4 4 L0 18 L-4 4 L-18 0 L-4 -4 Z" fill="#FFF7D6"/></g>`; };
  const crown = `<g transform="translate(0 150)"><path d="M-90 40 L-90 -30 L-50 10 L0 -50 L50 10 L90 -30 L90 40 Z" fill="#E8B83A" stroke="#8A6414" stroke-width="5"/><rect x="-92" y="36" width="184" height="26" fill="#C8202C"/><circle cx="0" cy="-50" r="12" fill="#2FA36B"/><circle cx="-90" cy="-30" r="9" fill="#fff"/><circle cx="90" cy="-30" r="9" fill="#fff"/></g>`;
  const brace = `<g transform="translate(0 160)"><ellipse rx="110" ry="60" fill="none" stroke="#E8E2D0" stroke-width="22"/><ellipse rx="110" ry="60" fill="none" stroke="#fff" stroke-width="6" stroke-dasharray="4 14"/><ellipse cx="0" cy="-60" rx="42" ry="34" fill="#1E9E6A" stroke="#E8E2D0" stroke-width="10"/><ellipse cx="-10" cy="-70" rx="12" ry="8" fill="#9AF0C8"/></g>`;
  const neck = `<g transform="translate(0 130)"><path d="M-90 -20 Q0 110 90 -20" fill="none" stroke="#F3EEE2" stroke-width="16" stroke-dasharray="2 18" stroke-linecap="round"/><circle cy="58" r="20" fill="#2D6FD1"/></g>`;
  return W3(`<rect width="1080" height="1920" fill="url(#tv)"/>
   <g fill="#3A2A20" opacity=".6">${[0,1,2,3,4].map(i => `<path d="M${i*270-60} 420 Q${i*270+75} 330 ${i*270+210} 420 L${i*270+210} 1400 L${i*270-60} 1400 Z"/>`).join('')}</g>
   <g fill="#4A382C">${[0,1,2,3,4].map(i => `<rect x="${i*270-70}" y="400" width="40" height="1000"/>`).join('')}</g>
   <rect y="1380" width="1080" height="540" fill="url(#tfl)"/>
   <path d="M${540+sw-80} 380 L${540+sw-320} 1500 L${540+sw+320} 1500 L${540+sw+80} 380 Z" fill="rgba(255,236,180,.10)"/>
   <path d="M${200-sw*0.6} 380 L${40-sw*0.6} 1400 L${420-sw*0.6} 1400 Z" fill="rgba(255,236,180,.07)"/>
   ${case_(200, 980, 300, 360, crown)}
   ${case_(540, 900, 320, 400, brace)}
   ${case_(880, 980, 300, 360, neck)}
   ${sparkle(540, 1000, 0)}${sparkle(470, 1080, 1.7)}${sparkle(610, 1060, 3.1)}${sparkle(180, 1090, 2.2)}${sparkle(900, 1110, 4.4)}
   <g opacity=".9"><rect x="380" y="1320" width="320" height="60" rx="8" fill="#1A120C" stroke="#C9A24A" stroke-width="3"/><text x="540" y="1360" font-family="Lora,serif" font-size="30" fill="#E8D49A" text-anchor="middle">TESOURO REAL</text></g>`,
   `<linearGradient id="tv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#140D09"/><stop offset=".6" stop-color="#2B1D15"/><stop offset="1" stop-color="#3A281C"/></linearGradient>
    <linearGradient id="tfl" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5A4030"/><stop offset="1" stop-color="#2A1C12"/></linearGradient>`);
}

function floresSVG(t = 0) {
  const swing = Math.sin(t * 2) * 8;
  const facade = (x, w, c, floors) => { let s = `<rect x="${x}" y="380" width="${w}" height="1100" fill="${c}"/>`;
    for (let f = 0; f < floors; f++) for (let i = 0; i < 2; i++) { const wx = x + 30 + i * (w / 2), wy = 440 + f * 190;
      s += `<rect x="${wx}" y="${wy}" width="${w/2-60}" height="130" fill="#2C3E50"/><rect x="${wx-8}" y="${wy+128}" width="${w/2-44}" height="12" fill="#7C8A96"/><g stroke="#1B1B1B" stroke-width="3">${[0,1,2,3,4,5].map(k=>`<line x1="${wx+k*(w/2-60)/5}" y1="${wy+100}" x2="${wx+k*(w/2-60)/5}" y2="${wy+140}"/>`).join('')}</g>`; }
    return s; };
  const pigeonX = (t * 60) % 1300 - 100;
  return W3(`<rect width="1080" height="1920" fill="url(#fsk)"/>
   ${facade(-40, 380, '#C9B79C', 4)}${facade(340, 400, '#2F7FA8', 4)}${facade(740, 380, '#E8C6A0', 4)}
   <g fill="#9B9182">${[0,1,2,3].map(i=>`<rect x="${i*400-40}" y="380" width="22" height="1100"/>`).join('')}</g>
   <rect x="340" y="1180" width="400" height="300" fill="#3A2416"/>
   <rect x="365" y="1205" width="350" height="250" fill="url(#fwin)"/>
   <g transform="translate(540 1300)"><path d="M0 40 C -60 0 -70 -40 -40 -55 C -20 -65 -5 -50 0 -38 C 5 -50 20 -65 40 -55 C 70 -40 60 0 0 40 Z" fill="none" stroke="#F2C230" stroke-width="7"/>
     <path d="M0 30 C -40 0 -48 -30 -28 -42 M0 30 C 40 0 48 -30 28 -42" fill="none" stroke="#F2C230" stroke-width="3" stroke-dasharray="3 5"/>
     <circle cx="-110" cy="20" r="26" fill="none" stroke="#F2C230" stroke-width="6"/><circle cx="110" cy="20" r="26" fill="none" stroke="#F2C230" stroke-width="6"/></g>
   <g transform="translate(760 1110) rotate(${swing})"><line x1="0" y1="0" x2="0" y2="40" stroke="#222" stroke-width="5"/><rect x="-90" y="40" width="180" height="70" rx="10" fill="#0B2343" stroke="#F2C230" stroke-width="4"/><text x="0" y="88" font-family="Lora,serif" font-size="34" fill="#F2C230" text-anchor="middle">OURIVES</text></g>
   <rect x="738" y="1100" width="60" height="10" fill="#222"/>
   <rect y="1480" width="1080" height="440" fill="#8E8778"/>
   <g stroke="#6E685B" stroke-width="4">${[0,1,2,3,4,5,6,7,8,9,10].map(i=>`<line x1="${i*110}" y1="1480" x2="${i*140-200}" y2="1920"/>`).join('')}${[0,1,2,3].map(i=>`<line x1="0" y1="${1530+i*100}" x2="1080" y2="${1530+i*100}"/>`).join('')}</g>
   <g transform="translate(${pigeonX} ${1460 + Math.abs(Math.sin(t*6))*-14})"><ellipse rx="26" ry="16" fill="#8C93A0"/><circle cx="22" cy="-14" r="11" fill="#7A818E"/><path d="M32 -14 l10 3 l-10 3Z" fill="#E8A93A"/></g>`,
   `<linearGradient id="fsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#F2A86B"/><stop offset=".25" stop-color="#E9C49A"/><stop offset="1" stop-color="#D9B98F"/></linearGradient>
    <radialGradient id="fwin" cx=".5" cy=".5" r=".7"><stop offset="0" stop-color="#FFF1C2"/><stop offset="1" stop-color="#C98E3A"/></radialGradient>`);
}

function salaoSVG(t = 0) {
  const ch = Math.sin(t * 1.2) * 3;
  const pend = Math.sin(t * 3.1) * 18;
  const frame = (x, y, w, h, face) => `<g transform="translate(${x} ${y})"><rect x="-12" y="-12" width="${w+24}" height="${h+24}" fill="#C9A24A"/><rect width="${w}" height="${h}" fill="#3C2E28"/>${face}</g>`;
  const lady = `<circle cx="80" cy="90" r="40" fill="#E9C9A8"/><path d="M40 70 Q80 20 120 70 Q120 40 80 34 Q40 40 40 70Z" fill="#6B4A32"/><path d="M20 220 Q80 120 140 220Z" fill="#7A2E3A"/><circle cx="80" cy="140" r="8" fill="#1E9E6A"/>`;
  const gent = `<circle cx="80" cy="90" r="40" fill="#E9C9A8"/><path d="M50 108 Q80 124 110 108" stroke="#4A3A2A" stroke-width="8" fill="none"/><path d="M20 220 Q80 120 140 220Z" fill="#1B2A44"/>`;
  return W3(`<rect width="1080" height="1920" fill="#7E2F3A"/>
   <g fill="#8E3A46">${[0,1,2,3,4,5,6].map(i=>`<rect x="${i*170+20}" y="380" width="120" height="1000"/>`).join('')}</g>
   <rect y="380" width="1080" height="26" fill="#C9A24A"/>
   ${frame(90, 520, 160, 220, lady)}${frame(830, 520, 160, 220, gent)}
   <g transform="translate(540 380) rotate(${ch})"><line x1="0" y1="0" x2="0" y2="140" stroke="#C9A24A" stroke-width="6"/>
     <ellipse cx="0" cy="170" rx="150" ry="34" fill="#E8C76A"/>${[-120,-60,0,60,120].map(x=>`<g transform="translate(${x} 160)"><rect x="-6" y="-40" width="12" height="40" fill="#FFF8E6"/><ellipse cx="0" cy="-48" rx="7" ry="12" fill="#FFD45C" opacity="${0.7+0.3*Math.sin(t*9+x)}"/></g>`).join('')}
     ${[-110,-55,0,55,110].map(x=>`<path d="M${x} 200 l-10 30 l10 20 l10 -20Z" fill="#DDF2FF" opacity=".9"/>`).join('')}</g>
   <g transform="translate(540 560)"><circle r="160" fill="rgba(255,228,160,.10)"/></g>
   <g transform="translate(900 980)"><rect x="-60" y="0" width="120" height="420" fill="#4A2C1C"/><circle cy="70" r="46" fill="#F3EAD6" stroke="#C9A24A" stroke-width="6"/>
     <line x1="0" y1="70" x2="0" y2="40" stroke="#222" stroke-width="5"/><line x1="0" y1="70" x2="22" y2="76" stroke="#222" stroke-width="4"/>
     <rect x="-40" y="140" width="80" height="230" fill="#2A180E"/><g transform="translate(0 150) rotate(${pend})"><line x1="0" y1="0" x2="0" y2="170" stroke="#C9A24A" stroke-width="5"/><circle cy="180" r="22" fill="#E8B83A"/></g></g>
   <g transform="translate(160 1180)"><rect x="-90" y="0" width="180" height="220" rx="16" fill="#2A180E"/><rect x="-70" y="20" width="140" height="80" fill="#3A2416"/><ellipse cx="0" cy="-10" rx="80" ry="22" fill="#1E9E6A" opacity=".0"/>
     <g transform="translate(0 -30)"><rect x="-60" y="-40" width="120" height="50" rx="10" fill="#7A2E3A"/><rect x="-60" y="-18" width="120" height="6" fill="#C9A24A"/></g></g>
   <rect y="1380" width="1080" height="540" fill="#5A3622"/>
   <g fill="#4A2C1A">${[0,1,2,3,4,5,6,7,8].map(i=>`<rect x="${i*130}" y="1380" width="6" height="540"/>`).join('')}</g>
   <ellipse cx="540" cy="1720" rx="480" ry="120" fill="#2F4A6E" opacity=".7"/><ellipse cx="540" cy="1720" rx="400" ry="90" fill="none" stroke="#C9A24A" stroke-width="6" opacity=".7"/>`);
}
