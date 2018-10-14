import React from "react";
import { Provider } from "react-redux";
import DEFAULT_RECIPES from "./defaultRecipes.json";

import RecipeIndex from "./RecipeIndex/RecipeIndex";
import RecipeView from "./RecipeView/RecipeView";
import Modal from "./Modal/Modal";

import store from "../store";

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: DEFAULT_RECIPES
    };
  }
  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <RecipeIndex />
          <RecipeView />
          <Modal />
        </div>
      </Provider>
    );
  }
}