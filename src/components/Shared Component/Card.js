import React from 'react'
import Sample from '../../Assets/Images/contact-us.jpg'
import './card.css'

const Card = () => {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={Sample} alt="" />
        </div>
        <div className="card-info">
            <p className='about'>Shopping app</p>
            <hr />
            <a className='link' href="">visit</a>
        </div>
    </div>
  )
}

export default Card