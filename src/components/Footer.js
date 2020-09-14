import React, { Component } from 'react';
import '../assets/css/footer.css';
import { ScrollToTop } from './ScrollToTop';


export class Footer extends Component {
render() {
return (
<div>
<footer className="footer-section">

<div className="text-left mb-3 row">
<span className="mt-2 col-md-4 col-sm-3"><img src={require('../assets/images/logo2.svg')} alt="footer-logo"></img></span>
<h4 className="col-md-4 col-sm-3">Book Now with us!</h4>
<span className="mt-3 mb-3 col-md-4 col-sm-3"><ScrollToTop /></span>
</div>


<div className="footer-container row text-sm-center m-auto">

<div className="partners-section col-md-4 col-sm-12 mt-3 text-left">
  <h6>In partnership with</h6>
  <img lazy-img="https://wakanow-images.azureedge.net/Images/logo.png" 
  src="https://wakanow-images.azureedge.net/Images/logo.png" className="img img-responsive" 
  alt="Wakanow Logo"></img> 
</div>

<div className="footer-contact col-md-4 col-sm-12 mt-2 text-left">
<h5>Contact Us</h5>
<p>Phone: +234 814 750 5956</p>
<p>Email: gratiabookings@gmail.com</p>
</div>

<div className="newsletter-section col-md-4 col-sm-12 mt-3 text-left">
<h5>Subscribe To Our NewsLetter</h5>

<small>Get news on travel packages, latest offers and promotions.</small>
</div>
</div>

</footer>


<div className="social-media">

<div className="social-container col-md-6 text-center">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 172 172"
style={{ fill: '#696969' }}>
<g fill="none" 
fill-rule="nonzero" 
stroke="none" stroke-width="1" 
stroke-linecap="butt" stroke-linejoin="miter" 
stroke-miterlimit="10" stroke-dasharray="" 
stroke-dashoffset="0" font-family="none" 
font-weight="none" font-size="none" text-anchor="none" 
style={{ mixBlendMode: 'normal' }}>
<path d="M0,172v-172h172v172z" 
fill="none"></path><g fill="#3498db">
<path d="M61.64453,26.875c-19.08545,0 -34.76953,
15.66309 -34.76953,34.76953v48.71094c0,19.08545 15.66309,
34.76953 34.76953,34.76953h48.71094c19.08545,0 34.76953,
-15.66308 34.76953,-34.76953v-48.71094c0,-19.08545 -15.66308,
-34.76953 -34.76953,-34.76953zM61.64453,37.625h48.71094c13.29053,
0 24.01953,10.72901 24.01953,24.01953v48.71094c0,13.29053 -10.72901,
24.01953 -24.01953,24.01953h-48.71094c-13.29053,0 -24.01953,
-10.72901 -24.01953,-24.01953v-48.71094c0,-13.29053 10.72901,
-24.01953 24.01953,-24.01953zM117.74609,49.38281c-2.70849,
0 -4.87109,2.1626 -4.87109,4.87109c0,2.70849 2.1626,4.87109 4.87109,
4.87109c2.70849,0 4.87109,-2.1626 4.87109,-4.87109c0,-2.70849 -2.1626,
-4.87109 -4.87109,-4.87109zM86,53.75c-17.7417,0 -32.25,14.5083 -32.25,
32.25c0,17.7417 14.5083,32.25 32.25,32.25c17.7417,0 32.25,-14.5083 32.25,
-32.25c0,-17.7417 -14.5083,-32.25 -32.25,-32.25zM86,64.5c11.94678,0 21.5,
9.55322 21.5,21.5c0,11.94678 -9.55322,21.5 -21.5,21.5c-11.94678,
0 -21.5,-9.55322 -21.5,-21.5c0,-11.94678 9.55322,-21.5 21.5,-21.5z">
</path>
</g>
</g>
</svg>


<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 172 172"
style={{ fill: '#000000'  }}><g fill="none" 
fill-rule="nonzero" stroke="none" stroke-width="1" 
stroke-linecap="butt" stroke-linejoin="miter" 
stroke-miterlimit="10" stroke-dasharray="" 
stroke-dashoffset="0" font-family="none" font-weight="none" 
font-size="none" text-anchor="none" style={{ mixBlendMode: 'normal' }}>
<path d="M0,172v-172h172v172z" fill="none">
</path>
<g fill="#3498db"><path d="M150.5,46.00244c-4.74511,
2.09961 -9.84717,3.52734 -15.20117,4.15722c5.45898,
-3.27539 9.6582,-8.46142 11.63184,-14.63428c-5.10205,
3.02344 -10.771,5.22803 -16.79687,6.42481c-4.8291,
-5.14405 -11.71582,-8.37744 -19.31641,-8.37744c-14.61328,
0 -26.47608,11.86279 -26.47608,26.47607c0,2.07861 0.23096,
4.09424 0.69288,6.02588c-22.00391,-1.0918 -41.50928,
-11.63184 -54.54785,-27.65185c-2.28857,3.90527 -3.59033,
8.46142 -3.59033,13.31152c0,9.17529 4.66114,17.27979 11.77881,
22.0249c-4.34619,-0.14697 -8.41944,-1.32275 -11.98877,
-3.31738c0,0.12597 0,0.23096 0,0.33594c0,12.82861 9.1123,
23.53662 21.22705,25.95117c-2.22559,0.60889 -4.55616,
0.94482 -6.9707,0.94482c-1.70069,0 -3.38038,-0.16797 -4.97608,
-0.48291c3.35938,10.51905 13.14356,18.16163 24.71241,18.39258c-9.04932,
7.09668 -20.47119,11.3169 -32.85889,11.3169c-2.1416,0 -4.24121,
-0.12597 -6.31982,-0.37793c11.71582,7.5166 25.61523,11.90478 40.56445,
11.90478c48.68994,0 75.31299,-40.33349 75.31299,-75.31298c0,
-1.13379 -0.04199,-2.28858 -0.08398,-3.42236c5.16504,-3.73731 9.6582,
-8.39844 13.20654,-13.68945z">
</path>
</g>
</g>
</svg>

</div>

</div>
</div>
)
}
}
