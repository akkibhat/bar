# Bar

Two halves of one site, built out of a mixology qualification and the
drinks that came after it.

- **Barbook** - everything behind a bar and what to do with it, in 37
  chapters across nine parts: how every spirit is made and what separates
  them, what beer actually is, the seven methods, ice, glassware, tools,
  service, and the handful of structures almost every cocktail turns out
  to be. Plus a spirit explorer, a searchable glossary, a balance
  calculator and a dilution tool.
- **Backbar** - my own creations, each with the full build in
  millilitres, the method as steps, and a note on why it is put together
  that way.

It is here in case it is useful to anyone else. Nothing a reader enters
is uploaded, and there is nothing to sign in to.

## How far to trust it

I did a cocktail course. I have never worked a licensed shift, and the
qualification is from 2022, so parts of it were already behind by the
time I wrote this up.

Where a chapter goes past what I was actually taught, it says so. Where I
have written something down and cannot verify it, that is marked too -
those are the dashed boxes, and there are a fair few of them. The
[Serving responsibly](lib/content/chapters/service.ts) chapter carries
the strongest warning: it covers New Zealand licensing law, I hold no
Licence Controller Qualification, and anyone actually serving alcohol
should do the one-day course rather than read mine.

## Running it

```bash
npm install
```

```bash
npm run dev
```

Then <http://localhost:3008>.

## Refreshing the shelf

Backbar renders from a committed snapshot rather than from a live API,
for the same reason the wine site does: this is a static, public site and
it cannot carry a personal API token. Bar Assistant holds the truth; the
snapshot is a deliberate copy of it.

```bash
cp .env.example .env.local   # fill in the four BA_ values
```

```bash
npm run pull
```

That rewrites `lib/content/backbar-snapshot.ts`. Commit it. The built
site makes no requests and needs none of those variables to run or
deploy - they exist for the pull script alone.

The recipes are reproduced exactly as authored. Nothing in the pipeline
rewords, reorders or adjusts a measure.

## Layout

| | |
|---|---|
| `app/` | Routes. `/` is the front door, `/book` and `/backbar` the two halves. |
| `lib/content/chapters/` | The 37 chapters, as typed data rather than markup. |
| `lib/content/backbar-snapshot.ts` | Generated. The shelf, from Bar Assistant. |
| `lib/types.ts` | The `Block` union every chapter body is built from. |
| `lib/config.ts` | Feature flags, and the table that names and colours the two halves. |
| `lib/mark.ts` | The mark's geometry, shared by the logo and the landing animation. |
| `components/` | The shell, the tools, and the mark. |
| `scripts/pull-backbar.mjs` | Bar Assistant → snapshot. |
| `_course/` | Photographs of the course workbook. Source for the writing, not site content; gitignored. |

Content is structured data, not JSX: a chapter body is an ordered list of
typed blocks (`p`, `h`, `list`, `steps`, `table`, `note`, `unsure`,
`quote`, `spec`, `tool`), so a spec sheet or an embedded calculator can
sit inline with prose without any HTML parsing.

The `spec` block and the Backbar pages render through the same
`SpecSheet` component, so a classic printed inside a chapter and a drink
on the shelf cannot drift apart visually.

## The mark

A cocktail glass split down the middle, so it reads as both a glass and
an open book - Barbook is the two halves swung apart, Backbar is the same
shape closed onto its stem. Shutting the book is the glass, which is why
the landing page can morph between them without any path-matching: both
states keep identical path commands and only their numbers move.

It is drawn in three size tiers, because at favicon size the valley
between the pages falls under a rendered pixel and the two halves weld
into a plain triangle. As the mark shrinks the pages lean further apart
and the spine thickens, until the smallest tier drops the spine and
carries the split on one wide gap.

## State of it

Builds to 58 static routes. Quizzes and reading progress are written but
switched off behind flags in `lib/config.ts` - this is meant to be
consulted rather than completed.

See [ROADMAP.md](ROADMAP.md) for what is still owed.
