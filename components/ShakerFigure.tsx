import Figure from './Figure';

/**
 * Why beer does not go in a Boston shaker: the seal is only friction, so
 * carbonation forces the tins apart. Two runs on the same clock. Left,
 * beer shaken and the tins separate; right, everything else shaken and
 * the beer folded through at the end.
 */
export default function ShakerFigure() {
  return (
    <Figure
      title="Beer and a Boston shaker"
      animated
      caption="Left: carbonation in a sealed Boston has nowhere to go, and the seal is only friction. Right: shake everything else, strain, then fold the beer through at the end."
    >
      <svg
        viewBox="0 0 720 300"
        role="img"
        aria-label="On the left, beer poured into a Boston shaker which is sealed, shaken, and separates. On the right, the same shaker used without beer, strained into a glass, with the beer folded in afterwards."
      >
        <path d="M360 20 V280" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />
        <text className="fig-name" x="20" y="34">Never</text>
        <text className="fig-name" x="388" y="34">Instead</text>

        {/* ================= LEFT: beer into the tins ================= */}
        <path d="M20 226 H336" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* beer going in */}
        <g className="burst-pour">
          <path className="fig-ink" d="M52 66 C52 82 60 86 60 96 C60 86 70 82 70 66 Z" transform="rotate(40 61 82)" />
          <path d="M76 92 C88 106 98 116 106 126" stroke="var(--gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* the shaker, sealed and intact: large tin, small tin inverted in */}
        <g className="burst-tin">
          {/* large tin - a cone, narrow at the base, wide at the mouth */}
          <path className="fig-ink" d="M104 226 L98 152 L166 152 L160 226 Z" />
          <path d="M107 224 L104 186 L160 186 L157 224 Z" fill="var(--gold)" opacity="0.45" />
          <g className="fig-thin" strokeWidth="0.9">
            <circle cx="118" cy="172" r="3" /><circle cx="134" cy="164" r="2.6" />
            <circle cx="150" cy="174" r="3.2" /><circle cx="126" cy="180" r="2.4" />
          </g>
          {/* small tin, mouth down, seated into the large one */}
          <g className="burst-top">
            <path className="fig-ink" d="M100 156 L106 96 L158 96 L164 156 Z" />
            <path className="fig-thin" d="M100 156 L164 156" />
          </g>
        </g>

        {/* the seal failing: the small tin leaves, the large one tips */}
        <g className="burst-parts">
          <path className="fig-ink" d="M74 104 L80 44 L132 44 L138 104 Z" transform="rotate(-32 106 74)" />
          <g className="fig-fill-gold">
            <circle cx="112" cy="112" r="5.5" /><circle cx="152" cy="86" r="6.5" />
            <circle cx="186" cy="118" r="5" /><circle cx="132" cy="74" r="4.5" />
            <circle cx="178" cy="66" r="5.5" /><circle cx="204" cy="146" r="4.5" />
          </g>
        </g>
        <text className="fig-t" x="20" y="252">beer in, sealed, shaken</text>
        <text className="fig-val" x="20" y="274">the tins come apart</text>

        {/* ================= RIGHT: everything else ================= */}
        <path d="M388 226 H700" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* the same Boston, no beer in it */}
        <g className="fold-shake">
          <path className="fig-ink" d="M412 226 L406 152 L474 152 L468 226 Z" />
          <path d="M415 224 L412 190 L468 190 L465 224 Z" fill="var(--accent-book)" opacity="0.3" />
          <path className="fig-ink" d="M408 156 L414 96 L466 96 L472 156 Z" />
          <path className="fig-thin" d="M408 156 L472 156" />
        </g>
        <text className="fig-t" x="392" y="252">shake without it</text>

        {/* strained across */}
        <path className="fold-strain fig-accent" d="M490 188 h40" markerEnd="url(#fold-arrow)" strokeDasharray="4 4" />

        {/* the glass: the drink, then the beer on top */}
        <g>
          <path className="fig-ink" d="M552 226 v-84 h48 v84 z" />
          <path className="fold-base" d="M556 224 v-30 h40 v30 z" fill="var(--accent-book)" opacity="0.3" />
          <path className="fold-beer" d="M556 194 v-40 h40 v40 z" fill="var(--gold)" opacity="0.5" />
        </g>

        {/* the bar spoon, folding through */}
        <g className="fold-spoon">
          <path className="fig-ink" d="M576 138 v-52" strokeWidth="2" />
          <ellipse className="fig-ink" cx="576" cy="142" rx="7" ry="4" />
        </g>
        <text className="fig-t" x="540" y="252">then fold the beer in</text>
        <text className="fig-val" x="540" y="274">with a bar spoon</text>

        <defs>
          <marker id="fold-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0 L7 3.5 L0 7 z" fill="var(--accent-book)" />
          </marker>
        </defs>
      </svg>
    </Figure>
  );
}
