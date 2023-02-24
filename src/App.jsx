import React, { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Back from "./components/Back";
import Progress from "./components/Progress";
import About from "./components/About";

function App() {
  const [data, setData] = useState({
    money: {
      current: 89914,
      target: 100000,
    },
    backers: 5007,
    daysRemaining: 56,
  });

  const [pledges, setPledges] = useState([
    {
      name: "Bamboo Stand",
      baseCost: 25,
      desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
      remaining: 101,
    },
    {
      name: "Black Edition Stand",
      baseCost: 75,
      desc: "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
      remaining: 64,
    },
    {
      name: "Mahogany Special Edition",
      baseCost: 200,
      desc: "You get two Special Edition Mahogamy stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
      remaining: 0,
    },
  ]);

  const [isBacking, setIsBacking] = useState(false);

  function handleBack(e) {
    e.preventDefault();
    if (!isBacking) {
      setIsBacking(true);
    } else {
      setIsBacking(false);
    }
  }
  return (
    <div className="cf-container">
      <Navigation />
      <Hero />
      {isBacking && <Back pledges={pledges} handleBack={handleBack} />}

      <section className="cf-items">
        <Introduction handleBack={handleBack} />
        <Progress data={data} />
        <About pledges={pledges} />
      </section>
    </div>
  );
}

export default App;
