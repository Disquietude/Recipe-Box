import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DEFAULT_RECIPES from "../defaultRecipes";

export default class RecipeViewListItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="recipe-view__list-item-contents">
        <p>{DEFAULT_RECIPES[0][this.props.type][this.props.index]}</p>
        <button className="recipe-view__list-item-button" title="Edit item">
          <FontAwesomeIcon icon="pen"/>
        </button>
        <button className="recipe-view__list-item-button" title="Delete item">
          <FontAwesomeIcon icon="trash"/>
        </button>
      </div>
    );
  }
}