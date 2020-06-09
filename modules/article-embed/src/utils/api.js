import axios from 'axios';
import bodybuilder from 'bodybuilder';

const CDP_PUBLIC_API = `${process.env.CDP_PUBLIC_API}/v1/search`;

export const getItemRequest = ( site, postId ) => axios
  .post( CDP_PUBLIC_API, {
    body: bodybuilder()
      .size( 1 )
      .query( 'query_string', 'query', `(site: ${site} AND post_id: ${postId})` )
      .build(),
  } )
  .then( response => response.data );
