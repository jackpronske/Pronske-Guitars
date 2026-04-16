import React from 'react';
import { useFilters } from '../hooks/useFilters';

import "../Styles/FiltersContainer.scss";

import inventory from '../lists/inventory_04_05.json';

export default function FiltersContainer({ handleToggle, toggleDisplayFavoritesOnly, displayFavoritesOnly }) {
    const { tier, wood, tag, set } = useFilters();

    const setFilter = (e) => {
        const { name, value } = e.target;
        set({ [name]: value, page: 1 });

        document.getElementById("vault-card-container")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const resetFilters = (e) => {
        e.preventDefault();
        set({
            wood: '',
            tier: '',
            tag: '',
            page: 1,
            limit: 20,
        })

        toggleDisplayFavoritesOnly(false);

        document.getElementById("vault-card-container")?.scrollIntoView({
            behavior: "smooth",
        });
    }

    const handleFavoritesToggle = () => {
        toggleDisplayFavoritesOnly(!displayFavoritesOnly);
    }

    return (<>
        <div className='filter-container'>
            <div className="filter-close" onClick={handleToggle}>✕</div>
            <h2>Filter Options</h2>
            <div className="checkbox-row">
                <input type="checkbox" checked={displayFavoritesOnly} onChange={handleFavoritesToggle} />
                <label>Favorites</label>
            </div>
            <div className='filter-group'>
                <label>Tier</label>
                <select
                    name='tier'
                    value={tier}
                    onChange={setFilter}
                >
                    <option value="" defaultValue></option>
                    {inventory.tiers.map((tier) => (<option value={tier} key={tier} >{tier}</option>))}
                </select>

            </div>
            <div className='filter-group'>
                <label>Wood</label>
                <select
                    name='wood'
                    value={wood}
                    onChange={setFilter}
                >
                    <option value="" defaultValue></option>
                    {inventory.woods.map((wood) => (<option value={wood} key={wood} >{wood}</option>))}
                </select>
            </div>
            <div className='filter-group'>
                <label>Tags</label>
                <select
                    name='tag'
                    value={tag}
                    onChange={setFilter}
                >
                    <option value="" defaultValue></option>
                    {inventory.tags.map((tag) => (<option value={tag} key={tag} >{tag}</option>))}
                </select>
            </div>
            <button
                className="clear-btn"
                onClick={resetFilters}
            >
                Clear
            </button>
        </div>
    </>);
}
