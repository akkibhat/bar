import type { Glass } from '@/lib/glassware';

/*
 * Every shape is drawn in the same 40 x 64 box on a baseline at y=60 with
 * the same stroke, outlines only, so the set reads as one. Stemmed glasses
 * share a foot and stem, so only the bowl differs between them.
 */

/** Stem and foot, shared by everything served up. */
const STEM = 'M20 %TOP% v%LEN% M11 58 h18';

/** The stem and foot path, with the stem starting at `top`. */
const stem = (top: number) =>
  STEM.replace('%TOP%', String(top)).replace('%LEN%', String(57 - top));

/** The path for each glass. Add a glass here and to `lib/glassware.ts`. */
const SHAPES: Record<string, string> = {
  /* ---- served up: a bowl on a stem, and the bowl is the difference --- */
  martini: `M7 12 H33 L20 33 Z ${stem(33)}`,
  coupe: `M8 15 C8 31 32 31 32 15 Z ${stem(30)}`,
  margarita: `M6 12 C6 20 14 21 15 26 L16 30 H24 L25 26 C26 21 34 20 34 12 Z ${stem(30)}`,
  flute: `M15 8 L17 36 H23 L25 8 Z ${stem(36)}`,
  wine: `M11 14 C11 33 29 33 29 14 Z ${stem(32)}`,
  snifter: `M14 20 C7 26 9 42 20 42 C31 42 33 26 26 20 Z ${stem(42)}`,

  /* ---- short and shot: no stem, and the base carries the weight ------ */
  rocks: 'M9 36 L11 58 H29 L31 36 M11 54 H29',
  shot: 'M14 36 L15 58 H25 L26 36 M15 55 H25',

  /* ---- long: straight sided, and the width is the whole story -------- */
  highball: 'M11 14 L12 58 H28 L29 14',
  collins: 'M13 8 L14 58 H26 L27 8',
  sling: `M12 12 L14 44 H26 L28 12 ${stem(44)}`,
  hurricane: `M11 10 C6 22 13 30 16 38 H24 C27 30 34 22 29 10 ${stem(38)}`,

  /* ---- the ones that are not glass ----------------------------------- */
  julep: 'M11 24 L13 58 H27 L29 24 M11 27 H29',
  mule: 'M11 22 L13 58 H27 L29 22 M29 30 C37 30 37 46 29 46 M11 25 H29',
  /* A tiki mug is a carved head, not a tumbler: wider at the brow than
     at the foot, with a heavy rim and a face cut into it. */
  tiki:
    'M11 14 C11 11 29 11 29 14 L27 30 C27 44 24 52 22 58 H18 C16 52 13 44 13 30 Z '
    + 'M11 14 C11 17 29 17 29 14 M16 24 a1.6 1.6 0 1 0 0.1 0 M24 24 a1.6 1.6 0 1 0 0.1 0 '
    + 'M17 34 C19 37 21 37 23 34 M20 27 v4',
  mason: 'M11 24 C11 19 13 17 15 17 H25 C27 17 29 19 29 24 L29 58 H11 Z M13 12 H27 V17 H13 Z',
  toddy: 'M12 20 L14 58 H26 L28 20 M28 28 C35 28 35 44 28 44 M12 23 H28',
};

/** The raw path for a glass, so a larger drawing can reuse the same outline. */
export function glassPath(slug: string): string | undefined {
  return SHAPES[slug];
}

/** The outline silhouette of one glass, keyed by its slug. */
export default function GlassShape({
  glass,
  size = 46,
}: {
  glass: Glass;
  size?: number;
}) {
  const path = SHAPES[glass.slug];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 40 64"
      width={(size * 40) / 64}
      height={size}
      aria-hidden="true"
      className="shrink-0"
      style={{ display: 'block' }}
    >
      <path
        d={path}
        fill="none"
        stroke="var(--ink-soft)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
