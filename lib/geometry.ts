/**
 * The mark's geometry, in one place.
 *
 * Two components draw it: `Logo` renders it statically at every size in
 * the app, and `FrontDoor` animates it between the two states on the
 * landing page. They have to agree exactly, or the masthead would settle
 * on a mark subtly different from the one in the nav - so the shapes live
 * here and neither component owns them.
 *
 * Everything is expressed on a 120x160 grid. What is actually rendered
 * is `VIEW_BOX`, a crop of it crediting each variant equal padding.
 *
 * The two marks are the same shape:
 *
 *   the book    a cocktail glass split down the middle, the halves swung
 *               apart into two leaning pages
 *   the shelf   those halves closed back into the bowl of the glass,
 *               standing on its stem
 *
 * which is why shutting the book *is* the glass, and why the morph needs
 * no path-matching. Both halves keep identical path commands in both
 * states and only their numbers move, so interpolating the mark is
 * arithmetic rather than geometry.
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
 * What actually holds the split together, per tier.
 *
 * The mark is drawn with `height` set and its width left to the aspect
 * ratio, so one user unit is `size / 160`.
 *
 * At small sizes the valley between the pages closes to well under a
 * rendered pixel and the two halves weld into a single triangle, which
 * loses the whole idea. So as the mark shrinks the pages draw further
 * apart and the spine thickens, and at the smallest size the spine is
 * dropped and the split is carried by one wide gap. Each tier's
 * narrowest feature clears one rendered pixel at that tier's lower bound:
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
 * The lockup
 * ===================================================================== */

/**
 * The wordmark's proportions against the mark, as ratios of its rendered
 * height.
 *
 * Ratios rather than fixed sizes, because a lockup has to hold at every
 * size the mark is used at. They live here rather than in either
 * component for the same reason the paths do: both build the lockup, and
 * literals kept in two places drift.
 */
export const LOCKUP = {
  /** Gap between the mark and the word. */
  gap: 0.31,
  /** Wordmark font size. */
  word: 0.78,
} as const;

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
 * One half of the bowl, closed.
 *
 * Written as four points rather than three so it keeps the same command
 * list as the open page below - the third and fourth points coincide at
 * the bowl's point, which draws as a triangle but interpolates as a quad.
 */
export function closedHalf(side: 'left' | 'right'): string {
  const outer = side === 'left' ? LEFT_X : RIGHT_X;
  return `M${outer},${RIM_Y} L${MID},${RIM_Y} L${MID},${POINT_Y} L${MID},${POINT_Y} Z`;
}

/**
 * One page of the open book.
 *
 * The outer edge sits higher than the inner one at the top, which is what
 * makes the pair read as a book rather than as a split triangle: an open
 * book dips into a valley at the spine and rises towards the outer edges.
 *
 * The page deliberately spans nearly the same vertical band as the closed
 * glass - 28 to 140 against the glass's 24 to 144 - so both variants
 * share an optical centre at y=84. An earlier version had the pages
 * sitting between 30 and 104, which left 56 units of dead space under
 * them: centred in a lockup, the book floated well above the wordmark's
 * baseline while the glass sat correctly, so the two variants of the same
 * mark did not agree with each other.
 */
export function openHalf(side: 'left' | 'right', t: Tier): string {
  const dir = side === 'left' ? -1 : 1;
  const outer = MID + dir * (44 + t.spread);
  const inner = MID + dir * t.gap;
  return `M${outer},28 L${inner},46 L${inner},140 L${outer},122 Z`;
}

/**
 * The viewBox both variants are drawn in.
 *
 * Cropped to the artwork rather than left as the full 120x160 grid the
 * geometry is expressed in. Both variants centre on y=84, so a 136-unit
 * window starting at 16 leaves each of them about 8 units of padding top
 * and bottom - which is what lets the lockup align the mark by simple
 * centring instead of a hand-tuned nudge per variant.
 */
export const VIEW_BOX = '0 16 120 136';

