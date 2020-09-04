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
    <p>We offer quality premium packages and services.</p>
    </div>
</div>

<div className="row text-center services-cards">
<CardDeck className="mx-auto" >
<Card style={{ width: '16rem', height: '16rem', }} className="cards">
<Card.Body>
    <Card.Title className="mt-5">FLIGHT BOOKINGS</Card.Title> 
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
   width="64" height="64"
   viewBox="0 0 172 172"
   style={{ fill: '#000000' }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" 
stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" 
font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}>
<path d="M0,172v-172h172v172z" fill="none"></path><g fill="#333333"><path d="M138.23828,25.69922c-2.07861,
0.18896 -4.09424,0.79785 -6.04687,1.84766l-25.36328,13.4375l-34.26562,-8.39844l-2.01562,-0.50391l-2.01562,
1.00781l-11.58984,6.71875l-6.88672,4.03125l6.38281,4.87109l14.61328,11.08594l-18.30859,9.74219l-19.65234,
-8.90234l-2.35156,-1.00781l-2.35156,1.17578l-9.40625,5.03906l-6.21484,3.35938l4.70313,5.03906l29.05859,
31.24219l2.6875,3.19141l3.69531,-2.01562l27.71484,-14.78125l-5.54297,30.57031l-1.84766,9.74219l9.23828,
-3.86328l13.77344,-5.87891l2.01563,-0.83984l0.83984,-2.01562l19.98828,-48.54297l28.21875,-15.11719c7.76856,
-4.17822 10.89697,-14.06738 6.71875,-21.83594c-2.07861,-3.88428 -5.62695,-6.52979 -9.57422,-7.72656c-1.97363,
-0.58789 -4.13623,-0.86084 -6.21484,-0.67187zM139.24609,36.44922c0.67188,-0.04199 1.36474,-0.02099 2.01563,
0.16797c1.30176,0.39893 2.47754,1.19678 3.19141,2.51953c1.42773,2.66651 0.48291,5.79492 -2.18359,7.22266l-30.06641,
16.29297l-1.67969,0.83984l-0.67187,1.84766l-19.98828,48.03906l-2.35156,1.00781l5.71094,-31.74609l2.01563,-10.91797l-9.74219,
5.20703l-33.92969,18.30859l-21.33203,-23.17969l0.83984,-0.50391l19.65234,8.73438l2.51953,
1.17578l2.18359,-1.34375l81.80078,-43.16797c0.67188,-0.35693 1.34375,-0.46191 2.01563,
-0.50391zM71.89063,43.50391l20.66016,5.03906l-11.08594,5.71094l-12.09375,-9.23828zM16.125,139.75v10.75h139.75v-10.75z">
</path></g></g></svg>
    <Card.Text>
    <small>Affordable packages you can't resist</small>
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '16rem', height: '16rem', }} className="cards">
<Card.Body>
    <Card.Title className="mt-5">HOTEL RESERVATIONS</Card.Title> 
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="64" height="64"
    viewBox="0 0 172 172"
    style={{ fill: '#000000' }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" 
    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" 
    font-size="none" text-anchor="none" style= {{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path>
    <g fill="#333333"><path d="M43,21.5l-10.75,10.75l10.75,10.75l10.75,-10.75zM53.75,32.25l10.75,10.75l10.75,-10.75l-10.75,
    -10.75zM75.25,32.25l10.75,10.75l10.75,-10.75l-10.75,-10.75zM96.75,32.25l10.75,10.75l10.75,-10.75l-10.75,-10.75zM118.25,
    32.25l10.75,10.75l10.75,-10.75l-10.75,-10.75zM129,43h-102.125v107.5h118.25v-107.5zM37.625,53.75h96.75v86h-32.25v-26.875h-32.25v26.875h-32.25zM48.375, 
    64.5v10.75h10.75v-10.75zM69.875,64.5v10.75h10.75v-10.75zM91.375,64.5v10.75h10.75v-10.75zM112.875,64.5v10.75h10.75v-10.75zM48.375,
    80.625v10.75h10.75v-10.75zM69.875,80.625v10.75h10.75v-10.75zM91.375,80.625v10.75h10.75v-10.75zM112.875,80.625v10.75h10.75v-10.75zM48.375,
    96.75v10.75h10.75v-10.75zM69.875,96.75v10.75h10.75v-10.75zM91.375,96.75v10.75h10.75v-10.75zM112.875,96.75v10.75h10.75v-10.75zM48.375,
    112.875v10.75h10.75v-10.75zM112.875,112.875v10.75h10.75v-10.75zM80.625,123.625h10.75v16.125h-10.75z">
    </path></g></g></svg>
    <Card.Text>
    <small>Luxurious hotels and fine dining</small>
    </Card.Text>
</Card.Body>
</Card>

<Card style={{ width: '16rem', height: '16rem'}} className="cards">
<Card.Body>
    <Card.Title className="mt-5">CARGO SHIPPING</Card.Title> 
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="64" height="64"
    viewBox="0 0 172 172"
    style= {{ fill: '#000000' }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" 
    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" 
    font-size="none" text-anchor="none" style= {{ mixBlendMode: 'normal' }}><path d="M0,172v-172h172v172z" fill="none"></path>
    <g fill="#333333"><path d="M0,32.25v102.125h22.33984c2.39356,9.23828 10.70801,16.125 20.66016,16.125c9.95215,0 18.2666,-6.88672 20.66016,
    -16.125h50.05469c2.39356,9.23828 10.70801,16.125 20.66016,16.125c9.95215,0 18.2666,-6.88672 20.66016,-16.125h16.96484v-43.83984l-0.33594,
    -0.83984l-10.75,-32.25l-1.17578,-3.69531h-46.86328v-21.5zM10.75,43h91.375v80.625h-38.46484c-2.39355,-9.23828 -10.70801,-16.125 -20.66016,
    -16.125c-9.95215,0 -18.2666,6.88672 -20.66016,16.125h-11.58984zM82.13672,55.26172l-28.38672,28.38672l-17.63672,-17.63672l-7.72656,7.72656l21.5,
    21.5l3.86328,3.69531l3.86328,-3.69531l32.25,-32.25zM112.875,64.5h39.13672l9.23828,27.54688v31.57813h-6.21484c-2.39355,-9.23828 -10.70801,
    -16.125 -20.66016,-16.125c-9.95215,0 -18.2666,6.88672 -20.66016,16.125h-0.83984zM43,118.25c6.00489,0 10.75,4.74512 10.75,10.75c0,
    6.00489 -4.74511,10.75 -10.75,10.75c-6.00488,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00488 4.74512,-10.75 10.75,-10.75zM134.375,118.25c6.00489,
    0 10.75,4.74512 10.75,10.75c0,6.00489 -4.74511,10.75 -10.75,10.75c-6.00488,0 -10.75,-4.74511 -10.75,-10.75c0,-6.00488 4.74512,-10.75 10.75,-10.75z">
    </path></g></g></svg>
    <Card.Text>
     <small>Fast and secure delivery</small>
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