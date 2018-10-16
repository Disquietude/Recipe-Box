import React from 'react';

export default class ModalFooter extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="modal__footer">
        <button className="modal__footer-button modal__footer-button--confirm">Confirm</button>
        <button 
          className="modal__footer-button modal__footer-button--cancel"
          onClick={this.props.closeModal}>Cancel</button>
      </div>
    );
  }
}