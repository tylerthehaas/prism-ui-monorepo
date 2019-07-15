import React from 'react';
import FocusLock from 'react-focus-lock';
import Input, { iconType } from '../input/Input';
import Textbox from '../textbox/textbox';

export interface FormInput {
  'data-testid'?: string;
  disabled?: boolean;
  errorText?: string;
  icon?: iconType;
  infoText?: string;
  invalid?: boolean;
  label?: string;
  maxChars: number;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  placeholderText?: string;
  primary?: boolean;
  required?: boolean;
  secondary?: FormInput;
  type: 'input' | 'textarea' | 'button';
}

export interface FormProps {
  content: FormInput[];
  'data-testid'?: string;
  description?: string;
  header?: string;
  formInput: FormInput;
}

export const Form = ({
  content = [
    {
      maxChars: 250,
      onClick: () => alert('you clicked'),
      type: 'input',
    },
  ],
  'data-testid': testid = '',

  description = 'Some description here',
  header = 'Form Header',
}: FormProps) => {
  return (
    <FocusLock>
      {header && (
        <div
          className={`psm-form psm-form__header`}
          id={`form-header-${testid}`}
        >
          {header}
        </div>
      )}
      {description && (
        <div className={`psm-form psm-form__paragraph`}>{description}</div>
      )}
      {content.map((content: FormInput, index) => {
        if (content.type['input'] && !content.secondary) {
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
        if (content.type['textarea'] && !content.secondary) {
          return (
            <Textbox
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
        if (content.type['button'] && !content.secondary) {
          return (
            <button
              className={`psm-button psm-form psm-form__button ${!content.primary &&
                'psm-form__button--secondary'}`}
              key={`${index}-button`}
              onClick={content.onClick}
            >
              {content.label}
            </button>
          );
        }
      })}
    </FocusLock>
  );
};

export default Form;
