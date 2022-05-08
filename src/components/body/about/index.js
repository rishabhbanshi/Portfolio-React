import React, { useState, useEffect } from "react";
import "./about.css";
import logo from "../../../assets/Coding.gif";
import logo2 from "../../../assets/Coding-dark.gif";
import coffee from "../../../assets/coffee.gif";
import SocialContact from "../../common/social-contact";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There 👋 ,You have just reached to a portfolio website of
          another <br />
          <span className="info-name">Programmer!</span> <br />
          Well if you are here might as well have a look ! :D
        </div>
        <div className="about-photo">
          <img src={logo2} className="info-gif" alt="No pics" />
        </div>
      </div>
      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
}

export default About;
