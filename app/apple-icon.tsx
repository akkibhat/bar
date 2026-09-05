/* eslint-disable @next/next/no-img-element -- Satori renders this to a
   PNG at build time. There is no DOM here, so next/image does not apply. */
import { ImageResponse } from 'next/og';

/**
 * The home-screen icon, generated as a PNG.
 *
 * `app/icon.svg` covers the browser tab, but an SVG is not dependable as
 * an Apple touch icon, and a touch icon is composited on whatever
 * wallpaper is behind it rather than on browser chrome - so unlike the
 * favicon it carries its own paper ground instead of standing on
 * nothing.
 */
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 16 120 136" width="120" height="136"><g fill="#9d2530"><path d="M16,24 L104,24 L60,94 Z"/><rect x="56.5" y="94" width="7" height="42"/><rect x="34" y="136" width="52" height="8" rx="3"/></g></svg>`;

const MARK_URI = `data:image/svg+xml;base64,${Buffer.from(MARK).toString('base64')}`;

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
          background: '#fdfcf9',
        }}
      >
        <img src={MARK_URI} width={96} height={109} alt="" />
      </div>
    ),
    size,
  );
}
