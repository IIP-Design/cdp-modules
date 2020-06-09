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

module.exports = {
  setEntry,
};
