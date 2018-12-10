import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import Photo from './Photo';
import Comments from './Comments';

@withRouter
@connect((store) => ({
  posts: store.postsReducer,
  comments: store.commentsReducer
}))
class Single extends React.Component {
  render() {

    const { postId } = this.props.match.params;
    const index = this.props.posts.findIndex((post) => post.code === postId);
    const post = this.props.posts[index];
    const postComments = this.props.comments[postId] || [];

    return (
      <div>
        <div className="single-photo">
          <Photo index={index} post={post} {...this.props} />
          <Comments postComments={postComments} {... this.props} />
        </div>
      </div>
    )
  }
};

export default Single;