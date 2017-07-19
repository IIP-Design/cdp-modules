import React, { Component } from 'react';
import DefaultList from './list_default';
import BlogList from './list_blog';
import ListLoader from './list_loader';
import { queryBuilder } from '../utils/query'

class List extends Component {

  // @todo use HOC instead of switch
  renderList( articles ) {

    const config = this.props.config;

    const STYLES = {
      default: 'default',
      blog: 'blog'
    };

    const DIRECTION = {
      horizontal: 'row',
      vertical: 'column'
    };

    let style = STYLES[config.uiStyle] || 'default',
        direction = DIRECTION[config.uiDirection] || 'horizontal';

    switch ( style ) {
      case 'blog':
        return <BlogList articles={ articles } />
      default:
        return <DefaultList articles={ articles } direction={ direction } />
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