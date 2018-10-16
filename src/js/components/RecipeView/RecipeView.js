import React from "react";
import RecipeViewHeader from "./RecipeViewHeader";
import RecipeViewContents from "./RecipeViewContents";  

import { connect } from 'react-redux';
import { openModal } from '../../actions/modalActions';

class RecipeView extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="recipe-view">
        <div className="recipe-view__card">
          <RecipeViewHeader
            openModal={this.props.openModal} 
          />
          <RecipeViewContents
            openModal={this.props.openModal}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  modalState: state.modal
})

const mapDispatchToProps = dispatch => ({
  openModal: (payload) => dispatch(openModal(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView)