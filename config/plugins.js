const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );
// const CopyPlugin = require( 'copy-webpack-plugin' );
// const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );

// const paths = require( './paths' );

// const assets = env => {
//   if ( env === 'app' ) {
//     return new CopyPlugin( [{ from: paths.appAssets, to: `${paths.appDist}/assets` }] );
//   }

//   return () => {};
// };

const css = mode => new MiniCssExtractPlugin( {
  filename: mode === 'development' ? 'dev-[name].css' : 'gpalab-[name].css',
} );

// const html = env => {
//   if ( env === 'app' ) {
//     return new HtmlWebpackPlugin( {
//       template: paths.appHTML,
//     } );
//   }

//   return () => {};
// };

const analyzer = env => new BundleAnalyzerPlugin( {
  analyzerMode: 'static',
  generateStatsFile: true,
  openAnalyzer: true,
  reportFilename: `stats/${env}Stats.html`,
  statsFilename: `stats/${env}Stats.json`,
} );

// const loadPlugins = ( mode, env ) => {
//   if ( mode === 'development' ) {
//     return [
//       assets( env ), css( mode ), html( env ),
//     ];
//   }

//   return [
//     assets( env ), css( mode ), html( env ),
//   ];
// };

const loadPlugins = ( mode, env ) => [css( mode )];

module.exports = {
  analyzer,
  loadPlugins,
};