/**
 * Where each variant's weight actually sits, as a y in the viewBox.
 *
 * Both variants centre their *ink* on y=84, which is what lets a lockup
 * centre them interchangeably. That is not the same as where they look
 * centred, and the book is the one that differs.
 *
 * An open book's pages rise towards their outer edges - the outer corner
 * starts at y=28 where the inner edge starts at 46 - so the top of its
 * ink box is two thin flares rather than anything solid. The body of the
 * mark is the band between the inner edges, 46 to 140, the same span the
 * spine occupies when it is drawn. Centre the ink box against a line of
 * type and that solid band hangs nine units low.
 *
 * The glass has no flare. It is a standing object whose foot is its base,
 * so its ink centre is its optical centre and the correction is zero.
 */
export const OPTICAL_CENTRE = {
  /** The spine band: the parallel inner edges of the two pages. */
  book: (46 + 140) / 2,
  /** Rim to foot, the whole glass. */
  shelf: (24 + 144) / 2,
} as const;

/** The middle of the viewBox, which is what a plain centring aligns. */
export const VIEW_BOX_CENTRE = 84;

/* ===================================================================== *
 * The morph
 * ===================================================================== */

/**
 * Every state the mark can be in, as numbers.
 *
 * Both halves are rebuilt from these on each frame. Because the path
 * commands are identical in both states there is nothing to match up:
 *
 *   half   M ox,oy  L ix,iy  L ix,by  L ox,oby  Z
 *
 * In the book the halves have swung apart, leaving a valley down the
 * middle and a spine in it. In the glass they meet on the centre line
 * and come to a single point, which closes the book into a bowl.
 */
export type MarkState = {
  /** Outer top corner. */
  ox: number; oy: number;
  /** Inner top corner, at or near the centre line. */
  ix: number; iy: number;
  /** Inner bottom corner. */
  by: number;
  /** Outer bottom corner. */
  obx: number; oby: number;
  /** Spine opacity: present in the book, gone once the book is shut. */
  spine: number;
  /** Stem and foot opacity: absent in the book, standing in the glass. */
  stem: number;
};

/** Matches the `full` tier exactly, so the morph settles on the real mark. */
export const BOOK_STATE: MarkState = {
  ox: 8, oy: 28,
  ix: 57, iy: 46,
  by: 140,
  obx: 8, oby: 122,
  spine: 1, stem: 0,
};

export const GLASS_STATE: MarkState = {
  ox: LEFT_X, oy: RIM_Y,
  ix: MID, iy: RIM_Y,
  by: POINT_Y,
  obx: MID, oby: POINT_Y,
  spine: 0, stem: 1,
};

/**
 * Build both halves from an interpolated state.
 *
 * The right half is the left one mirrored about the centre line, so the
 * morph only ever has to solve for one side.
 */
export function halvesAt(s: MarkState): { left: string; right: string } {
  const mirror = (x: number) => 2 * MID - x;
  return {
    left: `M${s.ox},${s.oy} L${s.ix},${s.iy} L${s.ix},${s.by} L${s.obx},${s.oby} Z`,
    right: `M${mirror(s.ox)},${s.oy} L${mirror(s.ix)},${s.iy} L${mirror(s.ix)},${s.by} L${mirror(s.obx)},${s.oby} Z`,
  };
}

/**
 * Interpolate the whole state.
 *
 * Eased cubic-out: quick to leave, slow to arrive, so the book looks like
 * it is settling shut rather than being snapped.
 */
export function tween(t: number): MarkState {
  const e = 1 - Math.pow(1 - t, 3);
  const out = {} as MarkState;
  (Object.keys(BOOK_STATE) as (keyof MarkState)[]).forEach((k) => {
    /* Rounded, because floating-point results differ in the last bits
       between Node and the browser, and an unrounded path string would
       produce a hydration mismatch on the server-rendered first frame. */
    out[k] =
      Math.round(
        (BOOK_STATE[k] + (GLASS_STATE[k] - BOOK_STATE[k]) * e) * 1000,
      ) / 1000;
  });
  return out;
}
