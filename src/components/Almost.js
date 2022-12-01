import React from 'react'
import Cutedog from '../assets/89253.png'
//import Vector from '../assets/Vector (8).png'
import '../styles/Almost.css'
function Almost() {
  return (
    <div className='almost-div'>
      <div className='number1'>
        <div className='layer'>
           <img className="second-l" src={Cutedog} alt="dog"/>
        </div>
      </div>
      <div className='number2'>
        <h3>
        Subscribe & Get Pet<br/> Updatenews
        </h3>
        <div className='mail'>
            <a href='/mail'>Mail</a>
            <div className='empty'></div>
        </div>
        </div>
      </div>
  )
  }

export default Almost
