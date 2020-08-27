import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class Contact extends Component {
    render() {
    return (
<div>

<div className="cargo-section col-md-6 col-sm-12">
<h2>We make your cargo transport simple </h2>
<small>+ Fulfilled and Shipped Fast</small>
<small>+ Secure Warehousing</small>
<small>+ Secure Delivery</small>
</div>

<Form className="form-section col-md-6 col-sm-12 text-center">
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
    <Form.Label>Get In Touch</Form.Label>
    <Form.Control as="textarea" rows="3" placeholder="Send us a message or enquiry.." />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

</div>
)
}
}