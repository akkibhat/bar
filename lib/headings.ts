import type { Block } from './schema';

/**
 * The sub-headings inside a chapter, with a stable id for each.
 *
 * Two components need these and they must agree exactly: `ChapterBody`
 * stamps the ids onto the rendered headings, and `ChapterJumps` links to
 * them. Both call this one function over the same body, so the ids cannot
 * drift - which is the failure mode of computing a slug independently in
 * two places.
 */
export type Heading = { id: string; text: string };

/**
 * A URL fragment from heading text.
 *
 * Strips the inline markup delimiters first, since a heading may carry
 * **bold** or *italic* and those asterisks are not part of the name.
 */
function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .replace(/\*/g, '')
      // Keep letters, numbers and spaces; everything else becomes a break.
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-') || 'section'
  );
}

/**
 * Every `h` block in a chapter, in order.
 *
 * Duplicate headings get a numeric suffix rather than colliding, because
 * two elements sharing an id is invalid and the browser will jump to
 * whichever it met first.
 */
export function headingsOf(body: Block[]): Heading[] {
  const seen = new Map<string, number>();

  return body
    .filter((b): b is Extract<Block, { kind: 'h' }> => b.kind === 'h')
    .map((b) => {
      const base = slugify(b.text);
      const count = seen.get(base) ?? 0;
      seen.set(base, count + 1);
      return {
        id: count === 0 ? base : `${base}-${count + 1}`,
        text: b.text.replace(/\*/g, ''),
      };
    });
}
