import { IBA_LISTS, ibaUrl, type IbaCategory } from '@/lib/iba';

/** The small boxed link both references use. */
const BOX = {
  display: 'inline-block',
  padding: '0.1rem 0.5rem',
  border: '1px solid var(--rule-strong)',
  borderRadius: '2px',
  color: 'var(--accent-shelf)',
  textDecoration: 'none',
  marginRight: '0.6rem',
} as const;

/**
 * Two boxed links to the IBA: the drink's own page there, under the name
 * the IBA lists it by, and the list it sits on. Where the IBA's name
 * differs from ours it is said after, so the reader is not surprised by
 * a page called John Collins.
 */
export default function IbaLinks({
  category,
  name,
  ownName,
  className = 't-caption mt-2 !mb-0',
}: {
  category: IbaCategory;
  /** The IBA's name for the drink, only where it differs from ours. */
  name?: string;
  ownName: string;
  className?: string;
}) {
  const list = IBA_LISTS[category];
  return (
    <p className={className}>
      <a href={ibaUrl(name ?? ownName)} className="label-ui" style={BOX}>
        IBA link
      </a>
      <a href={list.url} className="label-ui" style={BOX}>
        {list.label}
      </a>
      {name && <span style={{ color: 'var(--ink-faint)' }}>as {name}</span>}
    </p>
  );
}
