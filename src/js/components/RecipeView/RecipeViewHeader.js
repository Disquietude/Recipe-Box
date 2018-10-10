import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DEFAULT_RECIPES from "../defaultRecipes.json";

export default class RecipeViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="recipe-view__header">
        <h1 className="recipe-view__name">{DEFAULT_RECIPES[0].name}</h1>
        <button className="recipe-view__edit-name" title="Edit name">
          <FontAwesomeIcon icon="pen" size="2x"/>
        </button>
      </div>
    );
  }
}