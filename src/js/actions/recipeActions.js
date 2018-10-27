import { 
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE_NAME,
  ADD_RECIPE_ITEM,
  DELETE_RECIPE_ITEM,
  EDIT_RECIPE_ITEM,
  RESET_RECIPES
} from './types';

export function addRecipe(name) {
  return {
    type: ADD_RECIPE,
    name: name
  }
}

export function deleteRecipe(index) {
  return {
    type: DELETE_RECIPE,
    index: index
  }
}

export function editRecipeName(payload) {
  return {
    type: EDIT_RECIPE_NAME,
    payload: payload
  }
}

export function addRecipeItem(payload) {
  return {
    type: ADD_RECIPE_ITEM,
    payload: payload
  }
}

export function deleteRecipeItem(payload) {
  return {
    type: DELETE_RECIPE_ITEM,
    payload: payload
  }
}

export function editRecipeItem(payload) {
  return {
    type: EDIT_RECIPE_ITEM,
    payload: payload
  }
}

export function resetRecipes(defaultRecipes) {
  return {
    type: RESET_RECIPES,
    defaultRecipes: defaultRecipes
  }
}