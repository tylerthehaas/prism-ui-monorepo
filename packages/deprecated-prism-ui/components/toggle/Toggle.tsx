/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import * as React from 'react';
import './toggle.scss';

type ToggleProps = {
  default?: boolean;
  handleToggle?(event: any, on: boolean): any;
};

type ToggleState = {
  active: boolean;
  isTab: boolean;
};

export default class Toggle extends React.Component<ToggleProps, ToggleState> {
  constructor(props: ToggleProps) {
    super(props);
    this.state = {
      active: !!this.props.default,
      isTab: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleEnter = event => {
    if (event.charCode === 13 || event.charCode === 32) {
      this.handleToggle(event);
    }
  };
  handleTab = event => {
    if (event.keyCode === 9) {
      this.setState({ isTab: true });
    }
  };
  componentDidMount() {
    document.addEventListener('keypress', this.handleEnter, false);
    document.addEventListener('keydown', this.handleTab, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleEnter, false);
    document.removeEventListener('keydown', this.handleTab, false);
  }

  handleToggle = (event: any) => {
    if (this.props.handleToggle) {
      this.props.handleToggle(event, !this.state.active);
    }
    this.setState({
      active: !this.state.active,
    });
  };
  static defaultProps: ToggleProps = {
    default: false,
  };
  public render() {
    return (
      <div
        aria-label="toggle"
        className={`psm-toggle ${
          this.state.active ? 'psm-toggle--active' : 'psm-toggle--inactive'
        }`}
        data-testid={'psm-toggle'}
        onClick={(event) => {
          this.handleToggle(event);
          this.setState({ isTab: false });
        }}
        style={{ outlineStyle: this.state.isTab ? null : 'none' }}
        tabIndex={0}
      >
        <div className="psm-toggle__switch" />
      </div>
    );
  }
}
