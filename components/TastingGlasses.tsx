import Figure from './Figure';

/**
 * What to taste out of.
 *
 * One rule, drawn four times: the rim has to be narrower than the bowl.
 * The three that pass hold aroma over the surface and deliver it in a
 * column you can meet gradually. A tumbler's sides are straight, so at
 * 40% it sends the whole lot up at once. The dashed marks on the first
 * two make the difference a measurement rather than an impression.
 */
export default function TastingGlasses() {
  return (
    <Figure
      title="What to taste out of"
      caption="The rim has to be narrower than the bowl. Three shapes that do that, and the one that does not."
    >
      <svg
        viewBox="0 0 720 250"
        role="img"
        aria-label="Four glasses compared: copita, small wine glass, snifter and tumbler. The first three narrow towards the rim; the tumbler does not."
      >
        <path d="M20 206 H700" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />

        {/* copita */}
        <g>
          <path className="fig-ink" d="M67 62 C60 74 56 84 58 96 C60 112 72 118 78 128 C84 118 96 112 98 96 C100 84 96 74 89 62 Z" />
          <path d="M59 90 C59 104 64 114 78 124 C92 114 97 104 97 90 Z" fill="var(--accent-book)" opacity="0.15" />
          <path className="fig-ink" d="M78 128 V190 M58 190 H98" />
          <path className="fig-accent" d="M67 62 H89" strokeWidth="2" />
          <path className="fig-thin" d="M58 96 H50 M98 96 H106" strokeDasharray="2 2" />
          <text className="fig-name" x="46" y="228">Copita</text>
        </g>

        {/* small wine glass */}
        <g>
          <path className="fig-ink" d="M205 58 C196 70 191 82 193 96 C195 114 207 121 216 132 C225 121 237 114 239 96 C241 82 236 70 227 58 Z" />
          <path d="M194 88 C194 104 200 116 216 128 C232 116 238 104 238 88 Z" fill="var(--accent-book)" opacity="0.15" />
          <path className="fig-ink" d="M216 132 V190 M196 190 H236" />
          <path className="fig-accent" d="M205 58 H227" strokeWidth="2" />
          <path className="fig-thin" d="M193 96 H185 M239 96 H247" strokeDasharray="2 2" />
          <text className="fig-name" x="180" y="228">Small wine</text>
        </g>

        {/* snifter */}
        <g>
          <path className="fig-ink" d="M356 78 C352 92 342 100 342 116 C342 142 362 156 384 156 C406 156 426 142 426 116 C426 100 416 92 412 78 Z" />
          <path d="M350 100 C348 112 348 118 348 122 C348 142 364 150 384 150 C404 150 420 142 420 122 C420 118 420 112 418 100 Z" fill="var(--accent-book)" opacity="0.15" />
          <path className="fig-ink" d="M384 156 V186 M366 190 H402" />
          <path className="fig-accent" d="M356 78 H412" strokeWidth="2" />
          <text className="fig-name" x="352" y="228">Snifter</text>
        </g>

        {/* tumbler: the one that does not work */}
        <g opacity="0.85">
          <path className="fig-thin" d="M566 92 L572 190 H620 L626 92 Z" strokeDasharray="4 3" />
          <path d="M572 150 L574 184 H618 L620 150 Z" fill="var(--ink-faint)" opacity="0.12" />
          <path d="M566 92 H626" stroke="var(--gold)" strokeWidth="2" fill="none" />
          <text className="fig-name" x="566" y="228" fill="var(--ink-soft)">Tumbler</text>
        </g>

        {/* aroma: held in, or let go */}
        <g className="fig-accent" strokeWidth="1.2" opacity="0.75">
          <path d="M70 52 C74 40 82 40 86 52" />
          <path d="M206 48 C210 36 222 36 226 48" />
          <path d="M366 68 C372 54 396 54 402 68" />
        </g>
        <g stroke="var(--gold)" strokeWidth="1.2" fill="none" opacity="0.9">
          <path d="M572 82 C568 60 562 54 556 40" />
          <path d="M596 82 C596 60 596 52 596 38" />
          <path d="M620 82 C624 60 630 54 636 40" />
        </g>

        <text className="fig-t" x="46" y="244">rim narrower than the bowl</text>
        <text className="fig-t" x="494" y="244" fill="var(--gold)">rim as wide as the bowl</text>
      </svg>
    </Figure>
  );
}
