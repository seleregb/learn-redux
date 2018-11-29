import { INCREMENT_LIKES } from '../actions/actionTypes';
import posts from '../data/posts';

const initialState = {
  posts: posts
}

export const postsReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case INCREMENT_LIKES:
      const index = action.index;
      return [
        ...state.slice(0, index),
        // before the one we are updating
        {
          ...state[index],
          likes: state[index].likes + 1
        },
        ...state.slice(index + 1) // after the one we are updating
      ];
    default:
      return state;
  }

}

// export default postsReducer;