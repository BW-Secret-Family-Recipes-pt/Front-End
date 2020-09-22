import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import styled from 'styled-components';

// super crude dashboard for listing recipes
// current 'props' is canned data stored in app
// must replace with pulled data via axios

// do we need an id value
// can we just do this by name
// should we it the api here or can we just pass the invidual recipe?

// do axios GET request here for recipe data

const Dashboard = props => {
  // may require change here
  useEffect(() => {
    axiosWithAuth()
        .get("api/recipes")
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err));
}, []);

  const data = [
    {
      title: 'Chicken Parm',
      source: 'Nonna',
      ingredients: '2 lbs chicken, lots of mozz, jar of sauce',
      instructions: 'cut chicken into small pieces, bread, fry, broil',
      breakfast: false,
      lunch: true,
      dinner: true,
      dessert: false,
      vegetarian: false,
      id: 1
    },
    {
      title: 'Cereal',
      source: 'Mikey',
      ingredients: 'Life',
      instructions: 'Open box, pour in bowl, add milk',
      breakfast: true,
      lunch: false,
      dinner: false,
      dessert: false,
      vegetarian: false,
      id: 2
    },
    {
      title: 'Ommie',
      source: 'Mommy',
      ingredients: 'eggs, cheese, bacon, moar cheese',
      instructions: 'break eggs, throw stuff in',
      breakfast: true,
      lunch: true,
      dinner: true,
      dessert: false,
      vegetarian: false,
      id: 3
    },
  ];
  
return (
  <Dash className="recipe-list">
    <h1>Recipe List</h1>
    <div className="sections">
    {data.map(recipe => (
      <div className="recipe" key={recipe.id}>
        <Link to={`/recipe/${recipe.id}`} className="Link">
             <h2>{recipe.title}</h2>
             <h3>By: {recipe.source}</h3>
        </Link>
        <br />
        <br />
        <span className="highlighted">Ingredients You'll Need  </span>
        
        <p>{recipe.ingredients}</p>
      </div>
    ))}</div>
  </Dash>
);
};

const Dash = styled.div`
    text-align:center;
    h1{
      font-family: 'Satisfy', cursive;
      font-size:3rem;
      font-weight:lighter;
    }
    .sections{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    text-align:left;

    
    .recipe{
      width:25vw;
      height:25vw;
      border-radius:2px;
      margin:2%;
      padding:2%;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      
      
    .Link{
        text-decoration:none;

        h2{
            color:black;
            text-decoration:none;
            font-size:1.5rem;
            text-align:center;
            font-weight:lighter;
            margin-bottom:0px;
            padding-bottom:0px;
          }
          h3{
            margin-top:0px;
            text-align:right;
            margin-right:20%;
            color:black;
          }
      }
      .highlighted{
        background-color:orange;
        font-weight:bolder;
        font-size:0.8rem;
        border-radius:2px;
        color:white;
        padding:1.5%;
        width:100%;
      }
    
    }
  }
`
export default Dashboard;
