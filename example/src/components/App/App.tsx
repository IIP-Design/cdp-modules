import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../Layout/Layout';
import ArticleEmbed from '../Pages/ArticleEmbed';
import ArticleFeed from '../Pages/ArticleFeed';
import Home from '../Pages/Home';

import './App.scss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="embed" element={<ArticleEmbed />} />
        <Route path="feed" element={<ArticleFeed />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
