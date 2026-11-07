/*
 * The closed mark (the glass on its stem, in the dark theme's amber) as a
 * data URI, for the build-time PNGs: the apple icon and the share card,
 * which both sit on the espresso ground. Same shape as `app/icon.svg`.
 * Server-only, since it uses Node's Buffer.
 */
const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 16 120 136" width="120" height="136"><g fill="#e2943b"><path d="M16,24 L104,24 L60,94 Z"/><rect x="56.5" y="94" width="7" height="42"/><rect x="34" y="136" width="52" height="8" rx="3"/></g></svg>`;

/** The mark as a base64 SVG data URI, ready for an `<img src>`. */
export const MARK_URI = `data:image/svg+xml;base64,${Buffer.from(MARK).toString('base64')}`;
