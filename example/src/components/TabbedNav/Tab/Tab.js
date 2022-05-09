import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import style from './Tab.module.scss';

const Tab = ( { activeTab, path, title } ) => (
  <li className={ activeTab === `/${path}` ? `${style['list-item']} ${style.active}` : style['list-item'] }>
    <Link className={style['nav-link']} to={ path }>
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
