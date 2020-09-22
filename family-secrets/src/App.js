import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// component imports
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AddEditRecipe from './components/AddEditRecipe';
import UserAccount from './components/UserAccount';
import Header from './components/Header';
import Footer from './components/Footer';
import RecipeCard from './components/RecipeCard';
import PrivateRoute from './utils/PrivateRoute';

// other imports to come

// the temp database to create Dashboard and RecipeCard
const testRecipes = [
  {
    title: 'chicken parm',
    source: 'nonna',
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
    title: 'cereal',
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
    title: 'ommie',
    source: 'mommy',
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

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Basic routes added for forms pages, others to come */}
        {/* <Route exact path = "/" 
        component={() => {
          window.location.href = 'http://localhost:3000'
          return null;
        }}>
          </Route> */}
        <Route exact path = "/login" component={Login} />
        <Route exact path = "/signup" component={Signup} />
        <Route exact path = '/recipe' component={AddEditRecipe} />
        <Route exact path = '/' component={Dashboard} />
        <PrivateRoute exact path = '/user-account' component={UserAccount} />
        <Route path = '/recipe/:id' component={RecipeCard} />
      </Switch>
      
      <Footer />
    </div>
  );
};

export default App;
