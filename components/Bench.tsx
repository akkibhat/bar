import Link from 'next/link';
import type { Block } from '@/lib/schema';
import RatioTool from './RatioTool';
import DilutionTool from './DilutionTool';
import DrinkStrength from './DrinkStrength';
import MethodChooser from './MethodChooser';
import GlasswarePicker from './GlasswarePicker';
import FlavourWheel from './FlavourWheel';
import SpiritExplorer from './SpiritExplorer';
import FamiliesTable from './FamiliesTable';
import StillsFigure from './StillsFigure';
import TastingGlasses from './TastingGlasses';
import PeatSequence from './PeatSequence';
import MolassesSequence from './MolassesSequence';
import AgaveSequence from './AgaveSequence';
import BrandsFigure from './BrandsFigure';
import BrewSequence from './BrewSequence';
import PourFigure from './PourFigure';
import ShakerFigure from './ShakerFigure';

/**
 * Renders a tool inside a chapter, and offers the way back out to its own
 * page where it has one.
 *
 * The tools exist twice over: embedded here, where they illustrate the
 * paragraph they sit next to, and standalone at their own route, where
 * they are something you keep open while working. Same component in both
 * places, so they cannot drift.
 *
 * The link underneath is quiet by design - it is an offer rather than an
 * instruction, and a reader mid-chapter should not be pulled out of it.
 */

type ToolBlock = Extract<Block, { kind: 'tool' }>;

/** Where each tool lives on its own, for the "open on its own" link. */
const HOME: Partial<Record<ToolBlock['tool'], { href: string; label: string }>> =
  {
    ratio: { href: '/ratio', label: 'Balance calculator' },
    dilution: { href: '/dilution', label: 'Strength and dilution' },
    units: { href: '/dilution', label: 'Strength and dilution' },
    abv: { href: '/dilution', label: 'Strength and dilution' },
    spiritFilter: { href: '/spirits', label: 'Spirit explorer' },
    families: { href: '/families', label: 'Cocktail families' },
    glassware: { href: '/glassware', label: 'Glassware' },
  };

export default function EmbeddedTool({
  tool,
  only,
}: {
  tool: ToolBlock['tool'];
  only?: string;
}) {
  const home = HOME[tool];

  return (
    <div className="not-prose">
      {render(tool, only)}
      {home && (
        <p className="t-caption mb-6 -mt-3" style={{ color: 'var(--ink-faint)' }}>
          <Link href={home.href} className="tool-home" style={{ color: 'inherit' }}>
            Open {home.label} on its own
          </Link>
        </p>
      )}
    </div>
  );
}

function render(tool: ToolBlock['tool'], only?: string) {
  switch (tool) {
    case 'ratio':
      return <RatioTool />;
    case 'dilution':
      return <DilutionTool />;
    /* Strength and standard drinks are one calculation looked at from two
       directions, so one component answers both. */
    case 'units':
    case 'abv':
      return <DrinkStrength />;
    case 'method':
      return <MethodChooser />;
    case 'glassware':
      return <GlasswarePicker />;
    case 'flavourWheel':
      return <FlavourWheel />;
    case 'spiritFilter':
      return <SpiritExplorer only={only} />;
    case 'families':
      return <FamiliesTable />;
    /* The figures. Drawn rather than computed, and with no page of
       their own, so nothing appears in HOME for them. */
    case 'stills':
      return <StillsFigure />;
    case 'tastingGlasses':
      return <TastingGlasses />;
    case 'peat':
      return <PeatSequence />;
    case 'molasses':
      return <MolassesSequence />;
    case 'agave':
      return <AgaveSequence />;
    case 'brands':
      return <BrandsFigure />;
    case 'brew':
      return <BrewSequence />;
    case 'pour':
      return <PourFigure />;
    case 'shaker':
      return <ShakerFigure />;
    default:
      return null;
  }
}
