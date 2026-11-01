import Link from 'next/link';
import { GlassMark } from './Mark';
import { OWNER, HALVES } from '@/lib/site';
import { CHAPTER_COUNT, chaptersIn } from '@/lib/content/book';
import { PARTS } from '@/lib/content/parts';
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
export default function Cover() {
  /* The landing copy, keyed to the shared half record so the route, the
     name and the accent all still come from one place. */
  const copy = {
    book: {
      label: 'The book',
      name: (
        <>
          Bar<span style={{ color: 'var(--accent)' }}>book</span>
        </>
      ),
      line: 'Everything behind a bar - spirits, beer, tools, technique - and how to build a drink out of it.',
      count: `${CHAPTER_COUNT} chapters`,
    },
    shelf: {
      label: 'The shelf',
      name: (
        <>
          <span style={{ color: 'var(--accent)' }}>Back</span>bar
        </>
      ),
      /* "What I was after" is a promise the data only half keeps: the
         only free-text field the snapshot carries is Bar Assistant's
         `description`, and most of those are flavour summaries rather
         than intent. See ROADMAP - it is a writing job in Bar Assistant,
         not a code one. */
      line: 'My own creations, with the measures, the method, and what I was after.',
      count: `${SHELF.length} drinks`,
    },
  } as const;

  /* What is inside each half, as a printed contents list: the book by
     part with its chapter count, the shelf by drink with its volume. They
     sit inside the door's own link, so they are text rather than links of
     their own - the half is the target, and the list says what is behind
     it. Both read straight from the same data the inner pages use, so the
     front door can never describe something that is not there. */
  const inside = {
    book: PARTS.map((p) => ({
      key: p.slug,
      name: `${p.numeral}  ${p.title}`,
      amount: `${chaptersIn(p.slug).length}`,
    })),
    shelf: SHELF.map((d) => ({
      key: d.slug,
      name: d.name,
      amount: d.volumeMl ? `${Math.round(d.volumeMl)} ml` : '',
    })),
  } as const;

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
            page read as a reskin. This one just says what the place is,
            and says "a bar" rather than "a cocktail course", because the
            book covers the whole of what is behind one. */}
        <p
          className="label-ui mt-3 mx-auto max-w-[30rem]"
          style={{ color: 'var(--ink-faint)' }}
        >
          Learning how a bar works, and the drinks that came out of it
        </p>
      </header>

      <div className="door-split">
        {HALVES.map((half) => (
          <Link
            key={half.id}
            href={half.at}
            className="door"
            style={{ ['--accent' as string]: half.accent }}
          >
            <span className="door-inner">
              <span
                style={{
                  ['--logo-glass' as string]: 'var(--accent)',
                  ['--logo-pour' as string]: 'var(--accent)',
                }}
              >
                <GlassMark size={34} variant={half.id} decorative />
              </span>

              <span className="label-ui block mt-6 mb-2">{copy[half.id].label}</span>

              <span className="display block t-h1 sm:t-display leading-none mb-5">
                {copy[half.id].name}
              </span>

              <span
                className="door-line block t-lead leading-relaxed max-w-[22rem]"
                style={{ color: 'var(--ink-soft)' }}
              >
                {copy[half.id].line}
              </span>

              <span className="label-ui block mt-8 mb-1" style={{ color: 'var(--ink-faint)' }}>
                {half.id === 'book' ? 'Parts, and chapters in each' : 'On the shelf, and what it makes'}
              </span>
              <span className="spec door-contents" role="list">
                {inside[half.id].map((row) => (
                  <span className="spec__line" role="listitem" key={row.key}>
                    <span className="spec__name">{row.name}</span>
                    <span className="spec__leader" aria-hidden="true" />
                    <span className="spec__amount">{row.amount}</span>
                  </span>
                ))}
              </span>

              <span
                className="label-ui block mt-auto pt-8 nums"
                style={{ color: 'var(--accent)' }}
              >
                {copy[half.id].count}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
