import React from 'react';
import DefaultListItem from './list_default_item';

const DefaultList= ( props ) => {

  const renderArticle = ( article ) => {
    
    return (
      <DefaultListItem 
        key={ article._id } 
        article={ article }
      /> 
    );
  }

  return (  
    <section className={ `article-group article-group_${props.direction}` }>
      { props.articles.map( renderArticle ) }
    </section>
  )
}

export default DefaultList;

{/* <Card.Group className={ `article-group ag-${props.direction}` }>
  { props.articles.map( renderArticle ) }
</Card.Group> */}