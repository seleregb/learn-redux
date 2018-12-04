import React from 'react';
import { withRouter } from 'react-router';
// import Photo from './Photo';
// import Comments from './Comments';
import { connect } from 'react-redux';

const Photo = (props) => (
  <DynamicImport load={() => import('./Photo')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

const Comments = (props) => (
  <DynamicImport load={() => import('./Comments')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)

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