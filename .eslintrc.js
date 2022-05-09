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
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: './config/babelConfig.js',
    },
  },
};
