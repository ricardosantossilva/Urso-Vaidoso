// New backgrounds (2026-11-23 11:00, O Urso responde #4 Parte 1):
// salarioSVG: payroll office at month end with a printer spitting payslips, a big 'NOV 30' wall calendar and a swinging lamp
// portosantoSVG: Porto Santo (Madeira) long golden beach with a small yacht anchored offshore, swaying palms, gulls and rolling waves
// saodomingosSVG: São Domingos (Mértola) abandoned copper mine at dusk with a rusty headframe and turning wheel, red acid lake and ruined walls
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;

function salarioSVG(t = 0) {
  const sw = Math.sin(t * 1.6) * 6;
  // payslips sliding out of the printer and stacking
  let slips = '';
  for (let i = 0; i < 3; i++) {
    const p = ((t * 0.45 + i / 3) % 1);
    slips += `<g transform="translate(${810 + p * 40} ${900 - 40 + p * 70}) rotate(${p * 14})" opacity="${1 - Math.max(0, p - 0.8) * 5}"><rect x="-60" y="-10" width="120" height="80" fill="#FFFFFF" stroke="#C9D3DF" stroke-width="2"/><rect x="-48" y="2" width="70" height="8" fill="#0B2343"/><rect x="-48" y="18" width="90" height="6" fill="#9FB3C8"/><rect x="-48" y="30" width="80" height="6" fill="#9FB3C8"/><rect x="10" y="48" width="38" height="10" fill="#2FA36B"/></g>`;
  }
  return W(`<rect width="1080" height="1920" fill="#E9E1D0"/>
   <rect y="0" width="1080" height="160" fill="#D9CDB6"/>
   <g>${Array.from({ length: 8 }, (_, i) => `<rect x="${i * 140}" y="380" width="6" height="620" fill="#D6CAB2"/>`).join('')}</g>
   <g transform="translate(90 420)"><rect width="380" height="420" rx="10" fill="#7FB7D9"/><rect x="10" y="10" width="360" height="400" fill="#BFE3F5"/>
     <g fill="#9AA9B8"><rect x="30" y="200" width="70" height="210"/><rect x="110" y="150" width="60" height="260"/><rect x="180" y="230" width="80" height="180"/><rect x="270" y="170" width="80" height="240"/></g>
     <circle cx="${60 + (t * 12) % 300}" cy="80" r="26" fill="#FFFFFF" opacity=".8"/><rect x="185" y="0" width="10" height="420" fill="#7FB7D9"/><rect x="0" y="205" width="380" height="10" fill="#7FB7D9"/></g>
   <g transform="translate(620 420)"><rect width="330" height="380" rx="14" fill="#FFFFFF" stroke="#0B2343" stroke-width="6"/><rect width="330" height="100" rx="14" fill="#C8202C"/><rect y="70" width="330" height="30" fill="#C8202C"/>
     <text x="165" y="72" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="58" fill="#fff">NOV</text>
     <text x="165" y="300" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="200" fill="#0B2343">30</text>
     <circle cx="165" cy="235" r="${118 + Math.sin(t * 3) * 4}" fill="none" stroke="#C8202C" stroke-width="8" opacity=".8"/></g>
   <g transform="translate(540 160) rotate(${sw})"><line x1="0" y1="0" x2="0" y2="170" stroke="#333" stroke-width="5"/><path d="M-70 230 L-35 170 L35 170 L70 230 Z" fill="#2E6B5A"/><ellipse cx="0" cy="232" rx="40" ry="10" fill="#FFE9A8"/></g>
   <rect y="1000" width="1080" height="920" fill="#B98A5E"/>${Array.from({ length: 10 }, (_, i) => `<rect x="0" y="${1040 + i * 90}" width="1080" height="4" fill="#A27650"/>`).join('')}
   <g transform="translate(700 860)"><rect x="0" y="0" width="300" height="150" rx="18" fill="#4A5563"/><rect x="20" y="-40" width="260" height="50" rx="10" fill="#5E6B7A"/><rect x="40" y="40" width="220" height="14" rx="6" fill="#1F262E"/><circle cx="260" cy="110" r="${8 + Math.sin(t * 6) * 2}" fill="#2FA36B"/></g>
   ${slips}
   <g transform="translate(60 930)"><rect width="200" height="80" rx="8" fill="#F5F0E6"/><rect x="10" y="-20" width="180" height="40" rx="6" fill="#FBF8F2"/><rect x="20" y="-40" width="160" height="40" rx="6" fill="#FFFFFF"/></g>`);
}

