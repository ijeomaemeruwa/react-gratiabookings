import React, {Component} from 'react';
import { Hero }  from '../components/Hero/Hero';
import { Cards } from '../components/Cards/Cards';
import { Services } from '../components/Services/Services';
import { Partners } from '../components/Partners/Partners'
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

export class Home extends Component{
    render() {

    return (
   <div>
    <Hero />
    <Cards />
    <Services />
    <Partners />
    <Contact />
    <Footer />
   </div>
)
}
}

