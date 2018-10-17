import { SELECT_RECIPE } from '../actions/types';

let selectedRecipeReducer = (state = 0, action) => {
  switch(action.type) {
    case SELECT_RECIPE:
      return action.index;
    default:
      return state;
  }
}

export default selectedRecipeReducer;