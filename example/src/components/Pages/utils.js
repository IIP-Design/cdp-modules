export const getConfig = vals => {
  const config = [];
  const entries = Object.entries( vals );

  entries.forEach( entry => {
    const name = entry[0];
    const value = entry[1];
    const obj = {};

    obj.name = name;
    obj.value = value;

    config.push( obj );
  } );

  return config;
};
