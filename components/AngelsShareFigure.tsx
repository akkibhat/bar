import Figure from './Figure';

/**
 * The angels' share, drawn twice over.
 *
 * A 200 litre cask on the left, and the same loss as a twenty-year curve
 * on the right. Two per cent a year compounds, so the curve is 200 x
 * 0.98^n and lands at 134 litres - the arithmetic is the point, because
 * two per cent sounds like nothing until it is drawn.
 *
 * What has gone is hatched rather than washed. Two warm washes over the
 * same whisky colour read as one block, so the loss needs a different
 * texture and not just a different opacity; that is the `#gone` pattern.
 *
 * The reveal animates `.lvl`, `.gap`, `.band` and `.trace` - see the
 * figure block in globals.css. The washes fade with `fill-opacity`
 * rather than `opacity` so the group's own fade has something left to
 * animate.
 */
export default function AngelsShareFigure() {
  return (
    <Figure
      title="The angels’ share"
      caption="Two per cent sounds like nothing, and the drawing is here because the arithmetic is the surprise: it compounds, so twenty years takes about a third of the cask before anyone opens it. The distiller is selling 134 litres of what went in as 200, and has paid to warehouse the difference for two decades."
    >
        <svg id="angels" viewBox="0 0 720 376" role="img"
        aria-label="A 200 litre cask beside a twenty-year curve. Two per cent lost each year compounds to about a third of the cask, leaving roughly 134 litres.">

        <text className="fig-t" x="16" y="24" fill="var(--accent-book)">two per cent a year, compounded</text>
        <text className="fig-t" x="704" y="24" textAnchor="end">a third gone by twenty</text>

        <defs>
        <clipPath id="caskInside">
        <path d="M104 100 H166 C181 122 185 160 185 188 C185 216 181 254 166 276 H104 C89 254 85 216 85 188 C85 160 89 122 104 100 Z"/>
        </clipPath>
        {/* what has gone is drawn as hatch rather than as a second
        flat wash, because two warm washes read as one block */}
        <pattern id="gone" width="9" height="9" patternUnits="userSpaceOnUse">
        <path d="M-1 8 L8 -1 M0 9 L9 0 M1 10 L10 1"
        stroke="var(--brass)" strokeWidth="1" fill="none"/>
        </pattern>
        </defs>

        {/* the cask, and the level inside it */}
        <g clipPath="url(#caskInside)">
        <rect className="lvl" x="78" y="110" width="114" height="166"
        fill="var(--whisky)" opacity="0.45"/>
        <rect className="gap" x="78" y="110" width="114" height="55.3"
        fill="url(#gone)" opacity="0.75"/>
        </g>
        <path className="fig-thin" d="M86 110 H184" strokeDasharray="4 4"/>
        <path className="fig-ink" d="M100 96 H170 C186 120 190 160 190 188 C190 216 186 256 170 280 H100 C84 256 80 216 80 188 C80 160 84 120 100 96 Z"/>
        <path className="fig-thin" d="M87 124 H183 M80 188 H190 M87 252 H183" strokeWidth="3"/>
        <ellipse className="fig-thin" cx="135" cy="96" rx="35" ry="8"/>
        <text className="fig-t" x="135" y="302" textAnchor="middle">one 200 litre cask</text>

        {/* the twenty years, drawn beside it */}
        <g>
        {/* fill-opacity, not opacity, so the group's fade has
        something of its own to animate */}
        <g className="band">
        <path d="M340 110 L357.5 113.4 L375 116.7 L392.5 120 L410 123.2 L427.5 126.3
        L445 129.4 L462.5 132.4 L480 135.4 L497.5 138.3 L515 141.1 L532.5 143.9
        L550 146.6 L567.5 149.3 L585 151.9 L602.5 154.4 L620 157 L637.5 159.4
        L655 161.8 L672.5 164.2 L690 166.5 L690 280 L340 280 Z"
        fill="var(--whisky)" fillOpacity="0.45"/>
        <path d="M340 110 L357.5 113.4 L375 116.7 L392.5 120 L410 123.2 L427.5 126.3
        L445 129.4 L462.5 132.4 L480 135.4 L497.5 138.3 L515 141.1 L532.5 143.9
        L550 146.6 L567.5 149.3 L585 151.9 L602.5 154.4 L620 157 L637.5 159.4
        L655 161.8 L672.5 164.2 L690 166.5 L690 110 Z"
        fill="url(#gone)" fillOpacity="0.8"/>
        </g>
        <path className="fig-accent trace" d="M340 110 L357.5 113.4 L375 116.7 L392.5 120 L410 123.2 L427.5 126.3
        L445 129.4 L462.5 132.4 L480 135.4 L497.5 138.3 L515 141.1 L532.5 143.9
        L550 146.6 L567.5 149.3 L585 151.9 L602.5 154.4 L620 157 L637.5 159.4
        L655 161.8 L672.5 164.2 L690 166.5"/>
        </g>
        <path className="fig-thin" d="M340 110 H690" strokeDasharray="4 4"/>

        <text className="fig-val" x="344" y="104">200 litres</text>
        <text className="fig-t" x="690" y="104" textAnchor="end" fill="var(--brass)">lost to the angels</text>
        <path className="fig-thin" d="M612 110 v26" stroke="var(--brass)" strokeDasharray="3 3"/>
        <text className="fig-val" x="686" y="196" textAnchor="end">134 litres left</text>

        <path className="fig-thin" d="M340 280 H690"/>
        <path className="fig-thin" d="M340 280 v6 M427.5 280 v6 M515 280 v6 M602.5 280 v6 M690 280 v6"/>
        <g className="fig-val" textAnchor="middle">
        <text x="340"   y="302">0</text>
        <text x="427.5" y="302">5</text>
        <text x="515"   y="302">10</text>
        <text x="602.5" y="302">15</text>
        <text x="690"   y="302">20</text>
        </g>
        <text className="fig-t" x="515" y="326" textAnchor="middle">years in the cask</text>

        <path className="fig-thin" d="M16 340 h688" strokeDasharray="4 4"/>
        <text className="fig-t" x="16" y="362">the loss is most of why old whisky costs what it does</text>
        </svg>
    </Figure>
  );
}
