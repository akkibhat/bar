import type { Metadata } from 'next';
import Link from 'next/link';
import Masthead from '@/components/Masthead';
import RatioTool from '@/components/RatioTool';

export const metadata: Metadata = {
  title: 'Balance calculator',
  description:
    'Put a build in and see which of the sour templates it is nearest, and how sweet it will read.',
};

/** The balance calculator as a standalone page. */
export default function RatioPage() {
  return (
    <div className="relative mx-auto max-w-[46rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
      <Masthead
        title="Balance"
        standfirst="Two parts spirit, one part citrus, one part sweet. Move the sliders and see what a build is actually doing."
      />

      <RatioTool />

      <p className="t-base max-w-[34rem]">
        There is no correct ratio - a drier palate genuinely wants less sugar,
        and how ripe your limes are moves the answer week to week. So this
        names the template a build is nearest rather than marking it right or
        wrong, and only warns when a drink sits far enough outside all of them
        to be a mistake rather than a preference.
      </p>

      <p className="t-caption mt-4" style={{ color: 'var(--ink-soft)' }}>
        <Link href="/book/balance" style={{ color: 'var(--accent-book)' }}>
          The balance chapter
        </Link>{' '}
        covers what moves the ratio, and what to add when a drink tastes
        wrong.
      </p>
    </div>
  );
}
