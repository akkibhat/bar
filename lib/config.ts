/**
 * Site-wide switches.
 *
 * Things that change what the site *is* rather than how it looks, kept in
 * one place so they can be found without grepping the components.
 */

/**
 * Whether to show the end-of-chapter questions.
 *
 * Off. This is a reference to consult rather than a course to complete,
 * and a quiz at the foot of every chapter changes the character of the
 * thing. The questions themselves are authored on the chapters that have
 * them, so turning this on is the whole job.
 *
 * Typed as `boolean` rather than left to infer the literal `false`, so
 * the guarded branches do not read as statically dead code.
 */
export const QUIZZES_ENABLED: boolean = false;

/**
 * Whether to track and show reading progress.
 *
 * Off, for the same reason. Progress is a completion mechanic, and a book
 * that counts how much of itself you have finished asks to be finished
 * rather than dipped into - which is the wrong posture for something you
 * open one-handed while a shaker drips on the counter.
 *
 * Nothing is deleted: `useProgress` still works, anything already stored
 * under `bar.progress.v1` is left alone, and switching this back on
 * restores that state rather than starting from zero.
 */
export const PROGRESS_ENABLED: boolean = false;

/* ===================================================================== *
 * The two halves
 * ===================================================================== */

export type SectionKey = 'book' | 'shelf';

/**
 * Everything that differs between the two halves, in one table.
 *
 * `accent` is a CSS custom property rather than a colour, so a half can
 * be recoloured by editing this line alone. Barbook carries amber - the
 * colour of an aged spirit under a bar light - and Backbar carries
 * bitters red, so you can tell which half you are in before reading a
 * word.
 *
 * The naming follows the wine site's: one root word, a suffix that
 * changes, and routes that spell the wordmark out in the address bar.
 * `Bar` + `book` gives /book. The shelf breaks the pattern on purpose -
 * "Barback" is a real job and a different one, so the shelf is Backbar
 * and lives at /backbar.
 */
export const SECTIONS: Record<
  SectionKey,
  {
    href: string;
    accent: string;
    /** The full name of this half. */
    brand: string;
    /** The plain description, usable where the brand would be noise. */
    label: string;
  }
> = {
  book: {
    href: '/book',
    accent: 'var(--accent-book)',
    brand: 'Barbook',
    label: 'The chapters',
  },
  shelf: {
    href: '/backbar',
    accent: 'var(--accent-shelf)',
    brand: 'Backbar',
    label: 'The shelf',
  },
};

/** The display name of one half. */
export function sectionName(key: SectionKey): string {
  return SECTIONS[key].brand;
}

/**
 * Which half a path belongs to.
 *
 * Only Backbar's own routes count. The tools sit at top level alongside
 * the glossary and wear the book's furniture, because they are things you
 * look up while reading rather than part of the shelf - and counting them
 * as shelf would put the Backbar masthead over a page carrying the book's
 * sidebar, which is the shell contradicting itself.
 */
export function sectionFor(pathname: string): SectionKey {
  return pathname.startsWith('/backbar') ? 'shelf' : 'book';
}

/**
 * Whose bar this is.
 *
 * Rendered as a handwritten kicker above the masthead lockup - a signed
 * name over a printed wordmark, which is what a bookplate is, and the
 * reason a personal project can carry a designed mark without looking
 * like a company.
 *
 * It belongs to the masthead and the about copy only. At favicon and nav
 * sizes it is dropped rather than shrunk, since the mark alone already
 * carries the identity there.
 */
export const OWNER = 'Akki';

/**
 * What Backbar used to be called.
 *
 * The drinks were published under this name on their own site before the
 * two halves were put together here. Bar Assistant still stamps it into
 * every recipe's `source` field, so the pull script reads it to tell my
 * own drinks from anything else in the book, and the shelf wears it as a
 * subtitle. Retired as a brand; kept as provenance.
 */
export const FORMER_NAME = 'Entre Deux Verres';
