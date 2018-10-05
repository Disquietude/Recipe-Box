import React from "react";
import RecipeViewHeader from "./RecipeViewHeader";
import RecipeViewContents from "./RecipeViewContents";  

export default class RecipeView extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="recipe-view">
        <div className="recipe-view__card">
          <RecipeViewHeader />
          <RecipeViewContents />
        </div>
      </div>
    )
  }
}