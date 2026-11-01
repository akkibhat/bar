import type { Metadata } from 'next';
import Masthead from '@/components/Masthead';
import SpiritExplorer from '@/components/SpiritExplorer';
import { SPIRITS } from '@/lib/spirits';

export const metadata: Metadata = {
  title: 'Spirit explorer',
  description:
    'The back bar, filterable by shelf and sortable by how sweet and how assertive each bottle runs.',
};

export default function SpiritsPage() {
  return (
    <div className="relative mx-auto max-w-[52rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16">
      <Masthead
        title="Spirit explorer"
        standfirst={`${SPIRITS.length} bottles worth reaching for, described in the terms that decide whether one belongs in a given drink.`}
      />
      <SpiritExplorer />
    </div>
  );
}
