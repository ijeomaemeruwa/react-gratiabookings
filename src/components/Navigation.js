import React, { Component } from 'react';
import { Home } from '../pages/Home';
import { Discover } from '../pages/Discover';
import { Cargo } from '../pages/Cargo';
import { Navbar, Nav } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Contact } from '../components/Contact';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


export class Navigation extends Component {
    render() {
    return (
      <div>
      <div className="row menu">
      <div className="col-md-12">
        <Router>
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
        <Navbar.Brand href="#home" className="logo">
          <img src={require('../assets/images/logo.svg')} alt="logo"></img>
          </Navbar.Brand>  

        <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle> 
        <NavbarCollapse id="basic-navbar-nav">
           <Nav className="ml-auto">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/discover">Discover</Nav.Link>
               <Nav.Link href="/cargo">Cargo</Nav.Link>
               <Nav.Link href="/contact">Contact Us</Nav.Link>
           </Nav>
        </NavbarCollapse>
        </Navbar>
        <br />
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/discover"><Discover /></Route>
        <Route exact path="/cargo"><Cargo /></Route>
        <Route exact path="/Contact" component={Contact} />
        </Switch>
        </Router>
      </div>
      </div>
      </div>        
)
}
}


