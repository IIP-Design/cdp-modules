import React from 'react';
import * as ui from '../utils/ui';
import { getImage } from  '../utils/image';
import './article.css';

const BlogListItem = ( props ) => {
  const article = props.article._source;
  const imageWrapperCls = `article-image_${props.ui.image.shape}`;

  const getImageWrapperStyle = ( shape = 'rectangle') => {
    let image = props.ui.image;
    
    let wrapperStyle = {
       border: `${image.borderWidth} ${image.borderStyle} ${image.borderColor}`,
       height: props.ui.image.width
    }

    if ( shape === 'circle' ) {
      wrapperStyle['width'] = props.ui.image.width;
    }

    return wrapperStyle;
  }

  const articleStyle = {
    borderBottom: props.ui.divider
  }

  const imageStyle = {
    backgroundImage: `url('${ getImage(article, parseInt(props.ui.image.width, 10)) }')`,
    minHeight:  props.ui.image.width
  }

  return (
    <li className="article-item" style={ articleStyle } data-id={ article.id }>
      <div className="article-media">
        <div className={ imageWrapperCls } style={ getImageWrapperStyle(props.ui.image.shape) }>
          <a rel="noopener noreferrer" href={ article.link } target={ props.ui.openLinkInNewWin }>
            <span className="article-image" style={ imageStyle }></span>
          </a>
        </div>
      </div>
      <div className="article-content">
        <h3 className="article-title">{ ui.getTitle(article, props.ui.openLinkInNewWin) }</h3>
        <div className="article-meta">{ ui.getMeta(article, props.meta) }</div>
        <p>{ article.excerpt }</p>
      </div>
      <div>{ ui.getTags(article, props.meta) }</div>
    </li>
  );
};

export default BlogListItem;