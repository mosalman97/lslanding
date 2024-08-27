import React from "react";
import "./ServiceSection.css"; // Add custom styles here

import Film from "../../assets/images/film.png";
import Podcast from "../../assets/images/podcast.png";
import Virtual from "../../assets/images/visual.png";

const ourServices = [
  {
    id: "filmsetone",
    title: "Film Set 1",
    desc: "State-of-the-art film set equipped with the latest technology for high-quality production.",
    image: Film,
  },
  {
    id: "podcaststudio",
    title: "Podcast Studio",
    desc: "Professional podcast studio designed for clear sound and comfortable recording.",
    image: Podcast,
  },
  {
    id: "virtualstudio",
    title: "Virtual Studio",
    desc: "Green screen studio enabling real-time virtual production with limitless possibilities.",
    image: Virtual,
  },
  {
    id: "filmset2",
    title: "Film Set 2",
    desc: "Expansive set designed for large-scale film projects, offering flexibility and creativity.",
    image: Virtual,
  },
];

function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="services-grid">
        {ourServices.map((item) => {
          return (
            <div className="service-card" key={item.id}>
              <div className="service-card-right">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="view-more-button">
                  <p>View More</p>
                </div>
              </div>
              <div className="service-card-left">
                <img src={item.image} alt="film" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
