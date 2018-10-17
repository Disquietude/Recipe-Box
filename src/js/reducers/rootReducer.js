import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import recipesReducer from "./recipesReducer";
import selectedRecipeReducer from "./selectedRecipeReducer";

export default combineReducers({
  modal: modalReducer,
  recipes: recipesReducer,
  selectedRecipe: selectedRecipeReducer
});
