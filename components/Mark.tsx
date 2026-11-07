import {
  closedHalf,
  FOOT,
  openHalf,
  STEM,
  tierAt,
  VIEW_BOX,
} from '@/lib/geometry';

/**
 * The way home, drawn as a door: flat strokes in `currentColor` so it
 * takes the nav's state colour. A word here would read as a third section.
 */
export function HomeMark({
  size = 22,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* the frame */}
      <path d="M5 21V8.6L12 3l7 5.6V21" strokeLinejoin="miter" />
      {/* the threshold */}
      <path d="M3.5 21h17" strokeLinecap="butt" />
      {/* the door itself, and its handle */}
      <path d="M9.6 21v-7.2h4.8V21" strokeLinejoin="miter" />
      <path d="M13.1 17.4h.01" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

/**
 * The mark: a cocktail glass split down the middle, so it reads as both a
 * glass and an open book (Barbook), or closed onto its stem (Backbar).
 *
 * At one fixed geometry the split welds shut below about 20px, so the
 * geometry comes in three size tiers (see `TIERS` in lib/geometry.ts).
 * Colours come from theme tokens, so the mark follows the theme.
 */
export function GlassMark({
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
  const t = tierAt(size);

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
