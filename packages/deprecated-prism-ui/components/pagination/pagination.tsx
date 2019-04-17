import * as React from "react";

export type PaginationProps = {
  pagesShown?: number;
  numPages: number;
  onClick(event: number): void;
  defaultPage?: number;
  ["data-testid"]?: String;
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
    action(index);
    this.setState({ active: index });
  };
  handleLeftArrow() {
    const { active } = this.state;
    const { onClick } = this.props;
    if (active - 1 !== 0) {
      const newActive = active - 1;
      onClick(newActive);
      this.setState({ active: newActive });
    } else {
      onClick(1);
      this.setState({ active: 1 });
    }
  }
  handleRightArrow() {
    const { active } = this.state;
    const { onClick, numPages } = this.props;
    if (active + 1 < this.props.numPages) {
      const newActive = active + 1;
      onClick(newActive);
      this.setState({ active: newActive });
    } else {
      onClick(numPages);
      this.setState({ active: numPages });
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
              data-testid={`${this.props["data-testid"]}-${i}`}
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
              data-testid={`${this.props["data-testid"]}-${i}`}
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
            data-testid={`${this.props["data-testid"]}-${i}`}
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
            data-testid={`${this.props["data-testid"]}-${i}`}
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
      <ul className="psm-pagination">
        <li
          className="psm-icon-small-left"
          data-testid={`${this.props["data-testid"]}-left-arrow`}
          onClick={() => this.handleLeftArrow()}
        />
        <li
          className={`psm-pagination__number ${
            1 === this.state.active ? "psm-pagination__active" : ""
          }`}
          data-testid={`${this.props["data-testid"]}-1`}
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
          data-testid={`${this.props["data-testid"]}-${this.props.numPages}`}
          onClick={() =>
            this.handlePageChange(this.props.numPages, this.props.onClick)
          }
        >
          {this.props.numPages}
        </li>
        <li
          className="psm-icon-small-right"
          data-testid={`${this.props["data-testid"]}-right-arrow`}
          onClick={() => this.handleRightArrow()}
        />
      </ul>
    );
  }
}
