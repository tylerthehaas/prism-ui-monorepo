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
  shouldUpdate: boolean;
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
    if (currentPage <= 2 || totalPageCount < 5) {
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

  const [visiblePages, setVisiblePages] = useState<
    PaginationState['visiblePages']
  >(getVisiblePages());

  function updateDisplay(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    pageNumber: number,
  ) {
    setCurrentPage(pageNumber);
    setVisiblePages(getVisiblePages());
    setPaginatedItems(
      children.slice(pageNumber * itemsPerPage, pageNumber * itemsPerPage + 10),
    );
    if (onClick && event) onClick(event);
  }

  function handleLeft(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    updateDisplay(event, currentPage - 1);
  }

  function handleRight(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    updateDisplay(event, currentPage + 1);
  }

  function buttonifyPageNumbers() {
    const buttonifiedPages = visiblePages.map(pageNumber => {
      if (pageNumber === currentPage) {
        return (
          <button
            type="button"
            aria-current="page"
            aria-label={`Current Page, page ${pageNumber + 1}`}
            className="psm-pagination__button psm-pagination__active"
            key={pageNumber + 1}
            onClick={event => updateDisplay(event, pageNumber)}
          >
            {pageNumber + 1}
          </button>
        );
      }
      return (
        <button
          type="button"
          aria-label={`Go to page ${pageNumber + 1}`}
          className="psm-pagination__button"
          key={pageNumber + 1}
          onClick={event => updateDisplay(event, pageNumber)}
        >
          {pageNumber + 1}
        </button>
      );
    });
    // adds "1 ... if out of range of the first page"
    if (currentPage > 2 && totalPageCount > 5) {
      buttonifiedPages.splice(
        0,
        0,
        <>
          <button
            type="button"
            aria-label="Page 1"
            className="psm-pagination__button"
            onClick={event => updateDisplay(event, 0)}
          >
            1
          </button>
          ...
        </>,
      );
    }
    // adds "... {button to last page}" if in range of the last page
    if (currentPage + 3 < totalPageCount && totalPageCount > 5) {
      buttonifiedPages.push(
        <>
          ...
          <button
            type="button"
            aria-label={`Go to page ${totalPageCount - 1}`}
            className="psm-pagination__button"
            onClick={event => updateDisplay(event, totalPageCount - 1)}
          >
            {totalPageCount}
          </button>
        </>,
      );
    }
    return buttonifiedPages;
  }

  useEffect(() => {
    updateDisplay(null, currentPage);
  }, [children, currentPage]);

  return (
    <nav aria-label="Pagination Navigation" role="navigation">
      <ol data-testid={testid} className="psm-pagination__content">
        {paginatedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
      <span className="psm-pagination__navigation">
        <button
          type="button"
          className="psm-pagination__button psm-pagination__arrow"
          aria-label="Go to previous page"
          onClick={currentPage !== 0 ? handleLeft : () => {}}
          onKeyDown={() => handleLeft}
          role={currentPage !== 0 ? 'button' : undefined}
          tabIndex={currentPage === 0 ? -1 : 0}
        >
          <Icon
            iconName="small-left"
            height="16px"
            width="16px"
            fill={currentPage !== 0 ? '#707070' : '#e0e0e0'}
          />
        </button>
        {buttonifyPageNumbers()}
        <button
          aria-label="Go to next page"
          type="button"
          className="psm-pagination__button psm-pagination__arrow"
          onClick={currentPage < totalPageCount - 1 ? handleRight : () => {}}
          onKeyDown={() => handleRight}
          role={currentPage < totalPageCount - 1 ? 'button' : undefined}
          tabIndex={currentPage < totalPageCount - 1 ? 0 : undefined}
        >
          <Icon
            iconName="small-right"
            height="16px"
            width="16px"
            fill={currentPage < totalPageCount - 1 ? '#707070' : '#e0e0e0'}
          />
        </button>
      </span>
    </nav>
  );
};

export default Pagination;
