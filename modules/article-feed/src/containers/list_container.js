import { connect } from 'react-redux';

import List from '../components/List/List';

import { fetchArticles, fetchArticlesSuccess, fetchArticlesFailure } from '../actions';

const mapStateToProps = state => ( {
  articleList: state.articles.articleList,
} );

const mapDispatchToProps = dispatch => ( {
  fetchArticles: query => {
    dispatch( fetchArticles( query ) )
      .then( response => {
        !response.error
          ? dispatch( fetchArticlesSuccess( response.payload.data ) )
          : dispatch( fetchArticlesFailure( response.payload ) );
      } );
  },
} );

export default connect( mapStateToProps, mapDispatchToProps )( List );
