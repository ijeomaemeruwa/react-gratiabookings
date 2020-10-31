import React from 'react'
import Card from 'react-bootstrap/Card';

export const DiscoverPreview = ({city, imageURL, price, travelPackage }) => {
    return (
    <>
     <Card className="mb-5">
     <Card.Img variant="top" src={imageURL} />
     <Card.Body>
     <Card.Title>{city}</Card.Title> 
     <Card.Text>
     <h4>{price}</h4> 
     <p>{travelPackage}</p>
    </Card.Text> 
    </Card.Body>    
    </Card>   
    </>
    )
}
