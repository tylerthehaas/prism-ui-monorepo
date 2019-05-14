import * as React from 'react';
import './list.scss';

export enum Sizes {
  'Small' = 'sm',
  'Medium' = 'md',
  'Large' = 'lg',
}

export type ListProps = {
  rows?: Array<{
    columns?: Array<{
      text: string;
      isButton: boolean;
      onClick?(event?: any): any;
      buttonPrimary?: boolean;
    }>;
  }>;
  size: Sizes;
  dataTestId?: String;
  idPrefix?: string;
};

type ListState = {
  size: string;
  isFocusedColumn: number;
  isFocusedRow: number;
  idPrefix: string;
};

export default class List extends React.Component<ListProps, ListState> {
  constructor(props: ListProps) {
    super(props);
    this.state = {
      size: this.props.size,
      isFocusedColumn: 0,
      isFocusedRow: 0,
      idPrefix:
        this.props.idPrefix ||
        Math.random()
          .toString(36)
          .substring(7),
    };
  }

  static defaultProps: ListProps = {
    size: Sizes.Large,
    rows: [],
    idPrefix: null,
  };

  handleArrow = event => {
    let columnsLength = this.props.rows[this.state.isFocusedRow].columns.length;
    if (event.keyCode === 38) {
      if (this.state.isFocusedRow !== 0) {
        this.setState({ isFocusedRow: this.state.isFocusedRow - 1 });
      } else {
        this.setState({ isFocusedRow: this.props.rows.length - 1 });
      }
    }

    if (event.keyCode === 40) {
      if (this.state.isFocusedRow + 1 !== this.props.rows.length) {
        this.setState({ isFocusedRow: this.state.isFocusedRow + 1 });
      } else {
        this.setState({ isFocusedRow: 0 });
      }
    }

    if (event.keyCode === 39) {
      if (this.state.isFocusedColumn + 1 !== columnsLength) {
        this.setState({ isFocusedColumn: this.state.isFocusedColumn + 1 });
      } else {
        this.setState({ isFocusedColumn: 0 });
      }
    }

    if (event.keyCode === 37) {
      if (this.state.isFocusedColumn > 0) {
        this.setState({ isFocusedColumn: this.state.isFocusedColumn - 1 });
      } else {
        this.setState({ isFocusedColumn: columnsLength - 1 });
      }
    }

    if (event.keyCode !== 9) {
      document
        .getElementById(
          `${this.state.idPrefix}-row-${this.state.isFocusedRow}-column-div-${
            this.state.isFocusedColumn
          }`,
        )
        .focus();
    }
  };
  handleEnter = event => {
    if (event.charCode === 13) {
      if (
        this.props.rows[this.state.isFocusedRow].columns[
          this.state.isFocusedColumn
        ].isButton
      ) {
        this.props.rows[this.state.isFocusedRow].columns[
          this.state.isFocusedColumn
        ].onClick;
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleArrow, false);
    document.addEventListener('keypress', this.handleEnter, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleArrow, false);
    document.removeEventListener('keypress', this.handleEnter, false);
  }

  componentWillReceiveProps(props: ListProps) {
    this.setState({ size: props.size });
  }

  public render() {
    return (
      <>
        <div>
          <div className="psm-list" role="list">
            {this.props.rows.map((r, i) => {
              return (
                <ul
                  className={`psm-list__row psm-list__row-${
                    Sizes[this.props.size]
                  }`}
                  id={`${this.state.idPrefix}-row-div-${i}`}
                  key={i}
                  onFocus={() => this.setState({ isFocusedRow: i })}
                >
                  {r.columns.map((c, index) => {
                    if (index === 0) {
                      if (!c.isButton) {
                        return (
                          <li
                            className="psm-list__row__lead"
                            data-testid={`${this.props.dataTestId}-${
                              this.state.idPrefix
                            }-row-${i}-column-${index}`}
                            id={`${
                              this.state.idPrefix
                            }-row-${i}-column-div-${index}`}
                            key={index}
                            role="listitem"
                            tabIndex={0}
                          >
                            {c.text}
                          </li>
                        );
                      } else {
                        return (
                          <li
                            aria-label={`${c.text}-button`}
                            key={index}
                            role="listitem"
                            tabIndex={0}
                          >
                            <button
                              className="psm-button--primary"
                              data-testid={`${this.props.dataTestId}-${
                                this.state.idPrefix
                              }-row-${i}-column-${index}`}
                              id={`${
                                this.state.idPrefix
                              }-row-${i}-column-div-${index}`}
                              key={index}
                              onClick={c.onClick}
                              tabIndex={-1}
                            >
                              {c.text}
                            </button>
                          </li>
                        );
                      }
                    } else {
                      if (!c.isButton) {
                        return (
                          <li
                            data-testid={`${this.props.dataTestId}-${
                              this.state.idPrefix
                            }-row-${i}-column-${index}`}
                            id={`${
                              this.state.idPrefix
                            }-row-${i}-column-div-${index}`}
                            key={index}
                            role="listitem"
                            tabIndex={0}
                          >
                            {c.text}
                          </li>
                        );
                      } else {
                        return (
                          <li
                            aria-label={`${c.text} button`}
                            key={index}
                            role="listitem"
                            tabIndex={0}
                          >
                            <button
                              aria-labelledby={c.text}
                              className="psm-button--primary"
                              data-testid={`${this.props.dataTestId}-${
                                this.state.idPrefix
                              }-row-${i}-column-${index}`}
                              id={`${
                                this.state.idPrefix
                              }-row-${i}-column-div-${index}`}
                              key={index}
                              onClick={c.onClick}
                              tabIndex={-1}
                            >
                              {c.text}
                            </button>
                          </li>
                        );
                      }
                    }
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
