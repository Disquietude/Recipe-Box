import React from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

import { connect } from 'react-redux';
import { closeModal, changeInput } from '../../actions/modalActions';
import { selectRecipe } from '../../actions/selectRecipe';
import {
  addRecipe,
  deleteRecipe
} from '../../actions/recipeActions';

class Modal extends React.Component {
  render() {
    let display = {
      display: this.props.modalState.display
    };
    return (
      <div className="modal" style={display}>
        <div className="modal__contents">
          <ModalHeader
            purpose={this.props.modalState.purpose}
            category={this.props.modalState.category}
            closeModal={this.props.closeModal} 
          />
          <ModalBody 
            modalState={this.props.modalState}
            recipes={this.props.recipes}
            selectedRecipe={this.props.selectedRecipe}
            changeInput={this.props.changeInput}
          />
          <ModalFooter 
            modalState={this.props.modalState}
            recipes={this.props.recipes}
            selectedRecipe={this.props.selectedRecipe}
            selectRecipe={this.props.selectRecipe}
            closeModal={this.props.closeModal}
            addRecipe={this.props.addRecipe}
            deleteRecipe={this.props.deleteRecipe}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalState: state.modal,
  recipes: state.recipes,
  selectedRecipe: state.selectedRecipe
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  changeInput: (input) => dispatch(changeInput(input)),
  selectRecipe: (index) => dispatch(selectRecipe(index)),
  addRecipe: (name) => dispatch(addRecipe(name)),
  deleteRecipe: (index) => dispatch(deleteRecipe(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);