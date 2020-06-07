import React from 'react';
import { Link } from '@reach/router';

import './TabbedNav.module.scss';

const TabbedNav = () => (
  <nav styleName="nav">
    <ul styleName="list">
      <li styleName="list-item">
        <Link to="article-embed">
          Article Embed
        </Link>
      </li>
      <li styleName="list-item">
        <Link to="article-feed">
          Article Feed
        </Link>
      </li>
    </ul>
  </nav>
);

export default TabbedNav;
