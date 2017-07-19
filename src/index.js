import React from 'react';
import ReactDOM from 'react-dom';

import ArticleFeed from './article_feed';

var defaultConfig = {
  sites: 'share.staging.america.gov', 
  size: '3', 
  types: 'post', 
  langs: 'en-US',
  tags: '',
  categories: '',
  uiDirection: 'horizontal',
  uiStyle: ''
};

// @todo add documentation
export const widgets =  {

  ArticleFeed: {
    new: function( config ) {
      return {
        render: () => {
          if ( !config || !config.selector ) {
            console.log('Please add a valid DOM node to add component to');
            return;
          }

          ReactDOM.render (
            <ArticleFeed 
              sites={ config.sites || defaultConfig.sites }
              size={ config.size || defaultConfig.size }
              langs={ config.langs || defaultConfig.langs }
              types={ config.types || defaultConfig.types }
              tags={ config.tags || defaultConfig.tags }
              categories={ config.categories || defaultConfig.categories }
              uiDirection={ config.uiDirection || defaultConfig.uiDirection }
              uiStyle={ config.uiStyle || defaultConfig.uiStyle }
            />, document.querySelector( config.selector )
          );
        }
      }
    }
  }
}