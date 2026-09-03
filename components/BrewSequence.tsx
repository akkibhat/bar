import Figure from './Figure';

/**
 * How beer is made.
 *
 * Four vessels in a row, because that is what a brewery is: mash, boil,
 * ferment, condition. What moves along the line is the liquid changing
 * name at each step - grain and water become wort, wort becomes hopped
 * wort, hopped wort becomes beer - and naming it at each stage is most
 * of what the steps beside this are trying to teach.
 *
 * The one thing drawn rather than labelled is the hop addition, because
 * when the hops go in is the whole difference between a bitter beer and
 * an aromatic one, and the chapter says so two paragraphs earlier.
 */
export default function BrewSequence() {
  return (
    <Figure
      title="How beer is made"
      animated
      caption="Grain and water in at one end, beer out at the other. The liquid changes name at every step: wort, then hopped wort, then beer."
      >
      <svg
        viewBox="0 0 720 240"
        role="img"
        aria-label="Four stages: mashing grain in hot water to make wort, boiling it with hops, fermenting with yeast, then conditioning."
      >
        <path d="M28 178 H692" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* ---- 1. mash ---- */}
        <g>
          <path className="fig-ink" d="M44 178 v-64 h84 v64 z" />
          <path d="M48 176 v-46 h76 v46 z" fill="var(--gold)" opacity="0.22" />
          <g className="fig-hatch">
            <path d="M58 176 v-40 M74 176 v-44 M90 176 v-40 M106 176 v-44" />
          </g>
          <path className="fig-thin" d="M52 122 c14 -8 28 -8 42 0 c10 6 22 6 30 0" />
          <text className="fig-t" x="44" y="200">mash</text>
          <text className="fig-val" x="44" y="220">grain + hot water</text>
        </g>

        {/* wort drawn off */}
        <path className="brew-flow fig-accent" d="M128 160 h56" markerEnd="url(#brew-arrow)" strokeDasharray="4 4" />
        <text className="fig-t" x="132" y="150" fill="var(--accent-book)">wort</text>

        {/* ---- 2. boil ---- */}
        <g>
          <path className="fig-ink" d="M192 178 v-64 h84 v64 z" />
          <path d="M196 176 v-42 h76 v42 z" fill="var(--gold)" opacity="0.3" />
          <path className="fig-thin" d="M200 178 h68" />
          <circle className="brew-steam brew-b1" cx="216" cy="104" r="5" fill="var(--ink-faint)" />
          <circle className="brew-steam brew-b2" cx="236" cy="104" r="4" fill="var(--ink-faint)" />
          <circle className="brew-steam brew-b3" cx="256" cy="104" r="4.5" fill="var(--ink-faint)" />
          <text className="fig-t" x="192" y="200">boil</text>
          <text className="fig-val" x="192" y="220">with hops</text>
        </g>

        {/* hops, and when they go in */}
        <g className="brew-hops">
          <ellipse className="fig-fill-gold" cx="220" cy="70" rx="6" ry="8" />
          <ellipse className="fig-fill-gold" cx="238" cy="62" rx="5" ry="7" opacity="0.8" />
          <ellipse className="fig-fill-gold" cx="254" cy="70" rx="6" ry="8" opacity="0.6" />
        </g>
        <text className="fig-t" x="286" y="60" fill="var(--gold)">early: bitterness</text>
        <text className="fig-t" x="286" y="76" fill="var(--gold)">late: aroma</text>

        <path className="brew-flow fig-accent" d="M276 160 h56" markerEnd="url(#brew-arrow)" strokeDasharray="4 4" />

        {/* ---- 3. ferment ---- */}
        <g>
          <path className="fig-ink" d="M340 178 v-70 h84 v70 z" />
          <path d="M344 176 v-46 h76 v46 z" fill="var(--accent-book)" opacity="0.2" />
          <g className="brew-bubbles fig-thin" strokeWidth="1">
            <circle cx="360" cy="146" r="3" /><circle cx="382" cy="138" r="2.4" />
            <circle cx="402" cy="148" r="3.2" /><circle cx="372" cy="126" r="2.6" />
            <circle cx="396" cy="124" r="2.2" />
          </g>
          <path className="fig-ink" d="M368 108 v-14 h28 v14" />
          <text className="fig-t" x="340" y="200">ferment</text>
          <text className="fig-val" x="340" y="220">yeast, days or weeks</text>
        </g>

        <path className="brew-flow fig-accent" d="M424 160 h56" markerEnd="url(#brew-arrow)" strokeDasharray="4 4" />
        <text className="fig-t" x="428" y="150" fill="var(--accent-book)">beer</text>

        {/* ---- 4. condition ---- */}
        <g>
          <path className="fig-ink" d="M488 178 C484 166 484 130 488 118 C500 112 528 112 540 118 C544 130 544 166 540 178 Z" />
          <path className="fig-thin" d="M486 132 h56 M486 160 h56" />
          <text className="fig-t" x="488" y="200">condition</text>
          <text className="fig-val" x="488" y="220">settle and carbonate</text>
        </g>

        {/* ---- the glass ---- */}
        <g>
          <path className="fig-ink" d="M624 178 v-72 h44 v72 z" />
          <path className="brew-fill" d="M628 176 v-52 h36 v52 z" fill="var(--gold)" opacity="0.5" />
          <path className="brew-head" d="M628 124 v-14 h36 v14 z" fill="var(--foam)" stroke="var(--ink)" strokeWidth="1.2" />
          <text className="fig-t" x="624" y="200">poured</text>
        </g>

        <defs>
          <marker id="brew-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
            <path d="M0 0 L7 3.5 L0 7 z" fill="var(--accent-book)" />
          </marker>
        </defs>
      </svg>
    </Figure>
  );
}
