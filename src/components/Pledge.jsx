import React, { useState } from "react";

function Pledge({ pledge, handleBack }) {
  const pledgeBtn =
    pledge.remaining > 0 ? (
      <button className="pledge-btn btn pledgeable" onClick={handleBack}>
        Select Reward
      </button>
    ) : (
      <button className="pledge-btn btn disabled" disabled={true}>
        Out of Stock
      </button>
    );
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
