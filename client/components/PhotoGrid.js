import React from 'react';
import { connect } from "react-redux";
import Photo from './Photo';
import { withRouter } from 'react-router';

@withRouter
@connect((store) => ({
  posts: store.postsReducer
}))

class PhotoGrid extends React.Component {

  render() {

    const { posts } = this.props;

    return (
      <div>
        <div className="photo-grid" >
          {posts.map((post, index) => <Photo {...this.props} key={index} index={index} post={post} />)}
        </div>
      </div>
    )
  }
}

export default PhotoGrid;