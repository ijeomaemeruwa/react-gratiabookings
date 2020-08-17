import React from 'react';
import './App.css';
import Home from './pages/Home';
import Deals from './pages/Deals';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
    <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/deals">Deals</Link></li>
    </ul>
    </nav>

  <Switch>
    <Route path="/deals"><Deals /></Route>
    <Route path="/"><Home /></Route>
  </Switch>
    </div>
  </Router>
);
}


export default App;
