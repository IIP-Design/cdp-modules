interface IConfigItem {
  name: string;
  value: unknown;
}

export const getConfig = (vals: any) => {
  const config: any[] = [];
  const entries = Object.entries( vals );

  entries.forEach( entry => {
    const name = entry[0];
    const value = entry[1];
    const obj = {} as IConfigItem;

    obj.name = name;
    obj.value = value;

    config.push( obj );
  } );

  return config;
};
