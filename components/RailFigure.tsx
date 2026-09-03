import Figure from './Figure';

export default function RailFigure() {
  return (
    <Figure
      title="The speed rail, in order"
      caption="The order is by how often each is poured, not by category - so the spirits you reach for all night sit nearest the station and the modifiers sit at the far end. Which order matters less than that it never changes, which is the point the paragraph makes and the one a drawing can show."
    >
        <svg viewBox="0 0 720 330" role="img"
        aria-label="A speed rail seen from the front, holding eight bottles in pouring order: vodka, gin, rum, tequila, whisky, triple sec, sweet vermouth, dry vermouth.">

        {/* what the order is doing, stated once across the top */}
        <path className="fig-accent" d="M76 34 h420" markerEnd="url(#rail-arrow)"/>
        <text className="fig-t" x="76" y="22" fill="var(--accent-book)">poured most</text>
        <text className="fig-t" x="380" y="22" fill="var(--accent-book)">poured least</text>
        <path className="fig-thin" d="M540 34 h140" strokeDasharray="4 4"/>
        <text className="fig-t" x="540" y="22">the modifiers</text>

        {/* the bottles, standing in the trough */}
        <g className="fig-ink">
        <path d="M60 214 v-70 q0-6 6-9 v-11 h18 v11 q6 3 6 9 v70 z"/>
        <path d="M142 214 v-74 q0-6 6-9 v-10 h18 v10 q6 3 6 9 v74 z"/>
        <path d="M224 214 v-60 q0-15 14-18 v-9 h16 v9 q14 3 14 18 v60 z"/>
        <path d="M306 214 v-42 q0-10 8-14 v-36 h14 v36 q8 4 8 14 v42 z"/>
        <path d="M388 214 v-64 l6-11 h20 l6 11 v64 z"/>
        <path d="M470 214 v-62 q0-13 14-16 v-9 h14 v9 q14 3 14 16 v62 z"/>
        <path d="M552 214 v-66 q0-11 10-14 v-12 h14 v12 q10 3 10 14 v66 z"/>
        <path d="M634 214 v-66 q0-11 10-14 v-12 h14 v12 q10 3 10 14 v66 z"/>
        </g>
        {/* Each fill is cut to its own bottle's body, which differ from
        30 to 44 units wide, and runs from just under the shoulder
        down past the trough lip - otherwise only a thin band of it
        clears the front wall and the bottles read as empty. */}
        <g opacity="0.45">
        <path d="M63 212 v-62 h24 v62 z" fill="var(--accent-book)"/>
        <path d="M145 212 v-64 h24 v64 z" fill="var(--accent-book)"/>
        <path d="M228 212 v-54 h36 v54 z" fill="var(--brass)"/>
        <path d="M309 212 v-36 h24 v36 z" fill="var(--accent-book)"/>
        <path d="M391 212 v-58 h26 v58 z" fill="var(--brass)"/>
        <path d="M474 212 v-56 h34 v56 z" fill="var(--accent-book)"/>
        <path d="M555 212 v-60 h28 v60 z" fill="var(--whisky)"/>
        <path d="M637 212 v-60 h28 v60 z" fill="var(--accent-book)"/>
        </g>

        {/* the trough, drawn last so its front wall stands in front of
        the bottles and they read as sitting down inside it */}
        <path d="M40 196 h656" stroke="var(--ink-faint)" strokeWidth="1.4" fill="none"/>
        <path d="M40 202 h656 v42 h-656 z" fill="var(--paper-sunk)"/>
        <path className="fig-ink" d="M40 202 h656 v42 h-656 z"/>
        <path className="fig-thin" d="M40 214 h656" strokeDasharray="3 4"/>

        {/* names, on two rows so the long ones never meet */}
        <g className="fig-t" textAnchor="middle">
        <text x="75"  y="272">vodka</text>
        <text x="239" y="272">rum</text>
        <text x="403" y="272">whisky</text>
        <text x="567" y="272">sweet vermouth</text>
        </g>
        <g className="fig-t" textAnchor="middle" fill="var(--ink-faint)">
        <text x="157" y="298">gin</text>
        <text x="321" y="298">tequila</text>
        <text x="485" y="298">triple sec</text>
        <text x="649" y="298">dry vermouth</text>
        </g>
        <g className="fig-thin" strokeDasharray="2 3">
        <path d="M157 280 v-30 M321 280 v-30 M485 280 v-30 M649 280 v-30"/>
        </g>

        {/* where you stand, clear of the labels */}
        <path className="fig-thin" d="M22 150 v76 M22 188 h30" strokeDasharray="4 4"/>
        <text className="fig-t" x="14" y="140">you</text>
        <text className="fig-t" x="14" y="322">stand here</text>

        <defs>
        <marker id="rail-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--accent-book)"/>
        </marker>
        </defs>
        </svg>
    </Figure>
  );
}
