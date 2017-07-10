import React from 'react';
import { Grid, Header, Divider } from 'semantic-ui-react';
import moment from 'moment';
import { getBackgroundImage } from  '../utils/image';
import './article.css';

const DefaultListItem = ( props ) => {

  const article = props.article._source;

  return (
      <Grid className="article-grid" stackable stretched>
        <Header as='h2'>
          <a rel="noopener noreferrer" target="_blank" href={ article.link }>
            { article.title }
          </a>
        </Header>
        <Grid.Row className="article">
           <Grid.Column width={6}>
             <div className="article-image ai-180" style={ getBackgroundImage(article) }></div>
           </Grid.Column>
           <Grid.Column width={10}>
             { article.excerpt }
             <div className="article-meta">{ article.author.name } | { moment(article.published).format('MMMM Do YYYY') } </div>
           </Grid.Column>
        </Grid.Row>
        <Divider />
      </Grid>
  );
};

export default DefaultListItem;