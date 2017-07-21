import React from 'react';
import { getBackgroundImage } from  '../utils/image';
import './article.css';

const DefaultListItem = ( props ) => {

  const article = props.article._source;
  const imageCls = `article-image_${props.ui.imageShape}`;
  const imageStyle = {
    border: `${props.ui.imageBorderWidth} solid ${props.ui.imageBorderColor}`
  }

  return (
    <article className="article-item">  
      <div className="article-media">
        <div className={ imageCls } style={ imageStyle }>
          <a rel="noopener noreferrer" target="_blank" href={ article.link }>
            <span className="article-image" style={ getBackgroundImage(article) }></span>
          </a>
        </div>
      </div>
      <div className="article-content">
        <header className="article-header"> <a rel="noopener noreferrer" target="_blank" href={ article.link }>{ article.title }</a></header>
        <p>{ article.excerpt }</p>
      </div>
    </article>
  );
};

export default DefaultListItem;