'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Rule from './Rule';
import { FORMER_NAME, OWNER, SECTIONS } from '@/lib/config';
import {
  BOOK_STATE,
  FOOT,
  interpolate,
  LOCKUP,
  pathsFor,
  STEM,
  VIEW_BOX,
} from '@/lib/mark';

/**
 * The landing page's masthead and its two doors.
 *
 * These live in one component because they are one mechanism: the mark
 * drifts slowly between the open book and the closed glass on its own,
 * and the moment the pointer lands on either card the loop yields and the
 * masthead pins to that half. So the mark advertises the system when
 * nobody is doing anything, and becomes a control the instant someone is.
 *
 * The animation runs on refs, not state. A tween at 60fps through
 * useState would re-render the whole subtree every frame for no benefit,
 * since the only things changing are two path strings and four opacities.
 * The DOM is written directly instead.
 *
 * The first frame is the book state, rendered identically on the server,
 * so there is nothing to reconcile on hydration.
 */

/**
 * The masthead mark's rendered height. The lockup's gap and wordmark are
 * both derived from it through `LOCKUP`, so this is the only number to
 * change if the masthead grows.
 */
const MARK = 50;

/* Timings. The hover response is deliberately much faster than the drift
   - it is a reply to something the reader did, and matching it to the
   loop speed makes it feel broken rather than calm. */
const TWEEN = 1100; // travelling between the two states
const DWELL = 2800; // held at each end before drifting back
const GRAB = 420; // hover response
const GRACE = 1000; // stillness after the pointer leaves

