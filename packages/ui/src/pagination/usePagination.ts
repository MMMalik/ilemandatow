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
   * Initially active page.
   */
  initPage: number;
  /**
   * Starts numeration.
   */
  first: number;
  /**
   * Callback invoked upon page change. It's not fired for the initial selection.
   */
  onChange?: (page: number) => void;
}

export const usePagination = ({
  items,
  perPage,
  initPage,
  first,
  onChange,
}: PaginationConfig) => {
  const pages = Math.ceil(items / perPage);
  const [changed, setChanged] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(initPage);

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
    if (onChange && changed) {
      onChange(currentPage);
    }
    setChanged(true);
  }, [currentPage, changed, onChange]);

  return {
    pages,
    currentPage,
    setPage,
    increasePage,
    decreasePage,
    show: pagesToShow(first, currentPage, pages),
  };
};
