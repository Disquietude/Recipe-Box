import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RecipeViewAddItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    let payload = {
      purpose: "add",
      category: this.props.category
    }

    this.props.openModal(payload);
  }

  render() {
    return (
      <button 
        className="recipe-view__add-list-item-button"
        onClick={this.onClick}
      >
        <FontAwesomeIcon icon="plus"/>
        <p>Add item</p>
      </button>
    );
  }
}