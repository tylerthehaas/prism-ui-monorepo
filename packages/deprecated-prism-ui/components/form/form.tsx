import * as React from 'react';
import Input from '../input/Input';
import TextBox from '../textbox/textbox';

export enum InputTypes {
  'input' = 'input',
  'textarea' = 'textarea',
  'button' = 'button',
}

export type FormInput = {
  type: InputTypes;
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
  onClick(event: any): any;
  primary?: boolean;
  maxChars: number;
  secondary?: FormInput;
};

export type FormProps = {
  header?: string;
  description?: string;
  content: Array<FormInput>;
};

export default class Form extends React.Component<FormProps> {
  constructor(props: FormProps) {
    super(props);
  }

  static defaultProps: FormProps = {
    header: 'Form Header',
    description: 'Some description here',
    content: [],
  };

  public render() {
    return (
      <>
        <div>
          {this.props.header && (
            <div className={`psm-form psm-form__header`} id={`form-header`}>
              {this.props.header}
            </div>
          )}
          {this.props.description && (
            <div className={`psm-form psm-form__paragraph`}>
              {this.props.description}
            </div>
          )}
          {this.props.content.map((content, index) => {
            if (content.type === InputTypes.input && !content.secondary) {
              return (
                <Input
                  disabled={content.disabled}
                  errorText={content.errorText}
                  icon={
                    content.icon && {
                      name: content.icon.name,
                      position: content.icon.position,
                      onClick: content.icon.onClick,
                    }
                  }
                  infoText={content.infoText}
                  invalid={content.invalid}
                  label={content.label}
                  placeholderText={content.placeholderText}
                  required={content.required}
                />
              );
            }
            if (content.type === InputTypes.textarea && !content.secondary) {
              return (
                <TextBox
                  disabled={content.disabled}
                  errorText={content.errorText}
                  infoText={content.infoText}
                  invalid={content.invalid}
                  label={content.label}
                  maxChars={content.maxChars}
                  placeholderText={content.placeholderText}
                  required={content.required}
                />
              );
            }
            if (content.secondary) {
              return (
                <div className={`psm-form__input-half`}>
                  <div>
                    <Input
                      disabled={content.disabled}
                      errorText={content.errorText}
                      icon={
                        content.icon && {
                          name: content.icon.name,
                          position: content.icon.position,
                          onClick: content.icon.onClick,
                        }
                      }
                      infoText={content.infoText}
                      invalid={content.invalid}
                      label={content.label}
                      placeholderText={content.placeholderText}
                      required={content.required}
                    />
                  </div>
                  <div>
                    <Input
                      disabled={content.secondary.disabled}
                      errorText={content.secondary.errorText}
                      icon={
                        content.secondary.icon && {
                          name: content.secondary.icon.name,
                          position: content.secondary.icon.position,
                          onClick: content.secondary.icon.onClick,
                        }
                      }
                      infoText={content.secondary.infoText}
                      invalid={content.secondary.invalid}
                      label={content.secondary.label}
                      placeholderText={content.secondary.placeholderText}
                      required={content.secondary.required}
                    />
                  </div>
                </div>
              );
            }
            if (content.type === InputTypes.button && !content.secondary) {
              return (
                <button
                  className={`psm-button psm-form psm-form__button ${!content.primary &&
                    'psm-form__button--secondary'}`}
                  //   className={`psm-button ${content.primary &&
                  //     "psm-button--primary"}`}
                  key={`${index}-button`}
                  onClick={content.onClick}
                >
                  {content.label}
                </button>
              );
            }
          })}
        </div>
      </>
    );
  }
}
