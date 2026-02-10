import React, { useState } from 'react';
import VaultModal from './VaultModal';
import Form from './Form';

import "../Styles/CardContainer.scss";

import data from '../lists/inventory_02_09.json';

export default function CardContainer({ selectedTiers, selectedWoods }) {

  const [modalOpenStatus, setModalOpenStatus] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ entry_name: '', sid: '', tags: '' });
  const [showFormModal, setFormModalStatus] = useState(false);

  const handleClick = (item) => {
    setSelectedItem(item);
    setModalOpenStatus(true);
  }

  const openOtherModal = () => {
    setModalOpenStatus(false);
    setFormModalStatus(true);
  }

  const filteredData = data.filter((item) => {
    const tierMatch =
      selectedTiers.length === 0 || selectedTiers.includes(item.tier);

    const woodMatch =
      selectedWoods.length === 0 ||
      selectedWoods.some((wood) =>
        item.entry_name.toLowerCase().includes(wood.toLowerCase())
      );

    return tierMatch && woodMatch;
  });

  return (
    <>
      <div className="vault-card-container">
        {filteredData.length !== 0
          ? filteredData.map(item => (
            <div
              key={item.sid}
              className="vault-card"
              onClick={() => { handleClick(item) }}
            >
              <img className="vault-card-img" src={"images/vault/inventory_images_02_09/" + item.sid + ".jpg"} alt={item.entry_name} />
              <div className="vault-card-content">{item.entry_name}</div>
            </div>
          ))
          :
          <div>
            Please try a different selection of options!
          </div>}
      </div>
      <VaultModal isOpen={modalOpenStatus} onClose={() => { setModalOpenStatus(false) }}>
        {/* <div>
          <div>{selectedItem.entry_name}</div>
          <div>{selectedItem.sid}</div>
          <div>{selectedItem.tags}</div>
        </div> */}
        {/* <MoreInfo selectedItem={selectedItem} /> */}
        <div className={"vault-modal-container"}>
          <img className="vault-modal-img" src={"/images/vault/inventory_images_02_09/" + selectedItem.sid + ".jpg"} alt={selectedItem.entry_name} />
          <div>{selectedItem.entry_name}</div>
          <div>{selectedItem.sid}</div>
          <div>{selectedItem.tags}</div>
          <button onClick={openOtherModal}>Let's talk!</button>
        </div>
      </VaultModal>
      <VaultModal isOpen={showFormModal} onClose={() => { setFormModalStatus(false) }}>
        <>
          <Form autoFill={`I'm interested in ${selectedItem.entry_name}, ${selectedItem.sid}!`} />
        </>
      </VaultModal>
    </>
  );
}