import React from 'react';
import moment from 'moment';
import uuidv4 from 'uuid';

export const getTitle = ( article, openLinkInNewWin ) => {
  if ( !article.link ) {
    return article.title;
  }

  return (
    <a
      rel="noopener noreferrer"
      className="article-title_link"
      href={ article.link }
      target={ openLinkInNewWin }
    >
      { article.title }
    </a>
  );
};

export const getMeta = ( article, meta = [] ) => {
  let author; let date; let
    dateFormatted;
  let showAuthor; let
    showDate;

  if ( article.author ) {
    author = article.author.name;
  }

  if ( article.published ) {
    date = article.published;
    dateFormatted = moment( date ).format( 'MMMM Do YYYY' );
  }

  showAuthor = meta.includes( 'author' );
  showDate = meta.includes( 'date' );

  if ( showAuthor && showDate ) {
    if ( author && date ) {
      return (
        <div>
          <span>{ article.author.name }</span>
          { ' ' }
          -
          { dateFormatted }
        </div>
      );
    } if ( author ) {
      return (
        <div>
          <span>{ article.author.name }</span>
        </div>
      );
    }

    return dateFormatted;
  } if ( showAuthor || showDate ) {
    if ( showAuthor && author ) {
      return <span>{ article.author.name }</span>;
    } if ( date ) {
      return dateFormatted;
    }
  } else {
    return '';
  }
};

export const getTags = ( article, meta ) => {
  const showTags = meta.includes( 'tags' );

  if ( showTags && article.tags && article.tags.length ) {
    return article.tags.map( tag => (
      <span className="article-tag" key={ uuidv4() }>
        { tag.name || tag }
      </span>
    ) );
  }

  return '';
};
