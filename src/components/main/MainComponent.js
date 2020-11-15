import React, { useState, useEffect } from "react";
import "./main.css";
import { getUsers } from "../../api/jsonPlaceholder";
import GridRecipes from "../GeneralUI/grid/GridRecipes";

function HomeComponent(props) {
  /*useEffect(async () => {
    const jsonUsers = await getUsers();
    // setTimeout(() => {
    setUsers(jsonUsers);
    // }, 3000);
  });*/

  return (
    <div className="main">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="title">Recipes</h1>
          <span className="radioTitle">Show me the Recipes</span>
          <input
            type="radio"
            name="choose"
            id="popular"
            value="popular"
            className="radio"
          />
          <label className="radioLabel" for="popular">
            Most Popular
          </label>
          <input
            type="radio"
            name="choose"
            id="recent"
            value="recent"
            className="radio"
          />
          <label className="radioLabel" for="recent">
            Most Recent
          </label>

          <input
            type="text"
            id="findRecipe"
            className="search"
            placeholder="Search by recipe"
          />
          <input
            type="text"
            id="findIngredient"
            placeholder="Search by ingredient"
            className="search"
          />

          <input
            type="radio"
            name="choose2"
            id="all"
            value="all"
            className="radio"
          />
          <label className="radioLabel" for="all">
            All
          </label>
          <input
            type="radio"
            name="choose2"
            id="atLeast1"
            value="atLeast1"
            className="radio"
          />
          <label className="radioLabel" for="atLeast1">
            At Least One
          </label>
        </div>
      </div>
      <GridRecipes recipes={props.recipes} />
    </div>
  );
}

export default HomeComponent;
