import React, { useState } from "react";

function Pledge({ pledge }) {
  const [isActive, setIsActive] = useState(false);

  const pledgeBtn =
    pledge.remaining > 0 ? (
      <button
        className="pledge-btn pledgeable"
        onClick={(e) => handleActive(e)}
      >
        Select Reward
      </button>
    ) : (
      <button className="pledge-btn disabled" disabled="true">
        Out of Stock
      </button>
    );

  function handleActive(e) {
    e.preventDefault();
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }
  return (
    <article
      className={`pledge-item ${pledge.remaining > 0 ? "" : "out-of-stock"}`}
    >
      <p className="pledge-name">{pledge.name}</p>
      <p className="pledge-cost">Pledge ${pledge.baseCost} or more</p>
      <p>{pledge.desc}</p>
      <h2>
        <strong>{pledge.remaining}</strong> left
      </h2>
      {pledgeBtn}
    </article>
  );
}

export default Pledge;
