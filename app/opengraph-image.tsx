/* eslint-disable @next/next/no-img-element -- Satori renders this to a
   PNG at build time. There is no DOM here, so next/image does not apply. */
import { ImageResponse } from 'next/og';

/**
 * The card a shared link renders as.
 *
 * Generated at build time rather than shipped as a file, so it stays in
 * step with the title and the palette instead of being a picture someone
 * has to remember to redraw. Scrapers will not run JavaScript or read a
 * stylesheet, so the colours are the literal hexes behind the light
 * tokens in `app/globals.css` - this card is always the paper one, even
 * for a reader whose browser is dark.
 *
 * The mark is passed in as a data URI. The renderer takes a small subset
 * of SVG as an element, and an image source is the part of it that is
 * dependable.
 */
/* Under `output: export` there is no server to decide this at request
   time, so the route has to say it is static. Without it the build
   stops here rather than guessing. */
export const dynamic = 'force-static';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = "Akki's Bar - what I was taught, and what I have built";

/* The closed state of the mark: the bowl of a glass on its stem, in the
   shelf's red. The same shape as `app/icon.svg`. */
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 16 120 136" width="120" height="136"><g fill="#9d2530"><path d="M16,24 L104,24 L60,94 Z"/><rect x="56.5" y="94" width="7" height="42"/><rect x="34" y="136" width="52" height="8" rx="3"/></g></svg>`;

const MARK_URI = `data:image/svg+xml;base64,${Buffer.from(MARK).toString('base64')}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#fdfcf9',
          padding: '72px 80px',
          /* A rule across the top, the way the pages are set. */
          borderTop: '16px solid #9d2530',
        }}
      >
        <img src={MARK_URI} width={104} height={118} alt="" />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1.05,
              color: '#1a1613',
              letterSpacing: '-0.02em',
            }}
          >
            Akki&apos;s Bar
          </div>
          <div style={{ fontSize: 38, color: '#5c554c', marginTop: 18 }}>
            what I was taught, and what I have built
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: '#6d675e' }}>
          <span style={{ color: '#334e7d' }}>Barbook</span>
          <span style={{ margin: '0 14px' }}>·</span>
          <span style={{ color: '#9d2530' }}>Backbar</span>
        </div>
      </div>
    ),
    size,
  );
}
