import { INCREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT, ALL_POSTS, SINGLE_POST } from './actionTypes';

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

export const fetchPosts = () => {
  return (dispatch) => dispatch({
    type: ALL_POSTS,
    payload: location
  });
}

export const fetchSinglePost = (postId, index) => {
  return (dispatch) => dispatch({
    type: SINGLE_POST, postId, index,
    payload: location
  })
}