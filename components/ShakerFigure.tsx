import Figure from './Figure';

/**
 * Why beer does not go in a shaker.
 *
 * Two shakers side by side, run at the same time so the comparison is
 * unavoidable. On the left, beer goes into the tin, it is sealed and
 * shaken, and it comes apart. On the right the beer is kept out: the
 * rest of the drink is shaken, strained into the glass, and the beer is
 * folded in afterwards with a bar spoon.
 *
 * The note beside this says "at worst the tin comes apart", which is a
 * sentence people read past. A tin coming apart is worth drawing.
 */
export default function ShakerFigure() {
  return (
    <Figure
      title="Beer and a sealed shaker"
      animated
      caption="Left: carbonation in a sealed tin has nowhere to go. Right: shake everything else, strain, then fold the beer through at the end."
    >
      <svg
        viewBox="0 0 720 280"
        role="img"
        aria-label="On the left, beer poured into a shaker which is sealed, shaken and bursts apart. On the right, a shaker used without beer, strained into a glass, with the beer folded in afterwards."
      >
        <path d="M360 16 V264" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />
        <text className="fig-name" x="20" y="30">Never</text>
        <text className="fig-name" x="388" y="30">Instead</text>

        {/* ================= LEFT: beer into the tin ================= */}
        <path d="M20 214 H336" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* beer going in */}
        <g className="burst-pour">
          <path className="fig-ink" d="M60 62 C60 78 68 82 68 92 C68 82 78 78 78 62 Z" transform="rotate(38 69 78)" />
          <path d="M84 88 C96 104 104 116 110 128" stroke="var(--gold)" strokeWidth="3" fill="none" strokeLinecap="round" />
        </g>

        {/* the tin, intact */}
        <g className="burst-tin">
          <path className="fig-ink" d="M92 214 v-70 q0-8 8-10 h44 q8 2 8 10 v70 z" />
          <path d="M96 212 v-40 h56 v40 z" fill="var(--gold)" opacity="0.45" />
          <g className="fig-thin" strokeWidth="0.9">
            <circle cx="110" cy="160" r="3" /><circle cx="126" cy="152" r="2.6" />
            <circle cx="142" cy="162" r="3.2" /><circle cx="118" cy="140" r="2.4" />
          </g>
          <path className="fig-ink burst-cap" d="M88 134 h68 v-12 h-68 z" />
        </g>

        {/* the burst */}
        <g className="burst-parts">
          <path className="fig-ink" d="M64 118 h44 v-12 h-44 z" transform="rotate(-28 86 112)" />
          <path className="fig-ink" d="M152 112 h44 v-12 h-44 z" transform="rotate(34 174 106)" />
          <g className="fig-fill-gold">
            <circle cx="86" cy="92" r="5" /><circle cx="130" cy="72" r="6" />
            <circle cx="176" cy="94" r="4.5" /><circle cx="108" cy="60" r="4" />
            <circle cx="158" cy="56" r="5" /><circle cx="196" cy="126" r="4" />
          </g>
        </g>
        <text className="fig-t" x="20" y="238">beer in, sealed, shaken</text>
        <text className="fig-val" x="20" y="258">the tin comes apart</text>

        {/* ================= RIGHT: everything else ================= */}
        <path d="M388 214 H700" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* the shaker, no beer */}
        <g className="fold-shake">
          <path className="fig-ink" d="M414 214 v-70 q0-8 8-10 h44 q8 2 8 10 v70 z" />
          <path d="M418 212 v-36 h56 v36 z" fill="var(--accent-book)" opacity="0.3" />
          <path className="fig-ink" d="M410 134 h68 v-12 h-68 z" />
        </g>
        <text className="fig-t" x="392" y="238">shake without it</text>

        {/* strained across */}
        <path className="fold-strain fig-accent" d="M494 176 h44" markerEnd="url(#fold-arrow)" strokeDasharray="4 4" />

        {/* the glass, filling then folded */}
        <g>
          <path className="fig-ink" d="M556 214 v-84 h48 v84 z" />
          <path className="fold-base" d="M560 212 v-30 h40 v30 z" fill="var(--accent-book)" opacity="0.3" />
          <path className="fold-beer" d="M560 182 v-40 h40 v40 z" fill="var(--gold)" opacity="0.5" />
        </g>

        {/* the bar spoon, folding through */}
        <g className="fold-spoon">
          <path className="fig-ink" d="M580 126 v-52" strokeWidth="2" />
          <ellipse className="fig-ink" cx="580" cy="130" rx="7" ry="4" />
        </g>
        <text className="fig-t" x="544" y="238">then fold the beer in</text>
        <text className="fig-val" x="544" y="258">with a bar spoon</text>

        <defs>
          <marker id="fold-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0 L7 3.5 L0 7 z" fill="var(--accent-book)" />
          </marker>
        </defs>
      </svg>
    </Figure>
  );
}
