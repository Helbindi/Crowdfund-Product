import React from "react";
import icon from "../assets/images/logo-mastercraft.svg";
import bookmark from "../assets/images/icon-bookmark.svg";

function Introduction() {
  return (
    <section className="cf-intro">
      <img className="product-icon" src={icon} alt="mastercraft-icon" />
      <h2 className="product-name">Mastercraft Bamboo Monitor Riser</h2>
      <p className="intro-desc">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="product-group">
        <button className="back-btn">Back this product</button>
        <div className="bookmark-items">
          <img className="bookmark-img" src={bookmark} alt="" />
          <p className="bookmark-title">Bookmark</p>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
