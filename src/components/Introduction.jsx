import React, { useState } from "react";
import Card from "./Card";
import icon from "../assets/images/logo-mastercraft.svg";
import bookmark from "../assets/images/icon-bookmark.svg";
import bookmarked from "../assets/images/bookmarked.svg";

function Introduction({ handleBack }) {
  const [isBookmark, setIsBookmark] = useState(false);

  const bookmarkImg = isBookmark ? bookmarked : bookmark;

  function handleClick(e) {
    e.preventDefault();
    isBookmark ? setIsBookmark(false) : setIsBookmark(true);
  }
  return (
    <Card>
      <img className="product-icon" src={icon} alt="mastercraft-icon" />
      <h2 className="product-title">Mastercraft Bamboo Monitor Riser</h2>
      <p className="intro-desc">
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="product-group">
        <button className="back-btn" onClick={handleBack}>
          Back this product
        </button>
        <div
          className={
            isBookmark ? `bookmark-items bookmarked` : `bookmark-items`
          }
          onClick={handleClick}
        >
          <img className="bookmark-img" src={bookmarkImg} alt="" />
          <p className="bookmark-title">
            {isBookmark ? "Bookmarked" : "Bookmark"}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Introduction;
