# Roadmap

What is still owed, roughly in the order it is worth doing.

The dashed boxes in the book are the authoritative list - this file is a
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

- **New Zealand drinking history** *(A short history)* - the licensing
  changes, when cocktail bars actually arrived here, what a bar list
  looked like before that.
- **New Zealand gin** *(Vodka and gin)* - which ones are worth pouring,
  and what horopito, kawakawa and mānuka do to a G&T. From bottles I have
  poured, not from a shop list.
- **New Zealand hops and craft brewing** *(Ale and lager)* - Nelson
  Sauvin, Riwaka, Motueka, and breweries I have actually drunk.
- **Rum sweetening and regional styles** *(Rum)* - added sugar after
  distillation, and Jamaican high-ester funk against Spanish-style *ron*.
- **Buying local** *(Being the bartender)* - my margin note just says
  "buy local?" against the upselling page. It is the most defensible kind
  of upsell there is and deserves a proper paragraph.
- **Bar operations** *(The bar itself)* - opening and closing, par
  levels, stocktake, wastage. None of it is there.

### Written from outside the course, and thin because of it

- **Beer service** *(Beer behind the bar)* - the standfirst promises the
  pour, line cleaning and the beer cocktails. There is no line cleaning
  section: the chapter has two headings, The pour and Beer in a cocktail.
  Write it from the Belgian bar - kegs, wine fridges, lines every
  fortnight - or take the promise out of the standfirst.
- **Fat-washing and clarification** *(Modern technique)* - described from
  reading. I have not done either. The quantities are other people's
  starting points.
- **Low and no** *(Low and no)* - method only. Nothing zero-proof has
  gone on the shelf yet.
- **Agave** - assembled from category rules. Verify the ageing bands
  against a current source.

### Deferred, with a decision already taken

- **The Daiquiri does not fit the ratio it demonstrates.** *(Balance,
  and The sours)* Chapter 16 cites it as 60 : 20 : 20 to show 2 : 1 : 1,
  but the spec is 60 ml rum, 20 ml lime and 2 bar spoons sugar - about
  10 ml, so nearer 6 : 2 : 1. The recipe stays as it is for now. Settle
  it in the IBA pass, where the same question comes up for the
  Margarita, the Pisco Sour, the Mojito and the Boulevardier.

- **The Negroni batch is under-diluted by its own rule.** *(Batching and
  scaling)* The chapter says a stirred drink finishes at 20-25% water,
  then adds 220 ml to 1080 ml of spirit, which is 17%. Hitting 20% needs
  about 270 ml. Changing it changes the worked example.

- **The glassware tool holds fourteen glasses; chapter 23 lists
  seventeen.** *(Glassware, and lib/glassware.ts)* Three in the chapter
  tables are not in the tool, so the standalone page is missing them.

- **Write the intent into the Backbar descriptions.** *(Bar Assistant,
  not code.)* Seven of the eight need rewriting so "what I was after" is
  backed by something; the Espresso Martini has no description at all.

- **The IBA pass.** *(`_workings/iba-comparison.md`)* All 25 drinks
  checked against the IBA official recipes. 21 are on the list, 4 differ
  materially - the Margarita, the Pisco Sour, the Mojito and the
  Boulevardier - and 11 differ in small ways. The plan is an `iba` field
  on `ChapterSpec` carrying the category and the official name where it
  differs, shown on the spec sheet and linked. Paused deliberately;
  do it in one pass once the writing is done.

- **The book keeps explaining a course the reader cannot see.** Counted
  properly this is 13 sentences, not the 26 an earlier raw text search
  reported - that count caught code comments, the same sentence twice,
  and the provenance lines inside `unsure` blocks. Eight were in the
  prose and are now rewritten. The remaining five sit inside dashed
  boxes, where naming the course is doing honest work: it tells the
  reader how far to trust the page. Those stay.

- **The `unsure` block titles are a formula.** Eighteen blocks, and
  eleven of the titles are variations on two phrases: "Not from the
  course" appears five times, "Mine to write / fill in / add / check"
  another six. The dashed border already says the block is provisional,
  so the title is spending its only line saying it twice. Each should
  name the actual gap instead - "The ageing bands need checking", "No
  New Zealand gin here yet", "I have not fat-washed anything".

- **Copyright and permission.** Nothing in the repo states where the
  course material stands, and the book is derived from a paid
  qualification's teaching. Decide what the site says about it, whether
  anything needs attributing, and what licence the writing itself
  carries. Also covers the IBA recipes, if the IBA pass ends up quoting
  their measures rather than just linking to them.

- **Balance has to be redone in the same pass.** *(Balance)* Three
  blocks in that chapter hard-code numbers taken from the specs, and
  nothing connects them - change a spec and the prose goes quietly wrong.

  - `balance:3` states the template as 60 : 30 : 30, and 45 : 22.5 :
    22.5 for a smaller drink. No spec in the book actually uses 22.5.
  - `balance:4` cites four drinks by their measures: the Daiquiri as
    60 / 20 / 20, the Margarita as 60 : 25 : 30, the Whiskey Sour as
    45 : 25 : 20, the White Lady as 40 / 30 / 20. The Margarita is one
    of the four the IBA has materially different (they pour 50 / 20 /
    15), and the Daiquiri's third figure does not match its own spec,
    which lists two bar spoons rather than 20 ml.
  - `balance:5` offers 2 : 1 : 0.75 as the drier modern alternative.

  So the order matters: settle the specs first, then rewrite these three
  from whatever the specs end up saying. Doing it the other way round
  means writing the paragraph twice.

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
