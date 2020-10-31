import React, { Component } from 'react';
import '../Discover/discover.css'
import { CardDeck } from 'react-bootstrap';

import DISCOVER_DATA from '../Discover/DiscoverData'
import { DiscoverPreview } from '../Discover/DiscoverPreview'
import { Footer } from '../../components/Footer/Footer';



export class Discover extends Component {

    state = {
        preview: DISCOVER_DATA
    }

render() {
const { preview } = this.state

return (
<>
    <div className="discover">
    <div className="overlay-color">
    <div className="hero-content">
    <h1>DISCOVER EXOTIC DESTINATIONS AND AMAZING PACKAGES</h1> 
    <p className="col-md-6 p-3">
    Our team has put together a package that is totally irresistable and 
    great for individual, group or family vacation.  
    </p> 
    </div>
    </div>
    </div>

   <CardDeck className="mx-auto card_decks">
    {
        preview
        .map(({id, ...otherPreviewData }) => (
        <DiscoverPreview 
        key={id}
        {...otherPreviewData}
        />
        ))
    }
    </CardDeck>
    
    <div>    
   <Footer />
   </div>
</>
)
}
}
