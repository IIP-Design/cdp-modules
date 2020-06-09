import React from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

import './Article.module.scss';

const ArticleItem = ( { data, lang } ) => (
  <article style={ { direction: `${lang.textDirection}` } }>
    { data.thumbnail && (
      <div styleName="media">
        <figure styleName="figure aligncenter">
          <img alt={ data.thumbnailMeta.alt } src={ data.thumbnail } styleName="image" />
          <figcaption styleName="feat-cap">{ data.thumbnailMeta.caption }</figcaption>
        </figure>
      </div>
    ) }
    <div styleName="content">
      <h1 styleName="title">{ data.title }</h1>
      <div>{ `${data.author.name} - ${data.date}` }</div>
      <div styleName="content">
        { Parser( data.content ) }
      </div>
    </div>
  </article>
);

ArticleItem.propTypes = {
  data: PropTypes.object,
  lang: PropTypes.object,
};

export default ArticleItem;
