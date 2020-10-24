import React, { Component } from 'react';
import '../Footer/footer.css';
//import Form from 'react-bootstrap/Form'
//import Button from 'react-bootstrap/Button'
//import MailchimpSubscribe from "react-mailchimp-subscribe"


export class Footer extends Component {
render() {
return (
<div>
  <footer className="footer">
  <div className="footer_content row mx-auto">

  <div className="quick_links col-md-4">
  <h4>QUICK LINKS</h4>
  <ul>
    <li>Discover</li>
    <li>Cargo</li>
    <li>Promotions</li>
  </ul>
  </div>

  <div className="other_info col-md-4">
    <h4>CONTACT</h4>
    <ul>
    <li>Phone: +234 814 750 5956</li>
    <li>Email: <a href="mailto:gratiabookings@gmail.com">gratiabookings@gmail.com</a></li>
    <li>Partnership</li>
    </ul>
  </div>

  <div className="services col-md-4">
  <h4>INFO</h4>
  <ul>
    <li>FAQ</li>
    <li>Track Order</li>
    <li>Delivery and Returns</li>
  </ul>
  </div>

</div>
</footer>       

<div className="social-media">
<div className="social-container col-md-6 text-center">

</div>

</div>
</div>
)
}
}
