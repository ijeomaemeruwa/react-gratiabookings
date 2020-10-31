import React from 'react'
import '../Partners/partners.css'

// https://www.konga.com/_next/static/images/62f8a0d88e07573b4d46735aa24f3f04.png

export const Partners = () => {
    return (
    <div>
    <section className="partners_section">

    <div className="newsletter">
    <form className="form col-md-8">
    <h5>Subscribe to our newsletter for updates on promotions and travel news</h5>
    <input 
    type="email" 
    placeholder="Enter Email" />
    <button className="newsletter_btn">Join Gratia</button>
    </form>
    </div>
    
    <hr style={{ width: "70%", margin: "auto" }}/>

    <h5 className="text-center">In Partnership with:</h5>
    <div className="brands row m-auto"> 
    <div className="col-md-4 brand_img">
    <img src={require('../../assets/images/konga.svg')} 
    className="img img-responsive" 
    alt="konga" />
    </div>
    <div className="col-md-4 brand_img">
    <img lazy-img="https://wakanow-images.azureedge.net/Images/logo.png" 
    src="https://wakanow-images.azureedge.net/Images/logo.png" className="img img-responsive" 
    alt="Wakanow Logo"></img>
    </div>
    </div>

    </section>        
    </div>
    )
}
