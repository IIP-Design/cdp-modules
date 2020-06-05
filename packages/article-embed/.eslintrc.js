module.exports = {
  extends: ['@gpa-lab/eslint-config', '@gpa-lab/eslint-config/react'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['to', 'hrefLeft', 'hrefRight']
      }
    ]
  },
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true
  },
  ignorePatterns: ['build/', 'docs/_site/', 'node_modules/'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  overrides: [
    {
      files: '*.test.js',
      rules: {
        'no-unused-expressions': 'off',
        'import/no-unresolved': 'off'
      }
    }
  ]
};
