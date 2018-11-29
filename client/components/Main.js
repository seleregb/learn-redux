import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {

  render() {

    const { history } = this.props;

    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
      </div>
    )
  }
}

export default Main;