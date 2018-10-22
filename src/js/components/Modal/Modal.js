import React from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

import { connect } from 'react-redux';
import { closeModal, changeInput } from '../../actions/modalActions';

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
            selectedRecipe={this.props.selectedRecipe}
            closeModal={this.props.closeModal}
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
  changeInput: (input) => dispatch(changeInput(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);