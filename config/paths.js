const path = require( 'path' );
const fs = require( 'fs' );

// Gets the root directory for the plugin
const appDirectory = fs.realpathSync( process.cwd() );

// Resolves relative paths from the monorepo root
const resolveApp = relativePath => path.resolve( appDirectory, relativePath );

module.exports = {
  articleEmbedAssets: resolveApp( 'modules/article-embed/src/assets' ),
  articleEmbedEnv: resolveApp( 'modules/article-embed/.env' ),
  articleEmbedIndex: resolveApp( 'modules/article-embed/src/index.js' ),
  articleEmbedLoader: resolveApp( 'modules/article-embed/src/cdp-module-loader.js' ),
  articleFeedEnv: resolveApp( 'modules/article-feed/.env' ),
  articleFeedIndex: resolveApp( 'modules/article-feed/src/index.js' ),
  articleFeedLoader: resolveApp( 'modules/article-feed/src/cdp-module-loader.js' ),
  builds: resolveApp( 'build' ),
  exampleAssets: resolveApp( 'example/assets' ),
  exampleIndex: resolveApp( 'example/src/index.js' ),
  exampleHTML: resolveApp( 'example/index.html' ),
  root: resolveApp( './' ),
};
