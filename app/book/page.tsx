import Link from 'next/link';
import type { Metadata } from 'next';
import RunningOrder from '@/components/RunningOrder';
import Fold from '@/components/Fold';
import PageHead from '@/components/PageHead';
import {
  buildContents,
  CHAPTER_COUNT,
  chaptersStillOpen,
} from '@/lib/content/book';
import { GLOSSARY } from '@/lib/glossary';
import { SPIRITS } from '@/lib/spirits';
import { FAMILIES } from '@/lib/content/families';

export const metadata: Metadata = {
  title: 'Barbook',
  description:
    'What is behind a bar and what to do with it: spirits, beer, tools, technique, service, and the six structures most cocktails are built on.',
};

/**
 * Barbook: an opening statement, the tools, and the contents.
 *
 * The open-questions count was the honest version of a progress meter
 * while chapters still carried unresolved notes. They have all been
 * closed, so the sentence only appears while there is a number worth
 * printing - saying "0 of them" would be a progress bar at full, which
 * is the opposite of what it was for.
 */
export default function BookPage() {
  const open = chaptersStillOpen().length;

  const tools = [
    {
      href: '/search',
      title: 'Search the book',
      body: 'Find a chapter by its title, or by a heading inside it.',
    },
    {
      href: '/families',
      title: 'Cocktail families',
      body: `The ${FAMILIES.length} structures behind almost every drink in the book.`,
    },
    {
      href: '/ratio',
      title: 'Balance calculator',
      body: 'Put a build in and see which template it is nearest, and how sweet it will read.',
    },
    {
      href: '/dilution',
      title: 'Strength and dilution',
      body: 'What the ice does to the strength, how much water a batch is missing, and how many standard drinks are in the glass.',
    },
    {
      href: '/spirits',
      title: 'Spirit explorer',
      body: `${SPIRITS.length} bottles, filterable by shelf, sortable by sweetness and intensity.`,
    },
    {
      href: '/glassware',
      title: 'Glassware',
      body: 'Which glass, filtered by how the drink is served.',
    },
    {
      href: '/glossary',
      title: 'Glossary',
      body: `${GLOSSARY.length} terms, searchable by what a thing does as well as what it is called.`,
    },
  ];

  return (
    <>
      <PageHead
        title={
          <>
            Bar<span>book</span>
          </>
        }
      >
        <p className="page-head__lead">
          What is behind a bar, and what to do with it. How every spirit is
          made, what beer is, the seven methods, the glassware, the service,
          and the six structures most cocktails are built on.
        </p>
        <p className="page-head__sub">
          Written up from a mixology qualification and four years working in
          hospitality. In reading order, but you can start anywhere.{' '}
          <span className="nums">{CHAPTER_COUNT}</span> chapters.
          {open > 0 && (
            <>
              {' '}
              <span className="nums">{open}</span> of them still carry something
              I need to check or write up from my own notes, marked where they
              sit.
            </>
          )}
        </p>
      </PageHead>

      <div className="mx-auto max-w-[46rem] px-6 sm:px-10 pb-12 lg:pb-20">
      {/* ---- Behind the bar --------------------------------------
          Folded shut by default. Someone arriving at the contents is
          looking for a chapter, and seven tools with a line of
          description each pushed the book itself below the fold.

          Ruled rows rather than a grid of boxes, matching the contents
          under it and the spec sheets throughout. */}
      <section className="mb-14">
        <Fold
          label="Behind the bar"
          hint={`${tools.length} calculators and references`}
        >
          <p
            className="t-base mb-4 max-w-[34rem]"
            style={{ color: 'var(--ink-soft)' }}
          >
            For working something out rather than reading about it. Each one
            also sits inside the chapter it belongs to, so there is no need to
            come here first.
          </p>

          <ul>
            {tools.map((t) => (
              <li key={t.href}>
                <Link
                  href={t.href}
                  className="block py-3"
                  style={{
                    borderBottom: '1px solid var(--rule)',
                    textDecoration: 'none',
                  }}
                >
                  <span className="display t-h3 leading-none block mb-1">
                    {t.title}
                  </span>
                  <span
                    className="t-caption"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    {t.body}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Fold>
      </section>

      {/* ---- Contents -------------------------------------------- */}
      <h2 className="sr-only">The book</h2>

      <RunningOrder contents={buildContents()} />
      </div>
    </>
  );
}
