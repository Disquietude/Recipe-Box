import React from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

import { connect } from 'react-redux';
import { closeModal } from '../../actions/modalActions';

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
          <ModalBody />
          <ModalFooter 
            closeModal={this.props.closeModal}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalState: state.modal
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);