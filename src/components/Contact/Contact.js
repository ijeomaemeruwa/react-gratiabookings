import React, {useState} from 'react';
import '../Contact/contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import * as emailjs from 'emailjs-com';


export const Contact = () => {
  const [inputState, setInputState] = useState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  })
  
function handleSubmit(event) {
  event.preventDefault();

  const { fullname, email, phone, message } = inputState
  let templateParams = {
    from_name: email,
    to_name: 'ijeomaemeruwa95@gmail.com',
    name: fullname,
    phone: phone,
    message_html: message,
  }

  emailjs.send(
    'gmail',
    'template_n7h810I',
    templateParams,
    'user_bfenhKeUnOi9cs8SM4bdo'
  )
    resetForm();
}


function resetForm() {
  setInputState({
    fullname: '',
    email: '',
    phone: '',
    message: ''
  })
}
  
    
function handleChange(e) {
  const value = e.target.value;

  setInputState({ 
    ...inputState,
    [e.target.name]: value
  });
}


return (
<>
<section className="row padding">
  
<div className="cargo-section col-md-5 col-sm-12">
<h2>We make your <br /> cargo transport simple </h2><br /> 
<p>+ Secure Warehousing</p><br />
<p>+ Fulfilled and Shipped Fast</p><br />
<p>+ Fast and Secure Delivery</p><br />
</div>


<Form 
    className="padding container col-md-5 col-sm-10 text-center"
    onSubmit={handleSubmit}
  >
    <h3 className="mt-3">Get In Touch</h3>
    <p>Contact us for your travel enquiries, bookings and cargo services.</p>

  <Form.Group controlId="name">
    <Form.Control 
    type="text" placeholder="FullName" 
    name="fullname"
    value={inputState.fullname}
    onChange={handleChange}
   />
  </Form.Group><br />

  <Form.Group controlId="phone">
    <Form.Control 
    type="text" placeholder="Phone No" 
    name="phone"
    value={inputState.phone}
    onChange={handleChange}  
    />
  </Form.Group><br />

  <Form.Group controlId="email">
    <Form.Control 
    type="email" placeholder="Enter valid email" 
    name="email"
    value={inputState.email}
    onChange={handleChange}
    />
  </Form.Group><br />

  <Form.Group controlId="message">
    <Form.Control 
    as="textarea" rows="3" 
    placeholder="Enter message or enquiry" 
    name="message"
    value={inputState.message}
    onChange={handleChange}
    />
  </Form.Group><br />

  <Button 
  variant="primary" 
  type="submit" 
  className="mb-3"  
  >
  Send Message</Button>
</Form>

</section>
</>
);
}
