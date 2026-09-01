'use client';

import { useMemo, useState } from 'react';
import { CATEGORY_LABEL, GLOSSARY, findTerm } from '@/lib/glossary';
import type { GlossaryCategory } from '@/lib/types';

/**
 * The glossary, searchable by meaning as well as by name.
 *
 * Searching the definition matters more than it sounds: the common case
 * is remembering what something does and not what it is called, which is
 * exactly the case a name-only search fails at. Typing "spring" finds the
 * hawthorne strainer.
 */
export default function GlossarySearch() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<GlossaryCategory | 'all'>('all');

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();

    return GLOSSARY.filter((t) => {
      if (category !== 'all' && t.category !== category) return false;
      if (!q) return true;
      return (
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        (t.etymology?.toLowerCase().includes(q) ?? false)
      );
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [query, category]);

  const categories = Object.keys(CATEGORY_LABEL) as GlossaryCategory[];

  return (
    <>
      <label className="block mb-4 max-w-[26rem]">
        <span className="label-ui block mb-1">Search</span>
        <input
          type="search"
          className="ink-input"
          value={query}
          placeholder="A word, or what it does"
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>

      <div className="flex flex-wrap gap-2 mb-5">
        <button
          className="chip"
          aria-pressed={category === 'all'}
          onClick={() => setCategory('all')}
        >
          Everything <span className="nums">· {GLOSSARY.length}</span>
        </button>
        {categories.map((c) => (
          <button
            key={c}
            className="chip"
            aria-pressed={category === c}
            onClick={() => setCategory(c)}
          >
            {CATEGORY_LABEL[c]}
          </button>
        ))}
      </div>

      {shown.length === 0 ? (
        <p className="t-base" style={{ color: 'var(--ink-soft)' }}>
          Nothing matches that. Try the word you would use out loud.
        </p>
      ) : (
        <dl className="space-y-5">
          {shown.map((t) => (
            <div key={t.slug} id={t.slug}>
              <dt className="flex items-baseline gap-2 flex-wrap">
                <span className="display t-h3 leading-none">{t.term}</span>
                <span className="label-ui" style={{ color: 'var(--accent-book)' }}>
                  {CATEGORY_LABEL[t.category]}
                </span>
              </dt>
              {t.etymology && (
                <p
                  className="t-caption italic mt-0.5"
                  style={{ color: 'var(--ink-faint)' }}
                >
                  {t.etymology}
                </p>
              )}
              <dd className="t-base mt-1 max-w-[34rem]">
                {t.definition}
                {t.seeAlso && t.seeAlso.length > 0 && (
                  <span
                    className="block t-caption mt-1"
                    style={{ color: 'var(--ink-soft)' }}
                  >
                    See also{' '}
                    {t.seeAlso
                      .map((s) => findTerm(s))
                      .filter(Boolean)
                      .map((s, i, arr) => (
                        <span key={s!.slug}>
                          <a
                            href={`#${s!.slug}`}
                            style={{ color: 'var(--accent-book)' }}
                          >
                            {s!.term.toLowerCase()}
                          </a>
                          {i < arr.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                  </span>
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </>
  );
}
