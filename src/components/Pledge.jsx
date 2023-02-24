import React from "react";

function Pledge({ pledge }) {
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
      {pledge.remaining > 0 ? (
        <button className="pledge-btn pledgeable">Select Reward</button>
      ) : (
        <button className="pledge-btn disabled" disabled="true">
          Out of Stock
        </button>
      )}
    </article>
  );
}

export default Pledge;
