import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Naira from 'react-naira';

export class Cards extends Component {
    render() {
    return (
<div>
<CardDeck>

<Card>
<Card.Img variant="top" src="" />
<Card.Body>
    <Card.Title>Dubai</Card.Title>
    <h3><Naira>405,075</Naira></h3>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src="" />
<Card.Body>
    <Card.Title>Dubai</Card.Title>
    <h3><Naira>405,075</Naira></h3>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src="" />
<Card.Body>
    <Card.Title>Dubai</Card.Title>
    <h3><Naira>405,075</Naira></h3>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

</CardDeck>
</div>
    )
}
}
