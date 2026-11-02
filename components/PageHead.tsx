import type { ReactNode } from 'react';

/**
 * The head of a main page: the title at display size on the left, and the
 * introduction on the right, across the full width of the page.
 *
 * It is the front door's headline set down a size: the same face, the
 * same frame, the same amber on the second half of the name. The two
 * halves share it, so Barbook and Backbar open the same way and differ in
 * what they say.
 *
 * `title` is the name with its coloured half already marked up, e.g.
 * `Bar<span>book</span>`, since which half is coloured differs by name.
 */
export default function PageHead({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <header className="page-head">
      <h1 className="page-head__title">{title}</h1>
      <div className="page-head__intro">{children}</div>
    </header>
  );
}
