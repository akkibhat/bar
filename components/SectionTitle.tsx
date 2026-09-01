import Logo from './Logo';
import { SECTIONS, sectionName, type SectionKey } from '@/lib/config';

/**
 * The masthead title on a half's own landing page.
 *
 * The name is set as the wordmark rather than in the hand. Everything
 * else on the site that says Barbook or Backbar already does this - the
 * front door's two cards, the shell's masthead, the section nav - so
 * setting it in Caveat here would render the brand in two different faces
 * depending on where you happened to be standing. The hand keeps every
 * other heading; it is the voice of the writing, and the wordmark is the
 * name of the thing.
 *
 * Two sizes because a lockup cannot reflow: the mark is a fixed height in
 * pixels and the word is sized from it, so at 68px the pair runs wider
 * than a 375px phone has to give it. Hidden by a wrapper rather than a
 * class on the lockup itself, since `Logo` sets its own `display` inline
 * and would win against Tailwind's.
 */
export default function SectionTitle({ section }: { section: SectionKey }) {
  const { accent } = SECTIONS[section];

  /* Both lockups are hidden from assistive technology and the heading
     carries the name itself. `display: none` should keep the off-size one
     out of the accessibility tree on its own, but a screen reader
     announcing the title twice is worse than one that is labelled. */
  return (
    <h1
      className="mb-1"
      aria-label={sectionName(section)}
      /* Both the mark and the wordmark take the half's accent. Without
         this they fall back to the root default, which is the book's
         blue - right for the book by coincidence and wrong for the
         shelf. */
      style={{
        ['--logo-pour' as string]: accent,
        ['--logo-glass' as string]: accent,
        ['--logo-word' as string]: accent,
      }}
    >
      <span className="sm:hidden" aria-hidden="true">
        <Logo size={46} suffix={section} />
      </span>
      <span className="hidden sm:block" aria-hidden="true">
        <Logo size={68} suffix={section} />
      </span>
    </h1>
  );
}
