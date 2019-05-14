import * as React from 'react';
import './alert.scss';

type Link = {
  text: string;
  href: string;
};

type AlertButton = {
  text: string;
  onClick(event: any): any;
};

export enum Type {
  basic = '',
  button = 'psm-alert--btn',
  inline = 'psm-alert--inline',
}

export enum Style {
  error = 'psm-alert--error',
  info = 'psm-alert--info',
  success = 'psm-alert--success',
  warning = 'psm-alert--warning',
}

type AlertProps = {
  dataTestId?: String;
  message: string;
  style: Style;
  type: Type;
  link?: Link;
  button?: AlertButton;
};

export default class Alert extends React.Component<AlertProps, any> {
  constructor(props: AlertProps) {
    super(props);
    this.state = {
      dismissed: false,
      isFocused: false,
    };
  }

  static defaultProps: AlertProps = {
    message: 'Alert message',
    style: Style.info,
    type: Type.basic,
  };

  hasLink = () => {
    return this.props.link !== undefined && this.props.link !== null;
  };

  handleDismiss = () => {
    this.setState({ dismissed: true });
  };

  messageClass = () => {
    return this.props.type !== Type.inline ? 'psm-alert__msg' : '';
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleEnter, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleEnter, false);
  }

  handleEnter = event => {
    if (event.charCode === 13 && this.state.isFocused) {
      this.handleDismiss();
    }
  };

  render() {
    return (
      <>
        {!this.state.dismissed && (
          <div
            className={`psm-alert ${this.props.style} ${this.props.type}`}
            data-testid={this.props.dataTestId}
            role="alert"
            tabIndex={0}
          >
            <span className={`${this.messageClass()}`}>
              {this.props.message}
            </span>
            {this.hasLink() && (
              <a
                aria-labelledby={this.props.link.text}
                className="psm-alert__action"
                data-testid={`${this.props.dataTestId}-link`}
                href={this.props.link.href}
                role="link"
                tabIndex={0}
              >
                {this.props.link.text}
              </a>
            )}
            {this.props.type === Type.basic && (
              <i
                aria-label={this.state.isFocused ? 'Close button' : ''}
                className="psm-alert__close psm-icon-simple-remove"
                data-testid={`${this.props.dataTestId}-icon`}
                onClick={this.handleDismiss}
                onFocus={() => {
                  this.setState({ isFocused: true });
                }}
                tabIndex={0}
              />
            )}
            {this.props.type === Type.button && (
              <button
                aria-labelledby={this.props.button.text}
                className="psm-alert__btn psm-button"
                data-testid={`${this.props.dataTestId}-button`}
                onClick={this.props.button.onClick}
              >
                {this.props.button.text}
              </button>
            )}
          </div>
        )}
      </>
    );
  }
}
