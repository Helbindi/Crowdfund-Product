import React from "react";
import Card from "./Card";

function Progress({ data }) {
  let current = Number(data.money.current);
  let target = Number(data.money.target);
  let percentReached = Math.round((current / target) * 100);

  return (
    <Card>
      <article className="data-list">
        <div className="data-item">
          <h2>${data.money.current.toLocaleString("en-US")}</h2>
          <p>of ${data.money.target.toLocaleString("en-US")} backed</p>
        </div>
        <hr />
        <div className="data-item">
          <h2>{data.backers}</h2>
          <p>total backers</p>
        </div>
        <hr />
        <div className="data-item">
          <h2>{data.daysRemaining}</h2>
          <p>days left</p>
        </div>
      </article>
      <article className="progress-bar">
        <div
          className="current progress"
          style={{ width: `${percentReached}%` }}
        >
          {/* Current Progress Bar */}
        </div>
        <div className="total progress">{/* Total Progress Bar */}</div>
      </article>
    </Card>
  );
}

export default Progress;
