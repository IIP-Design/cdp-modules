import React from 'react';
import BlogListItem from './list_blog_item';
import './article.css';


const BlogList= ( props ) => {
  const renderArticle = ( article ) => {
    return (
      <BlogListItem 
        key={ article._id } 
        article={ article }
      /> 
    );
  }

  return (  
    <div>
      { props.articles.map( renderArticle ) }
    </div>
  )
}

export default BlogList;