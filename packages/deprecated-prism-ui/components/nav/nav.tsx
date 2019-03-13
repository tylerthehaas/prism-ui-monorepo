import * as React from "react";

type NavProps = {
  tabs: Array<{ tab: string; action?(event: any): any }>;
  active?: number;
  navigate(event: any, index: number, value: string): any;
};
type NavState = {
  active: number;
  isFocused: number;
  isTab: boolean;
};

export class Nav extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
    this.state = {
      active: this.props.active ? this.props.active : 0,
      isFocused: null,
      isTab: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (index, t, event) => {
    this.setState({ active: index, isTab: false, isFocused: null });
    if (t.action) t.action();
    if (this.props.navigate) this.props.navigate(event, index, t.tab);
  };

  handleEnter = event => {
    if (event.charCode === 13 && this.state.isFocused !== null) {
      let value = this.props.tabs[this.state.isFocused];
      this.handleClick(this.state.isFocused, value, value.action);
      this.setState({ isTab: false });
    }
  };
  handleFocus = event => {
    if (event.keyCode === 9) {
      this.setState({ isTab: true });
    }
  };
  componentDidMount() {
    document.addEventListener("keypress", this.handleEnter, false);
    document.addEventListener("keydown", this.handleFocus, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleEnter, false);
    document.removeEventListener("keydown", this.handleFocus, false);
  }

  public render() {
    return (
      <ul className="psm-nav">
        {this.props.tabs.map((t, index) => {
          return (
            <li
              aria-labelledby={t.tab}
              className={`psm-nav__tab ${
                this.state.active === index ? "psm-nav__active" : ""
              }`}
              key={index}
              onClick={event => {
                this.handleClick(index, t, event);
              }}
              onFocus={() => {
                this.setState({ isFocused: index });
              }}
              style={{ outline: this.state.isTab ? null : "none" }}
              tabIndex={0}
            >
              <span>{t.tab}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
