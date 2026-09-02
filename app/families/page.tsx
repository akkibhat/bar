import type { Metadata } from 'next';
import Link from 'next/link';
import Masthead from '@/components/Masthead';
import FamiliesTable from '@/components/FamiliesTable';

export const metadata: Metadata = {
  title: 'Cocktail families',
  description:
    'The six root structures behind almost every classic, sorted by what holds the drink together rather than by which spirit is in it.',
};

export default function FamiliesPage() {
  return (
    <div className="relative mx-auto max-w-[46rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
      <Masthead
        eyebrow="Reference"
        title="The six families"
        standfirst="Almost every drink in the book is one of six structures wearing different bottles. Learn the six and the list stops needing memorising."
      />

      <FamiliesTable />

      <p className="t-caption max-w-[34rem]" style={{ color: 'var(--ink-soft)' }}>
        Sorted by what holds the drink together rather than by which spirit is
        in it, which is the move that makes them useful: a Negroni and a
        Boulevardier are the same drink, and no ingredient-based sorting will
        ever say so. The framework is the one set out in{' '}
        <em>Cocktail Codex</em>; it was not on the course, and{' '}
        <Link href="/book/the-families" style={{ color: 'var(--accent-book)' }}>
          the chapter
        </Link>{' '}
        goes through how to build with it.
      </p>
    </div>
  );
}
