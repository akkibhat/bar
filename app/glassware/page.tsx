import type { Metadata } from 'next';
import Link from 'next/link';
import Masthead from '@/components/Masthead';
import GlasswarePicker from '@/components/GlasswarePicker';
import { GLASSES } from '@/lib/glassware';

export const metadata: Metadata = {
  title: 'Glassware',
  description:
    'Which glass a drink goes in, filtered by how it is served, with the reason the shape is doing a job.',
};

export default function GlasswarePage() {
  return (
    <div className="relative mx-auto max-w-[52rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
      <Masthead
        eyebrow="Reference"
        title="Which glass"
        standfirst={`${GLASSES.length} glasses, filtered by how the drink is served - which is the thing you know first, and the thing everything else follows from.`}
      />

      <GlasswarePicker />

      <p className="t-caption max-w-[34rem]" style={{ color: 'var(--ink-soft)' }}>
        If it has a stem, hold the stem; if it does not, hold the bottom third.{' '}
        <Link href="/book/glassware" style={{ color: 'var(--accent-book)' }}>
          The glassware chapter
        </Link>{' '}
        has the full set with capacities.
      </p>
    </div>
  );
}
