# Roadmap

What is still owed, roughly in the order it is worth doing.

The dashed boxes in the book are the authoritative list — this file is a
summary of them plus the things that are about the site rather than the
writing. Every item marked **mine** needs something only I can supply:
my own notes, or a bottle I have actually poured.

---

## Writing

### Needs checking before it can be trusted

- **Whisky figures.** My notes have "barrel 760–800% of task" and "72%
  evaporate per year", both of which are garbled and match no figure I
  can find. The 2%-a-year angels' share in the chapter is the standard
  number; work out what I actually wrote down.
- **Bourbon legal minima.** The chapter states 51% corn. My margin note
  says 57%. One of them is wrong, and the distillation and barrelling
  proofs I wrote down are the US legal maxima rather than normal
  practice.
- **Angostura's oversized label.** The chapter repeats the company's own
  story that it is an unfixed printing error. I have found no independent
  source. Either find one or soften the claim.
- **Aquafaba conversion.** 20–25 ml per egg white is general practice,
  not something I have measured side by side. Test it.
- **Responsible service.** Find out whether this was taught as a separate
  module and simply is not in the pages I photographed. If it was, my own
  notes should replace most of that chapter.

### Mine to write

- **New Zealand drinking history** *(A short history)* — the licensing
  changes, when cocktail bars actually arrived here, what a bar list
  looked like before that.
- **New Zealand gin** *(Vodka and gin)* — which ones are worth pouring,
  and what horopito, kawakawa and mānuka do to a G&T. From bottles I have
  poured, not from a shop list.
- **New Zealand hops and craft brewing** *(Ale and lager)* — Nelson
  Sauvin, Riwaka, Motueka, and breweries I have actually drunk.
- **Rum sweetening and regional styles** *(Rum)* — added sugar after
  distillation, and Jamaican high-ester funk against Spanish-style *ron*.
- **Buying local** *(Being the bartender)* — my margin note just says
  "buy local?" against the upselling page. It is the most defensible kind
  of upsell there is and deserves a proper paragraph.
- **Bar operations** *(The bar itself)* — opening and closing, par
  levels, stocktake, wastage. None of it is there.

### Written from outside the course, and thin because of it

- **Beer service** *(Beer behind the bar)* — line cleaning, keg handling,
  cellar temperature. I have never run a tap system. This either needs
  someone who has, or it should say less.
- **Fat-washing and clarification** *(Modern technique)* — described from
  reading. I have not done either. The quantities are other people's
  starting points.
- **Low and no** *(Low and no)* — method only. Nothing zero-proof has
  gone on the shelf yet.
- **Agave** — assembled from category rules. Verify the ageing bands
  against a current source.

---

## The site

### Worth doing

- **Write the intent into the descriptions.** *(Bar Assistant, not code.)*
  The front door now promises "the measures, the method, and what I was
  after". The first two are solid — the specs and steps come across
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
  2. Rewrite the other six in the Filthy Mistress register — what you
     were going for, or the one decision the drink turns on.

  Until then the promise is running ahead of the data. The alternative is
  to soften the line back to something the descriptions already deliver.

- **A drinks journal.** `useJournal` and the `DrinkNote` type are written
  and nothing renders them. The idea is a note against a drink after
  making it — what you would change next time — kept in the browser the
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
