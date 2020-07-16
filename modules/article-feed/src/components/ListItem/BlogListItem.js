import React from 'react';
import propTypes from 'prop-types';

import { getMeta, getTags, getTitle } from '../../utils/ui';
import { getImage } from '../../utils/image';

import './article.css';

const BlogListItem = ( { article, meta, ui } ) => {
  const source = article._source;
  const imageWrapperCls = `article-image_${ui.image.shape}`;

  const getImageWrapperStyle = ( shape = 'rectangle' ) => {
    const { image } = ui;

    const wrapperStyle = {
      border: `${image.borderWidth} ${image.borderStyle} ${image.borderColor}`,
      height: ui.image.width,
    };

    if ( shape === 'circle' ) {
      wrapperStyle.width = ui.image.width;
    }

    return wrapperStyle;
  };

  const articleStyle = {
    borderBottom: ui.divider,
  };

  const imageStyle = {
    backgroundImage: `url('${getImage( article, parseInt( ui.image.width, 10 ) )}')`,
    minHeight: ui.image.width,
  };

  const imageAlt = ( article.thumbnail || {} ).alt || ' ';

  return (
    <li className="article-item" style={ articleStyle } data-id={ article.post_id }>
      <div className="article-media">
        <div className={ imageWrapperCls } style={ getImageWrapperStyle( ui.image.shape ) }>
          <a rel="noopener noreferrer" href={ source.link } target={ ui.openLinkInNewWin }>
            <span className="article-image" style={ imageStyle } role="img" aria-label={ imageAlt } />
          </a>
        </div>
      </div>
      <div className="article-content">
        <h3 className="article-title">{ getTitle( source, ui.openLinkInNewWin ) }</h3>
        <div className="article-meta">{ getMeta( meta ) }</div>
        <p>{ source.excerpt }</p>
      </div>
      <div>{ getTags( source, meta ) }</div>
    </li>
  );
};

BlogListItem.propTypes = {
  article: propTypes.object,
  meta: propTypes.object,
  ui: propTypes.object,
};

export default BlogListItem;
