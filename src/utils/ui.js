import React from 'react';
import moment from 'moment';

export const getTitle = ( article, openLinkInNewWin ) => {
  if( !article.link ) {
    return article.title;
  } else {
    return ( 
      <a rel="noopener noreferrer" className="article-title_link" href={ article.link } target={ openLinkInNewWin }>{ article.title }</a>
    );
  }
}

export const getMeta = ( article, meta ) => {
  let author = article.author.name;
  let showAuthor = meta.includes( 'author' );
  let showDate = meta.includes( 'date' );
  let date = article.published;
  let dateFormatted = moment( date ).format( 'MMMM Do YYYY' );
  
  if( showAuthor && showDate ) {
    if( author && date ) {
      return <div><span>{ article.author.name }</span> - { dateFormatted }</div> 
    } else if( author ) {
      return <div><span>{ article.author.name }</span></div> 
    } else {
      return dateFormatted;
    }
  } else if ( showAuthor || showDate ) {
    if( showAuthor && author ) {
      return  <span>{ article.author.name }</span>
    } else if ( date ) {
      return  dateFormatted;
    }
  } else {
     return '';
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
