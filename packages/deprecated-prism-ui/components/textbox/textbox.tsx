import * as React from 'react';

export type TextBoxProps = {
  invalid?: boolean;
  disabled?: boolean;
  placeholderText?: string;
  dataTestId?: String;
  required?: boolean;
  label?: string;
  infoText?: string;
  errorText?: string;
  change?(event: any): any;
  maxChars: number;
};

export type TextBoxState = {
  isClicked: boolean;
  numChars: number;
  invalid: boolean;
};

export default class TextBox extends React.Component<
  TextBoxProps,
  TextBoxState
> {
  constructor(props: TextBoxProps) {
    super(props);
    this.state = {
      isClicked: false,
      numChars: 0,
      invalid: this.props.invalid,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  static defaultProps: TextBoxProps = {
    invalid: false,
    disabled: false,
    placeholderText: 'Some text here',
    dataTestId: '1',
    required: false,
    label: 'Input lable',
    infoText: 'Informational text',
    errorText: 'Error text',
    change: () => console.log('Typing...'),
    maxChars: 250,
  };

  charError() {
    let message = [];
    message.push('Your message is too long. Cut back to ');
    message.push(this.props.maxChars);
    message.push(' characters.');
    return message;
  }

  handleChange(event) {
    if (this.props.change) {
      this.props.change;
    }
    this.setState({ numChars: event.target.value.length });
  }
  public render() {
    return (
      <>
        {this.props.label && (
          <div className="psm-form__label">
            {this.props.label}
            {!this.props.required && (
              <span className="psm-form__optional">Optional</span>
            )}
            {this.props.maxChars && (
              <span
                className={`psm-form__max-chars ${this.props.maxChars <
                  this.state.numChars && 'psm-form__max-chars--error'}`}
              >
                {`${this.state.numChars}/${this.props.maxChars} Characters`}
              </span>
            )}
          </div>
        )}
        <textarea
          className={`psm-form__textarea ${
            this.state.isClicked ? 'psm-form__textarea--clicked' : ''
          } ${
            this.props.invalid || this.props.maxChars < this.state.numChars
              ? 'psm-form__textarea--error'
              : ''
          }`}
          disabled={this.props.disabled}
          onBlur={() => this.setState({ isClicked: false })}
          onChange={this.handleChange}
          onClick={() => this.setState({ isClicked: true })}
          placeholder={this.props.placeholderText}
          required={this.props.required}
        />
        {(this.props.infoText || this.props.errorText) && (
          <div
            className={`${
              this.props.invalid || this.props.maxChars < this.state.numChars
                ? 'psm-form__error-text'
                : 'psm-form__info-text'
            }`}
          >
            {this.props.invalid
              ? this.props.errorText
              : this.props.maxChars < this.state.numChars
              ? this.charError()
              : this.props.infoText}
          </div>
        )}
      </>
    );
  }
}
