import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import Photo from './Photo';

@withRouter
@connect((store) => ({
  posts: store.postsReducer
}))

class PhotoGrid extends Component {

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