import React from "react";

export default class RecipeIndexList extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(index) {
    this.props.selectRecipe(index);
  }

  render() {
    const list = this.props.recipes.map((current, index) => {
      let classes = "recipe-index__list-item";
      if (index == this.props.selectedRecipe) {
        classes += " recipe-index__list-item--selected";
      }
      return (
        <li 
          key={index}
          className={classes}
          onClick={(e) => this.onClick(index, e)}
        > 
          {current.name} 
        </li>
      );
    });
    return (
      <div className="recipe-index__list">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}