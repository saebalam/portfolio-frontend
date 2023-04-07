import React, { useState } from "react";
import Sample from "../../Assets/Images/contact-us.jpg";
import line from "../../Assets/Images/fancy-line.png";
import "./card.css";
import jwt from "../../Assets/Images/jwt.png";

const Card = (props) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card">
      <div className="front-back">
        <div className="front">
          <div className="card-img">
            <img src={props.img} alt="" />
          </div>
          {/* <div className="card-info">
            <p className="about">{props.name}</p>

            <a className="link" href={props.link} target="_blank">
              visit
            </a>
          </div> */}
        </div>
        <div className="back">
          <div className="card-img-back">
            <img src={props.imgback} alt="" />
          </div>
          <div className="card-info">
            <p className="card-info-about">{props.name}</p>

            <a className="link" href={props.link} target="_blank">
              visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
