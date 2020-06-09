import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { referralClickEvent } from '../../utils/googleAnalytics';

import './Branding.module.scss';

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
      <section styleName="container">
        <div styleName="item" style={ { textAlign: 'left' } }>
          <a href={ `https://${data.site}` } target="_blank" rel="noopener noreferrer" onClick={ this.handleClickHome }>
            <img styleName="logo" src={ data.logo } alt={ data.owner } />
          </a>
        </div>
        <div styleName="item" style={ { textAlign: 'center' } }>
          <a
            href={ data.link }
            target="_blank" // eslint-disable-line react/jsx-no-target-blank
            rel="noopener"
            style={ { direction: `${lang.textDirection}` } }
            onClick={ this.handleClickOriginal }
          >
            { lang.viewOriginal }
          </a>
        </div>
        <div
          styleName="item"
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
  data: PropTypes.object,
  lang: PropTypes.object,
};

export default Branding;
