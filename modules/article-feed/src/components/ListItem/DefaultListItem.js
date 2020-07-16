import React from 'react';
import propTypes from 'prop-types';

import { getImage } from '../../utils/image';
import { getMeta, getTags, getTitle } from '../../utils/ui';

import './article.css';

const DefaultListItem = ( { article, meta, ui } ) => {
  const source = article._source;

  const imageWrapperCls = `article-image_${ui.image.shape}`;

  const getImageWrapperStyle = ( shape = 'rectangle' ) => {
    const { image } = ui;

    const wrapperStyle = {
      border: `${image.borderWidth} ${image.borderStyle} ${image.borderColor}`,
    };

    if ( shape === 'circle' ) {
      wrapperStyle.width = ui.image.width;
      wrapperStyle.height = ui.image.width;
    }

    return wrapperStyle;
  };


  const imageStyle = {
    backgroundImage: `url('${getImage( source, parseInt( ui.image.width, 10 ) )}')`,
    minHeight: ui.image.width,
  };

  const imageAlt = ( source.thumbnail || {} ).alt || ' ';

  // const contentStyle = {
  //   textAlign: ui.textAlignment
  // }

  return (
    <li className="article-item" data-id={ source.post_id } data-type={ source.type }>
      <div className="article-media">
        <div className={ imageWrapperCls } style={ getImageWrapperStyle( ui.image.shape ) }>
          <a rel="noopener noreferrer" href={ source.link } target={ ui.openLinkInNewWin }>
            <span className="article-image" style={ imageStyle } role="img" aria-label={ imageAlt } />
          </a>
        </div>
      </div>
      <div className="article-content">
        <h3 className="article-title">{ getTitle( source, ui.openLinkInNewWin ) }</h3>
        <div className="article-meta">{ getMeta( source, meta ) }</div>
        <p>{ source.excerpt }</p>
      </div>
      <div>{ getTags( article, meta ) }</div>
    </li>
  );
};

DefaultListItem.propTypes = {
  article: propTypes.object,
  meta: propTypes.object,
  ui: propTypes.object,
};

export default DefaultListItem;
