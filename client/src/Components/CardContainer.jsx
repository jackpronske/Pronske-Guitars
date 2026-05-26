import React, { useState, useMemo } from 'react';
import VaultModal from './VaultModal';
import Form from './Form';
import Pagination from './Pagination';
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";

import { useFilters } from '../hooks/useFilters';

import "../Styles/CardContainer.scss";

import inventoryList from '../lists/inventory_05_26.json';

export default function CardContainer({ displayFavoritesOnly }) {
  const { wood, tier, tag, limit, page } = useFilters();
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });

  const data = inventoryList.inventoryObj;

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const updated = prev.includes(id)
        ? prev.filter(f => f !== id)
        : [...prev, id];

      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  };

  const filtered = useMemo(() => {
    return data.filter(w => {
      if (wood && !w.wood.includes(wood)) return false;
      if (tier && w.tier !== tier) return false;
      if (tag && !w.tags.includes(tag)) return false;
      if (displayFavoritesOnly && !favorites.includes(w.sku)) return false;

      return true;
    });
  }, [wood, tier, tag, displayFavoritesOnly, favorites]);

  const paginated = useMemo(() => {
    const start = (page - 1) * limit;
    return filtered.slice(start, start + limit);
  }, [filtered, limit, page]);


  const [modalOpenStatus, setModalOpenStatus] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ wood: '', sku: '', tags: [] });
  const [showFormModal, setFormModalStatus] = useState(false);

  const handleClick = (item) => {
    setSelectedItem(item);
    setModalOpenStatus(true);
  }

  const openOtherModal = () => {
    setModalOpenStatus(false);
    setFormModalStatus(true);
  }

  return (
    <>
      <div id='vault-card-container' className="vault-card-container">
        {paginated.length !== 0
          ? paginated.map(item => (
            <div
              key={item.sku}
              className="vault-card"
              onClick={() => { handleClick(item) }}
            >
              <img
                className="vault-card-img"
                src={"images/vault/inventory_images_05_26_2026/" + item.sku + ".jpg" || "/images/Fallback_Vault_Image.png"}
                alt={item.wood}
                onError={(e) => {
                  e.currentTarget.src = "/images/Fallback_Vault_Image.png";
                }} />
              <div className="vault-card-content">
                <div className="vault-card-text">{item.wood}</div>
                <div
                  className="vault-card-favorite-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(item.sku);
                  }
                  }
                >
                  {favorites.includes(item.sku) ?
                    <TiStarFullOutline /> :
                    <TiStarOutline />
                  }
                </div>
              </div>
            </div>
          ))
          :
          <div>
            Please try a different selection of options!
          </div>}
      </div >
      <Pagination totalPages={Math.ceil(filtered.length / limit)} />
      <VaultModal isOpen={modalOpenStatus} onClose={() => { setModalOpenStatus(false) }}>
        <div className="vault-modal-container">
          <div className="vault-modal-box box-a">
            <img
              className="vault-modal-img"
              src={"/images/vault/inventory_images_05_26_2026/" + selectedItem.sku + ".jpg" || "/images/Fallback_Vault_Image.png"}
              alt={selectedItem.wood}
              onError={(e) => {
                e.currentTarget.src = "/images/Fallback_Vault_Image.png";
              }} />
          </div>
          <div className="vault-modal-box box-b">
            <div className='vault-modal-info-container'>
              <div className='vault-modal-title-text'>{selectedItem.wood}</div>
              <div>{selectedItem.tags.join(", ")}</div>
              <div className="vault-modal-interested">
                <div>Interested?</div>
                <button onClick={openOtherModal}>Let's talk!</button>
              </div>
            </div>
            <div className="vault-info-footer">
              <div
                className="vault-card-favorite-icon"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(selectedItem.sku);
                }
                }
              >
                {favorites.includes(selectedItem.sku) ?
                  <TiStarFullOutline /> :
                  <TiStarOutline />
                }
              </div>
              <div>{selectedItem.sku}</div>
            </div>
          </div>
        </div>
      </VaultModal>
      <VaultModal isOpen={showFormModal} onClose={() => { setFormModalStatus(false) }}>
        <>
          <Form autoFill={`I'm interested in ${selectedItem.wood}, ${selectedItem.sku}!`} />
        </>
      </VaultModal>
    </>
  );
}