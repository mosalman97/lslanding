import React from "react";
import "./SetSection.css"; // Add custom styles here

import LivingRoomSet from "../../assets/images/setone.png";
import KitchenSet from "../../assets/images/settwo.png";

function SetsSection() {
  const ourSets = [
    {
      id: "livigroom",
      title: "The Living Room Set",
      desc: "A cozy and versatile set ideal for talk shows and intimate scenes.",
      image: LivingRoomSet,
    },
    {
      id: "kitchenset",
      title: "The Kitchen Set",
      desc: "Perfect for cooking shows and culinary demonstrations.",
      image: KitchenSet,
    },
  ];
  return (
    <section id="sets" className="sets-section">
      <h2>Our Sets</h2>
      <p>Explore our diverse and dynamic production sets.</p>
      <div className="sets-grid">
        {ourSets.map((item) => {
          return (
            <div className="set-card" key={item.id}>
              <img src={item.image} alt="Living Room Set" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SetsSection;
