import React from 'react'
import Sample from '../../Assets/Images/contact-us.jpg'
import line from '../../Assets/Images/fancy-line.png'
import './card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className="card-img">
            <img src={props.img} alt="" />
        </div>
        <div className="card-info">
            <p className='about'>{props.name}</p>
            
            <a className='link' href={props.link} target='_blank'>visit</a>
        </div>
    </div>
  )
}

export default Card