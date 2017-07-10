import { connect } from 'react-redux'
import { fetchArticles, fetchArticlesSuccess, fetchArticlesFailure } from '../actions';
import List from '../components/list';

const mapStateToProps = ( state ) => {
  return { 
    articleList: state.articles.articleList
  };
}

const mapDispatchToProps = ( dispatch ) => {
  return {
    fetchArticles: ( query ) => {
      dispatch( fetchArticles(query) )
      .then( (response) => {
        !response.error 
          ? dispatch( fetchArticlesSuccess(response.payload.data) ) 
          : dispatch( fetchArticlesFailure(response.payload) );
      });
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( List );