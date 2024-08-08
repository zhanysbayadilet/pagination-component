import React from 'react';
import {usePagination} from '../../hooks/usePagination';
import './Pagination.scss';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import arrowsRight from '../../assets/icons/arrows-right.svg';
import arrowsLeft from '../../assets/icons/arrows-left.svg';
import Icon from "../Icon/Icon";

interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    stepSize?: number;
    loop?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
                                                   totalItems,
                                                   itemsPerPage,
                                                   stepSize = 3,
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
    } = usePagination({totalItems, itemsPerPage, loop});

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
                <Icon src={arrowLeft} alt="Previous" />
            </button>
            <button onClick={() => goPreviousMultiple(stepSize)} disabled={!loop && currentPage <= 5}>
                <Icon src={arrowsLeft} alt="Previous Multiple" />
            </button>
            <div className="page-numbers">{renderPageNumbers()}</div>
            <button onClick={() => goNextMultiple(stepSize)} disabled={!loop && currentPage >= totalPages - 5}>
                <Icon src={arrowsRight} alt="Next Multiple" />
            </button>
            <button onClick={goNext} disabled={!loop && currentPage === totalPages}>
                <Icon src={arrowRight} alt="Next" />
            </button>
        </div>
    );
};

export default Pagination;
