/**
 * Turn a Bar Assistant collection into the site's committed shelf.
 *
 *   node scripts/pull-backbar.mjs
 *
 * A committed snapshot rather than a live fetch, because the site is
 * static and public and Bar Assistant is private and token-protected.
 *
 *   1. Copy `.env.example` to `.env.local` and fill in the four BA_ values.
 *   2. npm run pull
 *   3. Commit the regenerated lib/content/backbar-snapshot.ts.
 *
 * Names, specs, measures, instructions, garnish, glass, method, ABV and
 * tags are kept exactly as Bar Assistant has them. Nothing is reworded or
 * reordered.
 */

import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join('lib', 'content', 'backbar-snapshot.ts');
const ENV_FILES = ['.env.local', '.env'];

/* ------------------------------------------------------------------ *
 * Configuration
 * ------------------------------------------------------------------ */

/**
 * Read the env files by hand rather than pulling in a dotenv dependency.
 *
 * The parse is deliberately narrow: split on the FIRST `=` only, because
 * a Bar Assistant token contains a `|` and can contain `=` padding, and
 * splitting on every separator mangles it. Values are taken literally -
 * no quote stripping, no interpolation - which is what these files hold.
 */
function loadEnv() {
  for (const file of ENV_FILES) {
    if (!fs.existsSync(file)) continue;
    for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      // First file to define a key wins, so .env.local beats .env.
      if (!(key in process.env)) process.env[key] = trimmed.slice(eq + 1);
    }
  }
}

loadEnv();

const BASE_URL = (process.env.BA_API_URL ?? '').replace(/\/+$/, '');
const TOKEN = process.env.BA_API_TOKEN ?? '';
const BAR_ID = process.env.BA_BAR_ID ?? '1';
const COLLECTION_ID = process.env.BA_COLLECTION_ID ?? '';

if (!BASE_URL || !TOKEN || !COLLECTION_ID) {
  console.error(
    'Missing configuration. Set BA_API_URL, BA_API_TOKEN and\n' +
      'BA_COLLECTION_ID in .env.local - see .env.example for where each\n' +
      'value comes from.',
  );
  process.exit(1);
}

/* ------------------------------------------------------------------ *
 * Fetching
 * ------------------------------------------------------------------ */

/**
 * One authenticated request.
 *
 * Newer Bar Assistant versions want the bar id as a header as well as a
 * query parameter, so both are sent. Sending only the parameter returns a
 * 401 on current builds.
 */
async function api(pathname, params = {}) {
  const url = new URL(`${BASE_URL}${pathname}`);
  url.searchParams.set('bar_id', BAR_ID);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') {
      url.searchParams.set(k, String(v));
    }
  }

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: 'application/json',
      'Bar-Assistant-Bar-Id': BAR_ID,
    },
  });

  if (!res.ok) {
    throw new Error(
      `${pathname} returned ${res.status} ${res.statusText}. ` +
        'Check the token is valid and the instance is reachable.',
    );
  }

  return res.json();
}

/** Every cocktail in the published collection, across all pages. */
async function fetchCollection() {
  const out = [];
  let page = 1;
  let lastPage = 1;

  do {
    const payload = await api('/cocktails', {
      per_page: 100,
      page,
      'filter[collection_id]': COLLECTION_ID,
      include: 'ingredients,images,tags',
    });
    out.push(...(payload.data ?? []));
    lastPage = Number(payload.meta?.last_page ?? 1);
    page += 1;
  } while (page <= lastPage);

  return out;
}

/* ------------------------------------------------------------------ *
 * Normalising
 * ------------------------------------------------------------------ */

/**
 * Bar Assistant slugs carry a trailing "-N" revision counter, which is
 * dead weight in a URL. Stripped here so it never appears on the site;
 * the raw slug is kept alongside so a link shared with the suffix still
 * resolves.
 */
function cleanSlug(raw) {
  return raw ? raw.replace(/-\d+$/, '') || raw : null;
}

/** Round a measure for display, dropping a meaningless trailing zero. */
function trim(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return String(value);
  return String(Math.round(n * 100) / 100);
}

/** "45 ml", "20–25 ml", "2 dash", or null where there is no measure. */
function amountOf(raw) {
  if (raw?.amount === undefined || raw?.amount === null || raw?.amount === '') {
    return null;
  }
  const units = raw.units ?? '';
  const text = raw.amount_max
    ? `${trim(raw.amount)}–${trim(raw.amount_max)}`
    : trim(raw.amount);
  return units ? `${text} ${units}` : text;
}

/** A name from a token that may be a string, or an object carrying one. */
function nameOf(value) {
  if (!value) return null;
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && typeof value.name === 'string') {
    return value.name;
  }
  return null;
}

/** The build, in the order it was authored. */
function specOf(raw) {
  const list = Array.isArray(raw?.ingredients) ? raw.ingredients : [];
  return list
    .slice()
    .sort((a, b) => (a?.sort ?? 0) - (b?.sort ?? 0))
    .map((item) => {
      const line = {
        name: nameOf(item?.ingredient) ?? nameOf(item?.name) ?? 'Unknown',
        amount: amountOf(item),
      };
      if (item?.optional) line.optional = true;
      const subs = Array.isArray(item?.substitutes)
        ? item.substitutes.map((s) => nameOf(s?.ingredient ?? s)).filter(Boolean)
        : [];
      if (subs.length) line.substitutes = subs;
      if (item?.note) line.note = item.note;
      return line;
    });
}

