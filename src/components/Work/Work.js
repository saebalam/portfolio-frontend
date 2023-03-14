import React from 'react'
import './work.css'
import Card from '../Shared Component/Card'

const Work = () => {
    return (
        <div className='work'>
            <h1>Sample works</h1>
            <p>Lets keep in touch</p>
            <hr />

            <div style={{padding:'10px',display:'flex',gap:'20px'}}>
                <Card />
                <Card />
            </div>

        </div>
    )
}

export default Work