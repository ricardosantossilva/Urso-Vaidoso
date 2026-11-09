// Urso Vaidoso v2: full-body rig. bearSVG(opts) returns an <svg> string, 600x1000 viewBox.
// opts: eyes ('open'|'smug'|'shock'|'flat'|'wink'), mouth (0..1), brow (deg), droop (deg), twirl (deg),
// armL/armR: {sh, el} shoulder & elbow angles in degrees (0 = hanging down), propL/propR: svg string drawn in paw,
// lean (deg), squash (0.9..1.1), monocle (bool), sweat (0..1)
function bearSVG(o = {}) {
  const O = Object.assign({ eyes: 'open', mouth: 0, brow: 0, droop: 0, twirl: 0, armL: { sh: 12, el: 8 }, armR: { sh: -12, el: -8 },
    propL: '', propR: '', lean: 0, squash: 1, monocle: true, sweat: 0, blink: false, look: 0, tie: 1 }, o);
  const fur = '#8A5A3B', furD = '#6E452C', furL = '#C8936A', muz = '#E2B990', suit = '#123259', suitD = '#0B2343', vest = '#7A2E3A';
  const arm = (side, a) => {
    const sx = side === 'L' ? 168 : 432, sy = 520, dir = side === 'L' ? 1 : -1;
    return `<g transform="translate(${sx} ${sy}) rotate(${a.sh})">
      <rect x="-34" y="-10" width="68" height="160" rx="34" fill="${suit}"/>
      <g transform="translate(0 140) rotate(${a.el})">
        <rect x="-30" y="-10" width="60" height="140" rx="30" fill="${suit}"/>
        <rect x="-33" y="108" width="66" height="22" rx="8" fill="#F7F1E6"/>
        <g transform="translate(0 160)">${side === 'L' ? O.propL : O.propR}
          <circle r="38" fill="${fur}"/><circle cx="${-14 * dir}" cy="18" r="9" fill="${furD}"/><circle cx="0" cy="24" r="9" fill="${furD}"/><circle cx="${14 * dir}" cy="18" r="9" fill="${furD}"/>
        </g>
      </g></g>`;
  };
  let eyes = '';
  const eyeOpen = (cx, cy) => `<ellipse cx="${cx}" cy="${cy}" rx="21" ry="${O.blink ? 3 : 25}" fill="#fff"/>` + (O.blink ? '' : `<circle cx="${cx + 3 + O.look * 8}" cy="${cy + 4}" r="12" fill="#1A0F0A"/><circle cx="${cx + 8 + O.look * 8}" cy="${cy - 2}" r="4" fill="#fff"/>`);
  if (O.eyes === 'open') eyes = eyeOpen(245, 280) + eyeOpen(355, 280);
  if (O.eyes === 'smug') eyes = `<path d="M222 284 C 232 268, 258 268, 268 284" stroke="#1A0F0A" stroke-width="11" fill="none" stroke-linecap="round"/><path d="M332 284 C 342 268, 368 268, 378 284" stroke="#1A0F0A" stroke-width="11" fill="none" stroke-linecap="round"/>`;
  if (O.eyes === 'shock') eyes = `<ellipse cx="245" cy="274" rx="36" ry="44" fill="#fff" stroke="#1A0F0A" stroke-width="5"/><circle cx="245" cy="278" r="7" fill="#1A0F0A"/><ellipse cx="355" cy="274" rx="36" ry="44" fill="#fff" stroke="#1A0F0A" stroke-width="5"/><circle cx="355" cy="278" r="7" fill="#1A0F0A"/>`;
  if (O.eyes === 'flat') eyes = `<path d="M222 282 L268 282" stroke="#1A0F0A" stroke-width="11" stroke-linecap="round"/><path d="M332 282 L378 282" stroke="#1A0F0A" stroke-width="11" stroke-linecap="round"/><path d="M220 270 C 236 262, 256 262, 270 270" stroke="${furD}" stroke-width="6" fill="none"/><path d="M330 270 C 346 262, 366 262, 380 270" stroke="${furD}" stroke-width="6" fill="none"/>`;
  if (O.eyes === 'wink') eyes = eyeOpen(245, 280) + `<path d="M332 286 C 342 270, 368 270, 378 286" stroke="#1A0F0A" stroke-width="11" fill="none" stroke-linecap="round"/>`;
  const browY = O.eyes === 'shock' ? -26 : 0;
  const mo = Math.max(0, Math.min(1, O.mouth));
  const mouth = (mo > 0.02 || O.eyes === 'shock')
    ? `<ellipse cx="300" cy="392" rx="${22 + mo * 6}" ry="${O.eyes === 'shock' && mo < .05 ? 26 : 5 + mo * 24}" fill="#3A1A12"/><ellipse cx="300" cy="${396 + mo * 12}" rx="${12 + mo * 4}" ry="${2 + mo * 7}" fill="#D9566B"/>`
    : (O.eyes === 'flat' ? `<path d="M282 398 C 292 390, 308 390, 318 398" stroke="#3A1A12" stroke-width="7" fill="none" stroke-linecap="round"/>`
      : `<path d="M280 390 C 292 402, 308 402, 320 390" stroke="#3A1A12" stroke-width="7" fill="none" stroke-linecap="round"/>`);
  const monocle = O.monocle && O.eyes !== 'shock' ? `<circle cx="355" cy="280" r="40" fill="rgba(200,230,255,.18)" stroke="#D4AF5F" stroke-width="7"/><path d="M393 292 C 420 340, 410 420, 380 470" stroke="#D4AF5F" stroke-width="3" fill="none"/>` : '';
  return `<svg viewBox="0 0 600 1000" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
  <g transform="translate(300 980) rotate(${O.lean}) scale(${2 - O.squash} ${O.squash}) translate(-300 -980)">
   <ellipse cx="300" cy="985" rx="200" ry="22" fill="rgba(0,0,0,.25)"/>
   <!-- legs -->
   <rect x="200" y="760" width="86" height="200" rx="30" fill="${suitD}"/><rect x="314" y="760" width="86" height="200" rx="30" fill="${suitD}"/>
   <ellipse cx="236" cy="962" rx="66" ry="26" fill="#1B1210"/><ellipse cx="364" cy="962" rx="66" ry="26" fill="#1B1210"/>
   <ellipse cx="222" cy="952" rx="22" ry="7" fill="#fff" opacity=".18"/><ellipse cx="350" cy="952" rx="22" ry="7" fill="#fff" opacity=".18"/>
   <!-- back arm -->
   ${arm('R', O.armR)}
   <!-- torso -->
   <path d="M150 560 C 140 470, 220 440, 300 440 C 380 440, 460 470, 450 560 C 470 680, 450 790, 300 800 C 150 790, 130 680, 150 560 Z" fill="${suit}"/>
   <path d="M235 455 L300 790 L365 455 C 340 448, 260 448, 235 455 Z" fill="${vest}"/>
   <path d="M262 446 L300 540 L338 446 C 320 442, 280 442, 262 446 Z" fill="#F7F1E6"/>
   <path d="M235 455 L205 480 L290 790 L300 790 Z" fill="${suitD}"/><path d="M365 455 L395 480 L310 790 L300 790 Z" fill="${suitD}"/>
   <circle cx="300" cy="600" r="8" fill="#D4AF5F"/><circle cx="300" cy="650" r="8" fill="#D4AF5F"/><circle cx="300" cy="700" r="8" fill="#D4AF5F"/>
   <path d="M300 625 C 330 660, 345 660, 352 640" stroke="#D4AF5F" stroke-width="4" fill="none"/><circle cx="355" cy="636" r="9" fill="#D4AF5F"/>
   <path d="M402 520 L428 512 L432 534 L406 540 Z" fill="#E7C985"/>
   <!-- head -->
   <g transform="rotate(${O.look * 3} 300 430)">
    <circle cx="178" cy="160" r="58" fill="${fur}"/><circle cx="178" cy="160" r="30" fill="${furL}"/>
    <circle cx="422" cy="160" r="58" fill="${fur}"/><circle cx="422" cy="160" r="30" fill="${furL}"/>
    <ellipse cx="300" cy="300" rx="170" ry="158" fill="${fur}"/>
    <path d="M250 150 C 270 110, 330 100, 360 130 C 340 122, 320 128, 312 140 C 300 125, 270 130, 250 150 Z" fill="${furD}"/>
    <ellipse cx="300" cy="370" rx="92" ry="66" fill="${muz}"/>
    <g transform="translate(0 ${browY})">
     <g transform="rotate(${-O.brow} 245 240)"><path d="M218 244 C 232 230, 258 230, 272 240" stroke="#2B1A10" stroke-width="12" fill="none" stroke-linecap="round"/></g>
     <g transform="rotate(${O.brow} 355 240)"><path d="M328 240 C 342 230, 368 230, 382 244" stroke="#2B1A10" stroke-width="12" fill="none" stroke-linecap="round"/></g>
    </g>
    ${eyes}
    <ellipse cx="208" cy="338" rx="24" ry="13" fill="#E58C7A" opacity=".45"/><ellipse cx="392" cy="338" rx="24" ry="13" fill="#E58C7A" opacity=".45"/>
    ${mouth}
    <path d="M272 330 C 272 312, 328 312, 328 330 C 328 348, 310 356, 300 356 C 290 356, 272 348, 272 330 Z" fill="#1A0F0A"/>
    <ellipse cx="290" cy="324" rx="8" ry="5" fill="#fff" opacity=".35"/>
    <g transform="rotate(${-O.droop + O.twirl} 300 368)"><path d="M300 368 C 284 356, 254 352, 230 368 C 210 382, 194 394, 178 384 C 164 375, 170 354, 186 358 C 196 361, 196 373, 188 375" fill="none" stroke="#1E120B" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/></g>
    <g transform="rotate(${O.droop - O.twirl} 300 368)"><path d="M300 368 C 316 356, 346 352, 370 368 C 390 382, 406 394, 422 384 C 436 375, 430 354, 414 358 C 404 361, 404 373, 412 375" fill="none" stroke="#1E120B" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/></g>
    ${monocle}
    <path transform="translate(0 ${O.sweat * 30})" opacity="${O.sweat}" d="M470 200 C 470 200, 494 234, 494 252 C 494 266, 482 274, 470 274 C 458 274, 446 266, 446 252 C 446 234, 470 200, 470 200 Z" fill="#8FD3FF" stroke="#4BA6DA" stroke-width="3"/>
   </g>
   <!-- bow tie -->
   <g transform="translate(300 462) scale(${O.tie}) translate(-300 -462)">
    <path d="M300 462 L236 432 C 228 452, 228 474, 236 494 Z" fill="#D4AF5F"/><path d="M300 462 L364 432 C 372 452, 372 474, 364 494 Z" fill="#D4AF5F"/>
    <rect x="284" y="447" width="32" height="32" rx="8" fill="#B98F45"/>
   </g>
   <!-- front arm -->
   ${arm('L', O.armL)}
  </g></svg>`;
}
if (typeof module !== 'undefined') module.exports = { bearSVG };
