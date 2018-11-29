import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { connect } from "react-redux";
import { incrementLikes } from '../actions/actionCreators';

@connect((store) => ({
  comments: store.commentsReducer
}))

class Photo extends React.Component {

  constructor(props) {
    super(props)
    this.incrementLikes = this.incrementLikes.bind(this);
  }

  incrementLikes() {
    const { index } = this.props;
    this.props.dispatch(incrementLikes(index));
  }

  render() {
    const { post, comments } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo"></img>
          </Link>

          <CSSTransition classNames="like"
            timeout={500} unmountOnExit>
            <span key={post.likes} className="likes-heart">{post.likes}</span>

          </CSSTransition>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button className="likes" onClick={this.incrementLikes}>
              &hearts; {post.likes}
            </button>
            <Link className="button" to={`/view/${post.code}`}>
              <span className="comment-count">
                {' '}<span className="speech-bubble"></span>
                {comments[post.code] ? comments[post.code].length : 0}
              </span>
            </Link>
          </div>
        </figcaption>

      </figure>
    );
  }
}

export default Photo;