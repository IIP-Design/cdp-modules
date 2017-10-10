import React from 'react';
import DefaultListItem from './list_default_item';

const DefaultList= ( props ) => {

  const renderArticle = ( article ) => {
    
    return (
      <DefaultListItem 
        key={ article._id } 
        article={ article }
        ui={ props.ui }
      /> 
    );
  }

  return (  
    <ul className={ `article-group article-group_${props.ui.direction}` }>
      { props.articles.map( renderArticle ) }
    </ul>
  )
}

export default DefaultList;
