import React, { useState } from 'react';
import { Axios } from '../firebase/firebaseConfig'
import '../assets/css/contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
 const [ formData, setFormData ] = useState({

 })

 const updateInput = (e) => {
   setFormData({
     ...formData,
     [e.target.fullName]: e.target.value,
   })
 }

 const handleSubmit = (event) => {
    event.preventDefault()

    sendEmail()

    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: ''
    })
 }

 const sendEmail = () => {
   Axios.post(
    'https://us-central1-your-app-name.cloudfunctions.net/submit',
    formData
   ).then(res => {
     console.log(res)
   }).catch(err => {
     console.log(err)
   })
 }
return (

<div>
<div className="row padding">
<div className="cargo-section col-md-6 col-sm-12">
<h2>We make your <br /> cargo transport simple </h2><br /> 
<p>+ Secure Warehousing</p><br />
<p>+ Fulfilled and Shipped Fast</p><br />
<p>+ Fast and Secure Delivery</p><br />
</div>

<Form className="padding container col-md-5 col-sm-10 text-center" onSubmit={handleSubmit}>
    <h3>Get In Touch</h3>
    <p>Contact us for your travel enquiries, bookings and cargo services.</p>

  <Form.Group controlId="full-name">
    <Form.Control 
    type="text" placeholder="FullName" 
    name="fullName" onChange={updateInput} 
    value={ formData.fullName || '' } />
  </Form.Group><br />

  <Form.Group controlId="phone">
    <Form.Control 
    type="text" placeholder="Phone No" 
    name="phone" onChange={updateInput} 
    value={ formData.phone || '' } />
  </Form.Group><br />

  <Form.Group controlId="email">
    <Form.Control 
    type="email" placeholder="Enter valid email" 
    name="email" onChange={updateInput} 
    value={ formData.email || '' } />
  </Form.Group><br />

  <Form.Group controlId="message">
    <Form.Control 
    as="textarea" rows="3" 
    placeholder="Enter message or enquiry" name="message"
    onChange={updateInput} value={ formData.message || '' } 
    />
  </Form.Group><br />

  <Button variant="primary" type="submit" className="mb-3">Send Message</Button>
</Form>
</div>
</div>
);
}
