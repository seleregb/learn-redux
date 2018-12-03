// let's go!
import React from 'react';
import ReactDOM from "react-dom";

// Import css
import './styles/style.styl';

// Import react router deps
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';

import Raven from 'raven-js';
import { sentry_url } from './data/config';
import App from './components/App';

// Raven.config(sentry_url, {
//   tags: {
//     git_commit: 'asdfas9809bf',
//     userLevel: 'editor'
//   }
// }).install();

const render = Component => (
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component history={history} />
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  )
)

render(App);
