import React from "react";
import '../styles/Navbar.css'

function Navbar() {
    return (
       <nav className="nav">
        <div className="center-this-shit">
        <div className="title-div">
        <p className="title">Pet-First</p>
        </div>
        <div className="li-elements">
            <ul className="nav-components">
            <li className="link"><a href="/about">About</a></li>
            <li className="link"><a href="/service">Service</a></li>
            <li className="link"><a href="/care">Madi-Care</a></li>
            <li className="link"><a href="/blog">Blog</a></li>
            </ul>
        </div>
        <div className="div-a">
            <a className="sign-up" href="/signup">Sign up</a>
        </div>
        </div>
       </nav>
    )
}
export default Navbar