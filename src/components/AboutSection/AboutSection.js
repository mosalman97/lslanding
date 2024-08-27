import React from "react";
import "./AboutSection.css"; // Add custom styles here

import AboutBg from "../../assets/images/aboutbg.jpg";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2>About Louna</h2>
      <p>
        LOUNA Books is a pioneering film production company with a rich history
        of innovation<br></br>and creativity. Our mission is to bring stories to
        life through cutting-edge technology <br></br>and passionate
        storytelling.
      </p>
      <img src={AboutBg} alt="Company Overview" />
    </section>
  );
}

export default AboutSection;
