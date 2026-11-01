import { glassPath } from './GlassShape';

/**
 * One glass, drawn far too large and left to run off the edge of its box.
 *
 * Every other drawing on the site is a small plate sitting politely in a
 * column. This is the opposite: the same outline the glassware picker
 * uses, scaled until it is architecture rather than illustration, and
 * cropped by whatever contains it. It is decoration, so it is hidden from
 * assistive technology, ignores the pointer, and sits behind the text.
 *
 * The stroke is `non-scaling`, so the line stays a hairline at any size
 * instead of thickening with the glass, which is what keeps it reading
 * as a printed rule and not as a cartoon.
 *
 * The parent must be `position: relative` and clip overflow; this fills
 * it and places the glass with the `className` the caller passes.
 */
export default function GlassPlate({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const path = glassPath(slug);
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 40 64"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ position: 'absolute', pointerEvents: 'none' }}
    >
      <path
        d={path}
        fill="none"
        stroke="var(--ink-faint)" strokeOpacity="0.5"
        strokeWidth="1"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
