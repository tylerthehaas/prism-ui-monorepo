import * as React from 'react';
import './modal.scss';
import Icons from '../core/svg-icons';

export type ModalProps = {
  children: any;
  title: string;
  actions?: Array<{
    label: string;
    primary: boolean;
    onClick(event: any): any;
    position?: string;
    shouldCloseModal?: boolean;
  }>;
  show?: boolean;
  dataTestId?: String;
  onClose?(): any;
  modalButtonId: string;
};

type ModalState = {
  show?: boolean;
  isFocused: number;
};

export default class Modal extends React.Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      show: this.props.show,
      isFocused: 0,
    };
  }

  componentWillReceiveProps(props: ModalProps) {
    this.setState({ show: props.show });
  }

  handleClick = button => event => {
    if (button.shouldCloseModal) {
      this.setState(
        pState => ({ show: !pState.show }),
        () => document.getElementById(this.props.modalButtonId).focus(),
      );
    }
    return button.onClick();
  };

  escFunction(event) {
    if (event.keyCode === 27) {
      this.setState({ show: false });
      document.getElementById(this.props.modalButtonId).focus();
    }
  }
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
    document.addEventListener('keypress', this.handleEnter, false);
    document.addEventListener('keydown', this.handleTab, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
    document.removeEventListener('keypress', this.handleEnter, false);
    document.removeEventListener('keydown', this.handleTab, false);
  }

  handleTab = event => {
    if (this.state.show) {
      if (event.keyCode === 9) {
        event.preventDefault();
      }
      if (this.props.actions && event.keyCode === 9 && event.shiftKey) {
        if (this.state.isFocused === this.props.actions.length - 1) {
          this.setState({ isFocused: this.props.actions.length + 3 });
        } else if (this.state.isFocused < this.props.actions.length - 1) {
          this.setState({ isFocused: this.state.isFocused + 1 });
        } else if (this.state.isFocused === this.props.actions.length + 1) {
          this.setState({ isFocused: 0 });
        } else if (this.state.isFocused > this.props.actions.length) {
          this.setState({ isFocused: this.state.isFocused - 1 });
        }
      }
      if (this.props.actions && event.keyCode === 9 && !event.shiftKey) {
        if (this.state.isFocused === 0) {
          this.setState({ isFocused: this.props.actions.length + 1 });
        } else if (this.state.isFocused < this.props.actions.length) {
          this.setState({ isFocused: this.state.isFocused - 1 });
        } else if (this.state.isFocused === this.props.actions.length + 3) {
          this.setState({ isFocused: this.props.actions.length - 1 });
        } else if (this.state.isFocused > this.props.actions.length) {
          this.setState({ isFocused: this.state.isFocused + 1 });
        }
      }
      document.getElementById(`button-${this.state.isFocused}`).focus();
    }
  };

  handleEnter = event => {
    if (this.props.actions && event.charCode === 13) {
      if (this.state.isFocused === this.props.actions.length + 1) {
        this.setState({ show: false });
      } else if (this.state.isFocused < this.props.actions.length) {
        this.handleClick(this.props.actions[this.state.isFocused]);
      }
    }
    if (!this.state.show) {
      document.getElementById(this.props.modalButtonId).focus();
    }
  };

  public render() {
    return (
      <>
        {this.state.show && (
          <div
            aria-expanded={this.props.show}
            aria-labelledby={this.props.title}
            aria-live="assertive"
            aria-modal="true"
            className={`psm-modal--${this.state.show ? 'show' : 'hide'}`}
            role="dialog"
          >
            <div className="psm-modal__content" style={{ width: '80%' }}>
              <span
                aria-label={'Close'}
                className="psm-modal__close"
                data-testid={`${this.props.dataTestId}-close-icon`}
                id={`button-${
                  this.props.actions ? this.props.actions.length + 1 : 1
                }`}
                onClick={() => {
                  this.setState({ show: false });
                  this.props.onClose();
                }}
                onFocus={() =>
                  this.setState({
                    isFocused: this.props.actions
                      ? this.props.actions.length + 1
                      : 1,
                  })
                }
                tabIndex={0}
              >
                <Icons name="close" height="16px" width="16px" fill="#707070" />
              </span>

              <h3
                className="psm-modal__header"
                id={`button-${
                  this.props.actions ? this.props.actions.length + 2 : 2
                }`}
                onFocus={() =>
                  this.setState({
                    isFocused: this.props.actions
                      ? this.props.actions.length + 2
                      : 2,
                  })
                }
                style={{ outline: 'none' }}
                tabIndex={0}
              >
                {this.props.title}
              </h3>
              <div
                className="psm-modal__body"
                id={`button-${
                  this.props.actions ? this.props.actions.length + 3 : 3
                }`}
                onFocus={() =>
                  this.setState({
                    isFocused: this.props.actions
                      ? this.props.actions.length + 3
                      : 3,
                  })
                }
                style={{ position: 'relative', height: 250, outline: 'none' }}
                tabIndex={0}
              >
                {this.props.children}
              </div>
              <div className="psm-modal__footer">
                {this.props.actions &&
                  this.props.actions.length !== 0 &&
                  this.props.actions.map((a, index) => {
                    return (
                      <button
                        className={`psm-button${a.primary ? '--primary' : ''}`}
                        data-testid={`${this.props.dataTestId}-button-${index}`}
                        id={`button-${index}`}
                        key={index}
                        onClick={this.handleClick(a)}
                        onFocus={() => this.setState({ isFocused: index })}
                        style={{
                          float:
                            a.position && a.position === 'left'
                              ? 'left'
                              : 'right',
                          margin: 4,
                        }}
                        tabIndex={0}
                      >
                        {a.label}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}
