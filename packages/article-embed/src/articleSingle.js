import React from 'react';

import ArticleContainer from './containers/ArticleContainer';

import './articleSingle.css';

const ArticleSingle = props => (
  <div className="cdp-single">
    <ArticleContainer config={ props } />
  </div>
);

export default ArticleSingle;
