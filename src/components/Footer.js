import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export class Footer extends Component {
render() {
return (
<div>

<footer class="footer-section">

<div>
<h3>Book Now with Gratia Bookings!</h3>
<p>The best prices you can get, period.</p>
</div>

<div class="footer-container">

<div class="footer-contact">
<small>Contact Us</small>
<p>Phone: +234 814 750 5956</p>
<p>Email: gratiabookings@gmail.com</p>
</div>

<div className="newsletter-section">
<h4>Subscribe To Our NewsLetter</h4>
<p>Get news on travel packages, offers and promotions.</p>
<Form className="col-md-6 col-sm-12">
<Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
</Form.Group>
</Form>
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
