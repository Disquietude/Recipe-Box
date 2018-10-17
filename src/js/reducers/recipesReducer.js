import defaultRecipes from '../data/defaultRecipes.json';

const initialState = defaultRecipes;

let recipesReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default recipesReducer;