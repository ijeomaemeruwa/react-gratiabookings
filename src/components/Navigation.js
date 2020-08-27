import React, { Component } from 'react';
import { Home } from './pages/Home';
import { Discover } from './pages/Discover';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

export class Navigation extends Component {
    render() {
    return (
      <div>
      <div className="row">
      <div className="col-md-12">
        <Router>
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home">GRATIA BOOKINGS</Navbar.Brand>  

        <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle> 
        <NavbarCollapse id="basic-navbar-nav">
           <Nav className="ml-auto">
               <NavLink href="/">Home</NavLink>
               <NavLink href="/">About Us</NavLink>
               <NavLink href="/discover"><Discover /></NavLink>
               <NavLink href="/">Contact Us</NavLink>
           </Nav>
        </NavbarCollapse>
        </Navbar>
        <br />
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/">About Us</Route>
        <Route exact path="/discover"><Discover /></Route>
        <Route exact path="/">Contact Us</Route>
        </Switch>
        </Router>
      </div>
      </div>
      </div>
        
)
}
}


