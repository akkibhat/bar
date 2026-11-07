/* eslint-disable @next/next/no-img-element -- Satori renders this to a
   PNG at build time. There is no DOM here, so next/image does not apply. */
import { ImageResponse } from 'next/og';
import { MARK_URI } from '@/lib/markImage';

/* Under `output: export` there is no server to decide this at request
   time, so the route has to say it is static or the build stops. */
export const dynamic = 'force-static';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

/**
 * The home-screen icon, rendered to a PNG at build time.
 *
 * `app/icon.svg` covers the browser tab, but an SVG is not dependable as
 * an Apple touch icon, and a touch icon sits on the phone's wallpaper, so
 * this one carries its own espresso ground (the site's dark theme).
 */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1c1410',
        }}
      >
        <img src={MARK_URI} width={96} height={109} alt="" />
      </div>
    ),
    size,
  );
}
