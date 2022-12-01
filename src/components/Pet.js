import React from 'react'
import pet from '../assets/Union.png'
import '../styles/Pet.css'


function Pet() {
  return (
    <div className='pet-div'>
      <div className='pet1'>
        <img alt='idk' src={pet}/>
      </div>
      <div className='pet-text'>
        <h3>Making pet parenting<br/> easy for everyone</h3>
        <p>Could this be the dog with the longest tail? The<br/>
         Rampur Greyhound - shy, sensitive, alert, and <br/>
         faithful. This is a breed that has climbed its way to<br/>
         being top dog because of its intelligence</p>
        <ul>
            <li>Adoptiony</li>
            <li>Frozen</li>
            <li>Next Day Delivery</li>
        </ul>
        <div className='pet-more'>
                <a href="/explore">Explore</a>
            </div>
      </div>
    </div>
  )
}

export default Pet
