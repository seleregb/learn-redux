import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from "react-redux";
import { incrementLikes } from '../actions/actionCreators';

@connect((store) => ({
  comments: store.commentsReducer
}))

class Photo extends Component {

  constructor(props) {
    super(props)
    this.incrementLikes = this.incrementLikes.bind(this);
    this.viewPostDetails = this.viewPostDetails.bind(this);
  }

  incrementLikes() {
    const { index } = this.props;
    this.props.dispatch(incrementLikes(index));
  }

  viewPostDetails(event) {
    event.preventDefault();
    const { post } = this.props;
    this.props.history.push(`/view/${post.code}`)
  }

  render() {
    const { post, comments } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img src={post.display_src} alt={post.caption} className="grid-photo"></img>
          </Link>
          {/* <img src={post.display_src} alt={post.caption} className="grid-photo" onClick={this.viewPostDetails}></img> */}

          <CSSTransition in={true}
            key={post.code}
            classNames="like"
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
            {/* <a className="button" onClick={this.viewPostDetails}>
              
            </a> */}
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