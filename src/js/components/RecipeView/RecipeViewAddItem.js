import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RecipeViewAddItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="recipe-view__add-list-item-button">
        <FontAwesomeIcon icon="plus"/>
        <p>Add item</p>
      </button>
    );
  }
}