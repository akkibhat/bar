import Figure from './Figure';

/**
 * Clear ice, in three cross-sections of an insulated container.
 *
 * Hot water in, the slab growing down from the open top, then the cloudy
 * remainder poured off. The hatching down the sides and base is the
 * insulation, and it is what makes the figure legible: without it the
 * three boxes are just boxes and nothing explains why the freeze only
 * travels one way.
 *
 * The air bubbles move between panels rather than disappearing - spread
 * through the water in the first, driven into the bottom quarter in the
 * second, tipped out in the third. That migration is the whole argument,
 * so the circles are placed by hand rather than scattered.
 *
 * Three clip paths, one per bin, and two arrow markers: `#ice-arrow` for
 * the freezing front, `#ice-tip` for the pour-off.
 */
export default function ClearIceFigure() {
  return (
    <Figure
      title="Clear ice, in one direction"
      caption="Freezing inwards from every side traps the air where it stands, which is all cloudy ice is. Insulate the sides and base and the only cold face left is the open top, so the front travels one way and drives the air and minerals down ahead of it into the last quarter - the part you tip out rather than the part you serve."
    >
        <svg id="clearice" viewBox="0 0 720 372" role="img"
        aria-label="Three cross-sections of an insulated container: filled with hot water, freezing downward from the open top with air driven ahead of the front, and finally tipped to pour off the cloudy water that is left underneath.">

        <text className="fig-t" x="16" y="24" fill="var(--accent-book)">one direction only</text>
        <text className="fig-t" x="704" y="24" textAnchor="end">about 24 hours</text>

        <g className="fig-val" textAnchor="middle">
        <text x="120" y="54">1</text>
        <text x="360" y="54">2</text>
        <text x="600" y="54">3</text>
        </g>
        <g className="fig-t" textAnchor="middle">
        <text x="120" y="76">hot water in</text>
        <text x="360" y="76">freezes top down</text>
        <text x="600" y="76">pour off the last</text>
        </g>

        <defs>
        <clipPath id="binA"><path d="M54 92 h132 v174 h-132 z"/></clipPath>
        <clipPath id="binB"><path d="M294 92 h132 v174 h-132 z"/></clipPath>
        <clipPath id="binC"><path d="M534 92 h132 v174 h-132 z"/></clipPath>
        <marker id="ice-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--accent-book)"/>
        </marker>
        <marker id="ice-tip" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--ink-faint)"/>
        </marker>
        </defs>

        {/* 1: hot water, air still dissolved all through it */}
        <path d="M40 92 h160 v188 h-160 z M54 92 h132 v174 h-132 z"
        fill="var(--ink-faint)" opacity="0.18" fillRule="evenodd"/>
        <g clipPath="url(#binA)">
        <rect x="54" y="112" width="132" height="154" fill="var(--accent-book)" opacity="0.3"/>
        <g className="fig-air">
        <circle cx="72"  cy="132" r="2.4"/><circle cx="104" cy="146" r="2"/>
        <circle cx="140" cy="126" r="2.6"/><circle cx="170" cy="150" r="2.2"/>
        <circle cx="86"  cy="176" r="2.2"/><circle cx="122" cy="188" r="2.6"/>
        <circle cx="158" cy="180" r="2"/><circle cx="70"  cy="214" r="2.6"/>
        <circle cx="108" cy="226" r="2.2"/><circle cx="146" cy="218" r="2.4"/>
        <circle cx="176" cy="240" r="2.2"/><circle cx="90"  cy="250" r="2.4"/>
        <circle cx="130" cy="256" r="2"/><circle cx="162" cy="204" r="2.4"/>
        </g>
        </g>
        <g className="fig-hatch" fill="none">
        <path d="M40 116 l14 -14 M40 148 l14 -14 M40 180 l14 -14 M40 212 l14 -14 M40 244 l14 -14 M40 276 l14 -14"/>
        <path d="M186 116 l14 -14 M186 148 l14 -14 M186 180 l14 -14 M186 212 l14 -14 M186 244 l14 -14 M186 276 l14 -14"/>
        <path d="M54 280 l14 -14 M84 280 l14 -14 M114 280 l14 -14 M144 280 l14 -14 M174 280 l14 -14"/>
        </g>
        <path className="fig-ink" d="M40 92 v188 h160 v-188"/>
        <path className="fig-thin" d="M54 92 v174 h132 v-174"/>
        {/* steam, because it goes in hot */}
        <path className="fig-thin" d="M96 86 c6 -8 -6 -14 0 -22 M128 86 c6 -8 -6 -14 0 -22" strokeDasharray="3 3"/>

        {/* 2: the slab grows down, the air is left below the front */}
        <path d="M280 92 h160 v188 h-160 z M294 92 h132 v174 h-132 z"
        fill="var(--ink-faint)" opacity="0.18" fillRule="evenodd"/>
        <g clipPath="url(#binB)">
        <rect x="294" y="112" width="132" height="154" fill="var(--accent-book)" opacity="0.3"/>
        <g className="fig-air">
        <circle cx="312" cy="132" r="2.4"/><circle cx="344" cy="146" r="2"/>
        <circle cx="380" cy="126" r="2.6"/><circle cx="410" cy="150" r="2.2"/>
        <circle cx="326" cy="176" r="2.2"/><circle cx="362" cy="188" r="2.6"/>
        <circle cx="398" cy="180" r="2"/>
        <circle cx="306" cy="234" r="2.8"/><circle cx="330" cy="244" r="2.4"/>
        <circle cx="352" cy="234" r="2.8"/><circle cx="376" cy="246" r="2.6"/>
        <circle cx="400" cy="236" r="2.4"/><circle cx="418" cy="248" r="2.8"/>
        <circle cx="318" cy="256" r="2.4"/><circle cx="342" cy="260" r="2.6"/>
        <circle cx="366" cy="258" r="2.4"/><circle cx="390" cy="260" r="2.8"/>
        <circle cx="410" cy="258" r="2.2"/>
        </g>
        <rect className="slab" x="294" y="112" width="132" height="114"
        fill="var(--ice)" opacity="0.92"/>
        <path className="fig-thin" d="M294 226 h132" opacity="0"/>
        </g>
        <g className="fig-hatch" fill="none">
        <path d="M280 116 l14 -14 M280 148 l14 -14 M280 180 l14 -14 M280 212 l14 -14 M280 244 l14 -14 M280 276 l14 -14"/>
        <path d="M426 116 l14 -14 M426 148 l14 -14 M426 180 l14 -14 M426 212 l14 -14 M426 244 l14 -14 M426 276 l14 -14"/>
        <path d="M294 280 l14 -14 M324 280 l14 -14 M354 280 l14 -14 M384 280 l14 -14 M414 280 l14 -14"/>
        </g>
        <path className="fig-ink" d="M280 92 v188 h160 v-188"/>
        <path className="fig-thin" d="M294 92 v174 h132 v-174"/>
        {/* the freezing front, and where it is heading */}
        <g className="front">
        <path className="fig-accent" d="M296 226 h128"/>
        <path className="fig-fill-accent" d="M322 232 l6 10 l6 -10 z M354 232 l6 10 l6 -10 z M386 232 l6 10 l6 -10 z"/>
        </g>
        <path className="fig-accent" d="M360 100 v-16" markerEnd="url(#ice-arrow)" transform="rotate(180 360 92)"/>

        {/* 3: the clear slab, and the cloudy remainder going out */}
        <path d="M520 92 h160 v188 h-160 z M534 92 h132 v174 h-132 z"
        fill="var(--ink-faint)" opacity="0.18" fillRule="evenodd"/>
        <g clipPath="url(#binC)">
        <rect x="534" y="112" width="132" height="114" fill="var(--ice)" opacity="0.92"/>
        <path className="fig-thin" d="M534 226 h132"/>
        <rect x="534" y="240" width="132" height="26" fill="var(--accent-book)" opacity="0.3"/>
        <g className="fig-air">
        <circle cx="552" cy="250" r="2.6"/><circle cx="578" cy="256" r="2.4"/>
        <circle cx="604" cy="248" r="2.8"/><circle cx="630" cy="256" r="2.4"/>
        <circle cx="652" cy="250" r="2.6"/>
        </g>
        {/* where you cut it into cubes */}
        <path className="fig-mesh" d="M578 114 v110 M622 114 v110 M534 168 h132" strokeDasharray="4 4"/>
        </g>
        <g className="fig-hatch" fill="none">
        <path d="M520 116 l14 -14 M520 148 l14 -14 M520 180 l14 -14 M520 212 l14 -14 M520 244 l14 -14 M520 276 l14 -14"/>
        <path d="M666 116 l14 -14 M666 148 l14 -14 M666 180 l14 -14 M666 212 l14 -14 M666 244 l14 -14 M666 276 l14 -14"/>
        <path d="M534 280 l14 -14 M564 280 l14 -14 M594 280 l14 -14 M624 280 l14 -14 M654 280 l14 -14"/>
        </g>
        <path className="fig-ink" d="M520 92 v188 h160 v-188"/>
        <path className="fig-thin" d="M534 92 v174 h132 v-174"/>
        <path className="fig-thin" d="M662 244 C696 236 702 200 698 172" markerEnd="url(#ice-tip)"/>
        <g className="fig-air">
        <circle cx="684" cy="228" r="2.6"/><circle cx="694" cy="204" r="2.2"/>
        <circle cx="697" cy="186" r="2.4"/>
        </g>

        <path className="fig-thin" d="M20 280 h680"/>

        <g className="fig-t" textAnchor="middle" fill="var(--ink-faint)">
        <text x="120" y="306">less air in it</text>
        <text x="360" y="306">three quarters</text>
        <text x="600" y="306">carve the slab</text>
        </g>

        <path className="fig-thin" d="M16 332 h688" strokeDasharray="4 4"/>
        <text className="fig-t" x="16" y="356">the sides and base are insulated, so it can only freeze downward</text>
        </svg>
    </Figure>
  );
}
