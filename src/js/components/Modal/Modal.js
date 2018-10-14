import React from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';

import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modalActions';

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__contents">
          <ModalHeader />
          <ModalBody />
          <ModalFooter />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalState: state.modal
})

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  openModal: (payload) => dispatch(openModal(payload))
})

