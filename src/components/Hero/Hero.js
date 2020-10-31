import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Hero/hero.css';

export class Hero extends Component {
    render() {
        return (
        <>
        <div className="hero-section">
        <div className="overlay-color">
        <div className="hero-content">
        <h1>BOOKINGS AND DELIVERY MADE EASY</h1> 
        <p className="col-md-6 p-3">
        Discover affordable flight and hotel deals for your next vacation and 
        use us for your cargo and parcel delivery both locally and internationally.  
        </p> 
        <Link to="/Discover" className="hero-button">DISCOVER DEALS</Link>
        </div>
        </div>
        </div>
        
        <div className="about_section">
        <div className="about_content row">
        <div className="about_img col-md-6">
            <img src={require('../../assets/images/about.jpg')} alt="about section" />
        </div>
        
        <div className="col-md-6 m-auto about_text">
        <h4>Welcome to Gratia Bookings</h4>
        <h3>
         At <span>Gratia Bookings</span>, we specialize in providing 
        best rates on flight and hotel bookings across the globe and also 
        processing cargo to your desired destination all at a comfortable price.
        </h3>
        </div>
       
        </div>
        </div>
        <hr style={{ width: "70%", margin: "auto" }}/>
        </>
        )
    }
}
