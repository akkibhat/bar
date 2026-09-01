import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import DilutionTool from '@/components/DilutionTool';

export const metadata: Metadata = {
  title: 'Dilution and ice',
  description:
    'What ice does to the strength of a drink, and how much water a batch is missing.',
};

export default function DilutionPage() {
  return (
    <div className="relative mx-auto max-w-[46rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
      <PageHeader
        eyebrow="Tool"
        title="Dilution"
        standfirst="There is no chilling without dilution and no dilution without chilling. The water is part of the recipe whether or not the recipe mentions it."
      />

      <DilutionTool />

      <p className="t-base max-w-[34rem]">
        The figures are the standard working ranges rather than a formula.
        There is a published model that predicts dilution from the finishing
        temperature, but a tool that asks how cold your shaker got is not a
        useful tool.
      </p>

      <p className="t-caption mt-4" style={{ color: 'var(--ink-soft)' }}>
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
