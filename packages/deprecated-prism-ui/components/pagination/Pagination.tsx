import React, { useState, useEffect } from 'react';
import Icon from '../icon/Icon';
import './pagination.scss';

interface PaginationProps {
  children: string[];
  'data-testid'?: string;
  defaultPage: number;
  itemsPerPage: number;
  onClick?: (event: React.MouseEvent) => void;
}

interface PaginationState {
  currentPage: number;
  paginatedItems: string[];
  visiblePages: number[];
}

const Pagination = ({
  children,
  'data-testid': testid = 'pagination',
  defaultPage = 0,
  itemsPerPage = 10,
  onClick = () => {},
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<
    PaginationState['currentPage']
  >(defaultPage);
  const [paginatedItems, setPaginatedItems] = useState<
    PaginationState['paginatedItems']
  >(children.slice(0, itemsPerPage));

  const calculateTotalPages = () => {
    const totalPages = Math.ceil(children.length / itemsPerPage);
    return [...Array(totalPages).keys()];
  };

  const totalPageCount = calculateTotalPages().length;

  // This function is the root of the entire component, returning an array of five numbers
  // that become the actual pagination buttons. Typically, we want currentPage to be the center page button,
  // but there are four cases where that isn't true– when currentPage is one or two positions away from the
  // beginning or end of the total pages, we want currentPage to change position to keep the total number of
  // page buttons the same, leading to the two conditional statements.

  function getVisiblePages() {
    if (currentPage <= 2) {
      return [...Array(totalPageCount).keys()].slice(0, 5);
    }
    if (currentPage >= totalPageCount - 2) {
      return [...Array(totalPageCount).keys()].slice(
        totalPageCount - 5,
        totalPageCount,
      );
    }
    return [
      currentPage - 2,
      currentPage - 1,
      currentPage,
      currentPage + 1,
      currentPage + 2,
    ];
  }

  function checkForValidPageNumber(pageToSet: number) {
    if (pageToSet < 0) {
      return 0;
    }
    if (pageToSet > totalPageCount) {
      return totalPageCount - 1;
    }
    return pageToSet;
  }

  const [visiblePages, setVisiblePages] = useState<
    PaginationState['visiblePages']
  >(getVisiblePages());

  function updateDisplay(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    pageNumber: number,
  ) {
    setCurrentPage(checkForValidPageNumber(pageNumber));
    setPaginatedItems(
      children.slice(pageNumber * itemsPerPage, pageNumber * itemsPerPage + 10),
    );
    setVisiblePages(getVisiblePages());
    if (onClick && event) onClick(event);
  }

  function handleLeft(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    updateDisplay(event, Math.abs(currentPage - 1));
  }

  function handleRight(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    updateDisplay(event, Math.abs(currentPage + 1));
  }

  function buttonifyPageNumbers() {
    const buttonifiedPages = visiblePages.map(pageNumber => (
      <button
        type="button"
        className={pageNumber === currentPage ? 'psm-pagination__active' : ''}
        onClick={event => updateDisplay(event, pageNumber)}
      >
        {pageNumber + 1}
      </button>
    ));

    // adds "... {button to last page}" if in range of the last page
    if (currentPage + 3 < totalPageCount) {
      buttonifiedPages.push(
        <>
          ...
          <button
            type="button"
            onClick={event => updateDisplay(event, totalPageCount)}
          >
            {totalPageCount}
          </button>
        </>,
      );
    }

    // adds "1 ... if out of range of the first page"
    if (Math.abs(currentPage) >= 3) {
      buttonifiedPages.splice(
        0,
        1,
        <>
          <button type="button" onClick={event => updateDisplay(event, 0)}>
            1
          </button>
          ...
        </>,
      );
    }
    return buttonifiedPages;
  }

  useEffect(() => {
    updateDisplay(null, currentPage);
    setVisiblePages(getVisiblePages());
    buttonifyPageNumbers();
  }, [currentPage, children]);

  return (
    <>
      <ol data-testid={testid} className="psm-pagination__content">
        {paginatedItems.map(item => (
          <li>{item}</li>
        ))}
      </ol>
      <span className="psm-pagination__navigation">
        <span
          className="psm-pagination__arrow"
          aria-label="left arrow"
          onClick={handleLeft}
          onKeyDown={() => handleLeft}
          role="button"
          tabIndex={0}
        >
          <Icon
            iconName="small-left"
            height="16px"
            width="16px"
            fill="#707070"
          />
        </span>
        {buttonifyPageNumbers()}
        <span
          aria-label="right arrow"
          className="psm-pagination__arrow"
          onClick={handleRight}
          onKeyDown={() => handleRight}
          role="button"
          tabIndex={0}
        >
          <Icon
            iconName="small-right"
            height="16px"
            width="16px"
            fill="#707070"
          />
        </span>
      </span>
    </>
  );
};

export default Pagination;
