import Figure from './Figure';

/** Scale a glyph about a point. */
const about = (cx: number, cy: number, k: number) =>
  `translate(${cx} ${cy}) scale(${k}) translate(${-cx} ${-cy})`;

/**
 * Agave to piña, then the fork: steamed for tequila, pit-roasted for
 * mezcal. The smoke is drawn only from the pit because it comes from the
 * cooking, not a later step.
 *
 * Glyphs are scaled about their own base to read at plate size. Steam and
 * smoke sit outside the scaled groups because they are animated in CSS.
 */
export default function AgaveSequence() {
  return (
    <Figure
      title="From the plant to the pit"
      animated
      caption="Same plant, same core. The fork is how it is cooked, and that fork is the difference between tequila and mezcal."
    >
      <svg
        viewBox="0 0 720 274"
        role="img"
        aria-label="An agave plant is trimmed to its core, the piña, which is then either steamed in an oven to make tequila or roasted in a covered pit to make mezcal."
      >
        {/* ---- 1. the plant ---- */}
        <g transform={about(80, 176, 1.15)}>
          <path className="fig-thin" d="M30 176 h100" />
          <g className="agave-leaf" stroke="var(--ink)" strokeWidth="1.3" fill="none">
            <path d="M80 174 L52 108 L84 168 Z" />
            <path d="M80 174 L38 132 L82 172 Z" />
            <path d="M80 174 L64 100 L86 170 Z" />
            <path d="M80 174 L96 98 L82 168 Z" />
            <path d="M80 174 L112 106 L86 170 Z" />
            <path d="M80 174 L126 130 L88 172 Z" />
            <path d="M80 174 L30 160 L80 174 Z" />
            <path d="M80 174 L130 158 L80 174 Z" />
          </g>
        </g>
        <text className="fig-t" x="30" y="204">agave</text>
        <text className="fig-val" x="30" y="224">6–8 years</text>

        <path className="fig-accent" d="M148 150 h34" markerEnd="url(#agave-arrow)" strokeDasharray="3 3" opacity="0.8" />

        {/* ---- 2. the piña ---- */}
        <g className="agave-pina" transform={about(222, 150, 1.15)}>
          <ellipse className="fig-ink" cx="222" cy="150" rx="26" ry="32" />
          <g className="fig-hatch">
            <path d="M204 130 L240 170 M198 148 L246 152 M204 170 L240 130" />
            <path d="M212 120 L232 180 M232 120 L212 180" />
          </g>
          <path className="fig-ink" d="M210 120 L206 108 M222 118 L222 104 M234 120 L238 108" />
        </g>
        <text className="fig-t" x="200" y="204">piña</text>
        <text className="fig-val" x="186" y="224">spines cut away</text>

        {/* ---- the fork ---- */}
        <path className="fig-thin" d="M254 150 C290 150 300 88 334 88" strokeDasharray="4 4" />
        <path className="fig-thin" d="M254 150 C290 150 300 210 330 210" strokeDasharray="4 4" />

        {/* ---- 3a. oven / autoclave: tequila ---- */}
        <g transform={about(392, 114, 1.1)}>
          <path className="fig-ink" d="M344 62 h96 v52 h-96 z" />
          <path className="fig-thin" d="M352 70 h80 v36 h-80 z" />
          <path className="fig-thin" d="M392 70 v36" />
          <ellipse className="fig-fill-gold" cx="372" cy="94" rx="10" ry="8" opacity="0.7" />
          <ellipse className="fig-fill-gold" cx="412" cy="94" rx="10" ry="8" opacity="0.7" />
        </g>
        <circle className="agave-steam agave-st1" cx="366" cy="46" r="4.5" fill="var(--ink-faint)" />
        <circle className="agave-steam agave-st2" cx="392" cy="46" r="4" fill="var(--ink-faint)" />
        <circle className="agave-steam agave-st3" cx="418" cy="46" r="4.5" fill="var(--ink-faint)" />
        <text className="fig-t" x="338" y="136">steamed</text>
        <text className="fig-val" x="338" y="156">oven or autoclave</text>

        {/* ---- 3b. covered pit: mezcal ---- */}
        <g transform={about(390, 214, 1.1)}>
          <path className="fig-ink" d="M336 214 h20 c0 -22 68 -22 68 0 h20" />
          <path className="fig-thin" d="M356 214 c0 12 68 12 68 0" />
          <g className="fig-fill-gold">
            <circle cx="366" cy="222" r="3.2" /><circle cx="378" cy="226" r="3" />
            <circle cx="392" cy="223" r="3.4" /><circle cx="406" cy="226" r="3" />
            <circle cx="416" cy="221" r="3.2" />
          </g>
          <ellipse className="fig-ink" cx="380" cy="206" rx="9" ry="6" />
          <ellipse className="fig-ink" cx="400" cy="205" rx="9" ry="6" />
          <path className="fig-thin" d="M348 200 c14 -14 68 -14 84 0" strokeDasharray="2 2" />
        </g>
        <circle className="agave-smoke agave-sm1 fig-fill-gold" cx="379" cy="188" r="4.5" />
        <circle className="agave-smoke agave-sm2 fig-fill-gold" cx="399" cy="190" r="4" />
        <text className="fig-t" x="338" y="250">pit-roasted</text>
        <text className="fig-val" x="338" y="268">hot rocks, covered over</text>

        {/* ---- outcomes ---- */}
        <path className="fig-accent" d="M456 88 h36" markerEnd="url(#agave-arrow)" />
        <text className="fig-name" x="500" y="94">Tequila</text>
        <text className="fig-t" x="500" y="112">cooked-agave sweetness</text>

        <path className="fig-accent" d="M456 210 h36" markerEnd="url(#agave-arrow)" />
        <text className="fig-name" x="500" y="216">Mezcal</text>
        <text className="fig-t" x="500" y="234" fill="var(--gold)">smoke is the cooking</text>

        <defs>
          <marker id="agave-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0 L7 3.5 L0 7 z" fill="var(--accent-book)" />
          </marker>
        </defs>
      </svg>
    </Figure>
  );
}
