'use client';

import { useLights } from '@/lib/local';

/**
 * Light/dark switch.
 *
 * Writes the choice to localStorage and stamps it on the root element;
 * the inline script in the layout replays it on the next load before
 * paint, so a reader who chose dark never gets a flash of cream first.
 *
 * Set as a symbol rather than a word. In the top bar it sits beside two
 * wordmarks and a label, and a fourth piece of text there reads as a
 * fourth destination; on the front door it sits alone in a corner, where
 * a word would be the only interface chrome on an otherwise typographic
 * page. The accessible name carries the meaning either way.
 *
 * `suppressHydrationWarning` is needed rather than merely tidy: the
 * server cannot know the preference and renders the light symbol, while
 * the client may immediately swap it.
 */
export default function ThemeToggle({
  className = '',
}: {
  className?: string;
}) {
  const { theme, toggle } = useLights();

  return (
    <button
      onClick={toggle}
      className={`px-2 py-2 t-ui ${className}`}
      style={{ color: 'var(--ink-faint)', lineHeight: 1 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      suppressHydrationWarning
    >
      {theme === 'dark' ? '☾' : '☀'}
    </button>
  );
}
