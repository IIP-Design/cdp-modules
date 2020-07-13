import bodybuilder from 'bodybuilder';

const fetchNumericValues = arr => arr.filter( item => +item );

const hasValue = value => {
  if ( Array.isArray( value ) ) {
    // remove empty values
    const arr = value.filter( v => v.trim() !== '' );

    return arr.length > 0;
  }

  return !!value;
};

const cleanQry = str => str.split( ',' ).map( item => item.trim() );

const appendQry = ( str, field ) => {
  const items = cleanQry( str );

  if ( typeof field === 'string' ) {
    return items.map( item => `${field}: ${item}` );
  }

  return items.map( item => field.reduce( ( accum, subField ) => {
    accum.push( `${subField}:${item}` );

    return accum;
  }, [] ).join( ' OR ' ) );
};

const reduceQry = qry => {
  const qryStr = qry.reduce( ( acc, value, index, arr ) => {
    if ( index === arr.length - 1 ) {
      acc += value;
    } else {
      acc += `(${value}) AND `;
    }

    return acc;
  }, '' );

  return qryStr;
};

export const queryBuilder = params => {
  const body = new bodybuilder();

  if ( hasValue( params.ids ) ) {
    // ids MUST match and should be from one of the sites
    body.filter( 'terms', 'post_id', fetchNumericValues( params.ids ) )
      .orFilter( 'terms', 'site', cleanQry( params.sites ) );
  } else {
    // sites is an OR query so use the 'orFilter' add filterMinimumShouldMatch to ensure
    // that the ids are coming from one of the sites
    if ( params.sites ) {
      cleanQry( params.sites ).forEach( item => {
        body.orFilter( 'term', 'site', item );
      } );

      // becomes a MUST if there is only 1 site
      body.filterMinimumShouldMatch( 1 );
    }

    const qry = [];

    if ( params.langs ) {
      qry.push( ...appendQry( params.langs, 'language.locale' ) );
    }

    if ( params.categories ) {
      qry.push( ...appendQry( params.categories, 'categories.name' ) );
    }

    if ( params.tags ) {
      qry.push( ...appendQry( params.tags, 'tags.keyword' ) );
    }

    if ( params.types ) {
      qry.push( ...appendQry( params.types, 'type' ) );
    }

    const qryStr = reduceQry( qry );

    if ( qryStr.trim() !== '' ) {
      body.query( 'query_string', 'query', qryStr );
    }
  }

  // do not set from/size when querying for specific ids
  if ( !hasValue( params.ids ) ) {
    const size = params.size && Number.isInteger( +params.size ) ? params.size : 3;
    const from = params.from && Number.isInteger( +params.from ) ? params.from : 0;

    body.from( from );
    body.size( size );
  }

  body.sort( 'published', 'desc' );

  return body.build();
};
