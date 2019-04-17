import * as React from "react";

export type PaginationProps = {
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

export class Pagination extends React.Component<
  PaginationProps,
  PaginationState
> {
  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      active: this.props.defaultPage,
      pages: this.props.pagesShown,
    };
  }
  static defaultProps: PaginationProps = {
    pagesShown: 7,
    numPages: 10,
    onClick: () => console.log("page changed"),
    defaultPage: 1,
  };
  handlePageChange = (index, action) => {
    action(action);
    this.setState({ active: index });
  };
  handleLeftArrow() {
    if (this.state.active - 1 !== 0) {
      this.setState({ active: this.state.active - 1 });
    } else {
      this.setState({ active: 1 });
    }
  }
  handleRightArrow() {
    if (this.state.active + 1 < this.props.numPages) {
      this.setState({ active: this.state.active + 1 });
    } else {
      this.setState({ active: this.props.numPages });
    }
  }
  findActive(index) {
    if (index + 1 === this.state.active) {
      return "psm-pagination__active";
    } else {
      return "";
    }
  }

  componentWillReceiveProps(props: PaginationProps) {
    this.setState({ pages: props.pagesShown });
  }

  handleDisplay() {
    let pages = Math.floor((this.props.pagesShown - 2) / 2);
    let paginate = [];
    let ellipsisCountReset = false;
    for (let i = 2; i < this.props.numPages; i++) {
      if (i < this.props.pagesShown && this.state.active - pages < i) {
        if (i === this.state.active) {
          paginate.push(
            <li
              className="psm-pagination__number psm-pagination__active"
              data-testid={`${this.props.dataTestId}-${i}`}
              id={`pagination-number-${i}`}
              key={i}
              onClick={() => this.handlePageChange(i, this.props.onClick)}
            >
              {i}
            </li>,
          );
        } else {
          paginate.push(
            <li
              className="psm-pagination__number"
              data-testid={`${this.props.dataTestId}-${i}`}
              id={`pagination-number-${i}`}
              key={i}
              onClick={() => this.handlePageChange(i, this.props.onClick)}
            >
              {i}
            </li>,
          );
        }
      } else if (this.state.active - i > pages && !ellipsisCountReset) {
        paginate.push(<li className="psm-pagination__elipses" />);
        let count = this.state.active - pages - 1;
        if (i < this.state.active - this.props.pagesShown) {
          count = this.state.active - this.props.pagesShown + 1;
        }
        i = count;
        ellipsisCountReset = true;
      } else if (i - pages > this.state.active) {
        paginate.push(<li className="psm-pagination__elipses" key={i} />);
        return paginate;
      } else if (i === this.state.active) {
        paginate.push(
          <li
            className="psm-pagination__number psm-pagination__active"
            data-testid={`${this.props.dataTestId}-${i}`}
            id={`pagination-number-${i}`}
            key={i}
            onClick={() => this.handlePageChange(i, this.props.onClick)}
          >
            {i}
          </li>,
        );
      } else if (
        i >= this.state.active - pages ||
        i > this.props.numPages - (this.props.pagesShown - 1)
      ) {
        paginate.push(
          <li
            className="psm-pagination__number"
            data-testid={`${this.props.dataTestId}-${i}`}
            id={`pagination-number-${i}`}
            key={i}
            onClick={() => this.handlePageChange(i, this.props.onClick)}
          >
            {i}
          </li>,
        );
      }
    }
    return paginate;
  }
  public render() {
    return (
      <>
        <ul className="psm-pagination">
          <li
            className="psm-icon-small-left"
            data-testid={`${this.props.dataTestId}-left-arrow`}
            key="pagination-left-arrow"
            onClick={() => this.handleLeftArrow()}
          />
          <li
            className={`psm-pagination__number ${
              1 === this.state.active ? "psm-pagination__active" : ""
            }`}
            data-testid={`${this.props.dataTestId}-1`}
            onClick={() => this.handlePageChange(1, this.props.onClick)}
          >
            1
          </li>
          {this.handleDisplay()}
          <li
            className={`psm-pagination__number ${
              this.props.numPages === this.state.active
                ? "psm-pagination__active"
                : ""
            }`}
            data-testid={`${this.props.dataTestId}-${this.props.numPages}`}
            id={`pagination-number-${this.props.numPages}`}
            onClick={() =>
              this.handlePageChange(this.props.numPages, this.props.onClick)
            }
          >
            {this.props.numPages}
          </li>
          <li
            className="psm-icon-small-right"
            data-testid={`${this.props.dataTestId}-right-arrow`}
            key="pagination-right-arrow"
            onClick={() => this.handleRightArrow()}
          />
        </ul>
      </>
    );
  }
}
