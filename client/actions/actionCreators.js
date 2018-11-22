import ActionTypes from './actionTypes';

// Increment
export function increment(index) {
  return {
    type: ActionTypes.INCREMENT_LIKES,
    index
  }
}

// Add Comment
export function addComment(postId, author, comment) {
  return {
    type: ActionTypes.ADD_COMMENT,
    postId,
    author,
    comment
  }
}

// Remove Comment
export function removeComment(postId, index) {
  return {
    type: ActionTypes.REMOVE_COMMENT,
    index,
    postId
  }
}