import Figure from './Figure';

/**
 * The standard cuts, and where the fractions come from.
 *
 * A lime wheel divided into six and a lemon into eight across the top,
 * the cuts they produce along the bottom, and the flag beside them.
 *
 * The fruit uses its own palette - `--pith`, `--lime-rind`, `--fruit-line`
 * and the rest - which is set once and never redefined per theme. A cut
 * fruit is a pale object with a coloured rind whatever the page is doing
 * behind it, and drawing the pith with a page token turns it black in
 * dark mode. The outline is `--fruit-line` for the same reason: `--ink`
 * inverts to white and disappears on a pale lime.
 *
 * The flag is a half wheel with its cut edge bowed up into the slice, so
 * both corners come forward and the cherry sits in the notch between
 * them. The pick is drawn first and the fruit over it, so the lengths it
 * covers are hidden and it reads as threaded through both.
 */
export default function CutsFigure() {
  return (
    <Figure
      title="The standard cuts"
      caption="The table gives the fractions; this gives the shape, which is what you have to recognise on a board. A lime goes into six and a lemon into eight - the lime is smaller, and you want the same squeeze out of each. The twist is the only one that is not a fraction of anything, and the flag is the only one that is two things at once."
    >
        <svg viewBox="0 0 720 392" role="img"
        aria-label="How a lime is cut into sixths and a lemon into eighths, and the standard garnishes that result: squeeze, wedge, flag, twist and cherry.">

        <text className="fig-t" x="16" y="22">where the fractions come from</text>

        <g>
        <circle cx="96" cy="100" r="54" fill="var(--lime-rind)"/>
        <circle cx="96" cy="100" r="47" fill="var(--pith)"/>
        <circle cx="96" cy="100" r="42" fill="var(--lime-flesh)"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M96.0 95.0 L96.0 58.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M100.3 97.5 L132.4 79.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M100.3 102.5 L132.4 121.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M96.0 105.0 L96.0 142.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M91.7 102.5 L59.6 121.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M91.7 97.5 L59.6 79.0"/>
        <circle cx="96" cy="100" r="4.5" fill="var(--pith)"/>
        <circle cx="96" cy="100" r="54" fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>
        <text className="fig-name" x="96" y="182" textAnchor="middle">lime</text>
        <text className="fig-val" x="96" y="202" textAnchor="middle">into six</text>
        </g>

        <g>
        <circle cx="264" cy="100" r="54" fill="var(--lemon-rind)"/>
        <circle cx="264" cy="100" r="47" fill="var(--pith)"/>
        <circle cx="264" cy="100" r="42" fill="var(--lemon-flesh)"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M264.0 95.0 L264.0 58.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M267.5 96.5 L293.7 70.3"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M269.0 100.0 L306.0 100.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M267.5 103.5 L293.7 129.7"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M264.0 105.0 L264.0 142.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M260.5 103.5 L234.3 129.7"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M259.0 100.0 L222.0 100.0"/>
        <path stroke="var(--pith)" strokeWidth="2.6" fill="none" d="M260.5 96.5 L234.3 70.3"/>
        <circle cx="264" cy="100" r="4.5" fill="var(--pith)"/>
        <circle cx="264" cy="100" r="54" fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>
        <text className="fig-name" x="264" y="182" textAnchor="middle">lemon</text>
        <text className="fig-val" x="264" y="202" textAnchor="middle">into eight</text>
        </g>

        <path className="fig-thin" d="M368 30 v176" strokeDasharray="4 4"/>

        {/* the flag: a pick through a cherry and a folded peel */}
        <text className="fig-t" x="404" y="22">the flag, on a pick</text>

        {/* The pick runs behind everything, so the fruit and the cherry
        hide the lengths they cover and it reads as threaded through
        both. The cut edge is bowed up into the slice, which brings its
        two corners forward and leaves the notch the cherry sits in. */}
        <path d="M424 160 H612" stroke="var(--ink-soft)" strokeWidth="3"
        fill="none" strokeLinecap="round"/>
        <circle cx="620" cy="160" r="7" fill="none" stroke="var(--ink-soft)" strokeWidth="3"/>

        <defs>
        <clipPath id="flag-slice"><path d="M456 160 A52 52 0 0 1 560 160 A72.5 72.5 0 0 0 456 160 Z"/></clipPath>
        </defs>
        <g clipPath="url(#flag-slice)">
        <circle cx="508" cy="160" r="52" fill="var(--orange-rind)"/>
        <circle cx="508" cy="160" r="44" fill="var(--pith)"/>
        <circle cx="508" cy="160" r="39" fill="var(--orange-flesh)"/>
        <g stroke="var(--pith)" strokeWidth="2.2" fill="none">
        <path d="M508 160 L471.0 144.7"/>
        <path d="M508 160 L479.7 131.7"/>
        <path d="M508 160 L492.7 123.0"/>
        <path d="M508 160 L508.0 120.0"/>
        <path d="M508 160 L523.3 123.0"/>
        <path d="M508 160 L536.3 131.7"/>
        <path d="M508 160 L545.0 144.7"/>
        </g>
        </g>
        <path d="M456 160 A52 52 0 0 1 560 160 A72.5 72.5 0 0 0 456 160 Z" fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>

        <circle cx="508" cy="164" r="22" fill="var(--cherry)"/>
        <circle cx="501" cy="157" r="6" fill="var(--pith)" opacity="0.28"/>
        <circle cx="508" cy="164" r="22" fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>

        {/* the rim it sits across */}
        <path d="M416 198 C470 220 600 220 664 198" stroke="var(--rule-strong)"
        strokeWidth="2.4" fill="none"/>

        <text className="fig-val" x="404" y="240">both ends of the wheel, and the cherry between</text>

        <path className="fig-thin" d="M16 246 h688"/>
        <text className="fig-t" x="16" y="270">and what comes off the board</text>

        <g>
        <path d="M84 344 L52.1 290.9 A62 62 0 0 1 115.9 290.9 Z" fill="var(--lime-rind)"/>
        <path d="M84 344 L55.7 296.9 A55 55 0 0 1 112.3 296.9 Z" fill="var(--pith)"/>
        <path d="M84 344 L58.8 302.0 A49 49 0 0 1 109.2 302.0 Z" fill="var(--lime-flesh)"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M84 344 L65.5 298.6"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M84 344 L72.7 296.3"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M84 344 L80.2 295.1"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M84 344 L87.8 295.1"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M84 344 L95.3 296.3"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M84 344 L102.5 298.6"/>
        <path d="M84 344 L52.1 290.9 A62 62 0 0 1 115.9 290.9 Z" fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>
        <text className="fig-t" x="84" y="386" textAnchor="middle">lime squeeze</text>
        </g>
        <g>
        <path d="M228 344 L203.8 286.9 A62 62 0 0 1 252.2 286.9 Z" fill="var(--lemon-rind)"/>
        <path d="M228 344 L206.5 293.4 A55 55 0 0 1 249.5 293.4 Z" fill="var(--pith)"/>
        <path d="M228 344 L208.9 298.9 A49 49 0 0 1 247.1 298.9 Z" fill="var(--lemon-flesh)"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M228 344 L214.1 297.0"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M228 344 L219.6 295.7"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M228 344 L225.2 295.1"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M228 344 L230.8 295.1"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M228 344 L236.4 295.7"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M228 344 L241.9 297.0"/>
        <path d="M228 344 L203.8 286.9 A62 62 0 0 1 252.2 286.9 Z" fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>
        <text className="fig-t" x="228" y="386" textAnchor="middle">lemon squeeze</text>
        </g>
        <g>
        <path d="M372 344 L347.8 286.9 A62 62 0 0 1 396.2 286.9 Z" fill="var(--orange-rind)"/>
        <path d="M372 344 L350.5 293.4 A55 55 0 0 1 393.5 293.4 Z" fill="var(--pith)"/>
        <path d="M372 344 L352.9 298.9 A49 49 0 0 1 391.1 298.9 Z" fill="var(--orange-flesh)"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M372 344 L357.5 297.2"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M372 344 L362.2 296.0"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M372 344 L367.1 295.2"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M372 344 L372.0 295.0"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M372 344 L376.9 295.2"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M372 344 L381.8 296.0"/>
        <path stroke="var(--pith)" strokeWidth="2.2" fill="none" d="M372 344 L386.5 297.2"/>
        <path d="M372 344 L347.8 286.9 A62 62 0 0 1 396.2 286.9 Z" fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>
        <text className="fig-t" x="372" y="386" textAnchor="middle">orange wedge</text>
        </g>
        <g>
        {/* a strip of peel, curling: rind on the outside, pith within */}
        <path d="M492 300 C528 288 566 300 578 326 C590 352 578 342 556 336
        C534 330 508 336 496 348 C484 336 480 312 492 300 Z"
        fill="var(--orange-rind)"/>
        <path d="M499 308 C529 298 560 308 570 328 C556 322 530 322 508 332
        C498 326 494 314 499 308 Z" fill="var(--pith)"/>
        <path d="M492 300 C528 288 566 300 578 326 C590 352 578 342 556 336
        C534 330 508 336 496 348 C484 336 480 312 492 300 Z"
        fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>
        <text className="fig-t" x="532" y="386" textAnchor="middle">twist</text>
        </g>
        <g>
        <circle cx="662" cy="330" r="24" fill="var(--cherry)"/>
        <circle cx="655" cy="322" r="7" fill="var(--pith)" opacity="0.35"/>
        <circle cx="662" cy="330" r="24" fill="none" stroke="var(--fruit-line)" strokeWidth="2"/>
        <path d="M662 306 C666 292 674 286 686 282" fill="none"
        stroke="var(--fruit-line)" strokeWidth="2.4"/>
        <text className="fig-t" x="662" y="386" textAnchor="middle">cherry</text>
        </g>
        </svg>
    </Figure>
  );
}
