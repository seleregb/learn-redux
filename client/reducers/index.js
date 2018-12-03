import { combineReducers } from 'redux';
import { postsReducer } from './postsReducer';
import { commentsReducer } from './commentsReducer';
import { connectRouter } from 'connected-react-router';

// const rootReducer = combineReducers({ postsReducer, commentsReducer, routing: routingReducer });

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  // rest of your reducers
  postsReducer, commentsReducer
})

export default rootReducer;