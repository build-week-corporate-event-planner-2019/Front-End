import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import EventsPage from "./components/EventsPage";
import Event from "./components/Event";
//Generic change
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={SignUp} />
        <PrivateRoute exact path="/events-home" component={EventsPage} />
        <PrivateRoute path="/event/:id" component={Event} />
        <Redirect from="/" to="/events-home" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
