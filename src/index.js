import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";

import App from './App';
import reducers from "./reducers";

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware( ReduxPromise )( createStore );

var root = document.getElementById( 'root' );  // domEl widget attaches to 

ReactDOM.render(
  <Provider store={ createStoreWithMiddleware(reducers) }>
    <App { ...(root.dataset) } />
  </Provider>,
  root );  // what dom el are we going to attach to?

registerServiceWorker();
