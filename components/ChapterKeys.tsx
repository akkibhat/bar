'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Left and right arrow keys move between chapters.
 *
 * Invisible, and the point of it: someone reading straight through
 * should not have to reach for the pointer 37 times. It costs no chrome,
 * which is what makes it worth having on a site that has deliberately
 * given up its sidebar.
 *
 * Guarded so it cannot fire while someone is typing. Several pages carry
 * search fields and number inputs, and swallowing an arrow key inside one
 * of those - or worse, navigating away mid-edit - is the classic way this
 * pattern goes wrong.
 */
export default function ChapterKeys({
  prev,
  next,
}: {
  prev?: string;
  next?: string;
}) {
  const router = useRouter();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

      /* Never steal the key from a modifier combination - those belong to
         the browser (back/forward) and to the operating system. */
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      const el = document.activeElement as HTMLElement | null;
      if (el) {
        const tag = el.tagName;
        if (
          tag === 'INPUT' ||
          tag === 'TEXTAREA' ||
          tag === 'SELECT' ||
          el.isContentEditable
        ) {
          return;
        }
      }

      const to = e.key === 'ArrowLeft' ? prev : next;
      if (!to) return;
      e.preventDefault();
      router.push(to);
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [prev, next, router]);

  return null;
}
