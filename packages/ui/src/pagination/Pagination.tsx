import * as React from "react";
import PaginationArrow from "./PaginationArrow";
import PaginationMore from "./PaginationMore";
import PaginationPage from "./PaginationPage";
import { usePagination } from "./usePagination";

export interface PaginationProps {
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
   * Callback invoked when a page is changed. It's not invoked for the initial selection.
   */
  onChange?: (page: number) => void;
  /**
   * Hides component if only one page is to be shown.
   */
  hideOnSinglePage?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  items,
  perPage,
  initPage,
  onChange,
  hideOnSinglePage,
}) => {
  const {
    pages,
    setPage,
    currentPage,
    decreasePage,
    increasePage,
    show,
  } = usePagination({
    perPage,
    items,
    initPage,
    first: 1,
    onChange,
  });

  const handleClick = (page: number) => () => {
    setPage(page);
  };

  if (pages <= 1 && hideOnSinglePage) {
    return null;
  }

  return (
    <div className="flex noselect">
      <PaginationArrow icon="angle-left" onClick={decreasePage} />
      {show.map((page, i) => {
        const key = `${page}_${i}`;
        if (page === "more") {
          return <PaginationMore key={key} />;
        }
        return (
          <PaginationPage
            key={key}
            page={page}
            isActive={page === currentPage}
            onClick={handleClick(page)}
          />
        );
      })}
      <PaginationArrow icon="angle-right" onClick={increasePage} />
    </div>
  );
};

export default Pagination;
