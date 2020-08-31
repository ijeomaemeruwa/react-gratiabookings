import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Footer } from '../components/Footer';


export class Discover extends Component {
    render() {
    return (
    <div>
    <h3>LATEST DEALS AND PACKAGES</h3>  
    
<CardDeck className="m-5">
<Card>
<Card.Img variant="top" src="../images/dubai2.jpg" />
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
<Card.Img variant="top" src="../images/singapore.jpg" />
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
<Card.Img variant="top" src="../images/greece.jpg" />
<Card.Body>
    <Card.Title>Greece</Card.Title>
    <h4>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>
</CardDeck>


<CardDeck className="m-5">
<Card>
<Card.Img variant="top" src="../images/dubai2.jpg" />
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

<Card>
<Card.Img variant="top" src="../images/singapore.jpg" />
<Card.Body>
    <Card.Title>Morocco</Card.Title>
    <h4>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src="../images/singapore2.jpg" />
<Card.Body>
    <Card.Title>Seychelles</Card.Title>
    <h4>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>
</CardDeck>

<Footer />
</div>
)
}
}
