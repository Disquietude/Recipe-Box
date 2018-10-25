import { 
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE_NAME,
  ADD_RECIPE_ITEM,
  DELETE_RECIPE_ITEM,
  EDIT_RECIPE_ITEM
} from '../actions/types';
import produce from 'immer';
import defaultRecipes from '../data/defaultRecipes.json';

let recipesReducer = (state = defaultRecipes, action) => {
  return produce(state, (draft) => {
    switch(action.type) {
      case ADD_RECIPE:
        let newRecipe = {
          name: action.name,
          ingredients: [],
          directions: []
        };
        draft.push(newRecipe);
        break;
      case DELETE_RECIPE:
        draft.splice(action.index, 1);
        break;
      case EDIT_RECIPE_NAME:
        draft[action.payload.index].name = action.payload.input;
        break;
      case ADD_RECIPE_ITEM:
        draft[action.payload.recipeIndex][action.payload.category].push(action.payload.input);
        break;
      case DELETE_RECIPE_ITEM:
        draft[action.payload.recipeIndex][action.payload.category].splice(action.payload.itemIndex, 1);
        break;
      case EDIT_RECIPE_ITEM:
        draft[action.payload.recipeIndex][action.payload.category][action.payload.itemIndex] = action.payload.input;
        break;
    }
  });
};

export default recipesReducer;