import React, { Component } from 'react';
import { removeComments, addComments } from '../actions/actionCreators';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.commentsForm = React.createRef();
    this.author = React.createRef();
    this.comment = React.createRef();
    this.deleteComment = this.deleteComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);
  }

  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment"
            onClick={this.deleteComment.bind(this, index)}>
            &times;
           </button>
        </p>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.match.params;
    // const { author, comment } = this.refs;
    this.props.dispatch(addComments(postId, this.author.current.value, this.comment.current.value));
    this.author.current.value = "";
    this.comment.current.value = "";
  }

  deleteComment(index) {
    const { postId } = this.props.match.params;
    this.props.dispatch(removeComments(postId, index));
  }

  render() {

    const { postComments } = this.props;

    return (
      <div className="comments">
        {postComments.map(this.renderComment)}
        <form ref={this.commentsForm} className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref={this.author} placeholder="author" />
          <input type="text" ref={this.comment} placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
};

export default Comments;