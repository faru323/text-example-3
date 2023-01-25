import React from "react";
import "./footer.scss";
import { BsTwitter, BsPinterest } from "react-icons//bs";
import { FaFacebookF } from "react-icons//fa";
import { AiOutlineInstagram } from "react-icons//ai";
import { GrLinkedinOption } from "react-icons//gr";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer__left">
          <p className="footer__left__text">
            Copyright ©2023 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
        <div className="footer__right"> <BsPinterest className="footer__right__icons" />
        <GrLinkedinOption className="footer__right__icons" />
        <AiOutlineInstagram className="footer__right__icons" />
        <FaFacebookF className="footer__right__icons" />
        <BsTwitter className="footer__right__icons" /></div>
       
      </div>
    </div>
  );
};

export default Footer;
