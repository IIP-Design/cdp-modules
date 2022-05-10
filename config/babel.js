const setBabelConfig = cssModuleNames => {
  const isTest = String( process.env.NODE_ENV ) === 'test';

  return {
    presets: [
      [
        '@babel/preset-env',
        { modules: isTest ? 'commonjs' : false },
      ],
      '@babel/preset-react',
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-optional-chaining',
    ],
  };
};

module.exports = {
  setBabelConfig,
};
