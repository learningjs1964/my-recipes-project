import React from "react";
import "./grid.css";
import CardRecipe from "../Card/CardRecipe.js";

const GridRecipes = (props) => {
  return (
    <div className="col-md-11 grid">
      <div className="row">
        {props.recipes.map((recipe) => {
          return <CardRecipe recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default GridRecipes;
