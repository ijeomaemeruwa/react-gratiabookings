import React from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Discover } from './pages/Discover';
import {  NavBar } from './components/NavBar';

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  return (
  <Router>
    <div className="container">
    <NavBar />
  <Switch>
    <Route path="/deals"><Discover /></Route>
    <Route path="/"><Home /></Route>
  </Switch>
    </div>
  </Router>
);
}


export default App;
