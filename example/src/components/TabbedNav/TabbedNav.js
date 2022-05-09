import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Tab from './Tab/Tab';

import style from './TabbedNav.module.scss';

const TabbedNav = () => {
  const [active, setActive] = useState( 'article-embed' );

  const location = useLocation();

  useEffect( () => {
    if ( location ) {
      setActive( location.pathname );
    }
  }, [location, setActive] );

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        <Tab activeTab={ active } path="embed" title="Article Embed" />
        <Tab activeTab={ active } path="feed" title="Article Feed" />
      </ul>
    </nav>
  );
};

export default TabbedNav;
