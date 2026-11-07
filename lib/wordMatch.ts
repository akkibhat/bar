/**
 * Matching a typed query against text by word starts: every typed word
 * must open some word in the text. So "ice" finds "Clear ice" but not
 * "juice", and "dry sh" finds "Dry shake". Case and accents are ignored
 * ("pina" finds "Piña"). The cost: "berry" does not match "strawberry".
 */

/** Lowercase, accent-free, and split into words. */
function words(text: string): string[] {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

/** True if every word in `query` is the beginning of some word in `text`. */
export function matchesWords(text: string, query: string): boolean {
  const wanted = words(query);
  if (wanted.length === 0) return false;
  const have = words(text);
  return wanted.every((w) => have.some((h) => h.startsWith(w)));
}
