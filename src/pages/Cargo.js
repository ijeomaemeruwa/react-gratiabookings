import React, { Component } from 'react';
import '../assets/css/cargo.css';
import { Footer } from '../components/Footer';

export class Cargo extends Component {
render() {
return (
    <div>
    <div className="cargo-header">
    <div className="cargo-header-content">
    <h2>At <span>Gratia Bookings</span>, <br />it's all about delivering parcels on time, <br />anywhere.</h2>  
    </div>
    </div>

    <div className="cargo-services">
    <h3 className="text-center my-5">See what we can do for you and your business</h3>
    <hr style={{ width: "35%", margin: "auto" }}/>  


    <div className="row padding">
    <img className="col-md-6 col-sm-12 cargo-img" 
         src={require('../assets/images/parcel.jpg')} fluid 
         alt="parcel">
    </img>
    <h4 className="col-md-6 col-sm-1">
    <strong>Local and International Delivery</strong><br />
    We offer services that include door to door delivery both locally
    and internationally.
    </h4>
    </div>
    </div>

    <div className="text-center my-5">
    <h4>Want to talk? <br />
    Please call us: <strong style={{ color: '#f7a92d' }}>+234 814 750 5956</strong></h4> 
    <hr style={{ width: "35%", margin: "auto" }}/>  
    
    </div>
    
    <Footer />
    </div>
)
}
}