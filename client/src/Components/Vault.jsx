import React from "react";

import "../Styles/Vault.scss";

export default function Vault() {
  return (
    <>
      <div className="body-container">
        <div className="hero-slideshow">
          <div className="slide slide1"></div>
          <div className="slide slide2"></div>
          <div className="slide slide3"></div>
        </div>
        <div className="pitch-outer-container">
          <h2>The finest, most premium-quality guitar wood in the state of Texas</h2>
          <div className="pitch-text">At Pronske Guitars, we pride ourselves in sourcing and collecting some of the highest quality woods from around the world.</div>
          <div className="pitch-text">Each piece in our inventory has a deep history behind it, and our goal is to tell that story while adding you to the next chapter!</div>
        </div>
      </div>
    </>
  );
}
