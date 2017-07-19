import React from 'react';
import moment from 'moment';
import { getBackgroundImage } from  '../utils/image';
import './article.css';

const BlogListItem = ( props ) => {

  const article = props.article._source;

  return (
    <article className="article-item article-blog">
      <div className="article-media">
        <a rel="noopener noreferrer" target="_blank" href={ article.link }>
          <span className="article-image" style={ getBackgroundImage(article) }></span>
        </a>
      </div>
      <div className="article-content">
        <header className="article-header">
          <a rel="noopener noreferrer" target="_blank" href={ article.link }>{ article.title }</a>
        </header>
        { article.excerpt }
        <div className="article-meta">{ article.author.name } | { moment(article.published).format('MMMM Do YYYY') } </div>
      </div>
    </article>
  );
};

export default BlogListItem;