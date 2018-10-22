import React from 'react';

export default class ModalFooter extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    let buttonLabel = (this.props.modalState.purpose == "edit") ? "Save" : "Confirm";
    return (
      <div className="modal__footer">
        <button className="modal__footer-button modal__footer-button--confirm">{buttonLabel}</button>
        <button 
          className="modal__footer-button modal__footer-button--cancel"
          onClick={this.props.closeModal}>Cancel</button>
      </div>
    );
  }
}