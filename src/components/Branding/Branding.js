import React, { Component } from 'react';
import { object } from 'prop-types';
import { referralClickEvent } from '../../utils/googleAnalytics';

import './Branding.css';

class Branding extends Component {
  handleClickHome = () => {
    referralClickEvent( 'Homepage' );
  }

  handleClickOriginal = () => {
    referralClickEvent( this.props.data.title );
  }

  render() {
    const { data } = this.props;
    const { lang } = this.props;

    return (
      <div className="cdp-branding-container">
        <div className="cdp-branding-item" style={ { textAlign: 'left' } }>
          <a href={ `https://${data.site}` } target="_blank" rel="noopener noreferrer" onClick={ this.handleClickHome }>
            <img src={ data.logo } alt={ data.owner } style={ { maxWidth: '200px' } } />
          </a>
        </div>
        <div className="cdp-branding-item" style={ { textAlign: 'center' } }>
          <a
            href={ data.link }
            target="_blank"
            rel="noopener noreferrer"
            style={ { direction: `${lang.textDirection}` } }
            onClick={ this.handleClickOriginal }
          >
            { lang.viewOriginal }
          </a>
        </div>
        <div
          className="cdp-branding-item"
          style={ { textAlign: 'right', direction: `${lang.textDirection}` } }
        >
          { lang.broughtToYou }
        </div>
      </div>
    );
  }
}

Branding.propTypes = {
  data: object,
  lang: object
};

export default Branding;
