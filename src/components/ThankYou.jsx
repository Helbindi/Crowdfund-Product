import React, { useEffect } from "react";
import check from "../assets/images/icon-check.svg";

function ThankYou({ setIsSubmitted }) {
  function handleClick(e) {
    e.preventDefault();
    setIsSubmitted(false);
  }

  useEffect(() => {
    document.body.scrollIntoView();
  }, []);
  return (
    <div className="thank-container">
      <section className="thank-prompt">
        <img src={check} alt="check-image" />
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our compaign is
          completed.
        </p>
        <button className="btn" onClick={(e) => handleClick(e)}>
          Got it!
        </button>
      </section>
    </div>
  );
}

export default ThankYou;
