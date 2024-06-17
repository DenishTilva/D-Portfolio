/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import profileimg from "../../../assets/removed bg.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  
  return (
    <div id="home" className="hero">
      <img src={profileimg} alt="" />
      <h1>
        <span>I'm a Denish Patel,</span>MEAN/MERN FULL STACK DEVELOPER.
      </h1>
      <p>
        {" "}
        I am a UI/UX Full Stack Developer,Recently I have completed MERN Full
        Stack Training Program{" "}
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact With Me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
