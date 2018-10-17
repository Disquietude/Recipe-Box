import React from "react";
import { Provider } from "react-redux";

import RecipeIndex from "./RecipeIndex/RecipeIndex";
import RecipeView from "./RecipeView/RecipeView";
import Modal from "./Modal/Modal";

import store from "../store";

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
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