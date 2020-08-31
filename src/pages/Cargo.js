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
    <h3>See what we can do for you and your business</h3>
    
    <div>
    <p>Fast and Efficient staff</p>
    <Image src="../images/customer-service.jpg" fluid />
    </div>

    <div>
    <Image src="../images/customer-service.jpg" fluid />
    <p>Fast and Efficient staff</p>
    </div>
    </div>

    <div>
    <h4>Want to talk? <br />
    Please call us: <strong>+234 814 750 5956</strong></h4>
    <p></p> 
    </div>

    <Footer />
    </div>
)
}
}
