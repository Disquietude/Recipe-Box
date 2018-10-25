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

          //Select the newly added recipe
          this.props.selectRecipe(this.props.recipes.length);

        }
        else {
          let payload = {
            recipeIndex: this.props.selectedRecipe,
            category: this.props.modalState.category,
            input: this.props.modalState.input
          };
          this.props.addRecipeItem(payload);
        }
        break;
      case "delete":
        if (this.props.modalState.category === "recipes") {
          this.props.deleteRecipe(this.props.selectedRecipe);

          //Avoid out of bounds error when deleting the last recipe in the array
          if ((this.props.selectedRecipe == this.props.recipes.length - 1) && (this.props.selectedRecipe > 0)) {
            this.props.selectRecipe(this.props.selectedRecipe - 1);
          }
        }
        else {
          let payload = {
            recipeIndex: this.props.selectedRecipe,
            category: this.props.modalState.category,
            itemIndex: this.props.modalState.index
          };
          this.props.deleteRecipeItem(payload);
        }
        break;
      case "edit":
        if (this.props.modalState.category === "recipes") {
          let payload = {
            index: this.props.selectedRecipe,
            input: this.props.modalState.input
          }
          this.props.editRecipeName(payload);
        }
        else {
          let payload = {
            recipeIndex: this.props.selectedRecipe,
            category: this.props.modalState.category,
            itemIndex: this.props.modalState.index,
            input: this.props.modalState.input
          };
          this.props.editRecipeItem(payload);
        }
    }
    this.props.closeModal();
  }

  render() {
    let confirmButtonProps = {
      className: "modal__footer-button modal__footer-button--confirm",
      disabled: false,
      onClick: this.confirm,
      children: "Confirm"
    };

    if (this.props.modalState.purpose != "delete") {
      confirmButtonProps.children = "Save";

      //Prevent saving by disabling button if input is empty
      if (this.props.modalState.input == "") {
        confirmButtonProps.className += " modal__footer-button--disabled";
        confirmButtonProps.disabled = true;
      }
    }
    
    return (
      <div className="modal__footer">
        <button 
          {...confirmButtonProps}
        >
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