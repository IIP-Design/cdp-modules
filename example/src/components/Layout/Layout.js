import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import TabbedNav from '../TabbedNav/TabbedNav';

import style from './Layout.module.scss';

const Layout = ( { children } ) => (
  <Fragment>
    <Header />
    <main className={style.main}>
      <TabbedNav />
      <Outlet />
    </main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
