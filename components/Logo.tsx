import {
  closedHalf,
  FOOT,
  LOCKUP,
  openHalf,
  STEM,
  tierFor,
  VIEW_BOX,
} from '@/lib/mark';

/**
 * The mark: a cocktail glass split down the middle, so it reads as both a
 * glass and an open book.
 *
 * The mark is *responsive*, which is the whole trick. Drawn at one fixed
 * geometry it fails below about 20px: the valley between the two pages is
 * 6 units in a 160-unit viewBox, so at 14px it lands on roughly half a
 * pixel and disappears, welding the halves into a plain triangle and
 * losing the book entirely.
 *
 * So there are three tiers. As the mark shrinks the pages lean further
 * apart and the spine thickens, until at the smallest size the spine is
 * dropped and the split is carried by a single wide gap. Each tier is
 * tuned so its narrowest feature stays near or above one rendered pixel.
 *
 * Colours come from theme tokens rather than fixed values, so the mark
 * inverts with the rest of the interface, and the gaps are transparent so
 * it sits on any surface.
 */
export function LogoMark({
  size = 32,
  variant = 'book',
  decorative = false,
  className = '',
}: {
  /** Rendered height in pixels. Drives which tier is used. */
  size?: number;
  /** Which half's mark to draw. */
  variant?: 'book' | 'shelf';
  /**
   * True when the mark sits beside the wordmark. The word is real text,
   * so labelling the drawing as well makes a screen reader announce the
   * name twice.
   */
  decorative?: boolean;
  className?: string;
}) {
  const t = tierFor(size);

  return (
    <svg
      height={size}
      viewBox={VIEW_BOX}
      className={className}
      {...(decorative
        ? { 'aria-hidden': true as const }
        : {
            role: 'img',
            'aria-label': variant === 'shelf' ? 'Backbar' : 'Barbook',
          })}
      style={{ display: 'block', flex: 'none' }}
    >
      {variant === 'shelf' ? (
        /* The book shut: the bowl of a glass standing on its stem. One
           colour, because the split is what the two-tone was for. */
        <>
          <path d={closedHalf('left')} fill="var(--logo-pour)" />
          <path d={closedHalf('right')} fill="var(--logo-pour)" />
          <rect
            x={STEM.x}
            y={STEM.y}
            width={STEM.w}
            height={STEM.h}
            fill="var(--logo-pour)"
          />
          <rect
            x={FOOT.x}
            y={FOOT.y}
            width={FOOT.w}
            height={FOOT.h}
            rx={FOOT.r}
            fill="var(--logo-pour)"
          />
        </>
      ) : (
        /* The book open: two pages leaning away from a spine. Two-tone,
           so the halves stay tellable apart where they nearly meet. */
        <>
          <path d={openHalf('left', t)} fill="var(--logo-glass)" />
          <path d={openHalf('right', t)} fill="var(--logo-pour)" />
          {t.spine > 0 && (
            <rect
              x={60 - t.spine / 2}
              y={46}
              width={t.spine}
              height={94}
              fill="var(--logo-glass)"
            />
          )}
        </>
      )}
    </svg>
  );
}

/**
 * The mark locked up with the wordmark.
 *
 * The suffix takes the accent colour, so the word acts as a key to the
 * drawing: the dark half is the root word, the coloured half is the
 * suffix. And because the accent differs per section, the same lockup
 * says which half of the site you are in twice over - by the word and by
 * the colour.
 *
 * The two halves do not share a suffix pattern the way the wine site's
 * do. `Bar` + `book` works; `Bar` + `back` would spell barback, which is
 * a real job behind a bar and a different one. So the shelf's word is
 * built the other way round - `Back` + `bar` - and the accent lands on
 * the root rather than the suffix.
 */
export default function Logo({
  size = 32,
  wordmark = true,
  suffix = 'book',
  className = '',
}: {
  size?: number;
  wordmark?: boolean;
  /** Which half of the site this lockup names. */
  suffix?: 'book' | 'shelf';
  className?: string;
}) {
  if (!wordmark)
    return <LogoMark size={size} variant={suffix} className={className} />;

  /**
   * The wordmark is sized from the mark, and the gap with it likewise.
   * That is deliberate: this is a lockup, so its proportions have to hold
   * at any size the mark is used at. The two ratios come from `LOCKUP` in
   * lib/mark.ts, so the masthead - which builds its own lockup for the
   * morph - cannot drift from this one. Snapping the text to a scale step
   * would break the relationship the moment the mark changed size. It is
   * the one sanctioned exception to the type scale.
   */
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size * LOCKUP.gap,
      }}
    >
      <LogoMark size={size} variant={suffix} decorative />
      <span
        className="wordmark"
        style={{ fontSize: size * LOCKUP.word, lineHeight: 1 }}
      >
        {suffix === 'shelf' ? (
          <>
            <span style={{ color: 'var(--logo-word)' }}>Back</span>bar
          </>
        ) : (
          <>
            Bar<span style={{ color: 'var(--logo-word)' }}>book</span>
          </>
        )}
      </span>
    </span>
  );
}
