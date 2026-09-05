import type { Metadata } from 'next';
import Link from 'next/link';
import Masthead from '@/components/Masthead';
import DilutionTool from '@/components/DilutionTool';
import DrinkStrength from '@/components/DrinkStrength';

export const metadata: Metadata = {
  title: 'Strength and dilution',
  description:
    'What ice does to a drink, how much water a batch is missing, and how many standard drinks are in the glass.',
};

/**
 * Strength and dilution, on one page.
 *
 * These were two routes - `/dilution` for what the ice does, `/units` for
 * standard drinks - and splitting them was wrong, because they are one
 * calculation looked at from two ends. The water the ice adds is exactly
 * what moves a build from its mixed strength to its served strength, and
 * the number of standard drinks does not move at all, because dilution
 * adds water rather than removing alcohol.
 *
 * Apart, those two facts are trivia. Together on one page they are the
 * point: a drink gets weaker and no safer.
 *
 * Standard drinks had its own page once. It was the same sum seen from
 * the other end, so the two are one page now.
 */
export default function DilutionPage() {
  return (
    <div className="mx-auto max-w-[46rem] px-6 sm:px-10 py-12 lg:py-20">
      <Masthead
        eyebrow="Tool"
        title="Strength and dilution"
        standfirst="There is no chilling without dilution and no dilution without chilling. The water is part of the recipe whether or not the recipe mentions it."
      />

      <DilutionTool />

      <p className="t-base max-w-[34rem]">
        The figures are the standard working ranges rather than a formula.
        There is a published model that predicts dilution from the finishing
        temperature, but a tool that asks how cold your shaker got is not a
        useful tool.
      </p>

      <hr className="rule-double my-10" />

      <h2 className="display t-h2 leading-none mb-3">How strong is it</h2>

      <p className="t-base mb-2 max-w-[34rem]">
        Add each pour and its strength. Percentages do not average, so this
        sums the actual alcohol rather than the labels.
      </p>

      <DrinkStrength />

      <p className="t-base max-w-[34rem]">
        A New Zealand standard drink is <strong>10 g of pure alcohol</strong>.
        Ethanol weighs 0.789 g per millilitre, so a 30 ml pour of a 40% spirit
        works out at 0.95 of one - the figure worth sanity-checking against.
      </p>

      <p className="t-base mt-4 max-w-[34rem]">
        Dilution changes the strength but not the count. The alcohol is all
        still in the glass; there is just more water around it. That is why
        these two sit on one page: a diluted drink is weaker and not one unit
        safer.
      </p>

      <p className="t-caption mt-8" style={{ color: 'var(--ink-soft)' }}>
        <Link href="/book/ice" style={{ color: 'var(--accent-book)' }}>
          The ice chapter
        </Link>{' '}
        covers why a fuller glass melts more slowly, and how to freeze clear
        ice.{' '}
        <Link href="/book/batching" style={{ color: 'var(--accent-book)' }}>
          Batching
        </Link>{' '}
        is where the missing water matters most.
      </p>
    </div>
  );
}
