import bodybuilder from 'bodybuilder';

const cleanQry = ( str ) => {
  return str.split(',').map( item => item.trim() );
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
  let qry = [];

  if ( params.sites ) {
     qry.push( ...appendQry(params.sites, 'site') );
  }

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

  body.query( 'query_string', 'query', qryStr );
  
  let size = ( params.size && Number.isInteger(+params.size) ) ?  params.size : 3;
  body.size( size ); 

  return body.build();
};
