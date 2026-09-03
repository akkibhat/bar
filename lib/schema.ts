/**
 * Shared type definitions for the whole site.
 *
 * Everything the site renders - chapters, spirits, glossary terms,
 * flavour families - is plain structured data described here. Keeping the
 * shapes in one file means the content files stay readable (they are
 * almost pure data) and the components can rely on a single source of
 * truth for what a "chapter" is.
 */

/* ------------------------------------------------------------------ *
 * Book structure
 * ------------------------------------------------------------------ */

/**
 * A part is a top-level grouping of chapters - "Foundations", "Technique",
 * and so on. Parts exist for navigation and pacing; all the real content
 * lives on the chapters inside them.
 */
export type Part = {
  /** Roman ordinal shown in the interface, e.g. "I", "II". */
  numeral: string;
  /** URL-safe identifier. */
  slug: string;
  title: string;
  /** One line explaining what this part is for, shown on the contents. */
  blurb: string;
};

/**
 * One line of a drink's build.
 *
 * Deliberately the same shape the shelf uses for a real recipe, so a spec
 * printed inside a chapter and a spec on a Backbar page are rendered by
 * the same component and cannot drift apart visually.
 */
export type SpecLine = {
  name: string;
  /** Free text rather than a number: "45 ml", "2 dash", "top". */
  amount: string | null;
  optional?: boolean;
  /** What to reach for when the named bottle is not on the shelf. */
  substitutes?: string[];
};

/**
 * A drink's build as it appears inside a chapter.
 *
 * The classics are taught as specs rather than as prose because that is
 * how they are written down behind a bar, and reading one should train
 * the same glance that reading a menu does.
 */
export type ChapterSpec = {
  name: string;
  glass: string;
  ice: string;
  method: string;
  spec: SpecLine[];
  garnish: string;
  /** Which of the six families this drink belongs to, if any. */
  family?: string;
  /** One line on why this drink is worth knowing. */
  note?: string;
};

/**
 * A block is one piece of a chapter's body. Chapters are built from an
 * ordered list of these rather than from a single HTML string, so that
 * rich elements - tables, callouts, specs, embedded tools - can sit
 * inline with prose without any HTML parsing.
 */
export type Block =
  /** A paragraph of body text. Supports the light markup in `lib/markup.tsx`. */
  | { kind: 'p'; text: string }
  /** A sub-heading inside a chapter. */
  | { kind: 'h'; text: string }
  /** A short italic line under a heading, listing descriptors. */
  | { kind: 'descriptors'; text: string }
  /** An unordered list. */
  | { kind: 'list'; items: string[] }
  /** A numbered list, used for procedures. */
  | { kind: 'steps'; items: string[] }
  /** A pulled-out aside on tinted paper. */
  | { kind: 'note'; title?: string; text: string }
  /**
   * Something not yet settled - a figure whose sources disagree, a claim
   * not yet checked, or a passage still owed from my own notes.
   *
   * It exists because this is one person writing up what they were taught
   * rather than a reference work, and a project like that is allowed gaps
   * provided it marks them. Rendered with a dashed border, which reads as
   * provisional in a way a note's solid rule does not.
   */
  | { kind: 'unsure'; title?: string; text: string }
  /** A quotation with attribution. */
  | { kind: 'quote'; text: string; cite: string }
  /** A simple data table. */
  | { kind: 'table'; head: string[]; rows: string[][] }
  /** One drink's build, set as a spec sheet. */
  | { kind: 'spec'; spec: ChapterSpec }
  /**
   * An interactive tool embedded mid-chapter. The `tool` value selects
   * which component renders here - see `components/EmbeddedTool.tsx`.
   */
  | {
      kind: 'tool';
      tool:
        | 'ratio'
        | 'dilution'
        | 'units'
        | 'abv'
        | 'method'
        | 'glassware'
        | 'flavourWheel'
        | 'spiritFilter'
        | 'families'
        /* The drawn figures. Not tools in the working sense - nothing to
           put a number into - but they sit in the body the same way. */
        | 'stills'
        | 'tastingGlasses'
        | 'peat'
        | 'molasses'
        | 'agave'
        | 'brands'
        | 'brew'
        | 'pour'
        | 'shaker';
      /** For `spiritFilter`: lock it to one category, hiding the control. */
      only?: string;
    };

