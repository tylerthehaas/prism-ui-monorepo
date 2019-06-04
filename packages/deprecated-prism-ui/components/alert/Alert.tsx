import * as React from 'react';
import './alert.scss';
import Icon from '../core/svg-icons';

export enum Type {
  error = 'psm-alert--error',
  info = 'psm-alert--info',
  success = 'psm-alert--success',
  warning = 'psm-alert--warning',
}

type AlertProps = {
  dataTestId?: String;
  type: Type;
  onDismiss?(event: any): any;
};

export default class Alert extends React.Component<AlertProps, any> {
  constructor(props: AlertProps) {
    super(props);
    this.state = {};
  }

  static defaultProps: AlertProps = {
    type: Type.info,
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleEnter, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleEnter, false);
  }

  handleEnter = event => {
    if (
      event.charCode === 13 &&
      document.activeElement === document.getElementById('alert-nub-close')
    ) {
      this.props.onDismiss(event);
    }
  };

  changeSvgColor = alertType => {
    console.log(alertType);
    switch (alertType) {
      case 'psm-alert--warning':
        return '#bd5316';
      case 'psm-alert--error':
        return '#d70e16';
      case 'psm-alert--info':
        return '#0066ed';
      default:
        return '#0f7d52';
    }
  };

  render() {
    return (
      <>
        {!this.state.dismissed && (
          <div
            className={`psm-alert ${this.props.type}`}
            data-testid={this.props.dataTestId}
            role="alert"
          >
            <div
              className={`psm-alert__not-nub`}
              id={`alert-not-nub`}
              onClick={() => {
                document.getElementById('alert-not-nub').blur();
              }}
              tabIndex={0}
            >
              <span>{this.props.children}</span>
            </div>
            <div
              className={`psm-alert__nub `}
              id={`alert-nub-close`}
              onClick={() => {
                this.props.onDismiss;
                document.getElementById('alert-nub-close').blur();
              }}
              tabIndex={0}
            >
              <div className="psm-alert__close ">
                <span
                  aria-label={'Close alert'}
                  className="psm-icon-simple-remove"
                  data-testid={`${this.props.dataTestId}-icon`}
                >
                  <Icon
                    name="close"
                    height="16px"
                    width="16px"
                    // fill={
                    //   this.props.type == 'psm-alert--warning'
                    //     ? '#bd5316'
                    //     : this.props.type == 'psm-alert--error'
                    //       ? '#d70e16'
                    //       : this.props.type == 'psm-alert--info'
                    //         ? '#0066ed'
                    //         : '#0f7d52'
                    // }
                    fill={this.changeSvgColor(this.props.type)}
                  />
                </span>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
