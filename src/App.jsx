import React, { useState } from "react";
import "./index.css";
import Navigation from "./components/Navigation";
import hero from "./assets/images/image-hero-desktop.jpg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="cf-container">
      <Navigation />
      <section className="hero-container">
        <img className="hero-image" src={hero} alt="hero-image" />
      </section>

      <section className="cf-items">
        {/* Introduction */}
        <section className="cf-intro">
          <h2>Mastercraft Bamboo Monitor Riser</h2>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <button>Back this product</button>
          <div className="bookmark-items">
            <img src="" alt="" />
            <p>Bookmark</p>
          </div>
        </section>

        {/* Crowdfund Data */}
        <section className="cf-data">
          <article className="data-list">
            {/* $$$ Backed | # of Backers | # days left */}
          </article>
          <article className="progress-bar">
            <div className="curr-progress">{/* Current Progress Bar */}</div>
            <div className="total-progress">{/* Total Progress Bar */}</div>
          </article>
        </section>

        {/* About Section */}
        <section className="cf-about">
          <article className="about-intro">
            <h2>About this product</h2>
            <p>
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p>
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </article>

          <section className="pledge-list"></section>
        </section>
      </section>
    </div>
  );
}

export default App;
