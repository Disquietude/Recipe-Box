import React from 'react';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';

export default class Modal extends React.Component {
  render() {
    return (
      <div className="modal">
        <div className="modal__contents">
          <ModalHeader />
          <ModalBody />
        </div>
      </div>
    );
  }
}