function portosantoSVG(t = 0) {
  const bob = Math.sin(t * 1.4) * 8, rock = Math.sin(t * 1.1) * 3;
  let waves = ''; for (let i = 0; i < 7; i++) waves += `<path d="M${(i * 190 + t * 50) % 1300 - 150} ${940 + (i % 3) * 40} q 35 -14 70 0" stroke="#E8F7FF" stroke-width="6" fill="none"/>`;
  let gulls = ''; for (let i = 0; i < 3; i++) { const x = (t * 60 + i * 360) % 1300 - 100, y = 520 + i * 50 + Math.sin(t * 2 + i) * 15; gulls += `<path d="M${x} ${y} q 20 -18 40 0 q 20 -18 40 0" stroke="#33414F" stroke-width="5" fill="none"/>`; }
  const palm = (x, y, s, ph) => { const a = Math.sin(t * 1.3 + ph) * 5; return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 q -20 -200 ${10 + a} -380" stroke="#7A5532" stroke-width="26" fill="none"/><g transform="translate(${10 + a} -380) rotate(${a})">${[-150, -110, -60, -20, 30, 80, 130].map(r => `<path d="M0 0 q ${Math.cos(r * Math.PI / 180) * 90} ${Math.sin(r * Math.PI / 180) * 90 - 40} ${Math.cos(r * Math.PI / 180) * 190} ${Math.sin(r * Math.PI / 180) * 190 + 40}" stroke="#3E8E3E" stroke-width="22" fill="none" stroke-linecap="round"/>`).join('')}</g></g>`; };
  return W(`<rect width="1080" height="1920" fill="url(#psk)"/>
   <circle cx="820" cy="${520}" r="90" fill="#FFF1B8"/>
   <path d="M0 820 L160 700 L300 760 L420 690 L560 800 L0 820 Z" fill="#B7A27A"/><path d="M640 820 L760 720 L880 770 L1080 700 L1080 820 Z" fill="#A99572"/>
   <rect y="820" width="1080" height="300" fill="#2FA3C9"/>${waves}${gulls}
   <g transform="translate(560 ${880 + bob}) rotate(${rock})"><path d="M-170 0 L170 0 L130 60 L-140 60 Z" fill="#FFFFFF" stroke="#0B2343" stroke-width="5"/><rect x="-90" y="-50" width="150" height="50" rx="10" fill="#FFFFFF" stroke="#0B2343" stroke-width="5"/><rect x="-70" y="-38" width="110" height="20" rx="6" fill="#5DA7CF"/><line x1="-10" y1="-50" x2="-10" y2="-180" stroke="#0B2343" stroke-width="6"/><path d="M-10 -170 L70 -110 L-10 -110 Z" fill="#FFD45C"/><path d="M-150 30 L150 30" stroke="#C8202C" stroke-width="6"/></g>
   <path d="M0 1100 Q 540 1040 1080 1100 L1080 1920 L0 1920 Z" fill="#F2D49A"/>
   ${Array.from({ length: 40 }, (_, i) => `<circle cx="${(i * 131) % 1080}" cy="${1150 + (i * 53) % 760}" r="${3 + i % 3}" fill="#E1BE7E"/>`).join('')}
   <path d="M0 ${1090 + Math.sin(t * 2) * 8} Q 540 ${1030 + Math.sin(t * 2) * 8} 1080 ${1090 + Math.sin(t * 2) * 8}" stroke="#FFFFFF" stroke-width="10" fill="none" opacity=".8"/>
   ${palm(80, 1380, 1.1, 0)}${palm(1010, 1360, 1.0, 1.5)}
   <g transform="translate(860 1240)"><path d="M-110 0 Q 0 -130 110 0 Z" fill="#E2365B"/><path d="M-110 0 Q -40 -130 0 -100" fill="#FFFFFF" opacity=".6"/><rect x="-4" y="-110" width="8" height="190" fill="#EEE"/></g>`,
   `<linearGradient id="psk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6EC6F0"/><stop offset="1" stop-color="#DFF4FF"/></linearGradient>`);
}

function saodomingosSVG(t = 0) {
  const rot = t * 40;
  let rip = ''; for (let i = 0; i < 5; i++) rip += `<path d="M${(i * 260 + t * 30) % 1300 - 150} ${1110 + (i % 2) * 30} q 40 -10 80 0" stroke="#E87A5A" stroke-width="5" fill="none" opacity=".7"/>`;
  const bat = (i) => { const x = (t * 90 + i * 400) % 1300 - 100, y = 560 + i * 60 + Math.sin(t * 4 + i) * 20, f = Math.sin(t * 14 + i) * 10; return `<path d="M${x - 30} ${y + f} q 15 -12 30 0 q 15 -12 30 0" stroke="#2A1530" stroke-width="5" fill="none"/>`; };
  return W(`<rect width="1080" height="1920" fill="url(#sdk)"/>
   <circle cx="250" cy="560" r="70" fill="#FFC98A" opacity=".9"/>
   ${[0, 1, 2].map(bat).join('')}
   <path d="M0 860 L200 760 L380 820 L560 740 L760 830 L1080 760 L1080 1000 L0 1000 Z" fill="#6A3E3A"/>
   <g transform="translate(720 520)" stroke="#5A2E1E" stroke-width="14" fill="none"><path d="M-120 480 L-20 0 L20 0 L120 480"/><path d="M-95 360 L95 360 M-70 240 L70 240 M-45 120 L45 120"/><path d="M-95 360 L70 240 M95 360 L-70 240 M-70 240 L45 120 M70 240 L-45 120"/>
     <g transform="translate(0 -10) rotate(${rot})"><circle r="70" stroke="#7A3A22"/>${[0, 45, 90, 135].map(a => `<line x1="${-70 * Math.cos(a * Math.PI / 180)}" y1="${-70 * Math.sin(a * Math.PI / 180)}" x2="${70 * Math.cos(a * Math.PI / 180)}" y2="${70 * Math.sin(a * Math.PI / 180)}" stroke-width="8"/>`).join('')}</g></g>
   <g fill="#8C5A48"><rect x="60" y="860" width="200" height="140"/><rect x="90" y="900" width="40" height="60" fill="#3A1E1A"/><rect x="170" y="900" width="40" height="60" fill="#3A1E1A"/><path d="M60 860 L100 830 L160 850 L220 820 L260 860 Z" fill="#7A4A3A"/></g>
   <rect y="1000" width="1080" height="200" fill="#B8402A"/><rect y="1000" width="1080" height="200" fill="#E0603A" opacity="${0.25 + Math.sin(t * 1.5) * 0.1}"/>${rip}
   <rect y="1200" width="1080" height="720" fill="#7A4434"/>
   ${Array.from({ length: 30 }, (_, i) => `<ellipse cx="${(i * 157) % 1080}" cy="${1240 + (i * 67) % 660}" rx="${10 + i % 4 * 4}" ry="6" fill="#5E3226"/>`).join('')}`,
   `<linearGradient id="sdk" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3A2A55"/><stop offset=".6" stop-color="#C8664A"/><stop offset="1" stop-color="#F2A76A"/></linearGradient>`);
}
