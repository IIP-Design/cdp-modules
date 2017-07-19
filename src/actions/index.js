import axios from 'axios';
import { FETCH_ARTICLES, 
         FETCH_ARTICLES_SUCCESS, 
         FETCH_ARTICLES_FAILURE } from "../actions/types"; 

const CDP_PUBLIC_API = `${process.env.REACT_APP_CDP_PUBLIC_API}/v1/search`;  

export function fetchArticles( query ) {
  const request = axios.post( CDP_PUBLIC_API, query );
  return {
    type: FETCH_ARTICLES,
    payload: request
  };
}

export function fetchArticlesSuccess( data ) {
  let articles = ( data.hits && data.hits.hits ) ?  data.hits.hits : [];
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: articles
  };
}

export function fetchArticlesFailure( error ) {
  return {
    type: FETCH_ARTICLES_FAILURE,
    payload: error
  };
}