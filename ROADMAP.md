# Roadmap

What is still owed, roughly in the order it is worth doing.

The dashed boxes in the book are the authoritative list - this file is a
summary of them plus the things that are about the site rather than the
writing. Every item marked **mine** needs something only I can supply:
my own notes, or a bottle I have actually poured.

---

## Writing

### Review after the IBA pass

- **Margarita.** Now the IBA pour, 50 / 20 / 15, with the 45 / 30 / 15 most
  bars use in the note. Read the spec, the note and `balance:4` together
  and make sure the argument for the drier pour is one I would make out
  loud.
- **Old Fashioned.** Kept at 45 ml, the IBA figure, with the 60 most bars
  pour in the note and the family ratio widened to 45 to 60. Decide
  whether the sheet should lead with the number I actually pour.

### Needs checking before it can be trusted

- **Responsible service.** Find out whether this was taught as a separate
  module and simply is not in the pages I photographed. If it was, my own
  notes should replace most of that chapter.


### Written from outside the course, and thin because of it

- **Fat-washing and clarification** *(Modern technique)* - described from
  reading. I have not done either. The quantities are other people's
  starting points.
- **Low and no** *(Low and no)* - method only. Nothing zero-proof has
  gone on the shelf yet.

### Deferred, with a decision already taken

- **The glassware tool holds fourteen glasses; chapter 23 lists
  seventeen.** *(Glassware, and lib/glassware.ts)* Three in the chapter
  tables are not in the tool, so the standalone page is missing them.

- **Write the intent into the Backbar descriptions.** *(Bar Assistant,
  not code.)* Seven of the eight need rewriting so "what I was after" is
  backed by something; the Espresso Martini has no description at all.

- **Copyright and permission.** Nothing in the repo states where the
  course material stands, and the book is derived from a paid
  qualification's teaching. Decide what the site says about it, whether
  anything needs attributing, and what licence the writing itself
  carries. Also covers the IBA recipes, if the IBA pass ends up quoting
  their measures rather than just linking to them.

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
