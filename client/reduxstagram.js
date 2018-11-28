// let's go!
import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router deps
import { Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

Raven.config(sentry_url, {
  tags: {
    git_commit: 'asdfas9809bf',
    userLevel: 'editor'
  }
}).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route exact component={PhotoGrid}></Route>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>

)

render(router, document.getElementById('root'));

// if (module.hot) {
//   module.hot.accept();
// }