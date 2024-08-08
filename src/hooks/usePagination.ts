import { useState } from 'react';
import Pagination from '../utils/PaginationClass';

interface UsePaginationProps {
    totalItems: number;
    itemsPerPage: number;
    loop?: boolean;
}

export const usePagination = ({
                                  totalItems,
                                  itemsPerPage,
                                  loop = false
                              }: UsePaginationProps) => {
    const [pagination] = useState(new Pagination(totalItems, itemsPerPage, loop));
    const [currentPage, setCurrentPage] = useState(pagination.getCurrentPage());
    const totalPages = pagination.getTotalPages();

    const goToPage = (page: number) => {
        pagination.goToPage(page);
        setCurrentPage(pagination.getCurrentPage());
    };

    const goNext = () => {
        pagination.goNext();
        setCurrentPage(pagination.getCurrentPage());
    };

    const goPrevious = () => {
        pagination.goPrevious();
        setCurrentPage(pagination.getCurrentPage());
    };

    const goNextMultiple = (count: number) => {
        pagination.goNextMultiple(count);
        setCurrentPage(pagination.getCurrentPage());
    };

    const goPreviousMultiple = (count: number) => {
        pagination.goPreviousMultiple(count);
        setCurrentPage(pagination.getCurrentPage());
    };

    return {
        currentPage,
        totalPages,
        goNext,
        goPrevious,
        goNextMultiple,
        goPreviousMultiple,
        setPage: goToPage
    };
};
