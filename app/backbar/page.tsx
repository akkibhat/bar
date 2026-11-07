import Link from 'next/link';
import type { Metadata } from 'next';
import PageHead from '@/components/PageHead';
import BackbarGrid from '@/components/BackbarGrid';
import { BOOK, FORMER_NAME, SHELF_HALF } from '@/lib/site';
import { IBA_JOIN, IBA_PULLED_AT, PULLED_AT, SHELF } from '@/lib/backbar';

/** Both snapshots carry a date, and both dates are said on the page. */
const asDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-NZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

export const metadata: Metadata = {
  title: SHELF_HALF.name,
  description:
    'Cocktails I have made up, with the full build in millilitres and a note on why each one is put together the way it is - and the official IBA list on the same shelf, with a spec for the ones the book covers.',
};

/**
 * Backbar: the whole shelf on one page, with no landing above it.
 *
 * The shelf's accent is set as a local custom property from `lib/site.ts`,
 * so recolouring this half is a one-line edit there.
 */
export default function BackbarPage() {
  return (
    <>
      <PageHead
        title={
          <>
            Back<span>bar</span>
          </>
        }
      >
        <p className="page-head__lead">
          My own creations - {SHELF.length} of them - with the full build in
          millilitres, the method as steps, and a note on why each one is put
          together the way it is.
        </p>
        <p className="page-head__sub">
          Some are riffs on a classic; some started as an idea about one
          ingredient. Behind the switch, the whole official IBA list, sorted
          onto the IBA&rsquo;s own three. The {IBA_JOIN.written} the book
          writes up carry their spec here; the rest are a name and a link out,
          since those recipes are theirs. Published as <em>{FORMER_NAME}</em>{' '}
          until this site put the two halves together.
        </p>
      </PageHead>

      <div
        className="relative mx-auto max-w-[52rem] px-6 sm:px-10 lg:px-12 pb-12 lg:pb-16"
        style={{ ['--accent' as string]: SHELF_HALF.accent }}
      >
      <BackbarGrid />

      <p className="t-caption mt-8" style={{ color: 'var(--ink-faint)' }}>
        Mine last pulled <span className="nums">{asDate(PULLED_AT)}</span>, the
        IBA list <span className="nums">{asDate(IBA_PULLED_AT)}</span>
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
            Bar<span style={{ color: BOOK.accent }}>book</span>
          </span>
        </Link>{' '}
        covers the structures, the ratios and what every bottle is for.
      </p>
      </div>
    </>
  );
}
