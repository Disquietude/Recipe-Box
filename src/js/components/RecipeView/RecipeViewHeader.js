import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RecipeViewHeader extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let payload = {
      purpose: "edit",
      category: "recipes",
      index: this.props.recipeIndex
    };

    this.props.openModal(payload);
  }

  render() {
    return (
      <div className="recipe-view__header">
        <h1 className="recipe-view__name">{this.props.recipeName}</h1>
        <button 
          className="recipe-view__edit-name" 
          title="Edit name"
          onClick={this.onClick}
        >
          <FontAwesomeIcon icon="pen" size="2x"/>
        </button>
      </div>
    );
  }
}