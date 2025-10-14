import React, { useState } from "react";

import CardContainer from "./CardContainer";

import "../Styles/Vault.scss";

export default function Vault() {

  const [selectedTiers, updateSelectedTiers] = useState([]);
  const [selectedWoods, updateSelectedWoods] = useState([]);

  const defaultTiers = [
    "1 (Craftsman)",
    "2 (Artisan)",
    "3 (Master)"
  ];

  const defaultWoods = [
    "Rosewood",
    "Ebony",
    "Mahogany",
    "Granadillo",
    "Pau Ferro",
    "Bubinga",
    "Blackwood",
    "Maple",
    "Phoebe",
    "Cocobolo",
    "Acacia",
    "Canarywood",
    "Chechen",
    "Koa",
    "Leopardwood",
    "Purpleheart",
    "Sapele",
    "Walnut",
    "Ziricote",
    "Bay Laurel",
    "Birch",
    "Bocote",
    "Cherry",
    "Chestnut",
    "Ebiara",
    "Kingwood",
    "Marblewood",
    "Prima Vera",
    "Satinwood",
    "Zebrawood",
    "Redwood",
    "Spruce",
    "Cedar"
  ];

  const toggleTierOption = (tier) => {
    updateSelectedTiers((prev) => {
      return prev.includes(tier)
        ? prev.filter((v) => v !== tier)
        : [...prev, tier]
    })
  };

  const toggleWoodOption = (wood) => {
    updateSelectedWoods((prev) => {
      return prev.includes(wood)
        ? prev.filter((v) => v !== wood)
        : [...prev, wood]
    })
  };

  return (
    <>
      <div className="body-container">
        <div className="hero-slideshow">
          <div className="slide slide3"></div>
          <div className="slide slide4"></div>
          <div className="slide slide5"></div>
        </div>
        <div className="pitch-outer-container">
          <h2>The finest, most premium-quality guitar wood in the state of Texas</h2>
          <div className="pitch-text">At Pronske Guitars, we pride ourselves in sourcing and collecting some of the highest quality woods from around the world.</div>
          <div className="pitch-text">Each piece in our inventory has a deep history behind it, and our goal is to tell that story while adding you to the next chapter!</div>
          <div className="pitch-text">Search through The Vault below and select any piece that catches your eye</div>
        </div>
        <div className="vault-outer-container">
          <div className="vault-filter-select-container">
            <div className="vault-filter-title">filter options</div>
            <div className="vault-filter-inner-container">
              <div>TIER</div>
              {defaultTiers.map((tier) => {
                return (
                  <label key={tier}>
                    <input
                      type="checkbox"
                      checked={selectedTiers.includes(tier)}
                      onChange={() => toggleTierOption(tier)}
                    />
                    {tier}
                  </label>
                )
              })}
            </div>
            <div className="vault-filter-inner-container">
              <div>WOOD</div>
              {defaultWoods.map((wood) => {
                return (
                  <label key={wood}>
                    <input
                      type="checkbox"
                      checked={selectedWoods.includes(wood)}
                      onChange={() => toggleWoodOption(wood)}
                    />
                    {wood}
                  </label>
                )
              })}
            </div>
          </div>
          <CardContainer selectedTiers={selectedTiers} selectedWoods={selectedWoods} />
        </div>
      </div>
    </>
  );
}
