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
// other imports to come

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
        <Route exact path = '/dashboard' component={Dashboard} />
        <Route exact path = '/user-account' component={UserAccount} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
