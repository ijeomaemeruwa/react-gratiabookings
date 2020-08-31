import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/footer.css';

export class Footer extends Component {
render() {
return (
<div>

<footer className="footer-section">

<div className="text-center mt-5">
<h3>Book Now with Gratia Bookings!</h3>
<p>The best prices you can get, period.</p>
</div>

<div className="footer-container row text-sm-center m-auto">

<div className="col-md-4 col-sm-12 mt-3">
  <h2>In partnership with <br />
  wakanow!
  </h2>
</div>

<div className="footer-contact col-md-4 col-sm-12 mt-3">
<small>Contact Us</small>
<p>Phone: +234 814 750 5956</p>
<p>Email: gratiabookings@gmail.com</p>
</div>

<div className="newsletter-section col-md-4 col-sm-12">
<h4>Subscribe To Our NewsLetter</h4>
<p>Get news on travel packages, offers and promotions.</p>
<Form className="col-md-12 col-sm-12">
<Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
</Form.Group>
</Form>
<Button variant="primary">Subscribe</Button>{' '}
</div>
</div>
</footer>

<div className="social-media">
<div class="social-container">
  <small>TW</small>
  <small>FB</small>
  <small>IG</small>
</div>
</div>
</div>
)
}
}
