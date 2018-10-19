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
    let currentRecipe = this.props.recipes[this.props.selectedRecipe];
    return (
      <div className="recipe-view">
        <div className="recipe-view__card">
          <RecipeViewHeader
            openModal={this.props.openModal}
            recipeName={currentRecipe.name} 
          />
          <RecipeViewContents
            openModal={this.props.openModal}
            currentRecipe={currentRecipe}
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