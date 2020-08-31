import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export class Cards extends Component {
    render() {
    return (
<div>
<div class="padding text-center mt-5">
    <h2>FEATURED DEALS</h2>
</div>

<CardDeck className="m-5">
<Card>
<Card.Img variant="top" src="../images/dubai2.jpg" />
<Card.Body>
    <Card.Title>Dubai</Card.Title>
    <h3>405,075</h3>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src="../images/singapore.jpg" />
<Card.Body>
    <Card.Title>Singapore</Card.Title>
    <h3>405,075</h3>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src="../images/seychelles.jpg" />
<Card.Body>
    <Card.Title>Seychelles</Card.Title>
    <h3>405,075</h3>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>
</CardDeck>

<Button className="card-btn" variant="outline-primary" type="submit">
    View More
</Button>
</div>
    )
}
}
