import React, { Component } from 'react';
import '../css/contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Contact extends Component {
 
render() {

return (

<div>
<div className="row padding">
<div className="cargo-section col-md-6 col-sm-12">
<h2>We make your <br /> cargo transport simple </h2><br /> 
<p>+ Secure Warehousing</p><br />
<p>+ Fulfilled and Shipped Fast</p><br />
<p>+ Fast and Secure Delivery</p><br />
</div>

<Form 
  className="padding container col-md-5 col-sm-10 text-center"
  name="gratiabookings-contact"
  method="POST"
  data-netlify="true"
  data-netlify-recaptcha="true"
  onSubmit="submit"
>
<input type="hidden" name="form" value="gratiabookings-contact" />

    <h3>Get In Touch</h3>
    <p>Contact us for your travel enquiries, bookings and cargo services.</p>
  <Form.Group controlId="full-name">
    <Form.Control type="text" placeholder="FullName" name="full-name" required />
  </Form.Group><br />
  <Form.Group controlId="phone">
    <Form.Control type="text" placeholder="Phone No" name="phone" required/>
  </Form.Group><br />
  <Form.Group controlId="email">
    <Form.Control type="email" placeholder="Enter valid email" name="email" required/>
  </Form.Group><br />
  <Form.Group controlId="message">
    <Form.Control 
    required
    as="textarea" 
    rows="3" 
    placeholder="Enter message or enquiry"
    name="message"
    />
  </Form.Group><br />

  <div data-netlify-recaptcha="true"></div>

  <Button variant="primary" type="submit" className="mb-3">Send Message</Button>
</Form>
</div>
</div>
);
}
}