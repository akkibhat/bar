# Roadmap

What is still owed, roughly in the order it is worth doing.

The dashed boxes in the book are the authoritative list - this file is a
summary of them plus the things that are about the site rather than the
writing. Every item marked **mine** needs something only I can supply:
my own notes, or a bottle I have actually poured.

---

## Writing

### Chapters still to fill out

- **Fat-washing and clarification** *(Modern technique)* - method and
  measures are in. Wants a drink of your own built on either.
- **Low and no** *(Low and no)* - method only. Nothing zero-proof has
  gone on the shelf yet.

---

## The site

### Worth doing

- **A drinks journal.** `useNotes` and the `DrinkNote` type are written
  and nothing renders them. The idea is a note against a drink after
  making it - what you would change next time - kept in the browser the
  way the wine site's tasting journal is.
- **Photographs on the shelf.** Bar Assistant has an image field and
  every one of the eight is empty. If drinks get shot, the pull script
  needs to download and optimise them into `public/`, the way the wine
  site does with bottle shots, rather than hotlinking a private instance.
- **Cross-links from a drink to the book.** A Backbar page names its base
  spirit and its method; both have chapters, and neither links. The wine
  site does this from a bottle to its region, and it is the thing that
  makes two halves feel like one site.
- **Filter the shelf by family.** The six families are data and the
  drinks are data; nothing joins them yet. It would want a `family` field
  on the snapshot, which means deciding it per drink by hand, since Bar
  Assistant has nowhere to put it.

### Deferred deliberately

- **Quizzes.** 0 authored so far, and nothing renders them; only the
  `quiz` field in the chapter schema is left. The book is meant to be
  consulted rather than completed.
- **Reading progress.** Written, off behind `PROGRESS_ENABLED` in
  `lib/site.ts`, for the same reason.

### Open questions

- **Deploying.** Cloudflare Workers, assets only, at `bar.pi.co.nz`.
  `wrangler.jsonc` carries the whole configuration: no `main`, so there
  is no Worker script and nothing runs - just the files `npm run build`
  writes to `out/`. No environment variables either; the Bar Assistant
  token is only ever used by the pull script, on my machine.

  ```
  npm run build
  npx wrangler deploy
  ```

- **The old cocktails site.** `cocktails.pi.co.nz` is not going to point
  here, so the links published under it are not being carried across.
  If that changes, the cheapest fix is a redirect rule on that name at
  the Cloudflare edge, mapping `/menu/*` to `/backbar/*` - both names
  are on the same zone. Nothing in this repo can help, since a redirect
  here only runs for a request that already arrived.
