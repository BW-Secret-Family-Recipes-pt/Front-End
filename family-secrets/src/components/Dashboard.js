import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import axios from 'axios';

// super crude dashboard for listing recipes
// current 'props' is canned data stored in app
// must replace with pulled data via axios

const Dashboard = props => {
  const data = props.props;

return (
  <div className="recipe-list">
    <h1>Recipe List</h1>
    {data.map(recipe => (
      <div className="recipe" key={recipe.id}>
        <Link to={`/recipe/${recipe.id}`}>
             <h2>{recipe.title}</h2>
        <h3>{recipe.source}</h3>
       
      </Link>
        

      </div>
    ))}
  </div>
);
};


export default Dashboard;
