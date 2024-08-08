export default class Pagination {
    private totalItems: number;
    private itemsPerPage: number;
    private currentPage: number;
    private totalPages: number;
    private loop: boolean;

    constructor(totalItems: number, itemsPerPage: number, loop: boolean = false) {
        this.totalItems = totalItems;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 1;
        this.totalPages = Math.ceil(totalItems / itemsPerPage);
        this.loop = loop;
    }

    goToPage(page: number) {
        if (this.loop) {
            if (page < 1) {
                this.currentPage = this.totalPages;
            } else if (page > this.totalPages) {
                this.currentPage = 1;
            } else {
                this.currentPage = page;
            }
        } else {
            if (page < 1) {
                this.currentPage = 1;
            } else if (page > this.totalPages) {
                this.currentPage = this.totalPages;
            } else {
                this.currentPage = page;
            }
        }
    }

    goNext() {
        this.goToPage(this.currentPage + 1);
    }

    goPrevious() {
        this.goToPage(this.currentPage - 1);
    }

    goNextMultiple(count: number) {
        this.goToPage(this.currentPage + count);
    }

    goPreviousMultiple(count: number) {
        this.goToPage(this.currentPage - count);
    }

    getCurrentPage() {
        return this.currentPage;
    }

    getTotalPages() {
        return this.totalPages;
    }
}
