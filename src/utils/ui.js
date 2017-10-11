import React from 'react';
import moment from 'moment';

export const getTitle = ( article ) => {
  if( !article.link ) {
    return article.title;
  } else {
    return ( 
      <a rel="noopener noreferrer" target="_blank" className="article-title_link" href={article.link}> { article.title }</a>
    );
  }
}

export const getMeta = ( article, meta ) => {
  let showAuthor = meta.includes( 'author' );
  let showDate = meta.includes( 'date' );
  let date = moment( article.published ).format( 'MMMM Do YYYY' );
  
  if( showAuthor && showDate ) {
    return (
      <div><span>{ article.author.name }</span> - { date }</div> 
    )
  } else if ( showAuthor || showDate ) {
    if( showAuthor ) {
      return (
        <span>{ article.author.name }</span>
      )
    } else {
      return  date;
    }
  }
}

export const getTags = ( article, meta ) => {
  let showTags = meta.includes( 'tags' );
  if (showTags && article.tags && article.tags.length ) {
    return  (
      article.tags.map( (tag) => <span className="article-tag" key={tag.id}>{ tag.name }</span> )
    )
  } else {
    return '';
  }
}