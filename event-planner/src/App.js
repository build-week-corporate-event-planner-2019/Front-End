import React from 'react';
import './App.css';
import Home from './components/Home';

//import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <div className="App">
      {/* <Switch>
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch> */}
      <Home />
    </div>
  );
}

export default App;
