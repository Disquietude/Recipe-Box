import React from "react";
import RecipeIndexList from "./RecipeIndexList";
import RecipeIndexControls from "./RecipeIndexControls";

export default class RecipeIndex extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="recipe-index">
        <h1 className="recipe-index__title">Recipe Box</h1>
        <RecipeIndexList />
        <RecipeIndexControls />
      </div>
    );
  }
}