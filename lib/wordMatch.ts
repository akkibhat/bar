/**
 * Matching a typed query against a piece of text, by words.
 *
 * A plain substring test treats "ice" as present in "practice", "juice"
 * and "slice", which buries the chapter actually about ice under results
 * that merely contain the letters. This matches from the start of a word
 * instead: every word the reader typed has to open some word in the text.
 * So "ice" finds "Ice", "Iced" and "Clear ice", and "dry sh" finds "Dry
 * shake" - but neither "practice" nor "juice".
 *
 * Case and accents are ignored on both sides, so "pina" finds "Piña".
 *
 * The trade is that it will not find the end of a compound: "berry" does
 * not match "strawberry". For a book index, where the reader is looking
 * for the word a heading opens with, that is the right way round.
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
