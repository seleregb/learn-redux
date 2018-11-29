import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';
import { hot } from 'react-hot-loader';
import PhotoGrid from './PhotoGrid';


function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// const mapDispatchToProps = dispatch => ({
//   updateTime: () => dispatch(fetchNewTime())
// })

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(PhotoGrid);

export default hot(module)(App);