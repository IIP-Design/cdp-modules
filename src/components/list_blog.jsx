import React from 'react';
import BlogListItem from './list_blog_item';

const BlogList= ( props ) => {
  const renderArticle = ( article ) => {
    return (
      <BlogListItem 
        key={ article._id } 
        article={ article }
         ui={ props.ui }
      /> 
    );
  }

  return (  
    <section className={ `article-group` }>
      { props.articles.map( renderArticle ) }
    </section>
  )
}

export default BlogList;