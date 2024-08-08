import React from 'react';
import {usePagination} from '../hooks/usePagination';
import './Pagination.scss';

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    siblingCount?: number;
    loop?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   totalItems,
                                                   itemsPerPage,
                                                   siblingCount = 1,
                                                   loop = false
                                               }) => {
    const {
        currentPage,
        totalPages,
        goNext,
        goPrevious,
        goNextMultiple,
        goPreviousMultiple,
        setPage
    } = usePagination({totalItems, itemsPerPage, siblingCount, loop});

    const renderPageNumbers = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`page-item ${currentPage === i ? 'active' : ''}`}
                    aria-current={currentPage === i ? 'page' : undefined}
                >
                    {i}
                </button>
            );
        }
        return pages;
    };

    return (
        <div className="pagination">
            <button onClick={goPrevious} disabled={!loop && currentPage === 1}>
                &laquo; Prev
            </button>
            <button onClick={() => goPreviousMultiple(5)} disabled={!loop && currentPage <= 5}>
                &laquo;&laquo; Prev 5
            </button>
            <div className="page-numbers">{renderPageNumbers()}</div>
            <button onClick={() => goNextMultiple(5)} disabled={!loop && currentPage >= totalPages - 5}>
                Next 5 &raquo;&raquo;
            </button>
            <button onClick={goNext} disabled={!loop && currentPage === totalPages}>
                Next &raquo;
            </button>
        </div>
    );
};

export default Pagination;
