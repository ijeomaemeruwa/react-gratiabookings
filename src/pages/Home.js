import React, {Component} from 'react';
import { Hero }  from '../components/Hero';
import { Cards } from '../components/Cards';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export class Home extends Component{
    render() {
    return (
   <div>
    <Hero />
    <Cards />
    <Services />
    <Contact />
   </div>
)
}
}

