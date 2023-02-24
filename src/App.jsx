import React, { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Progress from "./components/Progress";

function App() {
  const [pledge, setPledge] = useState({
    money: {
      current: 89914,
      target: 100000,
    },
    backers: 5007,
    daysRemaining: 56,
  });

  return (
    <div className="cf-container">
      <Navigation />
      <Hero />

      <section className="cf-items">
        <Introduction />
        <Progress pledge={pledge} />
      </section>
    </div>
  );
}

export default App;
