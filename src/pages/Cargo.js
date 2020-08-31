import React, { Component } from 'react'

export class Cargo extends Component {
render() {
return (
    <div>
    <div className="cargo-header">
    <h2>At Gratia Bookings, it's all about delivering parcels on time, anywhere</h2>  
    </div>

    <div className="cargo-services">
    <h3>See what we can do for you and your business</h3>
    
    <div>
    <p>Fast and Efficient staff</p>
    <img src="./src/images/customer-service.jpg" alt="customer service"></img>
    </div>

    <div>
    <img src="./images/container.jpg" alt="customer service"></img>
    <p>Fast and Efficient staff</p>
    </div>

    <div>
    <p>Fast and Efficient staff</p>
    <img src="../images/parcel.jpg" alt="customer service"></img>
    </div>
    
    </div>
    </div>
)
}
}
