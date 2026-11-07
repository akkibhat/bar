/**
 * A collapsible section, built on `<details>`: no state and no client
 * JavaScript, and find-in-page can open it to show a match.
 *
 * Both open/closed markers are rendered and CSS shows one, since swapping
 * the text on `details[open]` would need a script or a pseudo-element
 * (which find-in-page cannot see).
 */
export default function Fold({
  label,
  hint,
  open = false,
  children,
}: {
  label: string;
  /**
   * One line saying what is inside, shown on the summary itself.
   *
   * A closed section that only says "Behind the bar" asks the reader to
   * open it to find out whether they wanted it. The hint answers that
   * without the click, which is most of what a fold owes you.
   */
  hint?: string;
  /** Whether it starts open. */
  open?: boolean;
  children: React.ReactNode;
}) {
  return (
    <details className="fold" open={open}>
      <summary className="fold__head">
        <span className="label-ui" style={{ fontSize: 'var(--t-caption)' }}>
          {label}
        </span>
        {hint && <span className="fold__hint">{hint}</span>}
        <span className="fold__mark" aria-hidden="true">
          <span className="fold__when-closed">+</span>
          <span className="fold__when-open">−</span>
        </span>
      </summary>
      {/* The rule is drawn on the summary itself rather than sitting here
          as its own element. Anything inside `details` that is not the
          summary disappears when the section is shut, and the rule is
          what keeps a closed section looking like a section rather than
          a stray line of small caps. */}
      <div className="fold__body">{children}</div>
    </details>
  );
}
