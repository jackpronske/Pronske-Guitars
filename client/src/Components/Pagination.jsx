import React from 'react';

import { useFilters } from '../hooks/useFilters';

import "../Styles/Pagination.scss";

export default function Pagination({ totalPages }) {
    const { page, limit, set } = useFilters();

    const handleLimitChange = (e) => {
        set({
            limit: e.target.value,
            page: 1,
        })
    }

    const setPage = (value) => {
        set({ page: value });

        document.getElementById("vault-card-container")?.scrollIntoView({
            behavior: "smooth",
        });
    }

    const handlePaginationChange = (e) => {
        set({ page: e.target.value })

        document.getElementById("vault-card-container")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const prev = page != 1 && <>
        <div
            onClick={(e) => {
                e.preventDefault();
                setPage(1)
            }
            }
            className='page-select-arrow'
        >
            &lt;&lt;
        </div>
        <div
            onClick={(e) => {
                e.preventDefault();
                setPage(Math.max(page - 1, 1))
            }
            }
            className='page-select-arrow'
        >
            &lt;
        </div>
    </>;

    const next = page != totalPages && <>
        <div
            onClick={(e) => {
                e.preventDefault();
                setPage(Math.min(page + 1, totalPages))
            }
            }
            className='page-select-arrow'
        >
            &gt;
        </div>
        <div
            onClick={(e) => {
                e.preventDefault();
                setPage(totalPages)
            }
            }
            className='page-select-arrow'
        >
            &gt;&gt;
        </div>
    </>;

    return (totalPages > 0 &&
        <div className='pagination-container'>
            <select name='limit' value={limit} onChange={handleLimitChange}>
                <option defaultValue value='20'>20</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
            </select>
            <div className='page-select-container'>
                {prev}
                <select name='page' onChange={handlePaginationChange} value={page}>
                    {[...Array(totalPages)].map((_, i) => (
                        <option key={i} value={i + 1}>
                            {i + 1}
                        </option>
                    ))}
                </select>
                <div>of {totalPages}</div>
                {next}
            </div>
        </div>
    )
}