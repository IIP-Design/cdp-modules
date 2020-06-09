import React, { Component } from 'react';
import { object } from 'prop-types';

import ArticleItem from '../components/Article/Article';
import Branding from '../components/Branding/Branding';
import Placeholder from '../components/Placeholder/Placeholder';

import { getItemRequest } from '../utils/api';
import { normalizeItem } from '../utils/parser';
import { initiateAnalytics } from '../utils/googleAnalytics';
import trans from '../utils/translations';


class ArticleContainer extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      error: null,
      isLoading: true,
      noResults: false,
      data: {},
      translations: trans.en,
    };
  }

  componentDidMount() {
    this.getData();
  }

  onError = error => {
    console.log( `Error: ${error.message}` );
    this.setState( {
      error,
      isLoading: false,
    } );
  }

  onFetchResult = response => {
    if ( response && response.hits.total === 0 ) {
      console.log( 'Your request returned no responses. This could be because the owner has removed this content. Please double check the post ID and index in your request.' );
      this.setState( {
        isLoading: false,
        noResults: true,
      } );
    } else if ( response && response.hits.total > 0 ) {
      const data = normalizeItem( response.hits.hits[0] );
      let lang = trans[data.language.language_code];

      if ( !lang ) {
        lang = trans.en;
      }

      initiateAnalytics( data );

      this.setState( {
        isLoading: false,
        data,
        translations: lang,
      } );
    }
  }

  getData() {
    const { config } = this.props;

    getItemRequest( config.sites, config.ids )
      .then( response => this.onFetchResult( response ) )
      .catch( error => this.onError( error ) );
  }

  render() {
    const {
      error, isLoading, noResults, data, translations,
    } = this.state;

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
      <div className="cdp-article-single-container">
        <ArticleItem data={ data } lang={ translations } />
        <Branding data={ data } lang={ translations } />
      </div>
    );
  }
}

ArticleContainer.propTypes = {
  config: object,
};

export default ArticleContainer;
