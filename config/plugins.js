const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );
const CopyPlugin = require( 'copy-webpack-plugin' );
const DotEnv = require( 'dotenv-webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const paths = require( './paths' );

const assets = env => {
  if ( env === 'example' ) {
    return new CopyPlugin( {
      patterns: [{ from: paths.exampleAssets, to: `${paths.builds}/assets` }],
    } );
  }

  return () => {};
};

const css = mode => new MiniCssExtractPlugin( {
  filename: mode === 'development' ? 'dev-[name].css' : 'gpalab-[name].css',
} );

const dotEnv = env => new DotEnv( {
  path: paths[`${env}Env`],
} );

const html = () => new HtmlWebpackPlugin( {
  favicon: `${paths.exampleAssets}/favicon.ico`,
  template: paths.exampleHTML,
} );

const analyzer = env => new BundleAnalyzerPlugin( {
  analyzerMode: 'static',
  generateStatsFile: true,
  openAnalyzer: true,
  reportFilename: `stats/${env}Stats.html`,
  statsFilename: `stats/${env}Stats.json`,
} );

const loadPlugins = ( mode, env ) => {
  const common = [css( mode )];

  if ( env === 'example' ) {
    return [
      ...common,
      assets( env ),
      html( env ),
    ];
  }

  if ( env === 'articleEmbed' ) {
    return [
      ...common,
      dotEnv( env ),
    ];
  }

  return common;
};

module.exports = {
  analyzer,
  loadPlugins,
};
