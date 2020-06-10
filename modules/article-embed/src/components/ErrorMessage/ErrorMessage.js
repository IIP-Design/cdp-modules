import React from 'react';
import PropTypes from 'prop-types';

import './ErrorMessage.module.scss';

const ErrorMessage = ( { noResults } ) => (
  <div styleName="message">
    { !noResults && <h3>Sorry, there appears to have been an error while retrieving this content.</h3> }
    { noResults && <h3>Sorry, it looks like this content is currently unavailable.</h3> }
  </div>
);

ErrorMessage.propTypes = {
  noResults: PropTypes.bool,
};

export default ErrorMessage;
