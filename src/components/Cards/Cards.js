import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import '../Cards/card.css'

export class Cards extends Component {
    render() {
    return (
<div>
<div class="padding text-center mt-5 mb-3">
    <h2>FEATURED DEALS</h2>
</div>


<CardDeck className="m-5">
<Card>
<Card.Img variant="top" src={require('../../assets/images/dubai3.jpg')} fluid />
<Card.Body className="card_content">
    <Card.Title>DUBAI</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src={require('../../assets/images/singapore4.jpg')} fluid />
<Card.Body className="card_content">
    <Card.Title>SINGAPORE</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src={require('../../assets/images/maldives.jpg')} fluid />
<Card.Body className="card_content">
    <Card.Title>MALDIVES</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>
</CardDeck>

<div style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.5rem" }}>
<Link to="/Discover">
    <Button>View More</Button>
</Link>
</div>

<hr style={{ width: "70%", margin: "auto" }}/>
<br />
<br />

</div>
)
}
}
