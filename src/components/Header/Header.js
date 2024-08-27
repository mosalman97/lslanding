import React from "react";
import "./Header.css"; // Add custom styles here

import LounaLogo from "../../assets/images/louna-logo-horizontal.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src={LounaLogo}
          style={{
            width: "120px",
            height: "40px",
          }}
          alt="louna-logo"
        />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#sets">Sets</a>
          </li>
          <li>
            <a href="#virtual-production">Virtual Production</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>
      <button className="contact-button">Get In Touch</button>
    </header>
  );
}

export default Header;
