import type { SpecLine } from '@/lib/schema';

/**
 * A drink's build, set the way it gets written down behind a bar:
 * ingredient left, measure hard right, dot leaders running between.
 *
 * Used in two places that must not drift apart - inside a chapter in
 * Part VIII, and on a Backbar drink page - so the component is shared and
 * the styling lives in `globals.css` under THE SPEC SHEET rather than
 * here.
 */
export default function SpecSheet({
  lines,
  colours,
}: {
  lines: SpecLine[];
  /** One colour per line (null for none): the swatch that ties a line to its layer in the glass. */
  colours?: (string | null)[];
}) {
  if (lines.length === 0) return null;

  return (
    <ul className="spec">
      {lines.map((line, i) => (
        <li className="spec__line" key={`${line.name}-${i}`}>
          {colours && (
            <span
              className="spec__swatch"
              aria-hidden="true"
              style={{ background: colours[i] ?? 'transparent' }}
            />
          )}
          <span className="spec__name">
            {line.name}
            {line.optional && <span className="spec__optional">optional</span>}
            {line.substitutes && line.substitutes.length > 0 && (
              <span className="spec__sub">or {line.substitutes.join(', ')}</span>
            )}
          </span>
          {/* Decorative: the leader is a visual bridge, and reading it out
              as a row of dots helps nobody. */}
          <span className="spec__leader" aria-hidden="true" />
          <span className="spec__amount">{line.amount ?? '–'}</span>
        </li>
      ))}
    </ul>
  );
}
