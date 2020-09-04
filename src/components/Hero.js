import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import '../css/hero.css';

export class Hero extends Component {
    render() {
        return (
        <div>
        <div className="hero-section">
        <div className="overlay-color">
        <div className="hero-content">
        <h2>FLIGHT. HOTEL. CARGO.</h2> 
        <p>Thinking of taking a trip?<br />
        Worry not as you can get the best posible deals 
        on flight and hotel reservations,<br />
        both local and international!!
        </p> 
        <Button className="hero-button">DISCOVER DEALS</Button>
        </div>
        </div>
        </div>
        
        <div className="about-section">
         <h2>ABOUT US</h2>
         <p>
        At Gratia Bookings, we specialize in providing best rates on flight and hotel bookings <br /> across the globe and also 
        processing cargo to your desired destination all at a comfortable price.
        </p>
        </div>
        </div>
        )
    }
}
