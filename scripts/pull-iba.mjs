/**
 * Turn the IBA's official cocktail list into the site's committed index.
 *
 *   node scripts/pull-iba.mjs
 *
 * Keeps three fields per drink: the name, the list it sits on, and its
 * iba-world.com address. No ingredients, measures or method: those are
 * the IBA's, not ours to copy. If this script ever reads an ingredient
 * out of the page, that is the bug.
 *
 * A committed snapshot so a deploy never depends on their server.
 *
 *   1. npm run pull:iba
 *   2. Read the diff. A drink appearing or disappearing is real news.
 *   3. Commit the regenerated lib/content/iba-list.ts.
 */

import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join('lib', 'content', 'iba-list.ts');

/** The listing, and the URL of page `n` of it. */
const LIST_URL = 'https://iba-world.com/cocktails/all-cocktails/';
const pageUrl = (n) => (n === 1 ? LIST_URL : `${LIST_URL}page/${n}/`);

/** About six pages of twenty at the time of writing. The cap is a guard
    against a pagination change turning the loop into a crawl. */
const MAX_PAGES = 20;

/** Below this, assume the parse broke rather than that the IBA halved
    its list, and refuse to overwrite a good snapshot with a stub. */
const MIN_ENTRIES = 80;

/* ------------------------------------------------------------------ *
 * Categories
 * ------------------------------------------------------------------ */

/**
 * The site's own labels, mapped onto the three keys `lib/iba.ts` uses.
 *
 * Matched on the lowercased label so a capitalisation change on their
 * end does not break the pull. Anything unrecognised throws: a drink
 * silently dropped for sitting on a list we did not expect is exactly
 * the failure this file is meant to make visible.
 */
const CATEGORIES = {
  'the unforgettables': 'unforgettables',
  unforgettables: 'unforgettables',
  'contemporary classics': 'contemporary',
  'the contemporary classics': 'contemporary',
  'new era': 'new-era',
  'the new era': 'new-era',
};

/** The site's category key for an IBA list label. Throws on one it does not know. */
function categoryOf(label) {
  const key = CATEGORIES[label.toLowerCase()];
  if (!key) {
    throw new Error(
      `Unknown IBA category "${label}". Add it to CATEGORIES in ` +
        'scripts/pull-iba.mjs, and to IbaCategory in lib/iba.ts if it is ' +
        'a genuinely new list.',
    );
  }
  return key;
}

/* ------------------------------------------------------------------ *
 * Parsing
 * ------------------------------------------------------------------ */

/**
 * One card in the listing grid.
 *
 * The markup is stable WordPress output: each entry is a `.cocktail`
 * div wrapping a link, an `<h2>` with the name, and a `.cocktail-category`
 * div carrying the list label after a tag icon. Matching the three
 * together rather than separately means a card missing any one of them
 * is skipped rather than paired with its neighbour's data.
 */
const CARD =
  /<div class="cocktail cocktail-\d+">\s*<a href="(https:\/\/iba-world\.com\/iba-cocktail\/([^/"]+)\/)"[\s\S]*?<h2>([\s\S]*?)<\/h2>[\s\S]*?<div class="cocktail-category">([\s\S]*?)<\/div>/g;

/** Strip tags and collapse whitespace, for text lifted out of markup. */
function text(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * The handful of entities WordPress emits in a cocktail name - curly
 * quotes and ampersands. Numeric escapes are handled generally; there is
 * no need for a full entity table on a list of drink names.
 */
function decode(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'");
}

/** Every entry on one page of the listing. */
function parsePage(html) {
  const out = [];
  CARD.lastIndex = 0;
  let match;
  while ((match = CARD.exec(html)) !== null) {
    const [, url, slug, rawName, rawCategory] = match;
    out.push({
      name: decode(text(rawName)),
      slug,
      category: categoryOf(text(rawCategory)),
      url,
    });
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Fetching
 * ------------------------------------------------------------------ */

/**
 * Walk the listing until a page holds nothing.
 *
 * WordPress answers a page past the end with either a 404 or an empty
 * grid depending on how the theme handles it, so both are treated as the
 * end. Entries are keyed by slug, because the last page of a paginated
 * WordPress query can repeat an item if something was published between
 * requests.
 */
async function fetchList() {
  const bySlug = new Map();

  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const url = pageUrl(page);
    const res = await fetch(url, {
      headers: {
        // Default node fetch has no UA, which some hosts answer with a 403.
        'User-Agent': 'Mozilla/5.0 (compatible; bar-site pull-iba)',
        Accept: 'text/html',
      },
    });

    if (res.status === 404) break;
    if (!res.ok) {
      throw new Error(
        `${url} returned ${res.status} ${res.statusText}. ` +
          'Nothing written - the existing snapshot is still good.',
      );
    }

    const entries = parsePage(await res.text());
    if (entries.length === 0) break;

    for (const entry of entries) {
      if (!bySlug.has(entry.slug)) bySlug.set(entry.slug, entry);
    }
    console.log(`  page ${page}: ${entries.length}`);
  }

  return [...bySlug.values()];
}

/* ------------------------------------------------------------------ *
 * Writing
 * ------------------------------------------------------------------ */

async function main() {
  console.log(`reading ${LIST_URL}`);
  const entries = await fetchList();

  if (entries.length < MIN_ENTRIES) {
    throw new Error(
      `Only ${entries.length} drinks parsed, expected at least ${MIN_ENTRIES}. ` +
        'The listing markup has probably changed - fix the parser in ' +
        'scripts/pull-iba.mjs rather than committing a truncated list. ' +
        'Nothing written.',
    );
  }

  // Alphabetical, which is how the IBA presents it and how it reads.
  entries.sort((a, b) => a.name.localeCompare(b.name, 'en'));

  const body = `/**
 * The IBA's official list: names, lists and links.
 *
 * GENERATED FILE - do not edit by hand. Regenerate with:
 *   npm run pull:iba
 *
 * Three fields per drink and no more. The IBA's recipes are theirs, and
 * none of them are held here or anywhere else in this repo. The book
 * writes its own spec for the ones it covers; everything else on the
 * shelf is a name and a link out to the IBA's own page.
 *
 * See scripts/pull-iba.mjs for the reasoning and the refresh steps.
 */

import type { IbaCategory } from '../iba';

/** One drink on the official list. Name, list, and where it lives. */
export type IbaEntry = {
  name: string;
  /** The IBA's own slug, and the last segment of its URL. */
  slug: string;
  category: IbaCategory;
  url: string;
};

/** When this snapshot was taken, so the page can admit its age. */
export const IBA_PULLED_AT = ${JSON.stringify(new Date().toISOString())};

/** The whole official list, alphabetical. */
export const IBA_LIST: IbaEntry[] = ${JSON.stringify(entries, null, 2)};
`;

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, body, 'utf8');

  const counts = new Map();
  for (const e of entries) counts.set(e.category, (counts.get(e.category) ?? 0) + 1);

  console.log(`wrote ${OUT}`);
  console.log(`  ${entries.length} drinks`);
  for (const [category, count] of counts) {
    console.log(`  - ${category}: ${count}`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
