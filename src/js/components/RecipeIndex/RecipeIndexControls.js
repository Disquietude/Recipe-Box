import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class RecipeIndexControls extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(purpose) {
    let payload = {
      purpose: purpose,
      category: "recipes"
    };

    this.props.openModal(payload);
  }

  render() {
    let deleteButtonClasses = "recipe-index__button"
    let disabled = false;
    if (this.props.recipes.length == 0) {
      deleteButtonClasses += " recipe-index__button--disabled"
      disabled = true;
    }
    return (
      <div className="recipe-index__controls">
        <button 
          className="recipe-index__button" 
          title="Add recipe"
          onClick={(e) => this.onClick("add", e)}
        >
          <FontAwesomeIcon icon="plus" size="2x" className="recipe-index__button-icon"/>
        </button>
        <button 
          className={deleteButtonClasses} 
          title="Delete selected recipe"
          onClick={(e) => this.onClick("delete", e)}
          disabled={disabled}
        >
          <FontAwesomeIcon icon="trash" size="2x" className="recipe-index__button-icon"/>
        </button>
        <button 
          className="recipe-index__button" 
          title="Reset recipes"
          onClick={(e) => this.onClick("reset", e)}
        >
          <FontAwesomeIcon icon="undo" size="2x" className="recipe-index__button-icon"/>
        </button>
      </div>
    );
  }
}