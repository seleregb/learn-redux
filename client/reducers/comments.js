import ActionTypes from "../actions/actionTypes";

function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      // take the current state
      ...state,
      // override this post with a new one
      [action.postId]: postComments(state[action.postId], action),
    }
  }
  return state;

}

function postComments(state = [], action) {
  switch (action.type) {
    case (ActionTypes.ADD_COMMENT):
      // return the new state with the new comment
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case (ActionTypes.REMOVE_COMMENT):
      // return the new state without the deleted comment
      return [
        // from the start to the one to delete
        ...state.slice(0, action.index),
        // then for everything after the deleted one to the end
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

export default comments;