import React from 'react';

export default class ModalFooter extends React.Component {
  constructor(props){
    super(props);
    this.confirm = this.confirm.bind(this);
  }

  confirm() {
    switch(this.props.modalState.purpose) {
      case "add":
        if (this.props.modalState.category === "recipes") {
          this.props.addRecipe(this.props.modalState.input);
        }
        break;
      case "delete":
        if (this.props.modalState.category === "recipes") {
          this.props.deleteRecipe(this.props.selectedRecipe);

          //Avoid out of bounds error when deleting the last recipe in the array
          if ((this.props.selectedRecipe == this.props.recipes.length - 1) && (this.props.selectedRecipe != 0)) {
            this.props.selectRecipe(this.props.selectedRecipe - 1);
          }
        }
        break;
    }
    this.props.closeModal();
  }

  render() {
    let buttonLabel = (this.props.modalState.purpose == "edit") ? "Save" : "Confirm";
    return (
      <div className="modal__footer">
        <button 
          className="modal__footer-button modal__footer-button--confirm"
          onClick={this.confirm}
        >
          {buttonLabel}
        </button>
        <button 
          className="modal__footer-button modal__footer-button--cancel"
          onClick={this.props.closeModal}
        >
          Cancel
        </button>
      </div>
    );
  }
}