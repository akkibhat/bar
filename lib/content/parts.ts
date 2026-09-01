import type { Part } from '../schema';

/**
 * The nine parts of the book, in reading order.
 *
 * The shape follows what the qualification actually taught, in the order
 * it made sense to write it up: what a cocktail is, then the bottles,
 * then how a drink is put together, then the kit and the service, then
 * the classics themselves. Beer gets its own part because a bar pours it
 * and the course barely mentioned it.
 *
 * Part IX is the honest one. The qualification is a hospitality
 * certificate from 2022 and there are things a working bar in 2026 does
 * that were not on it - batching, low- and no-alcohol, clarification,
 * waste. Rather than smuggle those into the earlier parts as though they
 * had been taught, they sit at the end under a heading that says where
 * they came from.
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
      'The other thing a bar pours, and the one the cocktail course skipped almost entirely.',
  },
  {
    numeral: 'IV',
    slug: 'balance',
    title: 'Balance and structure',
    blurb:
      'The part nobody taught me: why the recipes work, and the six shapes almost every drink turns out to be.',
  },
  {
    numeral: 'V',
    slug: 'technique',
    title: 'Technique',
    blurb:
      'Shaking, stirring, ice, measuring, and what actually happens to a drink while you are doing it.',
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
      'Taking the order, finishing the drink, and the parts of the job that are about people rather than liquid.',
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
