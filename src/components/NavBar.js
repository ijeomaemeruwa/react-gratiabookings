import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export class NavBar extends Component {
    render() {
    return (
      <div>
   <nav className="header navbar navbar-expand-lg bg-light sticky-top">
    <a className="gratia navbar-brand" href="./index.html">GRATIA BOOKINGS</a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
    <li className="nav-item"><NavLink to="/">Home</NavLink></li>
    <li className="nav-item"><NavLink to="">About</NavLink></li>
    <li className="nav-item"><NavLink to="/discover">Discover</NavLink></li> 
    <li className="nav-item"><NavLink to="">Contact Us</NavLink></li>
    </ul>
    </div>
</nav>         
  </div>          
)
}
}


