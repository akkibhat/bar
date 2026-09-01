/**
 * What the site is, in one file.
 *
 * Two halves, who it belongs to, and the handful of switches that change
 * what the site *is* rather than how it looks. Kept together so a
 * question like "what is this half called" or "is progress on" is
 * answered by reading one file instead of grepping the components.
 */

/* ===================================================================== *
 * The halves
 * ===================================================================== */

/**
 * One half of the site.
 *
 * Held as an array rather than a keyed record, because the order matters
 * in three places - the top bar, the front door, and the fold-out - and
 * an array makes that order the data rather than something each of those
 * three has to restate and keep in step.
 *
 * `at` is the route prefix and doubles as the test for which half a path
 * belongs to, so there is no separate table mapping one to the other.
 */
export type Half = {
  id: 'book' | 'shelf';
  /** Route prefix. Also how `halfAt` decides where a path belongs. */
  at: string;
  /** The name, as it is set in the wordmark. */
  name: string;
  /** Plain words, for places where the brand name would be noise. */
  plain: string;
  /**
   * The accent, as a CSS custom property rather than a colour, so
   * recolouring a half is one line here rather than a sweep through the
   * markup.
   *
   * Ink blue and a bitters red: black plus two spot colours, the way a
   * menu of this kind was printed. They sit 136 degrees apart on the
   * wheel, which is the job they are doing - you should know which half
   * you are in before reading a word.
   */
  accent: string;
};

/**
 * Both halves, in the order they are always presented.
 *
 * The names do not follow one pattern, deliberately. `Bar` + `book`
 * gives Barbook at /book, and the address bar spells the name out. The
 * shelf refuses the same trick: `Bar` + `back` is barback, which is a
 * real job behind a bar and a different one, so it inverts to Backbar.
 */
export const HALVES: Half[] = [
  {
    id: 'book',
    at: '/book',
    name: 'Barbook',
    plain: 'The chapters',
    accent: 'var(--accent-book)',
  },
  {
    id: 'shelf',
    at: '/backbar',
    name: 'Backbar',
    plain: 'The shelf',
    accent: 'var(--accent-shelf)',
  },
];

/** The book half. Named rather than indexed, so `HALVES[0]` never appears. */
export const BOOK = HALVES[0];

/** The shelf half. */
export const SHELF_HALF = HALVES[1];

/**
 * Which half a path belongs to.
 *
 * Anything not under the shelf belongs to the book, including the
 * standalone tools and the glossary: those are things you look up while
 * reading rather than part of the shelf, and counting them as shelf
 * would light the wrong name in the top bar while you stood on a page
 * belonging to the book.
 */
export function halfAt(pathname: string): Half {
  return pathname.startsWith(SHELF_HALF.at) ? SHELF_HALF : BOOK;
}

/* ===================================================================== *
 * Switches
 * ===================================================================== */

/**
 * Whether to show the end-of-chapter questions.
 *
 * Off. This is a reference to consult rather than a course to complete,
 * and a quiz at the foot of every chapter changes the character of the
 * thing. The questions are still authored on the chapters that have
 * them, so turning this on is the whole job.
 *
 * Typed as `boolean` rather than left to infer the literal `false`, so
 * the guarded branches do not read as statically dead code.
 */
export const QUIZZES_ENABLED: boolean = false;

/**
 * Whether to track and show reading progress.
 *
 * Off, for the same reason. Progress is a completion mechanic, and a
 * book that counts how much of itself you have finished asks to be
 * finished rather than dipped into - the wrong posture for something you
 * open one-handed while a shaker drips on the counter.
 *
 * Nothing is deleted: the hooks still work, anything already stored
 * under `bar.progress.v1` is left alone, and switching this back on
 * restores that state rather than starting from zero.
 */
export const PROGRESS_ENABLED: boolean = false;

/* ===================================================================== *
 * Provenance
 * ===================================================================== */

/**
 * Whose bar this is.
 *
 * Set into the front door's masthead - "Akki's Bar" across the top above
 * a rule, the way a menu carries the name of the place. The possessive
 * is what lets a personal project put its name up in a display face
 * without reading as a company.
 *
 * It belongs to that masthead alone. Everywhere else the two halves name
 * themselves, and a third name in the row would be noise.
 */
export const OWNER = 'Akki';

/**
 * What the shelf used to be called.
 *
 * The drinks were published under this name on their own site before the
 * two halves were put together here. Bar Assistant still stamps it into
 * every recipe's `source` field, so the pull script reads it to tell my
 * own drinks from anything else in the book, and the shelf wears it as a
 * line of provenance. Retired as a brand, kept as a fact.
 */
export const FORMER_NAME = 'Entre Deux Verres';
