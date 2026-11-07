'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { SearchEntry } from '@/lib/content/book';
import { matchesWords } from '@/lib/wordMatch';

/**
 * Search across the book.
 *
 * Searches every place the book names something: chapter titles,
 * headings, note titles, the bold term a list item opens with, and the
 * first column of every table. Not the body text, on purpose: the question
 * is "which chapter covers this", not "where does this word appear".
 */
export default function BookSearch({ index }: { index: SearchEntry[] }) {
  const [query, setQuery] = useState('');

  const markCount = useMemo(
    () => index.reduce((n, c) => n + c.marks.length, 0),
    [index],
  );

  const results = useMemo(() => {
    const q = query.trim();
    if (!q) return [];

    return index
      .map((c) => ({
        chapter: c,
        marks: c.marks.filter((m) => matchesWords(m.text, q)),
      }))
      .filter((r) => matchesWords(r.chapter.title, q) || r.marks.length > 0);
  }, [index, query]);

  const asked = query.trim().length > 0;

  return (
    <>
      <label className="block mb-6 max-w-[26rem]">
        <span className="label-ui block mb-1">Search</span>
        <input
          type="search"
          className="ink-input"
          value={query}
          placeholder="A chapter, or something in one"
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      {!asked && (
        <p className="t-base" style={{ color: 'var(--ink-soft)' }}>
          <span className="nums">{index.length}</span> chapters, and{' '}
          <span className="nums">{markCount}</span> headings, notes and named
          terms inside them. For a word in the middle of a paragraph, open the
          chapter and use find-in-page.
        </p>
      )}

      {asked && results.length === 0 && (
        <p className="t-base" style={{ color: 'var(--ink-soft)' }}>
          Nothing matches that. The glossary may have it as a term.
        </p>
      )}

      {results.length > 0 && (
        <ul className="space-y-6">
          {results.map(({ chapter, marks }) => (
            <li key={chapter.slug}>
              <Link
                href={`/book/${chapter.slug}`}
                className="display t-h3 leading-none"
                style={{ color: 'var(--accent-book)' }}
              >
                <span className="nums">{chapter.n}</span>. {chapter.title}
              </Link>

              {marks.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {marks.map((m) => (
                    <li key={m.kind + m.text}>
                      <Link
                        href={
                          m.id
                            ? `/book/${chapter.slug}#${m.id}`
                            : `/book/${chapter.slug}`
                        }
                        className="t-base"
                        style={{ color: 'var(--ink-soft)' }}
                      >
                        {m.text}
                        {m.kind !== 'heading' && ' '}
                        {m.kind !== 'heading' && (
                          <span className="label-ui ml-2">{m.kind}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
