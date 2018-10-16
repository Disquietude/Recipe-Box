import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ModalHeader extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let title = "";

    switch(this.props.purpose) {
      case "add":
        title += "Add ";
        break;
      case "edit":
        title += "Edit ";
        break;
      case "delete":
        title += "Delete ";
        break;
    }

    switch(this.props.category) {
      case "recipes":
        title += "Recipe";
        if (this.props.purpose == "edit") {
          title += " Name";
        }
        break;
      case "ingredients":
        title += "Ingredient";
        break;
      case "directions":
        title += "Direction";
        break;
    }


    return (
      <div className="modal__header">
        <h1>{title}</h1>
        <button onClick={this.props.closeModal}>
          <FontAwesomeIcon icon="times" size="2x"/>
        </button>
      </div>
    );
  }
}
