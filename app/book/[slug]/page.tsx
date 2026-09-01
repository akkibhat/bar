import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  CHAPTERS,
  chaptersInPart,
  findChapter,
  neighbours,
} from '@/lib/content/course';
import { findPart } from '@/lib/content/parts';
import ChapterBody from '@/components/ChapterBody';
import ChapterFooter from '@/components/ChapterFooter';
import ChapterKeys from '@/components/ChapterKeys';
import ReadingLine from '@/components/ReadingLine';

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
  const chapter = findChapter(slug);
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
  const chapter = findChapter(slug);
  if (!chapter) notFound();

  const part = findPart(chapter.part);
  const siblings = chaptersInPart(chapter.part);
  const { prev, next } = neighbours(slug);

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
      <ChapterBody body={chapter.body} />

      {/* ---- Footer ---------------------------------------------- */}
      <ChapterFooter
        slug={chapter.slug}
        part={part}
        siblings={siblings}
        prev={prev}
        next={next}
      />
    </article>
  );
}
