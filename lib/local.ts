'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * Browser-local persistence for the things the site remembers: which
 * chapters you have finished, and the drinks you have made notes on.
 *
 * Everything lives in localStorage. Nothing is sent anywhere, there is no
 * account, and clearing site data resets it. That is a deliberate trade:
 * the site works offline and needs no backend, at the cost of not
 * following you between devices.
 *
 * localStorage is an external store, so it is read through
 * useSyncExternalStore rather than loaded into state inside an effect.
 * That gives correct hydration for free - React renders the server
 * snapshot first and swaps to the real value after hydrating, with no
 * mismatch and no cascading render.
 *
 * Every read and write is wrapped, because localStorage throws rather
 * than returning null in private browsing and when a browser is set to
 * block site data.
 */

const PROGRESS_KEY = 'bar.progress.v1';
const JOURNAL_KEY = 'bar.journal.v1';

/**
 * Fired after any write so separate components mounted at the same time
 * (the sidebar and the chapter body, say) stay in agreement without
 * needing a shared context provider.
 */
const CHANGE_EVENT = 'bar:storage';

/* ------------------------------------------------------------------ *
 * External store plumbing
 * ------------------------------------------------------------------ */

/**
 * The last parsed value for each key, alongside the raw string it came
 * from. useSyncExternalStore requires getSnapshot to be referentially
 * stable between changes - returning a freshly parsed object every call
 * would spin React into an infinite re-render.
 */
const snapshots = new Map<string, { raw: string | null; value: unknown }>();

/** Subscribe to writes from this tab, and to writes from other tabs. */
export function watchStored(onChange: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

/** Read and parse a key, reusing the cached object if nothing changed. */
export function readStored<T>(key: string, fallback: T): T {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(key);
  } catch {
    raw = null;
  }

  const cached = snapshots.get(key);
  if (cached && cached.raw === raw) return cached.value as T;

  let value: T = fallback;
  if (raw) {
    try {
      value = JSON.parse(raw) as T;
    } catch {
      value = fallback;
    }
  }
  snapshots.set(key, { raw, value });
  return value;
}

/** Write a JSON value and notify subscribers. */
export function saveStored<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* Storage full, or blocked. The session still works, it just forgets. */
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/** Read the current value outside of render, for update helpers. */
export function peek<T>(key: string, fallback: T): T {
  return typeof window === 'undefined' ? fallback : readStored(key, fallback);
}

/**
 * True once the component has hydrated on the client, false during server
 * rendering and the hydrating render. Lets the interface distinguish
 * "storage not loaded yet" from "storage loaded and empty".
 */
