import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header/Header';
import TabbedNav from '../TabbedNav/TabbedNav';

import style from './Layout.module.scss';

const Layout = () => (
  <Fragment>
    <Header />
    <main className={ style.main }>
      <TabbedNav />
      <Outlet />
    </main>
  </Fragment>
);

export default Layout;
