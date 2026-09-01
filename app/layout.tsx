import type { Metadata } from 'next';
import { Bodoni_Moda, Jost, Lora } from 'next/font/google';
import Shell from '@/components/Shell';
import './globals.css';

/**
 * The three typefaces. Loaded through next/font so they are self-hosted
 * and do not block rendering on a third-party request.
 *
 * The set is chosen to sit as far from the wine site as possible while
 * staying legible over 37 chapters. That site is a notebook and uses a
 * handwriting face for every heading; this one is a printed menu, and a
 * menu is set rather than written.
 */

/**
 * Bodoni Moda carries the headings and the wordmark.
 *
 * A didone: very thick stems against very thin hairlines, which is the
 * ratio that makes a cocktail list look like a cocktail list. It is a
 * variable font with a real optical size axis, so it thins its own
 * hairlines as it grows instead of scaling them linearly - which is what
 * stops a 54px title looking like a blown-up 18px one.
 *
 * It is also fragile below about 20px, where those hairlines fall under
 * a rendered pixel. Hence `.display` is reserved for headings and small
 * emphasis goes to Jost instead.
 */
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
  display: 'swap',
});

/**
 * Lora sets the body.
 *
 * Warm, slightly calligraphic, and with enough weight in the stems to
 * hold its own under Bodoni without competing with it. Long-form
 * readable, which matters more here than anywhere.
 */
const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

/**
 * Jost handles the interface: labels, chips, buttons, measures.
 *
 * A geometric sans in the Futura line, which is the face a bar menu of a
 * certain era would have set its small caps in. Wide-tracked uppercase
 * is the workhorse of this design, and Jost's uppercase is even and
 * unfussy at 12px, where a grotesque tends to look like a form field.
 */
const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "Akki's Bar - what I was taught, and what I have built",
    template: '%s - Bar',
  },
  description:
    'Everything behind a bar and what to do with it - spirits, beer, tools, technique, and the structures almost every cocktail turns out to be. Plus my own creations, with the full build.',
};

/**
 * Runs before first paint to stamp the saved theme onto the root element,
 * so a reader who chose dark does not get a flash of cream first. Written
 * as a raw string because it has to execute synchronously in the document
 * head, before React has done anything.
 */
const THEME_SCRIPT = `
(function () {
  try {
    var saved = localStorage.getItem('bar.theme');
    if (saved === 'dark' || saved === 'light') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* suppressHydrationWarning is required here rather than merely tidy:
       the script above stamps data-theme onto this element before React
       hydrates, so the client DOM legitimately differs from the server
       HTML. It suppresses the warning for this element's attributes only. */
    <html
      lang="en"
      className={`${bodoni.variable} ${lora.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
