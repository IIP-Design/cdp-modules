import React from 'react';

import style from './Header.module.scss';

const Header = () => (
  <header role="banner" className={style.header}>
    <div className={style.content}>
      <img
        alt="U.S. Department of State seal"
        src="./assets/dos_seal.svg"
        className={style.seal}
      />
      <h1 className={style.title}>CDP Modules Example Site</h1>
    </div>
  </header>
);

export default Header;