/**
 * The base spirit, for the shelf filter.
 *
 * Bar Assistant has no explicit "main ingredient" on these records, so
 * this takes the first non-optional line, which is how the specs are
 * written: the base goes first. Falls back to the first line of all.
 */
function baseOf(raw) {
  const list = Array.isArray(raw?.ingredients) ? raw.ingredients : [];
  const sorted = list.slice().sort((a, b) => (a?.sort ?? 0) - (b?.sort ?? 0));
  const pick = sorted.find((i) => !i?.optional) ?? sorted[0];
  return pick ? nameOf(pick?.ingredient) ?? nameOf(pick?.name) : null;
}

/** Instructions as discrete steps rather than one block of text. */
function stepsOf(raw) {
  return String(raw?.instructions ?? '')
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Drop empty values so the generated file stays readable. */
function clean(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([, v]) =>
        v !== undefined &&
        v !== null &&
        v !== '' &&
        !(Array.isArray(v) && v.length === 0),
    ),
  );
}

/** One Bar Assistant cocktail as a snapshot entry, preferring the detail record when there is one. */
function normalise(raw, detail) {
  const full = detail ?? raw;
  return clean({
    id: full?.id,
    slug: cleanSlug(full?.slug),
    rawSlug: full?.slug,
    name: full?.name ?? 'Untitled',
    description: full?.description,
    steps: stepsOf(full),
    garnish: full?.garnish,
    glass: nameOf(full?.glass),
    method: nameOf(full?.method),
    abv: typeof full?.abv === 'number' ? full.abv : undefined,
    volumeMl: typeof full?.volume_ml === 'number' ? full.volume_ml : undefined,
    base: baseOf(full),
    tags: (Array.isArray(full?.tags) ? full.tags : [])
      .map((t) => nameOf(t))
      .filter(Boolean),
    spec: specOf(full),
    createdAt: full?.created_at,
  });
}

/* ------------------------------------------------------------------ *
 * Writing
 * ------------------------------------------------------------------ */

async function main() {
  const listing = await fetchCollection();
  console.log(`found ${listing.length} in collection ${COLLECTION_ID}`);

  /* The listing endpoint omits glass and method, so each drink is
     fetched once more on its own. At this size that is a handful of
     requests against my own instance; if the shelf ever runs to
     hundreds, this is the loop to batch. */
  const drinks = [];
  for (const item of listing) {
    const detail = await api(`/cocktails/${encodeURIComponent(item.id)}`, {
      include: 'ingredients,images,tags,glass,method',
    });
    drinks.push(normalise(item, detail?.data ?? detail));
    process.stdout.write('.');
  }
  process.stdout.write('\n');

  // Newest first: the most recent thing made is the most interesting.
  drinks.sort((a, b) =>
    String(b.createdAt ?? '').localeCompare(String(a.createdAt ?? '')),
  );

  const body = `/**
 * The shelf, pulled from Bar Assistant.
 *
 * GENERATED FILE - do not edit by hand. Regenerate with:
 *   npm run pull
 *
 * Bar Assistant is the source of truth; this is a committed snapshot of
 * it, because the site is static and public and cannot carry a personal
 * API token. See scripts/pull-backbar.mjs for the reasoning and the
 * refresh steps.
 *
 * The recipes are reproduced exactly as authored. Nothing here is
 * reworded or reordered.
 */

/** One line of a drink's build. */
export type ShelfSpecLine = {
  name: string;
  /** Free text: "45 ml", "2 dash", "top". Null where there is no measure. */
  amount: string | null;
  optional?: boolean;
  substitutes?: string[];
  note?: string;
};

export type ShelfDrink = {
  id: number;
  /** The clean slug, used in the URL. */
  slug: string;
  /** Bar Assistant's own slug, kept so old links still resolve. */
  rawSlug?: string;
  name: string;
  description?: string;
  /** Instructions, split into steps. */
  steps: string[];
  garnish?: string;
  glass?: string;
  method?: string;
  /** Calculated by Bar Assistant, including its own dilution assumption. */
  abv?: number;
  volumeMl?: number;
  /** First non-optional ingredient, used for the shelf filter. */
  base?: string;
  tags: string[];
  spec: ShelfSpecLine[];
  createdAt?: string;
};

/** When this snapshot was taken, so the page can admit its age. */
export const PULLED_AT = ${JSON.stringify(new Date().toISOString())};

/** Everything on the shelf, newest first. */
export const SHELF: ShelfDrink[] = ${JSON.stringify(drinks, null, 2)};
`;

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, body, 'utf8');

  console.log(`wrote ${OUT}`);
  console.log(`  ${drinks.length} drinks`);
  for (const d of drinks) {
    console.log(`  - ${d.name} (${d.spec.length} ingredients)`);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
