import { INCREMENT_LIKES, SINGLE_POST, ALL_POSTS } from '../actions/actionTypes';

import posts from '../data/posts';

const initialState = [
  ...posts
]

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_LIKES:
      let index = action.payload.index;
      return [
        ...state.slice(0, index),
        // before the one we are updating
        {
          ...state[index],
          likes: state[index].likes + 1
        },
        ...state.slice(index + 1) // after the one we are updating
      ];
    case SINGLE_POST:
      // let index = action.index;
      return {
        ...state,
        ...state[index],
      };
  }
  return state;
}

// export default postsReducer;