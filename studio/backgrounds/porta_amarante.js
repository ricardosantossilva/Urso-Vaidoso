// Backgrounds for 2026-11-24 19:00 (O Urso responde #5 Parte 2, customs handling fee):
// portaSVG (Alvalade-style apartment building entrance at night, intercom with blinking button, white delivery van with hazard lights, parcel on the step)
// amaranteSVG (Amarante-style granite arched bridge over the Tamega river with a baroque church, golden hour, ripples, ducks, drifting clouds)
const W2 = (inner) => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
function portaSVG(t = 0) {
  const haz = (Math.floor(t * 2) % 2) ? '#FFB020' : '#6A4A10';
  const btn = (Math.floor(t * 3) % 2) ? '#7CF0FF' : '#2A5A66';
  let win = '';
  for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
    const on = ((r * 4 + c) * 7 + Math.floor(t * 0.7)) % 5 !== 0;
    win += `<rect x="${60 + c * 250}" y="${420 + r * 150}" width="150" height="100" fill="${on ? '#F6D58A' : '#2B3550'}"/><rect x="${60 + c * 250}" y="${515 + r * 150}" width="150" height="10" fill="#C9C2B0"/>`;
  }
  return W2(`<rect width="1080" height="1920" fill="#141B33"/>
   <circle cx="900" cy="120" r="50" fill="#F4EBC8" opacity=".9"/>
   <rect x="0" y="380" width="1080" height="980" fill="#E7DCC4"/>
   <rect x="0" y="380" width="1080" height="30" fill="#CFC2A6"/>${win}
   <rect x="330" y="880" width="420" height="480" fill="#D2C4A4"/>
   <rect x="380" y="930" width="320" height="430" fill="#3B2A1E"/>
   <rect x="395" y="945" width="140" height="400" fill="#6B8FA8" opacity=".55"/><rect x="545" y="945" width="140" height="400" fill="#6B8FA8" opacity=".55"/>
   <rect x="440" y="895" width="200" height="30" rx="6" fill="#0B2343"/><text x="540" y="918" text-anchor="middle" font-family="Inter" font-weight="800" font-size="24" fill="#fff">N.º 24</text>
   <g transform="translate(770 1000)"><rect width="80" height="150" rx="10" fill="#9AA3AD"/>${[0,1,2,3].map(i=>`<circle cx="40" cy="${28 + i * 32}" r="10" fill="${i === 1 ? btn : '#5C6570'}"/>`).join('')}</g>
   <rect y="1360" width="1080" height="560" fill="#5A5F6B"/>
   ${Array.from({ length: 12 }, (_, i) => `<path d="M${i * 100} 1400 q50 -20 100 0" stroke="#6E7480" stroke-width="6" fill="none"/>`).join('')}
   <g transform="translate(${-260 + Math.sin(t * 0.6) * 6} 1160)"><rect width="430" height="200" rx="20" fill="#F3F3F3"/><rect x="300" y="20" width="110" height="90" rx="10" fill="#9CC3DA"/><rect x="20" y="70" width="250" height="16" fill="#C8202C"/>
     <circle cx="90" cy="205" r="38" fill="#1B1B1B"/><circle cx="330" cy="205" r="38" fill="#1B1B1B"/><rect x="405" y="130" width="25" height="22" fill="${haz}"/><rect x="0" y="130" width="20" height="22" fill="${haz}"/></g>
   <g transform="translate(470 ${1300 + Math.sin(t * 3) * 3})"><rect width="140" height="100" fill="#C99A5B"/><rect x="62" width="16" height="100" fill="#E8D3A8"/><rect x="12" y="14" width="60" height="24" fill="#fff"/></g>
   <circle cx="200" cy="1500" r="${120 + Math.sin(t * 2) * 6}" fill="#F6D58A" opacity=".08"/>`);
}
function amaranteSVG(t = 0) {
  let rip = '';
  for (let i = 0; i < 10; i++) { const x = (i * 130 + t * 30) % 1180 - 100; rip += `<path d="M${x} ${1280 + (i % 4) * 60} q40 -10 80 0" stroke="#F7E3B0" stroke-width="5" fill="none" opacity=".6"/>`; }
  const duck = (x, y) => `<g transform="translate(${x} ${y + Math.sin(t * 3 + x) * 4})"><ellipse cx="0" cy="0" rx="34" ry="18" fill="#FFFFFF"/><circle cx="26" cy="-18" r="13" fill="#FFFFFF"/><path d="M37 -18 l16 4 l-16 4z" fill="#F29A2E"/></g>`;
  const cl = (x, y) => `<g transform="translate(${(x + t * 18) % 1300 - 200} ${y})" fill="#FFF3DA" opacity=".85"><ellipse cx="0" cy="0" rx="90" ry="34"/><ellipse cx="60" cy="-20" rx="70" ry="34"/><ellipse cx="120" cy="0" rx="80" ry="30"/></g>`;
  return W2(`<rect width="1080" height="1920" fill="#F5B66A"/>
   <rect width="1080" height="700" fill="#F7C987"/>
   <circle cx="820" cy="560" r="90" fill="#FFE7A8"/>${cl(100, 420)}${cl(700, 380)}
   <path d="M0 900 Q 300 760 560 860 T 1080 820 L1080 1100 L0 1100 Z" fill="#7C8A4A"/>
   <g transform="translate(640 560)"><rect width="300" height="380" fill="#E9DCC0"/><rect x="110" y="-150" width="80" height="160" fill="#E9DCC0"/><path d="M100 -150 L150 -230 L200 -150 Z" fill="#8E6A4A"/>
     <circle cx="150" cy="-90" r="22" fill="#5B4B3A"/><rect x="120" y="230" width="60" height="150" rx="30" fill="#5B4B3A"/><rect x="40" y="120" width="40" height="70" rx="20" fill="#5B4B3A"/><rect x="220" y="120" width="40" height="70" rx="20" fill="#5B4B3A"/>
     <path d="M-10 0 L150 -60 L310 0 Z" fill="#B65A3A"/></g>
   <g transform="translate(60 640)"><rect width="220" height="300" fill="#F1E6D2"/><path d="M-10 0 L110 -60 L230 0 Z" fill="#B65A3A"/><rect x="40" y="60" width="50" height="60" fill="#6B4A32"/><rect x="130" y="60" width="50" height="60" fill="#6B4A32"/></g>
   <rect y="1100" width="1080" height="820" fill="#4F7F8C"/>
   <path d="M0 1010 L1080 1010 L1080 1080 L0 1080 Z" fill="#A89B86"/>
   ${[0,1,2].map(i => `<path d="M${90 + i * 330} 1240 L${90 + i * 330} 1110 A150 150 0 0 1 ${390 + i * 330} 1110 L${390 + i * 330} 1240 Z" fill="#4F7F8C"/>`).join('')}
   <rect y="1080" width="1080" height="30" fill="#8F826D"/>
   ${Array.from({ length: 10 }, (_, i) => `<rect x="${i * 110 + 10}" y="985" width="16" height="30" fill="#8F826D"/>`).join('')}
   ${rip}${duck((t * 40) % 1200 - 100, 1500)}${duck((t * 40 + 120) % 1200 - 100, 1540)}
   <rect y="1700" width="1080" height="220" fill="#3E6B76"/>`);
}
