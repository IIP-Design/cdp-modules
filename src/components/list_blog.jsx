import React from 'react';
import BlogListItem from './list_blog_item';

const BlogList= ( props ) => {
  const renderArticle = ( article ) => {
    return (
      <BlogListItem 
        key={ article._id } 
        article={ article }
        tags={ props.config.tags }
        meta={ props.config.meta }
        ui={ props.config.ui }
      /> 
    );
  }
 
  return (  
    <ul className="article-item-group article-style-blog">
      { props.articles.map( renderArticle ) }
    </ul>
  )
}

export default BlogList;