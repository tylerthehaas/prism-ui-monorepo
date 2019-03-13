import * as React from "react";

export type DropdownProps = {
  dropdownMenu: Array<{ label?: string; action(event: any): any }>;
  primary?: boolean;
  disabled?: boolean;
  label?: string;
  showMenu?: boolean;
  idPrefix?: string;
  dataTestId: String;
};

type DropdownState = {
  primary: boolean;
  disabled: boolean;
  showMenu?: boolean;
  isFocused: number;
  idPrefix: string;
};

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props) {
    super(props);
    this.state = {
      primary: this.props.primary,
      disabled: this.props.disabled,
      showMenu: this.props.showMenu,
      isFocused: 0,
      idPrefix:
        this.props.idPrefix ||
        Math.random()
          .toString(36)
          .substring(7),
    };
  }
  static defaultProps: DropdownProps = {
    dropdownMenu: [
      {
        label: "Menu Item",
        action: () => {
          console.log("Menu Item Clicked");
        },
      },
      {
        label: "Menu Item",
        action: () => {
          console.log("Menu Item Clicked");
        },
      },
      {
        label: "Menu Item",
        action: () => {
          console.log("Menu Item Clicked");
        },
      },
    ],
    primary: true,
    disabled: false,
    label: "Button",
    showMenu: false,
    idPrefix: null,
    dataTestId: null,
  };

  componentWillReceiveProps(props: DropdownProps) {
    const { disabled, primary } = props;

    this.setState({
      disabled,
      primary,
    });
  }

  handleClick() {
    this.setState({ showMenu: !this.state.showMenu });
  }
  menuClick = (a, index) => {
    this.props.dropdownMenu[index].action(a.action);
    this.handleClick();
  };

  blurFunction = e => {
    var currentTarget = e.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({ showMenu: false });
      }
    }, 0);
    return;
  };

  escFunction = event => {
    if (event.keyCode === 27) {
      this.setState({ showMenu: false });
      document.getElementById(`${this.state.idPrefix}-dropdown-button`).focus();
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
    document.addEventListener("keypress", this.handleEnter, false);
    document.addEventListener("keydown", this.handleArrow, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
    document.removeEventListener("keypress", this.handleEnter, false);
    document.removeEventListener("keydown", this.handleArrow, false);
  }

  handleArrow = event => {
    if (event.keyCode === 38) {
      if (this.state.isFocused !== 0) {
        this.setState({ isFocused: this.state.isFocused - 1 });
      } else {
        this.setState({ isFocused: this.props.dropdownMenu.length - 1 });
      }
      document
        .getElementById(
          `${this.state.idPrefix}-menu-item-${this.state.isFocused}`,
        )
        .focus();
    }

    if (event.keyCode === 40) {
      if (this.state.isFocused + 1 !== this.props.dropdownMenu.length) {
        this.setState({ isFocused: this.state.isFocused + 1 });
      } else {
        this.setState({ isFocused: 0 });
      }
      document
        .getElementById(
          `${this.state.idPrefix}-menu-item-${this.state.isFocused}`,
        )
        .focus();
    }
  };

  handleEnter = event => {
    if (event.charCode === 13) {
      if (this.state.isFocused <= this.props.dropdownMenu.length) {
        this.menuClick(
          this.props.dropdownMenu[this.state.isFocused],
          this.state.isFocused,
        );
        document
          .getElementById(`${this.state.idPrefix}-dropdown-button`)
          .focus();
      } else {
        setTimeout(
          () =>
            document
              .getElementById(`${this.state.idPrefix}-menu-item-0`)
              .focus(),
          0,
        );
      }
    }
  };

  public render() {
    return (
      <>
        <div
          onBlur={this.blurFunction}
          style={{ width: "fit-content", display: "inline-block" }}
        >
          {
            <button
              aria-labelledby={this.props.label}
              className={`psm-dropdown${this.props.primary ? "--primary" : ""}`}
              data-testid={this.props.dataTestId}
              disabled={this.props.disabled}
              id={`${this.state.idPrefix}-dropdown-button`}
              onClick={() => this.handleClick()}
              onFocus={() =>
                this.setState({ isFocused: this.props.dropdownMenu.length + 1 })
              }
            >
              {this.props.label}
            </button>
          }
          {this.state.showMenu && (
            <>
              <div />
              <div className="psm-dropdown__menu">
                <ul className="psm-dropdown__ul">
                  {this.props.dropdownMenu.map((a, index) => {
                    return (
                      <li
                        className="psm-dropdown__li"
                        data-testid={`${this.props.dataTestId}-option-${index}`}
                        id={`${this.state.idPrefix}-menu-item-${index}`}
                        key={index}
                        onClick={() => this.menuClick(a, index)}
                        onFocus={() => this.setState({ isFocused: index })}
                        role="menuitem"
                        tabIndex={0}
                      >
                        {a.label}
                      </li>
                    );
                  })}
                </ul>
              </div>{" "}
            </>
          )}
        </div>
      </>
    );
  }
}
