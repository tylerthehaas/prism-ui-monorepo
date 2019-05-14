import * as React from 'react';
import './button.scss';

export type ButtonProps = {
  onClick?(event: any): any;
  dropdownActions?: Array<{ label?: string; onClick(event: any): any }>;
  dropdown?: boolean;
  primary?: boolean;
  small?: boolean;
  disabled?: boolean;
  label?: string;
  showMenu?: boolean;
  linkRef: string;
  dataTestId: String;
};

type ButtonState = {
  dropdown: boolean;
  primary: boolean;
  small: boolean;
  disabled: boolean;
  linkRef: string;
  showMenu?: boolean;
};

export default class Button extends React.Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      dropdown: this.props.dropdown,
      primary: this.props.primary,
      small: this.props.small,
      disabled: this.props.disabled,
      linkRef: this.props.linkRef,
      showMenu: this.props.showMenu,
    };
    this.handleDropDown = this.handleDropDown.bind(this);
  }
  static defaultProps: ButtonProps = {
    dropdown: false,
    primary: true,
    small: false,
    disabled: false,
    label: 'Button',
    showMenu: false,
    linkRef: null,
    dataTestId: null,
  };
  componentWillReceiveProps(props: ButtonProps) {
    const { dropdown, primary, small, disabled, linkRef, showMenu } = props;

    this.setState({
      dropdown,
      primary,
      small,
      disabled,
      linkRef,
    });
  }

  handleClick = action => event => {
    if (action) {
      action(event);
    }
  };

  handleDropDown = event => {
    if (!this.state.showMenu) {
    }
    this.setState(state => ({
      showMenu: !state.showMenu,
    }));
  };
  dropdownMenuClick = action => event => {
    this.handleDropDown(event);
    action(event);
  };
  buttonClassName = () => {
    var buttonString = ['psm-'];
    {
      this.props.dropdown
        ? buttonString.push('dropdown')
        : buttonString.push('button psm-button');
    }
    {
      this.props.primary
        ? buttonString.push('--primary')
        : buttonString.push(' ');
    }
    {
      this.props.small &&
        !this.props.dropdown &&
        buttonString.push(' psm-button--small');
    }
    return buttonString.join('');
  };

  public render() {
    return (
      <>
        <div
          className="buttons"
          onBlur={() => this.setState({ showMenu: false })}
        >
          {(!this.props.linkRef && (
            <button
              aria-labelledby={this.props.label}
              className={this.buttonClassName()}
              data-testid={this.props.dataTestId}
              disabled={this.props.disabled}
              onClick={
                this.props.dropdown ? this.handleDropDown : this.props.onClick
              }
            >
              {this.props.label}
            </button>
          )) || (
            <a
              aria-labelledby={this.props.label}
              className={this.buttonClassName()}
              data-testid={this.props.dataTestId}
              href={this.props.linkRef}
              onClick={this.handleDropDown}
            >
              {this.props.label}
            </a>
          )}
          {this.state.showMenu && this.props.dropdown && (
            <>
              <div />
              <div className="psm-dropdown__menu">
                <ul className="psm-dropdown__ul">
                  {this.props.dropdownActions.map((a, index) => {
                    return (
                      <li
                        aria-labelledby={a.label}
                        className="psm-dropdown__li"
                        data-testid={`${this.props.dataTestId}-option-${index}`}
                        key={index}
                        onClick={this.dropdownMenuClick(a.onClick)}
                        tabIndex={0}
                      >
                        {a.label}
                      </li>
                    );
                  })}
                </ul>
              </div>{' '}
            </>
          )}
        </div>
      </>
    );
  }
}
