import React, { useState } from 'react';
import '../assets/css/contact.css';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
 const [state, setState] = useState({
   fullname: '',
   phone: '',
   email: '',
   message: ''
 });

 const [result, setResult] = useState(null);


 const sendEmail = (e) => {
   e.preventDefault()
   axios
  .post('/send', { ...state })
  .then(response => {
    setResult(response.data);
    setState({ 
      fullname: '', 
      phone: '', 
      email: '', 
      message: '' 
    });
  })
  .catch(() => {
    setResult({ 
      success: false, 
      message: 'Something went wrong. Try again later'
  });
  });
 }

 const inputChange = (event) => {
   const { fullname, value } = event.target
   setState({
     ...state,
     [ fullname ]: value
   });
 }

return (
<div>
<div className="row padding">
<div className="cargo-section col-md-5 col-sm-12">
<h2>We make your <br /> cargo transport simple </h2><br /> 
<p>+ Secure Warehousing</p><br />
<p>+ Fulfilled and Shipped Fast</p><br />
<p>+ Fast and Secure Delivery</p><br />
</div>


<Form 
    className="padding container col-md-5 col-sm-10 text-center"
    onSubmit={sendEmail}
>
    <h3 className="mt-3">Get In Touch</h3>
    <p>Contact us for your travel enquiries, bookings and cargo services.</p>

  <Form.Group controlId="fullname">
    <Form.Control 
    type="text" placeholder="FullName" 
    name="fullname" 
    value={state.fullname}  
    onChange={inputChange}
   />
  </Form.Group><br />

  <Form.Group controlId="phone">
    <Form.Control 
    type="text" placeholder="Phone No" 
    name="phone"
    value={state.phone}  
    onChange={inputChange}  
    />
  </Form.Group><br />

  <Form.Group controlId="email">
    <Form.Control 
    type="email" placeholder="Enter valid email" 
    name="email" 
    value={state.email}  
    onChange={inputChange} 
    />
  </Form.Group><br />

  <Form.Group controlId="message">
    <Form.Control 
    as="textarea" rows="3" 
    placeholder="Enter message or enquiry" 
    name="message"
    value={state.message}  
    onChange={inputChange}
    />
  </Form.Group><br />

  <Button variant="primary" type="submit" className="mb-3">Send Message</Button>
</Form>

{result && (
     <p className={`${result.success ? 'success' : 'error'}`}>
    {result.message}
    </p>
)}

</div>
</div>
);
}
