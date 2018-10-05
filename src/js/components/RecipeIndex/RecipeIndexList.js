import React from "react";

const recipeNames = [
  "Polish Cream Cheese Coffee Cake",
  "Banana Cake VI",
  "White Chocolate Raspberry",
  "Zwetschgendatschi (German Plum Sheet Cake)"
];

export default class RecipeIndexList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const list = recipeNames.map((current, index) => {
      return (
        <li 
          key={index}
          className="recipe-index__list-item"> {current} </li>
      );
    });
    console.log(list);
    return (
      <div className="recipe-index__list">
        <ul>
          {list}
        </ul>
      </div>
    );
  }
}