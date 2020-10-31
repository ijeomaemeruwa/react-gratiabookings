import React, { Component } from 'react';
import '../Footer/footer.css';
import { Link } from 'react-router-dom'


export class Footer extends Component {
render() {
return (
<>
  <footer className="footer">
  <div className="footer_content row mx-auto">

  <div className="quick_links col-md-4">
  <h4>QUICK LINKS</h4>
  <ul>
    <li><Link to="/discover" className="links">Discover</Link></li>
    <li><Link to="/cargo" className="links">Cargo</Link></li>
    <li>Promotions</li>
  </ul>
  </div>

  <div className="other_info col-md-4">
    <h4>CONTACT</h4>
    <ul>
    <li>Phone: +234 814 750 5956</li>
    <li>Email: <Link href="mailto:gratiabookings@gmail.com">gratiabookings@gmail.com</Link></li>
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
</>
)
}
}
