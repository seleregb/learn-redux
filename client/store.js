import { createStore, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import thunk from "redux-thunk";
import { routerMiddleware } from 'connected-react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// activate redux dev tools extension if user has it installed
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

// const store = createStore(rootReducer, composeEnhancers(
//   applyMiddleware(thunk)
// ));

const store = createStore(
  rootReducer(history), // root reducer with router state
  // initialState,
  composeEnhancers(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
      thunk
    ),
  ),
)

// export const history = syncHistoryWithStore(createBrowserHistory(), store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;