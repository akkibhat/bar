'use client';

import { usePathname } from 'next/navigation';
import BarNav from './BarNav';
import BookIndex from './BookIndex';
import type { ContentsChapter } from '@/lib/contents';

/**
 * The application shell, in three cases:
 *
 *   /           the front door, bare, with no top bar
 *   /backbar    the top bar only
 *   the rest    the top bar plus the `BookIndex` column in the right
 *               margin (hidden on narrow screens, where the fold-out
 *               covers it)
 */
export default function Shell({
  children,
  contents,
}: {
  children: React.ReactNode;
  contents: ContentsChapter[];
}) {
  const pathname = usePathname();

  if (pathname === '/') return <>{children}</>;

  const withIndex = !pathname.startsWith('/backbar');

  if (!withIndex) {
    return (
      <>
        <BarNav contents={contents} />
        <main className="min-w-0">{children}</main>
      </>
    );
  }

  return (
    <>
      <BarNav contents={contents} />
      <div className="book-layout">
        <BookIndex contents={contents} />
        <main className="min-w-0">{children}</main>
      </div>
    </>
  );
}
