import React, { Component } from 'react';

import { Home } from '../../pages/Home';
import { Discover } from '../../pages/Discover/Discover';
import { Cargo } from '../../pages/Cargo/Cargo';
import Contact from '../../components/Contact/Contact'
import '../Navigation/navigation.css'

import { Navbar, Nav } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-scroll'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


export class Navigation extends Component {
    render() {
    return (
      <div>
      <div className="row menu">
      <div className="col-md-12">
        <Router>
        <Navbar className="nav" expand="lg" sticky="top">
        <Navbar.Brand href="#home" className="logo">
          <img src={require('../../assets/images/logo.svg')} alt="logo"></img>
          </Navbar.Brand>  

        <NavbarToggle aria-controls="basic-navbar-nav"></NavbarToggle> 
        <NavbarCollapse id="basic-navbar-nav">
           <Nav className="ml-auto menu">
               <Nav.Link href="/">Home</Nav.Link>
               <Nav.Link href="/discover">Discover</Nav.Link>
               <Nav.Link href="/cargo">Cargo</Nav.Link>
               <Nav.Link href="/contact">
               <Button>
                Contact Us
               </Button>
               </Nav.Link>
           </Nav>
           
        </NavbarCollapse>
        </Navbar>

        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/discover" component={Discover} />
        <Route path="/cargo" component={Cargo} />
        <Route path="/contact" component={Contact} />
        </Switch>
        </Router>
      </div>
      </div>
      </div>        
)
}
}


