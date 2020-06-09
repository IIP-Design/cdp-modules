import React from 'react';

import ArticleContainer from './containers/ArticleContainer';

import './articleSingle.module.scss';

const ArticleSingle = props => (
  <div styleName="article-embed">
    <ArticleContainer config={ props } />
  </div>
);

export default ArticleSingle;
