import Figure from './Figure';
import { METHODS, type MethodKey } from './methodDrawings';

/**
 * Option A: one method, drawn under the paragraph that explains it.
 *
 * Seven of these across the chapter, each sitting directly beneath its
 * own sub-heading, so the drawing is never more than a line away from
 * the words it illustrates.
 */
export default function MethodFigure({ method }: { method: MethodKey }) {
  const m = METHODS[method];
  return (
    <Figure title={m.label} animated caption={m.note}>
      {/* The plate is the full width of the card either way, so the
          viewBox matches the other figures and the drawing is centred
          in it - otherwise a 240-wide box stretches to 700 and the
          vessel comes out three times the size of every other figure. */}
      <svg
        viewBox="0 0 720 210"
        role="img"
        aria-label={m.label + '. ' + m.note}
        className="mth-plate"
      >
        <path d="M20 186 H700" stroke="var(--rule-strong)" strokeWidth="1" fill="none" />
        <g transform="translate(280 6)">{m.draw}</g>
      </svg>
    </Figure>
  );
}
