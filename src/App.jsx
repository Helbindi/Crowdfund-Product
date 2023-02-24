import React, { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="cf-container">
      <Navigation />
      <Hero />

      <section className="cf-items">
        <Introduction />
      </section>
    </div>
  );
}

export default App;
