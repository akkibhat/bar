'use client';

import { useLights } from '@/lib/local';

/**
 * Light/dark switch in the top bar, set as a symbol so it does not read
 * as another destination beside the wordmarks.
 *
 * Writes the choice to localStorage and the root element; the layout's
 * inline script replays it before paint on the next load. The server
 * always renders the dark symbol, so `suppressHydrationWarning` covers a
 * reader who chose light.
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
