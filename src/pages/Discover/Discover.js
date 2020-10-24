
import React, { Component } from 'react';
import '../Discover/discover.css'

import CardDeck from 'react-bootstrap/CardDeck';

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
<div>
   <div className="discover">
   <div className="overlay-color">
    <div className="discover_content col-md-6">
    <h1>DISCOVER</h1>
    <p>Affordable deals and promotions for individual or family vacation</p>
    </div>
    </div>
   </div>
    
   <div className="cards">
   <CardDeck className="m-5">
    {
        preview.map(({id, ...otherPreviewData }) => (
        <DiscoverPreview 
        key={id}
        {...otherPreviewData}
        />
        ))
    }
   </CardDeck>
   </div>

   <Footer />
</div>
)
}
}
