import React from 'react';

const Comments = React.createClass({

  renderComment(comment, index) {
    return (
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment"
            onClick={this.deleteComment.bind(null, index)}>
            &times;
           </button>
        </p>
      </div>
    );
  },

  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const { author, comment, commentForm } = this.refs;
    this.props.addComment(postId, author.value, comment.value);
    commentForm.reset();
  },

  deleteComment(index) {
    const { postId } = this.props.params;
    this.props.removeComment(postId, index);
  },

  render() {

    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});

export default Comments;