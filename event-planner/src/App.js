import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
// import PrivateRoute from './components/PrivateRoute';
import Navigation from './components/Navigation';
import EventInfoBlock from './components/EventInfoBlock';
import EventMainSection from './components/EventMainSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <EventInfoBlock />
      <EventMainSection />
      <Footer />
      {/* <Switch>
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route path="/login" component={Login} />
      </Switch> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
