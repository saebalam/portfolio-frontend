import React, { useState } from 'react'
import './resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartColumn, faClockRotateLeft, faGraduationCap, faLaptopCode, faPallet, faSchool } from '@fortawesome/free-solid-svg-icons'
import line from '../../Assets/Images/fancy-line.png'
import disc from '../../Assets/Images/disc.png'
import progress from '../../Assets/Images/progress.png'
import ProgressBar from "@ramonak/react-progress-bar";

const Resume = () => {

    const [labels, setLabels] = useState({
        education: true,
        work: false,
        skills: false,
        projects: false,
        interests: false
    })
    let description;
    if (labels.education == true) {
        description = <ul className="resume-right">
            <li className='li-item' style={{ marginTop: '5px' }}>
                <div className='disc-label'><img src={disc} alt="" /> B.Tech in Computer Science - <i className='i'> 8.4 CGPA </i></div>
                <div className='year'>2017 - 2021</div>
            </li>
            <ul>
                <li className='sub-li'>Bengal College of Engineering - Durgapur(W.B)</li>
            </ul>
            <li className='li-item'>
                <div className='disc-label'><img src={disc} alt="" />XII <sup>th </sup>  PCM - <i className='i'> 73.8 % </i></div>
                <div className='year'>2015 - 2017</div>
            </li>
            <ul>
                <li className='sub-li'>Techno Mission Intnl School - Bhagalpur(Bihar)</li>
            </ul>
            <li className='li-item'>
                <div className='disc-label'><img src={disc} alt="" /> X <sup>th - </sup><i className='i'> 9.6 CGPA </i></div>
                <div className='year'>2015</div>
            </li>
            <ul>
                <li className='sub-li'>Techno Mission Intnl School - Bhagalpur(Bihar)</li>
            </ul>
        </ul>
    } else if (labels.work == true) {
        description = <ul className="resume-right">
            <li className='li-item' style={{ marginTop: '5px' }}>
                <div className='disc-label'><img src={disc} alt="" /> Software Engineer (Xoriant)</div>
                <div className='year'>Aug 2021 - Present </div>
            </li>
            <ul>
                <li className='sub-li'>Handling React internal business applications.</li>
                <li>Getting requirements from clients and adding features into application.</li>
                <li>Resolving bugs and maintaining efficiency</li>
                <li>Providing access of applications to users based on roles</li>

            </ul>

        </ul>
    } else if (labels.skills == true) {
        description = <div className="box resume-right">
            <div className="column">
                <div className='skill-group'>
                    <div style={{display:'flex'}}>
                        <div className='disc-label'><img src={disc} alt="" /> </div>
                        <div>
                            HTML CSS
                        </div>
                    </div>
                    <div><ProgressBar width='200px' baseBgColor='orangered' bgColor='black' borderRadius='none'  completed={80} customLabel=" " /></div>
                </div>
                <div className='skill-group'>
                    <div  style={{display:'flex'}}>
                        <div className='disc-label'><img src={disc} alt="" /> </div>
                        <div>
                            JavaScript
                        </div>
                    </div>
                    <div><ProgressBar width='200px' baseBgColor='orangered' bgColor='black' borderRadius='none' completed={80} customLabel=" " /></div>
                </div>
                <div className='skill-group'>
                    <div  style={{display:'flex'}}>
                        <div className='disc-label'><img src={disc} alt="" /> </div>
                        <div>
                            React
                        </div>
                    </div>
                    <div><ProgressBar width='200px' baseBgColor='orangered' bgColor='black' borderRadius='none' completed={85} customLabel=" " /></div>
                </div>
                <div className='skill-group'>
                    <div  style={{display:'flex'}}>
                        <div className='disc-label'><img src={disc} alt="" /> </div>
                        <div>
                            NodeJs
                        </div>
                    </div>
                    <div><ProgressBar width='200px' baseBgColor='orangered' bgColor='black' borderRadius='none' completed={40} customLabel=" " /></div>
                </div>
                <div className='skill-group'>
                    <div  style={{display:'flex'}}>
                        <div className='disc-label'><img src={disc} alt="" /> </div>
                        <div>
                            MongoDB
                        </div>
                    </div>
                    <div><ProgressBar width='200px' baseBgColor='orangered' bgColor='black' borderRadius='none' completed={20} customLabel=" " /></div>
                </div>
            </div>
            <div className="column">
            <div  className='skill-group'>
                    <div style={{display:'flex'}}>
                        <div className='disc-label'><img src={disc} alt="" /> </div>
                        <div>
                            GIT
                        </div>
                    </div>
                    <div><ProgressBar width='200px' baseBgColor='orangered' bgColor='black' borderRadius='none' completed={70} customLabel=" " /></div>
                </div>
                <div className='skill-group'>
                    <div  style={{display:'flex'}}>
                        <div className='disc-label'><img src={disc} alt="" /> </div>
                        <div>
                            JIRA
                        </div>
                    </div>
                    <div><ProgressBar width='200px' baseBgColor='orangered' bgColor='black' borderRadius='none' completed={50} customLabel=" " /></div>
                </div>
                <div className='skill-group'>
                    <div  style={{display:'flex'}}>
                        <div className='disc-label'><img src={disc} alt="" /> </div>
                        <div>
                            Postman
                        </div>
                    </div>
                    <div><ProgressBar width='200px' baseBgColor='orangered' bgColor='black' borderRadius='none' completed={40} customLabel=" " /></div>
                </div>
            </div>
        </div>
    } else if (labels.projects == true) {
        description = <ul className="resume-right">
            <li className='li-item' style={{ marginTop: '5px' }}>
                <div className='disc-label'><img src={disc} alt="" /> Personal Portfolio website</div>
                <div className='year'>2017 - 2021</div>
            </li>
            <ul>
                <li className='sub-li'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate!</li>
            </ul>
            <li className='li-item'>
                <div className='disc-label'><img src={disc} alt="" /> E-commerce appliction</div>
                <div className='year'>2017 - 2021</div>
            </li>
            <ul>
                <li className='sub-li'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate!</li>
            </ul>
            <li className='li-item'>
                <div className='disc-label'><img src={disc} alt="" /> Admin Dashboard</div>
                <div className='year'>2017 - 2021</div>
            </li>
            <ul>
                <li className='sub-li'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate!</li>
            </ul>
        </ul>
    } else if (labels.interests == true) {
        description = <ul className="resume-right">
            <li className='li-item' style={{ marginTop: '5px' }}>
                <div className='disc-label'><img src={disc} alt="" /> lorem ipsum</div>
                <div className='year'>2017 - 2021</div>
            </li>
            <ul>
                <li className='sub-li'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate!</li>
            </ul>
            <li className='li-item'>
                <div className='disc-label'><img src={disc} alt="" /> sdhf hoidifi jhfjh hhsd</div>
                <div className='year'>2017 - 2021</div>
            </li>
            <ul>
                <li className='sub-li'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate!</li>
            </ul>
            <li className='li-item'>
                <div className='disc-label'><img src={disc} alt="" /> sdhf hoidifi jhfjh hhsd</div>
                <div className='year'>2017 - 2021</div>
            </li>
            <ul>
                <li className='sub-li'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate!</li>
            </ul>
        </ul>
    }

    const handleLabels = (e) => {
        const newLabel = { ...labels }
        Object.keys(newLabel).forEach((item) => {
            console.log(labels[item]);
            if (e.target.id == item) {
                newLabel[item] = true
            } else {
                newLabel[item] = false
            }
        })
        setLabels(newLabel)
    }

    return (
        <div className='resume'>
            <h1>Resume</h1>
            <p>My Formal Bio Details</p>
            <img className={document.documentElement.className=='dark'?'line-white':'line'} src={line} alt="" width='200px' />

            <div className='resume-hero'>
                <div className="resume-left">
                    <div className='labels-icons'>
                        <FontAwesomeIcon icon={faGraduationCap} style={{ width: '20px', height: '20px' }} />
                        <FontAwesomeIcon icon={faClockRotateLeft} style={{ width: '20px', height: '20px' }} />
                        <FontAwesomeIcon icon={faLaptopCode} style={{ width: '20px', height: '20px' }} />
                        <FontAwesomeIcon icon={faChartColumn} style={{ width: '20px', height: '20px' }} />
                        <FontAwesomeIcon icon={faPallet} style={{ width: '20px', height: '20px' }} />
                    </div>
                    <div className='labels'>
                        <div id='education' className={labels.education ? 'active-label' : null} onClick={(e) => handleLabels(e)}>Education</div>
                        <div id='work' className={labels.work ? 'active-label' : null}  onClick={(e) => handleLabels(e)}>Work History</div>
                        <div id='skills' className={labels.skills ? 'active-label' : null}  onClick={(e) => handleLabels(e)}>Programming skills</div>
                        <div id='projects' className={labels.projects ? 'active-label' : null}  onClick={(e) => handleLabels(e)}>Projects</div>
                        <div id='interests' className={labels.interests ? 'active-label' : null}  onClick={(e) => handleLabels(e)}>Interests</div>
                    </div>
                </div>
                {/* <div>
                    <img src={line} alt="" />
                </div> */}

                {description}

            </div>
        </div>
    )
}

export default Resume