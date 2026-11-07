/* eslint-disable @next/next/no-img-element -- Satori renders this to a
   PNG at build time. There is no DOM here, so next/image does not apply. */
import fs from 'node:fs';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { MARK_URI } from '@/lib/markImage';

/* Static: `output: export` has no server to decide it at request time. */
export const dynamic = 'force-static';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = "Akki's Bar - what I was taught, and what I have built";

/**
 * Reads one of the committed ttf fonts.
 *
 * The site's own fonts cannot be used: `next/font` only downloads woff2,
 * and the ImageResponse renderer reads ttf, otf and woff but throws on
 * woff2. So the two faces live as ttf in `assets/fonts` (outside
 * `public/`, as they are only needed at build time). Jost is not among
 * them, so the footer line is set in Lora.
 */
const font = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), 'assets', 'fonts', file));

/**
 * The card a shared link renders as, generated at build time.
 *
 * Scrapers do not run JavaScript or read stylesheets, so the colours are
 * literal hexes. They are the site's earlier paper, ink blue and bitters
 * red palette, not the current amber tokens in `app/globals.css`.
 */
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
          fontFamily: 'Lora',
          /* A rule across the top, the way the pages are set. */
          borderTop: '16px solid #9d2530',
        }}
      >
        <img src={MARK_URI} width={104} height={118} alt="" />

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontFamily: 'Bodoni Moda',
              fontSize: 104,
              lineHeight: 1.05,
              color: '#1a1613',
              letterSpacing: '-0.02em',
            }}
          >
            Akki&apos;s Bar
          </div>
          <div style={{ fontSize: 36, color: '#5c554c', marginTop: 20 }}>
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
    {
      ...size,
      fonts: [
        {
          name: 'Bodoni Moda',
          data: font('BodoniModa-SemiBold.ttf'),
          weight: 600,
          style: 'normal',
        },
        {
          name: 'Lora',
          data: font('Lora-Regular.ttf'),
          weight: 400,
          style: 'normal',
        },
      ],
    },
  );
}
