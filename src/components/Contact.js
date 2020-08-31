import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../css/contact.css';

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

<Form className="form-section col-md-5 col-sm-10 text-center padding mt-3">
    <h3>Get In Touch</h3>
    <p>Contact us for your enquiries about deals and cargo shipping!</p>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" placeholder="Full Name" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="text" placeholder="Phone Number" />
  </Form.Group>
  <Form.Group controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message/Enquiry</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Send us a message or enquiry.." />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
)
}
}