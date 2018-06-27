import bodybuilder from 'bodybuilder';

const fetchNumericValues = ( arr ) => {
  return arr.filter( (item) => {
    return +item;
  });
}

const hasValue = ( value ) => {
  if( Array.isArray(value ) ) {
    // remove empty values
    let arr = value.filter( v => v.trim() !== '' ) 
    return arr.length > 0;
  } else {
    return !!value;
  }
}

const cleanQry = ( str ) => {
  return str.split(',').map( item => item.trim() );
}

const appendQry = ( str, field ) => {
  let items = cleanQry( str );
  if ( typeof field === 'string' ) {
    return items.map( item => `${field}: ${item}` );
  }
  return items.map( item => field.reduce( ( accum, subField ) => {
    accum.push(`${subField}:${item}`);
    return accum;
  }, [] ).join( ' OR ' ) );
}
 
const reduceQry = ( qry ) => {
  let qryStr = qry.reduce((acc, value, index, arr) => {
    if (index === (arr.length - 1)) {
      acc += value;
    } else {
      acc += `(${value}) AND `;
    }
    return acc;
  }, '');

  return qryStr;
}

export const queryBuilder = ( params ) => {
  let body = new bodybuilder();

  if ( hasValue(params.ids) ) {
    // ids MUST match and should be from one of the sites
    body.filter( 'terms', 'post_id', fetchNumericValues(params.ids) )
        .orFilter('terms', 'site', cleanQry(params.sites) )
  } else {

    // sites is an OR query so use the 'orFilter' add filterMinimumShouldMatch to ensure
    // that the ids are coming from one of the sites
    if ( params.sites ) {
      cleanQry(params.sites).forEach( (item) => {
        body.orFilter('term', 'site', item )
      });

      // becomes a MUST if there is only 1 site
      body.filterMinimumShouldMatch(1)
    }

    let qry = [];

    if ( params.langs ) {
      qry.push( ...appendQry(params.langs, 'language.locale') );
    }

    if ( params.categories ) {
      qry.push( ...appendQry(params.categories, 'categories.name') );
    }

    if ( params.tags ) {
      qry.push( ...appendQry(params.tags, 'tags.keyword') );
    }

    if ( params.types ) {
      qry.push( ...appendQry(params.types, 'type') );
    }
  
    let qryStr  = reduceQry( qry );
    if( qryStr.trim() !== '' ) {
      body.query( 'query_string', 'query', qryStr );
    }
  }
  
  // do not set frrom/size when querying for specific ids
  if( !hasValue(params.ids)  ) {  
    let size = ( params.size && Number.isInteger(+params.size) ) ?  params.size : 3;
    let from = ( params.from && Number.isInteger(+params.from) ) ?  params.from : 0;
    body.from( from ); 
    body.size( size ); 
  }
 
  body.sort( 'published', 'desc' )

  return body.build();
};
