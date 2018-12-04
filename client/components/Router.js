import React from "react";
import { Route, Switch } from "react-router-dom";
// import PhotoGrid from "./PhotoGrid";
// import Single from "./Single";
import { withRouter } from 'react-router-dom';

class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount() {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const PhotoGrid = (props) => (
  <DynamicImport load={() => import('./PhotoGrid')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Single = (props) => (
  <DynamicImport load={() => import('./Single')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)


@withRouter
export class RouterComponent extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={PhotoGrid} />
          <Route path="/view/:postId" component={Single} />
        </Switch>
      </div>
    )
  }
}