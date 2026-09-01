import type { Metadata } from 'next';
import PageHeader from '@/components/PageHeader';
import GlossarySearch from '@/components/GlossarySearch';
import { GLOSSARY } from '@/lib/glossary';

export const metadata: Metadata = {
  title: 'Glossary',
  description:
    'Every term in the book that would stop a reader who had not met it, searchable by meaning as well as by name.',
};

export default function GlossaryPage() {
  return (
    <div className="relative mx-auto max-w-[46rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
      <PageHeader
        eyebrow="Reference"
        title="Glossary"
        standfirst={`${GLOSSARY.length} terms. Search the meaning as well as the word — the common case is remembering what something does and not what it is called.`}
      />
      <GlossarySearch />
    </div>
  );
}
