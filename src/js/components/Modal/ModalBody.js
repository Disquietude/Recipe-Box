import React from 'react';

export default class ModalBody extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="modal__body">
        <p>Modal Body</p>
      </div>
    );
  }
}