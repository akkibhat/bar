import Figure from './Figure';

/**
 * The Sidecar structure filled three ways.
 *
 * Each column is normalised to its own total, so the bands read as
 * proportion rather than volume, and the three are ordered by the
 * spirit's share rising left to right - White Lady, Cosmopolitan,
 * Margarita - so the drift reads as a gradient rather than as one drink
 * out of step. The interior runs from y=248 to y=100, 148 px, and every
 * band is that height times the ingredient's share.
 *
 * The Margarita is the IBA pour, 50 / 20 / 15. Change the spec and
 * change these bands together; nothing links them.
 */
export default function SidecarFamily() {
  return (
    <Figure
      title="Three drinks, one structure"
      caption="Bands drawn to the real measures, so the three read as the same shape rather than as a claim that they are. The sweetening is a liqueur every time, which is what separates a Sidecar from a sour - it brings flavour along with the sugar. The Cosmopolitan's cranberry is shown as the addition it is rather than folded into one of the three roles."
    >
        <svg viewBox="0 0 720 404" role="img"
        aria-label="The Sidecar structure - spirit, liqueur, citrus - filled three ways, in rising order of the spirit's share: White Lady, Cosmopolitan and Margarita.">

        {/* the template, on the left */}
        <text className="fig-t" x="16" y="30">the structure</text>
        <g>
        <path className="fig-ink" d="M24 250 v-150 h84 v150 z"/>
        <path d="M27 248 v-72 h78 v72 z" fill="var(--accent-book)" opacity="0.42"/>
        <path d="M27 176 v-40 h78 v40 z" fill="var(--brass)" opacity="0.42"/>
        <path d="M27 136 v-33 h78 v33 z" fill="var(--accent-book)" opacity="0.16"/>
        <path className="fig-thin" d="M27 176 h78 M27 136 h78"/>
        <text className="fig-val" x="120" y="218">spirit</text>
        <text className="fig-val" x="120" y="162">liqueur</text>
        <text className="fig-val" x="120" y="126">citrus</text>
        </g>

        <text className="fig-name" x="228" y="180">=</text>

        {/* the three, in their real proportions */}
        <g transform="translate(262 0)">
        <path className="fig-ink" d="M0 250 v-150 h76 v150 z"/>
        <path d="M3 248 v-67 h70 v67 z" fill="var(--accent-book)" opacity="0.42"/>
        <path d="M3 181 v-50 h70 v50 z" fill="var(--brass)" opacity="0.42"/>
        <path d="M3 131 v-33 h70 v33 z" fill="var(--accent-book)" opacity="0.16"/>
        <path className="fig-thin" d="M3 181 h70 M3 131 h70"/>
        <text className="fig-name" x="0" y="278">White Lady</text>
        <text className="fig-val" x="0" y="300">40 gin</text>
        <text className="fig-val" x="0" y="318">30 Cointreau</text>
        <text className="fig-val" x="0" y="336">20 lemon</text>
        </g>

        <g transform="translate(410 0)">
        <path className="fig-ink" d="M0 250 v-150 h76 v150 z"/>
        <path d="M3 248 v-60 h70 v60 z" fill="var(--accent-book)" opacity="0.42"/>
        <path d="M3 188 v-23 h70 v23 z" fill="var(--brass)" opacity="0.42"/>
        <path d="M3 165 v-22 h70 v22 z" fill="var(--accent-book)" opacity="0.16"/>
        <path d="M3 143 v-44 h70 v44 z" fill="var(--brass)" opacity="0.2"/>
        <path className="fig-thin" d="M3 188 h70 M3 165 h70 M3 143 h70" strokeDasharray="3 3"/>
        <text className="fig-name" x="0" y="278">Cosmopolitan</text>
        <text className="fig-val" x="0" y="300">40 citrus vodka</text>
        <text className="fig-val" x="0" y="318">15 Cointreau</text>
        <text className="fig-val" x="0" y="336">15 lime</text>
        <text className="fig-val" x="0" y="354" fill="var(--brass)">+ 30 cranberry</text>
        </g>

        <g transform="translate(558 0)">
        <path className="fig-ink" d="M0 250 v-150 h76 v150 z"/>
        <path d="M3 248 v-87 h70 v87 z" fill="var(--accent-book)" opacity="0.42"/>
        <path d="M3 161 v-35 h70 v35 z" fill="var(--brass)" opacity="0.42"/>
        <path d="M3 126 v-26 h70 v26 z" fill="var(--accent-book)" opacity="0.16"/>
        <path className="fig-thin" d="M3 161 h70 M3 126 h70"/>
        <text className="fig-name" x="0" y="278">Margarita</text>
        <text className="fig-val" x="0" y="300">50 tequila</text>
        <text className="fig-val" x="0" y="318">20 triple sec</text>
        <text className="fig-val" x="0" y="336">15 lime</text>
        </g>

        <path className="fig-thin" d="M16 368 h688" strokeDasharray="4 4"/>
        <text className="fig-t" x="16" y="390" fill="var(--ink-faint)">only the Cosmopolitan carries a fourth ingredient</text>
        </svg>
    </Figure>
  );
}
