import React from "react";
import hero from "../assets/images/image-hero-desktop.jpg";

function Hero() {
  return (
    <section className="hero-container">
      <img className="hero-image" src={hero} alt="hero-image" />
    </section>
  );
}

export default Hero;
