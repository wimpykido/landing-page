import React from 'react'
import button3 from '../assets/Arrow 4 (3).png'
import button4 from '../assets/Arrow 4 (4).png'
import background2 from '../assets/Vector 1.png'
import Star from '../assets/Star 17.png'
import Colon from '../assets/mdzime.png'
import Smile from '../assets/Rectangle 21868.png'
import Sparkle from '../assets/Vector (6).png'
import '../styles/Customer.css'
function Customer() {
  return (
    <div className='another-whole'>
      <div className='photo-comp'>
        <div className='smiling-guy'>
            <img className='image3' src={Smile} alt="dunno"/>
        </div>
        <div className='neta-ras-aketeb'>
        <div className='mdzime'>
            <img className="image1" src={Star} alt="background"/>
            <img className='image2' src={Colon} alt="mdzimeebi"/>
            </div>
        </div>
      </div>
      <div className='whole-texts'>
        <h3>Customer Reviews</h3>
        <div className='sparkle'>
            <img src={Sparkle} alt="sparkle"/>
        </div>
        <div className='with-background'>
            <img className='image8' src={background2} alt="background"/>
            <p className='customer-text'>
            As we continue to push for better<br/> 
            regulation in the Australian pet food<br/> 
            industry it can be hard to trust many pet<br/>
            food brands. Our 2021 Best Cat Food in<br/>
            Australia list will offer you a great<br/>
            starting point in deciding what to feed<br/>
            your cat.</p>
        <div className='arrow-button2'>
        <div className='container3'>
        <img src={button3} alt="arrow"/>
        </div>
        <div className='container4'>
        <img src={button4} alt="arrow"/>
        </div>
    </div>
        </div>
        </div>
      </div>
  )
}

export default Customer
