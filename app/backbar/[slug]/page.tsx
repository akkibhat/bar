import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import Rule from '@/components/Rule';
import SpecSheet from '@/components/SpecSheet';
import { SHELF_HALF } from '@/lib/site';
import {
  SHELF,
  builtVolume,
  lookupDrink,
  shelfOf,
  tagsOf,
  type ShelfDrink,
} from '@/lib/backbar';

/** Pre-render every drink at build time. */
export function generateStaticParams() {
  return SHELF.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const drink = lookupDrink(slug);
  if (!drink) return {};

  return {
    title: drink.name,
    description: drink.description,
  };
}

/**
 * schema.org/Recipe structured data, so a search engine can show this as
 * a recipe result rather than a plain link.
 *
 * Garnish is appended as a final step because schema.org has no field for
 * it, and leaving it out would publish an incomplete method.
 */
function recipeSchema(drink: ShelfDrink) {
  const steps = [...drink.steps];
  if (drink.garnish) steps.push(`Garnish: ${drink.garnish}`);

  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: drink.name,
    description: drink.description,
    recipeCategory: 'Cocktail',
    recipeYield: '1 cocktail',
    keywords: drink.tags.length ? drink.tags.join(', ') : undefined,
    recipeIngredient: drink.spec.map((line) =>
      [line.amount, line.name].filter(Boolean).join(' '),
    ),
    recipeInstructions: steps.map((text) => ({
      '@type': 'HowToStep',
      text,
    })),
  };
}

export default async function DrinkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const drink = lookupDrink(slug);
  if (!drink) notFound();

  /* Reached by a numeric id or Bar Assistant's raw "-N" slug - send it on
     to the canonical address rather than quietly serving the same page at
     two of them. */
  if (slug !== drink.slug) permanentRedirect(`/backbar/${drink.slug}`);

  const visibleTags = tagsOf(drink);
  const volume = builtVolume(drink);

  const facts = [
    { label: 'Method', value: drink.method },
    { label: 'Glass', value: drink.glass },
    { label: 'Base', value: shelfOf(drink) },
    { label: 'Strength', value: drink.abv ? `${drink.abv}%` : undefined },
    { label: 'Built', value: volume ? `${volume} ml` : undefined },
  ].filter((f) => f.value);

  return (
    <article
      className="relative mx-auto max-w-[46rem] px-6 sm:px-10 lg:px-12 py-12 lg:py-16"
      style={{ ['--accent' as string]: SHELF_HALF.accent }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(recipeSchema(drink)),
        }}
      />


      <p className="no-print mb-6">
        <Link
          href="/backbar"
          className="label-ui"
          style={{ color: 'var(--accent)' }}
        >
          ← The shelf
        </Link>
      </p>

      {/* ---- Header --------------------------------------------- */}
      <header className="mb-8">
        <p className="label-ui mb-2" style={{ color: 'var(--accent)' }}>
          {shelfOf(drink)}
        </p>

        <h1 className="display t-h1 sm:t-display leading-[1.02] mb-1">
          {drink.name}
        </h1>
        <Rule variant="double" className="mt-3" />

        {drink.description && (
          <p
            className="t-lead italic leading-relaxed mt-5 max-w-[33rem]"
            style={{ color: 'var(--ink-soft)' }}
          >
            {drink.description}
          </p>
        )}

        {visibleTags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 mt-4">
            {visibleTags.map((t) => (
              <li
                key={t}
                className="t-caption px-2 py-0.5 rounded-full"
                style={{
                  border: '1px solid var(--rule-strong)',
                  color: 'var(--ink-soft)',
                }}
              >
                {t}
              </li>
            ))}
          </ul>
        )}
      </header>

      <hr className="rule-h" />

      {/* ---- The build ------------------------------------------ */}
      <h2 className="display t-h2 leading-none mb-1">Build</h2>
      <Rule variant="hair" width={140} className="mb-4" />
      <SpecSheet lines={drink.spec} />

      {/* ---- Method --------------------------------------------- */}
      {drink.steps.length > 0 && (
        <>
          <h2 className="display t-h2 leading-none mb-1">Method</h2>
          <Rule variant="hair" width={140} className="mb-4" />
          <ol className="mb-8 space-y-3 max-w-[34rem]">
            {drink.steps.map((step, i) => (
              <li key={i} className="flex gap-3.5">
                <span
                  className="display shrink-0 t-h3 leading-none pt-0.5 nums"
                  style={{ color: 'var(--accent)', minWidth: '1.4rem' }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                {/* The stored steps are already numbered by Bar Assistant,
                    so the leading "1." is stripped rather than shown
                    twice beside the drawn numeral. */}
                <span>{step.replace(/^\s*\d+[.)]\s*/, '')}</span>
              </li>
            ))}
          </ol>
        </>
      )}

      {/* ---- Garnish -------------------------------------------- */}
      {drink.garnish && (
        <>
          <h2 className="display t-h2 leading-none mb-1">Garnish</h2>
          <Rule variant="hair" width={140} className="mb-4" />
          <p className="mb-8 max-w-[34rem]">{drink.garnish}</p>
        </>
      )}

      {/* ---- Facts ---------------------------------------------- */}
      {facts.length > 0 && (
        <div
          className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-5"
          style={{ borderTop: '1px solid var(--rule)' }}
        >
          {facts.map((f) => (
            <div key={f.label}>
              <p className="label-ui mb-0.5">{f.label}</p>
              <p className="t-base nums">{f.value}</p>
            </div>
          ))}
        </div>
      )}

      <p
        className="t-caption mt-8 no-print"
        style={{ color: 'var(--ink-soft)' }}
      >
        Strength is calculated by Bar Assistant and includes its own
        assumption about dilution.{' '}
        <Link href="/dilution" style={{ color: 'var(--accent-book)' }}>
          Work it out yourself
        </Link>{' '}
        if you want to see the water separately.
      </p>
    </article>
  );
}
