import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { MdFlight, MdHotel } from 'react-icons/md'
import { FaTruck } from 'react-icons/fa'
import '../Services/services.css';

export const Services = () => {
return (
<div>

<div className="container-fluid padding">
<div className="col-lg-12 text-center">
    <h2>SERVICES</h2>
    <div className="col-lg-12 text-center">
    <p>We offer quality premium packages and services.</p>
    </div>
</div>

<div className="row text-center services-cards">
<CardDeck className="mx-auto" >
<Card style={{ width: '16rem', height: '16rem', }} className="cards">
<Card.Body>
    <Card.Title className="mt-5">FLIGHT BOOKINGS</Card.Title> 
     <MdFlight className="services_icon" />
    <Card.Text>
    <p>Affordable travel packages</p>
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '16rem', height: '16rem', }} className="cards">
<Card.Body>
    <Card.Title className="mt-5">HOTEL RESERVATIONS</Card.Title> 
    <MdHotel className="services_icon" />
    <Card.Text>
    <p>Luxurious hotels and fine dining</p>
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '16rem', height: '16rem'}} className="cards">
<Card.Body>
    <Card.Title className="mt-5">CARGO SHIPPING</Card.Title> 
    <FaTruck className="services_icon" />
    <Card.Text>
     <p>Fast and secure delivery</p>
    </Card.Text>
</Card.Body>
</Card>
</CardDeck>
</div>
</div>

<br />
<br />
<br />
</div>
)
}
