import Figure from './Figure';

export default function TwistFigure() {
  return (
    <Figure
      title="A twist is squeezed"
      caption="Four beats, because the chapter names four and the one people skip is the second. Dropping the peel in without pinching it wastes the only thing it was for - so the oil is drawn leaving the skin and landing on the surface, and the sheen it leaves stays there for the rest of the sequence."
    >
        <svg id="twist" viewBox="0 0 720 312" role="img"
        aria-label="A citrus peel held skin-side down over a glass, pinched so its oil sprays across the surface, wiped round the rim, then dropped in.">

        {/* the four beats, named */}
        <g className="fig-t">
        <text className="beat b1" x="16"  y="26">1 &nbsp;hold it skin-side down</text>
        <text className="beat b2" x="216" y="26">2 &nbsp;pinch</text>
        <text className="beat b3" x="360" y="26">3 &nbsp;wipe the rim</text>
        <text className="beat b4" x="530" y="26">4 &nbsp;drop it in</text>
        </g>

        {/* a coupe: the wide surface is the point, since that is what
        the oil has to land on */}
        <path className="fig-ink" d="M300 134 C302 172 328 192 360 192 C392 192 418 172 420 134 Z"/>
        <path d="M305 141 C308 172 332 186 360 186 C388 186 412 172 415 141 Z"
        fill="var(--accent-book)" opacity="0.28"/>
        <path className="fig-ink" d="M356 192 v52 h8 v-52"/>
        <path className="fig-ink" d="M330 250 C330 244 390 244 390 250 Z"/>
        <path className="fig-ink" d="M328 250 h64" strokeWidth="2.4"/>

        {/* the sheen the oil leaves on the surface */}
        <path className="sheen" d="M310 140 h100" stroke="var(--brass)" strokeWidth="3"
        strokeLinecap="round" opacity="0"/>

        {/* the oil, sprayed at the pinch */}
        <g className="fig-fill-gold">
        <circle className="oil o1" cx="344" cy="112" r="3.4"/>
        <circle className="oil o2" cx="360" cy="106" r="2.8"/>
        <circle className="oil o3" cx="376" cy="112" r="3.2"/>
        <circle className="oil o4" cx="352" cy="120" r="2.4"/>
        <circle className="oil o5" cx="370" cy="120" r="2.6"/>
        </g>

        {/* the peel: a curl of skin, pith side up */}
        <g className="peel" transform="translate(0 0)">
        <path d="M338 74 c14 -12 34 -12 46 0 c-12 8 -34 8 -46 0 z" fill="var(--brass)"/>
        <path className="fig-thin" d="M340 76 c12 6 32 6 42 0" strokeWidth="1.2"/>
        </g>

        <path className="fig-thin" d="M16 276 h688" strokeDasharray="4 4"/>
        <text className="fig-t" x="16" y="296">the oil is the garnish; the peel is just what carries it</text>
        </svg>
    </Figure>
  );
}
