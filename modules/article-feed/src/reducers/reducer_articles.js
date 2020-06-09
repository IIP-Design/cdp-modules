import { FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE } from '../actions/types';

const INITIAL_STATE = {
  articleList: {
    articles: [],
    total: 0,
    error: null,
    loading: false,
  },
};

export default function( state = INITIAL_STATE, action ) {
  let error;

  switch ( action.type ) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articleList: {
          articles: [],
          error: null,
          loading: true,
        },
      };

    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articleList: {
          articles: action.payload.articles,
          total: action.payload.total,
          error: null,
          loading: false,
        },
      };

    case FETCH_ARTICLES_FAILURE:
      // @todo : Hanlde CDP specific errors
      error = action.payload.message;   // Network or server down errors

      return {
        ...state,
        articleList: {
          articles: [],
          error,
          loading: false,
        },
      };

    default:
      return state;
  }
}
