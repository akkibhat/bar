import Figure from './Figure';

/**
 * Pot and column stills in cross-section, showing the gap between the
 * boiling points of alcohol (78.3°C) and water (100°C). The pot uses it
 * once per batch, the column on every plate.
 *
 * Each drawing is in a group shifted down under its title; the readings
 * and key outside the groups stay where they are set.
 */
export default function StillsFigure() {
  return (
    <Figure
      title="Two kinds of still"
      caption={
        <>
          Both work on one gap: alcohol boils at 78.3°C, water at 100°C.
          The pot separates once per batch and lets heavier compounds
          through as flavour. The column separates again on every plate,
          the water condensing and running back down each time.
        </>
      }
    >
      <svg
        viewBox="0 0 720 344"
        role="img"
        aria-label="A pot still and a column still in cross-section. Alcohol boils off at 78.3 degrees while water at 100 degrees mostly stays behind."
      >
        {/* ---------------- pot still ---------------- */}
        <text className="fig-name" x="16" y="24">Pot still</text>
        <text className="fig-t" x="16" y="50">one batch at a time</text>

        <g transform="translate(0 20)">
          <path className="fig-thin" d="M46 214 h58" />
          <path className="fig-fill-gold" d="M62 210 c-5 -8 2 -11 0 -17 c7 5 10 11 6 17 z" opacity="0.85" />
          <path className="fig-fill-gold" d="M80 210 c-5 -8 2 -11 0 -17 c7 5 10 11 6 17 z" opacity="0.6" />
          <text className="fig-val" x="112" y="214">~80°C</text>

          <path className="fig-ink" d="M40 176 C40 132 54 110 75 108 C96 110 110 132 110 176 C110 196 96 205 75 205 C54 205 40 196 40 176 Z" />
          <path d="M43 176 C43 190 56 199 75 199 C94 199 107 190 107 176 C107 168 106 160 105 153 L45 153 C44 160 43 168 43 176 Z" fill="var(--accent-book)" opacity="0.16" />
          <path className="fig-accent" d="M45 153 h60" strokeWidth="1.2" />

          <path className="fig-ink" d="M63 108 L67 74 M87 108 L83 74" />
          <path className="fig-ink" d="M67 74 C67 52 78 44 97 44 C118 44 128 56 128 76 L128 92" />
          <path className="fig-ink" d="M128 92 L166 118" />

          <path className="fig-ink" d="M156 118 h34 v76 h-34 z" />
          <path className="fig-thin" d="M160 130 c26 0 26 12 0 12 c26 0 26 12 0 12 c26 0 26 12 0 12 c26 0 26 12 0 12" />
          <path className="fig-accent" d="M173 194 v14" strokeDasharray="3 3" />
          <text className="fig-t" x="160" y="230">spirit</text>

          {/* water: mostly stays in the pot */}
          <g className="fig-thin" strokeWidth="1">
            <circle cx="58" cy="184" r="2.4" /><circle cx="72" cy="191" r="2.4" />
            <circle cx="88" cy="183" r="2.4" /><circle cx="64" cy="170" r="2.4" />
            <circle cx="96" cy="170" r="2.4" /><circle cx="80" cy="176" r="2.4" />
          </g>
          {/* alcohol: boils first, goes up the neck */}
          <circle className="fig-fill-accent" cx="70" cy="160" r="2.4" opacity="0.4" />
          <circle className="fig-fill-accent" cx="75" cy="140" r="2.4" opacity="0.5" />
          <circle className="fig-fill-accent" cx="75" cy="122" r="2.4" opacity="0.65" />
          <circle className="fig-fill-accent" cx="76" cy="96" r="2.4" opacity="0.8" />
          <circle className="fig-fill-accent" cx="82" cy="60" r="2.4" opacity="0.9" />
          <circle className="fig-fill-accent" cx="110" cy="46" r="2.4" opacity="0.9" />
          <text className="fig-val" x="136" y="90" fill="var(--accent-book)">78.3°C</text>
        </g>

        <text className="fig-t" x="16" y="292">one pass</text>
        <text className="fig-val" x="104" y="292">25–30%</text>
        <text className="fig-t" x="178" y="292">twice</text>
        <text className="fig-val" x="236" y="292">~75%</text>

        <path d="M360 14 V298" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* ---------------- column still ---------------- */}
        <text className="fig-name" x="404" y="24">Column still</text>
        <text className="fig-t" x="404" y="50">continuously</text>

        <g transform="translate(0 20)">
          <path className="fig-ink" d="M470 52 h72 v156 h-72 z" />
          <g className="fig-thin">
            <path d="M470 72 h72" /><path d="M470 92 h72" /><path d="M470 112 h72" />
            <path d="M470 132 h72" /><path d="M470 152 h72" /><path d="M470 172 h72" />
            <path d="M470 192 h72" />
          </g>
          <g className="fig-hatch">
            <path d="M482 72 v20 M494 92 v20 M506 112 v20 M518 132 v20 M494 152 v20 M506 172 v20" />
          </g>

          <path className="fig-accent" d="M436 66 h32" markerEnd="url(#stills-arrow)" />
          <text className="fig-t" x="396" y="56">wash</text>

          <path className="fig-accent" d="M436 198 h32" markerEnd="url(#stills-arrow)" strokeDasharray="3 3" />
          <text className="fig-t" x="396" y="190">steam</text>
          <text className="fig-val" x="396" y="222">100°C</text>

          <g className="fig-fill-accent">
            <circle cx="506" cy="186" r="2.4" opacity="0.35" />
            <circle cx="506" cy="164" r="2.4" opacity="0.5" />
            <circle cx="506" cy="142" r="2.4" opacity="0.65" />
            <circle cx="506" cy="120" r="2.4" opacity="0.78" />
            <circle cx="506" cy="98" r="2.4" opacity="0.9" />
            <circle cx="506" cy="76" r="2.4" opacity="1" />
          </g>
          <g className="fig-thin" strokeWidth="1">
            <circle cx="526" cy="104" r="2.4" /><circle cx="528" cy="136" r="2.4" />
            <circle cx="526" cy="166" r="2.4" /><circle cx="530" cy="198" r="2.4" />
            <circle cx="486" cy="150" r="2.4" /><circle cx="484" cy="182" r="2.4" />
          </g>

          <path className="fig-ink" d="M542 62 h44 v132 h-30" />
          <path className="fig-accent" d="M556 194 v14" strokeDasharray="3 3" />
          <text className="fig-t" x="596" y="66">spirit off</text>
          <text className="fig-t" x="596" y="84">the top</text>
          <text className="fig-val" x="596" y="106" fill="var(--accent-book)">78°C</text>
        </g>

        <text className="fig-t" x="404" y="292">one pass</text>
        <text className="fig-val" x="494" y="292">up to 96%</text>

        {/* the key */}
        <path d="M16 308 H704" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />
        <circle className="fig-fill-accent" cx="22" cy="329" r="3.4" />
        <text className="fig-t" x="34" y="334">alcohol</text>
        <text className="fig-val" x="112" y="334">boils at 78.3°C - leaves first</text>
        <circle className="fig-thin" cx="396" cy="329" r="3.4" />
        <text className="fig-t" x="408" y="334">water</text>
        <text className="fig-val" x="470" y="334">boils at 100°C - mostly stays</text>

        <defs>
          <marker id="stills-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0 L7 3.5 L0 7 z" fill="var(--accent-book)" />
          </marker>
        </defs>
      </svg>
    </Figure>
  );
}
