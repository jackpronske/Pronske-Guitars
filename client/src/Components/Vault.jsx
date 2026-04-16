import React, { useState } from "react";

import CardContainer from "./CardContainer";
import FiltersContainer from "./FiltersContainer";

import "../Styles/Vault.scss";

export default function Vault() {
  const [displayFavoritesOnly, toggleDisplayFavoritesOnly] = useState(false);
  const [isOverlayVisible, toggleVisibility] = useState(false);

  const handleOverlayToggle = () => {
    toggleVisibility((current) => !current);
  }
  return (
    <>
      <div className={`body-container ${isOverlayVisible ? 'open' : null}`}>
        <div className="hero-slideshow">
          <div className="slide slide3"></div>
          <div className="slide slide4"></div>
          <div className="slide slide5"></div>
          <h1 className="hero-title">
            Welcome to the Vault
          </h1>
        </div>
        <div className="pitch-outer-container">
          <h2>At Pronske Guitars, we pride ourselves in sourcing the highest quality woods from around the world.</h2>
          <div className="pitch-text">Every board in The Vault is one of a kind. No two are alike, and none are ordinary.</div>
          <div className="pitch-text"> Each piece in our inventory has a deep history behind it, and our goal is to tell that story while adding you to the next chapter!</div>
          <div className="pitch-text">Search through The Vault below and select any piece that catches your eye.</div>
        </div>
        <div className="vault-outer-container">
          <button onClick={handleOverlayToggle} className="filter-trigger">☰</button>
          <CardContainer displayFavoritesOnly={displayFavoritesOnly} />
        </div>
        <div onClick={handleOverlayToggle} className="overlay"></div>
        <aside className="filter-drawer">
          <FiltersContainer handleToggle={handleOverlayToggle} toggleDisplayFavoritesOnly={toggleDisplayFavoritesOnly} displayFavoritesOnly={displayFavoritesOnly} />
        </aside>
      </div >
    </>
  );
}
