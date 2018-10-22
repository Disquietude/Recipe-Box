import React from 'react';

export default class ModalBody extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.changeInput(event.target.value);
  }

  render() {
    let message = "", displayInput = {display: "none"};
    switch(this.props.modalState.purpose) {
      case "add":
        switch(this.props.modalState.category) {
          case "recipes": 
            message = "New recipe name:";
            break;
          case "ingredients":
            message = "New ingredient:";
            break;
          case "directions":
            message = "New direction:";
            break;
        }
        displayInput = {display: "block"}
        break;
      case "delete":
        message = "Are you sure you want to delete '";
        switch(this.props.modalState.category) {
          case "recipes":
            message += this.props.recipes[this.props.selectedRecipe].name;
            break;
          default:
            message += this.props.recipes[this.props.selectedRecipe][this.props.modalState.category][this.props.modalState.index];
        }
        message += "'?";
        break;
      case "edit":
        displayInput = {display: "block"}
        break;
    }
    return (
      <div className="modal__body">
        <p>{message}</p>
        <textarea
          className="modal__body-input"
          style={displayInput}
          value={this.props.modalState.input}
          onChange={this.onChange}
        />
      </div>
    );
  }
}