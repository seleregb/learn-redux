import React from 'react';
import { connect } from "react-redux";
import Photo from './Photo';
import Main from './Main';
@connect((store) => ({
  posts: store.postsReducer,
  comments: store.postsReducer
}))

class PhotoGrid extends React.Component {
  render() {

    const { posts } = this.props;

    console.log(this.props);

    return (
      <div>
        <Main />
        <div className="photo-grid" >
          {posts.map((post, index) => <Photo {...this.props} key={index} index={index} post={post} />)}
        </div>
      </div>

    )
  }
}

export default PhotoGrid;