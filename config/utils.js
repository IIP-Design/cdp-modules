const paths = require( './paths' );

const setEntry = env => {
  const index = `${env}Index`;
  const loader = `${env}Loader`;

  const entry = {};

  if ( paths[index] ) {
    entry[env] = paths[index];
  }

  if ( paths[loader] ) {
    entry[loader] = paths[loader];
  }

  return entry;
};

const setOutput = ( env, mode ) => {
  const base = {
    filename: mode === 'development' ? 'dev-[name].js' : 'gpalab-[name].min.js',
    path: paths.builds,
  };

  if ( env === 'articleEmbed' || env === 'articleFeed' ) {
    return {
      ...base,
      library: ['CDP'],
      libraryTarget: 'umd',
    };
  }

  return base;
};

module.exports = {
  setEntry,
  setOutput,
};
