import React from 'react';
import { Card } from 'semantic-ui-react';
import { getBackgroundImage } from  '../utils/image';
import './article.css';

const DefaultListItem = ( props ) => {

  const article = props.article._source;

  return (
    <Card className="article"> 
      <div>
        <a rel="noopener noreferrer" target="_blank" href={ article.link }>
          <span className="article-image" style={ getBackgroundImage(article) }></span>
        </a>
      </div>
      <Card.Content className="article-content">
        <Card.Header> <a rel="noopener noreferrer" target="_blank" href={ article.link }>{ article.title }</a></Card.Header>
        <Card.Description>{ article.excerpt }</Card.Description>
      </Card.Content>
    </Card>
  );
};

export default DefaultListItem;