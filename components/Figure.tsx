'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * A drawn plate embedded in a chapter.
 *
 * The drawing itself is SVG passed in as children, set on the page's own
 * tokens so it follows the theme. What this wrapper adds is the frame
 * the other embedded tools use, the caption, and - for the sequences -
 * the run control.
 *
 * Motion is CSS, gated on a `run` class on the plate. The class goes on
 * when the plate first scrolls into view, so a reader arrives at the
 * start of the sequence rather than partway through a loop, and Replay
 * takes it off and puts it back. The two animation frames between are
 * what lets the browser see a change and start again from zero.
 */
export default function Figure({
  title,
  caption,
  animated = false,
  control,
  children,
}: {
  title: string;
  caption?: ReactNode;
  animated?: boolean;
  /** A figure's own control, if it has one - rendered where Replay goes. */
  control?: ReactNode;
  children: ReactNode;
}) {
  const plate = useRef<HTMLDivElement>(null);

  const run = () => {
    const el = plate.current;
    if (!el) return;
    el.classList.remove('run');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => el.classList.add('run'));
    });
  };

  useEffect(() => {
    const el = plate.current;
    if (!animated || !el) return;
    const seen = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run();
          seen.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    seen.observe(el);
    return () => seen.disconnect();
  }, [animated]);

  return (
    <figure className="card my-7 px-5 py-5">
      <p className="label-ui mb-3">{title}</p>
      <div ref={plate} className="figure-plate">
        {children}
      </div>
      {(animated || control) && (
        <div className="mt-3 flex items-center gap-3">
          {animated && (
            <button type="button" className="figure-replay label-ui" onClick={run}>
              Replay
            </button>
          )}
          {control}
        </div>
      )}
      {caption && (
        <figcaption className="t-caption mt-3 max-w-[40rem]" style={{ color: 'var(--ink-soft)' }}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
