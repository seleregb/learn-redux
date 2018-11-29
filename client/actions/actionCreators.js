import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT, FETCH_COMMENTS } from './actionTypes';

// Increment
// export function increment(index) {
//   return {
//     type: ActionTypes.INCREMENT_LIKES,
//     index
//   }
// }

export const incrementLikes = (index) => {
  return (dispatch) => dispatch({ type: INCREMENT_LIKES, index });
}

// // Add Comment
// export function addComment(postId, author, comment) {
//   return {
//     type: ActionTypes.ADD_COMMENT,
//     postId,
//     author,
//     comment
//   }
// }

export const addComments = (postId, author, comment) => {
  return (dispatch) => dispatch({
    type: ADD_COMMENT, postId, author, comment
  });
}

// // Remove Comment
// export function removeComment(postId, index) {
//   return {
//     type: ActionTypes.REMOVE_COMMENT,
//     index,
//     postId
//   }
// }

export const removeComments = (postId, index) => {
  return (dispatch) => dispatch({
    type: REMOVE_COMMENT, index, postId
  });
}

export const fetchComments = (postId) => {
  return (dispatch) => dispatch({
    type: FETCH_COMMENTS, postId
  });
}