import React from 'react'
import './work.css'
import Card from '../Shared Component/Card'
import line from '../../Assets/Images/fancy-line.png'
import frontpage_bookmania from '../../Assets/Images/homepage1.png'
import bookmania from '../../Assets/Images/bookmania.png'
import admin_dashboard from '../../Assets/Images/admin_dashboard.png'
import admindashboardback from '../../Assets/Images/admindashboardback.png'
import taskmanager from '../../Assets/Images/taskmanager.png'
import cocktail from '../../Assets/Images/cocktail.png'
import cocktailback from '../../Assets/Images/cocktail-back.png'
import taskmanagerback from '../../Assets/Images/taskmanagerback.png'
import jwtImg from '../../Assets/Images/jwt.png' 
import bg4 from '../../Assets/Images/bg4.avif' 


const Work = () => {
    return ( 
        <div className='work'>
            <h1>Sample works</h1>
            <p>Love to build </p>
            <img className={document.documentElement.className=='dark'?'line-white':'line'} src={line} alt="" width='200px' />

            <div className='card-wrapper' >
                <Card link='https://book-mania.netlify.app/' name='Bookmania' img={bg4} imgback={bookmania}  />
                <Card link='https://admin-dashboard23.netlify.app/' name='Admin Dashboard' img={admin_dashboard} imgback={admindashboardback} />
                <Card link='https://task-manager23.netlify.app/' name='Task Manager' img={taskmanager} imgback={taskmanagerback} />
                <Card link='https://cocktailshub23.netlify.app/' name='Cocktail Hub' img={cocktail} imgback={cocktailback} />
                <Card link='https://jwt23.netlify.app/' name="JWT App" img={jwtImg} imgback={jwtImg} />
                {/* <Card2 /> */}
                
            </div>

        </div>
    )
}

export default Work