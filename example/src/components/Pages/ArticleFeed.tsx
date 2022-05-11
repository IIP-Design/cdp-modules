import React, { Fragment } from 'react';

import useScript from '../../hooks/useScript';
import { getConfig } from './utils';

import style from './Pages.module.scss';

const ArticleFeed = () => {
  const initialState = {
    size: 3,
    site: 'localhost',
    type: 'post',
  };

  useScript( './dev-articleFeedLoader.js', getConfig( initialState ), 'cdpArticleFeed' );

  return (
    <Fragment>
      <h2 className={ style.title }>Sample Article Feed:</h2>
      <div id="cdp-article-feed" />
    </Fragment>
  );
};

export default ArticleFeed;
