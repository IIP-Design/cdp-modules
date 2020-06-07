import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import './Tab.module.scss';

const Tab = ( { activeTab, path, title } ) => (
  <li styleName={ `list-item${activeTab === `/${path}` ? ' active' : ''}` }>
    <Link styleName="nav-link" to={ path }>
      { title }
    </Link>
  </li>
);

Tab.propTypes = {
  activeTab: PropTypes.string,
  path: PropTypes.string,
  title: PropTypes.string,
};

export default Tab;
