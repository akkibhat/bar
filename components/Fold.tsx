/**
 * A collapsible section, built on `<details>`.
 *
 * No state, no client component, no hydration. The browser has done this
 * natively for years, it works before JavaScript loads and with it
 * disabled, keyboard and screen-reader behaviour come free, and browser
 * find-in-page can open a closed section to show a match. Reaching for
 * useState here would be worse in every one of those ways.
 *
 * The index column in the margin does use state, for a reason `<details>`
 * cannot cover: which part is open there depends on which chapter you are
 * reading, and it has to change as you navigate.
 *
 * Both markers are rendered and CSS shows one, since there is no way to
 * swap text content on `details[open]` without either scripting it or
 * putting the glyph in a pseudo-element, where it would be invisible to
 * a text search.
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
