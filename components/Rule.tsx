/**
 * The rules that separate things on a printed page.
 *
 * Three weights, and they mean different amounts:
 *
 *   hair    a hairline. Between rows, under a sub-heading.
 *   double  two lines with air between. Above a section - the heaviest
 *           break on the page short of a new one.
 *   stub    a short heavy stub in the section accent. Sits under a title
 *           as a full stop rather than as a separator.
 *
 * This replaces the wine site's hand-drawn wobbly underline, which is
 * the single most recognisable thing about that site and the reason a
 * shared component would have made these two look like one project.
 */
export default function Rule({
  variant = 'hair',
  width,
  className = '',
}: {
  variant?: 'hair' | 'double' | 'stub';
  /** Constrain the rule's width. Stubs carry their own and ignore this. */
  width?: number | string;
  className?: string;
}) {
  if (variant === 'stub') {
    return <span className={`rule-stub ${className}`} aria-hidden="true" />;
  }

  return (
    <hr
      className={`${variant === 'double' ? 'rule-double' : 'rule-hair'} ${className}`}
      style={width ? { width, maxWidth: '100%' } : undefined}
    />
  );
}
