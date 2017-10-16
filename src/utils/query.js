import bodybuilder from 'bodybuilder';

const cleanQry = ( str ) => {
  return str.split(',').map( item => item.trim() );
}

const fetchNumericValues = ( arr ) => {
  return arr.filter( (item) => {
    return +item;
  });
}

const appendQry = ( str, field ) => {
   let items = cleanQry( str );
   return items.map( item => `${field}: ${item}` );
}
 
const reduceQry = ( qry ) => {
  let qryStr = qry.reduce((acc, value, index, arr) => {
    if (index === (arr.length - 1)) {
      acc += value;
    } else {
      acc += `${value} AND `;
    }
    return acc;
  }, '');

  return qryStr;
}

export const queryBuilder = ( params ) => {
  let body = new bodybuilder();
 
  if ( params.ids ) {
    // ids MUST match and should be from one of the sites
    body.filter( 'terms', 'id', fetchNumericValues(params.ids) )
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
      qry.push( ...appendQry(params.tags, 'tags.name') );
    }

    if ( params.types ) {
      qry.push( ...appendQry(params.types, 'type') );
    }
  
    let qryStr  = reduceQry( qry );
    if( qryStr.trim() !== '' ) {
      body.query( 'query_string', 'query', qryStr );
    }
  }
  
  // do not set size when querying for specific ids
  if( !params.ids ) {
    let size = ( params.size && Number.isInteger(+params.size) ) ?  params.size : 3;
    body.size( size ); 
  }
 
  body.sort( 'published', 'desc' )

  return body.build();
};
