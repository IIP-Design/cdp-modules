import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';
import List from './containers/list_container';

const createStoreWithMiddleware = applyMiddleware( ReduxPromise )( createStore );

class ArticleFeed extends Component {
  render() {
    return (
      <Provider store={ createStoreWithMiddleware( reducers ) }>
        <List config={ this.props } />
      </Provider>
    );
  }
}

export default ArticleFeed;
