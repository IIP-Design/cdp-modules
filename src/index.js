import React from 'react';
import ReactDOM from 'react-dom';
import { getDefaultConfig, getUIConfig } from './utils/config'; 

import ArticleFeed from './article_feed';

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

          let defaultConfig = getDefaultConfig();

          ReactDOM.render (
            <ArticleFeed 
              sites={ config.sites || defaultConfig.sites }
              size={ config.size || defaultConfig.size }
              langs={ config.langs || defaultConfig.langs }
              types={ config.types || defaultConfig.types }
              tags={ config.tags || defaultConfig.tags }
              categories={ config.categories || defaultConfig.categories }
              ui={ getUIConfig(config) }
            />, document.querySelector( config.selector )
          );
        }
      }
    }
  }
}