import Figure from './Figure';

/**
 * The pour, drawn as four positions.
 *
 * The steps beside this describe an angle changing over time, which is
 * the one thing prose is worst at and a drawing is best at. So the glass
 * is shown four times: tilted at forty-five, filling, straightening, and
 * standing up with its head on.
 *
 * The wrong pour is drawn beside it rather than described, because the
 * fault it causes - a glass of foam - is visible in a way that "open the
 * tap fully" is not.
 */
export default function PourFigure() {
  return (
    <Figure
      title="The pour"
      caption="Forty-five degrees to start, straighten as it fills, and finish with two or three fingers of head. A half-opened tap makes foam, not beer."
    >
      <svg
        viewBox="0 0 720 260"
        role="img"
        aria-label="Four stages of pouring a beer: glass tilted at forty-five degrees, filling, straightening, then upright with a head. Beside them, the wrong pour producing a glass of foam."
      >
        <path d="M20 196 H524" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* ---- 1. tilted, tap fully open ---- */}
        <g transform="rotate(-45 78 190)">
          <path className="fig-ink" d="M56 190 v-84 h44 v84 z" />
        </g>
        <path className="fig-accent" d="M62 74 v34" strokeWidth="3" />
        <path className="fig-ink" d="M50 62 h26 v12 h-26 z" />
        <text className="fig-t" x="20" y="220">1. tilt to 45°</text>
        <text className="fig-val" x="20" y="240">tap fully open</text>

        {/* ---- 2. filling ---- */}
        <g transform="rotate(-30 210 190)">
          <path className="fig-ink" d="M188 190 v-84 h44 v84 z" />
          <path d="M191 188 v-38 h38 v38 z" fill="var(--gold)" opacity="0.45" />
        </g>
        <path className="fig-accent" d="M196 74 v30" strokeWidth="3" />
        <path className="fig-ink" d="M184 62 h26 v12 h-26 z" />
        <text className="fig-t" x="164" y="220">2. let it run</text>
        <text className="fig-val" x="164" y="240">down the side</text>

        {/* ---- 3. straightening ---- */}
        <g transform="rotate(-12 342 190)">
          <path className="fig-ink" d="M320 190 v-84 h44 v84 z" />
          <path d="M323 188 v-56 h38 v56 z" fill="var(--gold)" opacity="0.45" />
          <path d="M323 132 v-8 h38 v8 z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1" />
        </g>
        <text className="fig-t" x="300" y="220">3. straighten</text>
        <text className="fig-val" x="300" y="240">into the middle</text>

        {/* ---- 4. upright, with a head ---- */}
        <g>
          <path className="fig-ink" d="M452 190 v-96 h48 v96 z" />
          <path d="M456 188 v-62 h40 v62 z" fill="var(--gold)" opacity="0.5" />
          <path d="M456 126 v-20 h40 v20 z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.2" />
          {/* the head, measured in fingers */}
          <path className="fig-accent" d="M508 106 v20" strokeWidth="1.4" />
          <path className="fig-accent" d="M504 106 h8 M504 126 h8" strokeWidth="1.4" />
          <text className="fig-val" x="516" y="120" fill="var(--accent-book)">2–3 fingers</text>
        </g>
        <text className="fig-t" x="440" y="220">4. finish</text>
        <text className="fig-val" x="440" y="240">head on top</text>

        {/* ---- the wrong pour ---- */}
        <path d="M576 30 V232" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />
        <g>
          <path className="fig-ink" d="M622 190 v-96 h48 v96 z" />
          <path d="M626 188 v-24 h40 v24 z" fill="var(--gold)" opacity="0.5" />
          <path d="M626 164 v-58 h40 v58 z" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.2" />
          <g className="fig-thin" strokeWidth="0.9">
            <circle cx="638" cy="132" r="4" /><circle cx="654" cy="122" r="3.4" />
            <circle cx="646" cy="148" r="3" /><circle cx="660" cy="142" r="3.6" />
          </g>
          <path d="M604 74 v26" stroke="var(--gold)" strokeWidth="3" fill="none" strokeDasharray="4 4" />
          <path className="fig-ink" d="M592 62 h26 v12 h-26 z" />
        </g>
        <text className="fig-t" x="592" y="220" fill="var(--gold)">half-open tap</text>
        <text className="fig-val" x="592" y="240">all foam</text>
      </svg>
    </Figure>
  );
}
