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

- **Quizzes.** 0 authored so far, and the flag is off. The book is meant
  to be consulted rather than completed.
- **Reading progress.** Written, off behind the same flag, for the same
  reason.

### Open questions

- **Deploying.** Nothing is set up. The build is fully static with no
  runtime dependencies, so anywhere that serves files will do.
- **Domain, and the old site.** `next.config.ts` redirects `/menu` and
  `/menu/:slug` to their Backbar equivalents, which handles the paths.
  What it does not handle is the old origin: if the cocktails site keeps
  its own domain, that needs a redirect at the host, and if it does not,
  the DNS should point here. See [REDIRECTS.md](REDIRECTS.md).
