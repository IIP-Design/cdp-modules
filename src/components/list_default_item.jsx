import React from 'react';
import { getImage } from  '../utils/image';
import './article.css';

const DefaultListItem = ( props ) => {

  const article = props.article._source;
  const imageWrapperCls = `article-image_${props.ui.image.shape}`;
  
  const getImageWrapperStyle = ( shape = 'rectangle' ) => {
    let image = props.ui.image;
    
    let wrapperStyle = {
      border: `${image.borderWidth} ${image.borderStyle} ${image.borderColor}`
    }
    if( shape === 'circle' ) {
      wrapperStyle['width'] = props.ui.image.width;
      wrapperStyle['height'] = props.ui.image.width;
    }
    return wrapperStyle;
  }

  const imageStyle = {
    backgroundImage: `url('${ getImage(article) }')`,
    minHeight:  props.ui.image.width
  }

  const getTitle = () => {
    if( !article.link ) {
      return article.title;
    } else {
      return ( 
      <a rel="noopener noreferrer" target="_blank" className="article-title_link" href={article.link}> { article.title }</a>
      );
    }
  }

  return (
    <li className="article-item" data-id={ article.id }>  
      <div className="article-media">
        <div className={ imageWrapperCls } style={ getImageWrapperStyle(props.ui.image.shape) }>
          <a rel="noopener noreferrer" target="_blank" href={ article.link }>
            <span className="article-image" style={ imageStyle }></span>
          </a>
        </div>
      </div>
      <div className="article-content">
        <h3 className="article-title">{ getTitle() }</h3>
        <p>{ article.excerpt }</p>
      </div>
    </li>
  );
};

export default DefaultListItem;