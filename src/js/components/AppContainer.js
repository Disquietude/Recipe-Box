import React from "react";
import DEFAULT_RECIPES from "./defaultRecipes";
import RecipeIndex from "./RecipeIndex/RecipeIndex";
import RecipeView from "./RecipeView/RecipeView";

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
      </div>
    );
  }
}