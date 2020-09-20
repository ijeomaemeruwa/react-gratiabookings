import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import { Footer } from '../components/Footer';


export class Discover extends Component {
    render() {
    return (
    <div>
    <h3 className="mt-3 text-center">LATEST DEALS AND PACKAGES</h3>  
    
<CardDeck className="m-5">
<Card>
<Card.Img variant="top" src={require('../assets/images/dubai-city.jpg')} fluid />
<Card.Body>
    <Card.Title>Dubai</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src={require('../assets/images/morocco.jpg')} />
<Card.Body>
    <Card.Title>Morocco</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src={require('../assets/images/greece.jpg')} />
<Card.Body>
    <Card.Title>Greece</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
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
<Card.Img variant="top" src={require('../assets/images/fiji.jpg')} fluid />
<Card.Body>
    <Card.Title>Fiji</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src={require('../assets/images/singapore2.jpg')} fluid />
<Card.Body>
    <Card.Title>Singapore</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
    <Card.Text>
    <small>+ Visa</small>
    <small>+ Hotel(7 Nights)</small>
    <small>+ Airport pickup and drop off</small> 
    </Card.Text>
</Card.Body>
</Card>

<Card>
<Card.Img variant="top" src={require('../assets/images/hero-greece-img.jpg')} />
<Card.Body>
    <Card.Title>Seychelles</Card.Title>
    <h4><span>&#8358;</span>405,075</h4>
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
