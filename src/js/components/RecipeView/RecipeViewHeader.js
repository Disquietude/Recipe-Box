import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RecipeViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="recipe-view__header">
        <h1 className="recipe-view__name">Recipe View</h1>
        <button className="recipe-view__edit-name">
          <FontAwesomeIcon icon="pen" size="2x"/>
        </button>
      </div>
    );
  }
}