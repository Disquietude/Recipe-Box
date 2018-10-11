import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class RecipeIndexControls extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="recipe-index__controls">
        <button className="recipe-index__button" title="Add recipe">
          <FontAwesomeIcon icon="plus" size="2x" className="recipe-index__button-icon"/>
        </button>
        <button className="recipe-index__button" title="Delete selected recipe">
          <FontAwesomeIcon icon="trash" size="2x" className="recipe-index__button-icon"/>
        </button>
      </div>
    );
  }
}