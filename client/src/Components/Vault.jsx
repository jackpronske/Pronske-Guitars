import React, { useState } from "react";
import CardContainer from "./CardContainer";

import "../Styles/Vault.scss";

export default function Vault() {
  const [value, setValue] = useState('');

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
        <div className="tier-outer-container">
          <div>
            <select
              id="wood"
              value={value}
              onChange={e => setValue(e.target.value)}
            >
              <option value=''>Select a wood type</option>
              <option value="rosewood">Rosewood</option>
              <option value="ebony">Ebony</option>
              <option value="mahagony">Mahagony</option>
              <option value="granadillo">Granadillo</option>
              <option value="mahagony">Mahagony</option>
              <option value="pau ferro">Pau Ferro</option>
            </select>
          </div>
          <div className="tier-container">
            <h3>TIER 1 (Master)</h3>
            <div> ---from $20,000---</div>
            <CardContainer tier={1} wood={value} />
          </div>
          <div className="tier-container">
            <h3>TIER 2 (Artisan)</h3>
            <div> ---from $11,000---</div>
            <CardContainer tier={2} wood={value} />
          </div>
          <div className="tier-container">
            <h3>TIER 3 (Craftsman)</h3>
            <div> ---from $4,000---</div>
            <CardContainer tier={3} wood={value} />
          </div>
        </div>
      </div>
    </>
  );
}
