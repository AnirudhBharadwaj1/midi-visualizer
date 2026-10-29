import js from '@eslint/js';
import boundaries from 'eslint-plugin-boundaries';
import tseslint from 'typescript-eslint';

const sourceElements = [
  { type: 'shared', pattern: 'src/shared/**' },
  { type: 'core', pattern: 'src/core/**' },
  { type: 'engine', pattern: 'src/engine/**' },
  { type: 'renderer', pattern: 'src/renderer/**' },
  { type: 'preload', pattern: 'src/preload/**' },
  { type: 'main', pattern: 'src/main/**' },
];

export default tseslint.config(
  {
    ignores: ['dist/**', 'out/**', 'node_modules/**', 'fixtures/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{js,ts,tsx}'],
    plugins: {
      boundaries,
    },
    settings: {
      'boundaries/elements': sourceElements,
      'boundaries/ignore': ['**/*.d.ts'],
    },
    rules: {
      'boundaries/dependencies': [
        'error',
        {
          default: 'disallow',
          checkUnknownLocals: true,
          policies: [
            {
              from: { element: { type: 'shared' } },
              allow: { to: { element: { type: 'shared' } } },
            },
            {
              from: { element: { type: 'core' } },
              allow: {
                to: [
                  { element: { type: 'shared' } },
                  { element: { type: 'core' } },
                ],
              },
            },
            {
              from: { element: { type: 'engine' } },
              allow: {
                to: [
                  { element: { type: 'shared' } },
                  { element: { type: 'core' } },
                  { element: { type: 'engine' } },
                ],
              },
            },
            {
              from: { element: { type: 'renderer' } },
              allow: {
                to: [
                  { element: { type: 'shared' } },
                  { element: { type: 'core' } },
                  { element: { type: 'engine' } },
                  { element: { type: 'renderer' } },
                ],
              },
            },
            {
              from: { element: { type: 'preload' } },
              allow: [
                { to: { element: { type: 'shared' } } },
                { to: { element: { type: 'preload' } } },
              ],
            },
            {
              from: { element: { type: 'main' } },
              allow: [
                { to: { element: { type: 'shared' } } },
                { to: { element: { type: 'main' } } },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/core/**/*.{js,ts,tsx}', 'src/engine/**/*.{js,ts,tsx}'],
    rules: {
      'no-restricted-properties': [
        'error',
        {
          object: 'Math',
          property: 'random',
          message: 'Core and engine rendering must be deterministic.',
        },
        {
          object: 'Date',
          property: 'now',
          message: 'Core and engine rendering must be deterministic.',
        },
      ],
      'no-restricted-globals': [
        'error',
        {
          name: 'performance',
          message: 'Core and engine rendering must be deterministic.',
        },
        {
          name: 'requestAnimationFrame',
          message: 'Core and engine rendering must be deterministic.',
        },
      ],
    },
  },
  {
    files: ['src/main/**/*.{js,ts,tsx}', 'src/preload/**/*.{js,ts,tsx}'],
    languageOptions: {
      globals: {
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
  },
);
