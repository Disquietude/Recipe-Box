import React from 'react';
import RecipeViewListItem from "./RecipeViewListItem";
import RecipeViewAddItem from "./RecipeViewAddItem";

export default class RecipeViewContents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let content = null;
    if(this.props.recipes.length > 0) {
      const currentRecipe = this.props.recipes[this.props.selectedRecipe];
      const ingredients = currentRecipe.ingredients.map(createList("ingredients", this.props.openModal));
      const directions = currentRecipe.directions.map(createList("directions", this.props.openModal));

      content = (
        <React.Fragment>
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
        </React.Fragment>
      );
    }
    
    
    return (
      <div className="recipe-view__contents">
        {content}
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