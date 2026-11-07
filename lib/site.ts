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
 * One half of the site. `at` is the route prefix and doubles as the test
 * for which half a path belongs to.
 */
export type Half = {
  id: 'book' | 'shelf';
  /** Route prefix. */
  at: string;
  /** The name, as it is set in the wordmark. */
  name: string;
  /** Plain words, for places where the brand name would be noise. */
  plain: string;
  /**
   * The accent, as a CSS custom property rather than a colour, so
   * recolouring a half is one line here. Both currently resolve to the
   * same amber (see the palette in globals.css).
   */
  accent: string;
};

/**
 * Both halves, as an array because the order is the order they are always
 * presented in.
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

/* ===================================================================== *
 * Switches
 * ===================================================================== */

/**
 * Whether to track and show reading progress.
 *
 * Off: the book is meant to be dipped into, not completed. The hooks
 * still work and anything stored under `bar.progress.v1` is left alone,
 * so switching this back on restores it.
 */
export const PROGRESS_ENABLED: boolean = false;

/* ===================================================================== *
 * Provenance
 * ===================================================================== */

/** The copyright holder, and the year the site went up. */
export const COPYRIGHT_HOLDER = 'Akki Bhat';
export const COPYRIGHT_FROM = 2026;

/**
 * "2026", or a range like "2026-2029" once a later year arrives. Read at
 * prerender, so the year only moves when the site is rebuilt.
 */
export function copyrightYears(now: number = new Date().getFullYear()): string {
  return now > COPYRIGHT_FROM ? `${COPYRIGHT_FROM}-${now}` : String(COPYRIGHT_FROM);
}

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

/* ===================================================================== *
 * Where the site lives
 * ===================================================================== */

/**
 * The public origin, used to turn the relative URLs in the metadata into
 * absolute ones - canonical links, Open Graph, the sitemap.
 *
 * A constant rather than an environment variable. The domain is a fact
 * about this site rather than something that varies per deployment:
 * there is one origin, the build is fully static, and reading it from
 * the environment only means a wrong value fails silently at build time
 * instead of loudly in review.
 */
export const SITE_ORIGIN = 'https://bar.pi.co.nz';
