import React, { Component } from 'react'

export class Hero extends Component {
    render() {
        return (
        <div>
        <div className="hero-section">
        <h2>FLIGHT. HOTEL. CARGO.</h2> 
        <p>Thinking of taking a trip? Worry not as you can get the best posible deals on flight and hotel reservations,
        both local and international!!
        </p> 
        <button className="btn-1" type="button">DISCOVER DEALS</button>

        <div className="about-section">
         <h2>ABOUT US</h2>
         <p>
        At Gratia Bookings, we specialize in providing best rates on flight and hotel bookings across the globe and also 
        processing cargo to your desired destination all at a comfortable price.
        </p>
        </div>

        </div>
        </div>
        )
    }
}
