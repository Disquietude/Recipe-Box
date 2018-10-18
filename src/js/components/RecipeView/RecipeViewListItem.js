import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class RecipeViewListItem extends React.Component {
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(purpose) {
    let payload = {
      purpose: purpose,
      category: this.props.category,
      index: this.props.index
    };

    this.props.openModal(payload);
  }

  render() {
    return (
      <div className="recipe-view__list-item-contents">
        <p>
          {this.props.content}
          <button 
            className="recipe-view__list-item-button" 
            title="Edit item"
            onClick={(e) => this.onClick("edit", e)}
          >
            <FontAwesomeIcon icon="pen"/>
          </button>
          <button 
            className="recipe-view__list-item-button" 
            title="Delete item"
            onClick={(e) => this.onClick("delete", e)}
          >
            <FontAwesomeIcon icon="trash"/>
          </button>
        </p>
      </div>
    );
  }
}