import Link from 'next/link';
import { LogoMark } from './Logo';
import { OWNER, SECTIONS } from '@/lib/config';
import { CHAPTER_COUNT } from '@/lib/content/course';
import { SHELF } from '@/lib/backbar';

/**
 * The front door, set as the cover of a menu that is already open.
 *
 * Two full-bleed halves, floor to ceiling, split by a single rule. You
 * are standing in front of a bar choosing which way to look: at the
 * book, or at the shelf. There is no container, no card and no centred
 * masthead - the establishment name rides small over the top, the way it
 * does on a printed menu, and the halves get the whole page.
 *
 * WHAT THIS DELIBERATELY IS NOT
 *
 * The obvious version of this page - a centred lockup, a line saying one
 * half is X and the other is Y, then two cards each carrying an eyebrow,
 * a blurb, three bullets and an arrow - is exactly how the wine site's
 * front door is built. Reaching for it here produced the same page in
 * different fonts, which is the one outcome worth avoiding: these two
 * are siblings in argument, not in appearance.
 *
 * So the bullets, the blurbs and the arrows are gone. Each half gets a
 * label, a name, one sentence and a count. A menu tells you how many
 * things are on it.
 *
 * The animated mark is gone too, and that one was the hardest to give
 * up. It is a good piece of work, and it is also precisely the wine
 * site's landing mechanic: a mark that morphs between its two states as
 * the pointer moves between two cards. Keeping it would have meant
 * keeping the thing most likely to make someone say they had seen this
 * before. Both states still sit on the page, one in each half, static -
 * which says the same thing about them being one shape without
 * borrowing the trick.
 *
 * No client JavaScript. The hover is CSS, so this page ships none of its
 * own.
 */
export default function FrontDoor() {
  const halves = [
    {
      key: 'book' as const,
      label: 'The book',
      name: (
        <>
          Bar<span style={{ color: 'var(--accent)' }}>book</span>
        </>
      ),
      line: 'Spirits, technique and the classics — plus the parts the qualification skipped.',
      count: `${CHAPTER_COUNT} chapters`,
    },
    {
      key: 'shelf' as const,
      label: 'The shelf',
      name: (
        <>
          <span style={{ color: 'var(--accent)' }}>Back</span>bar
        </>
      ),
      line: 'My own, written out the way a spec goes down behind a bar.',
      count: `${SHELF.length} drinks`,
    },
  ];

  return (
    <div className="door-page">
      {/* The masthead. A menu cover carries the name of the place across
          the top in its own band above a rule, and the band is what makes
          it read as a title - set small and floated over the split, the
          same words read as a caption on someone else's page. */}
      <header className="door-mast">
        <h1 className="door-title t-h2 sm:t-h1">{OWNER}&rsquo;s Bar</h1>
        {/* Not "one half is X, the other is Y" - that sentence is the
            wine site's, and reaching for it here was most of why this
            page read as a reskin. This one just says what the place is. */}
        <p className="label-ui mt-3" style={{ color: 'var(--ink-faint)' }}>
          A cocktail course, and the drinks that came out of it
        </p>
      </header>

      <div className="door-split">
        {halves.map((half) => (
          <Link
            key={half.key}
            href={SECTIONS[half.key].href}
            className="door"
            style={{ ['--accent' as string]: SECTIONS[half.key].accent }}
          >
            <span className="door-inner">
              <span
                style={{
                  ['--logo-glass' as string]: 'var(--accent)',
                  ['--logo-pour' as string]: 'var(--accent)',
                }}
              >
                <LogoMark size={34} variant={half.key} decorative />
              </span>

              <span className="label-ui block mt-6 mb-2">{half.label}</span>

              <span className="display block t-h1 sm:t-display leading-none mb-5">
                {half.name}
              </span>

              <span
                className="door-line block t-lead leading-relaxed max-w-[22rem]"
                style={{ color: 'var(--ink-soft)' }}
              >
                {half.line}
              </span>

              <span
                className="label-ui block mt-auto pt-8 nums"
                style={{ color: 'var(--accent)' }}
              >
                {half.count}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
