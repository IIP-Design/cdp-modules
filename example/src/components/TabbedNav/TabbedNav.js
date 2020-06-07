import React, { useEffect, useState } from 'react';
import { useLocation } from '@reach/router';

import Tab from './Tab/Tab';

import './TabbedNav.module.scss';

const TabbedNav = () => {
  const [active, setActive] = useState( 'article-embed' );

  const location = useLocation();

  useEffect( () => {
    if ( location ) {
      setActive( location.pathname );
    }
  }, [location, setActive] );

  return (
    <nav styleName="nav">
      <ul styleName="list">
        <Tab activeTab={ active } path="article-embed" title="Article Embed" />
        <Tab activeTab={ active } path="article-feed" title="Article Feed" />
      </ul>
    </nav>
  );
};

export default TabbedNav;
