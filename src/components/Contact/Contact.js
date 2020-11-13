import React, {Component} from 'react';
import '../Contact/contact.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import * as emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// Email validation
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === '' && (valid = false);
  });

  return valid;
};

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    message: '',
    formErrors: {
      name: '',
      email: '',
      message: '',
      }
  };

  toastifySuccess() {
    toast.success('Email Sent SuccessFuly!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
    });
  }

  toastifyFail() {
    toast.error('Form failed to send, Try again!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback fail',
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, phone, message } = this.state;

      const serviceID = 'service_56n6ryh'
      const templateID = 'template_oeeqipu'
      const userID = 'user_bfenhKeUnOi9cs8SM4bdo'

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
      };

      emailjs.send(serviceID, templateID, templateParams, userID);

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `);
      
      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
      this.toastifyFail();
    }
  };


  // Function to reset form
  resetForm() {
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  }



  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case 'name':
        formErrors.name = value.length < 1 ? 'Please enter your name.' : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value) ? '' : 'Please enter a valid email address.';
        break;
      case 'message':
        formErrors.message = value.length < 1 ? 'Please enter a message' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };



  render() {
    const { name, email, phone, message, formErrors } = this.state;

    return (
    <>
    <Form id='contact-form' 
    className="padding container col-md-5 col-sm-10 text-center"
    onSubmit={this.handleSubmit} 
    noValidate
    >

      <h3 className="mt-3">Get In Touch</h3>
      <p>Contact us for your travel enquiries, bookings and cargo shipping services.</p>

       <Form.Group>
        <Form.Control 
        type='text'
        name='name'
        value={name}
        className={`form-control formInput ${formErrors.name.length > 0 ? 'error' : null}`}
        onChange={this.handleChange}
        placeholder='Name'
        noValidate
        />
        {formErrors.name.length > 0 && (
          <span className='errorMessage'>{formErrors.name}</span>
        )}
       </Form.Group>

        <Form.Group>
          <Form.Control 
          type='email'
          name='email'
          value={email}
          className={`form-control formInput ${formErrors.email.length > 0 ? 'error' : null}`}
          onChange={this.handleChange}
          placeholder='Email'
          noValidate
          />
          {formErrors.email.length > 0 && (
                <span className='errorMessage'>{formErrors.email}</span>
              )}
        </Form.Group>
              

        <Form.Group>
          <Form.Control 
          type='text'
          name='phone'
          value={phone}
          onChange={this.handleChange}
          placeholder='Enter your phone number'
          noValidate
          />
        </Form.Group>
              
        <Form.Group controlId="message">
         <Form.Control 
         as="textarea" rows="3" 
         placeholder="Enter message or enquiry" 
         name="message"
         value={message}
         className={`form-control formInput ${
         formErrors.message.length > 0 ? 'error' : null
         }`}
         onChange={this.handleChange}
        />
        {formErrors.message.length > 0 && (
          <span className='errorMessage'>{formErrors.message}</span>
        )}
        </Form.Group>
            
        <Button 
        className="mb-3"
        variant="primary" 
        type="submit"
        >
        Send Message
        </Button>
        </Form>
        <ToastContainer />
      </>
    );
  }
}

export default Contact;