export default function FrontDoor() {
  const leftRef = useRef<SVGPathElement>(null);
  const rightRef = useRef<SVGPathElement>(null);
  const spineRef = useRef<SVGRectElement>(null);
  const stemRef = useRef<SVGGElement>(null);
  const bookWordRef = useRef<HTMLSpanElement>(null);
  const shelfWordRef = useRef<HTMLSpanElement>(null);
  const markRef = useRef<SVGSVGElement>(null);

  /* Where the mark is: 0 = open book, 1 = closed glass. A ref rather than
     state because nothing in React's tree depends on it. */
  const at = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let raf = 0;
    let loopTimer: ReturnType<typeof setTimeout> | undefined;
    let graceTimer: ReturnType<typeof setTimeout> | undefined;
    let held = false; // pointer is on a card, the loop yields
    let onscreen = true;
    let target = 0; // where the loop is heading next

    /** Write one interpolated frame straight to the DOM. */
    function paint(t: number) {
      const s = interpolate(t);
      const { left, right } = pathsFor(s);
      leftRef.current?.setAttribute('d', left);
      rightRef.current?.setAttribute('d', right);
      spineRef.current?.setAttribute('opacity', String(s.spine));
      stemRef.current?.setAttribute('opacity', String(s.stem));
      /* The right half is amber in the book and bitters in the glass, so
         it travels between the two accents as the book closes. */
      rightRef.current?.setAttribute(
        'fill',
        t < 0.5 ? 'var(--accent-shelf)' : 'var(--accent-shelf)',
      );
      if (bookWordRef.current) bookWordRef.current.style.opacity = String(1 - t);
      if (shelfWordRef.current) shelfWordRef.current.style.opacity = String(t);
      at.current = t;
    }

    function animateTo(to: number, ms: number, done?: () => void) {
      cancelAnimationFrame(raf);
      if (reduced) {
        paint(to);
        done?.();
        return;
      }
      const from = at.current;
      const t0 = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - t0) / ms);
        paint(from + (to - from) * k);
        if (k < 1) raf = requestAnimationFrame(step);
        else done?.();
      };
      raf = requestAnimationFrame(step);
    }

    /* The loop is suppressed whenever animating would be rude or
       pointless: reduced motion, the reader is pointing at a card, the
       mark is scrolled away, or the tab is in the background. */
    const wanted = () => !reduced && !held && onscreen && !document.hidden;

    function scheduleLoop() {
      clearTimeout(loopTimer);
      if (!wanted()) return;
      loopTimer = setTimeout(() => {
        if (!wanted()) return;
        target = target ? 0 : 1;
        animateTo(target, TWEEN, scheduleLoop);
      }, DWELL);
    }

    function hoverHalf(v: number) {
      held = true;
      clearTimeout(loopTimer);
      clearTimeout(graceTimer);
      animateTo(v, GRAB);
    }

    /* The pause before resuming matters. Without it the mark twitches
       every time the pointer crosses a card on its way somewhere else; a
       beat of stillness lets that read as passing through rather than as
       an instruction. It resumes from wherever the mark actually is, so
       the next move is away from the half just looked at. */
    function release() {
      clearTimeout(graceTimer);
      graceTimer = setTimeout(() => {
        held = false;
        target = at.current > 0.5 ? 1 : 0;
        scheduleLoop();
      }, GRACE);
    }

    const cards = document.querySelectorAll<HTMLElement>('[data-half]');
    const enter = (e: Event) => {
      const half = (e.currentTarget as HTMLElement).dataset.half;
      hoverHalf(half === 'shelf' ? 1 : 0);
    };
    cards.forEach((c) => {
      c.addEventListener('mouseenter', enter);
      c.addEventListener('focusin', enter);
      c.addEventListener('mouseleave', release);
      c.addEventListener('focusout', release);
    });

    const io = new IntersectionObserver(
      (entries) => {
        onscreen = entries[0].isIntersecting;
        if (onscreen) scheduleLoop();
        else clearTimeout(loopTimer);
      },
      { threshold: 0.2 },
    );
    if (markRef.current) io.observe(markRef.current);

    const onVisibility = () =>
      document.hidden ? clearTimeout(loopTimer) : scheduleLoop();
    document.addEventListener('visibilitychange', onVisibility);

    scheduleLoop();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(loopTimer);
      clearTimeout(graceTimer);
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      cards.forEach((c) => {
        c.removeEventListener('mouseenter', enter);
        c.removeEventListener('focusin', enter);
        c.removeEventListener('mouseleave', release);
        c.removeEventListener('focusout', release);
      });
    };
  }, []);

  const first = pathsFor(BOOK_STATE);

  return (
    <>
      {/* ---- Masthead ------------------------------------------- */}
      <header className="flex flex-col items-center text-center mb-10">
        <span
          className="display"
          style={{
            fontSize: 30,
            lineHeight: 1,
            color: 'var(--accent-book)',
            transform: 'rotate(-3deg)',
            marginBottom: -2,
          }}
        >
          {OWNER}&rsquo;s
        </span>

        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: MARK * LOCKUP.gap,
          }}
        >
          <svg
            ref={markRef}
            height={MARK}
            viewBox={VIEW_BOX}
            role="img"
            aria-label="Bar"
            style={{ display: 'block', flex: 'none' }}
          >
            <path ref={leftRef} d={first.left} fill="var(--accent-book)" />
            <path ref={rightRef} d={first.right} fill="var(--accent-shelf)" />
            <rect
              ref={spineRef}
              x={58}
              y={46}
              width={4}
              height={94}
              fill="var(--accent-book)"
            />
            {/* The stem and foot only exist once the book is shut. */}
            <g ref={stemRef} opacity={0} fill="var(--accent-shelf)">
              <rect x={STEM.x} y={STEM.y} width={STEM.w} height={STEM.h} />
              <rect
                x={FOOT.x}
                y={FOOT.y}
                width={FOOT.w}
                height={FOOT.h}
                rx={FOOT.r}
              />
            </g>
          </svg>

          {/* Both names occupy one grid cell, so one fades into the other
              without anything sliding sideways as the widths differ. */}
          <span
            className="wordmark"
            style={{
              fontSize: MARK * LOCKUP.word,
              lineHeight: 1,
              display: 'inline-grid',
            }}
          >
            <span ref={bookWordRef} style={{ gridArea: '1/1' }}>
              Bar<span style={{ color: 'var(--accent-book)' }}>book</span>
            </span>
            <span ref={shelfWordRef} style={{ gridArea: '1/1', opacity: 0 }}>
              <span style={{ color: 'var(--accent-shelf)' }}>Back</span>bar
            </span>
          </span>
        </span>

        <Rule variant="hair" width={220} className="mt-3" />

        <h1 className="t-lead leading-relaxed mt-4 max-w-[34rem]">
          One half is what I was taught. The other is what I have built since.
        </h1>

        <p
          className="t-base mt-2.5 max-w-[34rem]"
          style={{ color: 'var(--ink-soft)' }}
        >
          A mixology course, written up properly, and the drinks that came out
          of it.
        </p>
      </header>

      {/* ---- The two halves --------------------------------------
          Both cards are written in the first person, and neither carries
          a count. A front door that reports how many chapters there are
          is a syllabus, and one that reports how many drinks are on the
          shelf is a dashboard. Both should be an invitation. */}
      <div className="grid gap-4 md:grid-cols-2">
        <Half
          which="book"
          eyebrow="Read"
          blurb="I did a mixology qualification and then went back through the workbook properly, filling in the parts it skipped and the parts I had written down wrong. Beer, balance, and why any of the recipes work."
          lines={[
            'Every bottle on the back bar, and what it is for',
            'The six shapes almost every drink turns out to be',
            'What I still need to check, marked as such',
          ]}
          cta="Start reading"
        />
        <Half
          which="shelf"
          eyebrow="Pour"
          blurb="Drinks I have made up, with the spec written out the way it goes down behind a bar. Some are riffs on a classic and some started as an idea about one ingredient."
          lines={[
            'The full build, in millilitres',
            'What it tastes like and why it is put together that way',
            'Filter by the spirit you actually have',
          ]}
          caveat={`Published as ${FORMER_NAME} until this site put the two halves together.`}
          cta="See the shelf"
        />
      </div>
    </>
  );
}

