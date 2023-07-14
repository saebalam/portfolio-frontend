import React, { useState } from "react";
import "./contact.css";
import line from "../../Assets/Images/fancy-line.png";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast, ToastContainer } from 'react-toastify'

import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faEnvelope,
  faLocation,
  faLocationDot,
  faMap,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faMailchimp } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState({
    email: false,
    number: false,
  });

  const changeHandler = (e) => {
    const inputField = e.target.name;

    if (inputField == "name") {
      setName(e.target.value);
    }
    if (inputField == "mobile") {
      setMobile(e.target.value);
    }
    if (inputField == "email") {
      setEmail(e.target.value);
    }
    if (inputField == "message") {
      setMessage(e.target.value);
    }
  };

  const sendMail = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      mobile: mobile,
      email: email,
      message: message,
    };
    axios
      .post("https://upset-gold-gopher.cyclic.app/contactMe", payload)
      .then((res) => {
        if (res.status == 200) {
          setName("");
          setMobile("");
          setEmail("");
          setMessage("");
          toast("Message sent successfully!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const copyToClipboard = (val) => {
    if (val == "email") {
      navigator.clipboard.writeText("saebalam123@gmail.com");
      setCopied((prev) => ({
        ...prev,
        email: true,
      }));

      setTimeout(() => {
        setCopied((prev) => ({
          ...prev,
          email: false,
        }));
      }, 1000);
    } else if (val == "number") {
        navigator.clipboard.writeText(8789302507);
      setCopied((prev) => ({
        ...prev,
        number: true,
      }));

      setTimeout(() => {
        setCopied((prev) => ({
          ...prev,
          number: false,
        }));
      }, 1000);
    }
  };

  return (
    <div className="contact">
      <Toaster />
      <h1>Contact Me</h1>
      <p>Lets keep in touch</p>
      <img
        className={
          document.documentElement.className == "dark" ? "line-white" : "line"
        }
        src={line}
        alt=""
        width="200px"
      />

      <div className="contact-bg">
        <div className="contact-form">
          {/* <form>
                        <label htmlFor="nameField">Name</label>
                        <input type="text" onChange={(e) => changeHandler(e)} value={name} name="name" id="nameField" /><br />

                        <label htmlFor="nameField">Mobile</label>
                        <input type="tel" onChange={(e) => changeHandler(e)} value={mobile} name="mobile" id="mobField" /><br />

                        <label htmlFor="emailField">Email</label>
                        <input type="email" onChange={(e) => changeHandler(e)} value={email} name="email" id="emailField" /><br />

                        <label htmlFor="msgField">Message</label>
                        <textarea name="message" onChange={(e) => changeHandler(e)} value={message} id="msgField" cols="30" rows="2"></textarea><br />

                        <button onClick={(e) => sendMail(e)}>Send</button>
                    </form> */}
          <div className="emailid">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="https://www.gmail.com" target="_blank">
              saebalam123@gmail.com
            </a>
            {copied.email ? <span>Copied</span> : ""}
            <FontAwesomeIcon
              icon={faCopy}
              title="copy"
              style={{ position: "absolute", right: "5px", cursor: "pointer" }}
              onClick={() => copyToClipboard("email")}
            />
          </div>
          <div className="mobile">
            <FontAwesomeIcon icon={faPhone} />
            <p>(+91) 8789302507</p>
            {copied.number ? <span>Copied</span> : ""}
            <FontAwesomeIcon
              icon={faCopy}
              title="copy"
              style={{ position: "absolute", right: "5px", cursor: "pointer" }}
              onClick={() => copyToClipboard("number")}
            />
          </div>
          <div className="linkedin">
            <FontAwesomeIcon icon={faLinkedin} />
            <a href="https://www.linkedin.com/in/saebalam/" target="_blank">
              Saeb Alam
            </a>
          </div>
          <div className="location">
            <FontAwesomeIcon icon={faLocationDot} />
            <p>
              Bengaluru <br /> <p>Karnataka, IN</p>
            </p>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </div>
  );
};

export default Contact;
