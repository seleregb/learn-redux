import ActionTypes from '../actions/actionTypes';

function posts(state = [], action) {
  switch (action.type) {
    case ActionTypes.INCREMENT_LIKES:
      const index = action.index;
      return [
        ...state.slice(0, index), // before the one we are updating
        { ...state[index], likes: state[index].likes + 12 },
        ...state.slice(index + 1), // after the one we are updating
      ];
    default:
      return state;
  }

}

export default posts;