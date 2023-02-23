import React, { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import hero from "./assets/images/image-hero-desktop.jpg";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="cf-container">
      <Navigation />
      <Hero />

      <section className="cf-items"></section>
    </div>
  );
}

export default App;
