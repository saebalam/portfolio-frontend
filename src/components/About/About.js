import React from 'react'
import './about.css'
import line from '../../Assets/Images/fancy-line.png'
import MeBig from '../../Assets/Images/me-big1.jpg'

const About = () => {
  return (
    <div className='about'>
        <h1>About Me</h1>
        <p>Why choose me?</p>
        <img className={document.documentElement.className=='dark'?'line-white':'line'} src={line} alt="" width='200px' />
        <div className='about-hero'>
            <div className="about-left">
                <img src={MeBig} alt="" />
            </div>
            <div className="about-right">
                <div>
                    <p>Hi there ! My name is Saeb Alam. I am a web developer having <b>1.5+ years</b> of experience in
                        developing UI Interfaces using <b>React</b>. I have a degree in computer science. Currently 
                        working as full time software engineer at Xoriant Solutions Pvt Ltd. Eagerness to learn
                        something new keeps me ahead and being adaptable
                        has always been my strength.
                    </p>
                </div>
                <div>
                    <p>Here are few Highlights</p>
                    <ul>
                        <li>Love working with React</li>
                        <li>Good understanding of HTML, CSS</li>
                        <li>Javascript, Java</li>
                        <li>NodeJs</li>
                        <li>GIT, JIRA, Postman</li>
                    </ul>
                </div>
                <div className='buttons'>
                    <button>Hire Me</button>
                    <button>Get Resume</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About