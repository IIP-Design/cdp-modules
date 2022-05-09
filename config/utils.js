const paths = require( './paths' );

const extractBundleName = env => {
  const {articleEmbed, articleFeed, example} = env;

  let bundle;

  if (articleFeed) {
    bundle = 'articleFeed';
  } else if (articleEmbed) {
    bundle = 'articleEmbed';
  } else if (example) {
    bundle = 'example';
  }

  return bundle;
}

const setEntry = env => {
  const bundle = extractBundleName(env);

  const index = `${bundle}Index`;
  const loader = `${bundle}Loader`;

  const entry = {};

  if ( paths[index] ) {
    entry[bundle] = paths[index];
  }

  if ( paths[loader] ) {
    entry[loader] = paths[loader];
  }

  return entry;
};

const setOutput = ( env, mode ) => {
  const bundle = extractBundleName(env);

  const base = {
    filename: mode === 'development' ? 'dev-[name].js' : 'gpalab-[name].min.js',
    path: paths.builds,
  };

  if ( bundle === 'articleEmbed' || bundle === 'articleFeed' ) {
    return {
      ...base,
      library: ['CDP'],
      libraryTarget: 'umd',
    };
  }

  return base;
};

module.exports = {
  extractBundleName,
  setEntry,
  setOutput,
};
