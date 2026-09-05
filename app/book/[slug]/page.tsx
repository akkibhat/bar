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
 * The header is set the way a menu sets a section: centred, between two
 * rules, part named in small caps above, standfirst in italic below.
 * That is the single biggest thing separating this from an article page,
 * and it is part of why there is no sidebar beside it - a centred heading
 * against a left-anchored column reads as a mistake rather than a choice.
 *
 * The body underneath goes back to left-aligned at a reading measure,
 * because centred prose is unreadable past about two lines and no amount
 * of art direction makes it otherwise.
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
      {/* ---- Header, set as a menu section ---------------------- */}
      <header className="text-center mb-12">
        <hr className="rule-double mb-6" />

        <p className="label-ui mb-4">
          {part && `Part ${part.numeral} · ${part.title}`}
          <span aria-hidden="true"> · </span>
          {`Chapter ${chapter.n}`}
        </p>

        <h1 className="display t-h1 sm:t-display leading-[1.04] mb-4">
          {chapter.title}
        </h1>

        <p
          className="t-lead italic leading-relaxed mx-auto max-w-[30rem]"
          style={{ color: 'var(--ink-soft)' }}
        >
          {chapter.standfirst}
        </p>

        <p className="label-ui mt-5" style={{ color: 'var(--ink-faint)' }}>
          <span className="nums">{chapter.minutes}</span> min
        </p>

        <hr className="rule-hair mt-6" />
      </header>

      {/* ---- Body ------------------------------------------------ */}
      <Typeset body={chapter.body} />

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
