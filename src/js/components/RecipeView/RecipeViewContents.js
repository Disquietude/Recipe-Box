import React from 'react';
import RecipeViewListItem from "./RecipeViewListItem";
import RecipeViewAddItem from "./RecipeViewAddItem";

export default class RecipeViewContents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ingredients = this.props.currentRecipe.ingredients.map(createList("ingredients", this.props.openModal));
    const directions = this.props.currentRecipe.directions.map(createList("directions", this.props.openModal));
    return (
      <div className="recipe-view__contents">
        <h2 className="recipe-view__contents-header">Ingredients:</h2>
        <ul className="recipe-view__list recipe-view__list--bullets">
          {ingredients}
        </ul>
        <RecipeViewAddItem category="ingredients" openModal={this.props.openModal}/>
        <h2 className="recipe-view__contents-header">Directions:</h2>
        <ol className="recipe-view__list recipe-view__list--numbered">
          {directions}
        </ol>
        <RecipeViewAddItem category="directions" openModal={this.props.openModal}/>
      </div>
    );
  }
}

let createList = (category, openModal) => {
  return (current, index) => {
    return (
      <li className="recipe-view__list-item" key={index}>
          <RecipeViewListItem 
            content={current}
            category={category}
            index={index}
            openModal={openModal}
          />
      </li>
    );
  }
}