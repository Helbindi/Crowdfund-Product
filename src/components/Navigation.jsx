import React, { useState } from "react";
import menu from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close-menu.svg";

function Navigation() {
  const [isToggled, setIsToggled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleImg = isToggled ? close : menu;

  function handleToggle(e) {
    e.preventDefault();
    if (isToggled) {
      setIsToggled(false);
    } else {
      setIsToggled(true);
    }

    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }
  return (
    <header className="nav-header">
      <h2>crowdfund</h2>
      <img
        className="mobile-nav-toggle"
        src={toggleImg}
        alt="nav-toggle-image"
        aria-expanded={isToggled}
        onClick={(e) => handleToggle(e)}
      />
      <nav>
        <ul className="nav-list" data-visible={isVisible}>
          <li className="nav-item">About</li>
          <li className="nav-item">Discover</li>
          <li className="nav-item">Get Started</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
