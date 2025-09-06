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



  /* This is a version where each tier has a drop down. It's unfinished, as there would be cards for each user choice
  I have decided against this, as there were already only 4 Rosewood entries and it already felt overwhelming to remember which one
  I clicked, let alone 45 different entries
  */
  // const [value, setValue] = useState(null);
  // const filteredList = data.filter((obj) => obj.tier === tier);

  // return (
  //   <div>
  //     <select
  //       id="wood"
  //       value={value}
  //       onChange={e => setValue(e.target.value)}
  //     >
  //       {filteredList.map(item => (
  //         <option value={item.sid}>{item.unit_name}</option>
  //       ))}
  //     </select>
  //   </div>
  // );
}