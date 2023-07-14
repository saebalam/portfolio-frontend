import React, { useState } from "react";
import "./resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartColumn,
  faClockRotateLeft,
  faGraduationCap,
  faLaptopCode,
  faPallet,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import line from "../../Assets/Images/fancy-line.png";
import disc from "../../Assets/Images/disc.png";
import progress from "../../Assets/Images/progress.png";
import ProgressBar from "@ramonak/react-progress-bar";

const Resume = () => {
  const [labels, setLabels] = useState({
    education: true,
    work: false,
    skills: false,
    projects: false,
    interests: false,
  });
  let description;
  if (labels.education == true) {
    description = (
      <ul className="resume-right">
        <li className="li-item" style={{ marginTop: "5px" }}>
          <div className="disc-label">
            <img src={disc} alt="" /> B.Tech in Computer Science -{" "}
            <i className="i"> 8.4 CGPA </i>
          </div>
          <div className="year">2017 - 2021</div>
        </li>
        <ul>
          <li className="sub-li">
            Bengal College of Engineering - Durgapur(W.B)
          </li>
        </ul>
        <li className="li-item">
          <div className="disc-label">
            <img src={disc} alt="" />
            XII <sup>th </sup> PCM - <i className="i"> 73.8 % </i>
          </div>
          <div className="year">2015 - 2017</div>
        </li>
        <ul>
          <li className="sub-li">
            Techno Mission Intnl School - Bhagalpur(Bihar)
          </li>
        </ul>
        <li className="li-item">
          <div className="disc-label">
            <img src={disc} alt="" /> X <sup>th - </sup>
            <i className="i"> 9.6 CGPA </i>
          </div>
          <div className="year">2015</div>
        </li>
        <ul>
          <li className="sub-li">
            Techno Mission Intnl School - Bhagalpur(Bihar)
          </li>
        </ul>
      </ul>
    );
  } else if (labels.work == true) {
    description = (
      <div>
        <ul className="resume-right">
          <li className="li-item" style={{ marginTop: "5px" }}>
            <div className="disc-label">
              <img src={disc} alt="" />
              Sr. Software Engineer (Viral Pitch)
            </div>
            <div className="year">May 2023 - July 2023 </div>
          </li>
          <ul>
            <li className="sub-li">
              Created Influencer Marketing platform helping brands to connect
              with influencers
            </li>
            <li>
              Provided an interactive UI for brands to search 5M+ influencers{" "}
            </li>
            <li>Followed industry standard coding practices</li>
            <li>
              Collaborated with backend team regarding API for integrations
            </li>
            <li>Resolving bugs and maintaining efficiency</li>
          </ul>
        </ul>

        <ul className="resume-right">
          <li className="li-item" style={{ marginTop: "5px" }}>
            <div className="disc-label">
              <img src={disc} alt="" /> Software Engineer (Xoriant)
            </div>
            <div className="year">Aug 2021 - Apr 2023 </div>
          </li>
          <ul>
            <li className="sub-li">
              Handling React internal business applications.
            </li>
            <li>
              Getting requirements from clients and adding features into
              application.
            </li>
            <li>Resolving bugs and maintaining efficiency</li>
            <li>Providing access of applications to users based on roles</li>
          </ul>
        </ul>
      </div>
    );
  } else if (labels.skills == true) {
    description = (
      <div className="box resume-right">
        <div className="column">
          <div className="skill-group">
            <div style={{ display: "flex" }}>
              <div className="disc-label">
                <img src={disc} alt="" />{" "}
              </div>
              <div className="label">HTML CSS</div>
            </div>
            <div>
              <ProgressBar
                width="200px"
                baseBgColor="white"
                bgColor="#c7ad78"
                borderRadius="none"
                completed={80}
                customLabel=" "
              />
            </div>
          </div>
          <div className="skill-group">
            <div style={{ display: "flex" }}>
              <div className="disc-label">
                <img src={disc} alt="" />{" "}
              </div>
              <div className="label">JavaScript</div>
            </div>
            <div>
              <ProgressBar
                width="200px"
                baseBgColor="white"
                bgColor="#c7ad78"
                borderRadius="none"
                completed={80}
                customLabel=" "
              />
            </div>
          </div>
          <div className="skill-group">
            <div style={{ display: "flex" }}>
              <div className="disc-label">
                <img src={disc} alt="" />{" "}
              </div>
              <div className="label">React</div>
            </div>
            <div>
              <ProgressBar
                width="200px"
                baseBgColor="white"
                bgColor="#c7ad78"
                borderRadius="none"
                completed={85}
                customLabel=" "
              />
            </div>
          </div>
          <div className="skill-group">
            <div style={{ display: "flex" }}>
              <div className="disc-label">
                <img src={disc} alt="" />{" "}
              </div>
              <div className="label">Tailwind</div>
            </div>
            <div>
              <ProgressBar
                width="200px"
                baseBgColor="white"
                bgColor="#c7ad78"
                borderRadius="none"
                completed={70}
                customLabel=" "
              />
            </div>
          </div>
          <div className="skill-group">
            <div style={{ display: "flex" }}>
              <div className="disc-label">
                <img src={disc} alt="" />{" "}
              </div>
              <div className="label">Node</div>
            </div>
            <div>
              <ProgressBar
                width="200px"
                baseBgColor="white"
                bgColor="#c7ad78"
                borderRadius="none"
                completed={20}
                customLabel=" "
              />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="skill-group">
            <div style={{ display: "flex" }}>
              <div className="disc-label">
                <img src={disc} alt="" />{" "}
              </div>
              <div className="label">GIT</div>
            </div>
            <div>
              <ProgressBar
                width="200px"
                baseBgColor="white"
                bgColor="#c7ad78"
                borderRadius="none"
                completed={70}
                customLabel=" "
              />
            </div>
          </div>
          <div className="skill-group">
            <div style={{ display: "flex" }}>
              <div className="disc-label">
                <img src={disc} alt="" />{" "}
              </div>
              <div className="label">JIRA</div>
            </div>
            <div>
              <ProgressBar
                width="200px"
                baseBgColor="white"
                bgColor="#c7ad78"
                borderRadius="none"
                completed={50}
                customLabel=" "
              />
            </div>
          </div>
          <div className="skill-group">
            <div style={{ display: "flex" }}>
              <div className="disc-label">
                <img src={disc} alt="" />{" "}
              </div>
              <div className="label">Postman</div>
            </div>
            <div>
              <ProgressBar
                width="200px"
                baseBgColor="white"
                bgColor="#c7ad78"
                borderRadius="none"
                completed={40}
                customLabel=" "
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else if (labels.projects == true) {
    description = (
      <ul className="resume-right" style={{ listStyle: "disc" }}>
        {/* <li className='li-item' style={{ marginTop: '5px' }}>
                <div className='disc-label'><img src={disc} alt="" /> Personal Portfolio website</div>
                <div className='year'>2017 - 2021</div>
            </li>
            <ul>
                <li className='sub-li'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, voluptate!</li>
            </ul> */}
        <li>
          <h4>Influencer Makerting platform -</h4>
          <p>
            A responsive and scalable influencer marketing platform developed in
            <b> ReactJs </b> that allows <b> 1000+ brands </b> to search, filter
            and connect with influencers to promote their services or products.
            This platform provided an interactive UI for brands to search{" "}
            <b> 5M+ influencers </b>
            having different audience, demographics and engagement with all the
            other details of the influencer and create customised plans,
            deliverables and lists.
          </p>
        </li>

        <li>
          <h4>Knowledge sharing portal -</h4>
          <p>
            Responsive and scalable application developed in <b> ReactJs </b> for 100+
            sales, presales, and higher management teams to share and view 4000+
            sales artifacts in the form of ppt and pdf. Implemented <b> PowerPoint
            slide library </b> feature in the application allowing users to merge
            different presentations and slides of any selected presentation and
            download on their local machine, thus saving a lot of time in
            creating and merging the slides.
          </p>
        </li>
      </ul>
    );
  } else if (labels.interests == true) {
    description = (
      <ul className="resume-right">
        <li className="li-item" style={{ marginTop: "5px" }}>
          <div className="disc-label">
            <img src={disc} alt="" /> Learning new things
          </div>
          
        </li>
        
        <li className="li-item">
          <div className="disc-label">
            <img src={disc} alt="" /> Developing products
          </div>
         
        </li>
        
        <li className="li-item">
          <div className="disc-label">
            <img src={disc} alt="" /> Meeting new people with similar interests
          </div>
        
        </li>
        
      </ul>
    );
  }

  const handleLabels = (e) => {
    const newLabel = { ...labels };
    Object.keys(newLabel).forEach((item) => {
      console.log(labels[item]);
      if (e.target.id == item) {
        newLabel[item] = true;
      } else {
        newLabel[item] = false;
      }
    });
    setLabels(newLabel);
  };

  return (
    <div className="resume">
      <h1>Resume</h1>
      <p>My Formal Bio Details</p>
      <img
        className={
          document.documentElement.className == "dark" ? "line-white" : "line"
        }
        src={line}
        alt=""
        width="200px"
      />

      <div className="resume-hero">
        <div className="resume-left">
          <div className="labels-icons">
            <FontAwesomeIcon
              icon={faGraduationCap}
              style={{ width: "20px", height: "20px" }}
            />
            <FontAwesomeIcon
              icon={faClockRotateLeft}
              style={{ width: "20px", height: "20px" }}
            />
            <FontAwesomeIcon
              icon={faLaptopCode}
              style={{ width: "20px", height: "20px" }}
            />
            <FontAwesomeIcon
              icon={faChartColumn}
              style={{ width: "20px", height: "20px" }}
            />
            <FontAwesomeIcon
              icon={faPallet}
              style={{ width: "20px", height: "20px" }}
            />
          </div>
          <div className="labels">
            <div
              id="education"
              className={labels.education ? "active-label" : null}
              onClick={(e) => handleLabels(e)}
            >
              Education
            </div>
            <div
              id="work"
              className={labels.work ? "active-label" : null}
              onClick={(e) => handleLabels(e)}
            >
              Work History
            </div>
            <div
              id="skills"
              className={labels.skills ? "active-label" : null}
              onClick={(e) => handleLabels(e)}
            >
              Programming skills
            </div>
            <div
              id="projects"
              className={labels.projects ? "active-label" : null}
              onClick={(e) => handleLabels(e)}
            >
              Projects
            </div>
            <div
              id="interests"
              className={labels.interests ? "active-label" : null}
              onClick={(e) => handleLabels(e)}
            >
              Interests
            </div>
          </div>
        </div>
        {/* <div>
                    <img src={line} alt="" />
                </div> */}

        {description}
      </div>
    </div>
  );
};

export default Resume;
