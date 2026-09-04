# Roadmap

What is still owed, roughly in the order it is worth doing.

The dashed boxes in the book are the authoritative list - this file is a
summary of them plus the things that are about the site rather than the
writing. Every item marked **mine** needs something only I can supply:
my own notes, or a bottle I have actually poured.

---

## Writing

### Written from outside the course, and thin because of it

- **Fat-washing and clarification** *(Modern technique)* - described from
  reading. I have not done either. The quantities are other people's
  starting points.
- **Low and no** *(Low and no)* - method only. Nothing zero-proof has
  gone on the shelf yet.

### Deferred, with a decision already taken

- **Write the intent into the Backbar descriptions.** *(Bar Assistant,
  not code.)* Seven of the eight need rewriting so "what I was after" is
  backed by something; the Espresso Martini has no description at all.

- **Attribution for the course material.** The copyright line is done -
  every page carries it, from `COPYRIGHT_FROM` in `lib/site.ts`. What is
  still open is narrower: the book is written up from a paid
  qualification's teaching, and nothing in the repo says how that is
  credited. The IBA side is settled by linking rather than quoting.

---

## The site

### Worth doing

- **Write the intent into the descriptions.** *(Bar Assistant, not code.)*
  The front door now promises "the measures, the method, and what I was
  after". The first two are solid - the specs and steps come across
  intact. The third mostly does not.

  Bar Assistant has no field for intent, so the only place it can live is
  `description`, and seven of the eight there are flavour summaries
  rather than reasons: *"A crisp, refreshing Collins with bright lemon,
  botanical gin and a warming ginger finish."* That is back-of-menu copy.
  It says what the drink tastes like, which the spec underneath already
  implies.

  **Filthy Mistress is the one that does it properly:** *"Smoky, sweet and
  quietly vicious. The butterfly pea syrup goes in blue and turns violet
  the moment the lime hits it. Tabasco does the rest."* That has a voice,
  and it explains the idea the drink was built around.

  Two things to do:

  1. **Espresso Martini has no description at all**, so that page shows
     nothing where the copy promises something. It needs one either way.
  2. Rewrite the other six in the Filthy Mistress register - what you
     were going for, or the one decision the drink turns on.

  Until then the promise is running ahead of the data. The alternative is
  to soften the line back to something the descriptions already deliver.

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
