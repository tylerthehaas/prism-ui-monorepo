import React, { useState } from 'react';
import './pagination.scss';
import Icon from '../../components/Icon/Icon';

type PaginationProps = {
  pagesShown?: number;
  numPages: number;
  onClick(event: any): any;
  defaultPage?: number;
  dataTestId?: String;
};
type PaginationState = {
  active: number;
  pages: number;
};

const Pagination = ({
  pagesShown = 7,
  numPages = 10,
  onClick = () => console.log('page changed'),
  defaultPage = 1,
  dataTestId = '',
}: PaginationProps) => {
  const [active, setActive] = useState<PaginationState['active']>(defaultPage);
  const [pages, setPages] = useState<PaginationState['pages']>(pagesShown);

  function handlePageChange(index, action) {
    action(action);
    setActive(index);
  }

  function handleLeftArrow() {
    if (active - 1 !== 0) {
      setActive(active - 1);
    } else {
      setActive(1);
    }
  }

  function handleRightArrow() {
    if (active + 1 < numPages) {
      setActive(active + 1);
    } else {
      setActive(numPages);
    }
  }

  function findActive(index) {
    if (index + 1 === active) {
      return 'psm-pagination__active';
    } else {
      return '';
    }
  }

  function handleDisplay() {
    setPages(Math.floor((pagesShown - 2) / 2));
    let paginate = [];
    let ellipsisCountReset = false;
    for (let i = 2; i < numPages; i++) {
      if (i < pagesShown && active - pages < i) {
        console.log(paginate);
        if (i === active) {
          paginate.push(
            <li
              className="psm-pagination__number psm-pagination__active"
              data-testid={`${dataTestId}-${i}`}
              id={`pagination-number-${i}`}
              key={i}
              onClick={() => handlePageChange(i, onClick)}
            >
              {i}
            </li>,
          );
        } else {
          paginate.push(
            <li
              className="psm-pagination__number"
              data-testid={`${dataTestId}-${i}`}
              id={`pagination-number-${i}`}
              key={i}
              onClick={() => handlePageChange(i, onClick)}
            >
              {i}
            </li>,
          );
        }
      } else if (active - i > pages && !ellipsisCountReset) {
        paginate.push(<li className="psm-pagination__elipses" />);
        let count = active - pages - 1;
        if (i < active - pagesShown) {
          count = active - pagesShown + 1;
        }
        i = count;
        ellipsisCountReset = true;
      } else if (i - pages > active) {
        paginate.push(<li className="psm-pagination__elipses" key={i} />);
        return paginate;
      } else if (i === active) {
        paginate.push(
          <li
            className="psm-pagination__number psm-pagination__active"
            data-testid={`${dataTestId}-${i}`}
            id={`pagination-number-${i}`}
            key={i}
            onClick={() => handlePageChange(i, onClick)}
          >
            {i}
          </li>,
        );
      } else if (i >= active - pages || i > numPages - (pagesShown - 1)) {
        paginate.push(
          <li
            className="psm-pagination__number"
            data-testid={`${dataTestId}-${i}`}
            id={`pagination-number-${i}`}
            key={i}
            onClick={() => handlePageChange(i, onClick)}
          >
            {i}
          </li>,
        );
      }
    }
    return paginate;
  }
  return (
    <>
      <ul className="psm-pagination">
        <li
          className="psm-svg-icon-small-left"
          data-testid={`${dataTestId}-left-arrow`}
          key="pagination-left-arrow"
          onClick={() => handleLeftArrow()}
        >
          <Icon name="small-left" height="16px" width="16px" fill="#707070" />
        </li>
        <li
          className={`psm-pagination__number ${
            1 === active ? 'psm-pagination__active' : ''
          }`}
          data-testid={`${dataTestId}-1`}
          onClick={() => handlePageChange(1, onClick)}
        >
          1
        </li>
        {handleDisplay()}
        <li
          className={`psm-pagination__number ${
            numPages === active ? 'psm-pagination__active' : ''
          }`}
          data-testid={`${dataTestId}-${numPages}`}
          id={`pagination-number-${numPages}`}
          onClick={() => handlePageChange(numPages, onClick)}
        >
          {numPages}
        </li>
        <li
          className="psm-svg-icon-small-right"
          data-testid={`${dataTestId}-right-arrow`}
          key="pagination-right-arrow"
          onClick={() => handleRightArrow()}
        >
          <Icon name="small-right" height="16px" width="16px" fill="#707070" />
        </li>
      </ul>
    </>
  );
};

export default Pagination;
