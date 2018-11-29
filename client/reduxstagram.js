// let's go!
import React from 'react';

import { render } from 'react-dom';

// Import css
import './styles/style.styl';

// Import Components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import react router deps
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';

// Raven.config(sentry_url, {
//   tags: {
//     git_commit: 'asdfas9809bf',
//     userLevel: 'editor'
//   }
// }).install();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Switch>
    </Router>
  </Provider>

)

render(router, document.getElementById('root'));

// if (module.hot) {
//   module.hot.accept();
// }