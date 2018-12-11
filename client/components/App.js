import React, { Component } from "react";
import RouterComponent from "./Router";
import Header from "./Header";
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    const { history } = this.props;
    return (
      <div id="main">
        <Header />
        <RouterComponent history={history} location={location} />
      </div>
    )
  }
}


export default hot(module)(App);