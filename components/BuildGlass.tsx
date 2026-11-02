import { glassPath } from './GlassShape';
import { buildOf } from '@/lib/buildGlass';

/**
 * A drink's build, drawn as a glass filled in layers, with its legend.
 *
 * See lib/buildGlass.ts for what is true to the spec and what is
 * approximate. The colours of the outline and the text come from
 * `--bg-ink` and `--bg-soft`, falling back to the page's own, so the
 * front door (a fixed dark palette) and the drink pages (themed) can both
 * use it.
 */
export default function BuildGlass({
  spec,
  glassSlug,
  capacity,
  drinkKey,
  className = '',
}: {
  spec: { name: string; amount: string | null }[];
  glassSlug: string;
  capacity: number;
  /** Changes when the drink does, so the layers rise again. */
  drinkKey: string;
  className?: string;
}) {
  const { bowl, layers, unmeasured } = buildOf(spec, glassSlug, capacity);
  const clip = `bglass-${drinkKey}`;

  return (
    <div className={`bglass ${className}`}>
      <svg viewBox="0 0 40 64" className="bglass__svg" aria-hidden="true" key={drinkKey}>
        <defs>
          <clipPath id={clip}>
            <path d={bowl.d} />
          </clipPath>
        </defs>
        <g clipPath={`url(#${clip})`}>
          {layers.map((l, i) => (
            <rect
              key={l.name + i}
              x="0"
              width="40"
              y={l.y1}
              height={Math.max(0, l.y0 - l.y1)}
              fill={l.colour}
              className="bglass__layer"
              style={{ animationDelay: `${i * 90}ms` }}
            />
          ))}
        </g>
        <path
          d={glassPath(glassSlug) ?? bowl.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.6"
          strokeLinejoin="round"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <ul className="bglass__legend">
        {[...layers].reverse().map((l) => (
          <li key={l.name}>
            <i style={{ background: l.colour }} />
            {l.name} <span>{l.ml} ml</span>
          </li>
        ))}
        {unmeasured.map((s) => (
          <li key={s.name} className="is-text">
            <i />
            {s.name} <span>{s.amount ?? ''}</span>
          </li>
        ))}
      </ul>
      <p className="bglass__note">A schematic, not to scale.</p>
    </div>
  );
}
