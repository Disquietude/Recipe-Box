import React from 'react';
import RecipeViewListItem from "./RecipeViewListItem";
import RecipeViewAddItem from "./RecipeViewAddItem";
import DEFAULT_RECIPES from '../defaultRecipes.json';

export default class RecipeViewContents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ingredients = DEFAULT_RECIPES[0].ingredients.map(createList("ingredients"));;
    const directions = DEFAULT_RECIPES[0].directions.map(createList("directions"));
    return (
      <div className="recipe-view__contents">
        <h2 className="recipe-view__contents-header">Ingredients:</h2>
        <ul className="recipe-view__list recipe-view__list--bullets">
          {ingredients}
        </ul>
        <RecipeViewAddItem type="ingredients"/>
        <h2 className="recipe-view__contents-header">Directions:</h2>
        <ol className="recipe-view__list recipe-view__list--numbered">
          {directions}
        </ol>
        <RecipeViewAddItem type="directions"/>
      </div>
    );
  }
}

let createList = (type) => {
  return (current, index) => {
    return (
      <li className="recipe-view__list-item" key={index}>
          <RecipeViewListItem 
            type={type}
            index={index}
          />
      </li>
    );
  }
}