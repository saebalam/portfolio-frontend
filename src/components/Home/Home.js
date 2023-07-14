import React, { useRef } from "react";
import "./home.css";
import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router-dom";
import MyResume from "../../Assets/saeb_alam_resume.pdf";
import reactlogo from '../../Assets/Images/react.png'
import javascriptlogo from '../../Assets/Images/js.png'
import htmllogo from '../../Assets/Images/html.png'
import csslogo from '../../Assets/Images/css.png'
import nodelogo from '../../Assets/Images/node.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareTwitter,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowUp, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { TypeAnimation } from "react-type-animation";

import Me from "../../Assets/Images/bg5.png";
import About from "../About/About";
import Resume from "../Resume/Resume";
import Contact from "../Contact/Contact";
import Work from "../Work/Work";

const Home = () => {
  const home = useRef(null);
  const about = useRef(null);
  const resume = useRef(null);
  const contact = useRef(null);
  const work = useRef(null);

  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  const fade1 = useSpring({
    from: {
      scale: 0,
    },
    to: {
      scale: 1,
    },
  });

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <animated.div style={{ ...fade }} ref={home}>
      <div className="home" style={{ height: "100vh" }}>
        <div className="header">
          <div className="my-name">
            <h1>SAEB</h1>
          </div>
          <div className="ribbon">
            <ul>
              <li className="active-link">Home</li>
              <li
                onClick={() => {
                  scrollToSection(about);
                }}
              >
                AboutMe
              </li>
              <li
                onClick={() => {
                  scrollToSection(resume);
                }}
              >
                Resume
              </li>
              <li
                onClick={() => {
                  scrollToSection(work);
                }}
              >
                SampleWork
              </li>
              <li
                onClick={() => {
                  scrollToSection(contact);
                }}
              >
                ContactMe{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="hero">
          <div className="left">
            <div className="social">
              <a href="https://github.com/saebalam" target="_blank">
                <FontAwesomeIcon fontSize={30} icon={faSquareGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/saebalam/"
                target="_blank"
              >
                <FontAwesomeIcon fontSize={30} icon={faLinkedin} />
              </a>
              <a href="">
                <FontAwesomeIcon fontSize={30} icon={faSquareTwitter} />
              </a>
            </div>
            <div className="info">
              <p className="firstp">
                Hello, I'M{" "}
                <span className="styled-name" >
                  Saeb Alam
                </span>
              </p>
              {/* <p className='secondp'>React Developer</p> */}
              <TypeAnimation
                className="typed-animation"
                sequence={[
                  "Software Engineer", // Types 'One'
                  1000, // Waits 1s
                  "React", // Deletes 'One' and types 'Two'
                  2000, // Waits 2s
                  "React Developer", // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "2em" }}
              />
              <p className="thirdp">
                Knack of building applications with front and back end
                operations
              </p>
            </div>
            <div className="buttons">
              <button>
                <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNstxzfXlHVQngCNGdqPHfCbffBXhXWZlwzktfPXWSPChDzLPlzCmtGhcMpHVcjLhTFLZL' target="_blank">
                  Hire Me
                </a>
              </button>
              <button>
                <a href={MyResume} target="_blank">
                  Get Resume
                </a>
              </button>
            </div>
          </div>
          <div className="right">
            <img src={Me} alt="" />
          </div>
          <div className="skills">
          <img src={reactlogo} alt="" />
          <img src={htmllogo} alt="" />
          <img src={csslogo} alt="" />
          <img src={nodelogo} alt="" />
          <img src={javascriptlogo} alt="" />
        </div>
        </div>

        

      </div>

      <div ref={about}>
        <About />
      </div>

      <div ref={resume}>
        <Resume />
      </div>

      <div ref={work}>
        <Work />
      </div>

      <div ref={contact}>
        <Contact />

        {/* <button >jump to top</button> */}
      </div>
      <div
        onClick={() => scrollToSection(home)}
        style={{
          position: "fixed",
          width: "47px",
          bottom: "37px",
          left: "48%",
          height: "47px",
          backgroundColor: "#3b3c4f",
          cursor: "pointer",
          padding: "1px",
          borderRadius: "50%",
          color: "white",
        }}
      >
        <FontAwesomeIcon type="link" href="/" size="3x" icon={faArrowUp} />
      </div>
    </animated.div>
  );
};

export default Home;
