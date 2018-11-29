import { createStore, compose, applyMiddleware } from 'redux';
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";

// Import the root reducer
import rootReducer from './reducers/index';

// import comments from './data/comments';
// import posts from './data/posts';


// // create an object for the default data
// const defaultState = {
//   posts,
//   comments
// };

// activate redux dev tools extension if user has it installed
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;