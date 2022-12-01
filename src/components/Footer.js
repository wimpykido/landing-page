import React from 'react'
import Logo from '../assets/Pet-First.png'
import twitter from '../assets/Vector (10).png'
import instagram from '../assets/Group.png'
import facebook from '../assets/Vector (9).png'
import '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
      <div className='for-title'>
        <img src={Logo} alt="logo"/>
      </div>
      <div className='footer-1'>
        <ul className='contacts'>
            <li className='contacts-li'><a href="/contacts "className='contacts-a'>About</a></li>
            <li className='contacts-li'><a href="/contacts "className='contacts-a'>Project</a></li>
            <li className='contacts-li'><a href="/contacts "className='contacts-a'>Service</a></li>
            <li className='contacts-li'><a href="/contacts "className='contacts-a'>Client</a></li>
            <li className='contacts-li'><a href="/contacts "className='contacts-a'>Team</a></li>
            <li className='contacts-li'><a href="/contacts "className='contacts-a'>Blog</a></li>
            <li className='contacts-li'><a href="/contacts "className='contacts-a'>Contact</a></li>
        </ul>
        <div className='for-logo'>
            <img className='l' src={facebook} alt="fblogo"></img>
            <img className='l' src={instagram} alt="instalogo"></img>
            <img className='l' src={twitter} alt="twitlogo"></img>
        </div>
      </div>
    </div>
  )
}

export default Footer

