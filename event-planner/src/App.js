import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";

import PrivateRoute from './components/PrivateRoute';
import Home from './components/Home';
import EventsHome from './components/EventsHome';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/protected" component={EventsHome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Home />
    </div>
  );
}

export default App;
