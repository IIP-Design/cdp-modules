const path = require( 'path' );
const fs = require( 'fs' );

// Gets the root directory for the plugin
const appDirectory = fs.realpathSync( process.cwd() );

// Resolves relative paths from the monorepo root
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

module.exports = {
  articleEmbedIndex: resolveApp( 'packages/article-embed/src/index.js' ),
  articleEmbedLoader: resolveApp( 'packages/article-embed/src/cdp-module-loader.js' ),
  articleFeedIndex: resolveApp( 'packages/article-feed/src/index.js' ),
  builds: resolveApp( 'build' ),
  exampleAssets: resolveApp( 'example/assets' ),
  exampleIndex: resolveApp( 'example/src/index.js' ),
  exampleHTML: resolveApp( 'example/index.html' ),
  root: resolveApp( './' ),
};
