import * as React from 'react';
import './input.scss';
import './input-group.scss';
import Icons from '../core/svg-icons';

export type InputProps = {
  invalid?: boolean;
  disabled?: boolean;
  placeholderText?: string;
  dataTestId?: String;
  required?: boolean;
  label?: string;
  infoText?: string;
  errorText?: string;

  change?(event: any): any;
  icon?: {
    name: string;
    position: string;
    onClick(event: any): any;
  };
};
export enum iconType {
  'zoom-in',
  'trophy',
  'trash',
  'tail-up',
  'tail-right',
  'tail-left',
  'tail-down',
  'tag',
  'support',
  'stre-up',
  'stre-right',
  'stre-left',
  'stre-down',
  'small-up',
  'small-triangle-up',
  'small-triangle-right',
  'small-triangle-left',
  'small-triangle-down',
  'small-right',
  'small-left',
  'small-down',
  'single-content',
  'single-body',
  'simple-remove',
  'simple-add',
  'share',
  'settings-gear',
  'send',
  'select',
  'refresh',
  'print',
  'agenda',
  'menu-dots',
  'menu',
  'lock',
  'image',
  'heartbeat',
  'heart',
  'group',
  'goal',
  'flag-points',
  'favorite',
  'eye',
  'email',
  'desktop',
  'cloud-download',
  'check',
  'chat',
  'chat-alt',
  'chart-bar',
  'cart-simple',
  'calendar-add',
  'calendar',
  'bullet-list',
  'block-down',
  'bell',
  'attach',
  'archive-check',
  'alert-circle-i',
  'add',
  'avatar-check',
  'edit-note',
  'one-on-one',
  'play-screen',
  'power',
  'conversation',
}

export type InputState = {
  isClicked: boolean;
  isRequired: boolean;
};

export default class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      isClicked: false,
      isRequired: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  static defaultProps: InputProps = {
    invalid: false,
    required: true,
    disabled: false,
    placeholderText: 'Input Text Here',
    label: null,
    icon: null,
    infoText: null,
    errorText: null,
  };

  componentWillReceiveProps(props: InputProps) {
    this.setState({ isRequired: props.invalid });
  }
  handleChange = event => {
    if (this.props.change) {
      this.props.change(event);
    }
  };
  public render() {
    return (
      <>
        {(this.props.icon && (
          <>
            {this.props.label && (
              <div className="psm-form__label">
                {this.props.label}
                {!this.props.required && (
                  <span className="psm-form__optional">Optional</span>
                )}
              </div>
            )}
            <div
              className={`psm-input-${this.props.icon.position ||
                'trailing'}-icon`}
            >
              <span
                aria-label={`${this.props.icon.name} icon`}
                className={`psm-icon-svg-${this.props.icon.name}`}
                data-testid={`${this.props.dataTestId}-icon`}
                onClick={this.props.icon.onClick}
                style={{
                  cursor: this.props.icon.onClick ? 'pointer' : 'default',
                }}
                tabIndex={0}
              >
                <Icons
                  name={this.props.icon.name}
                  height="16px"
                  width="16px"
                  fill="#707070"
                  className={`svg-icon-${this.props.icon.name}`}
                />
              </span>
              <input
                aria-labelledby="Input field"
                className={`psm-input ${
                  this.state.isClicked ? 'psm-input--clicked' : ''
                } ${this.props.invalid ? 'psm-input--error' : ''}`}
                data-testid={this.props.dataTestId}
                disabled={this.props.disabled}
                onBlur={() => this.setState({ isClicked: false })}
                onChange={this.handleChange}
                onClick={() => this.setState({ isClicked: true })}
                placeholder={this.props.placeholderText}
                required={this.props.required}
                type="text"
              />
            </div>
            {(this.props.infoText || this.props.errorText) && (
              <div
                className={`${
                  this.props.invalid
                    ? 'psm-form__error-text'
                    : 'psm-form__info-text'
                }`}
              >
                {this.props.invalid
                  ? this.props.errorText
                  : this.props.infoText}
              </div>
            )}
          </>
        )) || (
          <>
            {this.props.label && (
              <div className="psm-form__label">
                {this.props.label}
                {!this.props.required && (
                  <span className="psm-form__optional">Optional</span>
                )}
              </div>
            )}
            <input
              aria-labelledby="Input field"
              className={`psm-input${
                this.props.invalid ? ' psm-input--active' : ''
              } ${this.state.isClicked ? 'psm-input--clicked' : ''} ${
                this.props.invalid ? 'psm-input--error' : ''
              }`}
              data-testid={this.props.dataTestId}
              disabled={this.props.disabled}
              onBlur={() => this.setState({ isClicked: false })}
              onChange={this.handleChange}
              onClick={() => this.setState({ isClicked: true })}
              placeholder={this.props.placeholderText}
              required={this.props.required}
              type="text"
            />
            {(this.props.infoText || this.props.errorText) && (
              <div
                className={`${
                  this.props.invalid
                    ? 'psm-form__error-text'
                    : 'psm-form__info-text'
                }`}
              >
                {this.props.invalid
                  ? this.props.errorText
                  : this.props.infoText}
              </div>
            )}
          </>
        )}
      </>
    );
  }
}
