import Figure from './Figure';

/**
 * Where Islay comes from.
 *
 * The sequence exists to make one claim visible: the phenols the barley
 * picks up during kilning are the same phenols in the glass. Everything
 * else on the line transforms - grain becomes wort, wort becomes wash,
 * wash becomes spirit, spirit spends years in wood - and the brass dots
 * pass through all of it untouched. That survival is what makes Islay
 * taste of Islay, and it is easier to show than to write.
 *
 * Each station is drawn at its own natural size and then scaled up about
 * the point where it meets the line, so the glyphs read at plate size
 * without every coordinate being redrawn.
 */

/** Scale a station about the point where it sits on the process line. */
const up = (cx: number, k = 1.5) => `translate(${cx} 132) scale(${k}) translate(${-cx} -132)`;

export default function PeatSequence() {
  return (
    <Figure
      title="Where Islay comes from"
      animated
      caption="The brass dots are the smoke phenols. Everything else changes from one station to the next; they never do."
    >
      <svg
        viewBox="0 0 720 230"
        role="img"
        aria-label="Peat smoke enters barley during kilning, and the phenols persist through mashing, fermentation, distillation and ageing into the glass."
      >
        <path d="M40 132 H690" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* peat fire */}
        <g transform="translate(62 200) scale(1.4) translate(-62 -200)">
          <path className="fig-ink" d="M34 200 h56" />
          <path className="fig-thin" d="M40 200 v-8 h44 v8" />
          <g className="peat-flame">
            <path className="fig-fill-gold" d="M56 196 c-7 -11 3 -15 0 -24 c10 7 15 15 8 24 z" />
            <path className="fig-fill-gold" d="M70 196 c-6 -9 2 -13 0 -20 c8 6 12 12 6 20 z" opacity="0.7" />
          </g>
        </g>
        <circle className="peat-smoke peat-s1 fig-fill-gold" cx="62" cy="156" r="5" />
        <circle className="peat-smoke peat-s2 fig-fill-gold" cx="70" cy="156" r="4" />
        <circle className="peat-smoke peat-s3 fig-fill-gold" cx="54" cy="156" r="4.5" />
        <text className="fig-t" x="34" y="222">peat fire</text>

        <g className="fig-t" textAnchor="middle">
          <text x="120" y="166">kiln</text>
          <text x="248" y="166">mash</text>
          <text x="376" y="166">ferment</text>
          <text x="504" y="166">distil</text>
          <text x="606" y="166">cask</text>
          <text x="676" y="166">glass</text>
        </g>

        {/* kiln floor with barley */}
        <g transform={up(120)}>
          <path className="fig-ink" d="M96 132 h48 v-14 h-48 z" />
          <g className="fig-hatch"><path d="M102 132 v-14 M112 132 v-14 M122 132 v-14 M132 132 v-14" /></g>
          <ellipse className="fig-fill-gold" cx="108" cy="112" rx="4" ry="2.6" opacity="0.8" />
          <ellipse className="fig-fill-gold" cx="120" cy="110" rx="4" ry="2.6" opacity="0.8" />
          <ellipse className="fig-fill-gold" cx="132" cy="112" rx="4" ry="2.6" opacity="0.8" />
        </g>

        {/* mash tun */}
        <g transform={up(248)}>
          <path className="fig-ink" d="M228 132 v-26 h40 v26 z" />
          <path d="M231 130 v-16 h34 v16 z" fill="var(--accent-book)" opacity="0.14" />
        </g>

        {/* washback */}
        <g transform={up(376)}>
          <path className="fig-ink" d="M356 132 v-30 h40 v30 z" />
          <path d="M359 130 v-20 h34 v20 z" fill="var(--accent-book)" opacity="0.14" />
          <circle className="fig-thin" cx="370" cy="106" r="3" />
          <circle className="fig-thin" cx="382" cy="103" r="2.4" />
        </g>

        {/* pot still */}
        <g transform={up(504)}>
          <path className="fig-ink" d="M486 132 C486 112 494 102 504 101 C514 102 522 112 522 132 Z" />
          <path className="fig-ink" d="M500 101 L502 84 M508 101 L506 84" />
          <path className="fig-ink" d="M502 84 C502 74 508 70 516 70 L530 70" />
        </g>

        {/* cask */}
        <g transform={up(606)}>
          <path className="fig-ink" d="M590 132 C586 122 586 108 590 98 C598 94 614 94 622 98 C626 108 626 122 622 132 Z" />
          <path className="fig-thin" d="M588 106 h36 M588 122 h36" />
        </g>

        {/* glass */}
        <g transform={up(676)}>
          <path className="fig-ink" d="M664 96 C664 118 672 124 672 132 C672 124 688 118 688 96 Z" />
          <path d="M666 106 C668 118 672 122 672 130 C672 122 684 118 686 106 Z" fill="var(--gold)" opacity="0.3" />
        </g>

        {/* the phenols: identical at every station */}
        <g>
          <circle className="peat-phenol peat-p1 fig-fill-gold" cx="44" cy="120" r="4.6" />
          <circle className="peat-phenol peat-p2 fig-fill-gold" cx="44" cy="110" r="3.8" />
          <circle className="peat-phenol peat-p3 fig-fill-gold" cx="44" cy="129" r="3.2" />
        </g>
        <g className="fig-fill-gold">
          <circle className="peat-mark peat-m1" cx="120" cy="80" r="3.4" />
          <circle className="peat-mark peat-m2" cx="248" cy="78" r="3.4" />
          <circle className="peat-mark peat-m3" cx="376" cy="72" r="3.4" />
          <circle className="peat-mark peat-m4" cx="504" cy="26" r="3.4" />
          <circle className="peat-mark peat-m5" cx="606" cy="60" r="3.4" />
        </g>

        <text className="fig-t" x="40" y="30" fill="var(--gold)">phenols</text>
        <path d="M40 38 C120 46 240 46 400 44" stroke="var(--gold)" strokeWidth="0.8" fill="none" strokeDasharray="2 4" opacity="0.6" />
      </svg>
    </Figure>
  );
}
