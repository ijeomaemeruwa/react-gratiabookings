import React, { Component } from 'react';
import '../css/cargo.css';
import { Footer } from '../components/Footer';
import Image from 'react-bootstrap/Image';

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
    
    <div className="row padding">
    <h4 className="col-md-6 col-sm-12">
    <strong>Excellent Customer Support</strong><br />
    We take pride in ensuring customers are satisfied with our operations by 
    delivering goods and packages on fast and on time.
    </h4>
    <Image className="col-md-6 col-sm-12 cargo-img" src={require('../images/service.jpg')} fluid />
    </div>

    <div className="row padding">
    <Image className="col-md-6 col-sm-12 cargo-img" src={require('../images/parcel.jpg')} fluid />
    <h4 className="col-md-6 col-sm-12">
    <strong>Local and International Delivery</strong><br />
    We offer services that include door to door delivery both locally
    and internationally.
    </h4>
    </div>
    </div>

    <div className="text-center my-5">
    <h4>Want to talk? <br />
    Please call us: <strong>+234 814 750 5956</strong></h4> 
    </div>

    <Footer />
    </div>
)
}
}
