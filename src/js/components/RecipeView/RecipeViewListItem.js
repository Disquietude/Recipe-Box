import React from 'react';
import DEFAULT_RECIPES from "../defaultRecipes";

export default class RecipeViewListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="recipe-view__list-item-contents">
        <p>{DEFAULT_RECIPES[0][this.props.type][this.props.index]}</p>
      </div>
    );
  }
}