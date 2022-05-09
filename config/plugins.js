const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );
const CopyPlugin = require( 'copy-webpack-plugin' );
const DotEnv = require( 'dotenv-webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

const paths = require( './paths' );
const utils = require( './utils' );

const assets = bundle => {
  if ( bundle === 'example' ) {
    return new CopyPlugin( {
      patterns: [{ from: paths.exampleAssets, to: `${paths.builds}/assets` }],
    } );
  }

  return () => {};
};

const css = mode => new MiniCssExtractPlugin( {
  filename: mode === 'development' ? 'dev-[name].css' : 'gpalab-[name].min.css',
} );

const dotEnv = bundle => new DotEnv( {
  path: paths[`${bundle}Env`],
} );

const html = () => new HtmlWebpackPlugin( {
  favicon: `${paths.exampleAssets}/favicon.ico`,
  title: 'Modules Example Site',
  template: paths.exampleHTML,
} );

const analyzer = env => {
  const bundle = utils.extractBundleName(env);

  return new BundleAnalyzerPlugin( {
    analyzerMode: 'static',
    generateStatsFile: true,
    openAnalyzer: true,
    reportFilename: `stats/${bundle}Stats.html`,
    statsFilename: `stats/${bundle}Stats.json`,
  } )
};

const loadPlugins = ( mode, env ) => {
  // Extract the name of package build built.
  const bundle = utils.extractBundleName(env);

  const common = [css( mode )];

  if ( bundle === 'example' ) {
    return [
      ...common,
      assets( bundle ),
      html(),
    ];
  }

  if ( bundle === 'articleEmbed' ||  bundle === 'articleFeed' ) {
    return [
      ...common,
      dotEnv( bundle ),
    ];
  }

  return common;
};

module.exports = {
  analyzer,
  loadPlugins,
};
