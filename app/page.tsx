import MeasureDoor, { type DoorDrink, type DoorPart } from '@/components/MeasureDoor';
import { SHELF } from '@/lib/backbar';
import { CHAPTER_COUNT, chaptersIn } from '@/lib/content/book';
import { PARTS } from '@/lib/content/parts';
import { GLASSES } from '@/lib/glassware';
import { COPYRIGHT_HOLDER, copyrightYears } from '@/lib/site';

/** The glass a drink is served in, as the slug the glass drawings use. */
const GLASS_SLUG: Record<string, string> = {
  Cocktail: 'martini',
  Coupe: 'coupe',
  Highball: 'highball',
};

/**
 * The front door: shows the two halves and lets you pick one.
 *
 * It renders without the top bar (the shell in `Frame.tsx` steps aside on
 * this route). Everything on it is read from the same data the inner
 * pages use, so it cannot describe a drink or a part that is not there.
 */
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
