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
    backgroundImage: `url('${ getImage(article, parseInt(props.ui.image.width, 10)) }')`,
    minHeight:  props.ui.image.width
  }

  const imageAlt = ( ( article.thumbnail || {} ).alt || ' ' );

  // const contentStyle = {
  //   textAlign: props.ui.textAlignment
  // }

  return (
    <li className="article-item" data-id={ article.post_id } data-type={  article.type }>
      <div className="article-media">
        <div className={ imageWrapperCls } style={ getImageWrapperStyle(props.ui.image.shape) }>
          <a rel="noopener noreferrer" href={ article.link } target={ props.ui.openLinkInNewWin }>
            <span className="article-image" style={ imageStyle } role="img" aria-label={ imageAlt }></span>
          </a>
        </div>
      </div>
      <div className="article-content">
        <h3 className="article-title">{  ui.getTitle(article, props.ui.openLinkInNewWin) }</h3>
        <div className="article-meta">{ ui.getMeta(article, props.meta) }</div>
        <p>{ article.excerpt }</p>
      </div>
      <div>{ ui.getTags(article, props.meta) }</div>
    </li>
  );
};

export default DefaultListItem;