import React from "react";
import "./Footer.css"; // Add custom styles here

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2022 Brand, Inc. Privacy · Terms · Sitemap</p>
        <div className="social-media">{/* Add social media links here */}</div>
      </div>
    </footer>
  );
}

export default Footer;
