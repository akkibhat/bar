import { COPYRIGHT_HOLDER, copyrightYears } from '@/lib/site';

/**
 * The copyright line at the foot of every page.
 *
 * A server component on purpose: `copyrightYears()` reads the clock, so
 * resolving it at prerender avoids shipping JavaScript for it and a
 * hydration mismatch at New Year.
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
