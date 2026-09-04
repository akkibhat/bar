import { COPYRIGHT_HOLDER, copyrightYears } from '@/lib/site';

/**
 * The copyright line, at the foot of every page.
 *
 * A server component on purpose. The year comes from `copyrightYears()`,
 * which reads the clock - doing that in a client component would ship
 * JavaScript to print a number and would mismatch on hydration the first
 * time someone loaded a page on New Year's Day. Here it is resolved once,
 * when the page is prerendered.
 *
 * Set quietly: a hairline, small caps, faint ink. It is a legal line
 * rather than something to read, and the page it sits under has already
 * finished by the time anyone reaches it.
 */
export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[52rem] px-6 sm:px-10 lg:px-12 pb-10 pt-4">
      <hr className="rule-hair mb-4" />
      <p className="label-ui" style={{ color: 'var(--ink-faint)' }}>
        &copy; <span className="nums">{copyrightYears()}</span> {COPYRIGHT_HOLDER}
      </p>
    </footer>
  );
}
