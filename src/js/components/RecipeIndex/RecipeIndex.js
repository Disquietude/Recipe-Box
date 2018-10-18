import React from "react";
import RecipeIndexList from "./RecipeIndexList";
import RecipeIndexControls from "./RecipeIndexControls";

import { connect } from 'react-redux';
import { openModal } from '../../actions/modalActions';
import { selectRecipe } from '../../actions/selectRecipe';

class RecipeIndex extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="recipe-index">
        <h1 className="recipe-index__title">Recipe Box</h1>
        <RecipeIndexList 
          recipes={this.props.recipes}
          selectedRecipe={this.props.selectedRecipe}
          selectRecipe={this.props.selectRecipe}
        />
        <RecipeIndexControls 
          selectedRecipe={this.props.selectedRecipe}
          openModal={this.props.openModal}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
  selectedRecipe: state.selectedRecipe
})

const mapDispatchToProps = dispatch => ({
  openModal: (payload) => dispatch(openModal(payload)),
  selectRecipe: (index) => dispatch(selectRecipe(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeIndex);