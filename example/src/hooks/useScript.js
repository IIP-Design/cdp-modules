import { useEffect } from 'react';

const useScript = ( url, data, id ) => {
  useEffect( () => {
    const script = document.createElement( 'script' );

    script.src = url;
    script.async = true;

    if ( id ) script.id = id;

    if ( data ) {
      data.forEach( prop => {
        script.dataset[prop.name] = prop.value;
      } );
    }

    document.body.appendChild( script );

    return () => {
      document.body.removeChild( script );
    };
  }, [
    data, id, url,
  ] );
};

export default useScript;
