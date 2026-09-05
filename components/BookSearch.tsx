'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { SearchEntry } from '@/lib/content/book';

/**
 * Looking something up in the book.
 *
 * The book is meant to be consulted rather than read through, and until
 * this there was no way to consult it: the glossary searched its own
 * terms and the shelf searched its own drinks, but nothing searched the
 * thirty-seven chapters. Finding the reverse dry shake meant guessing
 * which chapter held it and using find-in-page.
 *
 * What is searched is chapter titles, the headings inside them, and the
 * titles of their notes - not the body text. That is a stopping point
 * rather than a first step abandoned: those three are where the book
 * names a subject, so they answer "which chapter covers this", which is
 * the question being asked. Full text answers "where does this word
 * appear", which mostly returns the chapter you were already going to
 * open, and costs an index to generate and keep in step.
 *
 * Notes matter more than they look. "The bottled foamers" and "Why the
 * head matters" are both notes and neither is a heading, so without them
 * a search for foam finds nothing at all.
 */
export default function BookSearch({ index }: { index: SearchEntry[] }) {
  const [query, setQuery] = useState('');

  const markCount = useMemo(
    () => index.reduce((n, c) => n + c.marks.length, 0),
    [index],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return index
      .map((c) => ({
        chapter: c,
        marks: c.marks.filter((m) => m.text.toLowerCase().includes(q)),
      }))
      .filter((r) => r.chapter.title.toLowerCase().includes(q) || r.marks.length > 0);
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
          <span className="nums">{markCount}</span> headings and notes inside
          them. Those are where a subject gets named. For a word in the middle
          of a paragraph, open the chapter and use find-in-page.
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
                        {m.kind === 'note' && ' '}
                        {m.kind === 'note' && (
                          <span className="label-ui ml-2">note</span>
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
