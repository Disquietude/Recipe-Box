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
        <div className="recipe-index__header-wrapper">
          <h1 className="header">Recipe Index</h1>
        </div> 
        <RecipeIndexList />
        <RecipeIndexControls />
      </div>
    );
  }
}