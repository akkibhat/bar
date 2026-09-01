import Rule from './Rule';

/**
 * The shared header for the standalone tool pages, so they open the same
 * way a chapter does and the site reads as one printed document.
 *
 * The order is fixed - tracked small-caps eyebrow, title, stub, then the
 * standfirst - because that repetition is what makes a set of otherwise
 * unrelated pages feel like sections of one thing.
 */
export default function PageHeader({
  eyebrow,
  title,
  standfirst,
}: {
  eyebrow: string;
  title: string;
  standfirst: string;
}) {
  return (
    <header className="mb-8">
      <p className="label-ui mb-2">{eyebrow}</p>
      <h1 className="display t-h1 sm:t-display leading-[1.02] mb-3">{title}</h1>
      <Rule variant="stub" />
      <p
        className="t-lead italic leading-relaxed mt-5 max-w-[34rem]"
        style={{ color: 'var(--ink-soft)' }}
      >
        {standfirst}
      </p>
    </header>
  );
}
