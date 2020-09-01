import React, {Component} from 'react';
import { Hero }  from '../components/Hero';
import { Cards } from '../components/Cards';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { ScrollWrapper } from '../components/ScrollingWrapper';

export class Home extends Component{
    render() {

    return (
   <div>
    <ScrollWrapper>
    <Hero />
    <Cards />
    <Services />
    <Contact />
    <Footer />
    </ScrollWrapper>
   </div>
)
}
}

