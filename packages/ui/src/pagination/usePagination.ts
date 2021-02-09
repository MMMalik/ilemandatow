import * as React from "react";
import { pagesToShow } from "./pagesToShow";

interface PaginationConfig {
  /**
   * Total number of items.
   */
  items: number;
  /**
   * Items per page.
   */
  perPage: number;
  /**
   * Starts numeration.
   */
  first: number;
  /**
   * Callback fired upon page change.
   */
  onChange?: (page: number) => void;
}

export const usePagination = ({
  items,
  perPage,
  first,
  onChange,
}: PaginationConfig) => {
  const pages = Math.ceil(items / perPage);
  const [currentPage, setCurrentPage] = React.useState(first);

  const setPage = (page: number) => {
    setCurrentPage(page);
  };

  const increasePage = () => {
    setCurrentPage((p) => (p === pages ? p : p + 1));
  };

  const decreasePage = () => {
    setCurrentPage((p) => (p === first ? p : p - 1));
  };

  React.useEffect(() => {
    if (onChange) {
      onChange(currentPage);
    }
  }, [currentPage, onChange]);

  return {
    pages,
    currentPage,
    setPage,
    increasePage,
    decreasePage,
    show: pagesToShow(first, currentPage, pages),
  };
};
