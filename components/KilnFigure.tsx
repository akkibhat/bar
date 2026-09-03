import Figure from './Figure';

export default function KilnFigure() {
  return (
    <Figure
      title="The kiln makes the colour"
      caption="The chapter's misconception is that dark means strong, and the fix is to put the two rows next to each other and let the reader see that one has nothing to do with the other. Colour is set by how hard the malt was kilned, and by nothing else. Guinness is about 4.2%, lighter than either pale beer here."
    >
        <svg id="kiln" viewBox="0 0 720 488" role="img"
        aria-label="A kiln gradient from pale to black malt with the beer each one makes below it, and a row of alcohol figures that does not follow the colour at all.">

        <text className="fig-t" x="16" y="24" fill="var(--accent-book)">colour comes out of the kiln</text>
        <text className="fig-t" x="704" y="24" textAnchor="end">and nothing else follows from it</text>

        <text className="fig-t" x="40" y="46">pale malt</text>
        <text className="fig-t" x="680" y="46" textAnchor="end">black malt</text>

        <defs>
        <clipPath id="pint1"><path d="M-27 283 H27 L33 148 H-33 Z"/></clipPath>
        </defs>

        {/* column 1: pale malt, pilsner */}
        <g className="col c1">
        <rect x="40" y="56" width="107" height="36" fill="var(--m1)"/>
        <rect className="fig-mesh" x="40" y="56" width="107" height="36" fill="none"/>
        <g className="fig-mesh"><ellipse cx="70" cy="74" rx="6" ry="3.5"/><ellipse cx="93" cy="80" rx="6" ry="3.5"/><ellipse cx="117" cy="70" rx="6" ry="3.5"/></g>
        <text className="fig-t" x="93.5" y="112" textAnchor="middle">pale</text>
        <path className="fig-thin" d="M93.5 120 v18" strokeDasharray="3 4"/>
        <g transform="translate(93.5 0)">
        <g clipPath="url(#pint1)">
        <rect x="-33" y="176" width="66" height="107" fill="var(--m1)"/>
        <rect x="-33" y="164" width="66" height="12" fill="var(--foam)"/>
        </g>
        <path className="fig-thin" d="M-31 176 H31"/>
        <path className="fig-ink" d="M-36 146 L-30 286 H30 L36 146"/>
        <text className="fig-name" x="0" y="310" textAnchor="middle">pilsner</text>
        </g>
        </g>

        {/* column 2: vienna malt, IPA - the palest of the strong ones */}
        <g className="col c2">
        <rect x="147" y="56" width="106" height="36" fill="var(--m2)"/>
        <rect className="fig-mesh" x="147" y="56" width="106" height="36" fill="none"/>
        <g className="fig-mesh"><ellipse cx="176" cy="74" rx="6" ry="3.5"/><ellipse cx="199" cy="80" rx="6" ry="3.5"/><ellipse cx="223" cy="70" rx="6" ry="3.5"/></g>
        <text className="fig-t" x="200" y="112" textAnchor="middle">vienna</text>
        <path className="fig-thin" d="M200 120 v18" strokeDasharray="3 4"/>
        <g transform="translate(200 0)">
        <g clipPath="url(#pint1)">
        <rect x="-33" y="176" width="66" height="107" fill="var(--m2)"/>
        <rect x="-33" y="164" width="66" height="12" fill="var(--foam)"/>
        </g>
        <path className="fig-thin" d="M-31 176 H31"/>
        <path className="fig-ink" d="M-36 146 L-30 286 H30 L36 146"/>
        <text className="fig-name" x="0" y="310" textAnchor="middle">IPA</text>
        </g>
        </g>

        {/* column 3: crystal malt, amber ale */}
        <g className="col c3">
        <rect x="253" y="56" width="107" height="36" fill="var(--m3)"/>
        <rect className="fig-mesh" x="253" y="56" width="107" height="36" fill="none"/>
        <g className="fig-mesh"><ellipse cx="283" cy="74" rx="6" ry="3.5"/><ellipse cx="306" cy="80" rx="6" ry="3.5"/><ellipse cx="330" cy="70" rx="6" ry="3.5"/></g>
        <text className="fig-t" x="306.5" y="112" textAnchor="middle">crystal</text>
        <path className="fig-thin" d="M306.5 120 v18" strokeDasharray="3 4"/>
        <g transform="translate(306.5 0)">
        <g clipPath="url(#pint1)">
        <rect x="-33" y="176" width="66" height="107" fill="var(--m3)"/>
        <rect x="-33" y="164" width="66" height="12" fill="var(--foam)"/>
        </g>
        <path className="fig-thin" d="M-31 176 H31"/>
        <path className="fig-ink" d="M-36 146 L-30 286 H30 L36 146"/>
        <text className="fig-name" x="0" y="310" textAnchor="middle">amber ale</text>
        </g>
        </g>

        {/* column 4: brown malt, brown ale */}
        <g className="col c4">
        <rect x="360" y="56" width="107" height="36" fill="var(--m4)"/>
        <rect className="fig-mesh" x="360" y="56" width="107" height="36" fill="none"/>
        <g className="fig-mesh"><ellipse cx="390" cy="74" rx="6" ry="3.5"/><ellipse cx="413" cy="80" rx="6" ry="3.5"/><ellipse cx="437" cy="70" rx="6" ry="3.5"/></g>
        <text className="fig-t" x="413.5" y="112" textAnchor="middle">brown</text>
        <path className="fig-thin" d="M413.5 120 v18" strokeDasharray="3 4"/>
        <g transform="translate(413.5 0)">
        <g clipPath="url(#pint1)">
        <rect x="-33" y="176" width="66" height="107" fill="var(--m4)"/>
        <rect x="-33" y="164" width="66" height="12" fill="var(--foam)"/>
        </g>
        <path className="fig-thin" d="M-31 176 H31"/>
        <path className="fig-ink" d="M-36 146 L-30 286 H30 L36 146"/>
        <text className="fig-name" x="0" y="310" textAnchor="middle">brown ale</text>
        </g>
        </g>

        {/* column 5: chocolate malt, porter */}
        <g className="col c5">
        <rect x="467" y="56" width="106" height="36" fill="var(--m5)"/>
        <rect className="fig-mesh" x="467" y="56" width="106" height="36" fill="none"/>
        <g className="fig-mesh"><ellipse cx="496" cy="74" rx="6" ry="3.5"/><ellipse cx="519" cy="80" rx="6" ry="3.5"/><ellipse cx="543" cy="70" rx="6" ry="3.5"/></g>
        <text className="fig-t" x="520" y="112" textAnchor="middle">chocolate</text>
        <path className="fig-thin" d="M520 120 v18" strokeDasharray="3 4"/>
        <g transform="translate(520 0)">
        <g clipPath="url(#pint1)">
        <rect x="-33" y="176" width="66" height="107" fill="var(--m5)"/>
        <rect x="-33" y="164" width="66" height="12" fill="var(--foam)"/>
        </g>
        <path className="fig-thin" d="M-31 176 H31"/>
        <path className="fig-ink" d="M-36 146 L-30 286 H30 L36 146"/>
        <text className="fig-name" x="0" y="310" textAnchor="middle">porter</text>
        </g>
        </g>

        {/* column 6: black malt, stout - the darkest and the weakest */}
        <g className="col c6">
        <rect x="573" y="56" width="107" height="36" fill="var(--m6)"/>
        <rect className="fig-mesh" x="573" y="56" width="107" height="36" fill="none"/>
        <g className="fig-mesh"><ellipse cx="603" cy="74" rx="6" ry="3.5"/><ellipse cx="626" cy="80" rx="6" ry="3.5"/><ellipse cx="650" cy="70" rx="6" ry="3.5"/></g>
        <text className="fig-t" x="626.5" y="112" textAnchor="middle">black</text>
        <path className="fig-thin" d="M626.5 120 v18" strokeDasharray="3 4"/>
        <g transform="translate(626.5 0)">
        <g clipPath="url(#pint1)">
        <rect x="-33" y="176" width="66" height="107" fill="var(--m6)"/>
        <rect x="-33" y="164" width="66" height="12" fill="var(--foam)"/>
        </g>
        <path className="fig-thin" d="M-31 176 H31"/>
        <path className="fig-ink" d="M-36 146 L-30 286 H30 L36 146"/>
        <text className="fig-name" x="0" y="310" textAnchor="middle">stout</text>
        </g>
        </g>

        <path className="fig-thin" d="M20 286 h680"/>

        {/* and the row that does not follow */}
        <g className="fig-val" textAnchor="middle">
        <text x="93.5"  y="353">4.8%</text>
        <text x="200"   y="334" fill="var(--brass)">6.5%</text>
        <text x="306.5" y="349">5.2%</text>
        <text x="413.5" y="356">4.5%</text>
        <text x="520"   y="351">5.0%</text>
        <text x="626.5" y="360" fill="var(--brass)">4.2%</text>
        </g>

        <rect className="bar r1" x="79.5"  y="361.2" width="28" height="52.8" fill="var(--accent-book)" opacity="0.4"/>
        <rect className="bar r2" x="186"   y="342.5" width="28" height="71.5" fill="var(--brass)"    opacity="0.5"/>
        <rect className="bar r3" x="292.5" y="356.8" width="28" height="57.2" fill="var(--accent-book)" opacity="0.4"/>
        <rect className="bar r4" x="399.5" y="364.5" width="28" height="49.5" fill="var(--accent-book)" opacity="0.4"/>
        <rect className="bar r5" x="506"   y="359"   width="28" height="55"   fill="var(--accent-book)" opacity="0.4"/>
        <rect className="bar r6" x="612.5" y="367.8" width="28" height="46.2" fill="var(--brass)"    opacity="0.5"/>

        <path className="fig-thin" d="M20 414 h680"/>
        <text className="fig-t" x="360" y="436" textAnchor="middle">alcohol by volume</text>

        <path className="fig-thin" d="M16 452 h688" strokeDasharray="4 4"/>
        <text className="fig-t" x="16" y="474">the two marked are the strongest and the weakest - colour predicted neither</text>
        </svg>
    </Figure>
  );
}
