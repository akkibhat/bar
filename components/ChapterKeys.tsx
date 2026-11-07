'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Left and right arrow keys move between chapters. Renders nothing.
 *
 * Guarded so it never fires while someone is typing in a search field or
 * number input, where it would steal the key or navigate away mid-edit.
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
    /* Go to the previous or next chapter on a bare arrow key. */
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
