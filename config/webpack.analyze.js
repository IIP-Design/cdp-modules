const merge = require( 'webpack-merge' );

const baseConfig = require( './webpack.config' );
const plugins = require( './webpack.plugins' );

module.exports = ( env, argv ) => {
  const config = merge( baseConfig( env, argv ), {
    plugins: [plugins.analyzer( env )],
  } );

  return config;
};
