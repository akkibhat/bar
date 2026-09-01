'use client';

import { usePathname } from 'next/navigation';
import BarNav from './BarNav';
import BookIndex from './BookIndex';

/**
 * The application shell.
 *
 * Three cases, and the interesting one is the middle.
 *
 * The front door renders completely bare: it is the one route whose job
 * is to show that there are two halves, and wrapping it in the navigation
 * for one of them would answer the question before it was asked.
 *
 * Book pages carry the index column, because the contents has to be
 * reachable without a click. That is a persistent column, which is the
 * furniture the wine site is most recognisable for - so it is set as a
 * printed index on the same paper rather than as a sunk panel, and it
 * sits in the right margin. On the left it reads as navigation, which is
 * exactly the association worth avoiding; on the right the same column
 * reads as an index or a set of sidenotes. It is not rendered below the
 * breakpoint at all, where the fold-out covers it.
 *
 * Backbar gets neither. The shelf is one page with its own filters, and
 * a book's contents beside it would be navigation for somewhere else.
 */
export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/') return <>{children}</>;

  const withIndex = !pathname.startsWith('/backbar');

  if (!withIndex) {
    return (
      <>
        <BarNav />
        <main className="min-w-0">{children}</main>
      </>
    );
  }

  return (
    <>
      <BarNav />
      <div className="book-layout">
        <BookIndex />
        <main className="min-w-0">{children}</main>
      </div>
    </>
  );
}
