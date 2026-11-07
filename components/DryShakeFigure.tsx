import Figure from './Figure';

/**
 * The dry shake in four beats: shake without ice, shake with ice, double
 * strain, settle. The foam is the same height in beats one and two,
 * because the head is made before the ice goes in.
 *
 * Animated classes: `.beat b1`-`b4`, `.shk`, `.foam`, `.icein`, `.stream`.
 * Each carries its finished state in its base rule, so reduced motion
 * shows the completed drawing.
 */
export default function DryShakeFigure() {
  return (
    <Figure
      title="The dry shake"
      caption="Egg white adds no flavour, so the whole point of it is the head, and the head is made in the shake that has no ice in it. Proteins unfold and trap air far better warm; put ice in first and the mix is cold before the foam has formed. Everything after that is housekeeping - chill it, sieve out the cord of white that never breaks down, and leave it alone while it separates."
    >
        <svg id="dryshake" viewBox="0 0 720 388" role="img"
        aria-label="Four steps with egg white: shake with no ice so the foam forms warm, add ice and shake again to chill, double strain through a hawthorne and a fine sieve, then let the head settle and sit up on its own.">

        <text className="fig-t" x="16" y="24" fill="var(--accent-book)">the first shake has no ice in it</text>

        <g className="fig-val beat b1" textAnchor="middle"><text x="90"  y="48">1</text></g>
        <g className="fig-val beat b2" textAnchor="middle"><text x="270" y="48">2</text></g>
        <g className="fig-val beat b3" textAnchor="middle"><text x="450" y="48">3</text></g>
        <g className="fig-val beat b4" textAnchor="middle"><text x="630" y="48">4</text></g>
        <g className="fig-t" textAnchor="middle">
        <text className="beat b1" x="90"  y="70">shake, no ice</text>
        <text className="beat b2" x="270" y="70">add ice, shake</text>
        <text className="beat b3" x="450" y="70">double strain</text>
        <text className="beat b4" x="630" y="70">let it settle</text>
        </g>

        <defs>
        <clipPath id="tinInside"><path d="M-25 297 H25 L32 158 H-32 Z"/></clipPath>
        <clipPath id="coupeInside">
        <path d="M-37 152 C-35 194 -17 211 0 211 C17 211 35 194 37 152 Z"/>
        </clipPath>
        </defs>

        {/* 1: the Boston, shaken dry, and the foam starting */}
        <g transform="translate(90 0)">
        <path className="fig-thin" d="M-50 194 a16 16 0 0 1 0 -36 M-58 198 a22 22 0 0 1 0 -44" strokeDasharray="3 5"/>
        <path className="fig-thin" d="M50 194 a16 16 0 0 0 0 -36 M58 198 a22 22 0 0 0 0 -44" strokeDasharray="3 5"/>
        <g className="shk s-a">
        <g clipPath="url(#tinInside)">
        <rect x="-32" y="230" width="64" height="67" fill="var(--accent-book)" opacity="0.35"/>
        <g className="foam f1">
        <rect x="-30" y="178" width="60" height="52" fill="var(--brass)" opacity="0.18"/>
        <g className="fig-mesh">
        <circle cx="-18" cy="190" r="5"/><circle cx="-4" cy="200" r="4"/>
        <circle cx="12"  cy="188" r="5.5"/><circle cx="22" cy="204" r="4"/>
        <circle cx="-22" cy="212" r="4"/><circle cx="2"  cy="216" r="5"/>
        <circle cx="18"  cy="222" r="3.5"/>
        </g>
        </g>
        <path className="fig-thin" d="M-32 230 H32"/>
        </g>
        <path className="fig-ink" d="M-28 300 H28 L36 156 H-36 Z"/>
        <path className="fig-ink" d="M-30 158 L-23 86 H23 L30 158 Z"/>
        <path className="fig-thin" d="M-30 158 H30"/>
        </g>
        </g>

        {/* 2: ice in, and the same foam shaken cold */}
        <g transform="translate(270 0)">
        <path className="fig-thin" d="M-50 194 a16 16 0 0 1 0 -36 M-58 198 a22 22 0 0 1 0 -44" strokeDasharray="3 5"/>
        <path className="fig-thin" d="M50 194 a16 16 0 0 0 0 -36 M58 198 a22 22 0 0 0 0 -44" strokeDasharray="3 5"/>
        <g className="shk s-b">
        <g clipPath="url(#tinInside)">
        <rect x="-32" y="240" width="64" height="57" fill="var(--accent-book)" opacity="0.35"/>
        <g className="icein">
        <g transform="rotate(-8 -14 236)"><rect className="fig-ice" x="-27" y="223" width="26" height="26" rx="3"/></g>
        <g transform="rotate(7 14 240)"><rect className="fig-ice" x="2" y="227" width="24" height="24" rx="3"/></g>
        <g transform="rotate(5 -8 268)"><rect className="fig-ice" x="-21" y="255" width="26" height="26" rx="3"/></g>
        <g transform="rotate(-6 18 272)"><rect className="fig-ice" x="6" y="260" width="24" height="24" rx="3"/></g>
        </g>
        <g className="foam f2">
        <rect x="-31" y="162" width="62" height="58" fill="var(--brass)" opacity="0.18"/>
        <g className="fig-mesh">
        <circle cx="-19" cy="174" r="5"/><circle cx="-4" cy="184" r="4"/>
        <circle cx="13"  cy="172" r="5.5"/><circle cx="23" cy="188" r="4"/>
        <circle cx="-23" cy="198" r="4"/><circle cx="1"  cy="202" r="5"/>
        <circle cx="19"  cy="208" r="3.5"/><circle cx="-9" cy="214" r="4.5"/>
        </g>
        </g>
        <path className="fig-thin" d="M-32 220 H32"/>
        </g>
        <path className="fig-ink" d="M-28 300 H28 L36 156 H-36 Z"/>
        <path className="fig-ink" d="M-30 158 L-23 86 H23 L30 158 Z"/>
        <path className="fig-thin" d="M-30 158 H30"/>
        </g>
        </g>

        {/* 3: two barriers, and the thing the second one catches */}
        <g transform="translate(450 0)">
        <path className="fig-accent stream" d="M0 84 v42"/>
        <path className="fig-ink" d="M-34 130 H34" strokeWidth="2.4"/>
        <path className="fig-thin" d="M-32 126 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0 q4 -6 8 0"/>
        <text className="fig-t" x="44" y="134" fill="var(--ink-faint)">hawthorne</text>
        <path className="fig-accent stream" d="M0 136 v30"/>
        <path className="fig-ink" d="M-30 168 C-30 190 30 190 30 168"/>
        <path className="fig-ink" d="M-34 168 H34"/>
        <path className="fig-thin" d="M34 168 h22"/>
        <g className="fig-mesh">
        <path d="M-18 169 v14 M-8 169 v18 M2 169 v19 M12 169 v18 M22 169 v13"/>
        <path d="M-27 175 C-24 182 24 182 27 175"/>
        </g>
        <ellipse className="fig-fill-gold" cx="7" cy="180" rx="4.5" ry="2.6"/>
        <text className="fig-t" x="-44" y="182" textAnchor="end" fill="var(--ink-faint)">sieve</text>
        <path className="fig-accent stream" d="M0 190 v22"/>
        <path className="fig-ink" d="M-30 212 C-28 244 -14 256 0 256 C14 256 28 244 30 212 Z"/>
        <path className="fig-ink" d="M-3 256 v32"/>
        <path className="fig-ink" d="M-20 300 C-20 290 20 290 20 300 Z"/>
        <path className="fig-ink" d="M-22 300 H22" strokeWidth="2.4"/>
        </g>

        {/* 4: it separates on its own and the head stands up */}
        <g transform="translate(630 0)">
        <g clipPath="url(#coupeInside)">
        <rect x="-38" y="170" width="76" height="42" fill="var(--accent-book)" opacity="0.35"/>
        </g>
        <g className="foam f4">
        <path d="M-38 152 C-38 136 38 136 38 152 v18 h-76 z" fill="var(--brass)" opacity="0.18"/>
        <g className="fig-mesh">
        <circle cx="-24" cy="152" r="5"/><circle cx="-8" cy="146" r="6"/>
        <circle cx="10"  cy="147" r="5.5"/><circle cx="25" cy="153" r="4.5"/>
        <circle cx="-16" cy="163" r="4"/><circle cx="2"  cy="162" r="5"/>
        <circle cx="20"  cy="164" r="4"/>
        </g>
        </g>
        <path className="fig-thin" d="M-36 170 H36"/>
        <path className="fig-ink" d="M-40 152 C-38 196 -18 214 0 214 C18 214 38 196 40 152"/>
        <path className="fig-ink" d="M-3 214 v74"/>
        <path className="fig-ink" d="M-24 300 C-24 288 24 288 24 300 Z"/>
        <path className="fig-ink" d="M-26 300 H26" strokeWidth="2.4"/>
        </g>

        <path className="fig-thin" d="M20 300 h680"/>

        <g className="fig-t" textAnchor="middle" fill="var(--ink-faint)">
        <text x="90"  y="326">warm foams better</text>
        <text x="270" y="326">now chill it</text>
        <text x="450" y="326">sieve out the stringy bit</text>
        <text x="630" y="326">the head sits up</text>
        </g>

        <path className="fig-thin" d="M16 350 h688" strokeDasharray="4 4"/>
        <text className="fig-t" x="16" y="372">ice in the first shake and the foam never forms</text>
        </svg>
    </Figure>
  );
}
