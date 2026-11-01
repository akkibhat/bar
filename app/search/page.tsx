import type { Metadata } from 'next';
import Masthead from '@/components/Masthead';
import BookSearch from '@/components/BookSearch';
import { buildSearchIndex, CHAPTER_COUNT } from '@/lib/content/book';

export const metadata: Metadata = {
  title: 'Search',
  description:
    'Find a chapter by its title or by a heading inside it, across the whole book.',
};

export default function SearchPage() {
  return (
    <div className="relative mx-auto max-w-[46rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
      <Masthead
        title="Search"
        standfirst={`Across all ${CHAPTER_COUNT} chapters. Titles, headings, notes and named terms - wherever the book names something.`}
      />
      <BookSearch index={buildSearchIndex()} />
    </div>
  );
}
