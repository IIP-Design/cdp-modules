import React, { Component } from 'react';
import DefaultList from './list_default';
import BlogList from './list_blog';
import ListLoader from './list_loader';
import { queryBuilder } from '../utils/query';

class List extends Component {

  // @todo use HOC instead of switch
  renderList( articles, total ) {
    
    if( !articles.length ) {
      return <div className='article-no-results'>No results found</div>
    }
    switch ( this.props.config.ui.layout ) {
      case 'blog':
        return <BlogList articles={ articles } total={ total } config={ this.props.config }  />
      default:
        return <DefaultList articles={ articles } total={ total } config={ this.props.config } />
    }
  }

  // Dispatch event to let outside world know that DOM elements have been added
  componentDidUpdate(prevProps, prevState) {
    if( !this.props.articleList.loading ) {
      let config = prevProps.config;
      let selector = ( config && config.selector ) ? config.selector : null;
      const event = new CustomEvent('onReadyFeed', { detail: selector });
      //console.log('LOG: dispatch event - onReadyFeed');
      dispatchEvent( event );
    }
  }

  componentDidMount() {
    let query = this.props.config.query;
    let body = ( query && Object.keys(query).length ) ? query : queryBuilder( this.props.config );
    this.props.fetchArticles({ body });
  }

  render () {
    const { articles, total, loading, error } = this.props.articleList;

    if( loading ) {
      return  <ListLoader />    
    } else if( error ) {
      return <div>Error: { error }</div>
    }
    
    // @todo Deal with empty array + rtl articles 
    return (  
      <div>
         { this.renderList( articles, total ) }
      </div>
    );
  }
}

export default List;