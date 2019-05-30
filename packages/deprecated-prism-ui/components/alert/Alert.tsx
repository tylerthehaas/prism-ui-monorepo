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
                <i
                  aria-label={'Close alert'}
                  className="psm-icon-simple-remove"
                  data-testid={`${this.props.dataTestId}-icon`}
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
