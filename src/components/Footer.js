import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/footer.css';
import { ScrollToTop } from './ScrollToTop';

export class Footer extends Component {
render() {
return (
<div>

<footer className="footer-section">
<div className="text-center mb-3">
<h4>Book Now with Gratia Bookings!</h4>
</div>
<ScrollToTop />
<div className="footer-container row text-sm-center m-auto">
<div className="partners-section col-md-4 col-sm-12 mt-3">
  <h6>In partnership with</h6>
  <img lazy-img="https://wakanow-images.azureedge.net/Images/logo.png" 
  src="https://wakanow-images.azureedge.net/Images/logo.png" className="img img-responsive" 
  alt="Wakanow Logo"></img> 
</div>

<div className="footer-contact col-md-4 col-sm-12 mt-3">
<h6>Contact Us</h6>
<p>Phone: +234 814 750 5956</p>
<p>Email: gratiabookings@gmail.com</p>
</div>

<div className="newsletter-section col-md-4 col-sm-12 mb-3">
<h6>Subscribe To Our NewsLetter</h6>
<p>Get news on travel packages, latest offers and promotions.</p>
<Form className="col-md-12 col-sm-12">
<Form.Group controlId="formBasicEmail">
    <Form.Control className="newsletter-form" type="email" placeholder="Enter email" />
</Form.Group>
</Form>
<Button variant="primary">Subscribe</Button>{' '}
</div>
</div>

</footer>

<div className="social-media">
<div className="col-md-4">
<small>&copy; gratiabookings 2020</small>
</div>

<div className="col-md-4">
<small>Terms and Conditions</small>
</div>

<div className="social-container col-md-4">
<img src="https://img.icons8.com/windows/32/000000/twitter-squared--v2.png" alt="twitter"></img>
</div>

</div>
</div>
)
}
}
