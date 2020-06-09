import React from 'react';
import ReactDOM from 'react-dom';
import { getDefaultConfig, getUIConfig } from './utils/config';

import ArticleFeed from './article_feed';

// @todo add documentation
export const widgets = {
  ArticleFeed: {
    'new': function( config ) {
      return {
        render: () => {
          if ( !config || !config.selector ) {
            console.log( 'Please add a valid DOM node to add component to' );

            return;
          }

          const defaultConfig = getDefaultConfig();

          ReactDOM.render(
            <ArticleFeed
              selector={ config.selector }
              query={ config.query }
              sites={ config.sites || defaultConfig.sites }
              from={ config.from || defaultConfig.from }
              size={ config.size || defaultConfig.size }
              ids={ config.ids || defaultConfig.ids }
              langs={ config.langs || defaultConfig.langs }
              types={ config.types || defaultConfig.types }
              tags={ config.tags || defaultConfig.tags }
              categories={ config.categories || defaultConfig.categories }
              meta={ config.meta || defaultConfig.meta }
              ui={ getUIConfig( config ) }
            />, document.querySelector( config.selector ),
          );
        },
      };
    },
  },
};
