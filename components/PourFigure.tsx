import Figure from './Figure';

/**
 * The pour, drawn as four positions.
 *
 * The steps beside this describe an angle changing over time, which is
 * the one thing prose is worst at and a drawing is best at. So the glass
 * is shown four times: tilted at forty-five, filling, straightening, and
 * standing up with its head on.
 *
 * Each glass pivots on the corner of its base, which is what a tilted
 * glass does in the hand and what keeps all four above the bar line. The
 * direction matters: rotating anticlockwise about that corner swings the
 * opposite corner down through the line, so the tilt is clockwise.
 *
 * WHERE THE COLUMNS SIT
 *
 * A tilted glass is not centred on its pivot - at 45° its ink runs from
 * cx-9 to cx+81, so `lean` carries that offset per angle and the glass
 * is placed by where it will actually land rather than by its pivot.
 * The labels are wider than the glasses, so the columns are spaced on
 * the labels and each glass is then centred over its own.
 */

/** How far a tilted glass's ink centre sits from its pivot. */
const LEAN: Record<number, number> = { 45: 36, 30: 24, 12: 9, 0: 0 };

/** Where a glass's mouth ends up once it has been tilted. */
function mouth(cx: number, deg: number) {
  const a = (deg * Math.PI) / 180;
  return {
    x: cx + 22 + -22 * Math.cos(a) + 84 * Math.sin(a),
    y: 190 + -22 * Math.sin(a) + -84 * Math.cos(a),
  };
}

/* Label left edges, spaced on the widest label rather than on the glass. */
const STAGES = [
  { at: 20, deg: 45, fill: 0, head: 0, label: '1. tilt to 45°', sub: 'tap fully open', w: 130 },
  { at: 165, deg: 30, fill: 34, head: 0, label: '2. let it run', sub: 'down the side', w: 115 },
  { at: 310, deg: 12, fill: 52, head: 8, label: '3. straighten', sub: 'into the middle', w: 110 },
  { at: 455, deg: 0, fill: 58, head: 20, label: '4. finish', sub: 'head on top', w: 78 },
];

export default function PourFigure() {
  return (
    <Figure
      title="The pour"
      caption="Forty-five degrees to start, straighten as it fills, and finish with two or three fingers of head. A half-opened tap makes foam, not beer."
    >
      <svg
        viewBox="0 0 720 296"
        role="img"
        aria-label="Four stages of pouring a beer: the glass tilted at forty-five degrees, filling down the side, straightening, then upright with a head. Beside them, a half-opened tap producing only foam."
      >
        <path d="M20 190 H600" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {STAGES.map((s, i) => {
          const cx = s.at + s.w / 2 - LEAN[s.deg];
          const m = mouth(cx, s.deg);
          const last = i === STAGES.length - 1;
          const spout = m.y - 26;
          return (
            <g key={s.label}>
              {/* the tap, sitting just above the mouth it is filling */}
              <path className="fig-ink" d={`M${m.x - 14} ${spout - 26} h28 v14 h-28 z`} />
              <path className="fig-ink" d={`M${m.x} ${spout - 12} v12`} strokeWidth="3" />
              {!last && (
                <path
                  d={`M${m.x} ${spout} v${Math.max(14, m.y - spout + 16)}`}
                  stroke="var(--gold)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.8"
                />
              )}

              {/* the glass, pivoting on the corner of its base */}
              <g transform={`rotate(${s.deg} ${cx + 22} 190)`}>
                <path className="fig-ink" d={`M${cx - 22} 190 v-84 h44 v84 z`} />
                {s.fill > 0 && (
                  <path
                    d={`M${cx - 19} 188 v-${s.fill} h38 v${s.fill} z`}
                    fill="var(--gold)"
                    opacity="0.5"
                  />
                )}
                {s.head > 0 && (
                  <path
                    d={`M${cx - 19} ${188 - s.fill} v-${s.head} h38 v${s.head} z`}
                    fill="var(--paper)"
                    stroke="var(--ink)"
                    strokeWidth="1.2"
                  />
                )}
              </g>

              <text className="fig-t" x={s.at} y="222">{s.label}</text>
              <text className="fig-val" x={s.at} y="244">{s.sub}</text>
            </g>
          );
        })}

        {/* the head, measured, beside the upright glass */}
        <path className="fig-accent" d="M520 110 v20" strokeWidth="1.4" />
        <path className="fig-accent" d="M516 110 h8 M516 130 h8" strokeWidth="1.4" />
        <text className="fig-val" x="530" y="126" fill="var(--accent-book)">2–3 fingers</text>

        {/* ---- the wrong pour ---- */}
        <path d="M620 26 V262" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />
        <path d="M648 190 H700" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        <path className="fig-ink" d="M658 46 h28 v14 h-28 z" />
        <path className="fig-ink" d="M672 60 v12" strokeWidth="3" />
        {/* the stream, broken into gouts - what a half-open tap gives you */}
        <g stroke="var(--gold)" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.8">
          <path d="M672 76 v7" />
          <path d="M672 90 v5" />
          <path d="M672 101 v6" />
        </g>

        <path className="fig-ink" d="M650 190 v-84 h44 v84 z" />
        <path d="M653 188 v-16 h38 v16 z" fill="var(--gold)" opacity="0.5" />
        <path d="M653 172 v-64 h38 v64 z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.2" />
        <g className="fig-thin" strokeWidth="0.9">
          <circle cx="664" cy="142" r="4" />
          <circle cx="680" cy="132" r="3.4" />
          <circle cx="672" cy="158" r="3" />
          <circle cx="685" cy="152" r="3.6" />
        </g>

        <text className="fig-t" x="672" y="222" textAnchor="middle" fill="var(--gold)">half open</text>
        <text className="fig-val" x="672" y="244" textAnchor="middle">all foam</text>
      </svg>
    </Figure>
  );
}
