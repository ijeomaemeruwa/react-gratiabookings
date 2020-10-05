import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/hero.css';

export class Hero extends Component {
    render() {
        return (
        <div>
        <div className="hero-section">
        <div className="overlay-color">
        <div className="hero-content">
        <h2>FLIGHT. HOTEL. CARGO.</h2> 
        <p className="col-md-6 my-3">Thinking of taking a trip?<br />
        Worry not as you can get the best posible deals 
        on flight and hotel reservations,
        both local and international!!
        </p> 
        <Link to="/Discover" className="hero-button">DISCOVER DEALS</Link>
        </div>
        </div>
        </div>
        
        <div className="about-section">
         <h2>ABOUT US</h2>
         <p className="col-md-6">
        At Gratia Bookings, we specialize in providing best rates on flight and hotel bookings across the globe and also 
        processing cargo to your desired destination all at a comfortable price.
        </p>
        </div>
        </div>
        )
    }
}
