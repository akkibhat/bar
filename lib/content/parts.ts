import type { Part } from '../schema';

/**
 * The nine parts of the book, in reading order, following what the
 * qualification taught. Beer gets its own part because the course barely
 * covered it, and Part IX holds what a working bar does now that was not
 * on the course (batching, low- and no-alcohol, clarification, waste).
 */
export const PARTS: Part[] = [
  {
    numeral: 'I',
    slug: 'foundations',
    title: 'Foundations',
    blurb:
      'What a cocktail is, where the idea came from, how every spirit is made, and how to taste one properly.',
  },
  {
    numeral: 'II',
    slug: 'back-bar',
    title: 'The back bar',
    blurb:
      'Every bottle on the shelf: what it is made from, what it tastes of, and what it is for.',
  },
  {
    numeral: 'III',
    slug: 'beer',
    title: 'Beer',
    blurb:
      'The other thing a bar pours, and how to pour it.',
  },
  {
    numeral: 'IV',
    slug: 'balance',
    title: 'Balance and structure',
    blurb:
      'The part nobody taught me: why the recipes work, and the six shapes behind them.',
  },
  {
    numeral: 'V',
    slug: 'technique',
    title: 'Technique',
    blurb:
      'Shaking, stirring, ice, measuring, and what each one does to the drink.',
  },
  {
    numeral: 'VI',
    slug: 'kit',
    title: 'The kit',
    blurb:
      'Glassware, tools, and how a bar is laid out so the work can happen at speed.',
  },
  {
    numeral: 'VII',
    slug: 'service',
    title: 'Service',
    blurb:
      'Taking the order, finishing the drink, and the parts of the job that are about people.',
  },
  {
    numeral: 'VIII',
    slug: 'classics',
    title: 'The classics',
    blurb:
      'The drinks worth knowing by heart, written as specs, grouped by the structure they share.',
  },
  {
    numeral: 'IX',
    slug: 'past-the-syllabus',
    title: 'Past the syllabus',
    blurb:
      'What the course did not cover and a bar now expects: batching, the zero-proof shelf, and the techniques that arrived after.',
  },
];

/** Look up a part by slug. */
export function lookupPart(slug: string): Part | undefined {
  return PARTS.find((p) => p.slug === slug);
}
