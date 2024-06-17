// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>
            {" "}
            <span>Denish</span>
          </h1>
          <p>I am a MEAN / MERN Full Stack Developer from Pune.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>@2024 Denish Patel. All Rights reserved.</p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
