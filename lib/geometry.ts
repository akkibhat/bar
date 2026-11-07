/**
 * The mark's geometry, drawn by `GlassMark` in components/Mark.tsx.
 *
 * Everything is on a 120x160 grid; `VIEW_BOX` is the crop that is
 * rendered. The two marks are the same shape: the book is a cocktail glass
 * split down the middle with the halves swung apart into leaning pages,
 * and the shelf is those halves closed back into the bowl on its stem.
 * Both halves keep the same path commands in both states.
 */

/* ===================================================================== *
 * Size tiers
 * ===================================================================== */

/** Geometry for one size tier. */
export type Tier = {
  /** How far the two halves lean apart at the top, in user units. */
  spread: number;
  /** Half-width of the valley between the pages. */
  gap: number;
  /** Spine width; 0 drops the spine entirely. */
  spine: number;
};

/**
 * The split's geometry per size tier.
 *
 * At small sizes the valley between the pages closes under a pixel and
 * the halves weld into a triangle, so as the mark shrinks the pages lean
 * further apart and the spine thickens, until the smallest tier drops the
 * spine for one wide gap. Narrowest feature at each tier's lower bound:
 *
 *   micro     10-unit gap   @ 12px  =  0.75px  spine dropped, gap widened
 *   compact    7-unit spine @ 20px  =  0.88px
 *   full       4-unit spine @ 40px  =  1.00px
 */
export const TIERS: Record<'full' | 'compact' | 'micro', Tier> = {
  full: { spread: 8, gap: 3, spine: 4 },
  compact: { spread: 10, gap: 5, spine: 7 },
  micro: { spread: 12, gap: 9, spine: 0 },
};

/** Pick a tier from the rendered height. */
export function tierAt(size: number): Tier {
  if (size < 20) return TIERS.micro;
  if (size < 40) return TIERS.compact;
  return TIERS.full;
}

/* ===================================================================== *
 * The glass
 * ===================================================================== */

/** Where the bowl's rim sits, and where it comes to a point. */
const RIM_Y = 24;
const POINT_Y = 94;
const LEFT_X = 16;
const RIGHT_X = 104;
const MID = 60;

/** The stem and foot, drawn only when the book is shut. */
export const STEM = { x: 56.5, y: POINT_Y, w: 7, h: 42 };
export const FOOT = { x: 34, y: 136, w: 52, h: 8, r: 3 };

/**
 * One half of the bowl, closed. Four points, the last two coinciding at
 * the bowl's point, so it has the same command list as an open page.
 */
export function closedHalf(side: 'left' | 'right'): string {
  const outer = side === 'left' ? LEFT_X : RIGHT_X;
  return `M${outer},${RIM_Y} L${MID},${RIM_Y} L${MID},${POINT_Y} L${MID},${POINT_Y} Z`;
}

/**
 * One page of the open book.
 *
 * The outer edge sits higher than the inner one at the top, so the pair
 * reads as a book rather than a split triangle. The page spans nearly the
 * same band as the closed glass (28 to 140 against 24 to 144), so both
 * variants centre on y=84.
 */
export function openHalf(side: 'left' | 'right', t: Tier): string {
  const dir = side === 'left' ? -1 : 1;
  const outer = MID + dir * (44 + t.spread);
  const inner = MID + dir * t.gap;
  return `M${outer},28 L${inner},46 L${inner},140 L${outer},122 Z`;
}

/**
 * The viewBox both variants are drawn in: a 136-unit crop of the grid
 * starting at 16, which leaves each variant (centred on y=84) about 8
 * units of padding top and bottom, so either can be centred the same way.
 */
export const VIEW_BOX = '0 16 120 136';
