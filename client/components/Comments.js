import React from 'react';
import { removeComments, addComments } from '../actions/actionCreators';

class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderComment = this.renderComment.bind(this);

    this.state = {
      postComments: []
    };
  }

  componentDidMount() {
    const { postComments } = this.props;
    if (postComments) console.log(postComments);
    this.setState({ postComments });
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
    const { author, comment, commentForm } = this.refs;
    this.props.dispatch(addComments(postId, author.value, comment.value));
    commentForm.reset();
  }

  deleteComment(index) {
    const { postId } = this.props.match.params;
    this.props.dispatch(removeComments(postId, index));
  }

  render() {

    const { postComments } = this.props;

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
};

export default Comments;