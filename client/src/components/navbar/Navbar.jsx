import React from "react";
import { Link } from "react-router-dom";
import {MdOutlinePhoneInTalk } from 'react-icons//md';
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="containerNav">
      <div className="navbar">
        <div className="navbar__left">
          <img
            src="https://preview.colorlib.com/theme/course/images/logo.png.webp"
            alt="logo"
          />
          <p className="navbar__title">COURSE</p>
        </div>
        <div className="navbar__middle">
        <Link to="/" className="navbar__middle__link">Home </Link>
        <Link to="/add" className="navbar__middle__link">Add Student</Link>
        <Link to="/fav" className="navbar__middle__link">Favorite</Link>
        </div>
        <div className="navbar__right">
        <MdOutlinePhoneInTalk className="navbar__right__icon"/>
        <p className="navbar__right__number">+43 4566 7788 2457
        </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
