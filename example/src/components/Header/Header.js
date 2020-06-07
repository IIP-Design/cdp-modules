import React from 'react';

import './Header.module.scss';

const Header = () => (
  <header role="banner" styleName="header">
    <div styleName="content">
      <img
        alt="U.S. Department of State seal"
        src="./assets/dos_seal.svg"
        styleName="seal"
      />
      <h1 styleName="title">CDP Modules Example Site</h1>
    </div>
  </header>
);

export default Header;
