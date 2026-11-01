import MeasureDoor, { type DoorDrink, type DoorPart } from '@/components/MeasureDoor';
import { SHELF } from '@/lib/backbar';
import { CHAPTER_COUNT, chaptersIn } from '@/lib/content/book';
import { PARTS } from '@/lib/content/parts';
import { GLASSES } from '@/lib/glassware';
import { COPYRIGHT_HOLDER, copyrightYears } from '@/lib/site';

/**
 * The front door.
 *
 * Deliberately not the contents page - that lives at /book. This page has
 * one job: show that there are two halves and let you pick one. The book
 * is a thing you read; the shelf is a thing you pour from. Landing
 * straight in the contents would make the second half invisible.
 *
 * It renders without the top bar. `Shell` checks for this route and steps
 * out of the way, because a front door wrapped in one half's own
 * navigation is not a front door. It carries its own small header, and no
 * theme switch: the front door has one fixed palette.
 *
 * Everything on it is read from the same data the inner pages use - the
 * shelf's drinks and specs, the book's parts and chapters, the glasses and
 * what they hold - so it cannot describe a drink or a part that is not
 * there.
 */

/** The glass a drink is served in, as the slug the glass drawings use. */
const GLASS_SLUG: Record<string, string> = {
  Cocktail: 'martini',
  Coupe: 'coupe',
  Highball: 'highball',
};

export default function Home() {
  const drinks: DoorDrink[] = SHELF.map((d) => {
    const slug = GLASS_SLUG[d.glass ?? ''] ?? 'coupe';
    const glass = GLASSES.find((g) => g.slug === slug);
    return {
      slug: d.slug,
      name: d.name,
      glass: slug,
      glassName: d.glass ?? 'Coupe',
      method: d.method ?? '',
      ml: d.volumeMl ?? 0,
      capacity: glass ? (glass.holds[0] + glass.holds[1]) / 2 : 180,
      spec: d.spec.map((s) => ({ name: s.name, amount: s.amount })),
    };
  });

  const parts: DoorPart[] = PARTS.map((p) => {
    const chapters = chaptersIn(p.slug);
    return {
      numeral: p.numeral,
      title: p.title,
      count: chapters.length,
      href: chapters[0] ? `/book/${chapters[0].slug}` : '/book',
    };
  });

  return (
    <MeasureDoor
      drinks={drinks}
      parts={parts}
      chapterCount={CHAPTER_COUNT}
      copyright={`© ${copyrightYears()} ${COPYRIGHT_HOLDER}`}
    />
  );
}
