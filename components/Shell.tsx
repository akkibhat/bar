'use client';

import { usePathname } from 'next/navigation';
import BarNav from './BarNav';

/**
 * The application shell.
 *
 * Deliberately almost nothing. The wine site wraps every page in a
 * persistent sidebar carrying its whole contents; this one puts the
 * contents behind a fold-out in the top bar and gives the page the full
 * width, because a menu is not read with an index open beside it.
 *
 * What is left is one decision: the front door renders completely bare.
 * It is the one route whose job is to show that there are two halves,
 * and wrapping it in the navigation for one of them would answer the
 * question before it was asked.
 */
export default function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === '/') return <>{children}</>;

  return (
    <>
      <BarNav />
      <main className="min-w-0">{children}</main>
    </>
  );
}
