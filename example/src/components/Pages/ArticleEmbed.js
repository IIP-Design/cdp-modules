import React, { Fragment } from 'react';

import useScript from '../../hooks/useScript';

import './Pages.module.scss';

const ArticleEmbed = () => {
  const data = [
    { id: 3487 },
    { site: 'ylai.dev.america.gov' },
  ];

  useScript( './dev-articleEmbedLoader.js', data, 'cdpArticle' );

  return (
    <Fragment>
      <h2 styleName="title">Sample Article Embed:</h2>
      <div id="cdp-article-embed" />
    </Fragment>
  );
};

export default ArticleEmbed;
