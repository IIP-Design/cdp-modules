import React, { Fragment } from 'react';

import useScript from '../../hooks/useScript';
import { getConfig } from './utils';

import './Pages.module.scss';

const ArticleEmbed = () => {
  const data = [
    { name: 'id', value: 3487 },
    { name: 'site', value: 'ylai.dev.america.gov' },
  ];

  useScript( './dev-articleEmbedLoader.js', getConfig( data ), 'cdpArticle' );

  return (
    <Fragment>
      <h2 styleName="title">Sample Article Embed:</h2>
      <div id="cdp-article-embed" />
    </Fragment>
  );
};

export default ArticleEmbed;
