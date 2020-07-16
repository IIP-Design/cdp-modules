import React from 'react';
import propTypes from 'prop-types';

import DefaultListItem from '../ListItem/DefaultListItem';

const DefaultList = ( { articles, config, total } ) => (
  <ul className="article-item-group" data-total={ total }>
    { articles.map( article => (
      <DefaultListItem
        key={ article._id }
        article={ article }
        tags={ config.tags }
        meta={ config.meta }
        ui={ config.ui }
      />
    ) ) }
  </ul>
);

DefaultList.propTypes = {
  articles: propTypes.array,
  config: propTypes.object,
  total: propTypes.number,
};

export default DefaultList;
