import React from 'react';
import './App.css';

import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      {/* <Switch>
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route path="/login" component={Login} />
      </Switch> */}
      <Login />
    </div>
  );
}

export default App;
