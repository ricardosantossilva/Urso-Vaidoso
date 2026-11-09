// Ursa: Urso Vaidoso's girlfriend. Same rig conventions as bearSVG (600x1000 viewBox, arms sh/el, lean, eyes, mouth).
function girlSVG(o = {}) {
  const O = Object.assign({ eyes: 'open', mouth: 0, brow: 0, armL: { sh: 12, el: 8 }, armR: { sh: -12, el: -8 }, propL: '', propR: '', lean: 0, squash: 1, blink: false, look: 0 }, o);
  const fur = '#B98258', furD = '#8E5E3C', furL = '#E8BC95', muz = '#F2D3AE', dress = '#1F7A6E', dressD = '#165C53';
  const arm = (side, a) => {
    const sx = side === 'L' ? 195 : 405, sy = 520, dir = side === 'L' ? 1 : -1;
    return `<g transform="translate(${sx} ${sy}) rotate(${a.sh})">
      <rect x="-28" y="-10" width="56" height="150" rx="28" fill="${dress}"/>
      <g transform="translate(0 132) rotate(${a.el})">
        <rect x="-24" y="-8" width="48" height="128" rx="24" fill="${fur}"/>
        <circle cx="0" cy="118" r="10" fill="#F4E3C1" opacity=".0"/>
        <g transform="translate(0 145)">${side === 'L' ? O.propL : O.propR}
          <circle r="32" fill="${fur}"/><circle cx="${-12 * dir}" cy="15" r="7" fill="${furD}"/><circle cx="0" cy="20" r="7" fill="${furD}"/><circle cx="${12 * dir}" cy="15" r="7" fill="${furD}"/>
        </g>
        <rect x="-26" y="-6" width="52" height="16" rx="8" fill="#E7C985"/>
      </g></g>`;
  };
  const lash = (cx, cy, s) => `<path d="M${cx - 18 * s} ${cy - 20} l${-10 * s} -12 M${cx - 6 * s} ${cy - 25} l${-4 * s} -14 M${cx + 8 * s} ${cy - 25} l${2 * s} -14" stroke="#1A0F0A" stroke-width="5" stroke-linecap="round"/>`;
  const eyeOpen = (cx, cy, s) => `<ellipse cx="${cx}" cy="${cy}" rx="21" ry="${O.blink ? 3 : 25}" fill="#fff"/>` + (O.blink ? '' : `<circle cx="${cx + O.look * 8}" cy="${cy + 4}" r="12" fill="#1A0F0A"/><circle cx="${cx + 5 + O.look * 8}" cy="${cy - 2}" r="4" fill="#fff"/>`) + lash(cx, cy, s);
  let eyes = '';
  if (O.eyes === 'open') eyes = eyeOpen(245, 280, 1) + eyeOpen(355, 280, -1);
  if (O.eyes === 'smug') eyes = `<path d="M222 284 C 232 268, 258 268, 268 284" stroke="#1A0F0A" stroke-width="10" fill="none" stroke-linecap="round"/><path d="M332 284 C 342 268, 368 268, 378 284" stroke="#1A0F0A" stroke-width="10" fill="none" stroke-linecap="round"/>` + lash(245, 290, 1) + lash(355, 290, -1);
  if (O.eyes === 'flat') eyes = `<path d="M222 286 L268 286" stroke="#1A0F0A" stroke-width="10" stroke-linecap="round"/><path d="M332 286 L378 286" stroke="#1A0F0A" stroke-width="10" stroke-linecap="round"/><path d="M220 276 C 236 268, 256 268, 270 276" stroke="${furD}" stroke-width="10" fill="none"/><path d="M330 276 C 346 268, 366 268, 380 276" stroke="${furD}" stroke-width="10" fill="none"/>`;
  if (O.eyes === 'roll') eyes = `<ellipse cx="245" cy="280" rx="21" ry="25" fill="#fff"/><circle cx="245" cy="264" r="11" fill="#1A0F0A"/><ellipse cx="355" cy="280" rx="21" ry="25" fill="#fff"/><circle cx="355" cy="264" r="11" fill="#1A0F0A"/>` + lash(245, 280, 1) + lash(355, 280, -1);
  if (O.eyes === 'wink') eyes = eyeOpen(245, 280, 1) + `<path d="M332 286 C 342 270, 368 270, 378 286" stroke="#1A0F0A" stroke-width="10" fill="none" stroke-linecap="round"/>` + lash(355, 290, -1);
  const mo = Math.max(0, Math.min(1, O.mouth));
  const mouth = mo > 0.02 ? `<ellipse cx="300" cy="388" rx="${18 + mo * 5}" ry="${4 + mo * 20}" fill="#5A1A22"/><path d="M${282 - mo * 4} 384 Q 300 ${376 - mo * 4} ${318 + mo * 4} 384" stroke="#D94B6A" stroke-width="6" fill="none"/>`
    : (O.eyes === 'flat' ? `<path d="M284 392 L316 392" stroke="#C2405E" stroke-width="7" stroke-linecap="round"/>` : `<path d="M282 386 C 292 398, 308 398, 318 386" stroke="#C2405E" stroke-width="8" fill="none" stroke-linecap="round"/>`);
  return `<svg viewBox="0 0 600 1000" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
  <g transform="translate(300 980) rotate(${O.lean}) scale(${2 - O.squash} ${O.squash}) translate(-300 -980)">
   <ellipse cx="300" cy="985" rx="170" ry="20" fill="rgba(0,0,0,.25)"/>
   <rect x="232" y="820" width="46" height="150" rx="20" fill="${fur}"/><rect x="322" y="820" width="46" height="150" rx="20" fill="${fur}"/>
   <path d="M215 965 C 215 945, 290 945, 292 965 Z" fill="#B3202A"/><path d="M308 965 C 310 945, 385 945, 385 965 Z" fill="#B3202A"/>
   <rect x="276" y="955" width="10" height="26" fill="#B3202A"/><rect x="314" y="955" width="10" height="26" fill="#B3202A"/>
   ${arm('R', O.armR)}
   <path d="M200 530 C 195 470, 240 450, 300 450 C 360 450, 405 470, 400 530 L 395 650 C 470 760, 470 830, 470 850 L 130 850 C 130 830, 130 760, 205 650 Z" fill="${dress}"/>
   <path d="M205 650 C 260 670, 340 670, 395 650" stroke="${dressD}" stroke-width="10" fill="none"/>
   <path d="M170 780 C 230 800, 370 800, 430 780" stroke="${dressD}" stroke-width="6" fill="none" opacity=".6"/>
   <g transform="rotate(${O.look * 3} 300 430)">
    <circle cx="185" cy="165" r="54" fill="${fur}"/><circle cx="185" cy="165" r="28" fill="${furL}"/>
    <circle cx="415" cy="165" r="54" fill="${fur}"/><circle cx="415" cy="165" r="28" fill="${furL}"/>
    <ellipse cx="300" cy="300" rx="160" ry="150" fill="${fur}"/>
    <g transform="translate(420 140) rotate(18)"><path d="M0 0 C -50 -40, -60 30, 0 0 C 50 -40, 60 30, 0 0 Z" fill="#B3202A"/><circle r="12" fill="#8E1820"/></g>
    <ellipse cx="300" cy="365" rx="82" ry="58" fill="${muz}"/>
    <g transform="rotate(${-O.brow} 245 236)"><path d="M222 240 C 234 228, 256 228, 268 236" stroke="#3B2416" stroke-width="7" fill="none" stroke-linecap="round"/></g>
    <g transform="rotate(${O.brow} 355 236)"><path d="M332 236 C 344 228, 366 228, 378 240" stroke="#3B2416" stroke-width="7" fill="none" stroke-linecap="round"/></g>
    ${eyes}
    <ellipse cx="210" cy="338" rx="26" ry="14" fill="#F08A8A" opacity=".55"/><ellipse cx="390" cy="338" rx="26" ry="14" fill="#F08A8A" opacity=".55"/>
    <path d="M276 330 C 276 314, 324 314, 324 330 C 324 346, 308 352, 300 352 C 292 352, 276 346, 276 330 Z" fill="#3A1A12"/>
    ${mouth}
    <circle cx="140" cy="250" r="9" fill="#F7F1E6"/><circle cx="460" cy="250" r="9" fill="#F7F1E6"/>
   </g>
   ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => { const a = Math.PI * (0.15 + 0.7 * i / 8); return `<circle cx="${300 - Math.cos(a) * 80}" cy="${458 + Math.sin(a) * 30}" r="10" fill="#F7F1E6" stroke="#D8CDBD" stroke-width="2"/>`; }).join('')}
   ${arm('L', O.armL)}
  </g></svg>`;
}
if (typeof module !== 'undefined') module.exports = { girlSVG };
