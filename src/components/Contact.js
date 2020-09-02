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
  name="gb-contact"
  method="POST"
  data-netlify="true"
  onSubmit="submit"
>
<input type="hidden" name="form" value="gb-contact" />
    <h3>Get In Touch</h3>
    <p>Contact us for your travel enquiries, bookings and cargo services.</p>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="FullName" />
  </Form.Group><br />
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Phone No" />
  </Form.Group><br />
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="email" placeholder="Enter valid email" />
  </Form.Group><br />
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows="3" placeholder="Enter message or enquiry" />
  </Form.Group><br />

  <Button variant="primary" type="submit" className="mb-3">Send Message</Button>
</Form>
</div>
</div>
);
}
}