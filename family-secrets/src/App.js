import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// component imports
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import AddEditRecipe from './components/AddEditRecipe';
// other imports to come

function App() {
  return (
    <div className="App">
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
        <Route exact path = '/add-recipe' component={AddEditRecipe} />
        <Route exact path = '/dashboard' component={Dashboard} />
      </Switch>
    </div>
  );
};

export default App;
