import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';
import Event from './components/Event';
import Navigation from "./components/Navigation";
import EventInfoBlock from "./components/EventInfoBlock";
import EventMainSection from "./components/EventMainSection";
import Footer from "./components/Footer";

import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import EventsHome from "./components/EventsHome";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navigation />
      <EventInfoBlock />
      <EventMainSection />
      <Footer />
      <Switch>
        <PrivateRoute exact path="/events" component={EventsHome} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
      <Home />
      <Event />
    </div>
  );
}

export default App;
