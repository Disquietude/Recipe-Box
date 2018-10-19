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
          className="recipe-index__button" 
          title="Delete selected recipe"
          onClick={(e) => this.onClick("delete", e)}
        >
          <FontAwesomeIcon icon="trash" size="2x" className="recipe-index__button-icon"/>
        </button>
      </div>
    );
  }
}