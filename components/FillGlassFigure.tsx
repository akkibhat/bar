import Figure from './Figure';

export default function FillGlassFigure() {
  return (
    <Figure
      title="Fill the glass"
      caption="The instinct is that less ice is less water, and it is exactly backwards. The cold comes from the melting, so a few pieces have to absorb the whole drink's heat and are gone inside ten minutes, while a packed glass spreads the same job across enough surface that hardly any of it goes. The chapter calls this the least intuitive thing behind a bar, which is the case for drawing it."
    >
        <svg id="fillglass" viewBox="0 0 720 392" role="img"
        aria-label="Two highballs ten minutes after pouring. The half-filled one has melted through and is warm and watery; the one filled to the top still holds its ice and is barely diluted.">

        <text className="fig-t" x="16" y="24" fill="var(--accent-book)">more ice means less dilution</text>
        <text className="fig-t res" x="704" y="24" textAnchor="end">ten minutes after pouring</text>

        <text className="fig-name" x="170" y="54" textAnchor="middle">Half filled</text>
        <text className="fig-name" x="510" y="54" textAnchor="middle">Filled to the top</text>

        <defs>
        <clipPath id="glassA">
        <path d="M123 76 v187 a8 8 0 0 0 8 8 h74 a8 8 0 0 0 8 -8 v-187 z"/>
        </clipPath>
        <clipPath id="glassB">
        <path d="M463 76 v187 a8 8 0 0 0 8 8 h74 a8 8 0 0 0 8 -8 v-187 z"/>
        </clipPath>
        </defs>

        {/* the half-filled glass: four pieces, and by ten minutes there
        is almost nothing of them left */}
        <g clipPath="url(#glassA)">
        <rect className="lq a-lq" x="123" y="200" width="90" height="71" fill="var(--accent-book)"/>
        <g transform="rotate(-7 147 250)"><rect className="fig-ice cube a-cube" x="128" y="232" width="36" height="36" rx="4"/></g>
        <g transform="rotate(9 187 251)"><rect className="fig-ice cube a-cube" x="170" y="234" width="34" height="34" rx="4"/></g>
        <g transform="rotate(5 156 212)"><rect className="fig-ice cube a-cube" x="138" y="194" width="36" height="36" rx="4"/></g>
        <g transform="rotate(-8 193 215)"><rect className="fig-ice cube a-cube" x="178" y="200" width="30" height="30" rx="4"/></g>
        </g>
        <path className="fig-ink" d="M120 74 v190 a10 10 0 0 0 10 10 h80 a10 10 0 0 0 10 -10 v-190"/>
        {/* where it was poured to, so the gap above the line reads as
        melt rather than as a bigger drink */}
        <path className="fig-thin" d="M123 200 h90 M213 200 h32" strokeDasharray="4 4"/>
        <text className="fig-t" x="250" y="204">poured to here</text>

        {/* filled to the top: nine pieces, and they are still there */}
        <g clipPath="url(#glassB)">
        <rect className="lq b-lq" x="463" y="142" width="90" height="129" fill="var(--accent-book)"/>
        <g transform="rotate(-7 486 250)"><rect className="fig-ice cube b-cube" x="468" y="232" width="36" height="36" rx="4"/></g>
        <g transform="rotate(9 527 251)"><rect className="fig-ice cube b-cube" x="510" y="234" width="34" height="34" rx="4"/></g>
        <g transform="rotate(5 496 214)"><rect className="fig-ice cube b-cube" x="478" y="196" width="36" height="36" rx="4"/></g>
        <g transform="rotate(-8 533 217)"><rect className="fig-ice cube b-cube" x="518" y="202" width="30" height="30" rx="4"/></g>
        <g transform="rotate(8 483 177)"><rect className="fig-ice cube b-cube" x="466" y="160" width="34" height="34" rx="4"/></g>
        <g transform="rotate(-5 524 182)"><rect className="fig-ice cube b-cube" x="506" y="164" width="36" height="36" rx="4"/></g>
        <g transform="rotate(-6 492 142)"><rect className="fig-ice cube b-cube" x="474" y="124" width="36" height="36" rx="4"/></g>
        <g transform="rotate(7 530 146)"><rect className="fig-ice cube b-cube" x="514" y="130" width="32" height="32" rx="4"/></g>
        <g transform="rotate(4 503 109)"><rect className="fig-ice cube b-cube" x="486" y="92" width="34" height="34" rx="4"/></g>
        </g>
        <path className="fig-ink" d="M460 74 v190 a10 10 0 0 0 10 10 h80 a10 10 0 0 0 10 -10 v-190"/>
        <path className="fig-thin" d="M463 142 h90 M553 142 h32" strokeDasharray="4 4"/>
        <text className="fig-t" x="590" y="146">same drink</text>

        {/* the counter both glasses stand on */}
        <path className="fig-thin" d="M40 274 h640"/>

        <text className="fig-t" x="170" y="300" textAnchor="middle">melts fast</text>
        <text className="fig-t" x="510" y="300" textAnchor="middle">melts slow</text>

        <text className="fig-val res" x="170" y="328" textAnchor="middle" fill="var(--brass)">warm and watery</text>
        <text className="fig-val res" x="510" y="328" textAnchor="middle" fill="var(--accent-book)">cold, barely diluted</text>

        <path className="fig-thin" d="M16 352 h688" strokeDasharray="4 4"/>
        <text className="fig-t" x="16" y="374">less ice means each piece takes more heat</text>
        </svg>
    </Figure>
  );
}
