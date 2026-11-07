'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * A drawn plate embedded in a chapter: the SVG children in a frame, a
 * caption, and a Replay control for animated sequences.
 *
 * Motion is CSS, gated on a `run` class that goes on when the plate first
 * scrolls into view, so the sequence starts from the beginning.
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

  /* Restart the animation. The class comes off, then back on two frames
     later, so the browser sees a change and starts again from zero. */
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
