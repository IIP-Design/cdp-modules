import React from 'react';
import moment from 'moment';
import { getImage } from  '../utils/image';
import './article.css';

const BlogListItem = ( props ) => {
  const article = props.article._source;
  const imageWrapperCls = `article-image_${props.ui.image.shape}`;
  
  const getImageWrapperStyle = ( shape = 'rectangle') => {
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

  const articleStyle = {
    borderBottom: props.ui.divider
  }

  const imageStyle = {
    backgroundImage: `url('${ getImage(article) }')`,
    minHeight:  props.ui.image.width
  }

  return (
    <article className="article-item article-blog" style={ articleStyle }>
      <div className="article-media">
        <div className={ imageWrapperCls } style={ getImageWrapperStyle(props.ui.image.shape) }>
          <a rel="noopener noreferrer" target="_blank" href={ article.link }>
            <span className="article-image" style={ imageStyle }></span>
          </a>
        </div>
      </div>
      <div className="article-content">
        <header className="article-header">
          <a rel="noopener noreferrer" target="_blank" href={ article.link }>{ article.title }</a>
        </header>
        { article.excerpt }
        <div className="article-meta">{ article.author.name } | { moment(article.published).format('MMMM Do YYYY') } </div>
      </div>
    </article>
  );
};

export default BlogListItem;