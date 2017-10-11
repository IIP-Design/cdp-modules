import React, { Component } from 'react';
import DefaultList from './list_default';
import BlogList from './list_blog';
import ListLoader from './list_loader';
import { queryBuilder } from '../utils/query';
import * as events from '../utils/events'

class List extends Component {

  // @todo use HOC instead of switch
  renderList( articles ) {
    switch ( this.props.config.ui.layout ) {
      case 'blog':
        return <BlogList articles={ articles } config={ this.props.config }  />
      default:
        return <DefaultList articles={ articles } config={ this.props.config } />
    }
  }

  componentWillMount() {
    this.props.fetchArticles({
      body: queryBuilder( this.props.config )
    });
  }

  componentDidMount() {
    console.log('componentDidMount')
    let  event = new Event( events.FEED_RENDERED );
    dispatchEvent(event);
  }

  render () {
    const { articles, loading, error } = this.props.articleList;

    if( loading ) {
      return  <ListLoader />    
    } else if( error ) {
      return <div>Error: { error }</div>
    }
    
    // @todo Deal with no results, empty array + rtl articles 
    return (  
      <div>
         { this.renderList( articles ) }
      </div>
    );
  }
}

export default List;