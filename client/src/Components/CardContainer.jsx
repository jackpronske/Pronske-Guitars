import React, { useState } from 'react';

import "../Styles/CardContainer.scss";

import data from '../lists/inventory.json';

export default function CardContainer({ tier, wood }) {

  const filteredList = data.filter((obj) => obj.tier === tier && (obj.unit_name).toLocaleLowerCase().includes(wood));

  return (
    <div className='card-container'>
      {filteredList.map(item => (
        <div key={item.sid} className="card">
          <img className="card-img" src={"/images/sku/" + item.sid + ".jpg"} alt={item.unit_name} />
          <div>{item.unit_name}</div>
          <div>{item.tags.join(", ")}</div>
        </div>
      ))}
    </div>
  );
}