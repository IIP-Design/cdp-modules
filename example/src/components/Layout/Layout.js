import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import TabbedNav from '../TabbedNav/TabbedNav';

import './Layout.module.scss';

const Layout = ( { children } ) => (
  <Fragment>
    <Header />
    <main styleName="main">
      <TabbedNav />
      { children }
    </main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