const noopSubscribe = () => () => {};
export function useMounted(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

/* ------------------------------------------------------------------ *
 * Progress
 * ------------------------------------------------------------------ */

/** Completion state keyed by chapter slug, plus the best quiz score seen. */
export type Progress = {
  done: string[];
  /** chapter slug -> questions answered correctly, best attempt */
  scores: Record<string, number>;
};

/** Module-level constant so the server snapshot stays referentially stable. */
const EMPTY_PROGRESS: Progress = { done: [], scores: {} };

/**
 * Reading progress, with helpers to mark a chapter complete and to record
 * a quiz result.
 */
export function useRead() {
  const progress = useSyncExternalStore(
    watchStored,
    () => readStored(PROGRESS_KEY, EMPTY_PROGRESS),
    () => EMPTY_PROGRESS,
  );
  const ready = useMounted();

  /** Mark a chapter finished, or unfinished if it already was. */
  const toggleDone = useCallback((slug: string) => {
    const current = peek(PROGRESS_KEY, EMPTY_PROGRESS);
    const done = current.done.includes(slug)
      ? current.done.filter((s) => s !== slug)
      : [...current.done, slug];
    saveStored(PROGRESS_KEY, { ...current, done });
  }, []);

  /** Record a quiz result, keeping only the best score for that chapter. */
  const recordScore = useCallback((slug: string, score: number) => {
    const current = peek(PROGRESS_KEY, EMPTY_PROGRESS);
    const best = Math.max(current.scores[slug] ?? 0, score);
    saveStored(PROGRESS_KEY, {
      ...current,
      scores: { ...current.scores, [slug]: best },
    });
  }, []);

  /** Clear all progress. Used by the reset control on the contents page. */
  const resetProgress = useCallback(() => {
    saveStored(PROGRESS_KEY, EMPTY_PROGRESS);
  }, []);

  return { progress, ready, toggleDone, recordScore, resetProgress };
}

/* ------------------------------------------------------------------ *
 * Notes on drinks made
 * ------------------------------------------------------------------ */

/** One note against a drink, written after making it. */
export type DrinkNote = {
  id: string;
  /** ISO timestamp of when it was saved. */
  savedAt: string;
  /** The drink this is about. Free text, so it can cover a drink not on
      the shelf as well as one that is. */
  drink: string;
  /** 0-4 indexes into the word scales in the tasting tool. */
  sweetness: number;
  sourness: number;
  strength: number;
  bitterness: number;
  /** Overall rating out of 5. */
  rating: number;
  /** What I would change next time. */
  adjust: string;
  /** Anything else worth writing down. */
  comment: string;
};

/** Module-level constant, for the same stability reason as EMPTY_PROGRESS. */
const EMPTY_JOURNAL: DrinkNote[] = [];

/** The saved notes, newest first. */
export function useNotes() {
  const notes = useSyncExternalStore(
    watchStored,
    () => readStored(JOURNAL_KEY, EMPTY_JOURNAL),
    () => EMPTY_JOURNAL,
  );
  const ready = useMounted();

  /** Save a new note to the front of the journal. */
  const saveNote = useCallback((note: Omit<DrinkNote, 'id' | 'savedAt'>) => {
    const current = peek(JOURNAL_KEY, EMPTY_JOURNAL);
    const full: DrinkNote = {
      ...note,
      id:
        typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : String(Date.now()),
      savedAt: new Date().toISOString(),
    };
    saveStored(JOURNAL_KEY, [full, ...current]);
    return full;
  }, []);

  /** Remove one note by id. */
  const deleteNote = useCallback((id: string) => {
    const current = peek(JOURNAL_KEY, EMPTY_JOURNAL);
    saveStored(
      JOURNAL_KEY,
      current.filter((n) => n.id !== id),
    );
  }, []);

  return { notes, ready, saveNote, deleteNote };
}

/* ------------------------------------------------------------------ *
 * Theme
 * ------------------------------------------------------------------ */

const THEME_KEY = 'bar.theme';
const THEME_EVENT = 'bar:theme';

/**
 * The active theme, read from the attribute the layout's inline script
 * stamps on the root element, falling back to the system preference.
 *
 * Read as an external store for the same reason as everything else here:
 * it lives in the DOM and in localStorage, not in React.
 */
function themeSubscribe(onChange: () => void): () => void {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  window.addEventListener(THEME_EVENT, onChange);
  media.addEventListener('change', onChange);
  return () => {
    window.removeEventListener(THEME_EVENT, onChange);
    media.removeEventListener('change', onChange);
  };
}

function themeSnapshot(): 'light' | 'dark' {
  const stamped = document.documentElement.getAttribute('data-theme');
  if (stamped === 'dark' || stamped === 'light') return stamped;
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function useLights() {
  const theme = useSyncExternalStore(
    themeSubscribe,
    themeSnapshot,
    // The server cannot know the preference; light is the base palette.
    () => 'light' as const,
  );

  const toggle = useCallback(() => {
    const next = themeSnapshot() === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      window.localStorage.setItem(THEME_KEY, next);
    } catch {
      /* Storage blocked; the choice simply will not persist. */
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  }, []);

  return { theme, toggle };
}
