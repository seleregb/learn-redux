import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';


// Import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


// create an object for the default data
const defaultState = {
  posts,
  comments
};

// activate redux dev tools extension if user has it installed
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(BrowserRouter, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;