import React, { useEffect } from 'react';
import propTypes from 'prop-types';

import DefaultList from './DefaultList';
import BlogList from './BlogList';
import Loader from '../Loader';

import { queryBuilder } from '../../utils/query';

const List = ( { articleList: { articles, total, loading, error }, config, fetchArticles } ) => {
  useEffect( () => {
    const { query } = config;
    const body = query && Object.keys( query ).length ? query : queryBuilder( config );

    fetchArticles( body );
  }, [config, fetchArticles] );

  const renderList = ( a, t ) => {
    switch ( config.ui.layout ) {
      case 'blog':
        return <BlogList articles={ a } total={ t } config={ config } />;
      default:
        return <DefaultList articles={ a } total={ t } config={ config } />;
    }
  };

  // Dispatch event to let outside world know that DOM elements have been added
  // componentDidUpdate(prevProps, prevState) {
  //   if( !this.props.articleList.loading ) {
  //     let config = prevProps.config;
  //     let selector = ( config && config.selector ) ? config.selector : null;
  //     const event = new CustomEvent('onReadyFeed', { detail: selector });
  //     //console.log('LOG: dispatch event - onReadyFeed');
  //     dispatchEvent( event );
  //   }
  // }

  if ( loading ) {
    return <Loader />;
  } if ( error ) {
    return (
      <div>
        Error:
        { error }
      </div>
    );
  }

  if ( !articles.length ) {
    return <div className="article-no-results">No results found</div>;
  }

  // @todo Deal with empty array + rtl articles
  return (
    <div>
      { renderList( articles, total ) }
    </div>
  );
};

List.propTypes = {
  articleList: propTypes.object,
  config: propTypes.object,
  fetchArticles: propTypes.func,
};

export default List;
