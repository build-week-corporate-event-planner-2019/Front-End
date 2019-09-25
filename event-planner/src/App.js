import React from 'react';
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import './styles.css';
import {Route, Link} from 'react-router-dom';

// import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
    <div className="App">
    <Route exact path="/signup" component={Register} /> */}
      <Login /> 
      <Register />
    </div>
    </Router>
  );
}

export default App;
