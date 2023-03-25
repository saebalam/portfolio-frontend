import React from 'react'
import './work.css'
import Card from '../Shared Component/Card'
import line from '../../Assets/Images/fancy-line.png'
import frontpage_bookmania from '../../Assets/Images/homepage1.png'

const Work = () => {
    return ( 
        <div className='work'>
            <h1>Sample works</h1>
            <p>Love to build </p>
            <img src={line} alt="" width='200px' />

            <div style={{padding:'10px',display:'flex',gap:'20px'}}>
                <Card link='https://book-mania.netlify.app/' name='Bookmania' img={frontpage_bookmania} />
                <Card link='https://book-mania.netlify.app/' name='Another' />
            </div>

        </div>
    )
}

export default Work