import React from "react";
import "./about.css";
import SocialContact from "../../common/social-contact/index";

function About() {
  return (
    <div className="about z-50">
      <div className="about-top">
        <div className="about-info animate__animated animate__fadeInLeft">
          Hi There👋🏻,
          <br /> <span className="info-name">I am Dheerendra</span>.
          <br /> Frontend Developer
        </div>
        <div className="about-photo animate__animated animate__fadeInRight ">
          <img
            alt=""
            src={require("../../../assets/coding.png")}
            className="picture"
          />
        </div>
      </div>
      <SocialContact />
    </div>
  );
}

export default About;
