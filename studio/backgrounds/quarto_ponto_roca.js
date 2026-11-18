// New backgrounds: quartoSVG (gamer bedroom at midnight), pontoSVG (workplace corridor with punch clock), rocaSVG (Cabo da Roca at sunset)
const W = (inner, defs = '') => `<svg width="1080" height="1920" viewBox="0 0 1080 1920" xmlns="http://www.w3.org/2000/svg"><defs>${defs}</defs>${inner}</svg>`;
function quartoSVG(t = 0) {
  const hue = (t * 40) % 360;
  const led = `hsl(${hue},95%,60%)`, led2 = `hsl(${(hue + 120) % 360},95%,60%)`;
  let keys = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < 14; c++) keys += `<rect x="${330 + c * 30}" y="${1062 + r * 20}" width="25" height="15" rx="3" fill="hsl(${(hue + c * 25 + r * 40) % 360},90%,62%)"/>`;
  let stars = ''; for (let i = 0; i < 14; i++) { const x = 70 + (i * 37) % 190, y = 470 + (i * 53) % 170; stars += `<circle cx="${x}" cy="${y}" r="2.5" fill="#fff" opacity="${0.4 + 0.5 * Math.abs(Math.sin(t * 2 + i))}"/>`; }
  const secs = 59 - Math.floor(t * 2) % 60;
  return W(`<rect width="1080" height="1920" fill="url(#qw)"/>
   <rect x="0" y="392" width="1080" height="10" fill="${led}" opacity=".9"/><rect x="0" y="380" width="1080" height="40" fill="${led}" opacity=".18"/>
   <g><rect x="50" y="450" width="230" height="240" rx="8" fill="#0B1030" stroke="#39305F" stroke-width="10"/>${stars}<circle cx="225" cy="510" r="26" fill="#F4E9C4"/><rect x="60" y="640" width="210" height="44" fill="#141A42"/><rect x="85" y="618" width="40" height="66" fill="#1C2452"/><rect x="150" y="600" width="50" height="84" fill="#1C2452"/><rect x="215" y="628" width="40" height="56" fill="#1C2452"/><line x1="165" y1="450" x2="165" y2="690" stroke="#39305F" stroke-width="8"/></g>
   <g transform="translate(850 450)"><rect x="0" y="0" width="170" height="230" rx="6" fill="#2A1F55" stroke="${led2}" stroke-width="5"/><circle cx="85" cy="85" r="46" fill="#F0566E"/><path d="M15 200 L60 130 L100 175 L130 145 L160 200 Z" fill="#35C9B0"/></g>
   <g><rect x="300" y="470" width="480" height="440" rx="20" fill="#05060F" stroke="#2B2B45" stroke-width="12"/><rect x="316" y="486" width="448" height="408" fill="#160A35"/>
     <circle cx="540" cy="660" r="${118 + Math.sin(t * 3) * 6}" fill="#FF7A45"/><rect x="316" y="680" width="448" height="214" fill="#1F0F4A"/>
     ${[0, 1, 2, 3, 4].map(i => `<rect x="316" y="${694 + i * 16}" width="448" height="5" fill="#FF3FA4" opacity="${0.5 - i * 0.07}"/>`).join('')}
     <path d="M372 880 q-6 -90 8 -150 M380 730 q-36 -8 -56 14 M380 730 q34 -14 56 6 M380 730 q-22 -26 -50 -22 M380 730 q22 -26 50 -18" stroke="#0A0820" stroke-width="10" fill="none"/>
     <path d="M700 880 q6 -80 -8 -130 M692 750 q-34 -8 -52 12 M692 750 q32 -12 52 6 M692 750 q-20 -24 -46 -20 M692 750 q20 -24 46 -16" stroke="#0A0820" stroke-width="10" fill="none"/>
     <text x="540" y="846" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="66" fill="#FFE27A">00:00:${String(secs).padStart(2, '0')}</text></g>
   <rect x="500" y="910" width="80" height="60" fill="#22223A"/><rect x="440" y="965" width="200" height="16" rx="6" fill="#2B2B45"/>
   <rect y="1000" width="1080" height="46" fill="#3A2A4F"/><rect y="1046" width="1080" height="130" fill="#2A1E3C"/>
   <rect x="300" y="1054" width="440" height="72" rx="8" fill="#14141F"/>${keys}
   <g transform="translate(800 930)"><rect x="0" y="0" width="70" height="116" rx="10" fill="#101018"/><rect x="31" y="14" width="8" height="88" rx="4" fill="${led2}"/></g>
   <g transform="translate(180 990)"><path d="M0 10 h70 l-8 46 h-54 Z" fill="#E9E4F2"/><path d="M68 18 q24 4 12 26 l-16 4" fill="none" stroke="#E9E4F2" stroke-width="8"/>${[0, 1, 2].map(i => `<path d="M${16 + i * 18} ${-6 - ((t * 24 + i * 9) % 26)} q-8 -9 0 -18" stroke="#fff" stroke-width="4" fill="none" opacity="${0.55 - (((t * 24 + i * 9) % 26) / 60)}"/>`).join('')}</g>
   <rect y="1176" width="1080" height="744" fill="#1C1430"/><rect y="1176" width="1080" height="10" fill="${led}" opacity=".7"/>`,
   `<linearGradient id="qw" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A1140"/><stop offset=".55" stop-color="#2D1B5E"/><stop offset="1" stop-color="#1C1430"/></linearGradient>`);
}
function pontoSVG(t = 0) {
  const flick = (t % 2.7) < 0.09 ? 0.45 : 1;
  const a = (Math.floor(t) * 6) * Math.PI / 180, m = (t * 0.1) * Math.PI / 180 + 1.2;
  let lockers = ''; for (let i = 0; i < 7; i++) lockers += `<g transform="translate(${20 + i * 150} 1000)"><rect width="142" height="330" fill="${i % 2 ? '#6F8FA3' : '#7E9DB0'}" stroke="#4E6877" stroke-width="5"/><rect x="40" y="26" width="62" height="8" fill="#4E6877"/><rect x="40" y="42" width="62" height="8" fill="#4E6877"/><rect x="112" y="150" width="12" height="46" rx="5" fill="#D9C27A"/></g>`;
  let cards = ''; for (let i = 0; i < 5; i++) cards += `<rect x="${64 + i * 40}" y="${655 + (i % 2) * 8}" width="30" height="96" fill="${i === 2 ? '#F2C75C' : '#F4EFE2'}" stroke="#A89F88" stroke-width="2"/>`;
  let cal = ''; for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) { const d = r * 7 + c - 6; cal += d > 0 && d <= 30 ? `<text x="${708 + c * 44}" y="${598 + r * 52}" text-anchor="middle" font-family="Inter,sans-serif" font-weight="800" font-size="30" fill="${d === 19 ? '#C8202C' : c > 4 ? '#8A93A0' : '#26303C'}">${d}</text>` : ''; }
  return W(`<rect width="1080" height="1920" fill="#E8DFC9"/><rect y="0" width="1080" height="385" fill="#D9CDB2"/>
   ${[190, 540, 890].map(x => `<rect x="${x - 120}" y="378" width="240" height="20" rx="6" fill="#FFFDE8" opacity="${flick}"/><rect x="${x - 170}" y="398" width="340" height="60" fill="#FFFDE8" opacity="${0.16 * flick}"/>`).join('')}
   <rect y="470" width="1080" height="14" fill="#BDAF90"/>
   <g><rect x="46" y="510" width="240" height="130" rx="10" fill="#5B6470" stroke="#38404A" stroke-width="6"/><rect x="66" y="528" width="200" height="56" fill="#0E1A10"/><text x="166" y="572" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="42" fill="#5CFF8A">08:5${Math.floor(t / 4) % 10}</text><rect x="120" y="596" width="92" height="22" fill="#1E242B"/>
     <rect x="50" y="645" width="232" height="120" fill="#8B7355" stroke="#5E4B35" stroke-width="5"/>${cards}</g>
   <g transform="translate(450 640)"><circle r="98" fill="#FBF7EC" stroke="#3A3F48" stroke-width="12"/>${[...Array(12)].map((_, i) => `<rect x="-3" y="-86" width="6" height="16" fill="#3A3F48" transform="rotate(${i * 30})"/>`).join('')}<line x2="${Math.sin(m) * 52}" y2="${-Math.cos(m) * 52}" stroke="#20252C" stroke-width="10" stroke-linecap="round"/><line x2="${Math.sin(a) * 78}" y2="${-Math.cos(a) * 78}" stroke="#C8202C" stroke-width="5" stroke-linecap="round"/><circle r="9" fill="#20252C"/></g>
   <g><rect x="670" y="500" width="340" height="340" rx="8" fill="#FFFDF6" stroke="#B9AE94" stroke-width="4"/><rect x="670" y="500" width="340" height="56" fill="#C8202C"/><text x="840" y="540" text-anchor="middle" font-family="Inter,sans-serif" font-weight="900" font-size="34" fill="#fff" letter-spacing="3">NOVEMBRO</text>${cal}<circle cx="752" cy="692" r="30" fill="none" stroke="#C8202C" stroke-width="6"/></g>
   <rect y="900" width="1080" height="100" fill="#D4C6A8"/>${lockers}
   <rect y="1330" width="1080" height="590" fill="#A9A08C"/>${[...Array(9)].map((_, i) => `<line x1="${i * 135}" y1="1330" x2="${i * 200 - 270}" y2="1920" stroke="#958C78" stroke-width="4"/>`).join('')}<rect y="1330" width="1080" height="10" fill="#7E7664"/>`);
}
function rocaSVG(t = 0) {
  let waves = ''; for (let i = 0; i < 7; i++) { const y = 860 + i * 34, dx = Math.sin(t * 0.9 + i) * 34; waves += `<path d="M${-60 + dx} ${y} q 90 -16 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0 t 180 0" stroke="#FFD9A8" stroke-width="${3 + i * 0.6}" fill="none" opacity="${0.55 - i * 0.05}"/>`; }
  let gulls = ''; for (let i = 0; i < 4; i++) { const x = ((t * 34 + i * 280) % 1240) - 80, y = 470 + i * 62 + Math.sin(t * 1.5 + i) * 16, f = Math.sin(t * 7 + i) * 12; gulls += `<path d="M${x - 30} ${y - f} Q${x - 12} ${y - 16} ${x} ${y} Q${x + 12} ${y - 16} ${x + 30} ${y - f}" stroke="#2A2340" stroke-width="5" fill="none"/>`; }
  const beam = 0.28 + 0.22 * Math.sin(t * 2.2);
  const bush = (x, y, s, i) => `<g transform="translate(${x} ${y}) rotate(${Math.sin(t * 1.6 + i) * 3}) scale(${s})"><ellipse rx="70" ry="34" fill="#5F7F45"/><ellipse cx="-34" cy="-16" rx="40" ry="24" fill="#6F9150"/><ellipse cx="34" cy="-12" rx="38" ry="22" fill="#55733E"/>${[-40, -8, 26].map(p => `<circle cx="${p}" cy="-30" r="6" fill="#F2D64C"/>`).join('')}</g>`;
  return W(`<rect width="1080" height="1920" fill="url(#rs)"/>
   <circle cx="300" cy="740" r="${96 + Math.sin(t) * 3}" fill="#FFE39A"/><circle cx="300" cy="740" r="150" fill="#FFE39A" opacity=".22"/>
   <rect y="820" width="1080" height="340" fill="url(#rm)"/><path d="M190 820 h220 l40 200 h-300 Z" fill="#FFE9B0" opacity=".3"/>${waves}${gulls}
   <path d="M1080 700 L905 742 L840 815 L780 850 L1080 880 Z" fill="#6A5A62"/><g transform="translate(958 640)"><path d="M-22 100 L-14 0 h28 L22 100 Z" fill="#F6F0E2"/><rect x="-14" y="30" width="28" height="22" fill="#C8202C"/><rect x="-19" y="-20" width="38" height="22" fill="#2F2B38"/><path d="M-19 -20 Q0 -46 19 -20 Z" fill="#C8202C"/><path d="M-10 -10 L-300 ${-44 + Math.sin(t * 2.2) * 20} L-300 ${24 + Math.sin(t * 2.2) * 20} Z" fill="#FFF3B8" opacity="${beam}"/></g>
   <path d="M0 950 L150 925 L320 950 L470 985 L640 1000 L830 975 L1080 945 L1080 1920 L0 1920 Z" fill="#8A6F58"/>
   <path d="M0 1010 L210 985 L450 1030 L700 1040 L1080 1005 L1080 1920 L0 1920 Z" fill="#7C9A58"/>
   <g transform="translate(830 1000)"><rect x="-74" y="150" width="148" height="30" fill="#BFB5A1"/><rect x="-56" y="30" width="112" height="124" fill="#DCD3BF" stroke="#A89D87" stroke-width="4"/><rect x="-9" y="-104" width="18" height="136" fill="#CFC5AF" stroke="#A89D87" stroke-width="3"/><rect x="-40" y="-70" width="80" height="16" fill="#CFC5AF" stroke="#A89D87" stroke-width="3"/><rect x="-36" y="56" width="72" height="5" fill="#A89D87"/><rect x="-36" y="74" width="72" height="5" fill="#A89D87"/><rect x="-36" y="92" width="72" height="5" fill="#A89D87"/></g>
   ${bush(120, 1090, 1.2, 0)}${bush(450, 1120, 1, 1)}${bush(990, 1150, 1.3, 2)}
   <rect y="1200" width="1080" height="720" fill="#688A4C"/>`,
   `<linearGradient id="rs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3C3A78"/><stop offset=".3" stop-color="#B55A7E"/><stop offset=".62" stop-color="#FFA565"/></linearGradient><linearGradient id="rm" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#E88A62"/><stop offset="1" stop-color="#335C7E"/></linearGradient>`);
}
