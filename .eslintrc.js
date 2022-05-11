module.exports = {
  'extends': [
    '@gpa-lab/eslint-config',
    '@gpa-lab/eslint-config/react',
  ],
  ignorePatterns: [
    'build/',
    'docs/_site/',
    'node_modules/',
  ],
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      'extends': [
        '@gpa-lab/eslint-config',
        '@gpa-lab/eslint-config/react',
        'plugin:@typescript-eslint/recommended',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      rules: {
        'import/extensions': [
          'error',
          'always',
          {
            'd.ts': 'never',
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never',
          },
        ],
        'import/no-unassigned-import': [
          'error',
          {
            allow: ['**/*.css', '**/*.scss'],
          },
        ],
        'node/file-extension-in-import': [
          'error', 'always', { '.js': 'never', '.jsx': 'never', '.ts': 'never', '.tsx': 'never' },
        ],
        'react/jsx-filename-extension': [
          error,
          {
            extensions: [
              '.tsx', '.js'
            ],
          },
        ],
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': [
            '.ts', '.tsx', '.d.ts',
          ],
        },
      },
    },
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './config/babelConfig.js',
    },
  },
};
