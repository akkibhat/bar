import { glassPath } from './GlassShape';
import { buildOf, yAtFor } from '@/lib/buildGlass';

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
  scale = false,
  legend = true,
}: {
  spec: { name: string; amount: string | null }[];
  glassSlug: string;
  capacity: number;
  /** Changes when the drink does, so the layers rise again. */
  drinkKey: string;
  className?: string;
  /** Draw a millilitre scale up the left of the glass, spaced by the bowl's shape. */
  scale?: boolean;
  /** The swatch legend under the glass. A page that already prints the build can turn it off. */
  legend?: boolean;
}) {
  const { bowl, layers, unmeasured } = buildOf(spec, glassSlug, capacity);
  const yAt = yAtFor(glassSlug, capacity);
  /* A tick every 25 ml on a small glass, every 50 on a tall one, from the
     bottom of the bowl to the brim. They sit where that volume reaches in
     this glass, so a cone's ticks crowd toward the rim and a straight
     glass's are even: the scale is the glass, not a ruler beside it. */
  const step = capacity > 220 ? 50 : 25;
  const ticks = scale
    ? Array.from({ length: Math.floor(capacity / step) + 1 }, (_, i) => i * step)
    : [];
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
        {ticks.map((v, i) => {
          const y = yAt(v);
          /* Number a tick only if it is a multiple of 50 and clear of the
             last number drawn: on a cone the top ticks crowd together, and
             two labels on top of each other say nothing. */
          const lastLabelled = ticks
            .slice(0, i)
            .filter((t) => t % 50 === 0 && t > 0 && yAt(t) - y > 3.4)
            .length;
          const labelled = v % 50 === 0 && (v === 0 || lastLabelled === ticks.slice(0, i).filter((t) => t % 50 === 0 && t > 0).length);
          return (
            <g key={v} className="bglass__tick">
              <line x1={labelled ? 1.2 : 2.6} x2="5.2" y1={y} y2={y} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              {labelled && (
                <text x="0.2" y={y} textAnchor="end" dominantBaseline="middle" fontSize="2.4" fill="currentColor">
                  {v}
                </text>
              )}
            </g>
          );
        })}
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

      {legend && (
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
      )}
      <p className="bglass__note">A schematic, not to scale. {scale && 'The ml scale follows the glass.'}</p>
    </div>
  );
}
