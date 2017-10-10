import React, { Component } from 'react';
import DefaultList from './list_default';
import BlogList from './list_blog';
import ListLoader from './list_loader';
import { queryBuilder } from '../utils/query'

class List extends Component {

  // @todo use HOC instead of switch
  renderList( articles ) {

    const config = this.props.config;
  
    switch ( config.ui.layout ) {
      case 'blog':
        return <BlogList articles={ articles } ui={ config.ui } meta={ config.meta } />
      default:
        return <DefaultList articles={ articles } ui={ config.ui } meta={ config.meta } />
    }
  }

  componentWillMount() {
    this.props.fetchArticles({
      body: queryBuilder( this.props.config )
    });
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