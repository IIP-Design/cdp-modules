import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Embed from '../Embed/Embed';
import Branding from '../Branding/Branding';
import Placeholder from '../Placeholder/Placeholder';

import { getItemRequest } from '../../utils/api';
import { normalizeItem } from '../../utils/parser';
import { initiateAnalytics } from '../../utils/googleAnalytics';
import trans from '../../utils/translations';

import './Article.module.scss';

const Article = ( { id, site } ) => {
  const [error, setError] = useState( null );
  const [isLoading, setIsLoading] = useState( true );
  const [noResults, setNoResults] = useState( false );
  const [data, setData] = useState( {} );
  const [translations, setTranslations] = useState( trans.en );

  const onError = error => {
    console.log( `Error: ${error.message}` );
    setError( error );
    setIsLoading( false );
  };

  const onFetchResult = response => {
    if ( response && response.hits.total === 0 ) {
      console.log( 'Your request returned no responses. This could be because the owner has removed this content. Please double check the post ID and index in your request.' );

      setIsLoading( false );
      setNoResults( true );
    } else if ( response && response.hits.total > 0 ) {
      const normalized = normalizeItem( response.hits.hits[0] );
      let lang = trans[normalized.language.language_code];

      if ( !lang ) {
        lang = trans.en;
      }

      initiateAnalytics( normalized );

      setData( normalized );
      setIsLoading( false );
      setTranslations( lang );
    }
  };

  useEffect( () => {
    getItemRequest( site, id )
      .then( response => onFetchResult( response ) )
      .catch( error => onError( error ) );
  }, [id, site] );

  if ( error ) {
    return (
      <div className="cdp-error-message" style={ { textAlign: 'center', margin: '3em 0' } }>
        <h3>Sorry, there appears to have been an error while retrieving this content.</h3>
      </div>
    );
  } if ( isLoading ) {
    return <Placeholder />;
  } if ( noResults ) {
    return (
      <div className="cdp-error-message" style={ { textAlign: 'center', margin: '3em 0' } }>
        <h3>Sorry, it looks like this content is currently unavailable.</h3>
      </div>
    );
  }

  return (
    <div styleName="article-embed">
      <Embed data={ data } lang={ translations } />
      <Branding data={ data } lang={ translations } />
    </div>
  );
};

Article.propTypes = {
  id: PropTypes.string,
  site: PropTypes.string,
};

export default Article;
