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
      input: this.props.recipes[this.props.selectedRecipe].name
    };

    this.props.openModal(payload);
  }

  render() {
    let content = null;
    if (this.props.recipes.length > 0) {
      content = (
        <React.Fragment>
          <h1 className="recipe-view__name">
            {this.props.recipes[this.props.selectedRecipe].name}
          </h1>
          <button 
            className="recipe-view__edit-name" 
            title="Edit name"
            onClick={this.onClick}
          >
            <FontAwesomeIcon icon="pen" size="2x"/>
          </button>
        </React.Fragment>
      );
    }
    return (
      <div className="recipe-view__header">
        {content}
      </div>
    );
  }
}