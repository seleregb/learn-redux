import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

const PhotoGrid = Loadable({
  loader: () => import('./PhotoGrid'),
  loading() {
    return <div>Loading...</div>
  }
});

const Single = Loadable({
  loader: () => import('./Single'),
  loading() {
    return <div>Loading...</div>
  }
});

@withRouter
class RouterComponent extends Component {

  render() {

    return (
      <div className="wrapper">
        <Switch>
          <Route exact path={'/'} component={PhotoGrid} />
          <Route path={'/view/:postId'} component={Single} />
        </Switch>
      </div>
    )
  }
}

export default RouterComponent;