/**
 * One of the two doors.
 *
 * `data-half` is what the masthead listens for, so the card does not need
 * to know the animation exists.
 */
function Half({
  which,
  eyebrow,
  blurb,
  lines,
  caveat,
  cta,
}: {
  which: 'book' | 'shelf';
  eyebrow: string;
  blurb: string;
  lines: string[];
  /** An admission or a footnote, shown under the bullets. */
  caveat?: string;
  cta: string;
}) {
  const section = SECTIONS[which];

  return (
    <Link
      href={section.href}
      data-half={which}
      className="card px-6 py-6 flex flex-col"
      style={{ ['--accent' as string]: section.accent }}
    >
      <span className="label-ui" style={{ color: 'var(--accent)' }}>
        {eyebrow}
      </span>

      <span className="wordmark block mt-1.5 mb-2" style={{ fontSize: 24 }}>
        {which === 'book' ? (
          <>
            Bar<span style={{ color: 'var(--accent)' }}>book</span>
          </>
        ) : (
          <>
            <span style={{ color: 'var(--accent)' }}>Back</span>bar
          </>
        )}
      </span>
      <Rule variant="hair" width={130} className="mb-4" />

      <span className="t-base leading-relaxed" style={{ color: 'var(--ink)' }}>
        {blurb}
      </span>

      <ul className="mt-4 mb-6 space-y-1.5">
        {lines.map((line) => (
          <li key={line} className="flex items-baseline gap-2.5">
            <span
              className="shrink-0 rounded-full"
              style={{ width: 6, height: 6, background: 'var(--accent)' }}
              aria-hidden="true"
            />
            <span className="t-caption" style={{ color: 'var(--ink-soft)' }}>
              {line}
            </span>
          </li>
        ))}
      </ul>

      {caveat && (
        <span
          className="t-caption italic block -mt-2 mb-5"
          style={{ color: 'var(--ink-faint)' }}
        >
          {caveat}
        </span>
      )}

      {/* Pushed to the bottom so both cards' calls to action line up even
          when the blurbs differ in length. */}
      <span className="label-ui mt-auto" style={{ color: 'var(--accent)' }}>
        {cta} →
      </span>
    </Link>
  );
}
