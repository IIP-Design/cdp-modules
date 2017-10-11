import React from 'react';
import DefaultListItem from './list_default_item';

const DefaultList= ( props ) => {

  const renderArticle = ( article ) => {
    
    return (
      <DefaultListItem 
        key={ article._id } 
        article={ article }
        tags={ props.config.tags }
        meta={ props.config.meta }
        ui={ props.config.ui }
      /> 
    );
  }

  return (  
    <ul className="article-item-group">
      { props.articles.map( renderArticle ) }
    </ul>
  )
}

export default DefaultList;
