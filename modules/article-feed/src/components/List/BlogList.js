import React from 'react';
import propTypes from 'prop-types';

import BlogListItem from '../ListItem/BlogListItem';

const BlogList = ( { articles, config, total } ) => (
  <ul className="article-item-group article-style-blog" data-total={ total }>
    { articles.map( article => (
      <BlogListItem
        key={ article._id }
        article={ article }
        tags={ config.tags }
        meta={ config.meta }
        ui={ config.ui }
      />
    ) ) }
  </ul>
);

BlogList.propTypes = {
  articles: propTypes.array,
  config: propTypes.object,
  total: propTypes.number,
};

export default BlogList;
