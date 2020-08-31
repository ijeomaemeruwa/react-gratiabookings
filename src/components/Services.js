import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

export class Services extends Component {
render() {
return (
<div>

<div className="container-fluid my-3 mx-2">
<div className="col-lg-12 text-center">
    <h2>SERVICES</h2>
    <div className="col-lg-12 text-center">
    <p>Book Now with Gratia Bookings.</p>
    </div>
</div>

<div className="row text-center">
<CardDeck className="mx-auto">
<Card style={{ width: '18rem', height: '16rem', }}>
<Card.Body>
    <Card.Title>Dubai</Card.Title> 
    <Card.Text>
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '18rem', height: '16rem', }}>
<Card.Body>
    <Card.Title>Dubai</Card.Title> 
    <Card.Text>
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '18rem', height: '16rem', }}>
<Card.Body>
    <Card.Title>Dubai</Card.Title> 
    <Card.Text>
    </Card.Text>
</Card.Body>
</Card>
</CardDeck>
</div>
</div>

<div className="partner-content text-center padding my-3">
<h3>Our Partners</h3>
<img lazy-img="https://wakanow-images.azureedge.net/Images/logo.png" src="https://wakanow-images.azureedge.net/Images/logo.png" className="img img-responsive" alt="Wakanow Logo"></img>
</div>

</div>
)
}
}