/**
 * The rules that separate things on a printed page:
 *
 *   hair    a hairline. Between rows, under a sub-heading.
 *   double  two lines with air between. Above a section.
 *   stub    a short heavy stub in the section accent, under a title.
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
