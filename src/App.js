import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SetsSection from "./components/SetSection/SetSection";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServiceSection/ServiceSection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <SetsSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default App;
