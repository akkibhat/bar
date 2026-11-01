/**
 * The shared header for the standalone tool pages.
 *
 * Title on the left, the standfirst beside it on the right and hung from
 * the baseline of the title, with one hairline under both. The tracked
 * small-caps eyebrow and the short accent stub that used to sit above and
 * below the title are gone: every page carried the same pair, so they
 * said nothing, and the tool's own name is already the first thing on it.
 *
 * Stacks to one column on a narrow screen, title first.
 */
export default function PageHeader({
  title,
  standfirst,
}: {
  title: string;
  standfirst: string;
}) {
  return (
    <header className="tool-head">
      <h1 className="display t-h1 sm:t-display leading-[1.02]">{title}</h1>
      <p className="tool-head__line t-lead italic leading-relaxed">{standfirst}</p>
    </header>
  );
}
