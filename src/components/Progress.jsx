import React from "react";

function Progress() {
  return (
    <section className="cf-data">
      <article className="data-list">
        {/* $$$ Backed | # of Backers | # days left */}
      </article>
      <article className="progress-bar">
        <div className="curr-progress">{/* Current Progress Bar */}</div>
        <div className="total-progress">{/* Total Progress Bar */}</div>
      </article>
    </section>
  );
}

export default Progress;
