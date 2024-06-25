import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo.svg";

const NavBar = () => {
  return (
    <div className="NavBar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default NavBar;
