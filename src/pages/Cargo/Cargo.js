import React, { Component } from 'react';
import '../Cargo/cargo.css';
import { Footer } from '../../components/Footer/Footer';

export class Cargo extends Component {
render() {
return (
    <div>
    <div className="cargo-header">
    <div className="cargo-header-content">
    <h1>At <span>Gratia Bookings</span>, <br />it's all about delivering parcels on time, <br />anywhere.</h1>  
    </div>
    </div>

    <div className="cargo-services">
    <h3 className="text-center my-5">See what we can do for you and your business</h3>
    <hr style={{ width: "35%", margin: "auto" }}/>  

   <div className="row padding cargo_info">
   <div className="delivery_img col-md-6 col-sm-6 mx-3">
    <img src={require('../../assets/images/flight.jpg')} alt="delivery" />
   </div>
    <h4 className="col-md-5 col-sm-6 mx-auto">
    <strong>Local and International Delivery</strong><br />
    We offer services that include door to door delivery both locally
    and internationally.
    </h4>
    </div>
    </div>

    <div className="text-center m-auto cargo_contact">
    <h4>Want to talk? <br />
    Please call us: <strong style={{ color: '#f7a92d' }}>+234 814 750 5956</strong></h4> 
    <hr style={{ width: "35%", margin: "auto" }}/>  
    </div>
    
    <Footer />
    </div>
)
}
}