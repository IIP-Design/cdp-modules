import React from 'react';
import { Card } from 'semantic-ui-react';
import DefaultListItem from './list_default_item';
import './article.css';

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
    <Card.Group className={ `article-group ag-${props.direction}` }>
      { props.articles.map( renderArticle ) }
    </Card.Group>
  )
}

export default DefaultList;