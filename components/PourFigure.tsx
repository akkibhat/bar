import Figure from './Figure';

/**
 * The pour, drawn as four positions.
 *
 * The steps beside this describe an angle changing over time, which is
 * the one thing prose is worst at and a drawing is best at. So the glass
 * is shown four times: tilted at forty-five, filling, straightening, and
 * standing up with its head on.
 *
 * Each glass pivots on the corner of its base rather than its centre,
 * which is both what a tilted glass actually does in the hand and what
 * keeps every one of them above the bar line instead of cutting through
 * it. The pivot point is the same corner every time, so the four read as
 * one glass moving rather than four glasses drawn.
 *
 * The beer is drawn as a stream from the spout into the mouth, because a
 * tap floating unconnected above a glass is not a pour. The wrong pour
 * beside them has the same stream broken into gouts, which is what a
 * half-opened tap actually does.
 */

/** Where a glass's mouth ends up once it has been tilted. */
function mouth(cx: number, deg: number) {
  const a = (deg * Math.PI) / 180;
  const px = cx + 22;
  const dx = -22;
  const dy = -84;
  return {
    x: px + dx * Math.cos(a) - dy * Math.sin(a),
    y: 190 + dx * Math.sin(a) + dy * Math.cos(a),
  };
}

const STAGES = [
  { cx: 96, deg: -45, fill: 0, head: 0, label: '1. tilt to 45°', sub: 'tap fully open' },
  { cx: 244, deg: -30, fill: 34, head: 0, label: '2. let it run', sub: 'down the side' },
  { cx: 392, deg: -12, fill: 52, head: 8, label: '3. straighten', sub: 'into the middle' },
  { cx: 540, deg: 0, fill: 58, head: 20, label: '4. finish', sub: 'head on top' },
];

export default function PourFigure() {
  return (
    <Figure
      title="The pour"
      caption="Forty-five degrees to start, straighten as it fills, and finish with two or three fingers of head. A half-opened tap makes foam, not beer."
    >
      <svg
        viewBox="0 0 720 290"
        role="img"
        aria-label="Four stages of pouring a beer: the glass tilted at forty-five degrees, filling down the side, straightening, then upright with a head. Beside them, a half-opened tap producing only foam."
      >
        <path d="M20 190 H620" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {STAGES.map((s, i) => {
          const m = mouth(s.cx, s.deg);
          const last = i === STAGES.length - 1;
          return (
            <g key={s.label}>
              {/* the tap, above the mouth it is pouring into */}
              <path className="fig-ink" d={`M${m.x - 13} 34 h26 v13 h-26 z`} />
              <path className="fig-ink" d={`M${m.x} 47 v${Math.max(10, m.y - 61)}`} strokeWidth="2.4" />
              {!last && (
                <path
                  d={`M${m.x} ${m.y - 8} v${Math.min(30, 190 - m.y)}`}
                  stroke="var(--gold)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.75"
                />
              )}

              {/* the glass, pivoting on the corner of its base */}
              <g transform={`rotate(${s.deg} ${s.cx + 22} 190)`}>
                <path className="fig-ink" d={`M${s.cx - 22} 190 v-84 h44 v84 z`} />
                {s.fill > 0 && (
                  <path
                    d={`M${s.cx - 19} 188 v-${s.fill} h38 v${s.fill} z`}
                    fill="var(--gold)"
                    opacity="0.5"
                  />
                )}
                {s.head > 0 && (
                  <path
                    d={`M${s.cx - 19} ${188 - s.fill} v-${s.head} h38 v${s.head} z`}
                    fill="var(--paper)"
                    stroke="var(--ink)"
                    strokeWidth="1.2"
                  />
                )}
              </g>

              <text className="fig-t" x={s.cx - 30} y="216">{s.label}</text>
              <text className="fig-val" x={s.cx - 30} y="238">{s.sub}</text>
            </g>
          );
        })}

        {/* the head, measured */}
        <path className="fig-accent" d="M578 148 v20" strokeWidth="1.4" />
        <path className="fig-accent" d="M574 148 h8 M574 168 h8" strokeWidth="1.4" />
        <text className="fig-val" x="588" y="162" fill="var(--accent-book)">2–3 fingers</text>

        {/* ---- the wrong pour ---- */}
        <path d="M646 24 V262" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />
        <path d="M666 190 H712" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        <path className="fig-ink" d="M676 34 h26 v13 h-26 z" />
        <path className="fig-ink" d="M689 47 v20" strokeWidth="2.4" />
        {/* the stream, broken - which is what a half-open tap gives you */}
        <g stroke="var(--gold)" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.75">
          <path d="M689 70 v8" />
          <path d="M689 84 v6" />
          <path d="M689 96 v9" />
        </g>

        <path className="fig-ink" d="M667 190 v-84 h44 v84 z" />
        <path d="M670 188 v-16 h38 v16 z" fill="var(--gold)" opacity="0.5" />
        <path d="M670 172 v-64 h38 v64 z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.2" />
        <g className="fig-thin" strokeWidth="0.9">
          <circle cx="681" cy="142" r="4" />
          <circle cx="697" cy="132" r="3.4" />
          <circle cx="689" cy="158" r="3" />
          <circle cx="702" cy="152" r="3.6" />
        </g>

        <text className="fig-t" x="656" y="216" fill="var(--gold)">half-open tap</text>
        <text className="fig-val" x="656" y="238">all foam</text>
      </svg>
    </Figure>
  );
}
