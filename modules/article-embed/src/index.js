import React from 'react';
import ReactDOM from 'react-dom';

import Article from './components/Article/Article';

export const widgets = {
  Article: {
    new: function ( config ) {// eslint-disable-line
      console.log( config );

      return {
        render: () => {// eslint-disable-line
          if ( !config || !config.selector ) {
            console.log( 'Please add a valid DOM node to add component to' );

            return;
          }

          ReactDOM.render(
            <Article
              selector={ config.selector }
              query={ config.query }
              site={ config.site }
              id={ config.id }
            />,
            document.querySelector( config.selector ),
          );
        },
      };
    },
  },
};
