import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import Navigation from "./components/Navigation";

import Footer from "./components/Footer";

import PrivateRoute from "./components/PrivateRoute";
import EventsHome from "./components/EventsHome";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
//Generic change
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <PrivateRoute exact path="/events-home" component={EventsHome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
