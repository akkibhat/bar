import type { ReactNode } from 'react';

/**
 * The seven methods, drawn once.
 *
 * Both candidate figures use these: one renders a single drawing under
 * the paragraph that explains it, the other puts all seven in one plate
 * with a selector. Writing them here means the drawings are identical
 * either way and only the framing differs.
 *
 * Every drawing shares a viewBox, a vessel centred on x=80 and a
 * baseline at y=176, so seven of them side by side read as seven
 * treatments of one drink rather than seven unrelated pictures.
 *
 * Motion is gated on `.run` from the Figure wrapper, and every animated
 * element carries its finished state in its base rule so reduced-motion
 * gets the end of the story rather than a blank vessel.
 */

export type MethodKey =
  | 'shaking' | 'stirring' | 'muddling' | 'building'
  | 'layering' | 'blending' | 'flaming';

export const METHOD_ORDER: MethodKey[] = [
  'shaking', 'stirring', 'muddling', 'building', 'layering', 'blending', 'flaming',
];

export const METHODS: Record<MethodKey, { label: string; note: string; draw: ReactNode }> = {
  /* ---------------------------------------------------------------- */
  shaking: {
    label: 'Shaking',
    note: 'Chills, dilutes and beats air in. The drink goes cloudy, which is the point.',
    draw: (
      <g className="mth-shake">
        <path className="fig-ink" d="M58 176 L54 104 L106 104 L102 176 Z" />
        <path className="mth-cloud" d="M60 174 L58 128 L102 128 L100 174 Z" fill="var(--accent-book)" opacity="0.5" />
        <path className="fig-ink" d="M56 108 L62 58 L98 58 L104 108 Z" />
        <path className="fig-thin" d="M56 108 L104 108" />
        <g className="mth-jiggle fig-thin" strokeWidth="1.4">
          <path d="M40 118 h-12 M40 140 h-16 M120 118 h12 M120 140 h16" />
        </g>
      </g>
    ),
  },

  /* ---------------------------------------------------------------- */
  stirring: {
    label: 'Stirring',
    note: 'Chills and dilutes with almost no air. The drink stays clear.',
    draw: (
      <g>
        <path className="fig-ink" d="M52 176 L56 84 L104 84 L108 176 Z" />
        <path d="M56 174 L59 112 L101 112 L104 174 Z" fill="var(--accent-book)" opacity="0.22" />
        <g className="fig-thin" strokeWidth="1">
          <path d="M62 150 h36 M60 132 h40" />
        </g>
        <g className="mth-spoon">
          <path className="fig-ink" d="M80 100 v-42" strokeWidth="2" />
          <ellipse className="fig-ink" cx="80" cy="104" rx="7" ry="4" />
        </g>
      </g>
    ),
  },

  /* ---------------------------------------------------------------- */
  muddling: {
    label: 'Muddling',
    note: 'Presses oil and juice out of fruit or herbs, in the bottom of the glass.',
    draw: (
      <g>
        <path className="fig-ink" d="M54 176 v-72 h52 v72 z" />
        <g className="mth-fruit fig-fill-gold">
          <circle cx="68" cy="164" r="7" /><circle cx="84" cy="168" r="6" />
          <circle cx="98" cy="163" r="6.5" />
        </g>
        <g className="mth-press">
          <path className="fig-ink" d="M80 128 v-56" strokeWidth="3" />
          <path className="fig-ink" d="M70 128 h20 v10 h-20 z" />
        </g>
      </g>
    ),
  },

  /* ---------------------------------------------------------------- */
  building: {
    label: 'Building',
    note: 'Assembled in the glass it is served in, in order, usually over ice.',
    draw: (
      <g>
        <path className="fig-ink" d="M58 176 v-108 h44 v108 z" />
        <path className="mth-b1" d="M61 174 v-24 h38 v24 z" fill="var(--accent-book)" opacity="0.45" />
        <path className="mth-b2" d="M61 150 v-26 h38 v26 z" fill="var(--gold)" opacity="0.4" />
        <path className="mth-b3" d="M61 124 v-24 h38 v24 z" fill="var(--accent-book)" opacity="0.22" />
        <path className="mth-pour fig-accent" d="M80 60 v-22" strokeWidth="3" strokeLinecap="round" />
      </g>
    ),
  },

  /* ---------------------------------------------------------------- */
  layering: {
    label: 'Layering',
    note: 'Poured over the back of a spoon so each band sits on the one below. The spoon rises as the glass fills.',
    draw: (
      <g>
        <path className="fig-ink" d="M62 176 v-96 h36 v96 z" />
        <path className="mth-l1" d="M65 174 v-26 h30 v26 z" fill="var(--gold)" opacity="0.55" />
        <path className="mth-l2" d="M65 148 v-24 h30 v24 z" fill="var(--accent-book)" opacity="0.4" />
        <path className="mth-l3" d="M65 124 v-22 h30 v22 z" fill="var(--accent-book)" opacity="0.18" />
        {/* the spoon is held against the inside wall and lifted a band at
            a time, which is the part of the method people get wrong */}
        <g className="mth-spoonwall">
          <path className="fig-ink" d="M96 128 L112 86" strokeWidth="2" />
          <ellipse className="fig-ink" cx="95" cy="131" rx="6" ry="3.5" transform="rotate(-20 95 131)" />
          <path className="mth-drip fig-accent" d="M100 120 v10" strokeWidth="2" strokeLinecap="round" />
        </g>
      </g>
    ),
  },

  /* ---------------------------------------------------------------- */
  blending: {
    label: 'Blending',
    note: 'For frozen drinks and whole fruit. Measure the ice or it comes out as snow.',
    draw: (
      <g>
        {/* motor base - the thing that makes it a blender and not a tin */}
        <path className="fig-ink" d="M62 176 h56 v-26 q0-5 -5-5 h-46 q-5 0 -5 5 z" />
        <circle className="fig-ink" cx="90" cy="163" r="5" />
        <path className="fig-thin" d="M70 150 h40" />
        {/* jug, with a spout and a handle */}
        <path className="fig-ink" d="M72 145 L68 74 L112 74 L108 145 Z" />
        <path className="fig-ink" d="M112 78 l11 -5 l-3 10 z" />
        <path className="fig-ink" d="M108 92 c15 3 15 28 0 31" />
        <path className="fig-ink" d="M66 74 h48 v-9 h-48 z" />
        <path className="mth-slush" d="M74 143 L71 104 L109 104 L106 143 Z" fill="var(--accent-book)" opacity="0.35" />
        <g className="mth-blades">
          <path className="fig-ink" d="M78 136 L102 136 M83 130 L97 142 M97 130 L83 142" strokeWidth="1.6" />
        </g>
      </g>
    ),
  },

  /* ---------------------------------------------------------------- */
  flaming: {
    label: 'Flaming',
    note: 'Two uses. A twist flamed over the glass, which changes the aroma and is the one worth doing; and a drink set alight, which is display.',
    draw: (
      <g>
        {/* 1. the twist, flamed over a rocks glass */}
        <path className="fig-ink" d="M22 176 v-42 h38 v42 z" />
        <path d="M25 174 v-24 h32 v24 z" fill="var(--accent-book)" opacity="0.3" />
        <path className="fig-ink" d="M28 96 c6 -9 20 -9 26 0" strokeWidth="2" />
        <g className="mth-flame">
          <path className="fig-fill-gold" d="M41 122 c-5 -9 3 -12 0 -19 c8 5 12 12 6 19 z" />
        </g>
        <g className="mth-spark fig-fill-gold">
          <circle cx="41" cy="112" r="3.4" /><circle cx="30" cy="106" r="2.6" />
          <circle cx="52" cy="106" r="2.6" /><circle cx="41" cy="99" r="2.2" />
          <circle cx="24" cy="118" r="2" /><circle cx="58" cy="118" r="2" />
        </g>

        <path className="fig-thin" d="M84 78 v92" strokeDasharray="3 4" />

        {/* 2. the drink itself, alight */}
        <path className="fig-ink" d="M108 176 v-52 h30 v52 z" />
        <path d="M111 174 v-30 h24 v30 z" fill="var(--gold)" opacity="0.45" />
        <path className="fig-thin" d="M111 144 h24" />
        <g className="mth-burn">
          <path className="fig-fill-gold" d="M123 140 c-8 -13 4 -18 0 -28 c12 8 18 18 9 28 z" opacity="0.9" />
          <path className="fig-fill-gold" d="M115 140 c-5 -8 2 -11 0 -17 c7 5 10 11 6 17 z" opacity="0.6" />
        </g>
      </g>
    ),
  },
};
