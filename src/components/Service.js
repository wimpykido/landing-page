import React from 'react'
import Vector1 from '../assets/Vector (2).png'
import Scissors from '../assets/Vector (3).png'
import Scissors2 from '../assets/Vector (4).png'
import button1 from '../assets/Arrow 4 (3).png'
import button2 from '../assets/Arrow 4 (4).png'
import '../styles/Service.css'

function Service() {
  return (
    <div className='whole'>
  <h2 className='service-title'>Our Service</h2>
    <div className='boxes'>
      <div className='first'>
        <div className='logo-div'>
          <img alt="who-cares" src={Vector1} />
        </div>
        <div className='text-div'>
            <h3>Pharmacy</h3>
            <p>Apoquel is an oral tablet that works differently than<br/>
                other allergy medications. It goes straight to the<br/> source 
                to help relieve itch and inflammation at its<br/>
                core—addressing the underlying cause of irritation</p>
            <div className='explore'>
                <a href='/explore'>Explore</a>
            </div>
        </div>
      </div>
      <div className='second'>
        <div className='logo-div2'>
        <img alt="who-cares" src={Scissors} />
        <img className="img2" alt="who-cares" src={Scissors2} />
        </div>
        <div className='text-div2'>
            <h3>Breed-specific Haircuts</h3>
            <p>Regular grooming is essential to your pet's health as<br/>
             it helps prevent skin issues such as matting.</p>
            <div className='explore-2'>
                <a href="/explore">Explore</a>
            </div>
            </div>
      </div>
     
    </div>
     <div className='arrow-button'>
        <div className='container1'>
        <img src={button1} alt="arrow"/>
        </div>
        <div className='container2'>
        <img src={button2} alt="arrow"/>
        </div>
    </div>
    </div>
  )
}

export default Service
