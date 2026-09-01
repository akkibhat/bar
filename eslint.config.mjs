import coreWebVitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';

/**
 * ESLint flat config.
 *
 * eslint-config-next 16 ships native flat configs, so they are spread in
 * directly rather than through the eslintrc compatibility shim, which
 * fails validation on them with a circular-structure error.
 */
const config = [
  ...coreWebVitals,
  ...typescript,
  {
    ignores: ['_workings/**', '.next/**', 'node_modules/**'],
  },
];

export default config;
