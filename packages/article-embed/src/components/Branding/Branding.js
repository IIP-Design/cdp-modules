import React, { Component } from 'react';
import { object } from 'prop-types';
import { referralClickEvent } from '../../utils/googleAnalytics';

import './Branding.css';

class Branding extends Component {
  handleClickHome = () => {
    referralClickEvent( 'Homepage' );
  }

  handleClickOriginal = () => {
    const { title } = this.props.data;
    referralClickEvent( title );
  }

  render() {
    const { data } = this.props;
    const { lang } = this.props;

    return (
      <section className="cdp-branding-container">
        <div className="cdp-branding-item" style={ { textAlign: 'left' } }>
          <a href={ `https://${data.site}` } target="_blank" rel="noopener noreferrer" onClick={ this.handleClickHome }>
            <img className="cdp-branding-logo" src={ data.logo } alt={ data.owner } />
          </a>
        </div>
        <div className="cdp-branding-item" style={ { textAlign: 'center' } }>
          <a
            href={ data.link }
            target="_blank"
            rel="noopener"
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
          <a href="https://commons.america.gov/" target="_blank" rel="noopener noreferrer">
            { lang.broughtToYou }
          </a>
        </div>
      </section>
    );
  }
}

Branding.propTypes = {
  data: object,
  lang: object
};

export default Branding;
