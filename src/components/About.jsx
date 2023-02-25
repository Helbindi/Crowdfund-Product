import React from "react";
import Card from "./Card";
import Pledge from "./Pledge";

function About({ pledges, handleBack }) {
  return (
    <Card>
      <article className="about-section">
        <h2>About this product</h2>
        <p>
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </p>
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </article>

      <section className="pledge-list">
        {pledges?.map((pledge) => (
          <Pledge key={pledge.name} pledge={pledge} handleBack={handleBack} />
        ))}
      </section>
    </Card>
  );
}

export default About;
