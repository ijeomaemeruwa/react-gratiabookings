import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

export class Services extends Component {
render() {
return (
<div>
<div className="col-lg-12 text-center">
    <h2>SERVICES</h2>
    <div className="col-lg-12 text-center">
    <p>Book Now with Gratia Bookings</p>
    </div>
</div>

<div>
<Card style={{ width: '18rem', height: '16rem', }}>
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '18rem', height: '16rem', }}>
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '18rem', height: '16rem', }}>
<Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
</Card.Body>
</Card>
</div>

<div className="partner-content text-center padding my-3">
<h3>Our Partners</h3>
<img lazy-img="https://wakanow-images.azureedge.net/Images/logo.png" src="https://wakanow-images.azureedge.net/Images/logo.png" className="img img-responsive" alt="Wakanow Logo"></img>
</div>

</div>
)
}
}