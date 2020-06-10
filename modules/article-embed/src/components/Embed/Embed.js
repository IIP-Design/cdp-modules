import React from 'react';
import Parser from 'html-react-parser';
import PropTypes from 'prop-types';

import './Embed.module.scss';

const Embed = ( { data, lang } ) => {
  const author = data?.author ? data.author : {};
  const thumbnail = data?.thumbnail ? data.thumbnail : {};
  const thumbnailMeta = data?.thumbnailMeta ? data.thumbnailMeta : {};

  return (
    <article style={ { direction: `${lang.textDirection}` } }>
      { thumbnail && (
        <div styleName="media">
          <figure styleName="figure aligncenter">
            <img alt={ thumbnailMeta.alt } src={ thumbnail } styleName="image" />
            <figcaption styleName="feat-cap">{ thumbnailMeta.caption }</figcaption>
          </figure>
        </div>
      ) }
      <div styleName="content">
        <h1 styleName="title">{ data.title }</h1>
        <div>{ `${author.name} - ${data.date}` }</div>
        <div styleName="content">
          { Parser( data.content ) }
        </div>
      </div>
    </article>
  );
};

Embed.propTypes = {
  data: PropTypes.object,
  lang: PropTypes.object,
};

export default Embed;
