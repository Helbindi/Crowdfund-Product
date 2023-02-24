import React, { useState } from "react";
import close from "../assets/images/icon-close-modal.svg";

function Back({ pledges, handleBack }) {
  const [selected, setSelected] = useState();

  function handleChange(e) {
    setSelected(e.target.value);
  }
  return (
    <div className="back-container">
      <section className="back-pledge">
        <img
          className="back-close"
          src={close}
          alt="close-btn"
          onClick={handleBack}
        />
        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <section className="back-items">
          <article className="pledge-item">
            <input
              type="radio"
              name="pledge-type"
              id="0"
              value="0"
              onChange={(e) => handleChange(e)}
            />
            <label for="0">Pledge with no reward</label>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to recieve product
              updates via email.
            </p>
            {selected == 0 && (
              <button className="pledge-btn pledgeable">Select Reward</button>
            )}
          </article>
          {pledges.map((pledge) => (
            <article
              className={`pledge-item ${
                pledge.remaining > 0 ? "" : "out-of-stock"
              }`}
            >
              <input
                type="radio"
                name="pledge-type"
                id={pledge.baseCost}
                value={pledge.baseCost}
                disabled={pledge.remaining <= 0}
                onChange={(e) => handleChange(e)}
              />
              <label for={pledge.baseCost}>{pledge.name}</label>
              <p className="pledge-cost">Pledge ${pledge.baseCost} or more</p>
              <p>{pledge.desc}</p>
              <h2>
                <strong>{pledge.remaining}</strong> left
              </h2>
              {selected == pledge.baseCost &&
                (pledge.remaining > 0 ? (
                  <button className="pledge-btn pledgeable">
                    Select Reward
                  </button>
                ) : (
                  <button className="pledge-btn disabled" disabled="true">
                    Out of Stock
                  </button>
                ))}
            </article>
          ))}
        </section>
      </section>
    </div>
  );
}

export default Back;
