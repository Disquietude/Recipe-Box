import { SELECT_RECIPE } from './types';

export function selectRecipe(index) {
  return {
    type: SELECT_RECIPE,
    index: index
  }
}