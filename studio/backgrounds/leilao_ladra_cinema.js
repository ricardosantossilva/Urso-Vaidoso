// Backgrounds 2026-11-15 19:00: leilaoSVG (auction room with chandelier, red curtains, podium and a glowing red sword in a glass case),
// ladraSVG (Lisbon flea market on Campo de Santa Clara with white domed church behind, toy stalls, flapping awnings),
// cinemaSVG (old art deco cinema facade at night with chasing marquee bulbs and a neon tower)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function leilaoSVG(t = 0) {
  const sw = Math.sin(t * 1.3) * 3;
  let paddles = '';
  for (let i = 0; i < 7; i++) {
    const x = 70 + i * 150, up = Math.max(0, Math.sin(t * 2.2 + i * 1.7)) * 70;
    paddles += `<g transform="translate(${x} ${1010 - up})"><rect x="-5" y="0" width="10" height="90" fill="#6B4A32"/><circle cy="-10" r="34" fill="#F4EAD5" stroke="#7A2E3A" stroke-width="5"/><text y="2" text-anchor="middle" font-family="Inter" font-weight="900" font-size="30" fill="#7A2E3A">${12 + i * 7}</text></g>
     <g transform="translate(${x} 1080)"><circle cy="-30" r="44" fill="#2A1A22"/><rect x="-60" y="0" width="120" height="160" rx="50" fill="#2A1A22"/></g>`;
  }
  const glow = 0.6 + 0.4 * Math.abs(Math.sin(t * 4));
  return W(`<rect width="1080" height="1920" fill="#3A1420"/>
   ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `<rect x="${i * 120}" y="0" width="70" height="1300" fill="#4A1A28"/>`).join('')}
   <path d="M0 0 H200 Q150 500 190 1100 H0 Z" fill="#9E1B2C"/><path d="M1080 0 H880 Q930 500 890 1100 H1080 Z" fill="#9E1B2C"/>
   <g transform="translate(540 0) rotate(${sw} 0 0)"><line x1="0" y1="0" x2="0" y2="400" stroke="#C9A24A" stroke-width="6"/>
     <ellipse cx="0" cy="420" rx="150" ry="36" fill="#C9A24A"/>${[-120, -60, 0, 60, 120].map(x => `<circle cx="${x}" cy="440" r="14" fill="#FFF3C0" opacity="${0.7 + 0.3 * Math.sin(t * 5 + x)}"/>`).join('')}
     <path d="M-110 420 Q0 520 110 420" fill="none" stroke="#E8D9A0" stroke-width="5"/></g>
   <g transform="translate(540 600)"><rect x="-150" y="0" width="300" height="300" rx="10" fill="rgba(200,230,255,.18)" stroke="#E8D9A0" stroke-width="6"/>
     <rect x="-12" y="40" width="24" height="200" rx="12" fill="#FF3B3B" opacity="${glow}"/><rect x="-26" y="40" width="52" height="200" rx="26" fill="#FF3B3B" opacity="${glow * 0.25}"/>
     <rect x="-14" y="230" width="28" height="60" rx="5" fill="#9AA3AD"/><rect x="-180" y="300" width="360" height="40" fill="#C9A24A"/></g>
   <rect y="940" width="1080" height="980" fill="#5A2A1E"/>${Array.from({ length: 10 }, (_, i) => `<rect x="0" y="${960 + i * 96}" width="1080" height="6" fill="#4A2218"/>`).join('')}
   <g transform="translate(900 830)"><path d="M-90 0 H90 L70 200 H-70 Z" fill="#6B3A24"/><rect x="-100" y="-16" width="200" height="22" fill="#8A5032"/>
     <g transform="rotate(${Math.max(0, Math.sin(t * 3)) * -40} 30 -30)"><rect x="0" y="-60" width="70" height="30" rx="8" fill="#3A2416"/><rect x="28" y="-30" width="12" height="60" fill="#3A2416"/></g></g>
   ${paddles}`);
}
function ladraSVG(t = 0) {
  const stall = (x, y, c1, c2, i) => {
    const fl = Math.sin(t * 3 + i) * 6;
    let toys = '';
    const items = ['#E2365B', '#FFD45C', '#3C8DD8', '#2FA36B', '#F28C28'];
    for (let k = 0; k < 5; k++) toys += k % 2 ? `<rect x="${20 + k * 52}" y="-48" width="38" height="44" rx="6" fill="${items[(k + i) % 5]}"/>` : `<circle cx="${40 + k * 52}" cy="-24" r="22" fill="${items[(k + i) % 5]}"/>`;
    return `<g transform="translate(${x} ${y})"><rect x="0" y="0" width="300" height="20" fill="#7A5A3A"/><rect x="10" y="20" width="12" height="130" fill="#5A4028"/><rect x="278" y="20" width="12" height="130" fill="#5A4028"/>${toys}
     <rect x="10" y="-220" width="10" height="220" fill="#5A4028"/><rect x="280" y="-220" width="10" height="220" fill="#5A4028"/>
     <path d="M-10 -220 H310 L300 ${-150 + fl} H0 Z" fill="${c1}"/>${[0, 1, 2, 3, 4].map(k => `<path d="M${k * 64} -220 h32 l-2 ${70 + fl} h-30 Z" fill="${c2}"/>`).join('')}</g>`;
  };
  const cl = (t * 12) % 1300;
  return W(`<rect width="1080" height="1920" fill="url(#lsk)"/>
   <g fill="#FFFFFF" opacity=".85"><ellipse cx="${cl - 150}" cy="470" rx="120" ry="34"/><ellipse cx="${cl - 80}" cy="450" rx="80" ry="30"/></g>
   <g transform="translate(540 430)" fill="#F4F0E6"><rect x="-260" y="260" width="520" height="300"/><rect x="-150" y="150" width="300" height="120"/>
     <path d="M-150 150 Q-150 -40 0 -60 Q150 -40 150 150 Z"/><rect x="-12" y="-110" width="24" height="60" fill="#E2DCCB"/><circle cy="-120" r="16"/>
     ${[-210, -120, 120, 210].map(x => `<rect x="${x - 18}" y="300" width="36" height="200" fill="#E2DCCB"/>`).join('')}
     <rect x="-320" y="380" width="80" height="180"/><rect x="240" y="380" width="80" height="180"/></g>
   <rect y="990" width="1080" height="930" fill="#CFC2A6"/>${Array.from({ length: 60 }, (_, i) => `<rect x="${(i * 97) % 1080}" y="${1000 + ((i * 53) % 900)}" width="40" height="22" rx="6" fill="#BDAE90"/>`).join('')}
   ${stall(-40, 1050, '#2E6FB5', '#FFFFFF', 0)}${stall(390, 1020, '#C8202C', '#FFD45C', 1)}${stall(800, 1060, '#2FA36B', '#FFFFFF', 2)}
   <g transform="translate(${180 + Math.sin(t * 1.5) * 60} 1820)"><ellipse rx="24" ry="14" fill="#8C8C94"/><circle cx="20" cy="-14" r="10" fill="#8C8C94"/><path d="M28 -14 l12 3 l-12 3 Z" fill="#E8A93A"/></g>`,
   `<linearGradient id="lsk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7EC4EE"/><stop offset="1" stop-color="#E4F4FF"/></linearGradient>`);
}
function cinemaSVG(t = 0) {
  let bulbs = '';
  for (let i = 0; i < 26; i++) { const on = (Math.floor(t * 8) + i) % 3 === 0; bulbs += `<circle cx="${110 + i * 33.6}" cy="1010" r="10" fill="${on ? '#FFF3B0' : '#8A6A30'}"/><circle cx="${110 + i * 33.6}" cy="1120" r="10" fill="${on ? '#8A6A30' : '#FFF3B0'}"/>`; }
  const neon = 0.75 + 0.25 * Math.sin(t * 9);
  let starsS = ''; for (let i = 0; i < 14; i++) starsS += `<circle cx="${(i * 173) % 1080}" cy="${420 + (i * 61) % 260}" r="3" fill="#FFF6C8" opacity="${0.3 + 0.7 * Math.abs(Math.sin(t * 2 + i))}"/>`;
  return W(`<rect width="1080" height="1920" fill="url(#csk)"/>${starsS}
   <rect x="80" y="560" width="920" height="1000" fill="#E8D8B8"/>${[0, 1, 2, 3].map(i => `<rect x="${130 + i * 230}" y="600" width="130" height="300" rx="65" fill="#2A3A5A"/>`).join('')}
   <g opacity="${neon}"><rect x="500" y="440" width="80" height="560" rx="14" fill="#123259" stroke="#FF5C8A" stroke-width="8"/>
     ${['C', 'I', 'N', 'E'].map((c, i) => `<text x="540" y="${540 + i * 120}" text-anchor="middle" font-family="Inter" font-weight="900" font-size="90" fill="#FF8FB0">${c}</text>`).join('')}</g>
   <path d="M60 990 H1020 L980 1140 H100 Z" fill="#7A2E3A"/>${bulbs}
   <rect x="160" y="1036" width="760" height="64" fill="#FBF5EA"/><text x="540" y="1082" text-anchor="middle" font-family="Inter" font-weight="900" font-size="44" fill="#0B2343">ESTREIA · SESSÃO 21:30</text>
   <rect x="80" y="1140" width="920" height="420" fill="#D9C7A2"/><rect x="380" y="1200" width="320" height="360" fill="#3A2416"/>
   <rect y="1560" width="1080" height="360" fill="#3A3A44"/>${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 140}" y="1600" width="90" height="10" fill="#4A4A56"/>`).join('')}`,
   `<linearGradient id="csk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0B1430"/><stop offset="1" stop-color="#3A2A5A"/></linearGradient>`);
}
