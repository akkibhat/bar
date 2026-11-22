# Bar

A cocktail course and a shelf of my own drinks, on one site.

Live at **[bar.pi.co.nz](https://bar.pi.co.nz)**.

**Barbook** is everything behind a bar and what to do with it: how every
spirit is made and what separates one from the next, what beer actually
is, the seven methods, ice, glassware, tools, service, and the handful of
structures almost every cocktail turns out to be. Thirty-seven chapters.

**Backbar** is the drinks I have made up, each with the full build in
millilitres, the method as steps, and a note on why it is put together
that way.

Nothing a reader types is uploaded and there is nothing to sign in to.

---

## Getting it running

```bash
npm install
```

```bash
npm run dev
```

<http://localhost:3008>

## Getting the drinks

Backbar renders from a committed snapshot, not a live API. Bar Assistant
holds the truth; this is a deliberate copy of it, because the site is
static and public and cannot carry a personal token.

```bash
cp .env.example .env.local   # four BA_ values
npm run pull
```

That rewrites `lib/content/backbar-snapshot.ts`. Commit it. The built
site makes no requests and needs none of those variables to run or
deploy - they exist for the pull script alone.

Recipes are reproduced exactly as authored. Nothing in the pipeline
rewords, reorders or adjusts a measure.

## Editing the chapters

The prose lives as strings inside typed arrays, which is the right shape
for the site and an awkward one to write in. So it comes out to Markdown,
gets edited there, and goes back in.

```bash
npm run chapters:out              # 37 files into _workings/chapters/
npm run chapters:in -- --dry-run  # say what would change
npm run chapters:in               # do it
```

One file per chapter, numbered by reading order: `07-rum.md`,
`13-what-beer-is.md`. Each block carries an HTML comment naming its
chapter and index, which is how an edit finds its way home; leave those
alone. Tables, specs and embedded tools export marked READ-ONLY and are
ignored coming back, as is adding or deleting a block. Do those in
TypeScript.

Nothing is rewritten wholesale. The importer swaps one string literal at
a time, having first checked it appears exactly once, and refuses rather
than guesses if it does not.

---

## How it is put together

Chapters are **data, not markup**. A chapter body is an ordered list of
typed blocks - `p`, `h`, `list`, `steps`, `table`, `note`, `unsure`,
`quote`, `spec`, `tool` - so a spec sheet or a working calculator drops
inline between two paragraphs with no HTML parsing anywhere.

The **spec sheet** is the one component shared between a classic printed
inside a chapter and a drink on the shelf, which is why the two can never
drift apart visually.

Every **tool exists twice**: embedded in the chapter that explains it,
and standing alone at its own route for when you already know what you
want. Same component both times.

### Where things are

    app/                      routes; / is the cover, /book and /backbar the halves
    app/globals.css           the whole design system
    components/               the frame, the marks, the tools
    lib/schema.ts             the Block union every chapter is built from
    lib/site.ts               the two halves, and the switches
    lib/geometry.ts           the mark, shared by the logo and the cover
    lib/content/chapters/     the thirty-seven, as typed data
    lib/content/*-snapshot.ts generated; do not edit
    scripts/pull-backbar.mjs  Bar Assistant to snapshot
    scripts/chapters-*.mjs    chapters out to Markdown and back
    _workings/                editorial scratch, and the Markdown the
                              chapters export to. Gitignored.
    _course/                  photographs of the workbook. Source for the
                              writing, not site content. Gitignored.

## The look

A back bar after hours: espresso ground, oat text and one amber accent
for both halves, with a light oat-paper theme behind the switch. Bodoni
for the names, wide small caps for the labels, hairline rules, and
measures running to the right edge behind dot leaders, the way a printed
cocktail menu sets them.

Every colour is measured rather than picked. Each text weight clears
4.5:1 on both grounds, and the six flavour fills are derived at a single
luminance so one value works in both themes and still takes a pale label.

## The mark

A cocktail glass split down the middle, so it reads as both a glass and
an open book. Barbook is the two halves swung apart; Backbar is the same
shape closed onto its stem. Three size tiers, because below about 20px
the valley between the pages falls under a rendered pixel and the halves
weld into a plain triangle - so as it shrinks the pages lean further
apart and the spine thickens, until the smallest tier drops the spine
altogether.

## Where it is up to

Every route is prerendered and there is no server. Reading progress is
written and switched off in `lib/site.ts`; this is meant to be consulted
rather than completed.

[ROADMAP.md](ROADMAP.md) has what is still owed.
