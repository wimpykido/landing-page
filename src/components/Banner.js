import React from "react";
import Logo from '../assets/XMLID_1_.png'
import Picture from '../assets/Group 143725924.png'
import '../styles/Banner.css'
function Banner() {
    return (
        <div className="banner">
            <div className="inside-banner">
                <div className="smalltext">
                    <div className="arrow-div">
                        <img alt="arrow" src={Logo} />
                    </div>
            <div className="pdiv">
                <p>Available in select states</p>
            </div> 
                </div>       
        <div className="text">
            <h1 className="banner-text">A pet-first <br/>
             <span className="red-text">approach to</span><br/>
             wellness</h1>
             <a className="more" href="/more">Learn More</a>
        </div>
            </div>
        <div className="dogodiv">
            <img className="Doggo" alt="dog" src={Picture} />
        </div>
        </div> 
    )
}

export default Banner