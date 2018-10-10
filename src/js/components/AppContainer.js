import React from "react";
import DEFAULT_RECIPES from "./defaultRecipes.json";
import RecipeIndex from "./RecipeIndex/RecipeIndex";
import RecipeView from "./RecipeView/RecipeView";
import Modal from "./Modal/Modal";

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: DEFAULT_RECIPES
    };
  }
  render() {
    return (
      <div className="container">
        <RecipeIndex />
        <RecipeView />
        <Modal />
      </div>
    );
  }
}