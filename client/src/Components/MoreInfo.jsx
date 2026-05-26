import React, { useState } from "react";
import VaultModal from './VaultModal';
import Form from './Form';

export default function MoreInfo({ selectedItem }) {
    const [showModal, setModalStatus] = useState(false);

    return (
        <>
            <img src={"/images/vault/inventory_images_05_26_2026/" + selectedItem.sku + ".jpg"} alt={selectedItem.entry_name} />
            <div>{selectedItem.entry_name}</div>
            <div>{selectedItem.sku}</div>
            <div>{selectedItem.tags}</div>
            <button onClick={() => { setModalStatus(true) }}>Let's talk!</button>
            {showModal ? <VaultModal>
                <>
                    <div>hi</div>
                </>
            </VaultModal> : null}
        </>
    )
}