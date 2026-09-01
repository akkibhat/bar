import Link from 'next/link';
import type { Metadata } from 'next';
import Contents from '@/components/Contents';
import Fold from '@/components/Fold';
import SectionTitle from '@/components/SectionTitle';
import {
  CHAPTER_COUNT,
  chaptersWithOpenQuestions,
} from '@/lib/content/course';
import { GLOSSARY } from '@/lib/glossary';
import { SPIRITS } from '@/lib/spirits';
import { FAMILIES } from '@/lib/content/families';

export const metadata: Metadata = {
  title: 'Barbook',
  description:
    'What is behind a bar and what to do with it: spirits, beer, tools, technique, service, and the structures almost every cocktail turns out to be.',
};

/**
 * Barbook: an opening statement, the tools, and the contents.
 *
 * The open-questions count at the foot is the honest version of a
 * progress meter. Reading progress is switched off in `lib/config.ts`
 * because this is a reference rather than a course to complete - but how
 * much of the book is still provisional is a real number and worth
 * printing, because it is what makes the gaps a feature rather than an
 * embarrassment.
 */
export default function BookPage() {
  const open = chaptersWithOpenQuestions().length;

  const tools = [
    {
      href: '/families',
      title: 'Cocktail families',
      body: `The ${FAMILIES.length} structures almost every drink in the book turns out to be.`,
    },
    {
      href: '/ratio',
      title: 'Balance calculator',
      body: 'Put a build in and see which template it is nearest, and how sweet it will read.',
    },
    {
      href: '/dilution',
      title: 'Dilution and ice',
      body: 'What the ice does to the strength, and how much water a batch is missing.',
    },
    {
      href: '/units',
      title: 'Standard drinks',
      body: 'Combined strength and standard drinks for any build.',
    },
    {
      href: '/spirits',
      title: 'Spirit explorer',
      body: `${SPIRITS.length} bottles, filterable by shelf, sortable by how sweet and how loud they run.`,
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
    <div className="mx-auto max-w-[46rem] px-6 sm:px-10 py-12 lg:py-20">
      {/* ---- Masthead -------------------------------------------- */}
      <header className="mb-14">
        <p className="label-ui mb-3">What I was taught, checked</p>

        <SectionTitle section="book" />

        <hr className="rule-double my-6" />

        <p className="t-lead leading-relaxed max-w-[34rem]">
          What is behind a bar, and what to do with it. How every spirit is
          made and what separates one from the next, what beer actually is,
          the seven methods, the glassware, the service - and the handful of
          structures almost every cocktail turns out to be.
        </p>

        <p
          className="t-base mt-4 max-w-[34rem]"
          style={{ color: 'var(--ink-soft)' }}
        >
          Written up from a mixology qualification, with the parts it skipped
          filled in - which turned out to be the parts that made the rest make
          sense. In the order it made sense to learn it, but you can start
          anywhere.
        </p>

        <p
          className="t-base mt-4 max-w-[34rem]"
          style={{ color: 'var(--ink-soft)' }}
        >
          <span className="nums">{CHAPTER_COUNT}</span> chapters, and{' '}
          <span className="nums">{open}</span> of them still carry something I
          need to check or write from my own notes. Those are marked in place
          rather than quietly left out.
        </p>
      </header>

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
      <h2 className="label-ui mb-3" style={{ fontSize: 'var(--t-caption)' }}>
        The book
      </h2>

      <Contents />
    </div>
  );
}
