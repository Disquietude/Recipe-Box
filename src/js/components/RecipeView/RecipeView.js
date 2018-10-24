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
            recipes={this.props.recipes}
            selectedRecipe={this.props.selectedRecipe}
            openModal={this.props.openModal} 
          />
          <RecipeViewContents
            recipes={this.props.recipes}
            selectedRecipe={this.props.selectedRecipe}
            openModal={this.props.openModal}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  selectedRecipe: state.selectedRecipe
})

const mapDispatchToProps = dispatch => ({
  openModal: (payload) => dispatch(openModal(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeView)