import React from 'react';
import { getImage } from  '../utils/image';
import * as ui from '../utils/ui';
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

  const contentStyle = {
    textAlign: props.ui.textAlignment
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
        <h3 className="article-title">{ ui.getTitle(article) }</h3>
        <div className="article-meta">{ ui.getMeta(article, props.meta) }</div>
        <p>{ article.excerpt }</p>
      </div>
      <div>{ ui.getTags(article, props.meta) }</div>
    </li>
  );
};

export default DefaultListItem;