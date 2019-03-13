import * as React from "react";

type TableAction = {
  label: string;
  action(event: any): any;
  primary?: boolean;
};

type TableProps = {
  box?: boolean;
  title?: string;
  actions?: Array<TableAction>;
  columns: Array<{ label: string; key: string }>;
  data: Array<{ [key: string]: string }>;
  idPrefix?: string;
};

export class Table extends React.Component<TableProps, any> {
  constructor(props: TableProps) {
    super(props);

    this.state = {
      isFocusedRow: 0,
      isFocusedColumn: 0,
      idPrefix:
        this.props.idPrefix ||
        Math.random()
          .toString(36)
          .substring(7),
    };
  }

  static defaultProps: TableProps = {
    box: false,
    columns: [],
    data: [{}],
    idPrefix: null,
  };

  // handleArrow = event => {
  //   let columnsLength = this.props.columns.length;
  //   if (event.keyCode <= 40 && event.keyCode >= 37) {
  //     if (event.keyCode === 38) {
  //       if (this.state.isFocusedRow !== -1) {
  //         this.setState({ isFocusedRow: this.state.isFocusedRow - 1 });
  //       } else {
  //         this.setState({ isFocusedRow: this.props.data.length - 1 });
  //       }
  //     }

  //     if (event.keyCode === 40) {
  //       if (this.state.isFocusedRow + 1 !== this.props.data.length) {
  //         this.setState({ isFocusedRow: this.state.isFocusedRow + 1 });
  //       } else {
  //         this.setState({ isFocusedRow: -1 });
  //       }
  //     }

  //     if (event.keyCode === 39) {
  //       if (this.state.isFocusedColumn + 1 !== columnsLength) {
  //         this.setState({ isFocusedColumn: this.state.isFocusedColumn + 1 });
  //       } else {
  //         this.setState({ isFocusedColumn: 0 });
  //       }
  //     }

  //     if (event.keyCode === 37) {
  //       if (this.state.isFocusedColumn > 0) {
  //         this.setState({ isFocusedColumn: this.state.isFocusedColumn - 1 });
  //       } else {
  //         this.setState({ isFocusedColumn: columnsLength - 1 });
  //       }
  //     }

  //     document
  //       .getElementById(
  //         `${this.state.idPrefix}-column-${this.state.isFocusedColumn}-row-${
  //           this.state.isFocusedRow
  //         }`,
  //       )
  //       .focus();
  //   }
  // };

  // componentDidMount() {
  //   document.addEventListener("keydown", this.handleArrow, false);
  // }
  // componentWillUnmount() {
  //   document.removeEventListener("keydown", this.handleArrow, false);
  // }

  public render() {
    const table = (
      <>
        {this.props.title && (
          <div
            className="psm-table-header"
            id={`${this.state.idPrefix}-table-header`}
          >
            {this.props.title}
          </div>
        )}
        {this.props.actions &&
          this.props.actions.length !== 0 && (
            <div className="psm-table__actions">
              {this.props.actions.map((a, index) => {
                return (
                  <a
                    className={`psm-button${a.primary ? "--primary" : ""}`}
                    key={index}
                    onClick={a.action}
                  >
                    {a.label}
                  </a>
                );
              })}
            </div>
          )}
        <table className="psm-table">
          <thead>
            <tr className="psm-table__tr">
              {this.props.columns.map((c, index) => {
                return (
                  <th
                    id={`${this.state.idPrefix}-column-${index}-row-${-1}`}
                    key={index}
                  >
                    {c.label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((row, rowIdx) => {
              return (
                <tr className="psm-table__tr" key={rowIdx}>
                  {this.props.columns.map((c, columnIdx) => {
                    return (
                      <td
                        className="psm-table__td"
                        id={`${
                          this.state.idPrefix
                        }-column-${columnIdx}-row-${rowIdx}`}
                        key={columnIdx}
                        onFocus={() =>
                          this.setState({
                            isFocusedRow: rowIdx,
                            isFocusedColumn: columnIdx,
                          })
                        }
                      >
                        {row[c.key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
    return (
      <>
        {this.props.box ? <div className="psm-table--box">{table}</div> : table}
      </>
    );
  }
}
