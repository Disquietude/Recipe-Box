import defaultRecipes from '../data/defaultRecipes.json';

let recipesReducer = (state = defaultRecipes, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default recipesReducer;