import React from 'react';
import ReactDOM from 'react-dom';

import ArticleSingle from './articleSingle';

export const widgets = {
  Article: {
    new: function ( config ) {// eslint-disable-line
      return {
        render: () => {// eslint-disable-line
          if ( !config || !config.selector ) {
            console.log( 'Please add a valid DOM node to add component to' );

            return;
          }

          ReactDOM.render( <ArticleSingle
            selector={ config.selector }
            query={ config.query }
            sites={ config.sites }
            ids={ config.ids }
          />, document.querySelector( config.selector ) );
        },
      };
    },
  },
};
