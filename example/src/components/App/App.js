import React from 'react';
import { Router } from '@reach/router';

import Layout from '../Layout/Layout';
import ArticleEmbed from '../Pages/ArticleEmbed';
import ArticleFeed from '../Pages/ArticleFeed';

import './App.scss';

const App = () => (
  <Layout>
    <Router>
      <ArticleEmbed path="article-embed" />
      <ArticleFeed path="article-feed" />
    </Router>
  </Layout>
);

export default App;
