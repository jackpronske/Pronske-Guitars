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
          <div className="slide slide4"></div>
          <div className="slide slide5"></div>
        </div>
        <div className="pitch-outer-container">
          <h2>The finest, most premium-quality guitar wood in the state of Texas</h2>
          <div className="pitch-text">At Pronske Guitars, we pride ourselves in sourcing and collecting some of the highest quality woods from around the world.</div>
          <div className="pitch-text">Each piece in our inventory has a deep history behind it, and our goal is to tell that story while adding you to the next chapter!</div>
        </div>
        <div className="vault-outer-container">
          <div className="vault-filter-select-container">
            <div className="vault-filter-title">filter options</div>
            <div className="vault-filter-inner-container">
              <div>TIER</div>
              <label>
                <input
                  type="checkbox"
                // checked="false"
                // onChange={() => toggleCheckbox(!checkbox)}
                />
                1 (Craftsman)
              </label>
              <label>
                <input
                  type="checkbox"
                // checked="false"
                // onChange={() => toggleCheckbox(!checkbox)}
                />
                2 (Artisan)
              </label>
              <label>
                <input
                  type="checkbox"
                // checked="false"
                // onChange={() => toggleCheckbox(!checkbox)}
                />
                3 (Master)
              </label>
            </div>
            <div className="vault-filter-inner-container">
              <div>WOOD</div>
              <label>
                <input
                  type="checkbox"
                // checked="false"
                // onChange={() => toggleCheckbox(!checkbox)}
                />
                Rosewood
              </label>
              <label>
                <input
                  type="checkbox"
                // checked="false"
                // onChange={() => toggleCheckbox(!checkbox)}
                />
                Ebony
              </label>
              <label>
                <input
                  type="checkbox"
                // checked="false"
                // onChange={() => toggleCheckbox(!checkbox)}
                />
                Mahagony
              </label>
              <label>
                <input
                  type="checkbox"
                // checked="false"
                // onChange={() => toggleCheckbox(!checkbox)}
                />
                Granadillo
              </label>
              <label>
                <input
                  type="checkbox"
                // checked="false"
                // onChange={() => toggleCheckbox(!checkbox)}
                />
                Pau Ferro
              </label>
            </div>
          </div>
          <div className="vault-list-container">
            <div className="vault-list-item">
              <div>image</div>
              <div>wood name here</div>
            </div>
            <div className="vault-list-item"></div>
            <div className="vault-list-item"></div>
            <div className="vault-list-item"></div>
            <div className="vault-list-item"></div>
            <div className="vault-list-item"></div>
            <div className="vault-list-item"></div>
            <div className="vault-list-item"></div>
          </div>
        </div>
      </div>
    </>
  );
}
