import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  CHAPTERS,
  chaptersIn,
  lookupChapter,
  around,
} from '@/lib/content/book';
import { lookupPart } from '@/lib/content/parts';
import Typeset from '@/components/Typeset';
import Colophon from '@/components/Colophon';
import ChapterKeys from '@/components/ChapterKeys';
import ReadingLine from '@/components/ReadingLine';
import Link from 'next/link';
import Rule from '@/components/Rule';
import { drinksInChapter } from '@/lib/crosslinks';
import { SHELF_HALF } from '@/lib/site';

/** Pre-render every chapter at build time. */
export function generateStaticParams() {
  return CHAPTERS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = lookupChapter(slug);
  if (!chapter) return {};
  return { title: chapter.title, description: chapter.standfirst };
}

/**
 * One chapter.
 *
 * The header hangs the part's roman numeral large in the left margin,
 * the way a printed book's part opener does, with the title and standfirst
 * set left-aligned beside it. It replaces the centred, double-ruled
 * header, which was the same on every one of thirty-seven chapters and
 * said nothing about which part of the book you were in; the numeral now
 * does that, and it changes from part to part.
 *
 * The body underneath is left-aligned at a reading measure, so the title
 * and the prose share an edge.
 *
 * The reading time stays - it is a courtesy, and says what you are in
 * for. The chapter number does not: "Chapter 12" makes each one a
 * scheduled unit of a syllabus rather than something written on a
 * subject.
 */
export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = lookupChapter(slug);
  if (!chapter) notFound();

  const part = lookupPart(chapter.part);
  const siblings = chaptersIn(chapter.part);
  const { prev, next } = around(slug);

  /* The shelf half of the site, for a chapter that has drinks on it. */
  const drinks = drinksInChapter(slug);

  return (
    <article className="mx-auto max-w-[42rem] px-6 sm:px-10 py-12 lg:py-20">
      <ReadingLine />
      <ChapterKeys
        prev={prev && `/book/${prev.slug}`}
        next={next && `/book/${next.slug}`}
      />
      {/* ---- Header --------------------------------------------- */}
      <header className="chapter-head">
        <p className="chapter-head__part" aria-label={part ? `Part ${part.numeral}, ${part.title}` : undefined}>
          <span className="chapter-head__numeral">{part?.numeral}</span>
          <span className="chapter-head__partname">{part?.title}</span>
        </p>

        <div className="chapter-head__main">
          <h1 className="display t-h1 sm:t-display leading-[1.04] mb-4">
            {chapter.title}
          </h1>

          <p
            className="t-lead italic leading-relaxed max-w-[30rem]"
            style={{ color: 'var(--ink-soft)' }}
          >
            {chapter.standfirst}
          </p>

          <p className="t-caption mt-4" style={{ color: 'var(--ink-faint)' }}>
            <span className="nums">{chapter.minutes}</span> min read
          </p>
        </div>
      </header>

      {/* ---- Body ------------------------------------------------ */}
      <Typeset body={chapter.body} chapterNo={chapter.n} />

      {/* ---- On the shelf ---------------------------------------- */}
      {drinks.length > 0 && (
        <section className="no-print mt-14">
          <h2 className="display t-h3 leading-none mb-1">On the shelf</h2>
          <Rule variant="hair" width={140} className="mb-4" />
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5">
            {drinks.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/backbar/${d.slug}`}
                  className="t-base"
                  style={{ color: SHELF_HALF.accent }}
                >
                  {d.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* ---- Footer ---------------------------------------------- */}
      <Colophon
        slug={chapter.slug}
        part={part}
        siblings={siblings}
        prev={prev}
        next={next}
      />
    </article>
  );
}
