import React, { useState, useRef, useEffect } from "react";
import close from "../assets/images/icon-close-modal.svg";

function Back({
  pledges,
  handleBack,
  setIsBacking,
  updateData,
  updatePledges,
  setIsSubmitted,
}) {
  const [selected, setSelected] = useState();
  const [pledgeAmount, setPledgeAmount] = useState();
  const topRef = useRef();

  function handleSelect(e) {
    setSelected(e.target.value);
    setPledgeAmount(e.target.value);
  }

  function handleChange(e) {
    e.preventDefault();
    setPledgeAmount(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let pledge;
    if (selected > 0) {
      pledge = pledges.filter((pledge) => {
        return pledge.baseCost == selected;
      });
    } else {
      pledge = [
        {
          name: "Pledge with no Reward",
          baseCost: 0,
          desc: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to recieve product updates via email.",
          remaining: null,
        },
      ];
    }
    updatePledges(pledge[0]);
    updateData(pledgeAmount);
    setIsBacking(false);
    setIsSubmitted(true);
  }

  useEffect(() => {
    topRef.current.scrollIntoView();
  }, []);
  return (
    <div className="back-container" ref={topRef}>
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
              value={0}
              onChange={(e) => handleSelect(e)}
            />
            <label htmlFor="0">Pledge with no reward</label>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to recieve product
              updates via email.
            </p>
            {selected == 0 && (
              <div className="pledge-amount">
                <p>Enter your pledge:</p>
                <form className="pledge-form" onSubmit={handleSubmit}>
                  <p>$</p>
                  <input
                    type="number"
                    name="pledge-value"
                    htmlFor="pledge-value"
                    id="0"
                    defaultValue={0}
                    min={0}
                    max={99999}
                    onInput={handleChange}
                  />
                  <input
                    className="submit-btn btn pledgeable"
                    type="submit"
                    value="Pledge"
                  />
                </form>
              </div>
            )}
          </article>
          {pledges?.map((pledge) => (
            <article
              key={pledge.name}
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
                onChange={(e) => handleSelect(e)}
              />
              <label htmlFor={pledge.baseCost}>{pledge.name}</label>
              <p className="pledge-cost">Pledge ${pledge.baseCost} or more</p>
              <p>{pledge.desc}</p>
              <h2>
                <strong>{pledge.remaining}</strong> left
              </h2>
              {selected == pledge.baseCost &&
                (pledge.remaining > 0 ? (
                  <div className="pledge-amount">
                    <p>Enter your pledge:</p>
                    <form className="pledge-form" onSubmit={handleSubmit}>
                      <p>$</p>
                      <input
                        type="number"
                        name="pledge-value"
                        htmlFor="pledge-value"
                        id={pledge.baseCost}
                        defaultValue={pledge.baseCost}
                        min={pledge.baseCost}
                        max={99999}
                        onInput={handleChange}
                      />
                      <input
                        className="submit-btn btn pledgeable"
                        type="submit"
                        value="Pledge"
                      />
                    </form>
                  </div>
                ) : (
                  <button className="submit-btn btn disabled" disabled="true">
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
