import Figure from './Figure';

const K = 1.25;
/** Scale a glyph about the point where it sits on the baseline. */
const up = (cx: number, base = 176) => `translate(${cx} ${base}) scale(${K}) translate(${-cx} ${-base})`;

/**
 * Molasses as a residue: cane pressed, juice boiled, sugar taken away, and
 * what stays in the pan is what rum is made from. The dashed line is the
 * other route, juice that never goes near the pan.
 *
 * Glyphs are scaled about their baseline point; the steam sits outside
 * the scaled group because it is animated in CSS.
 */
export default function MolassesSequence() {
  return (
    <Figure
      title="What is left behind"
      animated
      caption="Watch the pan. The sugar is the product; the dark syrup that stays is the molasses."
    >
      <svg
        viewBox="0 0 720 240"
        role="img"
        aria-label="Cane is pressed to juice, the juice is boiled, sugar crystals are removed, and the dark residue left behind is molasses."
      >
        <path d="M40 176 H690" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* cane */}
        <g transform={up(62)}>
          <path className="fig-ink" d="M52 176 V108 M62 176 V104 M72 176 V110" />
          <path className="fig-thin" d="M46 148 h32 M46 130 h32" />
        </g>
        <text className="fig-t" x="40" y="200">cane</text>

        {/* press */}
        <g transform={up(128)}>
          <circle className="fig-ink" cx="128" cy="132" r="20" />
          <path className="mol-press fig-ink" d="M112 96 h40" strokeWidth="3" />
        </g>
        <text className="fig-t" x="100" y="200">pressed</text>

        {/* juice running to the pan */}
        <path className="fig-accent" d="M154 128 C180 146 190 150 204 150" strokeDasharray="3 3" opacity="0.8" />

        {/* the pan */}
        <g transform={up(264)}>
          <path className="fig-ink" d="M216 118 h96 v54 h-96 z" />
          <g className="mol-juice">
            <path d="M220 122 h88 v46 h-88 z" fill="var(--accent-book)" opacity="0.85" />
          </g>
          <path className="fig-thin" d="M222 180 h84" />
        </g>
        <circle className="mol-steam mol-st1" cx="244" cy="98" r="5" fill="var(--ink-faint)" />
        <circle className="mol-steam mol-st2" cx="266" cy="98" r="4" fill="var(--ink-faint)" />
        <circle className="mol-steam mol-st3" cx="289" cy="98" r="4.5" fill="var(--ink-faint)" />
        <text className="fig-t" x="210" y="200">boiled</text>

        {/* crystals lifted out */}
        <g transform={up(364, 163)} className="fig-fill-gold">
          <rect className="mol-crystal mol-c1" x="336" y="146" width="9" height="9" transform="rotate(12 340 150)" />
          <rect className="mol-crystal mol-c2" x="352" y="152" width="7" height="7" transform="rotate(-8 355 155)" />
          <rect className="mol-crystal mol-c3" x="366" y="145" width="10" height="10" transform="rotate(20 371 150)" />
          <rect className="mol-crystal mol-c4" x="382" y="153" width="7" height="7" transform="rotate(-14 385 156)" />
        </g>
        <path className="fig-thin" d="M340 124 L364 100 L388 124" strokeDasharray="3 3" />
        <text className="fig-t" x="322" y="200">sugar out</text>
        <text className="fig-t" x="322" y="90" fill="var(--gold)">crystallised</text>

        {/* what remains */}
        <g transform={up(496)}>
          <path className="fig-ink" d="M448 118 h96 v54 h-96 z" />
          <g className="mol-syrup">
            <path d="M452 148 h88 v20 h-88 z" fill="#5a3410" />
            <path d="M452 148 h88 v4 h-88 z" fill="#7a4a1c" opacity="0.8" />
          </g>
          <path className="fig-thin" d="M454 180 h84" />
        </g>
        <text className="fig-t" x="444" y="200">molasses</text>

        <path className="fig-accent" d="M564 145 h36" markerEnd="url(#mol-arrow)" />
        <text className="fig-name" x="610" y="151">Rum</text>

        {/* the other route */}
        <path d="M154 118 C200 80 220 58 300 58" stroke="var(--ink-faint)" strokeWidth="1.2" fill="none" strokeDasharray="4 4" opacity="0.75" />
        <text className="fig-t" x="306" y="54">fresh juice, never boiled</text>
        <text className="fig-name" x="306" y="34" fontStyle="italic">rhum agricole</text>

        <defs>
          <marker id="mol-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0 L7 3.5 L0 7 z" fill="var(--accent-book)" />
          </marker>
        </defs>
      </svg>
    </Figure>
  );
}
