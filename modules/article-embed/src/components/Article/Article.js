import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Branding from '../Branding/Branding';
import Embed from '../Embed/Embed';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
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
    console.error( `Error: ${error.message}` );
    setError( error );
    setIsLoading( false );
  };

  const onFetchResult = response => {
    if ( response?.hits?.total?.value ) {
      if ( response.hits.total.value === 0 ) {
        console.error( 'Your request returned no responses. This could be because the owner has removed this content. Please double check the post ID and index in your request.' );

        setNoResults( true );
        setIsLoading( false );
      } else {
        const normalized = normalizeItem( response?.hits?.hits?.[0] );
        let lang = trans[normalized.language.language_code];

        if ( !lang ) {
          lang = trans.en;
        }

        initiateAnalytics( normalized );

        setData( normalized );
        setTranslations( lang );
        setIsLoading( false );
      }
    }
  };

  useEffect( () => {
    getItemRequest( site, id )
      .then( response => onFetchResult( response ) )
      .catch( error => onError( error ) );
  }, [id, site] );

  if ( error ) return <div styleName="article-embed"><ErrorMessage /></div>;

  if ( isLoading ) return <div styleName="article-embed"><Placeholder /></div>;

  if ( noResults ) return <div styleName="article-embed"><ErrorMessage noResults={ noResults } /></div>;

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
