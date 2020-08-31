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

<Form className="form-section col-md-5 col-sm-10 text-center mt-3">
    <h3>Get In Touch</h3>
    <p>Contact us for your enquiries about deals and cargo shipping!</p>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Full Name" />
  </Form.Group><br />
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" placeholder="Phone Number" />
  </Form.Group><br />
  <Form.Group controlId="formGroupEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group><br />
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows="3" placeholder="Enter message/enquiry" />
  </Form.Group><br />
  <Button variant="primary" type="submit" className="mb-3">
    Submit
  </Button>
</Form>
</div>
</div>
)
}
}