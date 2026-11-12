// "Contabilista a antiga": old grey bear accountant. Generic type: green eyeshade visor, half-moon glasses,
// bushy white eyebrows, pencil behind the ear, white shirt with red sleeve garters and braces. No beard.
// Same rig as bearSVG: 600x1000 viewBox, eyes open/smug/shock/flat, mouth 0..1, brow, look, lean, squash, armL/armR {sh, el}, propL/propR, sweat.
function oldSVG(o = {}) {
  const O = Object.assign({ eyes: 'open', mouth: 0, brow: 0, armL: { sh: 12, el: 8 }, armR: { sh: -12, el: -8 }, propL: '', propR: '', lean: 0, squash: 1, blink: false, look: 0, sweat: 0 }, o);
  const fur = '#9C958E', furD = '#77706A', furL = '#CFC8C0', muz = '#E6DFD5', shirt = '#F4F1EA', shirtD = '#D9D3C6', trou = '#5B4636', garter = '#B3202A';
  const arm = (side, a) => {
    const sx = side === 'L' ? 170 : 430, sy = 520, dir = side === 'L' ? 1 : -1;
    return `<g transform="translate(${sx} ${sy}) rotate(${a.sh})">
      <rect x="-32" y="-10" width="64" height="155" rx="32" fill="${shirt}" stroke="${shirtD}" stroke-width="4"/>
      <rect x="-34" y="70" width="68" height="18" rx="6" fill="${garter}"/>
      <g transform="translate(0 138) rotate(${a.el})">
        <rect x="-30" y="-10" width="60" height="135" rx="30" fill="${shirt}" stroke="${shirtD}" stroke-width="4"/>
        <g transform="translate(0 150)">${side === 'L' ? O.propL : O.propR}
          <circle r="36" fill="${fur}"/><circle cx="${-13 * dir}" cy="17" r="8" fill="${furD}"/><circle cx="0" cy="23" r="8" fill="${furD}"/><circle cx="${13 * dir}" cy="17" r="8" fill="${furD}"/>
        </g>
      </g></g>`;
  };
  const eyeOpen = (cx, cy) => `<ellipse cx="${cx}" cy="${cy}" rx="18" ry="${O.blink ? 3 : 20}" fill="#fff"/>` + (O.blink ? '' : `<circle cx="${cx + O.look * 7}" cy="${cy + 3}" r="10" fill="#1A0F0A"/><circle cx="${cx + 4 + O.look * 7}" cy="${cy - 2}" r="3" fill="#fff"/>`);
  let eyes = '';
  if (O.eyes === 'open') eyes = eyeOpen(245, 290) + eyeOpen(355, 290);
  if (O.eyes === 'smug') eyes = `<path d="M226 294 C 236 280, 256 280, 266 294" stroke="#1A0F0A" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M334 294 C 344 280, 364 280, 374 294" stroke="#1A0F0A" stroke-width="9" fill="none" stroke-linecap="round"/>`;
  if (O.eyes === 'flat') eyes = `<path d="M226 292 L266 292" stroke="#1A0F0A" stroke-width="9" stroke-linecap="round"/><path d="M334 292 L374 292" stroke="#1A0F0A" stroke-width="9" stroke-linecap="round"/>`;
  if (O.eyes === 'shock') eyes = `<ellipse cx="245" cy="284" rx="30" ry="36" fill="#fff" stroke="#1A0F0A" stroke-width="5"/><circle cx="245" cy="288" r="6" fill="#1A0F0A"/><ellipse cx="355" cy="284" rx="30" ry="36" fill="#fff" stroke="#1A0F0A" stroke-width="5"/><circle cx="355" cy="288" r="6" fill="#1A0F0A"/>`;
  const browY = O.eyes === 'shock' ? -18 : 0;
  const mo = Math.max(0, Math.min(1, O.mouth));
  const mouth = (mo > 0.02 || O.eyes === 'shock')
    ? `<ellipse cx="300" cy="398" rx="${20 + mo * 6}" ry="${O.eyes === 'shock' && mo < .05 ? 22 : 5 + mo * 22}" fill="#3A1A12"/>`
    : `<path d="M276 404 C 290 392, 310 392, 324 404" stroke="#3A1A12" stroke-width="7" fill="none" stroke-linecap="round"/>`;
  const bushy = (cx, cy, s) => `<g transform="translate(${cx} ${cy}) scale(${s} 1)"><path d="M-34 6 C -30 -14, 10 -20, 34 -4 C 20 -8, 6 -6, -4 0 C 0 -10, -18 -10, -34 6 Z" fill="#FBFAF6" stroke="#CFC8C0" stroke-width="2"/></g>`;
  return `<svg viewBox="0 0 600 1000" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
  <g transform="translate(300 980) rotate(${O.lean}) scale(${2 - O.squash} ${O.squash}) translate(-300 -980)">
   <ellipse cx="300" cy="985" rx="190" ry="22" fill="rgba(0,0,0,.25)"/>
   <rect x="205" y="760" width="84" height="200" rx="28" fill="${trou}"/><rect x="311" y="760" width="84" height="200" rx="28" fill="${trou}"/>
   <ellipse cx="240" cy="962" rx="62" ry="24" fill="#3A2418"/><ellipse cx="360" cy="962" rx="62" ry="24" fill="#3A2418"/>
   ${arm('R', O.armR)}
   <path d="M155 560 C 145 470, 222 440, 300 440 C 378 440, 455 470, 445 560 C 470 680, 455 770, 300 780 C 145 770, 130 680, 155 560 Z" fill="${shirt}" stroke="${shirtD}" stroke-width="4"/>
   <path d="M150 700 C 160 790, 440 790, 450 700 L 450 800 L 150 800 Z" fill="${trou}"/>
   <rect x="225" y="450" width="22" height="300" rx="6" fill="${garter}" transform="rotate(-6 236 600)"/><rect x="353" y="450" width="22" height="300" rx="6" fill="${garter}" transform="rotate(6 364 600)"/>
   <circle cx="300" cy="560" r="6" fill="${shirtD}"/><circle cx="300" cy="620" r="6" fill="${shirtD}"/><circle cx="300" cy="680" r="6" fill="${shirtD}"/>
   <path d="M395 515 L410 505 L414 560 L398 562 Z" fill="#2E6FB8"/><rect x="398" y="498" width="10" height="22" fill="#C9B48E"/>
   <path d="M285 450 L300 470 L315 450 L330 520 L300 560 L270 520 Z" fill="#4E5B3A"/>
   <g transform="rotate(${O.look * 3} 300 430)">
    <circle cx="180" cy="175" r="52" fill="${fur}"/><circle cx="180" cy="175" r="26" fill="${furL}"/>
    <circle cx="420" cy="175" r="52" fill="${fur}"/><circle cx="420" cy="175" r="26" fill="${furL}"/>
    <ellipse cx="300" cy="305" rx="165" ry="152" fill="${fur}"/>
    <path d="M145 260 C 130 230, 150 200, 170 210 C 160 230, 165 250, 175 262 Z" fill="#FBFAF6"/><path d="M455 260 C 470 230, 450 200, 430 210 C 440 230, 435 250, 425 262 Z" fill="#FBFAF6"/>
    <ellipse cx="300" cy="378" rx="86" ry="60" fill="${muz}"/>
    <g transform="translate(0 ${browY})">
     <g transform="rotate(${-O.brow} 245 250)">${bushy(245, 252, 1)}</g>
     <g transform="rotate(${O.brow} 355 250)">${bushy(355, 252, -1)}</g>
    </g>
    ${eyes}
    <path d="M276 340 C 276 324, 324 324, 324 340 C 324 356, 308 362, 300 362 C 292 362, 276 356, 276 340 Z" fill="#2A1A12"/>
    ${mouth}
    <g fill="none" stroke="#3B3B3B" stroke-width="6"><path d="M212 300 C 212 326, 278 326, 278 300 Z" fill="rgba(220,240,255,.25)"/><path d="M322 300 C 322 326, 388 326, 388 300 Z" fill="rgba(220,240,255,.25)"/><path d="M278 304 C 290 296, 310 296, 322 304"/></g>
    <g transform="translate(300 200)"><path d="M-185 0 C -120 -40, 120 -40, 185 0 C 150 40, -150 40, -185 0 Z" fill="rgba(46,160,80,.75)" stroke="#1E6B3A" stroke-width="6"/><path d="M-175 -6 C -120 -60, 120 -60, 175 -6" fill="none" stroke="#1E6B3A" stroke-width="10"/></g>
    <g transform="translate(445 165) rotate(-55)"><rect x="-8" y="-70" width="16" height="140" fill="#F2C230"/><path d="M-8 70 L0 92 L8 70 Z" fill="#E8C9A0"/><rect x="-8" y="-82" width="16" height="14" fill="#E2365B"/></g>
    <path transform="translate(0 ${O.sweat * 30})" opacity="${O.sweat}" d="M150 210 C 150 210, 172 240, 172 256 C 172 270, 162 276, 150 276 C 138 276, 128 270, 128 256 C 128 240, 150 210, 150 210 Z" fill="#8FD3FF" stroke="#4BA6DA" stroke-width="3"/>
   </g>
   ${arm('L', O.armL)}
  </g></svg>`;
}
if (typeof module !== 'undefined') module.exports = { oldSVG };
