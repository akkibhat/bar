'use client';

import { useEffect, useRef } from 'react';

/**
 * A hairline across the top of the viewport that fills as you move down
 * a chapter.
 *
 * Written straight to the DOM from a passive scroll listener rather than
 * through state, so scrolling does not re-render React on every frame.
 */
export default function ReadingLine() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;

    /* Set the line's width from the scroll position, once per frame. */
    const paint = () => {
      frame = 0;
      const doc = document.documentElement;
      /* How far the document can actually travel. Zero on a page short
         enough not to scroll, which would otherwise divide by zero and
         leave the bar stuck at full width. */
      const travel = doc.scrollHeight - doc.clientHeight;
      const pct = travel > 0 ? (doc.scrollTop / travel) * 100 : 0;
      el.style.width = `${Math.min(100, Math.max(0, pct))}%`;
    };

    /* Coalesce to one write per frame: scroll fires far more often than
       the screen refreshes, and every extra call is a wasted layout. */
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className="reading-line no-print"
      aria-hidden="true"
      /* Decorative. The same information is in the chapter footer as
         text, so there is nothing here for a screen reader to lose. */
    >
      <div ref={ref} className="reading-line__fill" />
    </div>
  );
}
