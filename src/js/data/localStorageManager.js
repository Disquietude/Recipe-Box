import defaultRecipes from './defaultRecipes.json';

const localStorageKey = "_disquietude_recipes";

export function setRecipes(recipes) {
  localStorage.setItem(localStorageKey, JSON.stringify(recipes));
}

export function getRecipes() {
  if (!localStorage.getItem(localStorageKey)) {
    setRecipes(defaultRecipes);
  }
  return JSON.parse(localStorage.getItem(localStorageKey));
}