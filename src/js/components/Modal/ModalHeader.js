import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ModalHeader extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="modal__header">
        <h1>Modal Header</h1>
        <button>
          <FontAwesomeIcon icon="times" size="2x"/>
        </button>
      </div>
    );
  }
}
