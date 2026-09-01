import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import DrinkStrength from '@/components/DrinkStrength';

export const metadata: Metadata = {
  title: 'Standard drinks',
  description:
    'Combined strength and New Zealand standard drinks for any build, before and after the water the ice adds.',
};

export default function UnitsPage() {
  return (
    <div className="relative mx-auto max-w-[46rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
      <PageHeader
        eyebrow="Tool"
        title="How strong is it"
        standfirst="Add each pour and its strength. Percentages do not average, so this sums the actual alcohol rather than the labels."
      />

      <DrinkStrength />

      <p className="t-base max-w-[34rem]">
        A New Zealand standard drink is <strong>10 g of pure alcohol</strong>.
        Ethanol weighs 0.789 g per millilitre, so a 30 ml pour of a 40% spirit
        works out at 0.95 of one - which is the figure this is worth
        sanity-checking against.
      </p>

      <p className="t-caption mt-4" style={{ color: 'var(--ink-soft)' }}>
        Dilution changes the strength but not the count. The alcohol is all
        still in the glass; there is just more water around it.
      </p>
    </div>
  );
}
