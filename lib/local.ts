'use client';

import { useCallback, useSyncExternalStore } from 'react';

/**
 * Browser-local persistence: reading progress and the theme choice, in
 * localStorage only. Nothing is sent anywhere.
 *
 * Read through useSyncExternalStore rather than state set in an effect,
 * which gives a clean hydration (server snapshot first, real value after).
 * Every access is wrapped, because localStorage throws in private browsing
 * and when site data is blocked.
 */

const PROGRESS_KEY = 'bar.progress.v1';

/**
 * Fired after any write so separate components mounted at the same time
 * (the contents page and a chapter footer, say) stay in agreement without
 * a shared context provider.
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

/** A subscribe function for a store that never changes. */
const noopSubscribe = () => () => {};

/**
 * True once the component has hydrated on the client, false during server
 * rendering and the hydrating render. Lets the interface distinguish
 * "storage not loaded yet" from "storage loaded and empty".
 */
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

/** Finished chapter slugs. `scores` is left over from the old quizzes and kept so stored data keeps its shape. */
export type Progress = {
  done: string[];
  /** chapter slug -> questions answered correctly, best attempt */
  scores: Record<string, number>;
};

/** Module-level constant so the server snapshot stays referentially stable. */
const EMPTY_PROGRESS: Progress = { done: [], scores: {} };

/** Reading progress, with helpers to mark a chapter complete and to reset. */
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

  /** Clear all progress. Used by the reset control on the contents page. */
  const resetProgress = useCallback(() => {
    saveStored(PROGRESS_KEY, EMPTY_PROGRESS);
  }, []);

  return { progress, ready, toggleDone, resetProgress };
}

/* ------------------------------------------------------------------ *
 * Theme
 * ------------------------------------------------------------------ */

const THEME_KEY = 'bar.theme';
const THEME_EVENT = 'bar:theme';

/**
 * Subscribe to theme changes made by the switch. The system colour scheme
 * is not watched: the theme never reads it.
 */
function themeSubscribe(onChange: () => void): () => void {
  window.addEventListener(THEME_EVENT, onChange);
  return () => window.removeEventListener(THEME_EVENT, onChange);
}

/** The active theme, read from the `data-theme` attribute on the root element. */
function themeSnapshot(): 'light' | 'dark' {
  const stamped = document.documentElement.getAttribute('data-theme');
  if (stamped === 'dark' || stamped === 'light') return stamped;
  /* No stamp means the layout's script has not run: the site is dark
     unless the reader chose light, whatever the system setting says. */
  return 'dark';
}

/** The current theme, and a toggle that flips it, saves it and tells subscribers. */
export function useLights() {
  const theme = useSyncExternalStore(
    themeSubscribe,
    themeSnapshot,
    // The server cannot know the preference; the site is dark by default.
    () => 'dark' as const,
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
