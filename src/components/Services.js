import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import '../css/services.css';

export class Services extends Component {
render() {
return (
<div>

<div className="container-fluid padding">
<div className="col-lg-12 text-center">
    <h2>SERVICES</h2>
    <div className="col-lg-12 text-center">
    <p>Book Now with Gratia Bookings.</p>
    </div>
</div>

<div className="row text-center services-cards">
<CardDeck className="mx-auto" >
<Card style={{ width: '16rem', height: '16rem', }} className="cards">
<Card.Body>
    <Card.Title>FLIGHT BOOKINGS</Card.Title> 
    <Card.Text>

    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '16rem', height: '16rem', }} className="cards">
<Card.Body>
    <Card.Title>HOTEL RESERVATIONS</Card.Title> 
    <Card.Text>
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '16rem', height: '16rem'}} className="cards">
<Card.Body>
    <Card.Title>CARGO SHIPPING</Card.Title> 
    <Card.Text>

    </Card.Text>
</Card.Body>
</Card>
</CardDeck>
</div>
</div>

</div>
)
}
}