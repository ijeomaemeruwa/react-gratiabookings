import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class Cards extends Component {
    render() {
    return (
<div>
<div class="padding text-center mt-5 mb-3">
    <h2>FEATURED DEALS</h2>
</div>

<CardDeck className="m-5">
<Card>
<Card.Img variant="top" src={require('../images/dubai2.jpg')} fluid />
<Card.Body>
    <Card.Title>Dubai</Card.Title>
    <h4>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src={require('../images/singapore2.jpg')} fluid />
<Card.Body>
    <Card.Title>Singapore</Card.Title>
    <h4>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src={require('../images/fiji.jpg')} fluid />
<Card.Body>
    <Card.Title>Fiji</Card.Title>
    <h4>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>
</CardDeck>

<Button className="mb-3 col-md-6" variant="primary" type="submit">
    View More
</Button>
</div>
    )
}
}
