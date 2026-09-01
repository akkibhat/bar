import Link from 'next/link';
import type { Metadata } from 'next';
import Rule from '@/components/Rule';
import SectionTitle from '@/components/SectionTitle';
import BackbarGrid from '@/components/BackbarGrid';
import { FORMER_NAME, SECTIONS, sectionName } from '@/lib/config';
import { PULLED_AT, SHELF } from '@/lib/backbar';

export const metadata: Metadata = {
  title: sectionName('shelf'),
  description:
    'Cocktails I have made up, with the full build in millilitres and a note on why each one is put together the way it is.',
};

/**
 * Backbar: the drinks, and the whole page.
 *
 * There is no landing above this one. The shelf holds one kind of thing,
 * so an index page pointing at a list would be a hop with nothing to
 * choose between - and it would put the drinks two clicks from the nav
 * instead of one.
 *
 * The page carries the shelf's accent as a local custom property, taken
 * from the section table, so recolouring this half is a one-line edit in
 * `lib/config.ts` rather than a sweep through the markup.
 */
export default function BackbarPage() {
  return (
    <div
      className="relative mx-auto max-w-[52rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16"
      style={{ ['--accent' as string]: SECTIONS.shelf.accent }}
    >

      {/* ---- Masthead -------------------------------------------- */}
      <header className="mb-8">
        <p className="label-ui mb-3" style={{ color: 'var(--accent)' }}>
          My own, and how they are built
        </p>

        <SectionTitle section="shelf" />
        <Rule variant="double" className="mt-3" />

        <p className="t-lead leading-relaxed mt-6 max-w-[34rem]">
          {SHELF.length} drinks I have made up, with the spec written out the
          way it goes down behind a bar. Some are riffs on a classic and some
          started as an idea about one ingredient.
        </p>

        <p
          className="t-base mt-4 max-w-[34rem]"
          style={{ color: 'var(--ink-soft)' }}
        >
          Published as <em>{FORMER_NAME}</em> until this site put the two
          halves together. Same drinks, same specs, one address.
        </p>
      </header>

      <BackbarGrid />

      <p className="t-caption mt-8" style={{ color: 'var(--ink-faint)' }}>
        Last pulled{' '}
        <span className="nums">
          {new Date(PULLED_AT).toLocaleDateString('en-NZ', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </span>
      </p>

      {/* ---- Cross-link ------------------------------------------ */}
      <p className="t-caption mt-10" style={{ color: 'var(--ink-soft)' }}>
        Not sure why any of these are put together the way they are?{' '}
        <Link href="/book" className="underline">
          {/* The other half is named, and a name is set in the wordmark.
              Size and ink are inherited so it sits inside this sentence
              rather than standing away from it. */}
          <span
            className="wordmark"
            style={{ fontSize: 'inherit', color: 'inherit' }}
          >
            Bar<span style={{ color: SECTIONS.book.accent }}>book</span>
          </span>
        </Link>{' '}
        covers the structures, the ratios and what every bottle is for.
      </p>
    </div>
  );
}
