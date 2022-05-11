import React, { Fragment, useState } from 'react';

import ConfigForm from './ConfigForm/ConfigForm';
import useScript from '../../hooks/useScript';
import { getConfig } from './utils';

import style from './Pages.module.scss';

const ArticleEmbed = () => {
  // const initialState = {
  //   id: 511490,
  //   site: 'share.dev.america.gov',
  // };

  const initialState = {
    id: 17,
    site: 'localhost',
  };

  const [data, setData] = useState( initialState );

  useScript( './dev-articleEmbedLoader.js', getConfig( data ), 'cdpArticle' );

  return (
    <Fragment>
      <h2 className={ style.title }>Sample Article Embed:</h2>
      <ConfigForm data={ data } setData={ setData } />
      <div id="cdp-article-embed" />
    </Fragment>
  );
};

export default ArticleEmbed;