/** A single multiple-choice question in a chapter's end-of-chapter check. */
export type Question = {
  q: string;
  /** Answer options in display order. */
  options: string[];
  /** Index into `options` of the correct answer. */
  answer: number;
  /** Shown after answering, whether right or wrong. */
  because: string;
};

/** One chapter. The unit a reader moves through. */
export type Chapter = {
  slug: string;
  /** Slug of the part this chapter belongs to. */
  part: string;
  /** Display number within the whole book, 1-based. */
  n: number;
  title: string;
  /** Standfirst paragraph, set larger under the title. */
  standfirst: string;
  /** Rough reading time in minutes, shown in the contents. */
  minutes: number;
  body: Block[];
  quiz?: Question[];
};

/* ------------------------------------------------------------------ *
 * Spirits
 * ------------------------------------------------------------------ */

/**
 * Structural measurements are stored as 1-5 integers so the spirit
 * explorer can filter and sort on them, and so the little bar meters in
 * the interface have a fixed scale.
 */
export type Scale = 1 | 2 | 3 | 4 | 5;

/** The shelf a spirit belongs to. Drives the explorer's main filter. */
export type SpiritCategory =
  | 'neutral'
  | 'juniper'
  | 'grain'
  | 'cane'
  | 'agave'
  | 'fruit'
  | 'liqueur'
  | 'fortified'
  | 'bitter';

export type Spirit = {
  slug: string;
  name: string;
  category: SpiritCategory;
  /** Other names the same thing goes by. */
  aliases?: string[];
  /** What it is distilled or made from. */
  base: string;
  /** Where it is at its most characteristic. */
  homes: string[];
  /** Typical bottling strength, as a range in percent. */
  abv: [number, number];
  /** Whether wood is part of the definition, optional, or absent. */
  wood: 'always' | 'sometimes' | 'never';
  /** How sweet the category runs. Liqueurs sit high, dry spirits at 1. */
  sweetness: Scale;
  /** How assertive it is in a mixed drink. */
  intensity: Scale;
  /** Three to five flavour cues, shown as chips. */
  notes: string[];
  /** Two or three sentences on the character and why it matters. */
  note: string;
  /** One drink that shows what this spirit is for. */
  drinkIt: string;
};

/* ------------------------------------------------------------------ *
 * Glossary
 * ------------------------------------------------------------------ */

export type GlossaryCategory =
  | 'technique'
  | 'tool'
  | 'glass'
  | 'ingredient'
  | 'structure'
  | 'service'
  | 'measure';

export type GlossaryTerm = {
  slug: string;
  term: string;
  category: GlossaryCategory;
  /** Word origin, where it is interesting or clarifying. */
  etymology?: string;
  definition: string;
  /** Slugs of related terms, rendered as links. */
  seeAlso?: string[];
};

/* ------------------------------------------------------------------ *
 * Flavour
 * ------------------------------------------------------------------ */

/**
 * The flavour wheel is two levels deep: six families, each holding a
 * handful of specific descriptors. Six because that is how many
 * categorical fills can be told apart at a glance, and because the
 * spirits shelf genuinely divides about that many ways.
 */
export type FlavourFamily = {
  slug: string;
  name: string;
  /** Hue used for this family's wedge on the wheel and its chips. */
  colour: string;
  /** What this family generally signals about a spirit. */
  meaning: string;
  descriptors: string[];
};

/* ------------------------------------------------------------------ *
 * Cocktail families
 * ------------------------------------------------------------------ */

/**
 * One of the root templates every other drink is a variation on.
 *
 * This is the organising idea the course workbook never states: the
 * classics are not twenty-five separate recipes to memorise, they are
 * six structures with the parts swapped. Holding them as data lets the
 * families page, the chapter and the shelf all agree on what a Sidecar
 * actually is.
 */
export type Family = {
  slug: string;
  name: string;
  /** The structure in words: "spirit + citrus + sweetener". */
  formula: string;
  /** A worked starting ratio, where the family has one. */
  ratio?: string;
  /** What the family is *for* - the problem it solves. */
  about: string;
  /** The drink that defines it. */
  archetype: string;
  /** Others that are the same structure wearing different bottles. */
  members: string[];
  /** Usual method for the family. */
  method: string;
};
